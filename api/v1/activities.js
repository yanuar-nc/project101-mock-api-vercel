export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Jika method selain POST, kirimkan error 405
  if (req.method === 'GET') {
    return res.status(200).json(
      {
        "messages": "Success",
        "data": [
            {
                id: "1",
                executor: {
                    value: "teacher",
                    id: "1",
                    name: "Pak. Sumanto",
                    image: "/images/user/user-01.jpg"
                },
                entity: {
                    id: "1",
                    name: "student_score",
                },
                action: "add",
                value: "Memberikan nilai <b>matematika</b> kepada <a href=''><b>Rian (Kelas: 5 (B))</b></a> sebesar <b>8.5</b>",
                datetime: {
                    label: "Just now",
                    raw: "2025-01-01 01:01:10",
                }
            },
            {
                id: "2",
                executor: {
                    value: "user",
                    id: "1",
                    name: "Pak. Rian",
                    image: "/images/user/user-02.jpg"
                },
                entity: {
                    id: "1",
                    name: "student_score",
                },
                action: "add",
                value: "Login di device MacBook pro",
                datetime: {
                    label: "12 January 2025 12:32:10",
                    raw: "2025-01-01 01:01:10",
                }
            },
            {
                id: "4",
                executor: {
                    value: "user",
                    id: "1",
                    name: "Pak. Rian",
                    image: "/images/user/user-02.jpg"
                },
                entity: {
                    id: "1",
                    name: "student_score",
                },
                action: "add",
                value: "Login di device Google Chrome",
                datetime: {
                    label: "12 January 2025 12:32:10",
                    raw: "2025-01-01 01:01:10",
                }
            },
            {
                id: "3",
                executor: {
                    value: "teacher",
                    id: "1",
                    name: "Bu Dora",
                    image: "/images/user/user-03.jpg"
                },
                entity: {
                    id: "1",
                    name: "student_score",
                },
                action: "add",
                value: "Memberikan nilai <b>matematika</b> kepada <a href=''><b>Rian (Kelas: 5 (B))</b></a> sebesar <b>8.5</b>",
                datetime: {
                    label: "12 January 2025 12:32:10",
                    raw: "2025-01-01 01:01:10",
                }
            },
            {
                id: "5",
                executor: {
                    value: "user",
                    id: "1",
                    name: "Pak. Jumadi",
                    image: "/images/user/user-05.jpg"
                },
                entity: {
                    id: "1",
                    name: "student_score",
                },
                action: "add",
                value: "Memberikan nilai <b>matematika</b> kepada <a href=''><b>Rian (Kelas: 5 (B))</b></a> sebesar <b>8.5</b>",
                datetime: {
                    label: "12 January 2025 12:32:10",
                    raw: "2025-01-01 01:01:10",
                }
            },
            {
                id: "6",
                executor: {
                    value: "user",
                    id: "1",
                    name: "Pak. Jumadi",
                    image: "/images/user/user-05.jpg"
                },
                entity: {
                    id: "1",
                    name: "student_score",
                },
                action: "add",
                value: "Memberikan nilai <b>Bahasa Indonesia</b> kepada <a href=''><b>Rian (Kelas: 5 (B))</b></a> sebesar <b>6.5</b>",
                datetime: {
                    label: "12 January 2025 12:32:10",
                    raw: "2025-01-01 01:01:10",
                }
            },
        ]
      }
    );
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
