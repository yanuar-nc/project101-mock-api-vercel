export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Jika method selain POST, kirimkan error 405
  if (req.method === 'GET') {
    return res.status(200).json(
      {
        "messages": "Your custom message here",
        "data": [
            {
                id: 1,
                title: "Total Siswa Hadir",
                value: "130",
                change: "+20%",
                direction: "up",
                comparisonText: "Vs Kemarin",
                status: "TOTAL_STUDENTS_PRESENT",
            },
            {
                id: 2,
                title: "Total Siswa Izin",
                value: "31",
                change: "+4%",
                direction: "up",
                comparisonText: "Vs kemarin",
                status: "TOTAL_STUDENTS_LEAVE_PERMISSION",
            },
            {
                id: 3,
                title: "Total Siswa Sakit",
                value: "4",
                change: "-1.59%",
                direction: "down",
                comparisonText: "Vs kemarin",
                status: "TOTAL_STUDENTS_SICK_LEAVE",
            },
            {
                id: 4,
                title: "Total Siswa Tidak Hadir",
                value: "7",
                change: "+7%",
                direction: "up",
                comparisonText: "Vs kemarin",
                status: "TOTAL_STUDENTS_LEAVE_WITHOUT_PERMISSION",
            },
        ]
      }
    );
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
