#!/usr/bin/env sh
# abort on errors
set -e

# 部署自己写的博客
npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:amandakelake/lgc-design-docs.git master:gh-pages
cd -