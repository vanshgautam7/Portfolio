export type WorkTile = {
	title: string;
	description: string;
	techStack: string;
	image: {
		src: string;
		width: number;
		height: number;
	};
};

export const workTiles: WorkTile[] = [
	{
		description: 'I built',
		title: 'Aniora — Anime Recommender',
		techStack: 'Python • Pandas • Scikit-learn • NLP • Streamlit • REST APIs',
		image: {
			src: '/static/images/anime-recommendation.png',
			width: 600,
			height: 400,
		},
	},
	{
		description: 'I developed',
		title: 'F1 Race Outcome Prediction',
		techStack: 'Python • Scikit-learn • FastF1 • Matplotlib • Weather API',
		image: {
			src: '/static/images/f1-prediction.png',
			width: 600,
			height: 400,
		},
	},
	{
		description: 'I architected',
		title: 'ACRIS — Recommendation Engine',
		techStack: 'Python • NLP • FastAPI • Collaborative Filtering',
		image: {
			src: '/static/images/acris-project.png',
			width: 600,
			height: 400,
		},
	},
];
