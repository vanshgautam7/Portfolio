'use client';

import { motion } from 'motion/react';
import { type FormEvent, useState } from 'react';

export default function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [submitted, setSubmitted] = useState(false);

	function handleSubmit(e: FormEvent) {
		e.preventDefault();
		const mailtoLink = `mailto:vanshgautam4612@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
		window.open(mailtoLink, '_blank');
		setSubmitted(true);
		setTimeout(() => setSubmitted(false), 3000);
	}

	return (
		<section
			id='contact'
			className='relative min-h-screen w-screen py-16 px-8 md:px-16 lg:px-24 dark:bg-black dark:text-white bg-white text-black'
		>
			<div className='max-w-6xl mx-auto'>
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<h2 className='text-4xl md:text-6xl xl:text-8xl font-bold mb-4'>
						Let&apos;s Connect
					</h2>
					<p className='text-gray-500 dark:text-gray-400 text-lg mb-16 max-w-2xl'>
						Have an idea or want to collaborate? Reach out — I&apos;d love to
						hear from you.
					</p>
				</motion.div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
					{/* Contact Info */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className='space-y-8'
					>
						<div className='space-y-6'>
							<div className='flex items-center gap-4'>
								<div className='w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/30 flex items-center justify-center'>
									<svg
										className='w-5 h-5 text-primary-500'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
										strokeWidth='2'
									>
										<path d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
									</svg>
								</div>
								<div>
									<p className='text-sm text-gray-500 dark:text-gray-400'>
										Email
									</p>
									<a
										href='mailto:vanshgautam4612@gmail.com'
										className='text-lg font-medium hover:text-primary-500 transition-colors'
									>
										vanshgautam4612@gmail.com
									</a>
								</div>
							</div>

							<div className='flex items-center gap-4'>
								<div className='w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/30 flex items-center justify-center'>
									<svg
										className='w-5 h-5 text-primary-500'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
										strokeWidth='2'
									>
										<path d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
									</svg>
								</div>
								<div>
									<p className='text-sm text-gray-500 dark:text-gray-400'>
										Mobile
									</p>
									<a
										href='tel:+91628008xxxx'
										className='text-lg font-medium hover:text-primary-500 transition-colors'
									>
										+91 628008xxxx
									</a>
								</div>
							</div>

							<div className='flex items-center gap-4'>
								<div className='w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/30 flex items-center justify-center'>
									<svg
										className='w-5 h-5 text-primary-500'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
										strokeWidth='2'
									>
										<path d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
										<path d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
									</svg>
								</div>
								<div>
									<p className='text-sm text-gray-500 dark:text-gray-400'>
										Location
									</p>
									<p className='text-lg font-medium'>Punjab, India</p>
								</div>
							</div>
						</div>

						<div className='pt-4'>
							<p className='text-sm text-gray-500 dark:text-gray-400 mb-4'>
								Find me on
							</p>
							<div className='flex gap-3'>
								<a
									href='https://www.linkedin.com/in/vanshgautamx7'
									target='_blank'
									rel='noreferrer'
									className='w-10 h-10 rounded-lg bg-black/10 dark:bg-white/10 flex items-center justify-center hover:bg-primary-500/20 hover:text-primary-500 transition-all'
								>
									<svg
										className='w-5 h-5'
										fill='currentColor'
										viewBox='0 0 24 24'
									>
										<path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
									</svg>
								</a>
								<a
									href='https://github.com/vanshgautam7'
									target='_blank'
									rel='noreferrer'
									className='w-10 h-10 rounded-lg bg-black/10 dark:bg-white/10 flex items-center justify-center hover:bg-primary-500/20 hover:text-primary-500 transition-all'
								>
									<svg
										className='w-5 h-5'
										fill='currentColor'
										viewBox='0 0 24 24'
									>
										<path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
									</svg>
								</a>
							</div>
						</div>
					</motion.div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
					>
						<form onSubmit={handleSubmit} className='space-y-6'>
							<div>
								<label
									htmlFor='contact-name'
									className='block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2'
								>
									Name
								</label>
								<input
									id='contact-name'
									type='text'
									required
									value={formData.name}
									onChange={(e) =>
										setFormData({ ...formData, name: e.target.value })
									}
									className='w-full rounded-xl bg-black/5 dark:bg-white/5 border border-gray-200 dark:border-gray-800 px-4 py-3 text-black dark:text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all'
									placeholder='Your name'
								/>
							</div>
							<div>
								<label
									htmlFor='contact-email'
									className='block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2'
								>
									Email
								</label>
								<input
									id='contact-email'
									type='email'
									required
									value={formData.email}
									onChange={(e) =>
										setFormData({ ...formData, email: e.target.value })
									}
									className='w-full rounded-xl bg-black/5 dark:bg-white/5 border border-gray-200 dark:border-gray-800 px-4 py-3 text-black dark:text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all'
									placeholder='your@email.com'
								/>
							</div>
							<div>
								<label
									htmlFor='contact-message'
									className='block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2'
								>
									Message
								</label>
								<textarea
									id='contact-message'
									required
									rows={5}
									value={formData.message}
									onChange={(e) =>
										setFormData({ ...formData, message: e.target.value })
									}
									className='w-full rounded-xl bg-black/5 dark:bg-white/5 border border-gray-200 dark:border-gray-800 px-4 py-3 text-black dark:text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all resize-none'
									placeholder='Your message...'
								/>
							</div>
							<button
								type='submit'
								className='w-full rounded-xl bg-primary-500 px-6 py-3.5 text-white font-semibold text-sm transition-all hover:bg-primary-600 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black'
							>
								{submitted ? '✓ Opening Email Client...' : 'Send Message'}
							</button>
						</form>
					</motion.div>
				</div>

				{/* Footer */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					viewport={{ once: true }}
					className='mt-24 pt-8 border-t border-gray-200 dark:border-gray-800 text-center'
				>
					<p className='text-sm text-gray-500 dark:text-gray-400'>
						© {new Date().getFullYear()} Vansh Pratap Gautam. Built with Next.js
						& Tailwind CSS.
					</p>
				</motion.div>
			</div>
		</section>
	);
}
