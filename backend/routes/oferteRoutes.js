import express from 'express';
import { getAllActiveOffers, getAllOffers } from '../controllers/oferteController.js';
const router = express.Router();

router.get('/',getAllActiveOffers)
router.get('/toate',getAllOffers)

export default router;