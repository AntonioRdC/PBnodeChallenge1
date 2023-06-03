import { IPet } from '../interfaces/IPet';
import { ITutor } from 'app/interfaces/ITutor';
import PetRepository from '../repository/PetRepository';

class PetService {
  create(tutorId: string, payload: IPet): ITutor {
    payload.id = Number(payload.id)
    payload.weight = Number(payload.weight)

    return PetRepository.create(tutorId, payload);
  }

  put(tutorId: string, petId: string, payload: IPet): ITutor {
    payload.id = Number(payload.id)
    payload.weight = Number(payload.weight)

    return PetRepository.put(tutorId, petId, payload);
  }

  delete(tutorId: string, petId: string) {
    PetRepository.delete(tutorId, petId);
  }
}

export default new PetService();
