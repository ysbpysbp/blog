(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{152:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return g}),n.d(e,"pageQuery",function(){return h});var a=n(7),r=n.n(a),o=n(0),i=n.n(o),s=n(159),u=n.n(s),c=n(162),l=n(191),p=n(158),d=n.n(p),g=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.pageContext.tag,e=this.props.data.allMarkdownRemark.edges;return i.a.createElement(c.a,null,i.a.createElement("div",{className:"tag-container"},i.a.createElement(u.a,{title:'Posts tagged as "'+t+'" | '+d.a.siteTitle}),i.a.createElement(l.a,{postEdges:e})))},e}(i.a.Component),h="3824571933"},158:function(t,e){t.exports={siteTitle:"孙志勇的个人网站",siteTitleShort:"孙志勇的个人网站",siteTitleAlt:"孙志勇的个人网站",siteLogo:"/logos/logo-1024.jpg",siteUrl:"https://www.sunzhiyong.cn",pathPrefix:"/gatsby-advanced-starter",siteDescription:"孙志勇的个人网站",siteRss:"/rss.xml",siteFBAppID:"1825356251115265",googleAnalyticsID:"UA-129069253-1",disqusShortname:"sunzhiyong",postDefaultCategoryID:"Tech",dateFromFormat:"YYYY-MM-DD",dateFormat:"DD/MM/YYYY",userName:"孙志勇",userTwitter:"",userLocation:"Shanghai, China",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"前端开发",userLinks:[{label:"GitHub",url:"https://github.com/zhiyongsun",iconClassName:"fa fa-github"},{label:"Email",url:"785037725@qq.com",iconClassName:"fa fa-envelope"}],copyright:"Copyright © 2018. sunzhiyong",themeColor:"#c62828",backgroundColor:"#e0e0e0"}},162:function(t,e,n){"use strict";n.d(e,"a",function(){return p});var a=n(7),r=n.n(a),o=n(0),i=n.n(o),s=n(159),u=n.n(s),c=n(158),l=n.n(c),p=(n(163),function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.children;return i.a.createElement("div",{className:"container"},i.a.createElement(u.a,null,i.a.createElement("meta",{name:"description",content:l.a.siteDescription})),t)},e}(i.a.Component))},163:function(t,e,n){},191:function(t,e,n){"use strict";n(57),n(83),n(84);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),s=n(43),u=n(192).getDate,c=function(t){function e(){return t.apply(this,arguments)||this}r()(e,t);var n=e.prototype;return n.getPostList=function(){var t=[];return this.props.postEdges.forEach(function(e){t.push({path:e.node.fields.slug,tags:e.node.frontmatter.tags,cover:e.node.frontmatter.cover,title:e.node.frontmatter.title,date:u(e.node.fields.date),excerpt:e.node.excerpt,timeToRead:e.node.timeToRead})}),t},n.render=function(){var t=this.getPostList();return i.a.createElement("div",null,t.map(function(t){return i.a.createElement("div",null,t.date,"：",i.a.createElement(s.Link,{to:t.path,key:t.title},t.title))}))},e}(i.a.Component);e.a=c},192:function(t,e){t.exports={getDate:function(t){var e=new Date(t),n=e.getFullYear(),a=e.getMonth()+1;a<10&&(a="  "+a);var r=e.getDate();return r<10&&(r="0"+r),n+"年"+a+"月"+r+"日"}}}}]);
//# sourceMappingURL=component---src-templates-tag-jsx-dc16c8e296f88254bed5.js.map