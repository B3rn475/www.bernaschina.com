---
title: Dynamic list loading in JavaScript with fallback
date: 2019-09-22
featured_image: thumbnail.jpg
---
Let's talk today about an interesting challenge of this website and the way I solved it.

## The challenge

Showing a long list of items (e.g. a list of blog posts) can be challenging.
Here are few solution with their advantages and problems:

> Let's show all of theme

This may be a no go. A list can be really long and contain linked resources (e.g. post thumbnail images) which will be loaded all together, increasing dramatically the load time.

```html
<ul>
  <li>
    <a href="/post1">
      <h2>Post 1 Title</h2>
      <img src="/post1/thumbnail.jpg">
    </a>
  </li>
  ...
  <li>
    <a href="/post999">
      <h2>Post 100 Title</h2>
      <img src="/post999/thumbnail.jpg">
    </a>
  </li>
</ul>
```

> Let's paginate the list then

We can create group of items (a.k.a. pages) and show them separately.
This solution solves all the problems of the previous one: The list is split in smaller pages which will contains a small number of linked resources.

```html
<a href="/list/page/0">Newer Posts</a>
<ul>
  <li>
    <a href="/post11">
      <h2>Post 1 Title</h2>
      <img src="/post1/thumbnail.jpg">
    </a>
  </li>
  ...
  <li>
    <a href="/post20">
      <h2>Post 100 Title</h2>
      <img src="/post999/thumbnail.jpg">
    </a>
  </li>
</ul>
<a href="/list/page/2">Older Posts</a>
```

## How do we serve the pages?

Now that we have decided to split the list into pages we face the problem of serving them.
As before, here are few solution with their advantages and problems:

> Why making it complex? Let's call each page "Page 0", "Page 1", ... and serve them as separate pages

This solution is pretty simple.
It doesn't require any code to be executed at client-side. It can be implemented via a simple server-side script which returns `<page size>` elements starting from the one in position `<pages size> * <requested page>` (assuming a zero based index for pages). Server-side logic is not even required: it is possible to pre-compute the pages and store them as different HTML files.

The devil, as usual, is in the details.

A common use-case is to keep the list sorted from the latest items, going back towards older ones. In this case, by indexing pages by "position", we make their URL (Uniform Resource Locator) unstable.
The meaning of "Page 0" will change in time, a new item added to the list will move the others, and a user storing the link to this page will see different content in different points in time.

> Instead of splitting equally the list into pages, let's make the pages "flow" freely along the list.
We can index each page by the ID of the first item in the sub-list or by its date.

This solution is a bit more complex.
It still doesn't require any client-side code, but requires server side logic.
Each request for a page is, practically, a query on the list of items.
Server-side code is not strictly necessary, but the generation of the pages offline is more complex than before. It is important to properly link these pages together. It is, also, important to keep track of item deletions to avoid 404 (Not Found) for pages starting at a deleted item.

Thanks to this changes the page URL is now stable: the user will always see the same item on top of the list when requesting the same page (except for deletions, but it is expected).

> What about removing URL all together?

and also

> I would like an interface that doesn't require a full refresh every time I want to change page.

In this case it is time to call JavaScript for the rescue.

We can load the first page at load time and allow the user to request successive pages without a full refresh.
This solution looks perfect to achieve the new requirements. By not exposing the page we are currently displaying in the URL, it will always point to the entire list and the user will always see the latest items.

## Where do I store the data that JavaScript needs?

By moving the logic to the client side we solved the problem of interaction, but we still need to
store the list.
Once again, here are few solution with their advantages and problems:

> Let's add all of them into the HTML, hide them with CSS and show them when requested.

```html
<ul>
  <li>
    <a href="/post1">
      <h2>Post 1 Title</h2>
      <img src="/post1/thumbnail.jpg">
    </a>
  </li>
  ...
  <li>
    <a href="/post10">
      <h2>Post 1 Title</h2>
      <img src="/post10/thumbnail.jpg">
    </a>
  </li>
  <li class="hidden">
    <a href="/post11">
      <h2>Post 1 Title</h2>
      <img src="/post11/thumbnail.jpg">
    </a>
  </li>
  ...
  <li class="hidden">
    <a href="/post999">
      <h2>Post 100 Title</h2>
      <img src="/post999/thumbnail.jpg">
    </a>
  </li>
</ul>
```

