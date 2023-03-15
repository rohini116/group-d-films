import { Router } from 'express';
import * as configController from '../controllers/config_controller'

const router = Router();

router.get('/', configController.getMovieApiConfig);

export default router;