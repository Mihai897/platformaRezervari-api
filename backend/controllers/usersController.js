import pool from '../db/db.js';

export const getNotificariByUserId = async (req,res)=>{
  try{
    const {id} = req.params;

    const rezultat = await pool.query(`
        SELECT * FROM notificari

        WHERE user_id = $1
      `,[id])


    res.status(200).json(rezultat.rows)

  }
  catch(error){
    console.error(error);
    res.status(500).json({
      mesaj:"Eroare la preluarea notificarilor"
    });
  }
} 


export const getUsers = async (req,res)=>{
  try{
    const rezultat = await pool.query(`SELECT 
      u.*,
      ur.data_rezervare AS utlima_rezervare,
      ur.id AS id_ultima_rezervare,

     
      
      CASE 
      WHEN u.created_at >= NOW() - INTERVAL '7 days'
      THEN true
      ELSE false
      end AS client_nou,

      CASE WHEN u.created_at< NOW()- INTERVAL '7 days'
      THEN true
      else FALSE
      END As client_fidel,

      COALESCE(rez.numar_rezervari,0) AS numar_rezervari,
      COALESCE(rez.total_cheltuit) AS total_cheltuit,
      COALESCE(rez.rezervari,'[]'::jsonb) AS rezervari
      
      FROM users u

      

      LEFT JOIN (
        SELECT DISTINCT ON (user_id)
          id,
          user_id,
          data_rezervare
        
          FROM rezervari

        ORDER BY user_id, data_rezervare DESC
      ) ur
      ON ur.user_id = u.id

      


      LEFT JOIN (

        SELECT 
          re.user_id,
          COUNT(*) AS numar_rezervari,
          
          COALESCE (SUM(
            CASE 
              WHEN o.stare_activare_oferta = true
              THEN re.total_platit - re.total_platit*o.reducerea
              ELSE re.total_platit
             END
          
          ),0) AS total_cheltuit,
          jsonb_agg(to_jsonb(re) ||
          jsonb_build_object(
          'camera_nume',rum.title,
          'reducere_camera',o.reducerea,
          'stare_activare_oferta', o.stare_activare_oferta,
          'total_platit_cu_oferta',
          CASE
            WHEN o.stare_activare_oferta = true
            THEN re.total_platit - re.total_platit*o.reducerea
            ELSE re.total_platit
          end,
          'numele_hotel', ho.nume
          )
          
          ) AS rezervari


          FROM rezervari re

          INNER JOIN rooms rum
          ON rum.id = re.room_id

          INNER JOIN hotels ho
          ON ho.id = rum.hotel_id

          LEFT JOIN oferte_camere o
          ON o.camera_id = rum.id
          

          GROUP BY re.user_id

      )rez
      ON rez.user_id = u.id


      ORDER BY u.id ASC
      `);
    res.status(200).json(rezultat.rows)
  }
  catch(error){
    console.error(error);
    res.status(500).json({
      mesaj: "Eroare la preluare users"
    })
  }
};

export const getUserRoomsFav = async (req,res)=>{
  try{
    const {id} = req.params;
    const rezultat = await pool.query(`
      SELECT fr.*,
      r.title,
      r.image,
      r.slugs,
      h.slug,
      h.nume,
      h.locatie,
      h.facilitate,
      h.facilitate1,
      h.anulare_gratuita,
      h.data_anulare,
      o.cod_oferta,
      o.stare_activare_oferta,
      o.reducerea,
      

      COALESCE(rc.rating_mediu,0) AS rating_camera,
      COALESCE(rc.numarul_recenziilor,0) AS numarul_recenziilor,
      COALESCE(t.tarife,'[]') AS tarife
       
      
      FROM favorite_rooms fr

      INNER JOIN rooms r
      ON fr.room_id = r.id

      INNER JOIN hotels h
      ON r.hotel_id = h.id

      LEFT JOIN oferte_camere o
      ON o.camera_id = r.id

      LEFT JOIN(
        SELECT
        room_id,
        ROUND(AVG(rating),1) AS rating_mediu,
        COUNT(*) AS numarul_recenziilor
        FROM recenzii_camere rc
        GROUP BY room_id
      ) rc
       ON rc.room_id = r.id
      
       LEFT JOIN (
        SELECT 
          camera_id,
          json_agg(t.* ORDER BY t.id) AS tarife
        FROM tarife t
        GROUP BY camera_id
       ) t
        ON t.camera_id = r.id

      
      
      
      WHERE fr.user_id =$1
      order by id
      `,[id])

    res.status(200).json(rezultat.rows)

  }
  catch(error){
    console.error(error);
    res.status(500).json({
      mesaj: "Eroare la preluarea camerelor favorite"
    })
  }
}


