import { NextApiRequest, NextApiResponse } from 'next';
import { SitemapStream, streamToPromise } from 'sitemap';

import posts from '../blog/_index';

const staticPages = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' },
  { title: 'Services', url: '/services' },
  { title: 'Blog', url: '/blog', changefreq: 'weekly' },
  { title: 'Contact', url: '/contact' },
];

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
    });

    // Create each URL row for each static page
    staticPages.forEach((page) => {
      smStream.write({
        changefreq: 'monthly',
        priority: 0.5,
        ...page,
      });
    });

    // Create each URL row for each blog post
    Object.entries(posts).forEach(([name, metadata]) => {
      smStream.write({
        title: name,
        url: `/blog/${metadata.slug}`,
        changefreq: 'weekly',
        priority: 0.9,
      });
    });

    // End sitemap stream
    smStream.end();

    // XML sitemap string
    const sitemapOutput = (await streamToPromise(smStream)).toString();

    // Change headers
    res.writeHead(200, {
      'Content-Type': 'application/xml',
    });

    // Display output to user
    res.end(sitemapOutput);
  } catch (e) {
    console.log(e);
    res.send(JSON.stringify(e));
  }
};
