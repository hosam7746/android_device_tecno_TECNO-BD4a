import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./app/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./lib/**/*.{ts,tsx}",
		"../../packages/ui/src/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				foreground: "hsl(var(--foreground))",
				background: "hsl(var(--background))",
				muted: "hsl(var(--muted))",
				accent: "hsl(var(--accent))",
			},
		}
	},
	corePlugins: {
		preflight: true,
	},
};

export default config;