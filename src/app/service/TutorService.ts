import { ITutor } from '../interfaces/ITutor';
import TutorRepository from '../repository/TutorRepository';

import BadRequestError from '../error/BadRequestError'

class TutorService {
  create(payload: ITutor) {

    TutorRepository.create(payload);
  }

  get(): Array<ITutor> {
    return TutorRepository.get();
  }
}

export default new TutorService();
