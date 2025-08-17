/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	transpilePackages: [
		"@ibtikar/ui",
		"@ibtikar/types",
		"@ibtikar/utils",
		"@ibtikar/recommendation"
	],
	i18n: {
		locales: ["ar", "en"],
		defaultLocale: "ar",
		localeDetection: false
	}
};

export default nextConfig;