export const getUserHotelFav = async (req,res)=>{
  try{
    const {id} = req.params;
    const rezultat = await pool.query(`
      
      SELECT fh.*,
      h.nume,
      h.locatie,
      h.img,
      h.facilitate,
      h.facilitate1,
      h.anulare_gratuita,
      h.data_anulare,
      h.slug,
      COALESCE(rh.hotel_id,0) AS hotel_id,

      COALESCE(rh.rating_mediu,0) AS rating_hotel,
      COALESCE(rh.total_recenzii,0) AS total_recenzii
      
      
      FROM favorite_hotels fh

      INNER JOIN hotels h
      ON fh.hotel_id = h.id

      LEFT JOIN (
        SELECT
        r.hotel_id,
        ROUND(AVG(rc.rating),1) AS rating_mediu,
        COUNT(*) AS total_recenzii

        FROM recenzii_camere rc
        INNER JOIN rooms r
        ON rc.room_id = r.id

        GROUP BY r.hotel_id
      ) rh
       ON rh.hotel_id = h.id

      WHERE fh.user_id = $1
      `,[id])

    res.status(200).json(rezultat.rows)
  }
  catch(error){
    console.error(error);
    res.status(500).json({
      mesaj: "Eroare la preluarea hotelurilor favorite"
    })
  }
}



export const getAllReservation = async (req,res) =>{
  try{
    const rezulatat = await pool.query(`SELECT 
      re.*,
      u.nume,
      u.prenume,
      u.email,
      u.telefon,
      u.limba_preferata,
      u.tara,
      r.title AS nume_camera,
      r.image AS image_camera,
      h.nume AS nume_hotel,
      COALESCE(o.reducerea, 0) AS reducerea,
      COALESCE(o.stare_activare_oferta, false) AS stare_activare_oferta,

      CASE 
        WHEN COALESCE(o.stare_activare_oferta,false) = true
        THEN (re.total_platit -re.total_platit*(COALESCE(o.reducerea,0)))
        ELSE re.total_platit
      END AS total_platit_final

      
      FROM rezervari re

      INNER JOIN users u
      ON re.user_id = u.id

      INNER JOIN rooms r
      ON re.room_id = r.id

      INNER JOIN hotels h
      ON r.hotel_id = h.id

      LEFT JOIN oferte_camere o
      ON r.id = o.camera_id
      
      ORDER BY re.id ASC
      `);
    res.status(200).json(rezulatat.rows);
  }
  catch(error){
    console.error(error);
    res.status(500).json({
      mesaj:"Eroare la preluarea rezervarilor"
    })
  }
};

