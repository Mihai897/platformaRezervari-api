import pool from '../db/db.js';

export const getAllPlatformaRecenzii = async (req,res)=>{
  try{
    const rezultat = await pool.query(`SELECT 
      rp.*, 
      u.nume,
      u.prenume,
      u.poza_profil,
      u.tara,
      u.oras

      FROM recenzii_platforma rp
      INNER JOIN users u
      ON rp.user_id = u.id
      
      `);
    res.status(200).json(rezultat.rows)
  }
  catch(error){
    console.error(error);
    res.status(500).json({
      mesaj: "Eroare la preluarea recenziilor platformei"
    })
  }
};

export const getPlatformaRecenziiStats = async (req,res)=>{
  try{
    const rezulatat = await pool.query(`
      SELECT 
      ROUND(AVG(rating),1) AS recenzie_platforma,
      COUNT(*) AS total_recenzii,

      COUNT(*) FILTER (WHERE rating=5) AS stele_5,
      COUNT(*) FILTER (WHERE rating=4) AS stele_4,
      COUNT(*) FILTER (WHERE rating=3) AS stele_3,
      COUNT(*) FILTER (WHERE rating=2) AS stele_2,
      COUNT(*) FILTER (WHERE rating =1 ) AS stele_1

      FROM recenzii_platforma

      `);

    res.status(200).json(rezulatat.rows[0])
  }
  catch(error){
    console.error(error);
    res.status(500).json({
      mesaj:"Eroare la preluarea statisticilor platformei"
    })
  }
}
