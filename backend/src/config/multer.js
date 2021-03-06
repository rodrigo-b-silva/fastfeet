import multer from 'multer';
import { resolve, extname } from 'path';
import crypto from 'crypto';

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'temp', 'uploads'),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if(err) return cb(err);
        return cb(null, res.toString('HEX') + extname(file.originalname));
      })
    }
  })
}
