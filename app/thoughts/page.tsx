import Header from '../components/layouts/header';
import PageContainer from '../components/layouts/page-container';

export const metadata = {
	title: 'Blog',
	description: 'Blog & Articles - Vansh Pratap Gautam',
};

export default function BlogPage() {
	return (
		<PageContainer>
			<Header title='Blog' />
			<div className='flex flex-col items-center justify-center py-24 space-y-4'>
				<span className='text-6xl'>📝</span>
				<h2 className='text-2xl font-bold'>Coming Soon</h2>
				<p className='text-gray-500 dark:text-gray-400 text-center max-w-md'>
					I&apos;m working on sharing my learnings about AI/ML, data science,
					and software engineering. Stay tuned!
				</p>
			</div>
		</PageContainer>
	);
}
