import { getDirname } from '@vuepress/utils';
import { publisherPlugin } from '@ihavecool/vuepress-plugin-publisher';
import recoTheme from 'vuepress-theme-reco';
const publisherOpt = {
    frontmatter: {
        draft: false
    }
};
const __dirname = getDirname(import.meta.url);
export const coolTheme = (options) => {
    return {
        name: 'vuepress-theme-cool',
        extends: recoTheme(options),
        // 在子主题的客户端配置文件中覆盖布局
        // clientConfigFile: path.resolve(__dirname, './client.js'),
        plugins: [publisherPlugin(publisherOpt)],
        // 覆盖组件别名
        alias: {
        // '@theme/HomeFooter.vue': path.resolve(__dirname, './components/MyHomeFooter.vue')
        }
        // layouts: {
        //   Layout: path.resolve(__dirname, 'theme/layouts/Layout.vue'),
        // },
    };
};
export default coolTheme;
