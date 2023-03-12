import type { Plugin } from '@vuepress/core';
export interface PostFilterOptions {
    frontmatter?: Record<string, boolean>;
    prodOnly?: boolean;
}
export declare const publisherPlugin: ({ frontmatter }: PostFilterOptions) => () => Plugin;
export default publisherPlugin;
