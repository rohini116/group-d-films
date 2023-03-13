import { Router } from 'express';

const router = Router();

//todo these are dummy ones for now
router.get('/', (req, res) => {
  return res.send({ message : 'todo all users'});
});

router.get('/:userId', (req, res) => {
  return res.send({ message : 'todo single user'});
});

export default router;