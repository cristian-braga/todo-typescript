import { Router } from 'express';
import TaskController from './controllers/TaskController';

const router = Router();

router.get('/tasks', TaskController.index);
router.post('/tasks', TaskController.store);
router.get('/tasks/:id', TaskController.show);
router.put('/tasks/:id', TaskController.update);
router.delete('/tasks/:id', TaskController.delete);

export default router;
