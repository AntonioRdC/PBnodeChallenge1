import { ITutor } from '../interfaces/ITutor';
import TutorSchema from '../schema/TutorSchema';

import NotFoundError from '../error/NotFoundError'

class TutorRepository {
  create(payload: ITutor) {
    TutorSchema.push(payload);
  }

  get() {
    return TutorSchema;
  }

  put(id: string, payload: ITutor) {
    let IdNotExists = true
    TutorSchema.forEach((value, index) => {
      if (value.id === Number(id)) {
        IdNotExists = false
        return TutorSchema[index] = payload
      }
    })
    if (IdNotExists) throw new NotFoundError('Id Not exists')
  }
}

export default new TutorRepository();
