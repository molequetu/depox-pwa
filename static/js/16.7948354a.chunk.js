(this.webpackJsonpdepo=this.webpackJsonpdepo||[]).push([[16],{509:function(e,t,a){"use strict";a.r(t);var n=a(38),i=a(10),r=a(18),c=a(0),o=a(171),s=a(154),u=a(124),l=a.n(u),p=a(89),d=a(69),m=a(153),g=a(148),b=a(127),h=a(126),j=Object(m.a)((function(e){var t;return{paper:(t={width:"auto",marginLeft:e.spacing(3),marginRight:e.spacing(3)},Object(i.a)(t,e.breakpoints.up(620+e.spacing(6)),{width:400,marginLeft:"auto",marginRight:"auto"}),Object(i.a)(t,"marginTop",e.spacing(9)),Object(i.a)(t,"display","flex"),Object(i.a)(t,"flexDirection","column"),Object(i.a)(t,"alignItems","center"),Object(i.a)(t,"padding","".concat(e.spacing(2),"px ").concat(e.spacing(3),"px ").concat(e.spacing(3),"px")),t),form:{marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},container:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%"}}}));t.default=function(){var e=j(),t=Object(g.a)(),a=Object(b.useSnackbar)().enqueueSnackbar,i=Object(c.useState)(""),u=Object(n.a)(i,2),m=u[0],f=u[1],O=Object(c.useState)(""),v=Object(n.a)(O,2),x=v[0],y=v[1],q=Object(c.useState)(0),S=Object(n.a)(q,2),k=S[0],C=S[1],w="Stocks/export";return Object(r.jsx)(l.a,{pageTitle:t.formatMessage({id:"export_products"}),children:Object(r.jsx)(p.a,{className:e.paper,elevation:6,children:Object(r.jsxs)("div",{className:e.container,children:[Object(r.jsx)(d.a,{component:"h1",variant:"h5",children:t.formatMessage({id:"export_products"})}),Object(r.jsxs)("form",{className:e.form,onSubmit:function(e){e.preventDefault(),function(){var e={binCode:x,itemCode:m,quantity:k};fetch("".concat(h.a.apiURL+w),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){404!==e.status&&409!==e.status?(a(e.message,{variant:"success",anchorOrigin:{vertical:"top",horizontal:"center"}}),f(""),y(""),C(0)):a(e.message,{variant:"error",anchorOrigin:{vertical:"top",horizontal:"center"}})})).catch((function(e){console.error("Error while exporting, will queue the request and retry later:",e)}))}()},children:[Object(r.jsx)(o.a,{value:m,onChange:function(e){return f(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"product",label:t.formatMessage({id:"product"}),name:"product",autoFocus:!0}),Object(r.jsx)(o.a,{value:x,onChange:function(e){return y(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"bin",label:t.formatMessage({id:"bin"}),id:"bin"}),Object(r.jsx)(o.a,{value:k,onChange:function(e){return C(e.target.value)},id:"quantity",label:t.formatMessage({id:"quantity"}),type:"number",InputLabelProps:{shrink:!0},InputProps:{inputProps:{min:0}},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"quantity"}),Object(r.jsx)(s.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:t.formatMessage({id:"export"})})]})]})})})}}}]);
//# sourceMappingURL=16.7948354a.chunk.js.map