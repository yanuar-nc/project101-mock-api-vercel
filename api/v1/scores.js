import cors from '../_middlewares/cors.js';
import middlewares from '../_middlewares/middlewares.js';

const allData = [
	{
		id: 7,
		student_name: "Lina Sari",
		student_id: "078f3c9e-9c7b-7e4a-8a2b-1c2d3e4f5a61",
		classroom_id: "CLS-04",
		classroom_name: "7D",
		subject_id: "SBJ-01",
		subject_name: "Matematika",
		score: 95
	},
	{
		id: 2,
		student_name: "Siti Aminah",
		student_id: "028f3c9e-9c7b-7e4a-8a2b-1c2d3e4f5a6c",
		classroom_id: "CLS-01",
		classroom_name: "7A",
		subject_id: "SBJ-02",
		subject_name: "Bahasa Indonesia",
		score: 92
	},
	{
		id: 5,
		student_name: "Dewi Lestari",
		student_id: "058f3c9e-9c7b-7e4a-8a2b-1c2d3e4f5a6f",
		classroom_id: "CLS-05",
		classroom_name: "7E",
		subject_id: "SBJ-02",
		subject_name: "Bahasa Indonesia",
		score: 90
	},
	{
		id: 1,
		student_name: "Budi Santoso",
		student_id: "018f3c9e-9c7b-7e4a-8a2b-1c2d3e4f5a6b",
		classroom_id: "CLS-02",
		classroom_name: "7B",
		subject_id: "SBJ-01",
		subject_name: "Matematika",
		score: 88
	},
	{
		id: 4,
		student_name: "Rina Marlina",
		student_id: "048f3c9e-9c7b-7e4a-8a2b-1c2d3e4f5a6e",
		classroom_id: "CLS-03",
		classroom_name: "7C",
		subject_id: "SBJ-03",
		subject_name: "IPA",
		score: 85
	},
	{
		id: 6,
		student_name: "Agus Pratama",
		student_id: "068f3c9e-9c7b-7e4a-8a2b-1c2d3e4f5a60",
		classroom_id: "CLS-06",
		classroom_name: "7F",
		subject_id: "SBJ-03",
		subject_name: "IPA",
		score: 81
	},
	{
		id: 3,
		student_name: "Andi Wijaya",
		student_id: "038f3c9e-9c7b-7e4a-8a2b-1c2d3e4f5a6d",
		classroom_id: "CLS-07",
		classroom_name: "7G",
		subject_id: "SBJ-01",
		subject_name: "Matematika",
		score: 76
	}
];

const lowestRankingData = [
	{
		id: 8,
		student_name: "Rudi Hartono",
		student_id: "088f3c9e-9c7b-7e4a-8a2b-1c2d3e4f5a62",
		classroom_id: "CLS-08",
		classroom_name: "7H",
		subject_id: "SBJ-03",
		subject_name: "IPA",
		score: 45
	},
	{
		id: 13,
		student_name: "Tina Anggraini",
		student_id: "138f3c9e-9c7b-7e4a-8a2b-1c2d3e4f5a67",
		classroom_id: "CLS-09",
		classroom_name: "7I",
		subject_id: "SBJ-01",
		subject_name: "Matematika",
		score: 47
	},
	{
		id: 11,
		student_name: "Sari Dewi",
		student_id: "118f3c9e-9c7b-7e4a-8a2b-1c2d3e4f5a65",
		classroom_id: "CLS-10",
		classroom_name: "7J",
		subject_id: "SBJ-03",
		subject_name: "IPA",
		score: 49
	},
	{
		id: 14,
		student_name: "Yusuf Maulana",
		student_id: "148f3c9e-9c7b-7e4a-8a2b-1c2d3e4f5a68",
		classroom_id: "CLS-11",
		classroom_name: "7K",
		subject_id: "SBJ-02",
		subject_name: "Bahasa Indonesia",
		score: 50
	},
	{
		id: 10,
		student_name: "Doni Saputra",
		student_id: "108f3c9e-9c7b-7e4a-8a2b-1c2d3e4f5a64",
		classroom_id: "CLS-12",
		classroom_name: "7L",
		subject_id: "SBJ-02",
		subject_name: "Bahasa Indonesia",
		score: 52
	},
	{
		id: 12,
		student_name: "Bambang Irawan",
		student_id: "128f3c9e-9c7b-7e4a-8a2b-1c2d3e4f5a66",
		classroom_id: "CLS-13",
		classroom_name: "7M",
		subject_id: "SBJ-02",
		subject_name: "Bahasa Indonesia",
		score: 54
	},
	{
		id: 9,
		student_name: "Maya Putri",
		student_id: "098f3c9e-9c7b-7e4a-8a2b-1c2d3e4f5a63",
		classroom_id: "CLS-14",
		classroom_name: "7N",
		subject_id: "SBJ-01",
		subject_name: "Matematika",
		score: 58
	}
];

export default function handler(req, res) {
	middlewares(
		req,
		res,
		[
			cors,
		],
		(req, res) => {
			if (req.method === 'GET') {
				const { filter } = req.query;
				let data = allData;

				if (filter === 'LOWEST_RANKING') {
					data = lowestRankingData;
				}

				return res.status(200).json({
					messages: "Your custom message here",
					data
				});
			}
			return res.status(405).json({ message: 'Method Not Allowed' });
		}
	);
}
