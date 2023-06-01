import { Request, Response } from 'express'
import TutorService from '../service/TutorService';

class TutorController {
    create(req: Request, res: Response) {
      try {
        const result = TutorService.create(req.body);
        return res.status(201).json(result);
      } catch (error) {
        return res.status(500).json({ error });
      }
    }

    get(req: Request, res: Response) {
      try {
        const result = TutorService.get();
        return res.status(200).json(result);
      } catch (error) {
        return res.status(500).json({ error });
      }
    }

    put(req: Request, res: Response) {
      try {
        const { id } = req.params
        const result = TutorService.put(id, req.body);
        return res.status(200).json(result);
      } catch (error) {
        return res.status(500).json({ error });
      }
    }

    delete(req: Request, res: Response) {
      try {
        const { id } = req.params
        TutorService.delete(id);
        return res.status(200).json();
      } catch (error) {
        return res.status(500).json({ error });
      }
    }
}

export default new TutorController();
