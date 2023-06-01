import { Router } from 'express';
import PetController from '../app/controller/PetController';
import createValidation from '../app/validations/pet/create';

const router = Router();

router.post('/pet/:tutorId', PetController.create);
router.put('/pet/:petId/tutor/:tutorId', PetController.put);


export default router;
