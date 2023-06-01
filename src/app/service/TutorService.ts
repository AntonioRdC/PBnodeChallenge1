import { ITutor } from '../interfaces/ITutor';
import TutorRepository from '../repository/TutorRepository';

class TutorService {
  create(payload: ITutor): ITutor {
    return TutorRepository.create(payload);
  }

  get(): Array<ITutor> {
    return TutorRepository.get();
  }

  put(id: string, payload: ITutor): ITutor  {
    return TutorRepository.put(id, payload);
  }

  delete(id: string)  {
    TutorRepository.delete(id);
  }
}

export default new TutorService();
