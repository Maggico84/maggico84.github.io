(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"713b":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("div",{staticClass:"row"},[a("div",[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),e.$q.platform.is.mobile?a("div",{staticClass:"q-px-lg q-mb-md row"},[a("div",{staticClass:"text-h3"},[e._v("Covid-19")]),a("div",{staticClass:"tetx-subtitle1"},[e._v(e._s(e.todaysDate))])]):e._e()],1),e.$q.platform.is.desktop?a("div",{staticClass:"q-px-lg q-mb-md"},[a("div",{staticClass:"text-h3"},[e._v("Covid-19")]),a("div",{staticClass:"tetx-subtitle1"},[e._v(e._s(e.todaysDate))])]):e._e()],1),a("q-space"),e.loaded?a("q-select",{staticClass:"q-px-md q-py-sm",staticStyle:{"min-width":"200px"},attrs:{outlined:"",dense:e.dense,options:e.combo_options,multiple:e.multiple,"max-values":e.maxvalues,hint:e.hint,label:e.label,dark:"",color:"white"},on:{input:e.changecombo},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}}):e._e(),e.loaded_prov?a("q-select",{staticClass:"q-px-md q-py-sm",staticStyle:{"min-width":"200px"},attrs:{outlined:"",dense:e.dense,multiple:e.multiple,options:e.combo_options_prov,"max-values":e.maxvalues_prov,hint:e.hint_prov,label:e.label_prov,dark:"",color:"white"},on:{input:e.changecombo_prov},model:{value:e.model_prov,callback:function(t){e.model_prov=t},expression:"model_prov"}}):e._e()],1)]),a("q-drawer",{attrs:{bordered:"",width:200,breakpoint:500,"content-class":"bg-grey-3"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("q-scroll-area",{staticStyle:{height:"calc(100% - 137px)","margin-top":"137px","border-right":"1px solid #ddd"}},[a("q-list",{attrs:{padding:""}},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{to:"/nazionale",clickable:""}},[a("q-item-section",[e._v("\n              Nazionale\n            ")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{to:"/panoramicaregionale",clickable:""}},[a("q-item-section",[e._v("\n              Panoramica Regionale\n            ")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{to:"/regionale",clickable:""}},[a("q-item-section",[e._v("\n              Dettaglio Regionale\n            ")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{to:"/provinciale",clickable:""}},[a("q-item-section",[e._v("\n              Provinciale\n            ")])],1),a("q-separator"),a("q-item",[a("q-btn",{attrs:{color:"primary",icon:"system_update",label:"Update Data"},on:{click:e.updateData}})],1)],1)],1),a("q-img",{staticClass:"avatar-bkg bg-primary absolute-top",staticStyle:{height:"137px"},attrs:{src:"statics/images/covid19.png"}})],1),a("q-page-container",[a("router-view")],1)],1)},n=[],i=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("967e")),r=a.n(i),l=(a("96cf"),a("fa84")),s=a.n(l),c=a("c47a"),p=a.n(c),d=a("0967"),m=a("bd4c"),v=a("2f62");function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){p()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var _={name:"MainLayout",data:function(){return{leftDrawerOpen:!1,loaded:!1,dense:!1,model:null,combo_options:null,multiple:null,maxvalues:null,hint:null,label:null,section:"Nazionale",loaded_prov:!0,model_prov:null,combo_options_prov:null,maxvalues_prov:null,hint_prov:null,label_prov:null}},computed:{todaysDate:function(){var e=Date.now();return m["a"].formatDate(e,"dddd D MMMM")}},methods:b({},Object(v["b"])("data",["getData"]),{updateData:function(){var e=this;return s()(r.a.mark((function t(){return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getData({data:"Nazionale"});case 2:return t.next=4,e.getData({data:"Regionale"});case 4:return t.next=6,e.getData({data:"Provinciale"});case 6:case"end":return t.stop()}}),t)})))()},changecombo:function(){var e={section:this.section,regione:this.model};Event.$emit("changeCombo",e)},changecombo_prov:function(){var e={section:this.section,regione:this.model,provincia:this.model_prov};Event.$emit("changeCombo_prov",e)}}),created:function(){var e=this;Event.$on("enableCombo",(function(t){e.section=t.section,e.model=t.model,e.combo_options=t.combo_options,e.multiple=t.multiple,e.maxvalues=t.maxvalues,e.hint=t.hint,e.label=t.label,e.loaded=t.loaded,e.model_prov=t.model_prov,e.combo_options_prov=t.combo_options_prov,e.maxvalues_prov=t.maxvalues_prov,e.hint_prov=t.hint_prov,e.label_prov=t.label_prov,e.loaded_prov=t.loaded_prov})),Event.$on("enableCombo_prov",(function(t){e.model_prov=t.model_prov,e.combo_options_prov=t.combo_options_prov}))},mounted:function(){1==d["b"].is.mobile&&(this.dense=!0)}},f=_,h=(a("89d3"),a("2877")),g=a("eebe"),w=a.n(g),q=a("4d5a"),x=a("e359"),y=a("65c6"),D=a("9c40"),O=a("2c91"),k=a("ddd8"),C=a("9404"),Q=a("4983"),j=a("1c1c"),P=a("66e5"),S=a("4074"),E=a("eb85"),N=a("068f"),$=a("09e3"),M=a("714f"),z=Object(h["a"])(f,o,n,!1,null,null,null);t["default"]=z.exports;w()(z,"components",{QLayout:q["a"],QHeader:x["a"],QToolbar:y["a"],QBtn:D["a"],QSpace:O["a"],QSelect:k["a"],QDrawer:C["a"],QScrollArea:Q["a"],QList:j["a"],QItem:P["a"],QItemSection:S["a"],QSeparator:E["a"],QImg:N["a"],QPageContainer:$["a"]}),w()(z,"directives",{Ripple:M["a"]})},"89d3":function(e,t,a){"use strict";var o=a("b0e3"),n=a.n(o);n.a},b0e3:function(e,t,a){}}]);