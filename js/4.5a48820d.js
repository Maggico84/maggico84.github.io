(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"713b":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),e.$q.platform.is.mobile?a("div",{staticClass:"q-px-lg q-mb-md row"},[a("div",{staticClass:"text-h3"},[e._v("Covid-19")]),a("div",{staticClass:"tetx-subtitle1"},[e._v(e._s(e.todaysDate))])]):e._e()],1),e.$q.platform.is.desktop?a("div",{staticClass:"q-px-lg q-mb-md"},[a("div",{staticClass:"text-h3"},[e._v("Covid-19")]),a("div",{staticClass:"tetx-subtitle1"},[e._v(e._s(e.todaysDate))])]):e._e()],1),a("q-drawer",{attrs:{bordered:"",width:200,breakpoint:500,"content-class":"bg-grey-3"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("q-scroll-area",{staticStyle:{height:"calc(100% - 137px)","margin-top":"137px","border-right":"1px solid #ddd"}},[a("q-list",{attrs:{padding:""}},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{to:"/nazionale",clickable:""}},[a("q-item-section",[e._v("\n              Nazionale\n            ")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{to:"/regionale",clickable:""}},[a("q-item-section",[e._v("\n              Regionale\n            ")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{to:"/provinciale",clickable:""}},[a("q-item-section",[e._v("\n              Provinciale\n            ")])],1),a("q-separator"),a("q-item",[a("q-btn",{attrs:{color:"primary",icon:"system_update",label:"Update Data"},on:{click:e.updateData}})],1)],1)],1),a("q-img",{staticClass:"avatar-bkg bg-primary absolute-top",staticStyle:{height:"137px"},attrs:{src:"statics/images/covid19.png"}})],1),a("q-page-container",[a("router-view")],1)],1)},n=[],i=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("967e")),o=a.n(i),c=(a("96cf"),a("fa84")),s=a.n(c),l=a("c47a"),p=a.n(l),d=(a("0967"),a("bd4c")),u=a("2f62");function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){p()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var v={name:"MainLayout",data:function(){return{leftDrawerOpen:!1,loaded:!1}},computed:{todaysDate:function(){var e=Date.now();return d["a"].formatDate(e,"dddd D MMMM")}},methods:f({},Object(u["b"])("data",["getData"]),{updateData:function(){var e=this;return s()(o.a.mark((function t(){return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getData({data:"Nazionale"});case 2:return t.next=4,e.getData({data:"Regionale"});case 4:return t.next=6,e.getData({data:"Provinciale"});case 6:case"end":return t.stop()}}),t)})))()}})},m=v,g=(a("89d3"),a("2877")),w=a("eebe"),O=a.n(w),q=a("4d5a"),D=a("e359"),y=a("65c6"),h=a("9c40"),x=a("9404"),_=a("4983"),j=a("1c1c"),k=a("66e5"),Q=a("4074"),P=a("eb85"),C=a("068f"),S=a("09e3"),M=a("714f"),N=Object(g["a"])(m,r,n,!1,null,null,null);t["default"]=N.exports;O()(N,"components",{QLayout:q["a"],QHeader:D["a"],QToolbar:y["a"],QBtn:h["a"],QDrawer:x["a"],QScrollArea:_["a"],QList:j["a"],QItem:k["a"],QItemSection:Q["a"],QSeparator:P["a"],QImg:C["a"],QPageContainer:S["a"]}),O()(N,"directives",{Ripple:M["a"]})},"89d3":function(e,t,a){"use strict";var r=a("b0e3"),n=a.n(r);n.a},b0e3:function(e,t,a){}}]);