"use strict";(self.webpackChunkreact_kabzda_1=self.webpackChunkreact_kabzda_1||[]).push([[344],{5190:function(e,s,t){t.r(s),t.d(s,{default:function(){return H}});var i=t(1413),n=t(5671),o=t(3144),r=t(9340),a=t(8557),l=t(2791),c=t(9439),u={profile_info:"ProfileInfo_profile_info__NakLG",avatar:"ProfileInfo_avatar__v3lLj",image:"ProfileInfo_image__DDweF",fileUpload:"ProfileInfo_fileUpload__-oFCM",buttons:"ProfileInfo_buttons__siaCO",edit:"ProfileInfo_edit__m8BFh",edit_disabled:"ProfileInfo_edit_disabled__p-8nP",upload:"ProfileInfo_upload__N-5kY",icon:"ProfileInfo_icon__vGOUM",info:"ProfileInfo_info__miP9O",editing:"ProfileInfo_editing__iNnOh",upper:"ProfileInfo_upper__H6yAG",name:"ProfileInfo_name__3FB6v",status:"ProfileInfo_status__SkwpM",form:"ProfileInfo_form__97k-R",columns:"ProfileInfo_columns__5WXEc",labels:"ProfileInfo_labels__1SqGr",inputs:"ProfileInfo_inputs__chCEy",contact_input:"ProfileInfo_contact_input__J+vK8",about:"ProfileInfo_about__Q+iRk",soft_skills:"ProfileInfo_soft_skills__lWm1D",contact:"ProfileInfo_contact__4JCMo"},d=t.p+"static/media/post_avatar_big.388d1d56110005d55708.png",f=t(4407),p=t(184),h=function(e){var s=(0,l.useState)(!1),t=(0,c.Z)(s,2),i=t[0],n=t[1],o=(0,l.useState)(e.status),r=(0,c.Z)(o,2),a=r[0],u=r[1];(0,l.useEffect)((function(){u(e.status)}),[e.status]);return(0,p.jsx)("div",{children:i?(0,p.jsx)("div",{children:(0,p.jsx)("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,value:a||"",onBlur:function(){n(!1),e.updateStatus(a)}})}):(0,p.jsx)("div",{children:(0,p.jsx)("span",{onDoubleClick:function(){e.isOwner&&n(!0)},children:e.status?e.status:"No status"})})})},_=t(5290),v=function(e){var s=e.contactTitle;e.contactValue,e.register;return(0,p.jsx)("div",{children:(0,p.jsxs)("b",{children:[s,": "]})})},j=function(e){var s=e.contactTitle,t=e.contactValue,n=e.register;return(0,p.jsx)("div",{children:(0,p.jsx)("input",(0,i.Z)({className:u.contact_input,type:"text",defaultValue:t},n("contacts."+s,{required:!1})))})},x=t(1428),m=function(e){var s=e.profile,t=e.setEditMode,n=e.setIsEnabled,o=e.saveProfileInfo,r=(0,_.cI)(),a=r.register,l=r.handleSubmit;return(0,p.jsx)("div",{children:(0,p.jsxs)("form",{onSubmit:l((function(e){s&&(e.fullName=s.fullName),o(e).then((function(){return t(!1)}))})),className:u.form,children:[(0,p.jsxs)("div",{className:"".concat(u.columns," ").concat(u.labels),children:[(0,p.jsx)("div",{children:(0,p.jsx)("b",{children:"About me: "})}),(0,p.jsx)("div",{children:(0,p.jsx)("b",{children:"Looking for a job: "})}),(0,p.jsx)("div",{children:(0,p.jsx)("b",{children:"Soft skills: "})}),Object.keys(s.contacts).map((function(e){return(0,p.jsx)(v,{register:a,contactTitle:e,contactValue:s.contacts[e]},e)}))]}),(0,p.jsxs)("div",{className:"".concat(u.columns," ").concat(u.inputs),children:[(0,p.jsx)("div",{children:(0,p.jsx)("input",(0,i.Z)((0,i.Z)({type:"text"},a("aboutMe",{required:!1})),{},{defaultValue:s.aboutMe,onBlur:function(){},placeholder:"About Me",className:u.about}))}),(0,p.jsx)("div",{children:(0,p.jsx)("input",(0,i.Z)({type:"checkbox",defaultChecked:s.lookingForAJob},a("lookingForAJob",{required:!1})))}),(0,p.jsx)("div",{children:(0,p.jsx)("input",(0,i.Z)((0,i.Z)({type:"text"},a("lookingForAJobDescription",{required:!1})),{},{defaultValue:s.lookingForAJobDescription,onBlur:function(){},placeholder:"Soft skills",className:u.soft_skills}))}),Object.keys(s.contacts).map((function(e){return(0,p.jsx)(j,{register:a,contactTitle:e,contactValue:s.contacts[e]},e)}))]}),(0,p.jsx)("div",{children:(0,p.jsx)("button",{onClick:function(){return n(!0)},children:(0,p.jsx)(x.Z,{style:{width:"15px"}})})})]})})},P=function(e){var s=e.contactTitle,t=e.contactValue;return(0,p.jsx)("div",{children:t?(0,p.jsxs)("div",{className:u.contact,children:[(0,p.jsxs)("b",{children:[s,": "]}),(0,p.jsx)("a",{href:t,children:t})]}):null})},b=function(e){var s=e.profile;e.isOwner;return(0,p.jsxs)(p.Fragment,{children:[s.aboutMe?(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"About me: "}),(0,p.jsx)("span",{children:s.aboutMe})]}):null,(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"Looking for a job: "}),s.lookingForAJob?"Yes":"No"]}),s.lookingForAJob?(0,p.jsxs)("div",{className:u.job,children:[(0,p.jsx)("b",{children:"Soft skills: "}),s.lookingForAJob?s.lookingForAJobDescription:null]}):null,Object.keys(s.contacts).map((function(e){return(0,p.jsx)(P,{contactTitle:e,contactValue:s.contacts[e]},e)}))]})},N=t(8687),g=t(3993),I=t(9013),k=function(e){var s=e.profile,t=e.status,i=e.updateStatus,n=e.isOwner,o=e.savePhoto,r=e.saveProfileInfo,a=(0,l.useState)(!1),_=(0,c.Z)(a,2),v=_[0],j=_[1],x=(0,l.useState)(!0),P=(0,c.Z)(x,2),k=P[0],Z=P[1],y=(0,N.v9)(g.xu);if(!s)return(0,p.jsx)(f.Z,{});return(0,p.jsxs)("div",{className:u.profile_info,children:[(0,p.jsxs)("div",{className:u.avatar,children:[y?(0,p.jsx)(f.Z,{}):(0,p.jsxs)("div",{className:u.image,children:[(0,p.jsx)("img",{src:null!==s.photos.large?s.photos.large:d,alt:""}),n?(0,p.jsxs)("span",{className:u.fileUpload,children:[(0,p.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&o(e.target.files[0])},className:u.upload,id:"file-input"}),(0,p.jsx)("label",{className:u.icon,htmlFor:"file-input",children:(0,p.jsx)(I.Z,{})})]}):null]}),(0,p.jsx)("div",{className:u.buttons,children:n?(0,p.jsx)("button",{disabled:!k,onClick:function(){j(!0),Z(!1)},className:k?u.edit:u.edit_disabled,children:"Edit profile"}):null})]}),(0,p.jsxs)("div",{className:v?u.editing:u.info,children:[(0,p.jsxs)("div",{className:u.upper,children:[(0,p.jsx)("div",{className:u.name,children:s.fullName}),(0,p.jsx)("span",{className:u.status,children:(0,p.jsx)(h,{status:t,updateStatus:i,isOwner:n})})]}),v?(0,p.jsx)(m,{profile:s,setEditMode:j,setIsEnabled:Z,saveProfileInfo:r}):(0,p.jsx)(b,{profile:s,isOwner:n})]})]})},Z="Profile_amount_wrapper__lZ3KI",y="Profile_amount_string__CN6wF",S="Profile_amount__VyaAZ",w="Profile_followed__2VeyJ",F="Profile_lower__meUyG",M="MyPosts_form__AR2gf",C="MyPosts_text__2MS39",A="MyPosts_posts__SmsFw",D="MyPosts_newPost__zAF6d",O="MyPosts_posts_block__WYbPj",J="Post_post_wrapper__P23VN",U="Post_first_post__0uYd5",V="Post_upper__bsQs1",q="Post_writer_info__EcQml",E=t(3873),z=function(e){var s=e.postInfo,t=e.last;return(0,p.jsxs)("div",{className:s.id+1!==t?J:U,children:[(0,p.jsxs)("div",{className:V,children:[(0,p.jsx)("a",{href:"",children:(0,p.jsx)("img",{src:null===s.avatarUrl?E:s.avatarUrl,alt:""})}),(0,p.jsxs)("div",{className:q,children:[(0,p.jsx)("div",{children:(0,p.jsx)("a",{href:"",children:s.name})}),(0,p.jsx)("div",{children:s.date})]})]}),(0,p.jsx)("div",{children:s.message}),(0,p.jsx)("div",{children:(0,p.jsxs)("span",{children:["like count: ",s.likesCount]})})]})},T=t(6407),L=function(){var e=(0,_.cI)(),s=e.register,t=e.handleSubmit,n=e.reset,o=(0,N.v9)(g.aC),r=(0,N.v9)(g.Jq),a=(0,N.I0)(),l=r.map((function(e){return(0,p.jsx)(z,{postInfo:e,last:r.length},e.id)})).reverse();return(0,p.jsx)("div",{className:O,children:(0,p.jsxs)("form",{onSubmit:t((function(e){a(T.Nw.addPost(e.post)),n()})),className:M,children:[(0,p.jsxs)("div",{className:D,children:[(0,p.jsx)("div",{children:(0,p.jsx)("input",(0,i.Z)({type:"text",placeholder:"Type here...",autoComplete:"off"},s("post",{required:!0})))}),(0,p.jsx)("div",{children:(0,p.jsx)("button",{children:"Add post"})})]}),(0,p.jsxs)("div",{className:C,children:[null===o||void 0===o?void 0:o.fullName,"'s posts"]}),(0,p.jsx)("div",{className:A,children:l})]})})},B=function(e){var s=(0,N.v9)(g.q2);return(0,p.jsxs)("div",{children:[(0,p.jsx)(k,{isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,savePhoto:e.savePhoto,saveProfileInfo:e.saveProfileInfo}),e.isOwner?(0,p.jsxs)("div",{className:F,children:[(0,p.jsx)("div",{className:Z,children:(0,p.jsxs)("div",{className:y,children:[(0,p.jsx)("span",{className:w,children:"Followed "})," ",(0,p.jsx)("span",{className:S,children:s})]})}),(0,p.jsx)(L,{})]}):null]})},G=t(1623),R=t(7781),Y=t(6871),Q=function(e){return function(s){var t={params:(0,Y.UO)()};return(0,p.jsx)(e,(0,i.Z)((0,i.Z)({},s),{},{match:t}))}},W=function(e){(0,r.Z)(t,e);var s=(0,a.Z)(t);function t(){return(0,n.Z)(this,t),s.apply(this,arguments)}return(0,o.Z)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userID;e||(e=this.props.authorizedUserID),this.props.getProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,s){this.props.match.params.userID!==e.match.params.userID&&this.refreshProfile()}},{key:"render",value:function(){return(0,p.jsx)(B,(0,i.Z)((0,i.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,isOwner:!this.props.match.params.userID,savePhoto:this.props.savePhoto,saveProfileInfo:this.props.saveProfileInfo}))}}]),t}(l.Component),H=(0,R.qC)((0,N.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserID:e.auth.userID}}),{getProfile:T.Ai,getStatus:T.lR,updateStatus:T.Nf,savePhoto:T.Ju,saveProfileInfo:T.FX}),Q,G.Z)(W)},1428:function(e,s,t){var i=t(4836);s.Z=void 0;var n=i(t(5649)),o=t(184),r=(0,n.default)((0,o.jsx)("path",{d:"M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}),"Done");s.Z=r},9013:function(e,s,t){var i=t(4836);s.Z=void 0;var n=i(t(5649)),o=t(184),r=(0,n.default)((0,o.jsx)("path",{d:"M5 20h14v-2H5v2zm0-10h4v6h6v-6h4l-7-7-7 7z"}),"Upload");s.Z=r}}]);
//# sourceMappingURL=344.2b32d66a.chunk.js.map