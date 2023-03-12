const name = '@vuepress-cool/vuepress-plugin-publisher';
export const publisherPlugin = ({ frontmatter = { draft: false } }) => {
    const plugin = {
        name,
        multiple: true,
        extendsBundlerOptions: (bundlerOptions, app) => {
        },
        extendsMarkdown(md) { },
        extendsMarkdownOptions: (mdOption, app) => { },
        extendsPageOptions: (pageOptions, app) => {
            if (app && app.pages) {
                const frontmatterFilter = (page) => Object.keys(frontmatter)
                    .map((key) => (a) => a.frontmatter[key] === frontmatter[key])
                    .every((fn) => fn(page));
                // TODO 是否有更好的地方处理，此处会有重复计算
                app.pages = app.pages.filter(frontmatterFilter);
                // TODO 对文章进行排序，复用hugo的排序字段weight
                app.pages.forEach((page) => (page.frontmatter.sticky = page.frontmatter.weight));
            }
        },
        onInitialized(app) { }
    };
    return () => plugin;
};
export default publisherPlugin;
