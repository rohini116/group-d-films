import { Router } from 'express';
import * as filmController from '../controllers/film_controller'

const router = Router();

router.get('/trending/:day/:page', filmController.getTrendingFilms);
router.get('/trending/:day', filmController.getTrendingFilms);
router.get('/trending', filmController.getTrendingFilms);

router.get('/top_rated/:page', filmController.getTopRatedFilms);
router.get('/top_rated', filmController.getTopRatedFilms);
router.get('/by_genre', filmController.getFilmsByGenre);
router.get('/:filmId', filmController.getFilm);         // must be last else would match for the above as well

export default router;

