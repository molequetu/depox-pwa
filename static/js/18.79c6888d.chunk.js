(this.webpackJsonpdepo=this.webpackJsonpdepo||[]).push([[18],{508:function(e,t,n){"use strict";n.r(t);var a=n(38),i=n(10),r=n(18),c=n(0),o=n(171),s=n(154),u=n(124),l=n.n(u),p=n(89),g=n(69),d=n(153),m=n(148),b=n(127),h=n(126),f=Object(d.a)((function(e){var t;return{paper:(t={width:"auto",marginLeft:e.spacing(3),marginRight:e.spacing(3)},Object(i.a)(t,e.breakpoints.up(620+e.spacing(6)),{width:400,marginLeft:"auto",marginRight:"auto"}),Object(i.a)(t,"marginTop",e.spacing(9)),Object(i.a)(t,"display","flex"),Object(i.a)(t,"flexDirection","column"),Object(i.a)(t,"alignItems","center"),Object(i.a)(t,"padding","".concat(e.spacing(2),"px ").concat(e.spacing(3),"px ").concat(e.spacing(3),"px")),t),form:{marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},container:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%"}}}));t.default=function(){var e=f(),t=Object(m.a)(),n=Object(b.useSnackbar)().enqueueSnackbar,i=Object(c.useState)(""),u=Object(a.a)(i,2),d=u[0],j=u[1],O=Object(c.useState)(""),v=Object(a.a)(O,2),x=v[0],y=v[1],q=Object(c.useState)(0),k=Object(a.a)(q,2),w=k[0],S=k[1],M="Stocks/import";function C(){j(""),y(""),S(0)}return Object(r.jsx)(l.a,{pageTitle:t.formatMessage({id:"import_products"}),children:Object(r.jsx)(p.a,{className:e.paper,elevation:6,children:Object(r.jsxs)("div",{className:e.container,children:[Object(r.jsx)(g.a,{component:"h1",variant:"h5",children:t.formatMessage({id:"import_products"})}),Object(r.jsxs)("form",{className:e.form,onSubmit:function(e){e.preventDefault(),function(){var e={binCode:x,itemCode:d,quantity:w};fetch("".concat(h.a.apiURL+M),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){404!==e.status?(n(e.message,{variant:"success",anchorOrigin:{vertical:"top",horizontal:"center"}}),C()):n(e.message,{variant:"error",anchorOrigin:{vertical:"top",horizontal:"center"}})})).catch((function(e){(console.error("Error while importing, will queue the request and retry later :",e),"serviceWorker"in navigator&&"SyncManager"in window)&&navigator.serviceWorker.ready.then((function(e){return e.sync.getTags()})).then((function(e){e.includes("workbox-background-sync:import-export")&&(C(),n(t.formatMessage({id:"request_queued_msg"}),{variant:"warning",anchorOrigin:{vertical:"top",horizontal:"center"}}))}))}))}()},children:[Object(r.jsx)(o.a,{value:d,onChange:function(e){return j(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"product",label:t.formatMessage({id:"product"}),name:"product",autoFocus:!0}),Object(r.jsx)(o.a,{value:x,onChange:function(e){return y(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"bin",label:t.formatMessage({id:"bin"}),id:"bin"}),Object(r.jsx)(o.a,{value:w,onChange:function(e){return S(e.target.value)},id:"quantity",label:t.formatMessage({id:"quantity"}),type:"number",InputLabelProps:{shrink:!0},InputProps:{inputProps:{min:0}},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"quantity"}),Object(r.jsx)(s.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:t.formatMessage({id:"import"})})]})]})})})}}}]);
//# sourceMappingURL=18.79c6888d.chunk.js.map