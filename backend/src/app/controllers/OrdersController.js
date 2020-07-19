import Order from '../models/Order';

class OrderController {
  async index(req, res){
    const orders = await Order.findAll({});
    return res.status(200).json(orders);
  }

  async store(req, res){
    const { recipient_id, deliveryman_id, signature_id, product } = req.body;
    const order = await Order.create({
      recipient_id,
      deliveryman_id,
      signature_id,
      product
    });

    return res.status(201).json(order);
  }

  async update(req, res){
    const { id } = req.params;
    const order = await Order.findByPk(id);
    if(!order)
      return res.status(400).json({ error: 'Order not found' });

    const { product } = await order.update(req.body);
    return res.status(204).json({ id, product });
  }

  async delete(req, res) {
    const { id } = req.params;
    const order = await Order.findByPk(id);
    if(!order)
      return res.status(400).json({ error: 'Order not found' });

    const canceled_at = new Date();

    await order.update({ canceled_at });

    return res.status(200).json({ message: 'Order canceled with success' });
  }

  async retirar(req, res){
    const { id } = req.params;
    let { start_date } = req.body;

    start_date = new Date(start_date);

    if(start_date.getHours() < 8 || start_date.getHours() > 18)
      return res.status(400).json({ error: 'Retirada not permited in this horarium' });

    const order = await Order.findByPk(id);
    if(!order)
      return res.status(200).json({ error: 'Order not found' });

    const { product } = await order.update({ start_date });
    return res.status(200).json({ id, start_date, product })
  }

  async finalizar(req, res){
    const { id } = req.params;
    let { end_date } = req.body;

    end_date = new Date(end_date);

    const order = await Order.findByPk(id);
    if(!order)
      return res.status(200).json({ error: 'Order not found' });

    const { product } = await order.update({ end_date });
    return res.status(200).json({ id, end_date, product })
  }
}

export default new OrderController();
