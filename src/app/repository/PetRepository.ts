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
  
  put(tutorId: string, petId: string, payload: IPet): ITutor {
    const indexTutor = TutorSchema.findIndex(value => {
      if (value.id === Number(tutorId)) return value
    })
    if (indexTutor === -1) throw new NotFoundError('Id Tutor not exists')

    const tutorPets = TutorSchema[indexTutor].pets
    if (tutorPets) {
      const indexPet = tutorPets.findIndex(value => {
        if (value.id === Number(petId)) return value
      })
      if (indexPet === -1) throw new NotFoundError('Id Pet not exists')

      tutorPets.forEach((value) => {
        if (value.id === payload.id && !(value.id === tutorPets[indexTutor].id)) {
          throw new BadRequestError('Id already exists');
        }
      });
      
      TutorSchema[indexTutor].pets?.splice(indexPet, 1, payload)
    }
    return TutorSchema[indexTutor]
  }

  delete(tutorId: string, petId: string) {
    const indexTutor = TutorSchema.findIndex(value => {
      if (value.id === Number(tutorId)) return value
    })
    if (indexTutor === -1) throw new NotFoundError('Id Tutor not exists')

    const tutorPets = TutorSchema[indexTutor].pets
    if (tutorPets) {
      const indexPet = tutorPets.findIndex(value => {
        if (value.id === Number(petId)) return value
      })
      if (indexPet === -1) throw new NotFoundError('Id Pet not exists')

      TutorSchema[indexTutor].pets?.splice(indexPet, 1)
    }
  }
}

export default new TutorRepository();
