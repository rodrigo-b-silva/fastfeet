import Session from '../models/Session';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    return res.status(200).json({ message: 'ok' });
  }
}

export default new SessionController();
