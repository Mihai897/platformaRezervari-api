import pool from "../db/db.js";

export const getAllRooms = async (req,res)=>{
  try{
    const rezultat  = await pool.query(`
      SELECT r.*,
      h.nume,
      h.locatie,
      COALESCE(o.reducerea,0) AS reducerea,
      COALESCE(o.stare_activare_oferta,false) AS stare_activare_oferta,
      
      ts.pret_tarif AS pret_standard,

      CASE
        WHEN o.stare_activare_oferta = true
          THEN ROUND(ts.pret_tarif-ts.pret_tarif*o.reducerea)
          ELSE ts.pret_tarif
        END AS pret_camera,
      COALESCE(img.imagini_camera,'[]'::jsonb) AS imagini,
      COALESCE(tf.tarife,'[]'::jsonb) AS tarife,
      COALESCE(fc.facilitati,'[]'::jsonb) AS facilitati,
      COALESCE(rez.rezervari,'[]'::jsonb) AS rezervari
      
      
      
      
      FROM rooms r

      

      INNER JOIN hotels h
      ON r.hotel_id = h.id

      LEFT JOIN oferte_camere o
      ON o.camera_id = r.id

      

      LEFT JOIN (
       SELECT
       i.camera_id,
       COALESCE(jsonb_agg(to_jsonb(i)),'[]'::jsonb) AS imagini_camera
       FROM imagini_camera i

       GROUP BY i.camera_id
      ) img
      ON img.camera_id = r.id


      LEFT JOIN (
        SELECT
          r.room_id,
          jsonb_agg(to_jsonb(r) ||
            jsonb_build_object(
              'nume_client',u.nume,
              'prenume_client',u.prenume,
              'email_client', u.email,
              'poza_profil', u.poza_profil
            )
          
          ) AS rezervari

        FROM rezervari r

        INNER JOIN users u
        ON u.id = r.user_id

        GROUP BY r.room_id
      ) rez
      ON rez.room_id = r.id


      LEFT JOIN (
        SELECT
          camera_id,
          pret_tarif
          FROM tarife
          WHERE titlu_tarif = 'Tarif standard'
      ) ts
       ON ts.camera_id = r.id


      LEFT JOIN (
        SELECT
        f.room_id,
        COALESCE(jsonb_agg(to_jsonb(f)),'[]'::jsonb) AS facilitati

        FROM camera_facilitati f
        GROUP BY f.room_id
      ) fc
      ON fc.room_id = r.id


      LEFT JOIN(
        SELECT
        t.camera_id,
        COALESCE(jsonb_agg(to_jsonb(t)) ,'[]'::jsonb) AS tarife
        FROM tarife t
        GROUP BY t.camera_id
      ) tf
      ON tf.camera_id = r.id

      ORDER BY r.id ASC
    `)
    
    res.status(200).json(rezultat.rows);
  }
  catch(error){
    console.error(error);
    res.status(500).json({
      mesaj: "Eroare la preluarea camerelor"
    })
  }
}


export const getRoomsRecenziiByHotelSlug = async (req,res)=>{
  try{
    const {slug} = req.params;
    const rezultat = await pool.query(`
      SELECT re.*,

      u.nume,
      u.prenume,
      u.tara,
      u.poza_profil,
      tc.name AS tip_calator,
      r.title AS nume_camera,
      rez.numar_nopti

      FROM recenzii_camere re

      INNER JOIN users u
      ON re.user_id = u.id

      LEFT JOIN tipuri_calator tc
      ON re.tip_calator_id = tc.id

      

      INNER JOIN rooms r
      ON re.room_id = r.id

      INNER JOIN hotels h
      ON r.hotel_id = h.id

      LEFT JOIN rezervari rez
      ON re.rezervare_id = rez.id

      WHERE h.slug = $1
      ORDER BY re.created_at DESC
      `,[slug]);
    
    res.status(200).json(rezultat.rows);
  }

  catch(error){
    console.error(error);
    res.status(500).json({
      mesaj:"Eroare la preluare recenzie"
    });
  }
};

