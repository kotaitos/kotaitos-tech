import { remark } from 'remark';
import html from 'remark-html';
import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';

export default async function markdownToHtml(
  markdown: string,
): Promise<string> {
  const markdownToHtmlResult = await remark().use(html).process(markdown);

  const highlightedHtml = await unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(markdownToHtmlResult.toString());

  return highlightedHtml.toString();
}
