import { Router } from 'express';
import * as genreController from '../controllers/genre_controller'

const router = Router();

router.get('/', genreController.getGenres);

export default router;