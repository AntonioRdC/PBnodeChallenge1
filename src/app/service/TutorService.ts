import { ITutor } from '../interfaces/ITutor';
import TutorRepository from '../repository/TutorRepository';

import BadRequestError from '../error/BadRequestError'

class TutorService {
  create(payload: ITutor): ITutor {
    const allTutors = TutorRepository.get()
    allTutors.forEach((value) => {
      if (value.id === payload.id) throw new BadRequestError('Id already exists')
    })

    const result = TutorRepository.create(payload);

    return result
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
