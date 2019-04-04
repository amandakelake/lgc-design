#!/usr/bin/env sh
# abort on errors
set -e

# 部署vuepress风格博客
npm run docs:build
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:amandakelake/lgc-design-vuepress-docs.git master:gh-pages
cd -