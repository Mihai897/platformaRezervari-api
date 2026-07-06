import pool from "../db/db.js";

 export const getAllHotels = async (req,res)=>{
  try {
    const rezultat = await pool.query(`
      SELECT h.*,
      COALESCE(rh.rating_mediu,0) AS rating_hotel,
      COALESCE(rh.total_recenzii,0) AS total_recenzii,
      COALESCE(nc.numar_camere,0) AS numar_camere,
      COALESCE(rev.numar_rezervari,0) AS numar_rezervari,
      COALESCE(rev.total_incasat,0) AS total_incasat,
       COALESCE(phds.politici,'[]'::jsonb) AS politici_principale,
      COALESCE(fhds.facilitati,'[]'::jsonb) AS facilitati_principale
     

      FROM hotels h

      LEFT JOIN (
        SELECT ph.hotel_id,
        COALESCE(jsonb_agg(to_jsonb(ph) ||
          jsonb_build_object('detalii', 
          COALESCE(pd.detalii,'[]'::jsonb)
          )),'[]'::jsonb
        ) AS politici

        FROM politici_hotel ph

        LEFT JOIN(
          SELECT
          
          phd.politica_id,

          COALESCE(jsonb_agg(to_jsonb(phd)) ,'[]'::jsonb) AS detalii

          FROM politici_hotel_detalii phd

          GROUP BY phd.politica_id
        ) pd
        ON pd.politica_id = ph.id
        


        GROUP BY ph.hotel_id
      ) phds
       ON phds.hotel_id = h.id
       

      

      LEFT JOIN (
        SELECT 
        fh.hotel_id,
        COALESCE(jsonb_agg(to_jsonb(fh) ||
        jsonb_build_object('detalii',
        COALESCE(fd.detalii,'[]'::jsonb)
        )), '[]'::jsonb
        )  AS facilitati

        FROM facilitati_hotel fh

        LEFT JOIN (
          SELECT
          fhd.facilitate_id,
          COALESCE(jsonb_agg(to_jsonb(fhd)),'[]'::jsonb) AS detalii

          FROM facilitati_hotel_detalii fhd
          GROUP BY fhd.facilitate_id
        ) fd
        ON fd.facilitate_id = fh.id


        GROUP BY fh.hotel_id
      ) fhds
      ON fhds.hotel_id = h.id

      
      LEFT JOIN(
      SELECT
      r.hotel_id,
      ROUND(AVG(rc.rating),1) AS rating_mediu,
      COUNT(*) AS total_recenzii
      FROM recenzii_camere rc
      INNER JOIN rooms r
      ON rc.room_id = r.id
      GROUP by r.hotel_id
      ) rh
      ON rh.hotel_id =h.id


      LEFT JOIN (
        SELECT
        hotel_id,
        COUNT(*) AS numar_camere
        FROM rooms
        GROUP BY hotel_id
      ) nc
       ON nc.hotel_id = h.id

       

       LEFT JOIN (
        SELECT 
        cam.hotel_id,
        COUNT (*) AS numar_rezervari,
        SUM(
          CASE 
            WHEN o.stare_activare_oferta = true
            THEN (rez.total_platit - rez.total_platit*o.reducerea)
            ELSE rez.total_platit
          END
        ) AS total_incasat

        FROM rezervari rez
        
        INNER JOIN rooms cam
        ON rez.room_id = cam.id

        LEFT JOIN oferte_camere o
        ON cam.id = o.camera_id

        GROUP BY cam.hotel_id
       ) rev
        ON rev.hotel_id = h.id

    

      
      ORDER BY h.id ASC`);
    res.status(200).json(rezultat.rows);
  } catch(error) {
    console.error(error);
    res.status(500).json({
      mesaj: "Eroare la preluarea hotelurilor"
    });
  }
 };



 export const getHotelBySlug = async (req,res)=>{
  try{

    const {slug} =req.params;

    const rezultat = await pool.query(`SELECT * FROM hotels WHERE slug =$1`, [slug]);
    if(rezultat.rows.length ===0) {
      return res.status(404).json({
        mesaj: "Hotelul nu exista"
      });
    }
    res.status(200).json(rezultat.rows[0])
  } catch(error){
    console.error(error);
    res.status(500).json({
      mesaj: "Eroare la preluarea hotelului"
    });
  }
 };

 export const getFacilitatiHotel = async (req,res) =>{
  try {

    const {slug} = req.params;
    const rezultat = await pool.query(`
        SELECT f.*,

        COALESCE(json_agg(fd.*) FILTER (WHERE fd.id IS NOT NULL),'[]') AS detalii
        
        FROM facilitati_hotel f
        INNER JOIN hotels h
        ON f.hotel_id = h.id

        LEFT JOIN facilitati_hotel_detalii fd
        ON fd.facilitate_id = f.id
      
        WHERE h.slug = $1
        GROUP by f.id
      `, [slug]);
    
    
    
    res.status(200).json(rezultat.rows);


    } catch(error){
      console.error(error);
      res.status(500).json({
        mesaj: "Eroare la preluarea facilitatilor"
      });
    }
 };
 
 export const getPoliticiHotel = async (req,res)=>{
  try {
    const {slug} = req.params;

    const rezultat = await pool.query(`
      SELECT p.*,

      COALESCE(json_agg(pd.*) FILTER (WHERE pd.id IS NOT NULL),'[]') AS detalii
      
      
      FROM politici_hotel p



      INNER JOIN hotels h
      ON p.hotel_id = h.id


      LEFT JOIN politici_hotel_detalii pd
      ON pd.politica_id = p.id


      WHERE h.slug = $1
      GROUP BY p.id
      `,[slug]);
    
   

    res.status(200).json(rezultat.rows);
  } catch(error){
    console.error(error);
    res.status(500).json({
      mesaj:"Eroare la preluare politici"
    });
  }


 };

 