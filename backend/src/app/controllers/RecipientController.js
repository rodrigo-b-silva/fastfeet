import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const { name, street, number, complement, state, city, cep } = req.body;

    const recipient = await Recipient.create({
      name,
      street,
      number,
      complement,
      state,
      city,
      cep,
    });

    return res.status(200).json(recipient);
  }

  async index(req, res) {
    const recipients = await Recipient.findAll({});
    return res.status(200).json(recipients);
  }
}

export default new RecipientController();
