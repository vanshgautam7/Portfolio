export const baseUrl = 'https://vanshgautam.vercel.app';

export default async function sitemap() {
	const routes = ['', 'projects'].map((route) => ({
		url: route === '' ? `${baseUrl}/` : `${baseUrl}/${route}`,
		lastModified: new Date().toISOString().split('T')[0],
	}));

	return [...routes];
}
