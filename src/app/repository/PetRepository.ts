import { IPet } from '../interfaces/IPet';
import { ITutor } from 'app/interfaces/ITutor';
import TutorSchema from '../schema/TutorSchema';

import NotFoundError from '../error/NotFoundError';
import BadRequestError from '../error/BadRequestError';

class TutorRepository {
  create(tutorId: string, payload: IPet): ITutor {
    const indexTutor = TutorSchema.findIndex(value => {
      if (value.id === Number(tutorId)) return value
    })
    if (indexTutor === -1) throw new NotFoundError('Id Tutor Not exists')

    const tutorPets = TutorSchema[indexTutor].pets
    if (tutorPets) {
      tutorPets.findIndex(value => {
        if (value.id === payload.id) throw new BadRequestError('Id Pet exists')
      })

      tutorPets.push(payload)
      TutorSchema[indexTutor] = Object.assign(TutorSchema[indexTutor], { pets: tutorPets })
    } else {
      TutorSchema[indexTutor] = Object.assign(TutorSchema[indexTutor], { pets: [payload] })
    }

    return TutorSchema[indexTutor]
  }
  
  put(tutorId: number, petId: number, payload: IPet): ITutor {
    TutorSchema[tutorId].pets?.splice(petId, 1, payload)
    return TutorSchema[tutorId]
  }

  delete(tutorId: number, petId: number) {
    TutorSchema[tutorId].pets?.splice(petId, 1)
    return true
  }
}

export default new TutorRepository();
