class TutorController {
    async create(req, res) {
      try {
        return res.status(201).json({});
      } catch (error) {
        return res.status(500).json({ error });
      }
    }
}

export default new TutorController();
