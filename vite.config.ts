import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: process.env.IS_DEV !== 'true' ? './' : '/',
    build: {
        // we may need to add the electron here because independent node_modules and root issues
        outDir: process.env.IS_ELECTRON ? 'electron/build' : 'build',
    },
    plugins: [react()],
})
