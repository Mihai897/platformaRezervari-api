import pool from "../db/db.js";

export const getAllOffers = async (req,res)=>{
  try{
    const rezultat = await pool.query(`

      SELECT o.*,
      r.title AS nume_camera,
      r.image,
      r.scurta_descriere,
      h.locatie,
      h.nume AS nume_hotel,
      
      COALESCE(rez.total_incasat,0) AS total_incasat,
      COALESCE(rez.rezervari,'[]'::jsonb) AS rezervari


      FROM oferte_camere o

      INNER JOIN rooms r
      ON o.camera_id = r.id

      INNER JOIN hotels h
      ON r.hotel_id = h.id


      LEFT JOIN (
        SELECT
        r.room_id,

        COALESCE(SUM (
        CASE
          WHEN of.stare_activare_oferta =true
          THEN r.total_platit -r.total_platit*of.reducerea
          ELSE r.total_platit
        end
      )) AS total_incasat,

        jsonb_agg(to_jsonb(r) ||
          jsonb_build_object(
          'total_platit_cu_oferta',
          CASE
            WHEN of.stare_activare_oferta = true
            THEN r.total_platit - r.total_platit*of.reducerea
            ELSE r.total_platit
          END
          )
        ) AS rezervari

        from rezervari r

        LEFT JOIN oferte_camere of
        ON of.camera_id = r.room_id

        GROUP BY r.room_id
      
      ) rez
      ON rez.room_id = o.camera_id
      

      ORDER BY o.id ASC
 

    `)
    
    res.status(200).json(rezultat.rows)
  }

  catch(error){
    console.error(error);
    res.status(500).json({
      mesaj:"Eroarea la preluarea ofertelorr"
    })
  }
}

export const getAllActiveOffers = async (req,res)=>{
  try {
    const rezulatat = await pool.query(
      `SELECT 
      o.*,
      r.id AS room_id,
      r.title AS nume_camera,
      r.slugs,
      r.image,
      h.nume AS nume_hotel,
      h.locatie,
      h.slug,
      h.facilitate,
      h.facilitate1,
      h.anulare_gratuita,
      h.data_anulare,

      COALESCE(rc.rating_mediu,0) AS rating_mediu,
      COALESCE(rc.numarul_recenziilor,0) AS numarul_recenziilor

      FROM oferte_camere o

      INNER JOIN rooms r
      ON o.camera_id = r.id

      INNER JOIN hotels h
      ON r.hotel_id = h.id

      LEFT JOIN (
        SELECT 
        room_id,
        ROUND(AVG(rating),1) AS rating_mediu,
        COUNT(*) AS numarul_recenziilor
        FROM recenzii_camere
        GROUP BY room_id
      ) rc
       ON rc.room_id = r.id
      
      WHERE o.stare_activare_oferta = true

      ORDER BY
      COALESCE(rc.rating_mediu, 0) DESC
      `
    );

    const oferte = rezulatat.rows;
    for (const oferta of oferte ){

     


      const tarife = await pool.query(`SELECT * FROM tarife WHERE camera_id = $1`, [oferta.room_id]);
      oferta.tarife = tarife.rows

    
    }

    res.status(200).json(oferte);

  }catch(error){
    console.error(error);
    res.status(500).json({
      mesaj:"Eroare la preluare oferte"
    });
  }
};