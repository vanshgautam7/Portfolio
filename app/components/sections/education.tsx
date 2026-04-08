'use client';

import { motion } from 'motion/react';

const educationData = [
	{
		degree: 'MCA (Hons. AI & ML)',
		institution: 'Lovely Professional University',
		period: 'Aug 2024 – Present',
		score: 'CGPA: 7.37',
		icon: '🎓',
		current: true,
	},
	{
		degree: 'BCA',
		institution: 'Guru Nanak Dev Engineering College',
		period: 'Aug 2021 – Jul 2024',
		score: 'CGPA: 7.09',
		icon: '📚',
		current: false,
	},
	{
		degree: 'Higher Secondary',
		institution: 'BCM Arya Model Sr Sec School',
		period: '2019 – 2021',
		score: 'Percentage: 83.4%',
		icon: '🏫',
		current: false,
	},
];

export default function Education() {
	return (
		<section
			id='education'
			className='relative z-10 bg-black dark:bg-white py-24 px-8 md:px-16 lg:px-24'
		>
			<div className='max-w-5xl mx-auto'>
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<h2 className='text-4xl md:text-6xl font-bold mb-4 text-white dark:text-black'>
						Education
					</h2>
					<p className='text-gray-400 dark:text-gray-600 text-lg mb-16 max-w-2xl'>
						My academic journey in Computer Science and AI/ML.
					</p>
				</motion.div>

				<div className='relative'>
					{/* Timeline line */}
					<div className='absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-primary-400 to-transparent' />

					{educationData.map((edu, index) => (
						<motion.div
							key={edu.degree}
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: index * 0.15 }}
							viewport={{ once: true }}
							className='relative pl-12 md:pl-20 pb-12 last:pb-0'
						>
							{/* Timeline dot */}
							<div
								className={`absolute left-2 md:left-6 top-1 w-5 h-5 rounded-full border-2 ${
									edu.current
										? 'bg-primary-500 border-primary-500 shadow-lg shadow-primary-500/50'
										: 'bg-gray-700 dark:bg-gray-300 border-gray-500 dark:border-gray-400'
								}`}
							/>

							<div
								className={`rounded-xl p-6 transition-all ${
									edu.current
										? 'bg-primary-500/10 border border-primary-500/30'
										: 'bg-white/5 dark:bg-black/5 border border-white/10 dark:border-black/10'
								}`}
							>
								<div className='flex items-start justify-between flex-wrap gap-2'>
									<div>
										<div className='flex items-center gap-2 mb-1'>
											<span className='text-lg'>{edu.icon}</span>
											<h3 className='text-xl md:text-2xl font-bold text-white dark:text-black'>
												{edu.degree}
											</h3>
											{edu.current && (
												<span className='ml-2 rounded-full bg-primary-500 px-3 py-0.5 text-xs font-semibold text-white'>
													Current
												</span>
											)}
										</div>
										<p className='text-gray-300 dark:text-gray-600 font-medium'>
											{edu.institution}
										</p>
									</div>
									<div className='text-right'>
										<p className='text-sm text-gray-400 dark:text-gray-500'>
											{edu.period}
										</p>
										<p className='font-bold text-primary-400 text-lg'>
											{edu.score}
										</p>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
