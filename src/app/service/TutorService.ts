import { ITutor } from '../interfaces/ITutor';
import TutorRepository from '../repository/TutorRepository';

class TutorService {
  create(payload: ITutor): ITutor {
    payload.id = Number(payload.id)
    payload.zip_code = Number(payload.zip_code)

    return TutorRepository.create(payload);
  }

  get(): Array<ITutor> {
    return TutorRepository.get();
  }

  put(id: string, payload: ITutor): ITutor  {
    payload.id = Number(payload.id)
    payload.zip_code = Number(payload.zip_code)

    return TutorRepository.put(id, payload);
  }

  delete(id: string)  {
    TutorRepository.delete(id);
  }
}

export default new TutorService();
