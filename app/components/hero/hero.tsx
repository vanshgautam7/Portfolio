import classNames from 'classnames';
import Link from 'next/link';
import { merryWeather } from '../../fonts';
import { AtSignIcon } from '../layouts/icons/at-sign-icon';
import { GithubIcon } from '../layouts/icons/github-icon';
import { LinkedinIcon } from '../layouts/icons/linkedin-icon';
import SplashCursor from './splash-cursor';
import ArrowDown from './arrow-down';

function ResumeIcon({ className }: { className?: string }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			className={className}
		>
			<path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' />
			<polyline points='14 2 14 8 20 8' />
			<line x1='16' y1='13' x2='8' y2='13' />
			<line x1='16' y1='17' x2='8' y2='17' />
			<polyline points='10 9 9 9 8 9' />
		</svg>
	);
}

export default function Hero() {
	return (
		<main className='relative min-h-svh w-screen overflow-hidden'>
			<SplashCursor
				containerClassName='min-h-svh w-screen'
				usePrimaryColors={true}
			>
				<div
					className={classNames('relative min-h-svh', merryWeather.className)}
				>
					<ArrowDown />
					<div className='absolute top-[20%] md:top-[40%] max-w-5xl flex-col space-y-4 justify-center px-8 md:px-24 lg:ml-14'>
						<h1 className='text-2xl font-medium md:mr-4 md:text-4xl'>
							Hi, I&apos;m{' '}
							<span className='font-bold'>Vansh Pratap Gautam</span>
						</h1>
						<p className='text-sm md:text-base font-light tracking-wide opacity-80'>
							MCA Student | Aspiring AI/ML Engineer | Data-Driven Problem
							Solver
						</p>
						<section className='relative z-10'>
							<p className='text-base text-justify'>
								I am a Master&apos;s student in Computer Applications (Hons.
								AI & ML) at Lovely Professional University
								with strong problem-solving skills, practical experience in
								machine learning, and a passion for data-driven solutions.
							</p>
						</section>
						<section className='relative z-10 flex flex-wrap gap-3 items-center text-sm pt-2'>
							<a
								href='/static/resume.pdf'
								target='_blank'
								rel='noreferrer'
								className='inline-flex items-center gap-2 rounded-full bg-primary-500 px-5 py-2.5 text-white font-semibold text-sm transition-all hover:bg-primary-600 hover:scale-105'
								data-skip-splash-cursor
							>
								<ResumeIcon className='h-4 w-4' />
								View Resume
							</a>
							<Link
								href='https://www.linkedin.com/in/vanshgautamx7'
								target='_blank'
								rel='noreferrer'
								className='inline-flex items-center gap-2 rounded-full border border-current px-5 py-2.5 font-semibold text-sm transition-all hover:bg-white/10 hover:scale-105'
								data-skip-splash-cursor
							>
								<LinkedinIcon className='h-4 w-4' />
								LinkedIn
							</Link>
							<Link
								href='https://github.com/vanshgautam7'
								target='_blank'
								rel='noreferrer'
								className='inline-flex items-center gap-2 rounded-full border border-current px-5 py-2.5 font-semibold text-sm transition-all hover:bg-white/10 hover:scale-105'
								data-skip-splash-cursor
							>
								<GithubIcon className='h-4 w-4' />
								GitHub
							</Link>
						</section>
						<section className='relative z-10 flex space-x-4 items-center text-sm pt-2'>
							<div>
								<p>Connect with me: </p>
								<div className='flex -ml-2'>
									<Link
										href='https://www.linkedin.com/in/vanshgautamx7'
										target='_blank'
										rel='noreferrer'
										aria-label='linkedin'
										data-skip-splash-cursor
									>
										<LinkedinIcon className='h-9 w-9' />
									</Link>
									<Link
										href='https://github.com/vanshgautam7'
										target='_blank'
										rel='noreferrer'
										aria-label='github'
										data-skip-splash-cursor
									>
										<GithubIcon className='h-9 w-9' />
									</Link>
									<Link
										href='mailto:vanshgautam4612@gmail.com'
										aria-label='email'
										rel='noreferrer'
										data-skip-splash-cursor
									>
										<AtSignIcon className='h-9 w-9' />
									</Link>
								</div>
							</div>
							<div className='h-14 border-l border-gray-300' />
							<div
								className='flex flex-wrap space-x-3 space-y-1'
								data-skip-splash-cursor
							>
								<Link href='/projects'>/projects</Link>
								<Link href='/thoughts'>/blog</Link>
							</div>
						</section>
					</div>
				</div>
			</SplashCursor>
		</main>
	);
}
