"use strict";(self.webpackChunkreact_kabzda_1=self.webpackChunkreact_kabzda_1||[]).push([[431],{4140:function(e,t,s){s.r(t),s.d(t,{default:function(){return z}});var o=s(1413),n=s(5671),i=s(3144),r=s(9340),a=s(5716),l=s(2791),u=s(885),c="ProfileInfo_profile_info__H3D-z",d="ProfileInfo_avatar__OJq4I",f="ProfileInfo_info__blXPI",p="ProfileInfo_name__adacu",h="ProfileInfo_about__pyyvZ",j="ProfileInfo_job__S9tI2",x=s(1259),v=s(5270),b=s(184),m=function(e){var t=(0,l.useState)(!1),s=(0,u.Z)(t,2),o=s[0],n=s[1],i=(0,l.useState)(e.status),r=(0,u.Z)(i,2),a=r[0],c=r[1];(0,l.useEffect)((function(){c(e.status)}),[e.status]);return(0,b.jsx)("div",{children:o?(0,b.jsx)("div",{children:(0,b.jsx)("input",{onChange:function(e){c(e.currentTarget.value)},autoFocus:!0,value:a.toString(),onBlur:function(){n(!1),e.updateStatus(a)}})}):(0,b.jsx)("div",{children:(0,b.jsx)("span",{onDoubleClick:function(){n(!0)},children:e.status?e.status:"No status"})})})},P=s(3896),g=function(e){var t=e.contactTitle,s=e.contactValue,n=e.register;return(0,b.jsxs)("div",{children:[(0,b.jsxs)("b",{children:[t,": "]}),(0,b.jsx)("input",(0,o.Z)({type:"text",defaultValue:s},n("contacts."+t,{required:!1})))]})},_=function(e){var t=e.profile,s=e.setEditMode,n=e.saveProfileInfo,i=(0,P.cI)(),r=i.register,a=i.handleSubmit;return(0,b.jsx)("div",{children:(0,b.jsxs)("form",{onSubmit:a((function(e){e.fullName=t.fullName,n(e).then((function(){return s(!1)}))})),children:[(0,b.jsxs)("div",{className:h,children:[(0,b.jsx)("b",{children:"About me: "}),(0,b.jsx)("input",(0,o.Z)((0,o.Z)({type:"text"},r("aboutMe",{required:!1})),{},{defaultValue:t.aboutMe,onBlur:function(){},placeholder:"About Me"}))]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("b",{children:"Looking for a job: "}),(0,b.jsx)("input",(0,o.Z)({type:"checkbox",defaultChecked:t.lookingForAJob},r("lookingForAJob",{required:!1})))]}),(0,b.jsxs)("div",{className:j,children:[(0,b.jsx)("b",{children:"Soft skills: "}),(0,b.jsx)("input",(0,o.Z)((0,o.Z)({type:"text"},r("lookingForAJobDescription",{required:!1})),{},{defaultValue:t.lookingForAJobDescription,onBlur:function(){},placeholder:"Soft skills"}))]}),Object.keys(t.contacts).map((function(e){return(0,b.jsx)(g,{register:r,contactTitle:e,contactValue:t.contacts[e]},e)})),(0,b.jsx)("button",{children:"Done"})]})})},k=function(e){var t=e.contactTitle,s=e.contactValue;return(0,b.jsx)("div",{children:s?(0,b.jsxs)("div",{children:[(0,b.jsxs)("b",{children:[t,": "]}),(0,b.jsx)("a",{href:s,children:s})]}):null})},I=function(e){var t=e.profile,s=e.isOwner,o=e.goToEditMode;return(0,b.jsxs)(b.Fragment,{children:[s?(0,b.jsx)("button",{onClick:o,children:"edit"}):null,t.aboutMe?(0,b.jsxs)("div",{children:[(0,b.jsx)("b",{children:"About me: "}),(0,b.jsx)("span",{className:h,children:t.aboutMe})]}):null,(0,b.jsxs)("div",{children:[(0,b.jsx)("b",{children:"Looking for a job: "}),t.lookingForAJob?"Yes":"No"]}),t.lookingForAJob?(0,b.jsxs)("div",{className:j,children:[(0,b.jsx)("b",{children:"Soft skills: "}),t.lookingForAJob?t.lookingForAJobDescription:null]}):null,Object.keys(t.contacts).map((function(e){return(0,b.jsx)(k,{contactTitle:e,contactValue:t.contacts[e]},e)}))]})},S=function(e){var t=e.profile,s=e.status,o=e.updateStatus,n=e.isOwner,i=e.savePhoto,r=e.saveProfileInfo,a=(0,l.useState)(!1),h=(0,u.Z)(a,2),j=h[0],P=h[1];if(!t)return(0,b.jsx)(v.Z,{});return(0,b.jsxs)("div",{className:c,children:[(0,b.jsxs)("div",{className:d,children:[(0,b.jsx)("img",{src:null!=t.photos.large?t.photos.large:x,alt:""}),(0,b.jsx)("div",{children:n?(0,b.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&i(e.target.files[0])}}):null})]}),(0,b.jsxs)("div",{className:f,children:[(0,b.jsx)("div",{className:p,children:t.fullName}),(0,b.jsx)(m,{status:s,updateStatus:o}),j?(0,b.jsx)(_,{profile:t,setEditMode:P,saveProfileInfo:r}):(0,b.jsx)(I,{profile:t,isOwner:n,goToEditMode:function(){return P(!0)}})]})]})},Z=s(6508),y="MyPosts_text__-+Ipi",N="MyPosts_newPost__B4LFh",M="MyPosts_postsBlock__2WPjJ",A="MyPosts_posts__ct9Vp",D="Post_item__qURPC",F=s.p+"static/media/post_avatar.884b5b68052ea553bbb7.png",w=function(e){return(0,b.jsx)("div",{children:(0,b.jsxs)("div",{className:D,children:[(0,b.jsx)("img",{src:F,alt:""}),e.message,(0,b.jsx)("div",{children:(0,b.jsxs)("span",{children:["like count: ",e.likes]})})]})})},C=function(e){var t=e.posts,s=e.addPost,n=(0,P.cI)(),i=n.register,r=n.handleSubmit,a=t.map((function(e){return(0,b.jsx)(w,{message:e.message,likes:e.likesCount},e.id)}));return(0,b.jsxs)("div",{className:M,children:[(0,b.jsx)("h3",{className:y,children:"My posts"}),(0,b.jsxs)("form",{onSubmit:r((function(e){s(e.post)})),children:[(0,b.jsxs)("div",{className:N,children:[(0,b.jsx)("div",{children:(0,b.jsx)("textarea",(0,o.Z)({},i("post",{required:!0})))}),(0,b.jsx)("div",{children:(0,b.jsx)("button",{children:"Add post"})})]}),(0,b.jsx)("div",{className:A,children:a})]})]})},J=s(8687),O=(0,J.$j)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e((0,Z.Wl)(t))}}}))(C),T=function(e){return(0,b.jsxs)("div",{children:[(0,b.jsx)(S,{isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,savePhoto:e.savePhoto,saveProfileInfo:e.saveProfileInfo}),(0,b.jsx)(O,{})]})},q=s(5760),V=s(7781),B=s(2055),E=function(e){(0,r.Z)(s,e);var t=(0,a.Z)(s);function s(){return(0,n.Z)(this,s),t.apply(this,arguments)}return(0,i.Z)(s,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userID;e||(e=27510),this.props.getProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,s){this.props.match.params.userID!==e.match.params.userID&&this.refreshProfile()}},{key:"render",value:function(){return(0,b.jsx)(T,(0,o.Z)((0,o.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,isOwner:!this.props.match.params.userID,savePhoto:this.props.savePhoto,saveProfileInfo:this.props.saveProfileInfo}))}}]),s}(l.Component),z=(0,V.qC)((0,J.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status}}),{getProfile:Z.Ai,getStatus:Z.lR,updateStatus:Z.Nf,savePhoto:Z.Ju,saveProfileInfo:Z.FX}),B.Z,q.Z)(E)}}]);
//# sourceMappingURL=431.5ee014bb.chunk.js.map