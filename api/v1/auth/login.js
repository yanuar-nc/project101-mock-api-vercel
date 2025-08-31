export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Cek apakah request menggunakan metode POST
  if (req.method === 'POST') {
    const { 
      organization_username, 
      username, 
      password, 
      device_type, 
      device_info, 
      remember_me 
    } = req.body;

    // Validasi input
    if (!organization_username || !username || !password) {
      return res.status(401).json({ message: 'Invalid organization, username or password' });
    }

    // Simulasi login dengan credentials yang benar
    if (organization_username === 'tridharma' && username === 'admin' && password === 'password123') {
      // Hitung waktu kedaluwarsa token berdasarkan remember_me
      const expiryDays = remember_me ? 7 : 1;
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + expiryDays);
      
      return res.status(200).json({
        message: "Login successful",
        token: {
          access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFkbWluIEp1bmlvciIsImlhdCI6MTUxNjIzOTAyMn0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
          access_token_expires_at: expiryDate.toISOString() // Format ISO dengan timezone
        },
        user: {
          organization: {
            id: "d9j4-f3k2-g7h9-j2k5",
            username: organization_username
          },
          username: username,
          full_name: "Admin Junior",
          image: "https://api.dicebear.com/7.x/avataaars/svg?seed=admin&backgroundColor=b6e3f4",
          role: "teacher"
        }
      });
    }

    // Jika credentials salah
    return res.status(401).json({ message: 'Invalid organization, username or password' });
  }

  // Jika method selain POST, kirimkan error 405
  return res.status(405).json({ message: 'Method Not Allowed' });
}
