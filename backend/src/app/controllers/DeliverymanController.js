import Deliveryman from '../models/Deliveryman';

class DeliverymanController {
  async store(req, res){
    const { name, email, created_at, updated_at } = req.body;
    const deliveryman = await Deliveryman.create({
      name,
      email,
      created_at,
      updated_at
    });

    return res.status(201).json(deliveryman);
  }

  async show(req, res){
    const deliveryman = await Deliveryman.findByPk(req.params.id);
    console.log(deliveryman)
    return res.status(200).json(deliveryman);
  }

  async index(req, res){
    const deliverymen = await Deliveryman.findAll({});
    return res.status(200).json(deliverymen);
  }

  async delete(req, res){
    const { id } = req.params;
    const deliveryman = await Deliveryman.findByPk(id);

    if(!deliveryman)
      return res.status(400).json({ error: "Deliveryman not found" });

    await Deliveryman.destroy({
      where: { id }
    });

    return res.status(200).json({ message: 'Deliveryman removed with success' })
  }

  async update(req, res){
    const { id } = req.params;

    let deliveryman = await Deliveryman.findByPk(id);
    if(!deliveryman)
      return res.status(400).json({ error: "Deliveryman not found" });

    const { name, email } = await deliveryman.update(req.body);

    return res.status(204).json({ id, name, email });
  }

}

export default new DeliverymanController();
