const { heroui } = require('@heroui/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@heroui/theme/dist/components/(button|modal|ripple|spinner).js"
	],
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px'
		},
		extend: {
			colors: {
				primary: {
					50: '#fafafa',
					100: '#f5f5f5',
					200: '#eeeeee',
					300: '#e0e0e0',
					400: '#bdbdbd',
					500: '#9e9e9e',
					600: '#757575',
					700: '#616161',
					800: '#424242',
					900: '#212121',
					950: '#000000',
				},
				secondary: {
					50: '#e6fff4',
					100: '#ccffe8',
					200: '#99ffd1',
					300: '#66ffba',
					400: '#33ffa3',
					500: '#00ff88',
					600: '#00cc6d',
					700: '#009952',
					800: '#006637',
					900: '#00331b',
					950: '#00190d',
				},
				accent: {
					50: '#e6ffff',
					100: '#ccffff',
					200: '#99ffff',
					300: '#66ffff',
					400: '#33ffff',
					500: '#00f7ff',
					600: '#00c6cc',
					700: '#009499',
					800: '#006366',
					900: '#003133',
					950: '#001819',
				},
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				'Breeze-100': '#F0F4FC',
				'Breeze-200': '#D8E2F8',
				'Breeze-300': '#C0D0F4',
				'Breeze-400': '#A8BEF0',
				'Breeze-500': '#90ACEC',
				'Breeze-600': '#789AE8',
				'Breeze-700': '#6088E4',
				'Breeze-800': '#4876E0',
				'Breeze-900': '#3064DC',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			fontFamily: {
				'IranSans-thin': 'IranSans-thin',
				'IranSans-Light': 'IranSans-Light',
				'IranSans-Regular': 'IranSans-Regular',
				'IranSans-Medium': 'IranSans-Medium',
				'IranSans-DemiBold': 'IranSans-DemiBold',
				'IranSans-Bold': 'IranSans-Bold',
				'IranSans-ExtraBold': 'IranSans-ExtraBold',
				'IranSans-Black': 'IranSans-Black'
			},
			container: {
				center: true
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				card: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'
			},
			aspectRatio: {
				video: '16/9',
			},
		}
	},
	plugins: [function ({ addVariant }) {
		addVariant('child', '& > *');
		addVariant('child-hover', '& > *:hover');
		addVariant("group-hover", ".group:hover &")
	}, require("tailwindcss-animate"), heroui()],
};