export const getUserReservationByCod = async (req,res)=>{
  try{
    const {id,codRezervare} = req.params;
    const rezulatat = await pool.query(`
      
      SELECT rez.*,
      u.nume,
      u.prenume,
      u.email,
      u.telefon,

      r.title AS nume_camera,
      r.image,

      h.nume AS nume_hotel,
      h.locatie,
      COALESCE(o.reducerea, 0) AS reducerea,
      COALESCE(o.stare_activare_oferta, false) AS stare_activare_oferta,

      COALESCE(rc.rating_mediu,0) AS rating_mediu,
      COALESCE(rc.numarul_recenziilor,0) AS numarul_recenziilor,

      CASE 
        WHEN COALESCE(o.stare_activare_oferta,false) = true
        THEN (rez.total_platit -rez.total_platit*(COALESCE(o.reducerea,0)))
        ELSE rez.total_platit
      END AS total_platit_final
      
      
      
      
      FROM rezervari rez

      INNER JOIN users u
      ON rez.user_id = u.id

      INNER JOIN rooms r
      ON rez.room_id = r.id

      INNER JOIN hotels h
      ON r.hotel_id = h.id

      LEFT JOIN oferte_camere o
      ON r.id = o.camera_id

      LEFT JOIN (
        SELECT 
        room_id,
        ROUND(AVG(rating),1) AS rating_mediu,
        COUNT(*) AS numarul_recenziilor
        FROM recenzii_camere
        GROUP BY room_id
      ) rc
       ON rc.room_id = r.id
      
      
      WHERE rez.user_id=$1 AND rez.cod_rezervare=$2
      
      
      `,[id,codRezervare])


    res.status(200).json(rezulatat.rows[0])
  }

  catch(error){
    console.error(error);
    res.status(500).json({
      mesaj: "Eroare la preluarea rezervarii dupa cod"
    })
  }
}


export const getAllUserReservation = async (req,res)=>{
  try {
    const {id} = req.params;
    const rezultat = await pool.query(`
      SELECT rez.*,

      r.title,
      r.image,
      h.nume,
      h.locatie,
      COALESCE(o.reducerea, 0) AS reducerea,
      COALESCE(o.stare_activare_oferta, false) AS stare_activare_oferta,

      COALESCE(rc.rating_mediu,0) AS rating_mediu,
      COALESCE(rc.numar_total,0) AS numarul_recenziilor,

      CASE 
        WHEN COALESCE(o.stare_activare_oferta,false) = true
        THEN (rez.total_platit -rez.total_platit*(COALESCE(o.reducerea,0)))
        ELSE rez.total_platit
      END AS total_platit_final


      FROM rezervari rez

      INNER JOIN users u
      ON rez.user_id = u.id

      INNER JOIN rooms r
      ON rez.room_id = r.id

      INNER JOIN hotels h
      ON r.hotel_id = h.id

      LEFT JOIN oferte_camere o
      ON r.id = o.camera_id

      LEFT JOIN (
        SELECT
        room_id,
        ROUND(AVG(rating),1) AS rating_mediu,
        COUNT(*) AS numar_total
        FROM recenzii_camere
        GROUP BY room_id
      ) rc
      ON rc.room_id =r.id
      

      

      WHERE rez.user_id = $1
      ORDER BY rez.id ASC
      `,
      [id]);

      res.status(200).json(rezultat.rows)
  }
  catch(error){
    console.error(error);
    res.status(500).json({
      mesaj: "Eroare la preloarea rezervarilor utilizatorului"
    })
  }
}

export const getAllRewiewRooms = async (req,res)=>{
  try{
    const rezultat = await pool.query(`SELECT * FROM recenzii_camere`)
    res.status(200).json(rezultat.rows)
  }

  catch(error){
    console.error(error);
    res.status(500).json({
      mesaj: "Eroare la preluarea recenziilor"
    });
  }
}

export const getAllRewivewRoomsByUserId = async (req,res)=>{
  try{
    const {id} = req.params;
    const rezulatat = await pool.query(`SELECT * FROM recenzii_camere WHERE user_id=$1`,[id]);
    res.status(200).json(rezulatat.rows)
  }
  catch(error){
    console.error(error);
    res.status(500).json({
      mesaj: "Eroare la preluarea recenziilor utilizatorului"
    });
  }
}

export const getAllReviewRoomByRoomId = async (req,res)=>{
  try{
    const {room_id} = req.params;
    const rezultat = await pool.query(`SELECT * FROM recenzii_camere WHERE room_id =$1`,[room_id]);
    res.status(200).json(rezultat.rows);
  }
  catch(error){
    console.error(error);
    res.status(500).json({
      mesaj: "Eroare la preloarea recenziilor camerei"
    })
  }
  
}