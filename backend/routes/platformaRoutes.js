import express from 'express';
import { getAllPlatformaRecenzii, getPlatformaRecenziiStats } from '../controllers/platformaController.js';

const router = express.Router();

router.get('/',getAllPlatformaRecenzii);
router.get('/stats',getPlatformaRecenziiStats);

export default router;