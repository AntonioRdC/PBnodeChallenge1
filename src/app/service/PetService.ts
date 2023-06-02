import { IPet } from '../interfaces/IPet';
import { ITutor } from 'app/interfaces/ITutor';
import TutorRepository from '../repository/TutorRepository';
import PetRepository from '../repository/PetRepository';

import BadRequestError from '../error/BadRequestError';

class PetService {
  create(tutorId: string, payload: IPet): ITutor {
    return PetRepository.create(tutorId, payload);
  }

  put(tutorId: string, petId: string, payload: IPet): ITutor {
    return PetRepository.put(tutorId, petId, payload);
  }

  delete(tutorId: string, petId: string) {
    const allTutors = TutorRepository.get()
    let result = false
    allTutors.forEach((value, index) => {
      if (value.id === Number(tutorId)) {
        const indexTutor = index
        value.pets?.forEach((value, index) => {
          if (value.id === Number(petId)) {
            result = PetRepository.delete(indexTutor, index);
          }
        })
      }
    })
    if (!result) throw new BadRequestError('Id not exists')
  }
}

export default new PetService();
