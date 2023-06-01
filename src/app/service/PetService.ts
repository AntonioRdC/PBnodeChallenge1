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
}

export default new PetService();
