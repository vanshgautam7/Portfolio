import type { Project } from './types';

export const projects: Project[] = [
	{
		title: 'Aniora — Anime Recommendation System',
		src: 'anime-recommendation.png',
		color: '#dbeafe',
		url: 'https://github.com/vanshgautam7/Anime-Recommender',
		role: 'ML Web App',
		description:
			'Content-based recommendation engine using TF-IDF vectorization and cosine similarity with NLP-driven category recommendations. Deployed as a production-grade Streamlit web app with live API integration.',
	},
	{
		title: 'F1 Race Outcome Prediction',
		src: 'f1-prediction.png',
		color: '#fee2e2',
		url: 'https://github.com/vanshgautam7',
		role: 'ML Pipeline',
		description:
			'ML pipeline predicting 2025 Monaco GP results using Gradient Boosting Regressor. Achieved ±0.3s MAE per lap with advanced feature engineering including weather adjustments and Monaco experience factors.',
	},
	{
		title: 'ACRIS — Adaptive Recommendation & Insight System',
		src: 'acris-project.png',
		color: '#ddd6fe',
		url: 'https://github.com/vanshgautam7',
		role: 'AI System',
		description:
			'Adaptive recommendation engine leveraging contextual NLP embeddings and collaborative filtering for personalized content suggestions with dynamic preference tracking and real-time scoring.',
	},
];
