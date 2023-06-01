import { IPet } from '../interfaces/IPet';
import { ITutor } from 'app/interfaces/ITutor';
import TutorSchema from '../schema/TutorSchema';

import NotFoundError from '../error/NotFoundError';

class TutorRepository {
  create(tutorId: number, payload: IPet): ITutor {
    const tutor = TutorSchema[tutorId].pets
    if (tutor) {
      tutor.push(payload)
      TutorSchema[tutorId] = Object.assign(TutorSchema[tutorId], { pets: tutor })
    } else {
      TutorSchema[tutorId] = Object.assign(TutorSchema[tutorId], { pets: [payload] })
    }
    return TutorSchema[tutorId]
  }
  
  put(tutorId: number, petId: number, payload: IPet): ITutor {
    TutorSchema[tutorId].pets?.splice(petId, 1, payload)
    return TutorSchema[tutorId]
  }
}

export default new TutorRepository();
