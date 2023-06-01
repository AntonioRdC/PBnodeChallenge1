import { IPet } from '../interfaces/IPet';
import { ITutor } from 'app/interfaces/ITutor';
import TutorSchema from '../schema/TutorSchema';

import NotFoundError from '../error/NotFoundError';

class TutorRepository {
  create(index: number, payload: IPet): IPet {
    const tutor = TutorSchema[index].pets
    if (tutor) {
      tutor.push(payload)
      TutorSchema[index] = Object.assign(TutorSchema[index], { pets: tutor })
    } else {
      TutorSchema[index] = Object.assign(TutorSchema[index], { pets: [payload] })
    }
    return payload
  }
}

export default new TutorRepository();
