
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Military theme colors
				military: {
					dark: '#1a1f1c',
					darkblue: '#111820',
					khaki: '#78866b',
					green: '#4a5c42',
					red: '#a83232',
					orange: '#cc7832',
					gray: '#3c3c3c',
					lightgray: '#606060',
					gold: '#d4af37',
					lightgold: '#d4af3799',
				}
			},
			fontFamily: {
				ocr: ["'OCR A Extended'", 'monospace'],
				terminal: ["'VT323'", 'monospace'],
				military: ["'Courier Prime'", 'monospace'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'text-flicker': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
				'pulse-red': {
					'0%, 100%': { backgroundColor: '#a83232' },
					'50%': { backgroundColor: '#ff0000' }
				},
				'rotate-logo': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'typing': {
					'0%': { width: '0%' },
					'100%': { width: '100%' }
				},
				'blink': {
					'0%, 100%': { borderColor: 'transparent' },
					'50%': { borderColor: '#d4af37' }
				},
				'security-banner': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' }
				},
				'progress-bar': {
					'0%': { width: '0%' },
					'100%': { width: '100%' }
				},
				'progress-line': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'glow-pulse': {
					'0%, 100%': { boxShadow: '0 0 5px rgba(212, 175, 55, 0.3)' },
					'50%': { boxShadow: '0 0 15px rgba(212, 175, 55, 0.7)' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'text-flicker': 'text-flicker 0.5s infinite',
				'pulse-red': 'pulse-red 1s infinite',
				'rotate-logo': 'rotate-logo 20s linear infinite',
				'fade-in': 'fade-in 0.5s ease-in forwards',
				'typing': 'typing 3.5s steps(40, end)',
				'blink': 'blink 1s step-end infinite',
				'security-banner': 'security-banner 30s linear infinite',
				'progress-bar': 'progress-bar 5s linear',
				'progress-line': 'progress-line 1s infinite',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function({ addBase }) {
			addBase({
				'.military-frame': {
					'@apply bg-military-darkblue/80 border border-military-gold/70 p-4 rounded-lg': {},
					'box-shadow': '0 0 15px rgba(0, 0, 0, 0.5), inset 0 0 10px rgba(212, 175, 55, 0.1)',
					'backdrop-filter': 'blur(5px)',
				},
				'.military-header': {
					'@apply font-military uppercase tracking-wider text-military-gold': {},
					'text-shadow': '0 0 8px rgba(212, 175, 55, 0.3)',
				},
				'.font-military': {
					'text-rendering': 'optimizeLegibility',
					'-webkit-font-smoothing': 'antialiased',
					'-moz-osx-font-smoothing': 'grayscale',
				},
				'.text-military-gold, .text-military-lightgold': {
					'text-rendering': 'optimizeLegibility',
					'-webkit-font-smoothing': 'antialiased',
					'-moz-osx-font-smoothing': 'grayscale',
					'text-shadow': '0 0 1px rgba(212, 175, 55, 0.3)',
				},
				'html': {
					'text-rendering': 'optimizeLegibility',
					'-webkit-font-smoothing': 'antialiased',
					'-moz-osx-font-smoothing': 'grayscale',
				},
				'.crt-overlay': {
					'@apply pointer-events-none': {},
					'background': 'linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%)',
					'background-size': '100% 100%',
					'background-repeat': 'no-repeat',
					'position': 'absolute',
					'top': '0',
					'left': '0',
					'right': '0',
					'bottom': '0',
					'z-index': '10',
				},
				'.noise': {
					'@apply pointer-events-none': {},
					'position': 'fixed',
					'top': '0',
					'left': '0',
					'width': '100%',
					'height': '100%',
					'background-image': 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAPklEQVRoge3NQQEAMAzDsB7LxP85rcT5rAFqZm7u9pnBFuOTEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQkFXkAdohCDFwEMvlAAAAAElFTkSuQmCC")',
					'opacity': '0.04',
					'z-index': '20',
					'pointer-events': 'none',
				},
				'.military-button': {
					'@apply bg-military-darkblue border border-military-gold/70 text-military-gold py-2 px-4 rounded-md': {},
					'transition': 'all 0.2s ease',
					'box-shadow': '0 0 5px rgba(212, 175, 55, 0.2), inset 0 0 5px rgba(212, 175, 55, 0.1)',
				},
				'.military-button:hover': {
					'@apply border-military-gold bg-military-darkblue/90': {},
					'box-shadow': '0 0 10px rgba(212, 175, 55, 0.4), inset 0 0 8px rgba(212, 175, 55, 0.2)',
				},
				'.military-input': {
					'@apply bg-military-dark/80 border border-military-green/70 text-military-khaki rounded-md py-2 px-3': {},
					'transition': 'all 0.2s ease',
				},
				'.military-input:focus': {
					'@apply border-military-gold/70 outline-none': {},
					'box-shadow': '0 0 5px rgba(212, 175, 55, 0.3)',
				},
				'.military-card': {
					'@apply bg-military-darkblue/80 border border-military-gold/40 rounded-lg': {},
					'backdrop-filter': 'blur(3px)',
					'transition': 'all 0.3s ease',
					'box-shadow': '0 4px 12px rgba(0, 0, 0, 0.2)',
				},
				'.military-card:hover': {
					'@apply border-military-gold/70': {},
					'box-shadow': '0 6px 16px rgba(0, 0, 0, 0.3), 0 0 10px rgba(212, 175, 55, 0.1)',
				}
			});
		}
	],
} satisfies Config;
