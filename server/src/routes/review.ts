import { Router } from 'express';
import * as reviewController from '../controllers/review_controller'

const router = Router();

router.get('/:filmId', reviewController.getAll);

export default router;