import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		sitemap: `https://vanshgautam.vercel.app/sitemap.xml`,
		host: `https://vanshgautam.vercel.app`,
	};
}
