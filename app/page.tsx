import Certificates from './components/sections/certificates';
import Contact from './components/sections/contact';
import Education from './components/sections/education';
import Hero from './components/hero/hero';
import Intro from './components/sections/intro';
import { ScrollProvider } from './components/providers/ScrollProvider';
import Skills from './components/sections/skills';
import Works from './components/work/works';

export default function Home() {
	return (
		<ScrollProvider>
			<Hero />
			<Intro />
			<Works />
			<Skills />
			<Education />
			<Certificates />
			<Contact />
		</ScrollProvider>
	);
}
