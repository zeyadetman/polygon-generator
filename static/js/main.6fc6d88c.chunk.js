(this["webpackJsonppolygon-generator"]=this["webpackJsonppolygon-generator"]||[]).push([[0],{13:function(t,n,e){},14:function(t,n,e){},25:function(t,n,e){"use strict";e.r(n);var r=e(1),o=e.n(r),c=e(4),i=e.n(c),a=(e(13),e(8)),l=(e(14),e(5)),u=e.n(l),s=e(0);var g=function(t){var n=t.sides,e=t.length,r=t.colors,o=t.childs,c=function(t,n){var e={0:n},r={0:0};Array.from({length:t},(function(o,c){var i=c+1;return e[i]=Number((n*Math.cos(2*Math.PI*i/t)).toFixed(0)),r[i]=Number((n*Math.sin(2*Math.PI*i/t)).toFixed(0)),{x:e[i],y:r[i]}}));var o="";return Array.from({length:t+1},(function(t,n){return o+="".concat(e[n],",").concat(r[n]," ")})),o}(n,e);return Object(s.jsxs)("svg",{id:"polygonResult",width:2*e,height:2*e,viewBox:"".concat(-1*e," ").concat(-1*e," ").concat(2*e," ").concat(2*e),children:[Object(s.jsx)("polygon",{points:c,fill:r[0]}),function(){if(o){var t=[];return Array.from({length:o},(function(n,e){var i=(1/(o+1)*(e+1)).toFixed(2);return t.push(Object(s.jsx)("polygon",{points:c,fill:r[e+1],style:{transform:"scale(".concat(i,")")}},e)),t})),t.reverse()}return[]}()]})},h=e(6),f=e.n(h),p=e(7);var d=function(){var t,n=Object(r.useState)(""),e=Object(a.a)(n,2),o=e[0],c=e[1],i=f()(o),l=function(t,n){var e="#".concat(t.split(/(?<=^(?:.{3})+)(?!$)/).filter((function(t){return 3===t.length}))[0]);return Array.from({length:10},(function(t,r){return u()(e).alpha(.1*r*n.length).lighten(.1*r)})).map((function(t){return t.hex().toString()}))}(i,o),h=(t=i,Math.max(2,t.split("").filter((function(t){return isNaN(Number(t))})).length%22)),d=function(t){return Math.max(3,t.split("").filter((function(t){return!isNaN(Number(t))&&Number(t)%8===0})).length)}(i);return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("header",{className:"App-header",children:[Object(s.jsx)("textarea",{onChange:function(t){return c(t.target.value)},placeholder:"Write text and get your own polygon...",style:{marginBottom:"6rem",fontSize:"1em",width:"40%",color:"#111",border:"none",outline:"none"}}),Object(s.jsx)(g,{childs:h,sides:d,length:160,colors:l}),Object(s.jsx)("button",{onClick:function(){Object(p.saveSvgAsPng)(document.getElementById("polygonResult"),"polygon-".concat(o,".png"),{scale:1,left:-160,top:-160})},style:{backgroundColor:"#eee",border:"none",marginTop:"2rem",cursor:"pointer"},children:"Save the polygon"})]})})},b=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,26)).then((function(n){var e=n.getCLS,r=n.getFID,o=n.getFCP,c=n.getLCP,i=n.getTTFB;e(t),r(t),o(t),c(t),i(t)}))};i.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(d,{})}),document.getElementById("root")),b()}},[[25,1,2]]]);
//# sourceMappingURL=main.6fc6d88c.chunk.js.map