This is still a no go. Even if hidden the linked resources are still fetched by the browser increasing load time and loading resources that may not even be shown.

> Why not reuse what we already have?
Let's just make the JavaScript load pages from the server. We can store them as before without exposing them to the user.

This is a simple solution.
We are reusing all the serving logic developed before, but using JavaScript to make is smoother.

> Problem solved, see you next time.
...
Wait?
...
What about the few users without JavaScript supported/enabled? What will they see?
What about crawlers? What will they index?

## How do I incorporate a fallback?

Support to legacy, or privacy concerned, users and indexing can be problematic.
You want your list to be accessible, even if without the full experience, by these users, or actors if you consider crawlers.
For the last time, here are few solution with their advantages and problems:

> Let's, by default, use a navigation schema without the need for JavaScript.
If the JavaScript loads we can use it to "remove" the fallback HTML and enable dynamic loading.

This solution is still simple.
It can be built by fusing two of the previous approaches.
Server-side logic works assuming that the client doesn't support JavaScript and the client chooses between the possible navigation schema.
This solution still has the main disadvantage of server-side pagination: we still expose, and need to support, URLs pointing to a specific page.

> Why didn't we want to load everything in the first place?
Let's load all the posts and dynamically hide them.

As a repetition, the problem with this solution is not the size of the list (hundreds of items will still weight few KBs); the problem is the "attitude" of the browser, which will start fetching the linked resources regardless to what JavaScript is going to do.

> Can we prevent it?

## How do I use `<noscript>` tags effectively?

The solution I suggest, and is currently used by this website, is to use `<noscript>` tags effectively.
`<noscript>` is a special tag which informs the browser to parse and display its content only if it doesn't support JavaScript. If JavaScript is available the content of the `<noscript>` tag is treated as text outside of the DOM (Document Object Model) Tree.


```html
<noscript>
  Your browser doesn't support JavaScript, here is a fallback content.

  Well... I'm sorry.
</noscript>
```

> What about loading the entire list, but "disable" pages using a `<noscript>` tag?

This solution is, in my opinion, simple and elegant at the same time.

```html
<ul>
  <!-- page 0 begin -->
  <li>
    <a href="/post1">
      <h2>Post 1 Title</h2>
      <img src="/post1/thumbnail.jpg">
    </a>
  </li>
  ...
  <li>
    <a href="/post10">
      <h2>Post 1 Title</h2>
      <img src="/post10/thumbnail.jpg">
    </a>
  </li>
  <!-- page 0 end -->
  <noscript> <!-- page 1 begin -->
    <li class="hidden">
      <a href="/post11">
        <h2>Post 1 Title</h2>
        <img src="/post11/thumbnail.jpg">
      </a>
    </li>
    ...
    <li class="hidden">
      <a href="/post999">
        <h2>Post 100 Title</h2>
        <img src="/post999/thumbnail.jpg">
      </a>
    </li>
  </noscript> <!-- page 9 end -->
</ul>
```

Given this structure, browsers without JavaScript will load the entire list, while browsers supporting JavaScript will load just the first page and ignore the rest of the list.
In the latter case, it is possible to change page by just moving the content of the next page (i.e. the first `<noscript>` tag) after the last element in the list (i.e. before the `<noscript>` tag itself).
```JavaScript
function showNextPage(ul) {
  var noscript = ul.querySelector('noscript'), // the first noscript
      parser = document.createElement('div'), // a temporary element to parse the content of the noscript
      li;
  parser.innerHTML = noscript.innerHTML; // parse the pages
  while (li = parser.querySelector('li')) { // for each parse li tag
    li.remove(); // remove it from the parser
    ul.insertBefore(li, noscript); // insert it before the noscript
  }
  noscript.remove(); // remove the noscript
}
```
