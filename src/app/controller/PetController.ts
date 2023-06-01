import { Request, Response } from 'express';
import PetService from '../service/PetService';

class PetController {
    create(req: Request, res: Response) {
      try {
        const { tutorId } = req.params
        const result = PetService.create(tutorId, req.body);
        return res.status(201).json(result);
      } catch (error) {
        return res.status(500).json({ error });
      }
    }

    put(req: Request, res: Response) {
      try {
        const { petId, tutorId } = req.params
        const result = PetService.put(tutorId, petId, req.body);
        return res.status(201).json(result);
      } catch (error) {
        return res.status(500).json({ error });
      }
    }
}

export default new PetController();
