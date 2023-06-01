import { ITutor } from '../interfaces/ITutor';
import TutorSchema from '../schema/TutorSchema';

import NotFoundError from '../error/NotFoundError'

class TutorRepository {
  create(payload: ITutor): ITutor {
    TutorSchema.push(payload);
    return payload
  }

  get(): Array<ITutor> {
    return TutorSchema;
  }

  put(id: string, payload: ITutor): ITutor {
    let IdNotExists = true
    TutorSchema.forEach((value, index) => {
      if (value.id === Number(id)) {
        IdNotExists = false
        TutorSchema[index] = payload
        return TutorSchema[index]
      }
    })
    if (IdNotExists) throw new NotFoundError('Id Not exists')
    return payload
  }
}

export default new TutorRepository();
