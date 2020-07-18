import Deliveryman from '../models/Deliveryman';

class DeliverymanController {
  async store(req, res){
    console.log('cheehhe')
    const { name, email, created_at, updated_at } = req.body;
    console.log(email)
    const deliveryman = await Deliveryman.create({
      name,
      email,
      created_at,
      updated_at
    });

    return res.status(201).json(deliveryman);
  }
}

export default new DeliverymanController();
