'use client';

import { motion } from 'motion/react';
import { useRef } from 'react';

const skillCategories = [
	{
		title: 'Languages',
		icon: '💻',
		skills: ['Python', 'C++'],
		color: 'from-blue-500/20 to-cyan-500/20',
		borderColor: 'border-blue-500/30',
	},
	{
		title: 'Databases',
		icon: '🗄️',
		skills: ['MySQL', 'MongoDB'],
		color: 'from-green-500/20 to-emerald-500/20',
		borderColor: 'border-green-500/30',
	},
	{
		title: 'ML & NLP Tools',
		icon: '🤖',
		skills: [
			'Scikit-learn',
			'Pandas',
			'NumPy',
			'Matplotlib',
			'TF-IDF',
			'Cosine Similarity',
			'NLP',
			'spaCy',
			'NLTK',
		],
		color: 'from-purple-500/20 to-pink-500/20',
		borderColor: 'border-purple-500/30',
	},
	{
		title: 'Frameworks & Deployment',
		icon: '🚀',
		skills: ['Streamlit', 'FastAPI', 'REST APIs', 'Git', 'GitHub'],
		color: 'from-indigo-500/20 to-violet-500/20',
		borderColor: 'border-indigo-500/30',
	},
	{
		title: 'AI & Deep Learning',
		icon: '🧠',
		skills: [
			'Gradient Boosting',
			'Random Forest',
			'Regression Models',
			'Feature Engineering',
			'LLM Concepts',
		],
		color: 'from-rose-500/20 to-red-500/20',
		borderColor: 'border-rose-500/30',
	},
	{
		title: 'Web',
		icon: '🌐',
		skills: ['HTML', 'CSS'],
		color: 'from-orange-500/20 to-yellow-500/20',
		borderColor: 'border-orange-500/30',
	},
];

export default function Skills() {
	const ref = useRef<HTMLDivElement>(null);

	return (
		<section
			ref={ref}
			id='skills'
			className='relative z-10 bg-white dark:bg-black py-24 px-8 md:px-16 lg:px-24'
		>
			<div className='max-w-6xl mx-auto'>
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<h2 className='text-4xl md:text-6xl font-bold mb-4 text-black dark:text-white'>
						Skills & Expertise
					</h2>
					<p className='text-gray-500 dark:text-gray-400 text-lg mb-16 max-w-2xl'>
						Technologies and tools I use to bring ideas to life.
					</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{skillCategories.map((category, index) => (
						<motion.div
							key={category.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							className={`relative group rounded-2xl border ${category.borderColor} bg-gradient-to-br ${category.color} p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
						>
							<div className='flex items-center gap-3 mb-5'>
								<span className='text-2xl'>{category.icon}</span>
								<h3 className='text-xl font-bold text-black dark:text-white'>
									{category.title}
								</h3>
							</div>
							<div className='flex flex-wrap gap-2'>
								{category.skills.map((skill) => (
									<span
										key={skill}
										className='rounded-full bg-black/10 dark:bg-white/10 px-4 py-1.5 text-sm font-medium text-black dark:text-white transition-all hover:bg-primary-500/20 hover:text-primary-500'
									>
										{skill}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
