set -e
cd docs/.vuepress/dist
# git init
# git add -A
git commit -m "sh test"
git remote add origin https://github.com/Tr-blank/ITblog.git
git push -f origin master