export const getRecenziiStatsByHotelSlug = async (req,res)=>{
  try{
    const {slug} = req.params;
    const rezultat = await pool.query(`
        SELECT
        ROUND(AVG(rc.rating),1) AS rating_mediu,
        COUNT(*) AS total_recenzii,
        COUNT(*) FILTER (WHERE rc.rating =5) AS stele_5,
        COUNT(*) FILTER (WHERE rc.rating =4) AS stele_4,
        COUNT(*) FILTER (WHERE rc.rating =3) AS stele_3,
        COUNT(*) FILTER (WHERE rc.rating =2) AS stele_2,
        COUNT(*) FILTER (WHERE rc.rating =1) AS stele_1

        FROM recenzii_camere rc
        INNER JOIN rooms r
        ON rc.room_id = r.id

        INNER JOIN hotels h
        ON r.hotel_id = h.id
        WHERE h.slug =$1
      `,[slug]);

      res.status(200).json(rezultat.rows[0])
  }
  catch(error){
    console.error(error);
    res.status(500).json(
      {mesaj:"Eroare la preluarea ratingului"}
    )
  }
}

export const getRoomsByHotelSlug = async (req,res)=>{
  try {
    const {slug} = req.params;
    const rezultat = await pool.query(
      `SELECT r.*,
      COALESCE(o.reducerea,0) AS reducerea,
      COALESCE(o.stare_activare_oferta,false) AS stare_activare_oferta, 
      
      tf.pret_tarif,
      COALESCE(img.imagini_camera,'[]'::jsonb) AS imagini



      FROM rooms r 

      LEFT JOIN (
       SELECT
       i.camera_id,
       COALESCE(jsonb_agg(to_jsonb(i)),'[]'::jsonb) AS imagini_camera
       FROM imagini_camera i

       GROUP BY i.camera_id
      ) img
      ON img.camera_id = r.id

      INNER JOIN hotels h 
      ON r.hotel_id = h.id

      LEFT JOIN oferte_camere o
      ON o.camera_id = r.id
      

      LEFT JOIN (
        SELECT
        t.camera_id,
        t.pret_tarif

        FROM tarife t
        WHERE t.titlu_tarif = 'Tarif standard'
        
      ) tf
      ON r.id = tf.camera_id

      WHERE h.slug = $1
      `, [slug]
    );
    const camere = rezultat.rows;

    for(const camera of camere) {
      const facilitati = await pool.query(`SELECT * FROM camera_facilitati WHERE room_id =$1`,[camera.id]);

      camera.facilitati = facilitati.rows;

      const tarife = await pool.query(`SELECT * FROM tarife WHERE camera_id = $1`,[camera.id]);

      camera.tarife = tarife.rows;
      
      const oferta = await pool.query(`SELECT * FROM oferte_camere WHERE camera_id =$1 AND stare_activare_oferta=true `, [camera.id]);
      camera.oferta = oferta.rows[0] ||null;
    }
    

    res.status(200).json(camere);
  } catch(error){
    console.error(error);
    res.status(500).json({
      mesaj: 'Eroare la preluarea camerelor'
    });
  }
 };

 export const getRoomBySlug = async (req,res)=>{
  try {
    const {slug,roomSlug} = req.params;
    const rezultat = await pool.query(
      `
      SELECT r.*,
      h.slug,
      h.nume,
      h.locatie,
      COALESCE(img.imagini_camera,'[]'::jsonb) AS imagini
      
      FROM rooms r
      INNER JOIN hotels h
      ON r.hotel_id = h.id

      LEFT JOIN (
       SELECT
       i.camera_id,
       COALESCE(jsonb_agg(to_jsonb(i)),'[]'::jsonb) AS imagini_camera
       FROM imagini_camera i

       GROUP BY i.camera_id
      ) img
      ON img.camera_id = r.id

      WHERE h.slug =$1
      AND r.slugs = $2
      `, [slug,roomSlug]
    );

    const camera = rezultat.rows[0];

    const facilitati = await pool.query(`SELECT * FROM camera_facilitati WHERE room_id =$1`,[camera.id]);
    
    camera.facilitati = facilitati.rows;

    const tarife = await pool.query(`SELECT * FROM tarife WHERE camera_id =$1`,[camera.id]);

    for(const tarif of tarife.rows) {
      const beneficii = await pool.query(`SELECT * FROM beneficii_tarif where tarif_id =$1`, [tarif.id]);
      tarif.beneficii = beneficii.rows
    }

    camera.tarife = tarife.rows;

    


    const oferte = await pool.query(`SELECT * FROM oferte_camere WHERE camera_id =$1`,[camera.id]);
    camera.oferta = oferte.rows[0] ||null;

    

    const metodaPlata = await pool.query(`SELECT * FROM metoda_plata WHERE camera_id =$1`,[camera.id]);
    camera.metodaPlata = metodaPlata.rows;
   
    

    res.status(200).json(camera);
  } catch(error){
    console.error(error);
    res.status(500).json({
      mesaj: "Eroare la preluarea camerei"
    });
  }
 };