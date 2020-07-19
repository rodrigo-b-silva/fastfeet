import Order from '../models/Order';
import { Op } from 'sequelize';

class ProfileController {
  async index(req, res){
    const { deliveryman_id } = req.headers;
    const orders = await Order.findAll({
      where: {
        deliveryman_id,
        canceled_at: null,
        end_date: null
      }
    });

    return res.status(200).json(orders);
  }

  async deliveries(req, res){
    const { deliveryman_id } = req.headers;
    const orders = await Order.findAll({
      where: {
        deliveryman_id,
        canceled_at: null,
        end_date: {
          [Op.ne]: null
        }
      }
    });

    return res.status(200).json(orders);
  }

}

export default new ProfileController();
