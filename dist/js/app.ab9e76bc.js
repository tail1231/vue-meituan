(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},i=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"028d":function(t,e,a){"use strict";var s=a("8821"),n=a.n(s);n.a},"07eb":function(t,e,a){"use strict";var s=a("eaeb"),n=a.n(s);n.a},"0f32":function(t,e,a){},"1a33":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list-container"},[a("ul",{staticClass:"order"},t._l(t.orders,(function(e,s){return a("li",{key:s,on:{click:function(a){return t.listOrder(e.id)}}},[a("span",[t._v(t._s(e.text))]),a("span",{staticClass:"arrow"})])})),0),t._l(t.detailList,(function(t,e){return a("Product",{key:e,attrs:{data:t}})})),a("div",{directives:[{name:"show",rawName:"v-show",value:t.flag,expression:"flag"}],staticClass:"load-more",on:{click:t.loadHandle}},[a("span",[t._v("查看其它"+t._s(t.others.length)+"条团购信息")]),t._m(0)])],2)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"arrow"},[a("span",{staticClass:"arrow-white"})])}],i=(a("386d"),a("55dd"),a("bc3a")),r=a.n(i),o=a("be6f"),c={data:function(){return{orders:[{text:"价格排序",id:"price"},{text:"销量排序",id:"sales"},{text:"好评排序",id:"evaluate"},{text:"优惠排序",id:"discount"}],list:[],others:[],flag:!0}},created:function(){var t=this;r()({method:"get",url:"/data/list.json?id="+this.$route.params.id}).then((function(e){t.list=e.data.slice(0,3),t.others=e.data.slice(3)}))},components:{Product:o["a"]},methods:{loadHandle:function(){this.list=this.list.concat(this.others),this.flag=!this.flag},listOrder:function(t){"discount"!==t?this.list.sort((function(e,a){return a[t]-e[t]})):this.list.sort((function(t,e){return e.originPrice-e.price-(t.originPrice-t.price)}))}},computed:{detailList:function(){var t=this;return this.list.filter((function(e){return e.title.toUpperCase().indexOf(t.$store.state.search.toUpperCase())>=0}))}}},l=c,u=(a("abcb"),a("2877")),d=Object(u["a"])(l,s,n,!1,null,null,null);e["default"]=d.exports},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t._m(0),a("div",{staticClass:"search"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],attrs:{type:"text",placeholder:"请输入搜索关键字"},domProps:{value:t.msg},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.showSearchResult(e)},input:function(e){e.target.composing||(t.msg=e.target.value)}}})]),a("router-view")],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"go-back"},[a("span",{staticClass:"arrow"},[a("span",{staticClass:"arrow green"})])]),a("h1",[t._v("vue团购")]),a("div",{staticClass:"login"},[t._v("登录")])])}],r={data:function(){return{msg:""}},methods:{showSearchResult:function(){this.$store.commit("updateSearch",this.msg),this.msg=""}}},o=r,c=(a("5c0b"),a("2877")),l=Object(c["a"])(o,n,i,!1,null,null,null),u=l.exports,d=a("8c4f");a("bb51"),a("1a33"),a("c84b");s["a"].use(d["a"]);var p=[{path:"/",component:function(){return Promise.resolve().then(a.bind(null,"bb51"))}},{path:"/list/:id",component:function(){return Promise.resolve().then(a.bind(null,"1a33"))}},{path:"/detail/:id",component:function(){return Promise.resolve().then(a.bind(null,"c84b"))}}],f=new d["a"]({routes:p}),v=f,h=a("2f62");s["a"].use(h["a"]);var m=new h["a"].Store({state:{search:""},mutations:{updateSearch:function(t,e){t.search=e}},actions:{}}),g=a("9483");Object(g["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),s["a"].config.productionTip=!1,new s["a"]({router:v,store:m,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("e332"),n=a.n(s);n.a},8821:function(t,e,a){},abcb:function(t,e,a){"use strict";var s=a("0f32"),n=a.n(s);n.a},bb51:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-container"},[a("ul",{staticClass:"home-types clearfix"},t._l(t.types,(function(e,s){return a("router-link",{key:s,attrs:{tag:"li",to:"/list/"+e.id}},[a("img",{attrs:{src:"/images/icon/"+e.img,alt:""}}),a("p",[t._v(t._s(e.text))])])})),1),a("ul",{staticClass:"ad"},t._l(t.ad,(function(e,s){return a("router-link",{key:s,attrs:{tag:"li",to:"/ad/"+e.id}},[a("h3",[t._v(t._s(e.title))]),a("p",[t._v(t._s(e.description))]),a("img",{attrs:{src:"/images/ad/"+e.url,alt:""}})])})),1),a("div",{staticClass:"home-list"},[a("h2",{staticClass:"guess-title"},[t._v("猜你喜欢")]),t._l(t.list,(function(t,e){return a("Product",{key:e,attrs:{data:t}})}))],2)])},n=[],i=a("bc3a"),r=a.n(i),o=a("be6f"),c={name:"home",data:function(){return{types:[{text:"美食",id:"1",img:"01.png"},{text:"电影",id:"2",img:"02.png"},{text:"酒店",id:"3",img:"03.png"},{text:"休闲",id:"4",img:"04.png"},{text:"外卖",id:"5",img:"05.png"},{text:"KTV",id:"6",img:"06.png"},{text:"周边游",id:"7",img:"07.png"},{text:"丽人",id:"8",img:"08.png"},{text:"小吃",id:"9",img:"09.png"},{text:"火车票",id:"10",img:"10.png"}],ad:[],list:[]}},components:{Product:o["a"]},created:function(){var t=this;r()({method:"get",url:"/data/home.json"}).then((function(e){t.ad=e.data.ad,t.list=e.data.list}))}},l=c,u=(a("07eb"),a("2877")),d=Object(u["a"])(l,s,n,!1,null,"55e792da",null);e["default"]=d.exports},be6f:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product"},[a("router-link",{staticClass:"product-item",attrs:{tag:"div",to:"/detail/"+t.data.id}},[a("img",{attrs:{src:"/images/list/"+t.data.img,alt:""}}),a("div",{staticClass:"content"},[a("h2",[t._v(t._s(t.data.title))]),a("p",[a("span",{staticClass:"price"},[t._v(t._s(t.data.price)+"元")]),a("span",{staticClass:"origin-price"},[t._v("门市价"+t._s(t.data.originPrice)+"元")]),a("span",{staticClass:"sales"},[t._v("销量"+t._s(t.data.sales))])])])])],1)},n=[],i={props:["data"]},r=i,o=(a("fea5"),a("2877")),c=Object(o["a"])(r,s,n,!1,null,"cfb5505a",null);e["a"]=c.exports},c84b:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail-container"},[a("div",{staticClass:"img-part"},[a("img",{attrs:{src:"/images/item/"+t.data.src}}),a("h1",[t._v(t._s(t.data.title))]),a("p",[t._v(t._s(t.data.description))])]),a("div",{staticClass:"price-part"},[a("span",{staticClass:"price"},[t._v("\n            "+t._s(t.data.price)+"\n            "),a("em",[t._v("元")])]),a("span",{staticClass:"old-price"},[t._v("门市价"+t._s(t.data.originPrice)+"元")]),a("button",[t._v("立即购买")])]),a("div",{staticClass:"sales-part"},[a("span",{staticClass:"liji"},[t._v("支持立即退货")]),a("span",{staticClass:"suishi"},[t._v("支持随时退货")]),a("p",[t._v("销量"+t._s(t.data.sales))])]),a("div",{staticClass:"shop-part"},[a("h1",[t._v("店家信息")]),a("div",{staticClass:"shop-info"},[a("p",[t._v(t._s(t.data.storeName))]),a("p",[t._v(t._s(t.data.storeAddress))])]),a("span",[t._v("查看"+t._s(t.data.storeNum)+"家分店")])]),a("div",{staticClass:"buy-part"},[a("h1",{staticClass:"title"},[t._v("购买须知")]),a("div",{staticClass:"content"},[a("div",{staticClass:"effective-date"},[a("h1",[t._v("有效日期")]),a("p",[t._v(t._s(t.data.validateTime))])]),a("div",{staticClass:"use-date"},[a("h1",[t._v("使用日期")]),a("p",[t._v(t._s(t.data.useTime))])]),a("div",{staticClass:"use-rules"},[a("h1",[t._v("使用规则")]),a("ul",t._l(t.data.rules,(function(e,s){return a("li",{key:s},[a("p",[t._v(t._s(e))])])})),0)])])])])},n=[],i=a("bc3a"),r=a.n(i),o={data:function(){return{data:{}}},methods:{updataData:function(){var t=this,e=this.$route.params;r()({method:"get",url:"/data/product.json",params:{params:e}}).then((function(e){t.data=e.data}))}},created:function(){this.updataData()},watch:{$route:function(){console.log(111,arguments)}}},c=o,l=(a("028d"),a("2877")),u=Object(l["a"])(c,s,n,!1,null,"4367698e",null);e["default"]=u.exports},cb50:function(t,e,a){},e332:function(t,e,a){},eaeb:function(t,e,a){},fea5:function(t,e,a){"use strict";var s=a("cb50"),n=a.n(s);n.a}});
//# sourceMappingURL=app.ab9e76bc.js.map