"use strict";(self.webpackChunkreact_kabzda_1=self.webpackChunkreact_kabzda_1||[]).push([[823],{1364:function(e,s,t){t.r(s),t.d(s,{default:function(){return W}});var o=t(1413),i=t(5671),r=t(3144),n=t(9340),l=t(8557),a=t(2791),c=t(9439),u={profile_info:"ProfileInfo_profile_info__Kipaq",avatar:"ProfileInfo_avatar__ZKzdt",image:"ProfileInfo_image__MpHvf",fileUpload:"ProfileInfo_fileUpload__uZOF1",buttons:"ProfileInfo_buttons__tQncy",edit:"ProfileInfo_edit__59zCE",edit_disabled:"ProfileInfo_edit_disabled__SoDlG",upload:"ProfileInfo_upload__+eM4i",icon:"ProfileInfo_icon__h4ySZ",info:"ProfileInfo_info__Z3ejP",editing:"ProfileInfo_editing__mGMiB",upper:"ProfileInfo_upper__XrsjE",name:"ProfileInfo_name__F-4sm",status:"ProfileInfo_status__tZfwy",form:"ProfileInfo_form__Z7Ab7",columns:"ProfileInfo_columns__vkK2K",labels:"ProfileInfo_labels__HZ5Bu",inputs:"ProfileInfo_inputs__UVZzO",contact_input:"ProfileInfo_contact_input__1V8yZ",about:"ProfileInfo_about__-Q7Rb",soft_skills:"ProfileInfo_soft_skills__v5Fk0",contact:"ProfileInfo_contact__ZXPvl"},d=t.p+"static/media/post_avatar_big.388d1d56110005d55708.png",f=t(4407),_=t(1428),h=t(184),p=function(e){var s=(0,a.useState)(!1),t=(0,c.Z)(s,2),o=t[0],i=t[1],r=(0,a.useState)(e.status),n=(0,c.Z)(r,2),l=n[0],u=n[1];(0,a.useEffect)((function(){u(e.status)}),[e.status]);var d=function(){i(!1),e.updateStatus(l)};return(0,h.jsx)("div",{children:o?(0,h.jsx)("div",{children:(0,h.jsx)("form",{onSubmit:d,children:(0,h.jsxs)("div",{children:[(0,h.jsx)("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,value:l||"",onBlur:d}),(0,h.jsx)("button",{type:"submit",children:(0,h.jsx)(_.Z,{style:{width:"10px",height:"10px",padding:0}})})]})})}):(0,h.jsx)("div",{children:(0,h.jsx)("span",{onDoubleClick:function(){e.isOwner&&i(!0)},children:e.status?e.status:"No status"})})})},x=t(5290),m=function(e){var s=e.contactTitle;e.contactValue,e.register;return(0,h.jsx)("div",{children:(0,h.jsxs)("b",{children:[s,": "]})})},j=function(e){var s=e.contactTitle,t=e.contactValue,i=e.register;return(0,h.jsx)("div",{children:(0,h.jsx)("input",(0,o.Z)({className:u.contact_input,placeholder:"Type here...",type:"text",defaultValue:t},i("contacts."+s,{required:!1})))})},v=function(e){var s=e.profile,t=e.setEditMode,i=e.setIsEnabled,r=e.saveProfileInfo,n=(0,x.cI)(),l=n.register,a=n.handleSubmit;return(0,h.jsx)("div",{children:(0,h.jsxs)("form",{onSubmit:a((function(e){s&&(e.fullName=s.fullName),r(e).then((function(){return t(!1)}))})),className:u.form,children:[(0,h.jsxs)("div",{className:"".concat(u.columns," ").concat(u.labels),children:[(0,h.jsx)("div",{children:(0,h.jsx)("b",{children:"About me: "})}),(0,h.jsx)("div",{children:(0,h.jsx)("b",{children:"Looking for a job: "})}),(0,h.jsx)("div",{children:(0,h.jsx)("b",{children:"Soft skills: "})}),Object.keys(s.contacts).map((function(e){return(0,h.jsx)(m,{register:l,contactTitle:e,contactValue:s.contacts[e]},e)}))]}),(0,h.jsxs)("div",{className:"".concat(u.columns," ").concat(u.inputs),children:[(0,h.jsx)("div",{children:(0,h.jsx)("input",(0,o.Z)((0,o.Z)({type:"text"},l("aboutMe",{required:!1})),{},{defaultValue:s.aboutMe,onBlur:function(){},placeholder:"Type here...",className:u.about}))}),(0,h.jsx)("div",{children:(0,h.jsx)("input",(0,o.Z)({type:"checkbox",defaultChecked:s.lookingForAJob,placeholder:"Type here..."},l("lookingForAJob",{required:!1})))}),(0,h.jsx)("div",{children:(0,h.jsx)("input",(0,o.Z)((0,o.Z)({type:"text"},l("lookingForAJobDescription",{required:!1})),{},{defaultValue:s.lookingForAJobDescription,onBlur:function(){},placeholder:"Type here...",className:u.soft_skills}))}),Object.keys(s.contacts).map((function(e){return(0,h.jsx)(j,{register:l,contactTitle:e,contactValue:s.contacts[e]},e)}))]}),(0,h.jsx)("div",{children:(0,h.jsx)("button",{onClick:function(){return i(!0)},children:(0,h.jsx)(_.Z,{style:{width:"15px"}})})})]})})},P=function(e){var s=e.contactTitle,t=e.contactValue;return(0,h.jsx)("div",{children:t?(0,h.jsxs)("div",{className:u.contact,children:[(0,h.jsxs)("b",{children:[s,": "]}),(0,h.jsx)("a",{href:t,children:t})]}):null})},g=function(e){var s=e.profile;e.isOwner;return(0,h.jsxs)(h.Fragment,{children:[s.aboutMe?(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"About me: "}),(0,h.jsx)("span",{children:s.aboutMe})]}):null,(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Looking for a job: "}),s.lookingForAJob?"Yes":"No"]}),s.lookingForAJob?(0,h.jsxs)("div",{className:u.job,children:[(0,h.jsx)("b",{children:"Soft skills: "}),s.lookingForAJob?s.lookingForAJobDescription:null]}):null,Object.keys(s.contacts).map((function(e){return(0,h.jsx)(P,{contactTitle:e,contactValue:s.contacts[e]},e)}))]})},b=t(8687),w=t(3993),N=t(9013),Z=function(e){var s=e.profile,t=e.status,o=e.updateStatus,i=e.isOwner,r=e.savePhoto,n=e.saveProfileInfo,l=(0,a.useState)(!1),_=(0,c.Z)(l,2),x=_[0],m=_[1],j=(0,a.useState)(!0),P=(0,c.Z)(j,2),Z=P[0],I=P[1],k=(0,b.v9)(w.xu);if(!s)return(0,h.jsx)(f.Z,{});return(0,h.jsxs)("div",{className:u.profile_info,children:[(0,h.jsxs)("div",{className:u.avatar,children:[k?(0,h.jsx)(f.Z,{}):(0,h.jsxs)("div",{className:u.image,children:[(0,h.jsx)("img",{src:null!==s.photos.large?s.photos.large:d,alt:""}),i?(0,h.jsxs)("span",{className:u.fileUpload,children:[(0,h.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&r(e.target.files[0])},className:u.upload,id:"file-input"}),(0,h.jsx)("label",{className:u.icon,htmlFor:"file-input",children:(0,h.jsx)(N.Z,{})})]}):null]}),(0,h.jsx)("div",{className:u.buttons,children:i?(0,h.jsx)("button",{disabled:!Z,onClick:function(){m(!0),I(!1)},className:Z?u.edit:u.edit_disabled,children:"Edit profile"}):null})]}),(0,h.jsxs)("div",{className:x?u.editing:u.info,children:[(0,h.jsxs)("div",{className:u.upper,children:[(0,h.jsx)("div",{className:u.name,children:s.fullName}),(0,h.jsx)("span",{className:u.status,children:(0,h.jsx)(p,{status:t,updateStatus:o,isOwner:i})})]}),x?(0,h.jsx)(v,{profile:s,setEditMode:m,setIsEnabled:I,saveProfileInfo:n}):(0,h.jsx)(g,{profile:s,isOwner:i})]})]})},I={amount_wrapper_low:"Profile_amount_wrapper_low__dVSRe",amount_wrapper_high:"Profile_amount_wrapper_high__tLX7D",amount_string:"Profile_amount_string__ifDDx",amount:"Profile_amount__rRxkO",upper:"Profile_upper__AADfu",followed_users_low:"Profile_followed_users_low__gYxVa",followed_users_high:"Profile_followed_users_high__1eIdJ",followed_user:"Profile_followed_user__YFs2q",followed_name:"Profile_followed_name__aZAyo",followed_string:"Profile_followed_string__Pe7L4",lower:"Profile_lower__PrS-C"},k="MyPosts_form__9W0H8",y="MyPosts_text__875PV",S="MyPosts_posts__5+GsS",M="MyPosts_newPost__NW0Wy",D="MyPosts_posts_block__fhdyZ",A="Post_post_wrapper__q1kez",F="Post_first_post__UQpic",O="Post_upper__ijun1",C="Post_writer_info__L5ff3",V="Post_wrap__hyAzy",z="Post_string__hqViu",q=t(3873),T=t(7237),U=function(e){var s=e.postInfo,t=e.last,o=(0,a.useState)(s.likesCount),i=(0,c.Z)(o,2),r=i[0],n=i[1],l=(0,a.useState)(!1),u=(0,c.Z)(l,2),d=u[0],f=u[1];return(0,h.jsxs)("div",{className:s.id+1!==t?A:F,children:[(0,h.jsxs)("div",{className:O,children:[(0,h.jsx)("a",{href:"",children:(0,h.jsx)("img",{src:null===s.avatarUrl?q:s.avatarUrl,alt:""})}),(0,h.jsxs)("div",{className:C,children:[(0,h.jsx)("div",{children:(0,h.jsx)("a",{href:"",children:s.name})}),(0,h.jsx)("div",{children:s.date})]})]}),(0,h.jsx)("div",{children:s.message}),(0,h.jsx)("div",{children:(0,h.jsxs)("span",{className:V,children:[(0,h.jsx)(T.Z,{style:d?{color:"red",cursor:"pointer"}:{color:"white",cursor:"pointer"},onClick:function(){n(d?r-1:r+1),f(!d)}}),(0,h.jsx)("span",{className:z,children:r})]})})]})},J=t(6407),L=function(){var e=(0,x.cI)(),s=e.register,t=e.handleSubmit,i=e.reset,r=(0,b.v9)(w.Jq),n=(0,b.I0)(),l=r.map((function(e){return(0,h.jsx)(U,{postInfo:e,last:r.length},e.id)})).reverse();return(0,h.jsx)("div",{className:D,children:(0,h.jsxs)("form",{onSubmit:t((function(e){n(J.Nw.addPost(e.post)),i()})),className:k,children:[(0,h.jsxs)("div",{className:M,children:[(0,h.jsx)("div",{children:(0,h.jsx)("input",(0,o.Z)({type:"text",placeholder:"Type here...",autoComplete:"off"},s("post",{required:!0})))}),(0,h.jsx)("div",{children:(0,h.jsx)("button",{children:"Add post"})})]}),(0,h.jsx)("div",{className:y,children:"All posts"}),(0,h.jsx)("div",{className:S,children:l})]})})},E=t(3504),B=function(e){var s=e.user,t=s.name;return s.name.length>7&&(t=s.name.slice(0,6)+"..."),(0,h.jsxs)("div",{className:I.followed_user,children:[(0,h.jsx)("div",{className:I.followed_avatar,children:(0,h.jsx)(E.OL,{to:"/profile/"+s.id,children:(0,h.jsx)("img",{src:null!==s.photos.small?s.photos.small:q,alt:""})})}),(0,h.jsx)("div",{className:I.followed_name,children:(0,h.jsx)(E.OL,{to:"/profile/"+s.id,children:t})})]})},H=function(e){var s=(0,b.v9)(w.q2),t=(0,b.v9)(w.kk),o=[],i=[];if(t.length>6)for(var r=0;r<6;r++){for(var n=Math.floor(Math.random()*t.length);i.includes(n);)n=Math.floor(Math.random()*t.length);i.push(n),o.push(t[n])}else t.map((function(e){return o.push(e)}));return(0,h.jsxs)("div",{children:[(0,h.jsx)(Z,{isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,savePhoto:e.savePhoto,saveProfileInfo:e.saveProfileInfo}),e.isOwner?(0,h.jsxs)("div",{className:I.lower,children:[(0,h.jsx)("div",{className:o.length<4?I.amount_wrapper_low:I.amount_wrapper_high,children:(0,h.jsxs)("div",{className:I.amount_string,children:[(0,h.jsxs)("div",{className:I.upper,children:[(0,h.jsx)("span",{className:I.followed_string,children:"Followed "}),(0,h.jsx)("span",{className:I.amount,children:s})]}),(0,h.jsx)("div",{className:o.length<4?I.followed_users_low:I.followed_users_high,children:o.map((function(e){return(0,h.jsx)(B,{user:e},e.id)}))})]})}),(0,h.jsx)(L,{})]}):null]})},K=t(1623),R=t(7781),X=t(6871),G=function(e){return function(s){var t={params:(0,X.UO)()};return(0,h.jsx)(e,(0,o.Z)((0,o.Z)({},s),{},{match:t}))}},Q=function(e){(0,n.Z)(t,e);var s=(0,l.Z)(t);function t(){return(0,i.Z)(this,t),s.apply(this,arguments)}return(0,r.Z)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userID;e||(e=this.props.authorizedUserID),this.props.getProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,s){this.props.match.params.userID!==e.match.params.userID&&this.refreshProfile()}},{key:"render",value:function(){return(0,h.jsx)(H,(0,o.Z)((0,o.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,isOwner:!this.props.match.params.userID,savePhoto:this.props.savePhoto,saveProfileInfo:this.props.saveProfileInfo}))}}]),t}(a.Component),W=(0,R.qC)((0,b.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserID:e.auth.userID}}),{getProfile:J.Ai,getStatus:J.lR,updateStatus:J.Nf,savePhoto:J.Ju,saveProfileInfo:J.FX}),G,K.Z)(Q)},1428:function(e,s,t){var o=t(4836);s.Z=void 0;var i=o(t(5649)),r=t(184),n=(0,i.default)((0,r.jsx)("path",{d:"M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}),"Done");s.Z=n},7237:function(e,s,t){var o=t(4836);s.Z=void 0;var i=o(t(5649)),r=t(184),n=(0,i.default)((0,r.jsx)("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");s.Z=n},9013:function(e,s,t){var o=t(4836);s.Z=void 0;var i=o(t(5649)),r=t(184),n=(0,i.default)((0,r.jsx)("path",{d:"M5 20h14v-2H5v2zm0-10h4v6h6v-6h4l-7-7-7 7z"}),"Upload");s.Z=n}}]);
//# sourceMappingURL=823.25a9cfa4.chunk.js.map