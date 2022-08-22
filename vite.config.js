import path from "path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

const { resolve } = require('path');
export default defineConfig({
    resolve: {
        // https://cn.vitejs.dev/config/#resolve-alias
        alias: {
            // 设置路径
            "~": path.resolve(__dirname, "./"),
            // 设置别名
            "@": path.resolve(__dirname, "./src")
        },
        // https://cn.vitejs.dev/config/#resolve-extensions
        extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
    },
    plugins: [
        vue(),
        Components({
            resolvers: [NaiveUiResolver()]
        })
    ],
    // vite 相关配置
    server: {
        hmr: true, //热更新开启
        host: true,
        open: true,
        proxy: {
            // https://cn.vitejs.dev/config/#server-proxy
            "/dev-api": {
                target: "https://link-api.mzb0.com/mapi",
                changeOrigin: true,
                rewrite: p => p.replace(/^\/dev-api/, "")
            }
        }
    },
});
