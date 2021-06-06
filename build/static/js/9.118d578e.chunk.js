(this["webpackJsonpyeti-frontend"]=this["webpackJsonpyeti-frontend"]||[]).push([[9],{671:function(e,n,t){"use strict";t.d(n,"a",(function(){return O}));var c,i,r,a=t(52),o=t(0),s=t.n(o),l=t(4),d=t(12),u=l.e.div(c||(c=Object(a.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size})),b=function(e){var n,t=e.size,c=void 0===t?"md":t,i=Object(o.useContext)(l.a).spacing;switch(c){case"lg":n=i[6];break;case"sm":n=i[2];break;case"md":default:n=i[4]}return Object(d.jsx)(u,{size:n})},j=l.e.div(i||(i=Object(a.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  margin: 0;\n  padding: ","px;\n"])),(function(e){return e.theme.colors.primaryDark}),(function(e){return e.theme.spacing[4]})),x=l.e.div(r||(r=Object(a.a)(["\n  flex: 1;\n  text-align: center;\n"]))),O=function(e){var n=e.children,t=s.a.Children.toArray(n).length;return Object(d.jsx)(j,{children:s.a.Children.map(n,(function(e,n){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(x,{children:e}),n<t-1&&Object(d.jsx)(b,{})]})}))})}},674:function(e,n,t){"use strict";t.d(n,"a",(function(){return y}));var c,i,r,a,o,s,l,d=t(52),u=(t(0),t(4)),b=t(672),j=t(39),x=t(171),O=t(12),p=u.e.div(c||(c=Object(d.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: ",";\n  display: flex;\n  height: 72px;\n  padding: 0 ","px;\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.radii.default}),(function(e){return e.theme.spacing[3]})),h=u.e.input(i||(i=Object(d.a)(["\n  width: 100%;\n  background: none;\n  border: 0;\n  color: ",";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"])),(function(e){return e.theme.colors.primary})),f=function(e){var n=e.endAdornment,t=e.onChange,c=e.placeholder,i=e.startAdornment,r=e.value;return Object(O.jsxs)(p,{children:[!!i&&i,Object(O.jsx)(h,{placeholder:c,value:r,onChange:t}),!!n&&n]})},m=u.e.div(r||(r=Object(d.a)([""]))),g=u.e.div(a||(a=Object(d.a)(["\n  width: ","px;\n"])),(function(e){return e.theme.spacing[3]})),v=u.e.div(o||(o=Object(d.a)(["\n  align-items: center;\n  display: flex;\n"]))),k=u.e.div(s||(s=Object(d.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"])),(function(e){return e.theme.colors.primary})),w=u.e.span(l||(l=Object(d.a)(["\n  color: ",";\n  font-weight: 700;\n"])),(function(e){return e.theme.colors.primary})),y=function(e){var n=e.max,t=e.symbol,c=e.onChange,i=e.onSelectMax,r=e.value,a=e.depositFeeBP,o=void 0===a?0:a,s=Object(x.a)();return Object(O.jsxs)(m,{children:[Object(O.jsxs)(k,{children:[n.toLocaleString()," ",t," ",s(526,"Available")]}),Object(O.jsx)(f,{endAdornment:Object(O.jsxs)(v,{children:[Object(O.jsx)(w,{children:t}),Object(O.jsx)(g,{}),Object(O.jsx)("div",{children:Object(O.jsx)(j.d,{size:"sm",onClick:i,children:s(452,"Max")})})]}),onChange:c,placeholder:"0",value:r}),o>0?Object(O.jsxs)(k,{children:[s(10001,"Deposit Fee"),": ",new b.a(r||0).times(o/1e4).toString()," ",t]}):null]})}},677:function(e,n,t){"use strict";t.d(n,"c",(function(){return a})),t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return s})),t.d(n,"d",(function(){return r}));t(0);var c=t(39),i=t(12),r=function(){return Object(i.jsx)(c.A,{variant:"success",outline:!0,startIcon:Object(i.jsx)(c.D,{}),children:"No Fees"})},a=function(){return Object(i.jsx)(c.A,{variant:"secondary",outline:!0,startIcon:Object(i.jsx)(c.D,{}),children:"Core"})},o=function(){return Object(i.jsx)(c.A,{variant:"textSubtle",outline:!0,startIcon:Object(i.jsx)(c.l,{}),children:"Community"})},s=function(){return Object(i.jsx)(c.A,{variant:"binance",outline:!0,startIcon:Object(i.jsx)(c.c,{}),children:"Binance"})}},678:function(e,n,t){"use strict";t.d(n,"b",(function(){return b}));var c=t(2),i=t.n(c),r=t(15),a=t(0),o=t(68),s=t(44),l=t(95),d=t(669),u=t(668),b=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=Object(s.b)(),c=Object(o.m)(),b=c.account,j=Object(u.d)(),x=Object(u.e)(e),O=Object(a.useCallback)(function(){var c=Object(r.a)(i.a.mark((function c(r){return i.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(0!==e){c.next=5;break}return c.next=3,Object(d.i)(j,0,r,b);case 3:c.next=12;break;case 5:if(!n){c.next=10;break}return c.next=8,Object(d.e)(x,r,b);case 8:c.next=12;break;case 10:return c.next=12,Object(d.d)(x,r,b);case 12:t(Object(l.i)(e,b)),t(Object(l.g)(e,b));case 14:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}(),[b,t,n,j,x,e]);return{onStake:O}};n.a=function(e){var n=Object(s.b)(),t=Object(o.m)().account,c=Object(u.d)();return{onStake:Object(a.useCallback)(function(){var a=Object(r.a)(i.a.mark((function r(a){var o;return i.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Object(d.i)(c,e,a,t);case 2:o=i.sent,n(Object(l.a)(t)),console.info(o);case 5:case"end":return i.stop()}}),r)})));return function(e){return a.apply(this,arguments)}}(),[t,n,c,e])}}},685:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var c=t(672);c.a.config({EXPONENTIAL_AT:1e3,DECIMAL_PLACES:80});new c.a(1);var i=new c.a(10512e3)},686:function(e,n,t){"use strict";var c,i=t(52),r=t(4).e.div(c||(c=Object(i.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"])));n.a=r},687:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return j}));var c=t(2),i=t.n(c),r=t(15),a=t(0),o=t(68),s=(t(676),t(44)),l=t(95),d=t(669),u=t(668),b=function(e){var n=Object(s.b)(),t=Object(o.m)().account,c=Object(u.d)();return{onApprove:Object(a.useCallback)(Object(r.a)(i.a.mark((function r(){var a;return i.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,Object(d.a)(e,c,t);case 3:return a=i.sent,n(Object(l.a)(t)),i.abrupt("return",a);case 8:return i.prev=8,i.t0=i.catch(0),i.abrupt("return",!1);case 11:case"end":return i.stop()}}),r,null,[[0,8]])}))),[t,n,e,c])}},j=function(e,n){var t=Object(s.b)(),c=Object(o.m)().account,b=Object(u.e)(n);return{onApprove:Object(a.useCallback)(Object(r.a)(i.a.mark((function r(){var a;return i.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,Object(d.a)(e,b,c);case 3:return a=i.sent,t(Object(l.f)(n,c)),i.abrupt("return",a);case 8:return i.prev=8,i.t0=i.catch(0),i.abrupt("return",!1);case 11:case"end":return i.stop()}}),r,null,[[0,8]])}))),[c,t,e,b,n])}}},688:function(e,n,t){"use strict";t.d(n,"b",(function(){return j}));var c=t(2),i=t.n(c),r=t(15),a=t(0),o=t(68),s=t(44),l=t(95),d=t(669),u=t(668),b=[5,6,3,1,22,23],j=function(e){var n=Object(s.b)(),t=Object(o.m)().account,c=Object(u.d)(),j=Object(u.e)(e),x=b.includes(e);return{onUnstake:Object(a.useCallback)(function(){var a=Object(r.a)(i.a.mark((function r(a){var o,s,u;return i.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(0!==e){i.next=7;break}return i.next=3,Object(d.j)(c,0,a,t);case 3:o=i.sent,console.info(o),i.next=18;break;case 7:if(!x){i.next=14;break}return i.next=10,Object(d.c)(j,a,t);case 10:s=i.sent,console.info(s),i.next=18;break;case 14:return i.next=16,Object(d.f)(j,a,t);case 16:u=i.sent,console.info(u);case 18:n(Object(l.i)(e,t)),n(Object(l.g)(e,t)),n(Object(l.h)(e,t));case 21:case"end":return i.stop()}}),r)})));return function(e){return a.apply(this,arguments)}}(),[t,n,x,c,j,e])}};n.a=function(e){var n=Object(s.b)(),t=Object(o.m)().account,c=Object(u.d)();return{onUnstake:Object(a.useCallback)(function(){var a=Object(r.a)(i.a.mark((function r(a){var o;return i.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Object(d.j)(c,e,a,t);case 2:o=i.sent,n(Object(l.a)(t)),console.info(o);case 5:case"end":return i.stop()}}),r)})));return function(e){return a.apply(this,arguments)}}(),[t,n,c,e])}}},785:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return xn}));var c,i,r,a,o,s,l,d,u,b=t(52),j=t(22),x=t(16),O=t(0),p=t.n(O),h=t(29),f=t(13),m=t.n(f),g=t(4),v=t(68),k=t(39),w=t(685),y=t(712),C=t.n(y),S=t(769),z=t.n(S),D=t(171),N=t(305),A=function(){return Object(O.useContext)(N.a)},I=t(667),F=t(94),B=t(17),E=t(686),P=t(177),M=t(677),T=g.e.div(c||(c=Object(b.a)(["\n  background: ",";\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.2), 0px 1px 1px rgba(25, 19, 38, 0.1);\n  border-radius: 32px;\n  display: flex;\n  color: ",";\n  box-shadow: ",";\n  flex-direction: column;\n  position: relative;\n"])),(function(e){return e.theme.card.background}),(function(e){var n=e.isFinished;return e.theme.colors[n?"textDisabled":"secondary"]}),(function(e){return e.isActive?"0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4);":"0px 2px 12px -8px rgba(25, 19, 38, 0.2), 0px 1px 1px rgba(25, 19, 38, 0.1)"})),W=g.e.div(i||(i=Object(b.a)(["\n  color: ",";\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 1.1;\n  margin-bottom: 14px;\n"])),(function(e){var n=e.isFinished;return e.theme.colors[n?"textDisabled":"text"]})),R=t(12),L=g.e.div(r||(r=Object(b.a)(["\n  color: ",";\n  font-size: 40px;\n  font-weight: 600;\n"])),(function(e){return e.theme.colors.text})),U=g.e.div(a||(a=Object(b.a)(["\n  color: ",";\n  font-size: 14px;\n  margin-bottom: 16px;\n"])),(function(e){return e.theme.colors.textSubtle})),q=g.e.div(o||(o=Object(b.a)(["\n  display: flex;\n  font-size: 14px;\n"]))),Y=g.e.div(s||(s=Object(b.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.text})),K=g.e.div(l||(l=Object(b.a)(["\n  border-top: 1px solid ",";\n  padding: 24px;\n"])),(function(e){return e.theme.isDark?"#ad8045":"#E9EAEB"})),_=function(){var e=Object(D.a)();return Object(R.jsxs)(T,{children:[Object(R.jsxs)("div",{style:{padding:"24px"},children:[Object(R.jsxs)(W,{children:[e(414,"Your Project?")," ",Object(R.jsx)("span",{role:"img","aria-label":"eyes",children:"\ud83d\udc40"})]}),Object(R.jsx)(k.p,{src:"https://github.com/octahedron22/img/raw/main/egg/wikiquestion.png",width:100,height:76,alt:"Your project here"}),Object(R.jsx)(L,{children:"???"}),Object(R.jsx)(U,{children:e(416,"Apply for a pool with your token")}),Object(R.jsx)(k.d,{variant:"secondary",as:"a",href:"https://docs.google.com/forms/d/1iN8mqgNDhUeqXt9ffKwpeeA6mgVEM6MsxhKMpkFhutI",external:!0,fullWidth:!0,mb:"16px",children:e(0,"--\x3e Apply Now --\x3e")}),Object(R.jsxs)(q,{children:[Object(R.jsxs)("div",{style:{flex:1},children:[e(736,"APR"),":"]}),Object(R.jsx)(Y,{children:"???"})]}),Object(R.jsxs)(q,{children:[Object(R.jsxs)("div",{style:{flex:1},children:[Object(R.jsx)("span",{role:"img","aria-label":"syrup",children:" "}),e(384,"Your Stake"),":"]}),Object(R.jsx)(Y,{children:"??? WIKI or sWIKI"})]})]}),Object(R.jsx)(K,{children:Object(R.jsx)(M.b,{})})]})},G=t(2),V=t.n(G),H=t(15),J=t(680),Q=g.e.div(d||(d=Object(b.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){var n=e.isFinished;return e.theme.colors[n?"textDisabled":"primary"]})),X=function(e){var n=e.text,t=e.isFinished,c=void 0!==t&&t;return Object(R.jsx)(Q,{isFinished:c,children:n})},Z=t(668),$=t(687),ee=t(678),ne=t(688),te=t(679),ce=t(681),ie=t.n(ce),re=Object(g.e)(k.B)(u||(u=Object(b.a)(["\n  color: ",";\n"])),(function(e){var n=e.isDisabled,t=e.color,c=e.theme;return n?c.colors.textDisabled:t})),ae=function(e){var n=e.value,t=e.fontSize,c=e.color,i=e.decimals,r=e.isDisabled,a=e.unit,o=Object(O.useRef)(0);return Object(O.useEffect)((function(){o.current=n}),[n]),Object(R.jsxs)(re,{bold:!0,color:c,fontSize:t,isDisabled:r,children:[Object(R.jsx)(ie.a,{start:o.current,end:n,decimals:i,duration:1,separator:","}),n&&a&&Object(R.jsx)("span",{children:a})]})};ae.defaultProps={fontSize:"32px",isDisabled:!1,color:"text",decimals:4};var oe,se,le,de,ue,be,je,xe,Oe,pe,he,fe,me,ge,ve,ke,we,ye,Ce,Se,ze,De,Ne=ae,Ae=t(671),Ie=t(674),Fe=function(e){var n=e.max,t=e.onConfirm,c=e.onDismiss,i=e.tokenName,r=void 0===i?"":i,a=Object(O.useState)(""),o=Object(j.a)(a,2),s=o[0],l=o[1],d=Object(O.useState)(!1),u=Object(j.a)(d,2),b=u[0],x=u[1],p=Object(D.a)(),h=Object(O.useMemo)((function(){return Object(I.b)(n)}),[n]),f=Object(O.useCallback)((function(e){l(e.currentTarget.value)}),[l]),m=Object(O.useCallback)((function(){l(h)}),[h,l]);return Object(R.jsxs)(k.v,{title:"".concat(p(316,"Deposit")," ").concat(r," Tokens"),onDismiss:c,children:[Object(R.jsx)(Ie.a,{value:s,onSelectMax:m,onChange:f,max:h,symbol:r}),Object(R.jsxs)(Ae.a,{children:[Object(R.jsx)(k.d,{fullWidth:!0,variant:"secondary",onClick:c,children:p(462,"Cancel")}),Object(R.jsx)(k.d,{fullWidth:!0,disabled:b,onClick:Object(H.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,t(s);case 3:x(!1),c();case 5:case"end":return e.stop()}}),e)}))),children:b?p(488,"Pending Confirmation"):p(464,"Confirm")})]})]})},Be=function(e){var n=e.onConfirm,t=e.onDismiss,c=e.max,i=e.tokenName,r=void 0===i?"":i,a=Object(O.useState)(""),o=Object(j.a)(a,2),s=o[0],l=o[1],d=Object(O.useState)(!1),u=Object(j.a)(d,2),b=u[0],x=u[1],p=Object(D.a)(),h=Object(O.useMemo)((function(){return Object(I.b)(c)}),[c]),f=Object(O.useCallback)((function(e){l(e.currentTarget.value)}),[l]),m=Object(O.useCallback)((function(){l(h)}),[h,l]);return Object(R.jsxs)(k.v,{title:"Withdraw ".concat(r),onDismiss:t,children:[Object(R.jsx)(Ie.a,{onSelectMax:m,onChange:f,value:s,max:h,symbol:r}),Object(R.jsxs)(Ae.a,{children:[Object(R.jsx)(k.d,{variant:"secondary",onClick:t,children:p(462,"Cancel")}),Object(R.jsx)(k.d,{disabled:b,onClick:Object(H.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,n(s);case 3:x(!1),t();case 5:case"end":return e.stop()}}),e)}))),children:b?p(488,"Pending Confirmation"):p(464,"Confirm")})]})]})},Ee=function(e){var n=e.earnings,t=e.onConfirm,c=e.onDismiss,i=e.tokenName,r=void 0===i?"":i,a=Object(O.useState)(!1),o=Object(j.a)(a,2),s=o[0],l=o[1],d=Object(D.a)(),u=Object(O.useMemo)((function(){return Object(I.b)(n)}),[n]);return Object(R.jsxs)(k.v,{title:"".concat(d(999,"Compound")," ").concat(d(330,"".concat(r," Earned"))),onDismiss:c,children:[Object(R.jsx)(Pe,{children:Object(R.jsx)(Ne,{value:Number(u)})}),Object(R.jsxs)(Ae.a,{children:[Object(R.jsx)(k.d,{fullWidth:!0,variant:"secondary",onClick:c,children:d(462,"Cancel")}),Object(R.jsx)(k.d,{id:"compound-cake",fullWidth:!0,disabled:s,onClick:Object(H.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,t(u);case 3:l(!1),c();case 5:case"end":return e.stop()}}),e)}))),children:s?d(488,"Pending Confirmation"):d(464,"Confirm")})]})]})},Pe=g.e.div(oe||(oe=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n"]))),Me=g.e.div(se||(se=Object(b.a)(["\n  color: #b07000;\n  font-size: 24px;\n  font-weight: 600;\n  text-transform: uppercase;\n"]))),Te=g.e.a(le||(le=Object(b.a)(["\n  color: #b07000;\n  font-size: 14px;\n"]))),We=function(e){var n=e.hasBalance;return void 0!==n&&n?Object(R.jsxs)("div",{children:[Object(R.jsx)(Me,{children:"Action Required"}),Object(R.jsx)(Te,{href:" https://pancakeswap.medium.com/urgent-action-required-changes-to-syrup-pools-70b98d7b2541",target:"_blank",children:"What do I need to do?"})]}):Object(R.jsx)("div",{children:Object(R.jsx)(W,{isFinished:!0,children:"FINISHED"})})},Re=t(71),Le=g.e.button(de||(de=Object(b.a)(["\n  align-items: center;\n  background: ",";\n  border: 0;\n  border-radius: 12px;\n  color: ",";\n  cursor: pointer;\n  display: flex;\n  font-size: ","px;\n  font-weight: 700;\n  height: ","px;\n  justify-content: center;\n  outline: none;\n  padding-left: ","px;\n  padding-right: ","px;\n  pointer-events: ",";\n  width: 100%;\n  border: 2px solid ",";\n  width: 100px;\n  height: 30px;\n  font-size: 14px;\n  padding: 0px;\n"])),(function(e){return e.disabled?"#ddd":e.theme.card.background}),(function(e){return e.disabled?"#acaaaf":"#e59202"}),(function(e){return e.fontSize}),(function(e){return e.size}),(function(e){return e.padding}),(function(e){return e.padding}),(function(e){return e.disabled?"none":void 0}),(function(e){return e.disabled?"#eee":"#e58302"})),Ue=Object(g.e)(Re.b)(ue||(ue=Object(b.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ","px;\n  padding: 0 ","px;\n  text-decoration: none;\n"])),(function(e){return-e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),qe=g.e.a(be||(be=Object(b.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ","px;\n  padding: 0 ","px;\n  text-decoration: none;\n"])),(function(e){return-e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),Ye=function(e){var n,t,c,i=e.children,r=e.disabled,a=e.href,o=e.onClick,s=e.size,l=e.text,d=e.to,u=Object(O.useContext)(g.a),b=u.colors,j=u.spacing,x=b.background;switch(s){case"sm":t=j[3],n=36,c=14;break;case"lg":t=j[4],n=72,c=16;break;case"md":default:t=j[4],n=56,c=16}var p=Object(O.useMemo)((function(){return d?Object(R.jsx)(Ue,{to:d,children:l}):a?Object(R.jsx)(qe,{href:a,target:"__blank",children:l}):l}),[a,l,d]);return Object(R.jsxs)(Le,{boxShadow:undefined,color:x,disabled:r,fontSize:c,onClick:o,padding:t,size:n,children:[i,p]})},Ke=t(30),_e=t(781),Ge=t(782),Ve=(je={},Object(Ke.a)(je,B.a.BINANCE,M.a),Object(Ke.a)(je,B.a.CORE,M.c),Object(Ke.a)(je,B.a.COMMUNITY,M.b),je),He=g.e.div(xe||(xe=Object(b.a)(["\n  border-top: 1px solid ",";\n  color: ",";\n  padding: 24px;\n"])),(function(e){return e.theme.isDark?"#ad8045":"#E9EAEB"}),(function(e){var n=e.isFinished;return e.theme.colors[n?"textDisabled2":"primary2"]})),Je=g.e.button(Oe||(Oe=Object(b.a)(["\n  align-items: center;\n  background-color: transparent;\n  border: 0;\n  color: ",";\n  cursor: pointer;\n  display: inline-flex;\n  font-size: 16px;\n  font-weight: 600;\n  height: 32px;\n  justify-content: center;\n  outline: 0;\n  padding: 0;\n  &:hover {\n    opacity: 0.9;\n  }\n\n  & > svg {\n    margin-left: 4px;\n  }\n"])),(function(e){return e.theme.colors.primary})),Qe=g.e.div(pe||(pe=Object(b.a)(["\n  margin-top: 24px;\n"]))),Xe=g.e.div(he||(he=Object(b.a)(["\n  align-items: center;\n  display: flex;\n"]))),Ze=g.e.div(fe||(fe=Object(b.a)(["\n  flex: 1;\n"]))),$e=g.e.div(me||(me=Object(b.a)(["\n  font-size: 14px;\n"]))),en=g.e.a(ge||(ge=Object(b.a)(["\n  font-size: 14px;\n  text-decoration: none;\n  color: #e59202;\n"]))),nn=function(e){var n=e.projectLink,t=e.totalStaked,c=e.blocksRemaining,i=e.isFinished,r=e.blocksUntilStart,a=e.poolCategory,o=Object(O.useState)(!1),s=Object(j.a)(o,2),l=s[0],d=s[1],u=Object(D.a)(),b=l?_e.a:Ge.a,x=Ve[a];return Object(R.jsxs)(He,{isFinished:i,children:[Object(R.jsxs)(Xe,{children:[Object(R.jsx)(Ze,{children:Object(R.jsx)(x,{})}),Object(R.jsxs)(Je,{onClick:function(){return d(!l)},children:[l?"Hide":"Details"," ",Object(R.jsx)(b,{})]})]}),l&&Object(R.jsxs)(Qe,{children:[Object(R.jsxs)(Xe,{style:{marginBottom:"4px"},children:[Object(R.jsx)(Ze,{children:Object(R.jsxs)($e,{children:[Object(R.jsxs)("span",{role:"img","aria-label":"syrup",children:["\ud83e\udd5e"," "]}),u(408,"Total")]})}),Object(R.jsx)(Ne,{fontSize:"14px",isDisabled:i,value:Object(I.a)(t)})]}),r>0&&Object(R.jsxs)(Xe,{children:[Object(R.jsx)(Ze,{children:Object(R.jsxs)($e,{children:[u(410,"Start"),":"]})}),Object(R.jsx)(Ne,{fontSize:"14px",isDisabled:i,value:r,decimals:0})]}),0===r&&c>0&&Object(R.jsxs)(Xe,{children:[Object(R.jsx)(Ze,{children:Object(R.jsxs)($e,{children:[u(410,"End"),":"]})}),Object(R.jsx)(Ne,{fontSize:"14px",isDisabled:i,value:c,decimals:0})]}),Object(R.jsx)(en,{href:n,target:"_blank",children:u(412,"View project site")})]})]})},tn=p.a.memo(nn),cn=g.e.div(ve||(ve=Object(b.a)(["\n  background-image: url('/images/pool-finished-sash.svg');\n  background-position: top right;\n  background-repeat: not-repeat;\n  height: 135px;\n  position: absolute;\n  right: -24px;\n  top: -24px;\n  width: 135px;\n"]))),rn=g.e.div(ke||(ke=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 16px 0;\n  width: 100%;\n  box-sizing: border-box;\n"]))),an=g.e.div(we||(we=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n"]))),on=g.e.div(ye||(ye=Object(b.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),sn=g.e.div(Ce||(Ce=Object(b.a)(["\n  display: flex;\n  font-size: 14px;\n"]))),ln=function(e){var n=e.pool,t=n.sousId,c=n.image,i=n.tokenName,r=n.stakingTokenName,a=n.stakingTokenAddress,o=n.projectLink,s=n.harvest,l=n.apy,d=n.tokenDecimals,u=n.poolCategory,b=n.totalStaked,x=n.startBlock,p=n.endBlock,h=n.isFinished,f=n.userData,g=n.stakingLimit,w=u===B.a.BINANCE,y=Object(D.a)(),C=Object(Z.b)(a),S=Object(v.m)().account,z=A(),N=Object($.b)(C,t).onApprove,F=Object(ee.b)(t,w).onStake,E=Object(ne.b)(t).onUnstake,P=Object(te.c)(t,w).onReward,M=Object(O.useState)(!1),L=Object(j.a)(M,2),U=L[0],q=L[1],Y=Object(O.useState)(!1),K=Object(j.a)(Y,2),_=K[0],G=K[1],Q=new m.a((null===f||void 0===f?void 0:f.allowance)||0),ce=new m.a((null===f||void 0===f?void 0:f.stakingTokenBalance)||0),ie=new m.a((null===f||void 0===f?void 0:f.stakedBalance)||0),re=new m.a((null===f||void 0===f?void 0:f.pendingReward)||0),ae=Math.max(x-z,0),oe=Math.max(p-z,0),se=r===B.b.SYRUP,le=(null===ie||void 0===ie?void 0:ie.toNumber())>0,de=!le&&!Q.toNumber()&&!w,ue=h&&le,be=new m.a(g).multipliedBy(new m.a(10).pow(d)),je=Object(k.G)(Object(R.jsx)(Fe,{max:g&&ce.isGreaterThan(be)?be:ce,onConfirm:F,tokenName:g?"".concat(r," (").concat(g," max)"):r})),xe=Object(j.a)(je,1)[0],Oe=Object(k.G)(Object(R.jsx)(Ee,{earnings:re,onConfirm:F,tokenName:r})),pe=Object(j.a)(Oe,1)[0],he=Object(k.G)(Object(R.jsx)(Be,{max:ie,onConfirm:E,tokenName:r})),fe=Object(j.a)(he,1)[0],me=Object(O.useCallback)(Object(H.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,q(!0),e.next=4,N();case 4:e.sent||q(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[N,q]);return Object(R.jsxs)(T,{isActive:ue,isFinished:h&&0!==t,children:[h&&0!==t&&Object(R.jsx)(cn,{}),Object(R.jsxs)("div",{style:{padding:"24px"},children:[Object(R.jsxs)(W,{isFinished:h&&0!==t,children:[se&&"[OLD]"," ",i," ",y(348,"Pool")]}),Object(R.jsxs)("div",{style:{marginBottom:"8px",display:"flex",alignItems:"center"},children:[Object(R.jsx)("div",{style:{flex:1},children:Object(R.jsx)(k.p,{src:"/images/tokens/".concat(c||i,".png"),width:64,height:64,alt:i})}),S&&s&&!se&&Object(R.jsx)(Ye,{disabled:!re.toNumber()||_,text:_?"Collecting":"Harvest",onClick:Object(H.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G(!0),e.next=3,P();case 3:G(!1);case 4:case"end":return e.stop()}}),e)})))})]}),se?Object(R.jsx)(We,{hasBalance:le}):Object(R.jsxs)(an,{children:[Object(R.jsx)(Ne,{value:Object(I.a)(re,d),isDisabled:h}),0===t&&S&&s&&Object(R.jsx)(Ye,{disabled:!re.toNumber()||_,text:y(999,_?"Compounding":"Compound"),onClick:pe})]}),Object(R.jsx)(X,{isFinished:h&&0!==t,text:y(330,"".concat(i," earned"))}),Object(R.jsxs)(rn,{children:[!S&&Object(R.jsx)(J.a,{}),S&&(de&&!se?Object(R.jsx)("div",{style:{flex:1},children:Object(R.jsx)(k.d,{disabled:h||U,onClick:me,fullWidth:!0,children:"Approve ".concat(r)})}):Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(k.d,{disabled:ie.eq(new m.a(0))||_,onClick:se?Object(H.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G(!0),e.next=3,E("0");case 3:G(!1);case 4:case"end":return e.stop()}}),e)}))):fe,children:"Unstake ".concat(r)}),Object(R.jsx)(on,{}),!se&&Object(R.jsx)(k.o,{disabled:h&&0!==t,onClick:xe,children:Object(R.jsx)(k.a,{color:"background"})})]}))]}),Object(R.jsxs)(sn,{children:[Object(R.jsxs)("div",{style:{flex:1},children:[y(736,"APR"),":"]}),h||se||!l||(null===l||void 0===l?void 0:l.isNaN())||!(null===l||void 0===l?void 0:l.isFinite())?"-":Object(R.jsx)(Ne,{fontSize:"14px",isDisabled:h,value:null===l||void 0===l?void 0:l.toNumber(),decimals:2,unit:"%"})]}),Object(R.jsxs)(sn,{children:[Object(R.jsxs)("div",{style:{flex:1},children:[Object(R.jsxs)("span",{role:"img","aria-label":r,children:["\ud83e\udd5e"," "]}),y(384,"Your Stake"),":"]}),Object(R.jsx)(Ne,{fontSize:"14px",isDisabled:h,value:Object(I.a)(ie)})]})]}),Object(R.jsx)(tn,{projectLink:o,totalStaked:b,blocksRemaining:oe,isFinished:h,blocksUntilStart:ae,poolCategory:u})]})},dn=function(){var e=Object(h.g)(),n=e.url,t=e.isExact,c=Object(D.a)();return Object(R.jsx)(un,{children:Object(R.jsxs)(k.e,{activeIndex:t?0:1,size:"sm",variant:"subtle",children:[Object(R.jsx)(k.f,{as:Re.b,to:"".concat(n),children:c(999,"Active")}),Object(R.jsx)(k.f,{as:Re.b,to:"".concat(n,"/history"),children:c(999,"Inactive")})]})})},un=g.e.div(Se||(Se=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"]))),bn=g.e.div(ze||(ze=Object(b.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n"])),(function(e){return e.theme.colors.textSubtle})),jn=g.e.div(De||(De=Object(b.a)(["\n  align-items: center;\n  color: ",";\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: 1fr;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 250px;\n  padding: 48px 0;\n  ul {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    font-size: 16px;\n    li {\n      margin-bottom: 4px;\n    }\n  }\n  img {\n    height: auto;\n    max-width: 100%;\n  }\n  @media (min-width: 576px) {\n    grid-template-columns: 1fr 1fr;\n    margin: 0;\n    max-width: none;\n  }\n"])),(function(e){return e.theme.colors.primary})),xn=function(){var e=Object(h.g)().path,n=Object(D.a)(),t=Object(v.m)().account,c=Object(F.c)(),i=Object(F.e)(t),r=Object(F.f)(),a=A(),o=i.map((function(e){var n=e.poolCategory===B.a.BINANCE,t=c.find((function(n){return n.tokenSymbol===e.tokenName})),i=c.find((function(n){return n.tokenSymbol===e.stakingTokenName})),o=n?new m.a(1):new m.a(null===i||void 0===i?void 0:i.tokenPriceVsQuote),s=function(e,n,t){var c=new m.a(n);return"BNB"===e?new m.a(1):n&&t===B.b.BUSD?c.div(r):c}(e.tokenName,null===t||void 0===t?void 0:t.tokenPriceVsQuote,null===t||void 0===t?void 0:t.quoteTokenSymbol).times(e.tokenPerBlock).times(w.a),l=o.times(Object(I.a)(e.totalStaked)),d=s.div(l).times(100);return Object(x.a)(Object(x.a)({},e),{},{isFinished:0!==e.sousId&&(e.isFinished||a>e.endBlock),apy:d})})),s=z()(o,(function(e){return e.isFinished})),l=Object(j.a)(s,2),d=l[0],u=l[1];return Object(R.jsxs)(P.a,{children:[Object(R.jsxs)(jn,{children:[Object(R.jsxs)("div",{children:[Object(R.jsx)(k.n,{as:"h1",size:"xxl",mb:"16px",children:n(0,"SuperWIKI POWER    (soon more...)")}),Object(R.jsxs)("ul",{children:[Object(R.jsx)("li",{children:n(0,"Stake Tokens to earn new tokens.")}),Object(R.jsx)("li",{children:n(0,"You can unstake at any time.")}),Object(R.jsx)("li",{children:n(0,"Rewards are calculated per block.")})]})]}),Object(R.jsx)("img",{src:"https://github.com/octahedron22/img/raw/main/egg/sWIKI-big.png",alt:"POOL icon",width:410,height:191})]}),Object(R.jsx)(dn,{}),Object(R.jsx)(bn,{}),Object(R.jsxs)(E.a,{children:[Object(R.jsx)(h.a,{exact:!0,path:"".concat(e),children:Object(R.jsxs)(R.Fragment,{children:[C()(u,["sortOrder"]).map((function(e){return Object(R.jsx)(ln,{pool:e},e.sousId)})),Object(R.jsx)(_,{})]})}),Object(R.jsx)(h.a,{path:"".concat(e,"/history"),children:C()(d,["sortOrder"]).map((function(e){return Object(R.jsx)(ln,{pool:e},e.sousId)}))})]})]})}}}]);
//# sourceMappingURL=9.118d578e.chunk.js.map