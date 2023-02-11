import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export default function () {
  return function (tree, file) {
    const filePath = file.history[0];

    const isBlogContent = filePath.match(/\/content\/blog\//);
    if (isBlogContent) {
      const textOnPage = toString(tree);
      const readingTime = getReadingTime(textOnPage);
      file.data.astro.frontmatter.readingTime = readingTime.text;
    }
  };
}
