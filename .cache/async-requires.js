// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-post-jsx": () => import("/Users/sunzhiyong/myProjects/zhiyongsun.github.io/src/templates/post.jsx" /* webpackChunkName: "component---src-templates-post-jsx" */),
  "component---src-templates-tag-jsx": () => import("/Users/sunzhiyong/myProjects/zhiyongsun.github.io/src/templates/tag.jsx" /* webpackChunkName: "component---src-templates-tag-jsx" */),
  "component---src-templates-category-jsx": () => import("/Users/sunzhiyong/myProjects/zhiyongsun.github.io/src/templates/category.jsx" /* webpackChunkName: "component---src-templates-category-jsx" */),
  "component---cache-dev-404-page-js": () => import("/Users/sunzhiyong/myProjects/zhiyongsun.github.io/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-about-jsx": () => import("/Users/sunzhiyong/myProjects/zhiyongsun.github.io/src/pages/about.jsx" /* webpackChunkName: "component---src-pages-about-jsx" */),
  "component---src-pages-index-jsx": () => import("/Users/sunzhiyong/myProjects/zhiyongsun.github.io/src/pages/index.jsx" /* webpackChunkName: "component---src-pages-index-jsx" */)
}

exports.data = () => import("/Users/sunzhiyong/myProjects/zhiyongsun.github.io/.cache/data.json")

