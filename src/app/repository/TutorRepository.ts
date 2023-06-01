import { ITutor } from '../interfaces/ITutor';
import TutorSchema from '../schema/TutorSchema';

import NotFoundError from '../error/NotFoundError';
import BadRequestError from '../error/BadRequestError';

class TutorRepository {
  create(payload: ITutor): ITutor {
    TutorSchema.forEach((value) => {
      if (value.id === payload.id) throw new BadRequestError('Id already exists');
    });

    TutorSchema.push(payload);
    return payload
  }

  get(): Array<ITutor> {
    return TutorSchema;
  }

  put(id: string, payload: ITutor): ITutor {
    const indexTutor = TutorSchema.findIndex(value => {
      if (value.id === Number(id)) return value
    })

    TutorSchema.forEach((value) => {
      if (value.id === payload.id && !(value.id === TutorSchema[indexTutor].id)) {
        throw new BadRequestError('Id already exists');
      }
    });

    if (indexTutor === -1) throw new NotFoundError('Id Not exists')
    TutorSchema[indexTutor] = payload
    return payload
  }

  delete(id: string) {
    const indexTutor = TutorSchema.findIndex(value => {
      if (value.id === Number(id)) return value
    })

    TutorSchema.splice(indexTutor, 1)

    if (indexTutor === -1) throw new NotFoundError('Id Not exists')
  }
}

export default new TutorRepository();
