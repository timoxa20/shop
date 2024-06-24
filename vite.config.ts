import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        open: true,
    },
    build: {
        outDir: 'dist',
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `$injectedColor: orange;` // Пример: можно добавить глобальные переменные
            },
        },
    },
});