(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{153:function(t,e,a){"use strict";a.r(e),a.d(e,"default",function(){return h}),a.d(e,"pageQuery",function(){return m});var n=a(7),r=a.n(n),o=a(0),i=a.n(o),s=a(159),c=a.n(s),l=a(162),u=a(191),p=a(158),d=a.n(p),h=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.pageContext.category,e=this.props.data.allMarkdownRemark.edges;return i.a.createElement(l.a,null,i.a.createElement("div",{className:"category-container"},i.a.createElement(c.a,{title:'Posts in category "'+t+'" | '+d.a.siteTitle}),i.a.createElement(u.a,{postEdges:e})))},e}(i.a.Component),m="4191571131"},158:function(t,e){t.exports={siteTitle:"孙志勇的博客",siteTitleShort:"孙志勇的博客",siteTitleAlt:"GatsbyJS Advanced Starter",siteLogo:"/logos/logo-1024.png",siteUrl:"https://zhiyongsun.github.io",pathPrefix:"/gatsby-advanced-starter",siteDescription:"A GatsbyJS stater with Advanced design in mind.",siteRss:"/rss.xml",siteFBAppID:"1825356251115265",googleAnalyticsID:"UA-47311644-5",disqusShortname:"https-vagr9k-github-io-gatsby-advanced-starter",postDefaultCategoryID:"Tech",dateFromFormat:"YYYY-MM-DD",dateFormat:"DD/MM/YYYY",userName:"Advanced User",userTwitter:"",userLocation:"North Pole, Earth",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.",userLinks:[{label:"GitHub",url:"https://github.com/Vagr9K/gatsby-advanced-starter",iconClassName:"fa fa-github"},{label:"Twitter",url:"https://twitter.com/Vagr9K",iconClassName:"fa fa-twitter"},{label:"Email",url:"mailto:vagr9k@gmail.com",iconClassName:"fa fa-envelope"}],copyright:"Copyright © 2017. Advanced User",themeColor:"#c62828",backgroundColor:"#e0e0e0"}},162:function(t,e,a){"use strict";a.d(e,"a",function(){return p});var n=a(7),r=a.n(n),o=a(0),i=a.n(o),s=a(159),c=a.n(s),l=a(158),u=a.n(l),p=(a(163),function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.children;return i.a.createElement("div",{className:"container"},i.a.createElement(c.a,null,i.a.createElement("meta",{name:"description",content:u.a.siteDescription})),t)},e}(i.a.Component))},163:function(t,e,a){},191:function(t,e,a){"use strict";a(57),a(83),a(84);var n=a(7),r=a.n(n),o=a(0),i=a.n(o),s=a(43),c=function(t){function e(){return t.apply(this,arguments)||this}r()(e,t);var a=e.prototype;return a.getPostList=function(){var t=[];return this.props.postEdges.forEach(function(e){t.push({path:e.node.fields.slug,tags:e.node.frontmatter.tags,cover:e.node.frontmatter.cover,title:e.node.frontmatter.title,date:e.node.fields.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead})}),t},a.render=function(){var t=this.getPostList();return i.a.createElement("div",null,t.map(function(t){return i.a.createElement(s.Link,{to:t.path,key:t.title},i.a.createElement("h1",null,t.title))}))},e}(i.a.Component);e.a=c}}]);
//# sourceMappingURL=component---src-templates-category-jsx-315b7d005d8d070d7d11.js.map