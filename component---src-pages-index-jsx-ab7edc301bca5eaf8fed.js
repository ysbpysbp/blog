(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return d});var a=n(7),r=n.n(a),i=n(0),o=n.n(i),s=n(160),c=n.n(s),l=n(162),p=n(175),m=n(194),u=n(159),h=n.n(u),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return o.a.createElement(l.a,null,o.a.createElement("div",{className:"index-container"},o.a.createElement(c.a,{title:h.a.siteTitle}),o.a.createElement("div",null,h.a.siteTitle),o.a.createElement(m.a,null),o.a.createElement(p.a,{postEdges:e})))},t}(o.a.Component);t.default=g;var d="1014838814"},159:function(e,t){e.exports={siteTitle:"孙志勇的个人网站",siteTitleShort:"孙志勇的个人网站",siteTitleAlt:"孙志勇的个人网站",siteLogo:"/logos/logo-1024.jpg",siteUrl:"https://www.sunzhiyong.cn",pathPrefix:"/gatsby-advanced-starter",siteDescription:"孙志勇的个人网站",siteRss:"/rss.xml",siteFBAppID:"1825356251115265",googleAnalyticsID:"UA-129069253-1",disqusShortname:"sunzhiyong",postDefaultCategoryID:"Tech",dateFromFormat:"YYYY-MM-DD",dateFormat:"DD/MM/YYYY",userName:"孙志勇",userTwitter:"",userLocation:"Shanghai, China",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"前端开发",userLinks:[{label:"GitHub",url:"https://github.com/zhiyongsun",iconClassName:"fa fa-github"},{label:"Email",url:"785037725@qq.com",iconClassName:"fa fa-envelope"}],copyright:"Copyright © 2018. sunzhiyong",themeColor:"#c62828",backgroundColor:"#e0e0e0"}},162:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var a=n(7),r=n.n(a),i=n(0),o=n.n(i),s=n(160),c=n.n(s),l=n(159),p=n.n(l),m=(n(163),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("div",{className:"container"},o.a.createElement(c.a,null,o.a.createElement("meta",{name:"description",content:p.a.siteDescription})),e)},t}(o.a.Component))},163:function(e,t,n){},169:function(e,t,n){var a,r,i;i=function(){return function(){return function(e){var t=[];if(e[0].match(/^[^\/:]+:\/*$/)&&e.length>1){var n=e.shift();e[0]=n+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^\/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^\/:]+):\/*/,"$1://");for(var a=0;a<e.length;a++){var r=e[a];if("string"!=typeof r)throw new TypeError("Url must be a string. Received "+r);""!==r&&(a>0&&(r=r.replace(/^[\/]+/,"")),r=a<e.length-1?r.replace(/[\/]+$/,""):r.replace(/[\/]+$/,"/"),t.push(r))}var i=t.join("/"),o=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return i=o.shift()+(o.length>0?"?":"")+o.join("&")}("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},void 0!==e&&e.exports?e.exports=i():void 0===(r="function"==typeof(a=i)?a.call(t,n,t,e):a)||(e.exports=r)},175:function(e,t,n){"use strict";n(57),n(83),n(84);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),s=n(43),c=n(176).getDate,l=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:c(t.node.fields.date),excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},n.render=function(){var e=this.getPostList();return o.a.createElement("div",null,e.map(function(e){return o.a.createElement("div",null,e.date,"：",o.a.createElement(s.Link,{to:e.path,key:e.title},e.title))}))},t}(o.a.Component);t.a=l},176:function(e,t){e.exports={getDate:function(e){var t=new Date(e),n=t.getFullYear(),a=t.getMonth()+1;a<10&&(a="  "+a);var r=t.getDate();return r<10&&(r="0"+r),n+"年"+a+"月"+r+"日"}}},194:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),o=n.n(i),s=n(160),c=n.n(s),l=n(169),p=n.n(l),m=n(159),u=n.n(m),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n,a,r=this.props,i=r.postNode,s=r.postPath,l=r.postSEO;if(l){var m=i.frontmatter;e=m.title,t=m.description?m.description:i.excerpt,n=m.cover,a=p()(u.a.siteUrl,u.a.pathPrefix,s)}else e=u.a.siteTitle,t=u.a.siteDescription,n=u.a.siteLogo;n=n&&p()(u.a.siteUrl,u.a.pathPrefix,n);var h=p()(u.a.siteUrl,u.a.pathPrefix),g=[{"@context":"http://schema.org","@type":"WebSite",url:h,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:""}];return l&&g.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":a,name:e,image:n}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:h,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:n},description:t}),o.a.createElement(c.a,null,o.a.createElement("meta",{name:"description",content:t}),o.a.createElement("meta",{name:"image",content:n}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(g)),o.a.createElement("meta",{property:"og:url",content:l?a:h}),l?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:e}),o.a.createElement("meta",{property:"og:description",content:t}),o.a.createElement("meta",{property:"og:image",content:n}),o.a.createElement("meta",{property:"fb:app_id",content:u.a.siteFBAppID?u.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:u.a.userTwitter?u.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:e}),o.a.createElement("meta",{name:"twitter:description",content:t}),o.a.createElement("meta",{name:"twitter:image",content:n}))},t}(i.Component);t.a=h}}]);
//# sourceMappingURL=component---src-pages-index-jsx-ab7edc301bca5eaf8fed.js.map