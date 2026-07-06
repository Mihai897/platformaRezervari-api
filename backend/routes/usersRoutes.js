import express from 'express';
import { getAllReservation, getAllReviewRoomByRoomId, getAllRewiewRooms, getAllRewivewRoomsByUserId, getAllUserReservation, getNotificariByUserId, getUserHotelFav, getUserReservationByCod, getUserRoomsFav, getUsers } from '../controllers/usersController.js';

const router = express.Router();

router.get('/',getUsers);
router.get('/rezervari',getAllReservation);
router.get('/rezervari/:id',getAllUserReservation);
router.get('/rezervari/:id/:codRezervare',getUserReservationByCod);
router.get('/recenzii-camere/:id',getAllRewivewRoomsByUserId);
router.get('/recenzii-camere',getAllRewiewRooms);
router.get('/recenzii-camere/rooms/:room_id',getAllReviewRoomByRoomId);
router.get('/favorite-hotel/:id',getUserHotelFav)
router.get('/favorite-rooms/:id',getUserRoomsFav)
router.get('/notificari/:id',getNotificariByUserId)

export default router;