(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Checkout"],{"0e48":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"max-1600"},[a("div",{staticClass:"m-cartSpace"},[a("CartStep",{attrs:{hasClass:!1}}),a("div",{staticClass:"m-list list-check"},[t._m(0),t._l(t.cart,(function(s,i){return a("div",{key:i},[a("hr"),a("div",{staticClass:"list-check_item"},[a("div",{staticClass:"name"},[t._v(t._s(s.name))]),a("div",{staticClass:"count"},[t._v(t._s(s.quantity))]),a("div",{staticClass:"price"},[t._v(t._s(Math.round(s.price*s.discount)))])])])})),a("div",{staticClass:"total"},[a("span",[t._v("共")]),a("span",{staticClass:"totalCount"},[t._v(" "+t._s(t.order[5])+" ")]),a("span",[t._v("件商品")]),a("span",[t._v(" 總計")]),a("span",{staticClass:"totalPrice"},[t._v(" "+t._s(t.order[6]))])]),a("div",{staticClass:"list-check_item"},[a("div",{staticClass:"name"},[t._v("姓名")]),a("div",{staticClass:"content"},[t._v(t._s(t.order[0]))])]),a("hr"),a("div",{staticClass:"list-check_item"},[a("div",{staticClass:"name"},[t._v("聯絡電話")]),a("div",{staticClass:"content"},[t._v(t._s(t.order[1]))])]),a("hr"),a("div",{staticClass:"list-check_item"},[a("div",{staticClass:"name"},[t._v("收件地址")]),a("div",{staticClass:"content"},[t._v(t._s(t.order[2]))])]),a("hr"),a("div",{staticClass:"list-check_item"},[a("div",{staticClass:"name"},[t._v("郵件地址")]),a("div",{staticClass:"content"},[t._v(t._s(t.order[3]))])]),a("hr"),a("div",{staticClass:"list-check_item"},[a("div",{staticClass:"name"},[t._v("備註")]),a("div",{staticClass:"content"},[t._v(t._s(t.order[4]))])]),a("hr"),t._m(1),a("div",{staticClass:"nextBtn"},[a("div",{staticClass:"e-btn",attrs:{to:{name:"Cart-orderCompleted"}},on:{click:function(s){return t.confirm()}}},[t._v("確認付款")])])],2)],1),t.loading?a("Loading"):t._e()],1)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"list-check_title list-check_item"},[a("div",{staticClass:"name"},[t._v("品名")]),a("div",{staticClass:"count"},[t._v("數量")]),a("div",{staticClass:"price"},[t._v("小計")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"list-check_item"},[a("div",{staticClass:"name"},[t._v("付款狀態")]),a("div",{staticClass:"content"},[t._v("尚未付款")])])}],c=(a("4160"),a("159b"),a("ce4a")),n=a("3a5e"),r=a("2b0e"),o=a("1157"),l=a.n(o),v={name:"Checkout",components:{CartStep:c["a"],Loading:n["a"]},props:{cart:{type:Array,required:!0},order:{type:Array,required:!0}},data:function(){return{loading:!1}},methods:{confirm:function(){var t=this;this.loading=!0;var s=[];this.cart.forEach((function(t){return s.push(t.id)}));for(var a=0;a<s.length;a++){var i=s[a];r["a"].axios.delete("https://ancient-dusk-35329.herokuapp.com/cart/"+i).then((function(){t.loading=!1})).catch((function(t){console.log(t)}))}this.loading=!0,r["a"].axios.put("https://ancient-dusk-35329.herokuapp.com/total",{item:0}).then((function(){t.loading=!1,l()("body,html").scrollTop(0),t.$router.push({name:"Cart-orderCompleted"})})).catch((function(t){console.log(t)})),this.$emit("total",0)}}},d=v,u=a("2877"),_=Object(u["a"])(d,i,e,!1,null,null,null);s["default"]=_.exports},"159b":function(t,s,a){var i=a("da84"),e=a("fdbc"),c=a("17c2"),n=a("9112");for(var r in e){var o=i[r],l=o&&o.prototype;if(l&&l.forEach!==c)try{n(l,"forEach",c)}catch(v){l.forEach=c}}},"17c2":function(t,s,a){"use strict";var i=a("b727").forEach,e=a("a640"),c=a("ae40"),n=e("forEach"),r=c("forEach");t.exports=n&&r?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,s,a){"use strict";var i=a("23e7"),e=a("17c2");i({target:"Array",proto:!0,forced:[].forEach!=e},{forEach:e})},ce4a:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"m-step h-flexCenter"},[a("div",{staticClass:"step_block e-btn",class:t.hasClass?"active":""},[a("span",[t._v("01")]),a("span",[t._v(" 輸入訂單資料")])]),a("div",{staticClass:"step_arrow"},[t._v("►")]),a("div",{staticClass:"step_block e-btn",class:t.hasClass?"":"active"},[a("span",[t._v("02")]),a("span",[t._v(" 確認付款")])]),a("div",{staticClass:"step_arrow"},[t._v("►")]),t._m(0)])},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"step_block e-btn"},[a("span",[t._v("03")]),a("span",[t._v(" 完成訂單")])])}],c={name:"CartStep",props:{hasClass:Boolean}},n=c,r=a("2877"),o=Object(r["a"])(n,i,e,!1,null,null,null);s["a"]=o.exports},fdbc:function(t,s){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=Checkout.48a2119e.js.map