import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	reactStrictMode: true,
	pageExtensions: ['ts', 'tsx'],
	transpilePackages: ['next-mdx-remote'],
	images: {
		formats: ['image/webp'],
	},
};

export default nextConfig;
