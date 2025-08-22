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
            "data": [
              {
                id: 1,
                student_name: "Budi Santoso",
                student_id: "018f3c9e-9c7b-7e4a-8a2b-1c2d3e4f5a6b",
                classroom_id: "CLS-01",
                classroom_name: "Kelas 7A",
                subject_id: "SBJ-01",
                subject_name: "Matematika",
                score: 88
              },
              {
                id: 2,
                student_name: "Siti Aminah",
                student_id: "028f3c9e-9c7b-7e4a-8a2b-1c2d3e4f5a6c",
                classroom_id: "CLS-01",
                classroom_name: "Kelas 7A",
                subject_id: "SBJ-02",
                subject_name: "Bahasa Indonesia",
                score: 92
              },
              {
                id: 3,
                student_name: "Andi Wijaya",
                student_id: "038f3c9e-9c7b-7e4a-8a2b-1c2d3e4f5a6d",
                classroom_id: "CLS-02",
                classroom_name: "Kelas 7B",
                subject_id: "SBJ-01",
                subject_name: "Matematika",
                score: 76
              },
              {
                id: 4,
                student_name: "Rina Marlina",
                student_id: "048f3c9e-9c7b-7e4a-8a2b-1c2d3e4f5a6e",
                classroom_id: "CLS-02",
                classroom_name: "Kelas 7B",
                subject_id: "SBJ-03",
                subject_name: "IPA",
                score: 85
              },
              {
                id: 5,
                student_name: "Dewi Lestari",
                student_id: "058f3c9e-9c7b-7e4a-8a2b-1c2d3e4f5a6f",
                classroom_id: "CLS-03",
                classroom_name: "Kelas 7C",
                subject_id: "SBJ-02",
                subject_name: "Bahasa Indonesia",
                score: 90
              },
              {
                id: 6,
                student_name: "Agus Pratama",
                student_id: "068f3c9e-9c7b-7e4a-8a2b-1c2d3e4f5a60",
                classroom_id: "CLS-03",
                classroom_name: "Kelas 7C",
                subject_id: "SBJ-03",
                subject_name: "IPA",
                score: 81
              },
              {
                id: 7,
                student_name: "Lina Sari",
                student_id: "078f3c9e-9c7b-7e4a-8a2b-1c2d3e4f5a61",
                classroom_id: "CLS-01",
                classroom_name: "Kelas 7A",
                subject_id: "SBJ-01",
                subject_name: "Matematika",
                score: 95
              }
            ]
          }
        );
      }
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
  );
}
