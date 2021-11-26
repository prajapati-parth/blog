import { unified } from "unified";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import rehypeKatex from "rehype-katex";
import remarkRehype from "remark-rehype";
import rehypePrism from "@mapbox/rehype-prism";
import rehypeStringify from "rehype-stringify";

export const getExperience = (): string => {
  const currentDate = new Date();
  const currentFormattedDate = new Date(
    `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`
  );
  const startDate = new Date('12/08/2014');
  const timeDiff = Math.abs(currentFormattedDate.getTime() - startDate.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  const yearPeriod = (diffDays / 365).toFixed(1);

  return yearPeriod
}

export const getHtmlFromMarkdown = (markdown: string): string => {
  return String(unified()
    .use(remarkParse) // for parsing markdown
    .use(remarkGfm) // for parsing the markdown table
    .use(remarkMath) // parent lib for using katex
    .use(remarkRehype, {allowDangerousHtml: true}) // for parsing markdown, "allowDangerousHtml" is needed for using html in markdown
    .use(rehypeKatex) // for parsing katex
    .use(rehypePrism) // for parsing code blocks within triple back ticks 
    .use(rehypeStringify, {allowDangerousHtml: true}) // for parsing markdown, "allowDangerousHtml" is needed for using html in markdown
    .processSync(markdown));
}