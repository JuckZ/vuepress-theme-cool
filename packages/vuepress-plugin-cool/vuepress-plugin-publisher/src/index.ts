import type { Page, Plugin, App, PluginObject } from '@vuepress/core'

export interface PostFilterOptions {
  frontmatter?: Record<string, boolean>
  prodOnly?: boolean
}

const name = '@vuepress-cool/vuepress-plugin-publisher'

export const publisherPlugin = ({ frontmatter = { draft: false } }: PostFilterOptions) => {
  const plugin: Plugin = {
    name,
    multiple: true,
    extendsBundlerOptions: (bundlerOptions, app) => {
    },
    extendsMarkdown(md) {},
    extendsMarkdownOptions: (mdOption, app: App) => {},
    extendsPageOptions: (pageOptions, app: App) => {
      if (app && app.pages) {
        const frontmatterFilter = (page: Page) =>
          Object.keys(frontmatter)
            .map((key) => (a) => a.frontmatter[key] === frontmatter[key])
            .every((fn) => fn(page))
        // TODO 是否有更好的地方处理，此处会有重复计算
        app.pages = app.pages.filter(frontmatterFilter)
        // TODO 对文章进行排序，复用hugo的排序字段weight
        app.pages.forEach((page) => (page.frontmatter.sticky = page.frontmatter.weight))
      }
    },
    onInitialized(app) {}
  }

  return (): Plugin => plugin
}

export default publisherPlugin
