import { ITutor } from '../interfaces/ITutor';
import TutorSchema from '../schema/TutorSchema';

class TutorRepository {
  create(payload: ITutor) {
    TutorSchema.push(payload);
  }

  get() {
    return TutorSchema;
  }
}

export default new TutorRepository();
