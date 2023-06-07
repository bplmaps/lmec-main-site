# lmec-main-site

> Codebase for Leventhal Map & Education Center main website

LMEC's website is built with the static site generator [Hugo](https://gohugo.io/). Its front-end editing is configured with [Tina](https://tina.io/docs/), a Git-backed headless CMS.

The production site deploys with [Netlify](https://netlify.com) to [https://leventhalmap.org](https://leventhalmap.org). Pushing changes to GitHub will trigger rebuild of a staging site.

## Get started

To get started with running a local version of the LMEC website, clone this repo, `cd` into it, and install dependencies:

    npm install

## Develop locally (no Tina admin)

Serve a development version of the website with hot reload:

    hugo serve -FD

The `-FD` flag displays draft posts and future posts.

## Develop locally with Tina admin

> Tina is in a beta release. Not everything will work as expected. An active community of developers and Tina users are tracking issues and discussing them in forums at [Tina's GitHub page](https://github.com/tinacms/tinacms/discussions).

To serve a development version of the website with admin privileges for configuring the Tina front-end:

    npm run dev

In addition to spinning up a development version of the website, this serves a local version of the Tina front-end at `localhost:1234/admin`.

## Rebuild for Git push

Before you push changes to GitHub, you should rebuild the site to ensure that your local edits are synchronized with TinaCloud. To do so, simply:

    npm run build

This overwrites contents of the `tina/__generated__` directory as well as the `tina/tina-lock.json` file. 