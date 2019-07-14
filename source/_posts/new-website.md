---
title: New Website, New Workflow, New Intentions
date: 2019-07-14
featured_image: thumbnail.jpg
alias:
- en/projects/
- it/progetti/
- en/projects/functiondrawer/
- it/progetti/functiondrawer/
- en/projects/mathparsekit/
- it/progetti/mathparsekit/
- en/projects/hcbackend/
- it/progetti/hcbackend/
- en/projects/crowdannotationaggregator/
- it/progetti/crowdannotationaggregator/
- en/cv/
- it/cv/
- en/blog/
- it/blog/
- en/blog/software/
- it/blog/software/
- en/blog/software/euroitv-2013/
- it/blog/software/euroitv-2013/
- en/blog/software/nodejs-code-reuse-right-way/
- it/blog/software/nodejs-riusare-il-codice-ma-nel-modo-giusto/
---

> TL;DR I've rebuilt the website from the ground up and changed focus.

It has been a while since my last post on this blog and, in general, since any real change to the website.

In this post I will tell you why and what I'm changing.

## Problems
The work on the old website has become complex and tedious. The is no single corporate but here is a list of possible problems:

![Old Website][url-old-website-image-file]

### Why?
The original website didn't have a real goal:
- It has been for a while a place for me to experiment with [Concrete5][concrete5-website-url] and experiment in general.
- It was an incomplete list of projects (it is much better to look at my [GitHub Account][github-account-url]).
- It was an outdated list of publications (it is much better to look at [Google Scholar][google-scholar-author-url] or [DBLP][dblp-author-url])
- It was a partial and outdated CV (it is much better to look at [LinkedIn][linkedin-profile-url])
- It was supposed to be multi-language, even though translating everything and keeping it synchronized was extremely time consuming.

### How?
The original website was built with [Concrete5][concrete5-website-url], an amazing PHP based CMS (Content Management System) which I suggest you to try if you want to build something complex and simplify you life.
The problems with this approach were:
- I started the project with Concrete5 version 6 (a.k.a. 5.6), which was subsequently replaced from the completely rewritten version 7.
  Given the fact that I'm not working on the website full-time and that, by design, there is [no converter from version 6 to 7][concrete5-eol-url], I got stuck with an outdated version.
- Using a server-side CMS requires maintenance.
  Even if I was not actively adding content, I needed to keep pace with security patches and ordinary maintenance.
- It was hosted on an entry level PHP Hosting from [Netsons s.r.l][netsons-website-url].
  While I'm really happy with the features to price ratio, the lack of SSL support on a server-side CMS was a security vulnerability.
- It wasn't using the majority of the features that the CMS and the Hosting were providing.

## Solutions
In order to solve these problems and get the website back on track here are some changes.

![New Website][url-new-website-image-file]

### New Workflow
The new website is no more based on Concrete5, but on [Hexo][hexo-website-url]:

> A fast, simple & powerful blog framework

The advantages are:
- Hexo is a static website generator.
  This removes the requirements for PHP and opens many new Hosting options.
- I can write each post/page using the technology I think is best.
  At the moment I'm using [Markdown][markdown-website-url], but I will be able to change this decision on a per post-page basis.
- I have a good excuse to change the experiment with new themes, the old one is "too complex" to port.

The source code of the website will be hosted on [GitHub][website-repository-url].
The code will be OpenSource (MIT Licence) and the content will be released under a Creative Commons license (CC BY 4.0).

The generated files will also be hosted and served by GitHub thanks to [GitHub Pages][github-pages-url].

While I will be able to develop and write content locally, the website will be automatically be regenerated and kept in sync by [Travis CI][travisci-website-url], which will trigger a CD (Continuous Deployment) workflow every time I will update the repository.

![Raspberry Pi 1 Model B][url-continuous-deployment-image-file]

### New Intentions
The new website will no try to do everything, but will focus on the blog, which was probably the most interesting part of the old website.

It will focus only on __English content__. Maintaining both __English__ and __Italian__ is time consuming and the majority of the feedback I got was related to English content.

The interesting old posts have already been ported and new ones will come soon.

My intention is to start releasing at least a new blog post every week.

> Let's see if I can do it.

[concrete5-website-url]: https://www.concrete5.org/
[github-account-url]: https://github.com/B3rn475
[google-scholar-author-url]: https://scholar.google.pt/citations?user=Pt83gAMAAAAJ
[dblp-author-url]: https://dblp.org/pers/hd/b/Bernaschina:Carlo
[linkedin-profile-url]: https://linkedin.com/in/b3rn475
[concrete5-eol-url]: https://www.concrete5.org/about/blog/community-blog/official-end-life-concrete5-version-6x
[netsons-website-url]: https://www.netsons.com/
[hexo-website-url]: https://hexo.io
[markdown-website-url]: https://daringfireball.net/projects/markdown/
[website-repository-url]: https://github.com/B3rn475/www.bernaschina.com
[github-pages-url]: https://pages.github.com/
[travisci-website-url]: https://travis-ci.org/
[url-old-website-image-file]: ./old-website.jpg
[url-new-website-image-file]: ./new-website.jpg
[url-continuous-deployment-image-file]: ./continuous-deployment.jpg
