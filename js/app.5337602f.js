(function(t){function e(e){for(var a,r,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)r=s[l],o[r]&&f.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-0be97df1":"9aa1fe12","chunk-2d0df1ba":"dd9421ad","chunk-2d0f1570":"a0f68835","chunk-7d169e52":"5063cdf4"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-0be97df1":1,"chunk-7d169e52":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-0be97df1":"a6e3a159","chunk-2d0df1ba":"31d6cfe0","chunk-2d0f1570":"31d6cfe0","chunk-7d169e52":"6e018748"}[t]+".css",r=c.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var s=o[i],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===a||u===r))return e()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){s=l[i],u=s.getAttribute("data-href");if(u===a||u===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.request=a,n(o)},f.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(f)}).then(function(){r[t]=0}));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise(function(e,n){a=o[t]=[e,n]});e.push(a[2]=i);var u,l=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=s(t),u=function(e){f.onerror=f.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");i.type=a,i.request=r,n[1](i)}o[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:f})},12e4);f.onerror=f.onload=u,l.appendChild(f)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/navigation/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("ec8c"),r=n.n(a);r.a},"23d6":function(t,e,n){"use strict";var a=n("f86c"),r=n.n(a);r.a},"3da7":function(t,e,n){"use strict";n.d(e,"c",function(){return o}),n.d(e,"b",function(){return i}),n.d(e,"a",function(){return s}),n.d(e,"d",function(){return c});n("5a09"),n("aba3");var a=n("504b"),r=(n("bc72"),n("329b")),o=function(t,e){if(void 0===e){var n=sessionStorage.getItem(t);return n&&0===n.indexOf("autostringify-")?JSON.parse(n.split("autostringify-")[1]):n}return("object"===Object(a["a"])(e)||Array.isArray(e))&&(e="autostringify-"+JSON.stringify(e)),sessionStorage.setItem(t,e)},i=function t(e){if(!e)return e;var n=e instanceof Array?[]:{};for(var r in e)n[r]="object"===Object(a["a"])(e[r])?t(e[r]):e[r];return n},s=function(t){if(t.response)switch(t.response.status){case 400:window.globalThis.$createToast({type:"error",txt:t.response.data.message||"请求参数异常",time:1e3}).show();break;case 401:sessionStorage.removeItem("user"),window.globalThis.$createToast({type:"error",txt:t.response.data.message||"密码错误或账号不存在！",time:1e3}).show();break;case 403:window.globalThis.$createToast({type:"error",txt:t.response.data.message||"无访问权限，请联系企业管理员",time:1e3}).show();break;default:window.globalThis.$createToast({type:"error",txt:t.response.data.message||"服务端异常，请联系技术支持",time:1e3}).show()}else t.message&&window.globalThis.$createToast({type:"error",txt:t.message,time:1e3}).show();return Promise.reject(t)},c=(new r["a"],function(t,e,n){var a=null,r=new Date;return function(){var o=this,i=arguments,s=new Date;clearTimeout(a),s-r>=n?(t.apply(o,i),r=s):a=setTimeout(function(){t.apply(o,i)},e)}})},"56d7":function(t,e,n){"use strict";n.r(e);n("cf54"),n("3a0f"),n("a3a3"),n("4d0b");var a=n("329b"),r=n("b445"),o=n.n(r),i=(n("9607"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:t.transitionName}},[n("keep-alive",{attrs:{include:["首页"]}},[n("router-view",{staticClass:"child-view"})],1)],1)],1)}),s=[],c=(n("bc72"),n("3da7")),u=n("7f43"),l=n.n(u),f=n("0e4f"),d=n.n(f),h="/",p=l.a.create({baseURL:h,timeout:1e4,headers:{"Content-Type":"application/x-www-form-urlencoded"}});p.interceptors.request.use(function(t){return t.data&&(t.data=d.a.stringify(t.data)),t},function(t){return Promise.reject(t)}),p.interceptors.response.use(function(t){return t.data?t:c["a"]({message:t.data.statusCode||"接口请求失败"})},c["a"]);var v=p,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("compass"),n("div",{staticClass:"sideGroup"},[n("div",{staticClass:"_group"},[n("button",{staticClass:"_trigger",attrs:{type:"button"},on:{click:function(e){t.setScale(-1)}}},[n("i",{staticClass:"cubeic-remove"})]),n("button",{staticClass:"_trigger",attrs:{type:"button"},on:{click:function(e){t.setScale(1)}}},[n("i",{staticClass:"cubeic-add"})])])]),n("div",{staticClass:"view"},[n("div",{staticClass:"mapCont",attrs:{id:"mapCont"}},[n("div",{staticClass:"layer"},[n("svg",{attrs:{width:"1000",height:"1000",xmlns:"http://www.w3.org/2000/svg"}},[t.pathResult?n("polyline",{staticClass:"resultPath",attrs:{points:t.pathResult.map(function(t){return t.x+","+t.y}).join(" ")}}):t._e()])]),n("div",{staticClass:"layer"},[n("svg",{attrs:{width:"1000",height:"1000",xmlns:"http://www.w3.org/2000/svg",id:"svgElements"},on:{click:function(e){return e.target!==e.currentTarget?null:t.resetSvg(e)}}},[t._l(t.polygons,function(e,a){return[n("polygon",{key:"polygon"+a,class:{isBlock:e.block,svgArea:!0},style:e.type,attrs:{points:e.points,"data-x":e.attrDataX,"data-y":e.attrDataY,title:e.attrTitle},on:{click:function(n){t.clickElement(n,e)}}})]})],2)]),n("div",{staticClass:"layer mapFloat"},[t._l(t.polygons,function(e,a){return e.block?t._e():[n("span",{key:"float"+a,staticClass:"_title",style:{left:e.attrDataX+"px",top:e.attrDataY+"px"}},[t._v(t._s(e.attrTitle))])]})],2)])]),n("cube-popup",{ref:"navStep1Box",attrs:{type:"nav-step-1",mask:!1,position:"bottom"}},[n("div",{staticClass:"cube-extend-popup-content"},[t._t("default",[t.currentPolygon?n("div",{staticClass:"extend-info"},[n("h3",[t._v(t._s(t.currentPolygon.attrTitle))]),n("p",[t._v(t._s(t.currentPolygon.desc))])]):t._e(),n("div",{staticClass:"flex-row",staticStyle:{border:"1px solid #eee"}},[n("div",{staticClass:"flex-1"},[n("cube-button",{attrs:{icon:"cubeic-back",light:!0},on:{click:function(e){t.naveSections.start=t.currentPolygon,t.navStep2()}}},[t._v("从这里出发")])],1),n("div",{staticClass:"flex-1"},[n("cube-button",{attrs:{icon:"cubeic-arrow",light:!0},on:{click:function(e){t.naveSections.end=t.currentPolygon,t.navStep2()}}},[t._v("到这里去")])],1)])])],2)]),n("cube-popup",{ref:"navStep2Box",attrs:{type:"nav-step-2",mask:!1,position:"bottom"}},[n("div",{staticClass:"cube-extend-popup-content"},[t._t("default",[n("div",{staticClass:"extend-info"},[n("div",{staticClass:"flex-row align-center m"},[t._v("\n            起点：\n            "),n("div",{staticClass:"flex-1"},[t._v("\n              "+t._s(t.naveSections.start?t.naveSections.start.attrTitle:"继续拾取起点")+"\n            ")])]),n("div",{staticClass:"flex-row align-center m"},[t._v("\n            终点：\n            "),n("div",{staticClass:"flex-1"},[t._v("\n              "+t._s(t.naveSections.end?t.naveSections.end.attrTitle:"继续拾取终点")+"\n            ")])])]),n("cube-button",{attrs:{primary:!0,disabled:!t.naveSections.start||!t.naveSections.end},on:{click:t.search}},[t._v("开始导航")])])],2)]),n("cube-popup",{ref:"navStep3Box",attrs:{type:"nav-step-3",mask:!1,position:"bottom"}},[n("div",{staticClass:"cube-extend-popup-content"},[t._t("default",[t._l(t.navResult,function(e,a){return n("div",{key:"navResult"+a,staticClass:"nav-item extend-info"},[t._v(t._s(e))])}),n("cube-button",{attrs:{primary:!0},on:{click:function(e){t.hidePopInfo(),t.resetNav()}}},[t._v("关闭")])])],2)])],1)},m=[],y=(n("25d7"),n("dccb"),n("63af"),n("20a2"),10),b=1,x=function(t,e){return parseInt(Math.sqrt((t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y))*b*10)/10},w=function(t){for(var e=0,n=0;n<t.length-1;n++){var a=x(t[n],t[n+1]);e+=a}return parseInt(10*e)/10},k=function(t,e){for(var n=[],a=0;a<t.length-1;a++){var r=t[a],o=t[a+1],i=x(r,o)+"米 ",s="",c=o.info?"到达 "+o.info.attrTitle:"",u="";if(a>0){var l=t[a-1],f=(o.y-r.y)/(o.x-r.x),d=(o.y-l.y)/(o.x-l.x),h=(f-d)/(1+d*f),p=180*Math.atan(h)/Math.PI;u=p>0?"右转"+Math.abs(parseInt(p))+"度 ":"左转"+Math.abs(parseInt(p))+"度 "}o.x-r.x>y?s=o.y-r.y>y?"向东南方向直行":r.y-o.y>y?"向东北方向直行":"向东直行":r.x-o.x>y?s=o.y-r.y>y?"向西南方向直行":r.y-o.y>y?"向西北方向直行":"向西直行":o.y-r.y>y?s="向南直行":r.y-o.y>y?s="向北直行":console.warn("误差内的无效移动"),n.push(u+s+i+c)}n.push("到达目的地"),"function"===typeof e&&e(n)},S=function(t,e){return t&&e&&t.x===e.x&&t.y===e.y},_=function(t,e){var n=[];return 0===e?n.push(t):e===t.length-1?n.push(t.reverse()):(n.push(t.slice(0,e+1).reverse()),n.push(t.slice(e))),n},T=function(t,e){for(var n=!1,a=0;a<e.length;a++)if(S(e[a],t)){n=!0;break}return n},C=[],P=[],A=function t(e,n,a,r,o){null===E&&(E=a),Array.isArray(r)||(r=[]);for(var i=function(i){for(var s=[].concat(r),c=e[i],u=[],l=0;l<c.length;l++){var f=c[l],d=T(f,s);if(d){s.slice(0,-l);break}if(s.push(f),f.connect&&(S(n,f)||S(f,o)||u.push(l)),S(f,n)){var h=[].concat(s);O&&(h=h.reverse()),C.push(h);break}}u.length&&u.forEach(function(e){var o=c[e],i=r.concat(c.slice(0,e)),s=I(o,a);s.forEach(function(e){t(e.roads,n,e.roadDataIndex,i,o)})})},s=0;s<e.length;s++)i(s)};function I(t,e){var n=[],a=[].concat(e);return Array.isArray(E)&&(a=a.concat(E)),P.forEach(function(e,r){if(!a.includes(r))for(var o=0;o<e.length;o++){var i=e[o];if(S(i,t)){n.push({roads:_(e,o),roadDataIndex:[r]});break}}}),n}var $=function(t){if(!C.length)return t(),console.warn("寻路失败");console.log("可选路径",C);var e=[];C.forEach(function(t){e.push(w(t))});for(var n,a=Math.min.apply(Math,e),r=0;r<e.length;r++)if(e[r]===a){n=r;break}"function"===typeof t&&t(c["b"](C[n])),C.length=0},E=null,O=!1,j=function(t,e,n,a){console.log(JSON.stringify(e),JSON.stringify(n)),P=t;for(var r=0;r<P.length;r++){for(var o=P[r],i=!1,s=0;s<o.length;s++){var c=o[s];if(S(c,e)){A(_(o,s),n,[r]),i=!0;break}if(S(c,n)){O=!0,A(_(o,s),e,[r]),i=!0;break}}if(i)break}$(a)},B={components:{compass:function(t){return n.e("chunk-7d169e52").then(function(){var e=[n("1241")];t.apply(null,e)}.bind(this)).catch(n.oe)}},data:function(){return{mainDom:null,buildingSVG:null,currentPolygon:null,polygons:[],pathData:[],pathResult:null,scaleQeueu:[],scaleIndex:2,naveSections:{start:null,end:null},navResult:[]}},methods:{resetNav:function(){this.pathResult=[],this.navResult=[],this.naveSections.start=null,this.naveSections.end=null},navStep2:function(){var t=this;this.hidePopInfo(),this.$nextTick(function(){t.$refs.navStep2Box.show()})},hidePopInfo:function(){this.$refs.navStep1Box.hide(),this.$refs.navStep2Box.hide(),this.$refs.navStep3Box.hide()},clickElement:function(t,e){var n=this;this.resetSvg(),t.target.classList.add("active"),this.currentPolygon=e,this.naveSections.start?(this.naveSections.end=e,this.$nextTick(function(){n.$refs.navStep2Box.show()})):this.naveSections.end?(this.naveSections.start=e,this.$nextTick(function(){n.$refs.navStep2Box.show()})):this.$refs.navStep1Box.show()},resetSvg:function(){if(this.hidePopInfo(),this.navResult.length&&this.resetNav(),this.currentPolygon=null,this.buildingSVG){var t=this.buildingSVG.querySelectorAll("polygon.active");t.forEach(function(t){t.classList.remove("active")})}},fetchData:function(){var t=this;Promise.all([v.get("map.json"),v.get("path.json")]).then(function(e){t.polygons=e[0].data,t.pathData=e[1].data})},search:function(){var t=this,e=this.naveSections.start.connectPoint,n=this.naveSections.end.connectPoint;if(!n||!e||!e.x||!n.x)return console.warn("参数错误");j(this.pathData,e,n,function(e){console.log(e),Array.isArray(e)?(t.pathResult=e,t.hidePopInfo(),k(e,function(e){t.navResult=e,t.$refs.navStep3Box.show()})):(t.resetSvg(),t.$createToast({txt:"搜索失败",type:"error",time:1e3}))})},setScale:function(t){this.mainDom&&(t>0?this.scaleIndex<this.scaleQeueu.length-1&&this.scaleIndex++:t<0&&this.scaleIndex>0&&this.scaleIndex--,this.mainDom.style.transform="scale("+this.scaleQeueu[this.scaleIndex]+")")}},created:function(){this.fetchData()},mounted:function(){this.mainDom=document.getElementById("mapCont"),this.buildingSVG=document.getElementById("svgElements");var t=window.innerWidth,e=t/1e3,n=parseInt((1e3-t)/4),a=[e,(t+n)/1e3,(t+2*n)/1e3,(t+3*n)/1e3,1];this.scaleQeueu=a,this.scaleIndex=2,this.setScale(0)}},D=B,R=(n("23d6"),n("048f")),N=Object(R["a"])(D,g,m,!1,null,"4a7839db",null);N.options.__file="index.vue";var M=N.exports,L=[{path:"/",name:"商场导航",component:M},{path:"/blank",name:"空白",component:function(t){return n.e("chunk-0be97df1").then(function(){var e=[n("cf71")];t.apply(null,e)}.bind(this)).catch(n.oe)}}],J=[],q=[],F=[],G={data:function(){return{transitionName:""}},watch:{$route:function(t,e){var n=this.isForward(t,e);n.split?this.transitionName=n:this.transitionName=n?"slide-left":"slide-right"}},methods:{isForward:function(t,e){var n=!0;return n=F.length?this.isForwardByArray(t,e):"home",n&&F.push(t.fullPath),c["c"]("HISTORY_ARRAY_STACK_LOCAL_KEY",F),t.name&&-1!==J.indexOf(t.name)?n=!1:t.name&&-1!==q.indexOf(t.name)&&(n=!0),n},isForwardByArray:function(t,e){var n=F.indexOf(t.fullPath);return-1===n||(F.length=n+1,!1)},signin:function(t){if(!t)return console.warn("未登录！");v.defaults.headers.common["Authorization"]=t,this.$router.addRoutes(L.concat([{path:"*",redirect:"/404"}]))},getUserToken:function(t){var e=this;t?(e.$root.token=t,e.signin(t)):console.warn("缺少参数")}},created:function(){this.$root.token||this.getUserToken("b9cdf44483f0c7e0abd51d90109d5dd1")}},Y=G,Q=(n("034f"),Object(R["a"])(Y,i,s,!1,null,null,null));Q.options.__file="App.vue";var V=Q.exports,z=n("b8e5");a["a"].use(z["a"]);var U=new z["a"]({routes:[{path:"/401",name:"无权访问",component:function(t){return n.e("chunk-2d0df1ba").then(function(){var e=[n("8903")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/404",name:"找不到页面",component:function(t){return n.e("chunk-2d0f1570").then(function(){var e=[n("9fe2")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]});a["a"].use(o.a),a["a"].config.productionTip=!1,U.beforeEach(function(t,e,n){t.name&&(document.title=t.name+" - 觅迹"),n()}),window.globalThis=new a["a"]({el:"#app",data:function(){return{loading:this.$createToast({txt:"Loading...",time:1e4,mask:!0}),token:null,uploadAction:{target:"".concat(h,"/index.php/api/file/upload"),headers:{Authorization:null}}}},watch:{token:function(t){t&&(this.uploadAction.headers.Authorization=t)}},router:U,render:function(t){return t(V)}}),a["a"].config.errorHandler=function(t,e,n){console.warn(t,n)}},ec8c:function(t,e,n){},f86c:function(t,e,n){}});
//# sourceMappingURL=app.5337602f.js.map