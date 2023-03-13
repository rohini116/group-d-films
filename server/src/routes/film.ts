import { Router } from 'express';
import * as filmController from '../controllers/film_controller'

const router = Router();

router.get('/trending/:day', filmController.getTrendingFilms);
router.get('/top_rated', filmController.getTopRatedFilms);
router.get('/:filmId', filmController.getFilm);

export default router;

