+++
title = "Switching to Zola"
date = 2020-01-14
description = "I am switching from Jekyll to Zola as the site generator for Pixeleden. Looks like Zola offers the best of both world: build speed and ease of templating..."
[extra]
cover_image = "zola-cezanne.png"
alt_text = "Painting by Cezanne: 'Paul Alexis Reading to Émile Zola,' 1869–1870, São Paulo Museum of Art."
+++

[Zola](https://www.getzola.org/) is a fast static site generator written in Rust. Like Hugo, it is a single binary with everything built-in.

As described by **Vincent Prouillet**, Zola's creator:
> "Zola is a powerful static site generator (SSG) inspired by Hugo but simpler to use. One of its goals is to try to do as much as possible at built time: anchors, search, Sass, table of contents, syntax highlighting and more."

Previously, this site was being generated using [Jekyll](https://jekyllrb.com/). For the past 2 years, I have some interest learning [Rust](https://www.rust-lang.org/), so I am eager to find a static generator built using Rust and I found Zola.

Also in the past I used [Hugo](https://gohugo.io/) and still using it for example with [my portfolio website](https://allanrey.es). Having a single binary installed in your machine makes running your site generator painless since you don't have to worry on maintaining external dependencies. Everything it needs build the site are all built-in. If there will be a new release, you just [grab the new pre-built binaries](https://www.getzola.org/documentation/getting-started/installation/) or in my case via [Homebrew](https://brew.sh/) on the Mac:


```bash
$ brew upgrade zola
...
==> Upgrading 1 outdated package:
zola 0.8.0 -> 0.9.0_1
...
==> Summary
🍺  /usr/local/Cellar/zola/0.9.0_1: 10 files, 16.2MB
Removing: /usr/local/Cellar/zola/0.8.0... (10 files, 15.8MB)
==> Checking for dependents of upgraded formulae...
==> No dependents found!
```

**🎉 That's it!** No dependency rabbit-hole, at least for me.
In some projects, I gave up using Gatsby because when I try to update it or add a plug-in I mostly end up spending more time troubleshooting the collateral damage.

The only thing that made me wrestle with Hugo is the templating language on top. This is what hooked me with Zola, it offers the best of both worlds:
- a single binary like Hugo
- a templating language—[Tera](https://tera.netlify.com/) that I am more comfortable writing since it is like [Liquid](https://shopify.github.io/liquid/) that Jekyll use.

Moving my blog from Jekyll to Zola is a breeze. I'll continue with the test drive and perhaps write a post on how I use it.
