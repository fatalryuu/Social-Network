"use strict";(self.webpackChunkreact_kabzda_1=self.webpackChunkreact_kabzda_1||[]).push([[453],{7894:function(s,t,e){e.r(t),e.d(t,{default:function(){return B}});var i=e(1413),n=e(5671),a=e(3144),o=e(9340),r=e(5716),u=e(2791),l="ProfileInfo_profile_info__H3D-z",c="ProfileInfo_avatar__OJq4I",p="ProfileInfo_info__blXPI",d="ProfileInfo_name__adacu",f="ProfileInfo_about__pyyvZ",h="ProfileInfo_job__S9tI2",_=e.p+"static/media/profile_avatar.a452d8edf63dc84023c9.jpg",j=e(5270),x=e(885),v=e(184),m=function(s){var t=(0,u.useState)(!1),e=(0,x.Z)(t,2),i=e[0],n=e[1],a=(0,u.useState)(s.status),o=(0,x.Z)(a,2),r=o[0],l=o[1];(0,u.useEffect)((function(){l(s.status)}),[s.status]);return(0,v.jsx)("div",{children:i?(0,v.jsx)("div",{children:(0,v.jsx)("input",{onChange:function(s){l(s.currentTarget.value)},autoFocus:!0,value:r.toString(),onBlur:function(){n(!1),s.updateStatus(r)}})}):(0,v.jsx)("div",{children:(0,v.jsx)("span",{onDoubleClick:function(){n(!0)},children:s.status?s.status:"No status"})})})},P=function(s){var t=s.profile,e=s.status,i=s.updateStatus;return t?(0,v.jsxs)("div",{className:l,children:[(0,v.jsx)("div",{className:c,children:(0,v.jsx)("img",{src:null!=t.photos.large?t.photos.large:_,alt:""})}),(0,v.jsxs)("div",{className:p,children:[(0,v.jsx)("div",{className:d,children:t.fullName}),(0,v.jsx)(m,{status:e,updateStatus:i}),(0,v.jsx)("div",{className:f,children:t.aboutMe}),t.lookingForAJob?(0,v.jsx)("div",{className:h,children:t.lookingForAJobDescription}):null]})]}):(0,v.jsx)(j.Z,{})},g=e(6508),b="MyPosts_text__-+Ipi",k="MyPosts_newPost__B4LFh",S="MyPosts_postsBlock__2WPjJ",N="MyPosts_posts__ct9Vp",Z="Post_item__qURPC",I=e.p+"static/media/post_avatar.884b5b68052ea553bbb7.png",y=function(s){return(0,v.jsx)("div",{children:(0,v.jsxs)("div",{className:Z,children:[(0,v.jsx)("img",{src:I,alt:""}),s.message,(0,v.jsx)("div",{children:(0,v.jsxs)("span",{children:["like count: ",s.likes]})})]})})},M=e(3896),C=function(s){var t=s.posts,e=s.addPost,n=(0,M.cI)(),a=n.register,o=n.handleSubmit,r=t.map((function(s){return(0,v.jsx)(y,{message:s.message,likes:s.likesCount},s.id)}));return(0,v.jsxs)("div",{className:S,children:[(0,v.jsx)("h3",{className:b,children:"My posts"}),(0,v.jsxs)("form",{onSubmit:o((function(s){e(s.post)})),children:[(0,v.jsxs)("div",{className:k,children:[(0,v.jsx)("div",{children:(0,v.jsx)("textarea",(0,i.Z)({},a("post",{required:!0})))}),(0,v.jsx)("div",{children:(0,v.jsx)("button",{children:"Add post"})})]}),(0,v.jsx)("div",{className:N,children:r})]})]})},D=e(8687),w=(0,D.$j)((function(s){return{posts:s.profilePage.posts,newPostText:s.profilePage.newPostText}}),(function(s){return{addPost:function(t){s((0,g.Wl)(t))}}}))(C),q=function(s){return(0,v.jsxs)("div",{children:[(0,v.jsx)(P,{profile:s.profile,status:s.status,updateStatus:s.updateStatus}),(0,v.jsx)(w,{})]})},A=e(5760),F=e(7781),J=e(2055),z=function(s){(0,o.Z)(e,s);var t=(0,r.Z)(e);function e(){return(0,n.Z)(this,e),t.apply(this,arguments)}return(0,a.Z)(e,[{key:"componentDidMount",value:function(){var s=this.props.match.params.userID;s||(s=27094),this.props.getProfile(s),this.props.getStatus(s)}},{key:"componentDidUpdate",value:function(s){this.props.isMain!==s.isMain&&this.props.isMain&&this.componentDidMount()}},{key:"render",value:function(){return(0,v.jsx)(q,(0,i.Z)((0,i.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),e}(u.Component),B=(0,F.qC)((0,D.$j)((function(s){return{profile:s.profilePage.profile,status:s.profilePage.status}}),{getProfile:g.Ai,getStatus:g.lR,updateStatus:g.Nf}),J.Z,A.Z)(z)}}]);
//# sourceMappingURL=453.56c5073f.chunk.js.map