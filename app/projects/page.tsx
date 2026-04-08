import Projects from 'app/projects/projects';
import { Fragment } from 'react';
import Header from '../components/layouts/header';

export const metadata = {
	title: 'Projects',
	description: 'Machine Learning & Data Science Projects - Vansh Pratap Gautam',
};

export default function Page() {
	return (
		<Fragment>
			<Header title='Projects' />
			<div className='space-y-2 md:space-y-5 '>
				<p className='text-lg leading-7 text-gray-500 dark:text-gray-400'>
					Here are my machine learning and data science projects.
				</p>
			</div>
			<Projects />
		</Fragment>
	);
}
