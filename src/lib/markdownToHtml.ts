import { remark } from 'remark';
import html from 'remark-html';
import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';
import { visit } from 'unist-util-visit';
import { Node } from 'unist';
import { Element } from 'hast';

export default async function markdownToHtml(
  markdown: string,
): Promise<string> {
  const markdownToHtmlResult = await remark().use(html).process(markdown);

  const highlightedHtml = await unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeHighlight)
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
    .process(markdownToHtmlResult.toString());

  return highlightedHtml.toString();
}
