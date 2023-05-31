import { ITutorResponse, ITutor } from '../interfaces/ITutor';
import TutorRepository from '../repository/TutorRepository';

class TutorService {
  create(payload: ITutor) {
    TutorRepository.create(payload);
  }
}

export default new TutorService();
