"use strict";(self.webpackChunkreact_kabzda_1=self.webpackChunkreact_kabzda_1||[]).push([[549],{4534:function(A,t,s){s.r(t),s.d(t,{default:function(){return S}});var e=s(1413),i=s(5671),o=s(3144),c=s(9340),r=s(8557),n=s(2791),a=s(9439),l="ProfileInfo_profile_info__NakLG",d="ProfileInfo_avatar__v3lLj",u="ProfileInfo_info__miP9O",h="ProfileInfo_name__3FB6v",j="ProfileInfo_about__Q+iRk",g="ProfileInfo_job__M-5+1",p=s(4407),V=s(184),b=function(A){var t=(0,n.useState)(!1),s=(0,a.Z)(t,2),e=s[0],i=s[1],o=(0,n.useState)(A.status),c=(0,a.Z)(o,2),r=c[0],l=c[1];(0,n.useEffect)((function(){l(A.status)}),[A.status]);return(0,V.jsx)("div",{children:e?(0,V.jsx)("div",{children:(0,V.jsx)("input",{onChange:function(A){l(A.currentTarget.value)},autoFocus:!0,value:r||"",onBlur:function(){i(!1),A.updateStatus(r)}})}):(0,V.jsx)("div",{children:(0,V.jsx)("span",{onDoubleClick:function(){A.isOwner&&i(!0)},children:A.status?A.status:"No status"})})})},x=s(5290),Z=function(A){var t=A.contactTitle,s=A.contactValue,i=A.register;return(0,V.jsxs)("div",{children:[(0,V.jsxs)("b",{children:[t,": "]}),(0,V.jsx)("input",(0,e.Z)({type:"text",defaultValue:s},i("contacts."+t,{required:!1})))]})},B=function(A){var t=A.profile,s=A.setEditMode,i=A.saveProfileInfo,o=(0,x.cI)(),c=o.register,r=o.handleSubmit;return(0,V.jsx)("div",{children:(0,V.jsxs)("form",{onSubmit:r((function(A){t&&(A.fullName=t.fullName),i(A).then((function(){return s(!1)}))})),children:[(0,V.jsxs)("div",{className:j,children:[(0,V.jsx)("b",{children:"About me: "}),(0,V.jsx)("input",(0,e.Z)((0,e.Z)({type:"text"},c("aboutMe",{required:!1})),{},{defaultValue:t.aboutMe,onBlur:function(){},placeholder:"About Me"}))]}),(0,V.jsxs)("div",{children:[(0,V.jsx)("b",{children:"Looking for a job: "}),(0,V.jsx)("input",(0,e.Z)({type:"checkbox",defaultChecked:t.lookingForAJob},c("lookingForAJob",{required:!1})))]}),(0,V.jsxs)("div",{className:g,children:[(0,V.jsx)("b",{children:"Soft skills: "}),(0,V.jsx)("input",(0,e.Z)((0,e.Z)({type:"text"},c("lookingForAJobDescription",{required:!1})),{},{defaultValue:t.lookingForAJobDescription,onBlur:function(){},placeholder:"Soft skills"}))]}),Object.keys(t.contacts).map((function(A){return(0,V.jsx)(Z,{register:c,contactTitle:A,contactValue:t.contacts[A]},A)})),(0,V.jsx)("button",{children:"Done"})]})})},E=function(A){var t=A.contactTitle,s=A.contactValue;return(0,V.jsx)("div",{children:s?(0,V.jsxs)("div",{children:[(0,V.jsxs)("b",{children:[t,": "]}),(0,V.jsx)("a",{href:s,children:s})]}):null})},I=function(A){var t=A.profile,s=A.isOwner,e=A.goToEditMode;return(0,V.jsxs)(V.Fragment,{children:[s?(0,V.jsx)("button",{onClick:e,children:"edit"}):null,t.aboutMe?(0,V.jsxs)("div",{children:[(0,V.jsx)("b",{children:"About me: "}),(0,V.jsx)("span",{className:j,children:t.aboutMe})]}):null,(0,V.jsxs)("div",{children:[(0,V.jsx)("b",{children:"Looking for a job: "}),t.lookingForAJob?"Yes":"No"]}),t.lookingForAJob?(0,V.jsxs)("div",{className:g,children:[(0,V.jsx)("b",{children:"Soft skills: "}),t.lookingForAJob?t.lookingForAJobDescription:null]}):null,Object.keys(t.contacts).map((function(A){return(0,V.jsx)(E,{contactTitle:A,contactValue:t.contacts[A]},A)}))]})},C=s(8687),v=s(9444),G=function(A){var t=A.profile,s=A.status,e=A.updateStatus,i=A.isOwner,o=A.savePhoto,c=A.saveProfileInfo,r=(0,n.useState)(!1),j=(0,a.Z)(r,2),g=j[0],x=j[1],Z=(0,C.v9)(v.xu);if(!t)return(0,V.jsx)(p.Z,{});return(0,V.jsxs)("div",{className:l,children:[(0,V.jsxs)("div",{className:d,children:[Z?(0,V.jsx)(p.Z,{}):(0,V.jsx)("img",{src:null!=t.photos.large?t.photos.large:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/4QByRXhpZgAASUkqAAgAAAABAA4BAgBQAAAAGgAAAAAAAABEZWZhdWx0IEF2YXRhciBQcm9maWxlIEljb24gVmVjdG9yLiBTb2NpYWwgTWVkaWEgVXNlciBJbWFnZS4gVmVjdG9yIElsbHVzdHJhdGlvbv/hBXdodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iPgoJPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KCQk8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOklwdGM0eG1wQ29yZT0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcENvcmUvMS4wL3htbG5zLyIgICB4bWxuczpHZXR0eUltYWdlc0dJRlQ9Imh0dHA6Ly94bXAuZ2V0dHlpbWFnZXMuY29tL2dpZnQvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwbHVzPSJodHRwOi8vbnMudXNlcGx1cy5vcmcvbGRmL3htcC8xLjAvIiAgeG1sbnM6aXB0Y0V4dD0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcEV4dC8yMDA4LTAyLTI5LyIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgcGhvdG9zaG9wOkNyZWRpdD0iR2V0dHkgSW1hZ2VzL2lTdG9ja3Bob3RvIiBHZXR0eUltYWdlc0dJRlQ6QXNzZXRJRD0iMTMzNzE0NDE0NiIgeG1wUmlnaHRzOldlYlN0YXRlbWVudD0iaHR0cHM6Ly93d3cuaXN0b2NrcGhvdG8uY29tL2xlZ2FsL2xpY2Vuc2UtYWdyZWVtZW50P3V0bV9tZWRpdW09b3JnYW5pYyZhbXA7dXRtX3NvdXJjZT1nb29nbGUmYW1wO3V0bV9jYW1wYWlnbj1pcHRjdXJsIiA+CjxkYzpjcmVhdG9yPjxyZGY6U2VxPjxyZGY6bGk+TWFyaWEgU2hhcGlsb3ZhPC9yZGY6bGk+PC9yZGY6U2VxPjwvZGM6Y3JlYXRvcj48ZGM6ZGVzY3JpcHRpb24+PHJkZjpBbHQ+PHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5EZWZhdWx0IEF2YXRhciBQcm9maWxlIEljb24gVmVjdG9yLiBTb2NpYWwgTWVkaWEgVXNlciBJbWFnZS4gVmVjdG9yIElsbHVzdHJhdGlvbjwvcmRmOmxpPjwvcmRmOkFsdD48L2RjOmRlc2NyaXB0aW9uPgo8cGx1czpMaWNlbnNvcj48cmRmOlNlcT48cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz48cGx1czpMaWNlbnNvclVSTD5odHRwczovL3d3dy5pc3RvY2twaG90by5jb20vcGhvdG8vbGljZW5zZS1nbTEzMzcxNDQxNDYtP3V0bV9tZWRpdW09b3JnYW5pYyZhbXA7dXRtX3NvdXJjZT1nb29nbGUmYW1wO3V0bV9jYW1wYWlnbj1pcHRjdXJsPC9wbHVzOkxpY2Vuc29yVVJMPjwvcmRmOmxpPjwvcmRmOlNlcT48L3BsdXM6TGljZW5zb3I+CgkJPC9yZGY6RGVzY3JpcHRpb24+Cgk8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJ3Ij8+Cv/tAKJQaG90b3Nob3AgMy4wADhCSU0EBAAAAAAAhhwCUAAPTWFyaWEgU2hhcGlsb3ZhHAJ4AFBEZWZhdWx0IEF2YXRhciBQcm9maWxlIEljb24gVmVjdG9yLiBTb2NpYWwgTWVkaWEgVXNlciBJbWFnZS4gVmVjdG9yIElsbHVzdHJhdGlvbhwCbgAYR2V0dHkgSW1hZ2VzL2lTdG9ja3Bob3Rv/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/8IACwgCZAJkAQERAP/EABoAAQACAwEAAAAAAAAA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",alt:""}),(0,V.jsx)("div",{children:i?(0,V.jsx)("input",{type:"file",onChange:function(A){A.target.files.length&&o(A.target.files[0])}}):null})]}),(0,V.jsxs)("div",{className:u,children:[(0,V.jsx)("div",{className:h,children:t.fullName}),(0,V.jsx)(b,{status:s,updateStatus:e,isOwner:i}),g?(0,V.jsx)(B,{profile:t,setEditMode:x,saveProfileInfo:c}):(0,V.jsx)(I,{profile:t,isOwner:i,goToEditMode:function(){return x(!0)}})]})]})},f=s(6407),m="MyPosts_text__2MS39",w="MyPosts_newPost__zAF6d",Y="MyPosts_postsBlock__drxLI",Q="MyPosts_posts__SmsFw",J="Post_item__wi-3r",k=s.p+"static/media/post_avatar.884b5b68052ea553bbb7.png",P=function(A){return(0,V.jsx)("div",{children:(0,V.jsxs)("div",{className:J,children:[(0,V.jsx)("img",{src:k,alt:""}),A.message,(0,V.jsx)("div",{children:(0,V.jsxs)("span",{children:["like count: ",A.likes]})})]})})},M=function(A){var t=A.posts,s=A.addPost,i=(0,x.cI)(),o=i.register,c=i.handleSubmit,r=i.reset,n=t.map((function(A){return(0,V.jsx)(P,{message:A.message,likes:A.likesCount},A.id)}));return(0,V.jsxs)("div",{className:Y,children:[(0,V.jsx)("h3",{className:m,children:"My posts"}),(0,V.jsxs)("form",{onSubmit:c((function(A){s(A.post),r()})),children:[(0,V.jsxs)("div",{className:w,children:[(0,V.jsx)("div",{children:(0,V.jsx)("textarea",(0,e.Z)({},o("post",{required:!0})))}),(0,V.jsx)("div",{children:(0,V.jsx)("button",{children:"Add post"})})]}),(0,V.jsx)("div",{className:Q,children:n})]})]})},N=(0,C.$j)((function(A){return{posts:A.profilePage.posts}}),{addPost:f.Nw.addPost})(M),y=function(A){return(0,V.jsxs)("div",{children:[(0,V.jsx)(G,{isOwner:A.isOwner,profile:A.profile,status:A.status,updateStatus:A.updateStatus,savePhoto:A.savePhoto,saveProfileInfo:A.saveProfileInfo}),(0,V.jsx)(N,{})]})},W=s(1623),R=s(7781),X=s(6871),H=function(A){return function(t){var s={params:(0,X.UO)()};return(0,V.jsx)(A,(0,e.Z)((0,e.Z)({},t),{},{match:s}))}},D=function(A){(0,c.Z)(s,A);var t=(0,r.Z)(s);function s(){return(0,i.Z)(this,s),t.apply(this,arguments)}return(0,o.Z)(s,[{key:"refreshProfile",value:function(){var A=this.props.match.params.userID;A||(A=this.props.authorizedUserID),this.props.getProfile(A),this.props.getStatus(A)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(A,t){this.props.match.params.userID!==A.match.params.userID&&this.refreshProfile()}},{key:"render",value:function(){return(0,V.jsx)(y,(0,e.Z)((0,e.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,isOwner:!this.props.match.params.userID,savePhoto:this.props.savePhoto,saveProfileInfo:this.props.saveProfileInfo}))}}]),s}(n.Component),S=(0,R.qC)((0,C.$j)((function(A){return{profile:A.profilePage.profile,status:A.profilePage.status,authorizedUserID:A.auth.userID}}),{getProfile:f.Ai,getStatus:f.lR,updateStatus:f.Nf,savePhoto:f.Ju,saveProfileInfo:f.FX}),H,W.Z)(D)}}]);
//# sourceMappingURL=549.75539774.chunk.js.map