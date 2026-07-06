import express from 'express';
import { getAllRooms, getRecenziiStatsByHotelSlug, getRoomBySlug, getRoomsByHotelSlug, getRoomsRecenziiByHotelSlug } from '../controllers/roomController.js';
const router = express.Router();
router.get('/',getAllRooms);
router.get('/:slug',getRoomsByHotelSlug);
router.get('/:slug/recenzii',getRoomsRecenziiByHotelSlug);
router.get('/:slug/recenzii/stats',getRecenziiStatsByHotelSlug);
router.get('/:slug/:roomSlug', getRoomBySlug);
export default router;