"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[643],{8643:function(e,s,r){r.r(s),r.d(s,{default:function(){return k}});var n=r(2791);function t(e){if(null==e)throw new TypeError("Cannot destructure "+e)}var a="ChatPage_chat_wrapper__TQhCX",u="ChatPage_upper__QCay8",c="ChatPage_messages__oW0c0",i="ChatPage_message__aNBdK",o="ChatPage_message_header__zRLJC",l="ChatPage_name_message__qb1Nt",d="ChatPage_message_text__2jZQ-",h="ChatPage_send_form__9NtQM",f=r(3873),v=r(3504),_=r(8687),j=r(184),x=function(e){var s=e.message,r=(0,_.v9)((function(e){return e.auth.userID})),n="/profile"+(s.userId!==r?"/"+s.userId.toString():"");return(0,j.jsx)("div",{className:i,children:(0,j.jsxs)("div",{className:o,children:[(0,j.jsx)(v.OL,{to:n,children:(0,j.jsx)("img",{src:null!==s.photo?s.photo:f,alt:""})}),(0,j.jsxs)("div",{className:l,children:[(0,j.jsx)(v.OL,{to:n,children:(0,j.jsx)("b",{children:s.userName})}),(0,j.jsx)("div",{className:d,children:s.message})]})]})})},g=function(e){t(e);var s=(0,_.v9)((function(e){return e.chat.messages})),r=(0,n.useRef)(null);return(0,n.useEffect)((function(){var e;null===(e=r.current)||void 0===e||e.scrollIntoView(!0)}),[s]),(0,j.jsxs)("div",{className:c,children:[s.map((function(e,s){return(0,j.jsx)(x,{message:e},s)})),(0,j.jsx)("div",{ref:r})]})},m=r(9439),p=r(1686),C=r(2380),N=function(e){t(e);var s=(0,n.useState)(""),r=(0,m.Z)(s,2),a=r[0],u=r[1],c=(0,_.v9)((function(e){return e.chat.status})),i=(0,_.I0)(),o=function(){a&&(i((0,C.bG)(a)),u(""))};return(0,j.jsxs)("div",{className:h,children:[(0,j.jsx)("div",{children:(0,j.jsx)("input",{onChange:function(e){return u(e.currentTarget.value)},value:a,autoFocus:!0,onKeyPress:function(e){"Enter"===e.key&&o()},placeholder:"Write a message..."})}),(0,j.jsx)("button",{disabled:"ready"!==c,onClick:o,type:"submit",children:(0,j.jsx)(p.Z,{})})]})},P=function(){var e=(0,_.I0)(),s=(0,_.v9)((function(e){return e.chat.status}));return(0,n.useEffect)((function(){return e((0,C.WE)()),function(){e((0,C.R7)())}}),[]),(0,j.jsxs)("div",{children:["error"===s&&(0,j.jsx)("div",{style:{color:"red"},children:"Some error occurred. Please refresh the page"}),(0,j.jsx)(g,{}),(0,j.jsx)(N,{})]})},b=r(6871),k=function(){var e=(0,_.v9)((function(e){return e.auth.isAuth}));return(0,j.jsxs)("div",{className:a,children:[(0,j.jsx)("div",{className:u,children:"General Chat"}),e?(0,j.jsx)(P,{}):(0,j.jsx)(b.Fg,{to:"/login"})]})}},1686:function(e,s,r){var n=r(4836);s.Z=void 0;var t=n(r(5649)),a=r(184),u=(0,t.default)((0,a.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");s.Z=u}}]);
//# sourceMappingURL=643.85d090e5.chunk.js.map