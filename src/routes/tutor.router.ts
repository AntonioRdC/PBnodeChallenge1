import { Router } from 'express';
import TutorController from '../app/controller/TutorController';
import createValidation from '../app/validations/tutor/create';

const router = Router();

router.post('/tutor', TutorController.create);
router.get('/tutors', TutorController.get);
router.put('/tutor/:id', TutorController.put);
router.delete('/tutor/:id', TutorController.delete);

export default router;
