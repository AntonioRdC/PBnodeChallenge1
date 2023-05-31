import { Request, Response } from 'express'
import TutorService from '../service/TutorService';

class TutorController {
    create(req: Request, res: Response) {
      try {
        TutorService.create(req.body);
        return res.status(201).json(req.body);
      } catch (error) {
        return res.status(500).json({ error });
      }
    }
}

export default new TutorController();
