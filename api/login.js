export default function handler(req, res) {
  // Cek apakah request menggunakan metode POST
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Validasi input
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    // Simulasi login dengan username dan password yang benar
    if (username === 'admin' && password === 'password123') {
      return res.status(200).json({
        message: 'Login successful',
        token: 'fake-jwt-token', // Simulasi token JWT
        user: { username: 'admin' },
      });
    }

    // Jika username atau password salah
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  // Jika method selain POST, kirimkan error 405
  return res.status(405).json({ message: 'Method Not Allowed' });
}
