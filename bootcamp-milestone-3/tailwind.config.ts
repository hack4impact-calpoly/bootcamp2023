// Import necessary types from Tailwind CSS
import type { Config } from 'tailwindcss';

// Define Tailwind CSS configuration
const config: Config = {
  // Specify content paths for Tailwind CSS
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Extend or customize the default theme
  theme: {
    extend: {
      // Add or override styles in the default theme
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  // Include any Tailwind CSS plugins if needed
  plugins: [],
};

// Export the Tailwind CSS configuration
export default config;
