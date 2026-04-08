'use client';

import { motion } from 'motion/react';

const certificates = [
	{
		title: 'Data Fundamentals',
		issuer: 'IBM SkillsBuild',
		date: 'Sept 2024',
		icon: '📊',
		color: 'from-blue-500/20 to-blue-600/10',
		borderColor: 'border-blue-500/30',
	},
	{
		title: 'Data Visualization with Python',
		issuer: 'Cognitive Class',
		date: 'Sept 2024',
		icon: '📈',
		color: 'from-green-500/20 to-green-600/10',
		borderColor: 'border-green-500/30',
	},
	{
		title: 'Generative AI',
		issuer: 'IBM SkillsBuild',
		date: 'Feb 2025',
		icon: '🧠',
		color: 'from-purple-500/20 to-purple-600/10',
		borderColor: 'border-purple-500/30',
	},
	{
		title: 'Python for Data Science',
		issuer: 'Saylor',
		date: 'July 2025',
		icon: '🐍',
		color: 'from-yellow-500/20 to-orange-500/10',
		borderColor: 'border-yellow-500/30',
	},
];

export default function Certificates() {
	return (
		<section
			id='certificates'
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
						Certificates
					</h2>
					<p className='text-gray-500 dark:text-gray-400 text-lg mb-16 max-w-2xl'>
						Professional certifications that validate my expertise.
					</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					{certificates.map((cert, index) => (
						<motion.div
							key={cert.title}
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							className={`group relative rounded-2xl border ${cert.borderColor} bg-gradient-to-br ${cert.color} p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
						>
							<div className='flex items-start gap-4'>
								<span className='text-3xl mt-1'>{cert.icon}</span>
								<div className='flex-1'>
									<h3 className='text-lg md:text-xl font-bold text-black dark:text-white mb-1'>
										{cert.title}
									</h3>
									<p className='text-sm font-medium text-gray-600 dark:text-gray-300'>
										{cert.issuer}
									</p>
									<p className='text-xs text-gray-500 dark:text-gray-400 mt-2 font-mono'>
										{cert.date}
									</p>
								</div>
								<div className='opacity-0 group-hover:opacity-100 transition-opacity'>
									<svg
										className='w-5 h-5 text-primary-500'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='2'
									>
										<path d='M12 15l8.385-8.415a2.1 2.1 0 013 3L15 18l-6 2 2-6z' />
										<path d='M2 12a10 10 0 1020 0 10 10 0 00-20 0z' />
									</svg>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
