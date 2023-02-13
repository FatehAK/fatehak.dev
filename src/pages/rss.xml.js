import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { APP_CONFIG } from 'appConfig';

export async function get(context) {
  const postEntries = await getCollection('blog', ({ data }) => data.draft !== true);
  const sortedPosts = postEntries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  const rssItems = sortedPosts.map(({ data, slug }) => {
    const isExternalPost = !!data.url;

    if (isExternalPost) {
      return {
        title: data.title,
        pubDate: data.date,
        link: data.url,
      };
    }

    const link = `/blog/${slug}/`;
    return {
      title: data.title,
      pubDate: data.date,
      description: data.description,
      link,
      customData: [
        `<atom:link href="${link}" rel="standout"/>`,
        `<media:description>${data.description}</media:description>`,
      ].join(''),
    };
  });

  return rss({
    title: APP_CONFIG.META.title,
    description: APP_CONFIG.META.description,
    site: context.site,
    items: rssItems,
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
      media: 'http://search.yahoo.com/mrss/',
    },
    customData: [
      '<language>en-us</language>',
      `<atom:link href="${context.site}rss.xml" rel="self" type="application/rss+xml" />`,
    ].join(''),
    stylesheet: '/rss/styles.xsl',
  });
}
