import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: { port: 3000 },
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: ['./src/tests/setup-test-enviroment.ts'],
    include: ['src/**/*.{spec,test}.{js,mjs,jsx,ts,tsx,mts}'],
    coverage: {
      reporter: ['text', 'html', 'json'],
    },
  },
});
