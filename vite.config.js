import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
		extensions: ['.js', '.vue'],
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
          @use "@/assets/styles/_variables.scss" as *;
          @use "@/assets/styles/mixins.scss" as *;
        `,
			},
		},
	},
})
