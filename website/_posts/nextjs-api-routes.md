---
title: 'Using Next.JS API routes'
excerpt:
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Praesent elementum
  facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan
  sit amet nulla facilities morbi tempus.'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2020-12-11T00:00:01.000Z'
author:
  name: Khari Johnson
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
---

Next.JS comes with a useful feature out of the box, api routes. Files created in
the `pages/api/` folder are treated as an endpoint rather than a page. Instead
of exporting a React component to display your UI, you can export a function
returning, say, a JSON response.

<!--truncate-->

For example, if you wanted to return a blog post from your CMS, you could write
the following in file `pages/api/post.js` :

```jsx
export default (request, response) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ title: 'My Blog Post' }));
};
```

The two parameters, `request` and `response`, are explained in depth
[here](https://nextjs.org/docs/api-routes/introduction).

If we wanted to handle multiple methods in a single route, we could check the
method property from the request object.

```jsx
export default (req, res) => {
  switch (req.method) {
    case 'GET':
      // process GET requests
      break;
    case 'POST':
      // process POST requests
      break;
    default:
      res.status(405).end(); //Method Not Allowed
      // process every other method
      break;
  }
};
```

API Routes also support Next.JS
[dynamic routes](https://nextjs.org/docs/routing/dynamic-routes) and can be used
used to pass a query to our routes.

For example, if we wanted to fetch our posts based on their `uid`, we could
write the following the file `pages/api/post/[uid].js`

```jsx
export default async (req, res) => {
  // use the uid from the reauest's query to fetch our post from our CMS
  const post = await fetchPostFromCMS(req.query.uid);

  res.statusCode = 200;
  res.end(JSON.stringify(post));
};
```
