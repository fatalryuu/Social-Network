"use strict";(self.webpackChunkreact_kabzda_1=self.webpackChunkreact_kabzda_1||[]).push([[747],{1747:function(e,n,s){s.r(n),s.d(n,{default:function(){return j}});var t=s(2791),a=s(3433),r=s(9439),u="ChatPage_message__aNBdK",c=s(184),i=function(e){var n=e.message;return(0,c.jsxs)("div",{className:u,children:[(0,c.jsx)("img",{src:n.photo,alt:"",style:{width:"30px"}}),(0,c.jsx)("b",{children:n.userName}),(0,c.jsx)("br",{}),n.message,(0,c.jsx)("hr",{})]})},o=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"),d=function(){var e=(0,t.useState)([]),n=(0,r.Z)(e,2),s=n[0],u=n[1];return(0,t.useEffect)((function(){o.addEventListener("message",(function(e){u((function(n){return[].concat((0,a.Z)(n),(0,a.Z)(JSON.parse(e.data)))}))}))}),[]),(0,c.jsx)("div",{style:{height:"400px",overflowY:"auto"},children:s.map((function(e,n){return(0,c.jsx)(i,{message:e},n)}))})},l=s(1686),h=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"),f=function(){var e=(0,t.useState)(""),n=(0,r.Z)(e,2),s=n[0],a=n[1];return(0,c.jsxs)("div",{children:[(0,c.jsx)("textarea",{onChange:function(e){return a(e.currentTarget.value)},value:s}),(0,c.jsx)("button",{onClick:function(){s&&(h.send(s),a(""))},children:(0,c.jsx)(l.Z,{})})]})},x=function(){return(0,c.jsxs)("div",{children:[(0,c.jsx)(d,{}),(0,c.jsx)(f,{})]})},j=function(){return(0,c.jsx)(x,{})}},1686:function(e,n,s){var t=s(4836);n.Z=void 0;var a=t(s(5649)),r=s(184),u=(0,a.default)((0,r.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");n.Z=u}}]);
//# sourceMappingURL=747.0c9266bd.chunk.js.map