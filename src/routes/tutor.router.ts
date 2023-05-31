import { Router } from 'express';
import TutorController from '../app/controller/TutorController';
import createValidation from '../app/validations/tutor/create';

const router = Router();

router.post('/tutor', createValidation, TutorController.create);

export default router;
