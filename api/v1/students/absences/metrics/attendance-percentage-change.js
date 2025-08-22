export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Jika method selain POST, kirimkan error 405
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
