import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { unified } from 'unified';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';
import { visit } from 'unist-util-visit';
import { Node } from 'unist';
import { Element } from 'hast';
import rehypeSlug from 'rehype-slug';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';

export default async function markdownToHtml(
  markdown: string,
): Promise<string> {
  const result = await unified()
    .use(remarkParse, { fragment: true })
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .use(rehypeAutolinkHeadings)
    .use(rehypeStringify)
    .use(() => {
      return (tree: Node) => {
        visit(tree, 'element', (node: Element) => {
          if (node.tagName === 'a') {
            node.properties = { ...node.properties, target: '_blank' };
          }
        });
      };
    })
    .process(markdown);

  return result.toString();
}
