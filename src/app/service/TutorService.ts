import { ITutor } from '../interfaces/ITutor';
import TutorRepository from '../repository/TutorRepository';

import BadRequestError from '../error/BadRequestError'

class TutorService {
  create(payload: ITutor) {
    const allTutors = this.get()
    allTutors.forEach((value) => {
      if (value.id === payload.id) throw new BadRequestError('Id already exists')
    })

    TutorRepository.create(payload);
  }

  get(): Array<ITutor> {
    return TutorRepository.get();
  }

  put(id: string, payload: ITutor) {
    TutorRepository.put(id, payload);
  }
}

export default new TutorService();
