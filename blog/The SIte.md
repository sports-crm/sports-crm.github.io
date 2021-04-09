---
title: "The Site"
author: "Alex Miller"
publicationDate: "2021-02-28"
---

Welcome to first blog post describing the development and evolution of Sports CRM. In this post we describe the initial 
GitHub pages site.

<!-- end excerpt -->

## GitHub Pages Setup

[GitHub Pages](https://pages.github.com) allow you to host s website in GitHub Organisation, Account or Repository. For
Sports CRM we are hosting the site at the organisation level. To do this, the first step is to create a GitHub 
repository following the correct the naming convention. For the Sports CRM organisation, this is 
[sports-crm.github.io](https://github.com/sports-crm/sports-crm.github.io).

The second step is to tell Github where to serve the content for your site from. This is done in the main settings page
for the repository that contains your contents. You can specify a particular branch and then either the root folder or
the /docs folder. As we are using Gatsby to generate our site, we will serve the content from the root of a specific 
branch, github-pages. You can find out more about how we get the Gatsby generated site into this branch below.  

## The Site Source Code

The site itself is generated from [React](https://reactjs.org/) based typescript code using 
[Gatsby](https://www.gatsbyjs.com/). Gatsby is a "free, open source framework for building fast, powerful websites".

The [initial site](https://github.com/sports-crm/sports-crm.github.io/releases/tag/v1.0.0-0) was simply a bunch of 
static components styled with [Bulma](https://bulma.io/).

This blogpost is the first attempt at introducing dynamic content to the site. This is based on the 
[Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/). However, instead of adding a field to the existing 
'markdownRemark' node we create a new 'blogPost' node, via our own plugin.

## Publishing the site

Because GitHub will only serve content from the repository root or '/docs' directory, and Gatsby will only generate
content to the '/public' folder, we use Git worktree to build the site and commit it to the root of an orphaned branch,
'github-pages'.

Currently, publishing the site is manual process that requires the following steps. This process should be automated, 
probably using [GitHub Actions](https://github.com/features/actions).

From the repository root:- 
```shell
gasby clean
git worktree add public github-pages
gatsby build
cd public
git add -f -A .
git commit -m "commit_message"
git push origin github-pages
```