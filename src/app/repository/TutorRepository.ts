import { ITutor, ITutorResponse } from '../interfaces/ITutor';
import TutorSchema from '../schema/TutorSchema';

class TutorRepository {
  create(payload: ITutor) {
    TutorSchema.push(payload);
  }
}

export default new TutorRepository();
