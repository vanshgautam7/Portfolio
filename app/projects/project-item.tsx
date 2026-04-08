import type { ProjectModal } from './types';

interface ProjectProps {
	index: number;
	title: string;
	url: string;
	role: string;
	description?: string;
	setModal: (modal: ProjectModal) => void;
}

export default function ProjectItem({
	index,
	title,
	url,
	role,
	description,
	setModal,
}: ProjectProps) {
	return (
		<a
			href={url}
			target='_blank'
			onMouseEnter={() => {
				setModal({ active: true, index });
			}}
			onMouseLeave={() => {
				setModal({ active: false, index });
			}}
			className='group flex w-full items-center justify-between border-b px-4 py-10 sm:px-10 sm:py-16'
			rel='noreferrer'
		>
			<div className='flex-1'>
				<h2 className='text-2xl transition-all group-hover:-translate-x-3 group-hover:scale-110 sm:text-6xl'>
					{title}
				</h2>
				{description && (
					<p className='mt-2 text-sm text-gray-500 dark:text-gray-400 max-w-xl transition-all group-hover:-translate-x-2'>
						{description}
					</p>
				)}
			</div>
			<p className='text-sm font-light transition-all group-hover:translate-x-3 group-hover:scale-110 sm:text-lg'>
				{role}
			</p>
		</a>
	);
}
