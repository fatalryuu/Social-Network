"use strict";(self.webpackChunkreact_kabzda_1=self.webpackChunkreact_kabzda_1||[]).push([[485],{3568:function(A,e,s){s.r(e),s.d(e,{default:function(){return z}});var t=s(1413),i=s(5671),o=s(3144),n=s(9340),l=s(8557),c=s(2791),a=s(9439),r={profile_info:"ProfileInfo_profile_info__NakLG",avatar:"ProfileInfo_avatar__v3lLj",image:"ProfileInfo_image__DDweF",fileUpload:"ProfileInfo_fileUpload__-oFCM",buttons:"ProfileInfo_buttons__siaCO",edit:"ProfileInfo_edit__m8BFh",edit_disabled:"ProfileInfo_edit_disabled__p-8nP",upload:"ProfileInfo_upload__N-5kY",icon:"ProfileInfo_icon__vGOUM",info:"ProfileInfo_info__miP9O",editing:"ProfileInfo_editing__iNnOh",upper:"ProfileInfo_upper__H6yAG",name:"ProfileInfo_name__3FB6v",status:"ProfileInfo_status__SkwpM",form:"ProfileInfo_form__97k-R",columns:"ProfileInfo_columns__5WXEc",labels:"ProfileInfo_labels__1SqGr",inputs:"ProfileInfo_inputs__chCEy",contact_input:"ProfileInfo_contact_input__J+vK8",about:"ProfileInfo_about__Q+iRk",soft_skills:"ProfileInfo_soft_skills__lWm1D",contact:"ProfileInfo_contact__4JCMo"},d=s(4407),u=s(184),h=function(A){var e=(0,c.useState)(!1),s=(0,a.Z)(e,2),t=s[0],i=s[1],o=(0,c.useState)(A.status),n=(0,a.Z)(o,2),l=n[0],r=n[1];(0,c.useEffect)((function(){r(A.status)}),[A.status]);return(0,u.jsx)("div",{children:t?(0,u.jsx)("div",{children:(0,u.jsx)("input",{onChange:function(A){r(A.currentTarget.value)},autoFocus:!0,value:l||"",onBlur:function(){i(!1),A.updateStatus(l)}})}):(0,u.jsx)("div",{children:(0,u.jsx)("span",{onDoubleClick:function(){A.isOwner&&i(!0)},children:A.status?A.status:"No status"})})})},p=s(5290),j=function(A){var e=A.contactTitle;A.contactValue,A.register;return(0,u.jsx)("div",{children:(0,u.jsxs)("b",{children:[e,": "]})})},f=function(A){var e=A.contactTitle,s=A.contactValue,i=A.register;return(0,u.jsx)("div",{children:(0,u.jsx)("input",(0,t.Z)({className:r.contact_input,type:"text",defaultValue:s},i("contacts."+e,{required:!1})))})},x=s(1428),g=function(A){var e=A.profile,s=A.setEditMode,i=A.setIsEnabled,o=A.saveProfileInfo,n=(0,p.cI)(),l=n.register,c=n.handleSubmit;return(0,u.jsx)("div",{children:(0,u.jsxs)("form",{onSubmit:c((function(A){e&&(A.fullName=e.fullName),o(A).then((function(){return s(!1)}))})),className:r.form,children:[(0,u.jsxs)("div",{className:"".concat(r.columns," ").concat(r.labels),children:[(0,u.jsx)("div",{children:(0,u.jsx)("b",{children:"About me: "})}),(0,u.jsx)("div",{children:(0,u.jsx)("b",{children:"Looking for a job: "})}),(0,u.jsx)("div",{children:(0,u.jsx)("b",{children:"Soft skills: "})}),Object.keys(e.contacts).map((function(A){return(0,u.jsx)(j,{register:l,contactTitle:A,contactValue:e.contacts[A]},A)}))]}),(0,u.jsxs)("div",{className:"".concat(r.columns," ").concat(r.inputs),children:[(0,u.jsx)("div",{children:(0,u.jsx)("input",(0,t.Z)((0,t.Z)({type:"text"},l("aboutMe",{required:!1})),{},{defaultValue:e.aboutMe,onBlur:function(){},placeholder:"About Me",className:r.about}))}),(0,u.jsx)("div",{children:(0,u.jsx)("input",(0,t.Z)({type:"checkbox",defaultChecked:e.lookingForAJob},l("lookingForAJob",{required:!1})))}),(0,u.jsx)("div",{children:(0,u.jsx)("input",(0,t.Z)((0,t.Z)({type:"text"},l("lookingForAJobDescription",{required:!1})),{},{defaultValue:e.lookingForAJobDescription,onBlur:function(){},placeholder:"Soft skills",className:r.soft_skills}))}),Object.keys(e.contacts).map((function(A){return(0,u.jsx)(f,{register:l,contactTitle:A,contactValue:e.contacts[A]},A)}))]}),(0,u.jsx)("div",{children:(0,u.jsx)("button",{onClick:function(){return i(!0)},children:(0,u.jsx)(x.Z,{style:{width:"15px"}})})})]})})},b=function(A){var e=A.contactTitle,s=A.contactValue;return(0,u.jsx)("div",{children:s?(0,u.jsxs)("div",{className:r.contact,children:[(0,u.jsxs)("b",{children:[e,": "]}),(0,u.jsx)("a",{href:s,children:s})]}):null})},V=function(A){var e=A.profile;A.isOwner;return(0,u.jsxs)(u.Fragment,{children:[e.aboutMe?(0,u.jsxs)("div",{children:[(0,u.jsx)("b",{children:"About me: "}),(0,u.jsx)("span",{children:e.aboutMe})]}):null,(0,u.jsxs)("div",{children:[(0,u.jsx)("b",{children:"Looking for a job: "}),e.lookingForAJob?"Yes":"No"]}),e.lookingForAJob?(0,u.jsxs)("div",{className:r.job,children:[(0,u.jsx)("b",{children:"Soft skills: "}),e.lookingForAJob?e.lookingForAJobDescription:null]}):null,Object.keys(e.contacts).map((function(A){return(0,u.jsx)(b,{contactTitle:A,contactValue:e.contacts[A]},A)}))]})},I=s(8687),v=s(3993),Z=s(9013),m=function(A){var e=A.profile,s=A.status,t=A.updateStatus,i=A.isOwner,o=A.savePhoto,n=A.saveProfileInfo,l=(0,c.useState)(!1),p=(0,a.Z)(l,2),j=p[0],f=p[1],x=(0,c.useState)(!0),b=(0,a.Z)(x,2),m=b[0],B=b[1],E=(0,I.v9)(v.xu);if(!e)return(0,u.jsx)(d.Z,{});return(0,u.jsxs)("div",{className:r.profile_info,children:[(0,u.jsxs)("div",{className:r.avatar,children:[E?(0,u.jsx)(d.Z,{}):(0,u.jsxs)("div",{className:r.image,children:[(0,u.jsx)("img",{src:null!==e.photos.large?e.photos.large:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/4QByRXhpZgAASUkqAAgAAAABAA4BAgBQAAAAGgAAAAAAAABEZWZhdWx0IEF2YXRhciBQcm9maWxlIEljb24gVmVjdG9yLiBTb2NpYWwgTWVkaWEgVXNlciBJbWFnZS4gVmVjdG9yIElsbHVzdHJhdGlvbv/hBXdodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iPgoJPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KCQk8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOklwdGM0eG1wQ29yZT0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcENvcmUvMS4wL3htbG5zLyIgICB4bWxuczpHZXR0eUltYWdlc0dJRlQ9Imh0dHA6Ly94bXAuZ2V0dHlpbWFnZXMuY29tL2dpZnQvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwbHVzPSJodHRwOi8vbnMudXNlcGx1cy5vcmcvbGRmL3htcC8xLjAvIiAgeG1sbnM6aXB0Y0V4dD0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcEV4dC8yMDA4LTAyLTI5LyIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgcGhvdG9zaG9wOkNyZWRpdD0iR2V0dHkgSW1hZ2VzL2lTdG9ja3Bob3RvIiBHZXR0eUltYWdlc0dJRlQ6QXNzZXRJRD0iMTMzNzE0NDE0NiIgeG1wUmlnaHRzOldlYlN0YXRlbWVudD0iaHR0cHM6Ly93d3cuaXN0b2NrcGhvdG8uY29tL2xlZ2FsL2xpY2Vuc2UtYWdyZWVtZW50P3V0bV9tZWRpdW09b3JnYW5pYyZhbXA7dXRtX3NvdXJjZT1nb29nbGUmYW1wO3V0bV9jYW1wYWlnbj1pcHRjdXJsIiA+CjxkYzpjcmVhdG9yPjxyZGY6U2VxPjxyZGY6bGk+TWFyaWEgU2hhcGlsb3ZhPC9yZGY6bGk+PC9yZGY6U2VxPjwvZGM6Y3JlYXRvcj48ZGM6ZGVzY3JpcHRpb24+PHJkZjpBbHQ+PHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5EZWZhdWx0IEF2YXRhciBQcm9maWxlIEljb24gVmVjdG9yLiBTb2NpYWwgTWVkaWEgVXNlciBJbWFnZS4gVmVjdG9yIElsbHVzdHJhdGlvbjwvcmRmOmxpPjwvcmRmOkFsdD48L2RjOmRlc2NyaXB0aW9uPgo8cGx1czpMaWNlbnNvcj48cmRmOlNlcT48cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz48cGx1czpMaWNlbnNvclVSTD5odHRwczovL3d3dy5pc3RvY2twaG90by5jb20vcGhvdG8vbGljZW5zZS1nbTEzMzcxNDQxNDYtP3V0bV9tZWRpdW09b3JnYW5pYyZhbXA7dXRtX3NvdXJjZT1nb29nbGUmYW1wO3V0bV9jYW1wYWlnbj1pcHRjdXJsPC9wbHVzOkxpY2Vuc29yVVJMPjwvcmRmOmxpPjwvcmRmOlNlcT48L3BsdXM6TGljZW5zb3I+CgkJPC9yZGY6RGVzY3JpcHRpb24+Cgk8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJ3Ij8+Cv/tAKJQaG90b3Nob3AgMy4wADhCSU0EBAAAAAAAhhwCUAAPTWFyaWEgU2hhcGlsb3ZhHAJ4AFBEZWZhdWx0IEF2YXRhciBQcm9maWxlIEljb24gVmVjdG9yLiBTb2NpYWwgTWVkaWEgVXNlciBJbWFnZS4gVmVjdG9yIElsbHVzdHJhdGlvbhwCbgAYR2V0dHkgSW1hZ2VzL2lTdG9ja3Bob3Rv/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/8IACwgCZAJkAQERAP/EABoAAQACAwEAAAAAAAAA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",alt:""}),i?(0,u.jsxs)("span",{className:r.fileUpload,children:[(0,u.jsx)("input",{type:"file",onChange:function(A){A.target.files.length&&o(A.target.files[0])},className:r.upload,id:"file-input"}),(0,u.jsx)("label",{className:r.icon,htmlFor:"file-input",children:(0,u.jsx)(Z.Z,{})})]}):null]}),(0,u.jsx)("div",{className:r.buttons,children:i?(0,u.jsx)("button",{disabled:!m,onClick:function(){f(!0),B(!1)},className:m?r.edit:r.edit_disabled,children:"Edit profile"}):null})]}),(0,u.jsxs)("div",{className:j?r.editing:r.info,children:[(0,u.jsxs)("div",{className:r.upper,children:[(0,u.jsx)("div",{className:r.name,children:e.fullName}),(0,u.jsx)("span",{className:r.status,children:(0,u.jsx)(h,{status:s,updateStatus:t,isOwner:i})})]}),j?(0,u.jsx)(g,{profile:e,setEditMode:f,setIsEnabled:B,saveProfileInfo:n}):(0,u.jsx)(V,{profile:e,isOwner:i})]})]})},B="Profile_amount_wrapper__lZ3KI",E="Profile_amount_string__CN6wF",C="Profile_amount__VyaAZ",G="Profile_followed__2VeyJ",w="Profile_lower__meUyG",P="MyPosts_text__2MS39",Y="MyPosts_newPost__zAF6d",N="MyPosts_posts_block__WYbPj",Q="MyPosts_posts__SmsFw",k="Post_item__wi-3r",J=s.p+"static/media/post_avatar.9c06588dae22718f5ba4.png",y=function(A){return(0,u.jsx)("div",{children:(0,u.jsxs)("div",{className:k,children:[(0,u.jsx)("img",{src:J,alt:""}),A.message,(0,u.jsx)("div",{children:(0,u.jsxs)("span",{children:["like count: ",A.likes]})})]})})},M=s(6407),W=function(){var A=(0,p.cI)(),e=A.register,s=A.handleSubmit,i=A.reset,o=(0,I.v9)(v.aC),n=(0,I.v9)(v.Jq),l=(0,I.I0)(),c=n.map((function(A){return(0,u.jsx)(y,{message:A.message,likes:A.likesCount},A.id)}));return(0,u.jsx)("div",{className:N,children:(0,u.jsxs)("form",{onSubmit:s((function(A){l(M.Nw.addPost(A.post)),i()})),style:{width:"674px"},children:[(0,u.jsxs)("div",{className:Y,children:[(0,u.jsx)("div",{children:(0,u.jsx)("input",(0,t.Z)({type:"text",placeholder:"Type here...",autoComplete:"off"},e("post",{required:!0})))}),(0,u.jsx)("div",{children:(0,u.jsx)("button",{children:"Add post"})})]}),(0,u.jsxs)("h3",{className:P,children:[null===o||void 0===o?void 0:o.fullName,"'s posts"]}),(0,u.jsx)("div",{className:Q,children:c})]})})},R=function(A){var e=(0,I.v9)(v.q2);return(0,u.jsxs)("div",{children:[(0,u.jsx)(m,{isOwner:A.isOwner,profile:A.profile,status:A.status,updateStatus:A.updateStatus,savePhoto:A.savePhoto,saveProfileInfo:A.saveProfileInfo}),A.isOwner?(0,u.jsxs)("div",{className:w,children:[(0,u.jsx)("div",{className:B,children:(0,u.jsxs)("div",{className:E,children:[(0,u.jsx)("span",{className:G,children:"Followed "})," ",(0,u.jsx)("span",{className:C,children:e})]})}),(0,u.jsx)(W,{})]}):null]})},X=s(1623),H=s(7781),D=s(6871),F=function(A){return function(e){var s={params:(0,D.UO)()};return(0,u.jsx)(A,(0,t.Z)((0,t.Z)({},e),{},{match:s}))}},S=function(A){(0,n.Z)(s,A);var e=(0,l.Z)(s);function s(){return(0,i.Z)(this,s),e.apply(this,arguments)}return(0,o.Z)(s,[{key:"refreshProfile",value:function(){var A=this.props.match.params.userID;A||(A=this.props.authorizedUserID),this.props.getProfile(A),this.props.getStatus(A)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(A,e){this.props.match.params.userID!==A.match.params.userID&&this.refreshProfile()}},{key:"render",value:function(){return(0,u.jsx)(R,(0,t.Z)((0,t.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,isOwner:!this.props.match.params.userID,savePhoto:this.props.savePhoto,saveProfileInfo:this.props.saveProfileInfo}))}}]),s}(c.Component),z=(0,H.qC)((0,I.$j)((function(A){return{profile:A.profilePage.profile,status:A.profilePage.status,authorizedUserID:A.auth.userID}}),{getProfile:M.Ai,getStatus:M.lR,updateStatus:M.Nf,savePhoto:M.Ju,saveProfileInfo:M.FX}),F,X.Z)(S)},1428:function(A,e,s){var t=s(4836);e.Z=void 0;var i=t(s(5649)),o=s(184),n=(0,i.default)((0,o.jsx)("path",{d:"M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}),"Done");e.Z=n},9013:function(A,e,s){var t=s(4836);e.Z=void 0;var i=t(s(5649)),o=s(184),n=(0,i.default)((0,o.jsx)("path",{d:"M5 20h14v-2H5v2zm0-10h4v6h6v-6h4l-7-7-7 7z"}),"Upload");e.Z=n}}]);
//# sourceMappingURL=485.2ae10558.chunk.js.map