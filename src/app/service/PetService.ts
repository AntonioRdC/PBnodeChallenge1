import { IPet } from '../interfaces/IPet';
import { ITutor } from 'app/interfaces/ITutor';
import TutorRepository from '../repository/TutorRepository';
import PetRepository from '../repository/PetRepository';

import BadRequestError from '../error/BadRequestError';

class PetService {
  create(tutorId: string, payload: IPet): IPet {
    const allTutors = TutorRepository.get()
    let result
    allTutors.forEach((value, index) => {
      if (value.id === Number(tutorId)) return result = PetRepository.create(index, payload);
    })
    if (!result) throw new BadRequestError('Id not exists')
    return result
  }

  put(tutorId: string, petId: string, payload: IPet): ITutor {
    const allTutors = TutorRepository.get()
    let result
    allTutors.forEach((value, index) => {
      if (value.id === Number(tutorId)) {
        const indexTutor = index
        value.pets?.forEach((value, index) => {
          if (value.id === Number(petId)) {
            result = PetRepository.put(indexTutor, index, payload);
          }
        })
      }
    })
    if (!result) throw new BadRequestError('Id not exists')
    return result
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
