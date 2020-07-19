import DeliveryProblem from '../models/DeliveryProblem';
import Order from '../models/Order';

class DeliveryProblemController {
  async index(req, res){
    const deliveryProblems = await DeliveryProblem.findAll({});
    return res.status(200).json(deliveryProblems)
  }

  async orderProblems(req, res){
    const { id } = req.params;
    const deliveryProblems = await DeliveryProblem.findAll({
      where: { delivery_id: id }
    });

    return res.status(200).json(deliveryProblems)
  }

  async store(req, res){
    const { deliveryman_id } = req.headers;
    const { id } = req.params;
    const { description } = req.body;

    const order = await Order.findByPk(id);
    if(!order)
      return res.status(400).json({ error: 'Order not found' });

    if(parseInt(order.deliveryman_id) !== parseInt(deliveryman_id))
      return res.status(401).json({ error: "You don't permission to manipulate this order" });

    const deliveryProblem = await DeliveryProblem.create({
      delivery_id: id,
      description
    });

    return res.status(201).json(deliveryProblem);
  }

  async cancelDelivery(req, res){
    const { id } = req.params;
    const problem = await DeliveryProblem.findByPk(id);
    if(!problem)
      return res.status(400).json({ error: 'Problem noy found' });

    const order = await Order.findByPk(problem.delivery_id);
    const canceled_at = new Date();

    await order.update({ canceled_at });

    return res.status(200).json({ message: 'Order canceled with success' });
  }

}

export default new DeliveryProblemController();
