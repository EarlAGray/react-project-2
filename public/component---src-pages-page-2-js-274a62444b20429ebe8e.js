(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{139:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(143),c=t(154);n.default=function(){return i.a.createElement(c.a,null,i.a.createElement("div",null,i.a.createElement("h1",null,"Hi from the second page"),i.a.createElement("p",null,"Welcome to page 2"),i.a.createElement(r.Link,{to:"/"},"Go back to the homepage")))}},143:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return m}),t.d(n,"StaticQueryContext",function(){return M}),t.d(n,"StaticQuery",function(){return g});var a=t(0),i=t.n(a),r=t(4),c=t.n(r),o=t(142),l=t.n(o);t.d(n,"Link",function(){return l.a}),t.d(n,"withPrefix",function(){return o.withPrefix}),t.d(n,"navigate",function(){return o.navigate}),t.d(n,"push",function(){return o.push}),t.d(n,"replace",function(){return o.replace}),t.d(n,"navigateTo",function(){return o.navigateTo});var u=t(25);t.d(n,"waitForRouteChange",function(){return u.c});var d=t(144),s=t.n(d);t.d(n,"PageRenderer",function(){return s.a});var I=t(35);t.d(n,"parsePath",function(){return I.a});var M=i.a.createContext({}),g=function(e){return i.a.createElement(M.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},144:function(e,n,t){var a;e.exports=(a=t(148))&&a.default||a},147:function(e){e.exports={data:{site:{siteMetadata:{title:"E.A. Gray's Portfolio",description:"Portfolio of E.A. Gray, Service & Interaction Designer",keywords:"portfolio, interaction designer, e.a. gray, earl gray, earl anthony gray, 2d animator, ux/ui designer, service & interaction designer, games, game designer"}},allContentfulLink:{edges:[{node:{title:"Home",url:"/",createdAt:"2018-10-16T00:28:54.363Z"}},{node:{title:"Courses",url:"/courses",createdAt:"2018-10-16T00:30:13.627Z"}},{node:{title:"About",url:"/about",createdAt:"2018-10-16T00:30:29.217Z"}},{node:{title:"Contact",url:"/contact",createdAt:"2018-10-16T00:30:44.723Z"}},{node:{title:"Privacy",url:"/privacy",createdAt:"2018-10-16T00:30:55.587Z"}}]}}}},148:function(e,n,t){"use strict";t.r(n);t(36);var a=t(0),i=t.n(a),r=t(4),c=t.n(r),o=t(50),l=t(2),u=function(e){var n=e.location,t=l.default.getResourcesForPathnameSync(n.pathname);return i.a.createElement(o.a,Object.assign({location:n,pageResources:t},t.json))};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},n.default=u},149:function(e,n,t){},151:function(e,n){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDBIMTVDMjMuMjg0MyAwIDMwIDYuNzE1NzMgMzAgMTVDMzAgMjMuMjg0MyAyMy4yODQzIDMwIDE1IDMwSDBWMFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPG1hc2sgaWQ9Im1hc2swIiBtYXNrLXR5cGU9ImFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMEgxNUMyMy4yODQzIDAgMzAgNi43MTU3MyAzMCAxNUMzMCAyMy4yODQzIDIzLjI4NDMgMzAgMTUgMzBIMFYwWiIgZmlsbD0id2hpdGUiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCAwQzguMjg0MjcgMCAxNSA2LjcxNTczIDE1IDE1QzE1IDIzLjI4NDMgOC4yODQyNyAzMCAwIDMwVjBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNS4xNDk5KSIgZmlsbD0id2hpdGUiLz4KPC9nPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMTVMMTUgMEMxOC43NjAzIDAgMjIuMTk3NCAxLjM4MzY0IDI0LjgzIDMuNjY5NTZDMjQuODI5NCAzLjY3NSAxMy41IDE1IDEzLjUgMTVDMTMuNSAxNSAyNC44MyAyNi4zMjUgMjQuODI5NCAyNi4zMzA5QzIyLjE5NjkgMjguNjE2NSAxOC43NiAzMCAxNSAzMEwwIDE1WiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyKSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjMzMDMgMEMxNC40OTc0IDIuNzUwMiAxNi41IDYuODA2MzEgMTYuNSAxMS4zMzAyQzE2LjUgMTUuODU0MyAxNC40OTcxIDE5LjkxMDYgMTEuMzI5NyAyMi42NjA4QzExLjMzMDMgMjIuNjU1MiAwIDExLjMzMDIgMCAxMS4zMzAyTDExLjMzMDMgMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzLjUgMy42Njk4MykiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcikiLz4KPG1hc2sgaWQ9Im1hc2sxIiBtYXNrLXR5cGU9ImFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIxMyIgeT0iMyIgd2lkdGg9IjE3IiBoZWlnaHQ9IjI0Ij4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS4zMzAzIDBDMTQuNDk3NCAyLjc1MDIgMTYuNSA2LjgwNjMxIDE2LjUgMTEuMzMwMkMxNi41IDE1Ljg1NDMgMTQuNDk3MSAxOS45MTA2IDExLjMyOTcgMjIuNjYwOEMxMS4zMzAzIDIyLjY1NTIgMCAxMS4zMzAyIDAgMTEuMzMwMkwxMS4zMzAzIDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMy41IDMuNjY5ODMpIiBmaWxsPSJ3aGl0ZSIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazEpIj4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4Mj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJzY2FsZSg0My4wNjMzKSByb3RhdGUoNDQuNzE3OCkiPgo8c3RvcCBzdG9wLWNvbG9yPSIjNTMzNEY1Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzdCNDJGNiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXIiIHgyPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgwIDE1KSBzY2FsZSgzMC4wNjc0IDM2LjMyNzkpIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzQ4OTlGNyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyNDU3RjUiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDJfbGluZWFyIiB4Mj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJzY2FsZSgyMS42MTYzIDI5LjY4NzQpIHJvdGF0ZSgzNS41Njc0KSI+CjxzdG9wIHN0b3AtY29sb3I9IiM5REUxRTUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQjhERkIyIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=="},152:function(e,n,t){},154:function(e,n,t){"use strict";var a=t(147),i=t(0),r=t.n(i),c=t(4),o=t.n(c),l=t(156),u=t.n(l),d=t(143),s=(t(49),t(145)),I=t.n(s),M=t(146);function g(){var e=I()(["\n    color: #486791;\n    max-width: 500px;\n    margin: 0 auto;\n    padding: 0 20px;\n"]);return g=function(){return e},e}function m(){var e=I()(["\n    width: 500px;\n    margin: 50px auto;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 10px;\n\n    a {\n        transition: 0.8s;\n    }\n\n    a:hover {\n        color: black;\n    }\n"]);return m=function(){return e},e}function y(){var e=I()(["\n    background: linear-gradient(102.24deg, #9B51E0 0%, #3436E7 100%);\n    box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);\n    border-radius: 30px;\n    color: #FFFFFF;\n    border: none;\n    padding: 16px 60px;\n    font-weight: 600;\n    font-size: 22px;\n    justify-self: center;\n    outline: none; /* removes weird glow when clicking */\n    cursor: pointer;\n    ","\n    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n\n    &:hover {\n        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);\n        transform: translateY(-3px);\n        background: #2B2B2B;\n    }\n\n"]);return y=function(){return e},e}function p(){var e=I()(["\n    font-size: 24px;\n    font-weight: 600;\n    color: #486791\n    max-width: 500px;\n    margin: 0 auto;\n\n"]);return p=function(){return e},e}function z(){var e=I()(["\n    background: #F1F3F5;\n    padding: 50px 0;\n    display: grid;\n    grid-gap: 20px;\n"]);return z=function(){return e},e}var b=M.a.div(z()),N=M.a.p(p()),h=M.a.button(y(),""),Z=M.a.div(m()),x=M.a.div(g()),w=function(e){var n=e.data,t=e.children;return r.a.createElement(b,null,r.a.createElement(N,null,'Tweet Yo! "Prototype and build apps with React and Swift. New Courses by @MengTo." '),r.a.createElement(h,null,"Tweet"),r.a.createElement(Z,null,n.allContentfulLink.edges.map(function(e){return r.a.createElement("a",{href:e.node.url},e.node.title)})),r.a.createElement(x,null,t))},D=t(7),G=t.n(D),j=(t(149),function(e){function n(n){var t;return(t=e.call(this,n)||this).handleScroll=function(e){window.pageYOffset>50?t.setState({hasScrolled:!0}):t.setState({hasScrolled:!1})},t.state={hasScrolled:!1},t}G()(n,e);var a=n.prototype;return a.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},a.render=function(){return r.a.createElement("div",{className:this.state.hasScrolled?"Header HeaderScrolled":"Header"},r.a.createElement("div",{className:"HeaderGroup"},r.a.createElement(d.Link,{to:"/"},r.a.createElement("img",{src:t(151),width:"30"})),r.a.createElement(d.Link,{to:"/courses"},"Courses"),r.a.createElement(d.Link,{to:"/downloads"},"Downloads"),r.a.createElement(d.Link,{to:"/workshops"},"Workshops"),r.a.createElement(d.Link,{to:"/buy"},r.a.createElement("button",null,"Buy"))))},n}(r.a.Component)),f=(t(152),function(e){var n=e.children;return r.a.createElement(d.StaticQuery,{query:"474673905",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:e.site.siteMetadata.keywords}]},r.a.createElement("html",{lang:"en"})),r.a.createElement(j,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("div",null,n,r.a.createElement(w,{data:e},"Backgrounds made in Cinema4D, iOS app in Swift, site in React. ",r.a.createElement("a",{href:"mailto:earlagray@gmail.com"},"Email us")," to ask anything.©")))},data:a})});f.propTypes={children:o.a.node.isRequired};n.a=f}}]);
//# sourceMappingURL=component---src-pages-page-2-js-274a62444b20429ebe8e.js.map