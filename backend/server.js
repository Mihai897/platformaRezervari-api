import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './db/db.js';
import hotelRoutes from './routes/hotelRoutes.js';
import roomRoutes from './routes/roomRoutes.js';
import oferteRoutes from './routes/oferteRoutes.js';
import usersRoutes from './routes/usersRoutes.js';
import platformaRoutes from './routes/platformaRoutes.js';
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req,res) =>{
  res.json({
    mesaj: 'Backend functioneaza'
  });
});

app.use('/api/hotels', hotelRoutes);
app.use('/api/rooms', roomRoutes);
app.use('/api/oferte', oferteRoutes);
app.use('/api/users',usersRoutes)
app.use('/api/platforma-recenzii',platformaRoutes)


const PORT = process.env.PORT || 5000;

app.get('/api/test-db', async (req, res) => {
  try {
    const rezultat = await pool.query('SELECT NOW()');

    res.json({
      mesaj: 'Conexiune cu baza de date reusita!',
      timp: rezultat.rows[0].now,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      mesaj: 'Eroare la conectarea cu baza de date!',
    });
  }
});


app.listen(PORT, ()=>{
  console.log(`Server pornit pe portul ${PORT}`);
});