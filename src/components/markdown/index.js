import CodeBlock from './CodeBlock.astro';
import Callout from './Callout.astro';
import Figure from './Figure.astro';
import Video from './Video.astro';
import SlashLine from './SlashLine.astro';
import Feedback from './Feedback.astro';

export default {
  pre: CodeBlock,
  blockquote: Callout,
  Figure,
  Video,
  SlashLine,
  Feedback,
};
