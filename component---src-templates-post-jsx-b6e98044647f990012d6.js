(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{156:function(t,e,a){"use strict";a.r(e);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=a(159),l=a.n(s),c=a(162),m=a(284),u=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.config.userTwitter,e=this.props.expanded;return o.a.createElement(m.Follow,{username:t,options:{count:!!e||"none"}})},e}(i.Component),p=(a(367),a(44)),d=a.n(p),h=a(369),f=a.n(h),g=a(188),E=a.n(g),y=a(158),v=a.n(y),b=function(t){function e(e){var a;return(a=t.call(this,e)||this).state={toasts:[]},a.notifyAboutComment=a.notifyAboutComment.bind(d()(d()(a))),a.onSnackbarDismiss=a.onSnackbarDismiss.bind(d()(d()(a))),a}r()(e,t);var a=e.prototype;return a.onSnackbarDismiss=function(){var t=this.state.toasts.slice(1);this.setState({toasts:t})},a.notifyAboutComment=function(){var t=this.state.toasts.slice();t.push({text:"New comment available!"}),this.setState({toasts:t})},a.render=function(){var t=this.props.postNode;if(!v.a.disqusShortname)return null;var e=t.frontmatter,a=E()(v.a.siteUrl,v.a.pathPrefix,t.fields.slug);return o.a.createElement(f.a,{shortname:v.a.disqusShortname,identifier:e.title,title:e.title,url:a,category_id:e.category_id,onNewComment:this.notifyAboutComment})},e}(i.Component),w=(a(57),a(371)),C=a.n(w),D=a(43),N=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.tags;return o.a.createElement("div",{className:"post-tag-container"},t&&t.map(function(t){return o.a.createElement(D.Link,{key:t,style:{textDecoration:"none"},to:"/tags/"+C()(t)},o.a.createElement("button",null,t))}))},e}(i.Component),x=a(444),A=a(445),T=a(446),S=a(447),k=a(448),P=a(449),I=a(450),L=a(451),_=a(452),U=a(453),Y=a(454),z=a(455),F=a(456),B=a(457),M=a(458),q=a(459),O=(a(384),function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props,e=t.postNode,a=t.postPath,n=t.mobile,r=e.frontmatter,i=E()(v.a.siteUrl,v.a.pathPrefix,a),s=n?36:48,l=function(t){return o.a.createElement("div",{className:"share-count"},function(t){return t>0?t:""}(t))};return o.a.createElement("div",{className:"social-links"},o.a.createElement(x.a,{url:i,title:r.title},o.a.createElement(A.a,{round:!0,size:s}),o.a.createElement(T.a,{url:i},function(t){return l(t)})),o.a.createElement(S.a,{url:i,title:r.title},o.a.createElement(k.a,{round:!0,size:s})),o.a.createElement(P.a,{url:i},o.a.createElement(I.a,{round:!0,size:s}),o.a.createElement(L.a,{url:i},function(t){return l(t)})),o.a.createElement(_.a,{url:i,quote:e.excerpt},o.a.createElement(U.a,{round:!0,size:s}),o.a.createElement(Y.a,{url:i},function(t){return l(t)})),o.a.createElement(z.a,{url:i,title:r.title,description:e.excerpt},o.a.createElement(F.a,{round:!0,size:s}),o.a.createElement(B.a,{url:i},function(t){return l(t)})),o.a.createElement(M.a,{url:i},o.a.createElement(q.a,{round:!0,size:s})))},e}(i.Component)),j=a(230);a(437),a(439);a.d(e,"default",function(){return J}),a.d(e,"pageQuery",function(){return H});var J=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.pageContext.slug,e=this.props.data.markdownRemark,a=e.frontmatter;return a.id||(a.id=t),a.category_id||(a.category_id=v.a.postDefaultCategoryID),o.a.createElement(c.a,null,o.a.createElement("div",null,o.a.createElement(l.a,null,o.a.createElement("title",null,a.title+" | "+v.a.siteTitle)),o.a.createElement(j.a,{postPath:t,postNode:e,postSEO:!0}),o.a.createElement("div",null,o.a.createElement("h1",null,a.title),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),o.a.createElement("div",{className:"post-meta"},o.a.createElement(N,{tags:a.tags}),o.a.createElement(O,{postPath:t,postNode:e})),o.a.createElement(u,{config:v.a}),o.a.createElement(b,{postNode:e}))))},e}(o.a.Component),H="3288223027"},158:function(t,e){t.exports={siteTitle:"孙志勇的个人网站",siteTitleShort:"孙志勇的个人网站",siteTitleAlt:"孙志勇的个人网站",siteLogo:"/logos/logo-1024.jpg",siteUrl:"https://zhiyongsun.github.io",pathPrefix:"/gatsby-advanced-starter",siteDescription:"孙志勇的个人网站",siteRss:"/rss.xml",siteFBAppID:"1825356251115265",googleAnalyticsID:"UA-47311644-5",disqusShortname:"https-vagr9k-github-io-gatsby-advanced-starter",postDefaultCategoryID:"Tech",dateFromFormat:"YYYY-MM-DD",dateFormat:"DD/MM/YYYY",userName:"孙志勇",userTwitter:"",userLocation:"Shanghai, China",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"前端开发",userLinks:[{label:"GitHub",url:"https://github.com/Vagr9K/gatsby-advanced-starter",iconClassName:"fa fa-github"},{label:"Twitter",url:"https://twitter.com/Vagr9K",iconClassName:"fa fa-twitter"},{label:"Email",url:"mailto:vagr9k@gmail.com",iconClassName:"fa fa-envelope"}],copyright:"Copyright © 2018. Advanced User",themeColor:"#c62828",backgroundColor:"#e0e0e0"}},162:function(t,e,a){"use strict";a.d(e,"a",function(){return u});var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=a(159),l=a.n(s),c=a(158),m=a.n(c),u=(a(163),function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.children;return o.a.createElement("div",{className:"container"},o.a.createElement(l.a,null,o.a.createElement("meta",{name:"description",content:m.a.siteDescription})),t)},e}(o.a.Component))},163:function(t,e,a){},230:function(t,e,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=a(159),l=a.n(s),c=a(188),m=a.n(c),u=a(158),p=a.n(u),d=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e,a,n,r=this.props,i=r.postNode,s=r.postPath,c=r.postSEO;if(c){var u=i.frontmatter;t=u.title,e=u.description?u.description:i.excerpt,a=u.cover,n=m()(p.a.siteUrl,p.a.pathPrefix,s)}else t=p.a.siteTitle,e=p.a.siteDescription,a=p.a.siteLogo;a=a&&m()(p.a.siteUrl,p.a.pathPrefix,a);var d=m()(p.a.siteUrl,p.a.pathPrefix),h=[{"@context":"http://schema.org","@type":"WebSite",url:d,name:t,alternateName:p.a.siteTitleAlt?p.a.siteTitleAlt:""}];return c&&h.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:t,image:a}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:d,name:t,alternateName:p.a.siteTitleAlt?p.a.siteTitleAlt:"",headline:t,image:{"@type":"ImageObject",url:a},description:e}),o.a.createElement(l.a,null,o.a.createElement("meta",{name:"description",content:e}),o.a.createElement("meta",{name:"image",content:a}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(h)),o.a.createElement("meta",{property:"og:url",content:c?n:d}),c?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:t}),o.a.createElement("meta",{property:"og:description",content:e}),o.a.createElement("meta",{property:"og:image",content:a}),o.a.createElement("meta",{property:"fb:app_id",content:p.a.siteFBAppID?p.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:p.a.userTwitter?p.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:t}),o.a.createElement("meta",{name:"twitter:description",content:e}),o.a.createElement("meta",{name:"twitter:image",content:a}))},e}(i.Component);e.a=d},384:function(t,e,a){},437:function(t,e,a){},439:function(t,e,a){}}]);
//# sourceMappingURL=component---src-templates-post-jsx-b6e98044647f990012d6.js.map