import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite'; // 自动导入vue3函数包
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

import viteEslint from 'vite-plugin-eslint';

import * as path from 'path';
// 自动导入config
const componentsConfig = {
	dts: true,
	resolvers: [AntDesignVueResolver()],
	dirs: ['src/views', 'src/components']
};

const autoImportConfig = {
	imports: ['vue', {}],
	eslintrc: {
		enabled: true, // Default `false`
		filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
		globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
	}
};

export default defineConfig({
	plugins: [
		vue(),
		Components(componentsConfig),
		AutoImport(autoImportConfig),
		viteEslint()
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	},
	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
				additionalData: `@import "${path.resolve(
					__dirname,
					'src/style/variable.less'
				)}";`
			}
		}
	}
});
