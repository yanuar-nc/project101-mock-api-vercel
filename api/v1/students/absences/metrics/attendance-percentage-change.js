import cors from '@/api/_middlewares/cors.js';
import middlewares from '@/api/_middlewares/middlewares.js';

export default function handler(req, res) {
  middlewares(
    req,
    res,
    [
      cors,
    ],
    (req, res) => {
      if (req.method === 'GET') {
        return res.status(200).json(
          {
            "messages": "Your custom message here",
            "data": {
              "count": 100,
              "percentage_change": 0.75
            }
          }
        );
      }
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
  );
}
