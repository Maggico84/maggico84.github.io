(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"0292":function(e,a,s){"use strict";var t,i,c=s("1fca"),n=c["b"].reactiveProp,r={extends:c["a"],mixins:[n],props:["options"],mounted:function(){this.renderChart(this.chartData,this.options)},watch:{chartData:function(){this.$data._chart.update()}}},o=r,l=s("2877"),d=Object(l["a"])(o,t,i,!1,null,null,null);a["a"]=d.exports},4159:function(e,a,s){"use strict";s.r(a);var t=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("q-page",{staticClass:"flex flex-center"},[s("div",{staticClass:" col"},[s("div",{staticClass:"q-pa-sm row"},[s("q-select",{staticStyle:{"min-width":"200px"},attrs:{outlined:"",options:e.regioni,multiple:"","max-values":"8",hint:"Max 8 selezioni",label:"Regione"},on:{input:e.checkComboProvince},model:{value:e.regione,callback:function(a){e.regione=a},expression:"regione"}}),s("q-select",{staticClass:"q-px-sm",staticStyle:{"min-width":"200px"},attrs:{outlined:"",multiple:"",options:e.getComboProvince,"max-values":"8",hint:"Max 8 selezioni",label:"Provincia"},on:{input:e.loadData},model:{value:e.provincia,callback:function(a){e.provincia=a},expression:"provincia"}})],1),s("q-carousel",{staticClass:"rounded-borders",staticStyle:{width:"80vw"},attrs:{"transition-prev":"scale","transition-next":"scale",swipeable:"",animated:"","control-color":"primary",padding:"",arrows:"",height:"70vh"},on:{input:e.loadData},model:{value:e.slide,callback:function(a){e.slide=a},expression:"slide"}},[s("q-carousel-slide",{staticClass:"column no-wrap flex-center",attrs:{name:"totale_casi"}},[e.loaded?s("line-chart",{staticClass:"wrapper",attrs:{"chart-data":e.totale_casi,options:e.optionsCasiTotali}}):e._e()],1),s("q-carousel-slide",{staticClass:"column no-wrap flex-center",attrs:{name:"nuovi_casi"}},[e.loaded?s("line-chart",{staticClass:"wrapper",attrs:{"chart-data":e.nuovi_casi,options:e.optionsNuoviCasi}}):e._e()],1),s("q-carousel-slide",{staticClass:"column no-wrap flex-center",attrs:{name:"crescita_casi"}},[e.loaded?s("line-chart",{staticClass:"wrapper",attrs:{"chart-data":e.crescita_casi,options:e.optionsCrescitaCasi}}):e._e()],1)],1)],1)])},i=[],c=(s("8e6e"),s("8a81"),s("ac6a"),s("cadf"),s("06db"),s("456d"),s("967e")),n=s.n(c),r=(s("96cf"),s("fa84")),o=s.n(r),l=(s("6762"),s("2fdb"),s("c47a")),d=s.n(l),j=s("0292"),b=s("2f62");function f(e,a){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),s.push.apply(s,t)}return s}function u(e){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?f(Object(s),!0).forEach((function(a){d()(e,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):f(Object(s)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(s,a))}))}return e}var p={name:"LineChartContainer",components:{LineChart:j["a"]},data:function(){return{regione:["Lombardia"],provincia:[],slide:"totale_casi",loaded:!1,totale_casi:null,nuovi_casi:null,crescita_casi:null,options:{responsive:!0,maintainAspectRatio:!1},optionsCasiTotali:null,optionsNuoviCasi:null,optionsCrescitaCasi:null}},computed:u({},Object(b["c"])({ProvCasiTotali:"data/getDataSetProvCasiTotali"}),{},Object(b["c"])({ProvNuoviCasi:"data/getDataSetProvNuoviCasi"}),{},Object(b["c"])({ProvCrescitaCasi:"data/getDataSetProvCrescitaCasi"}),{},Object(b["c"])({regioni:"data/getRegioni"}),{},Object(b["c"])({province:"data/getProvince"}),{getComboProvince:function(){for(var e=[],a=0,s=0;s<this.regione.length;s++)for(var t=this.province[this.regione[s]],i=0;i<t.length;i++)e[a]=t[i],a++;return e},checkComboProvince:function(){for(var e=[],a=0,s=0;s<this.regione.length;s++)for(var t=this.province[this.regione[s]],i=0;i<t.length;i++){var c=t[i];this.provincia&&1==this.provincia.includes(c)&&(e[a]=c,a++)}var n=this.provincia.length,r=e.length;this.provincia=e,0==this.regione.length&&(this.loaded=!1),r<n&&this.loadData()}}),methods:u({},Object(b["b"])("data",["getData"]),{},Object(b["b"])("data",["setProvinceSelected"]),{loadData:function(){var e=this;return o()(n.a.mark((function a(){var s,t;return n.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.loaded=!1,s=[],!(e.provincia&&e.provincia.length>0)){a.next=13;break}for(t=0;t<e.provincia.length;t++)s[t]=e.provincia[t];return a.next=6,e.setProvinceSelected({data:s});case 6:e.totale_casi=e.ProvCasiTotali.chartdata,e.optionsCasiTotali=e.ProvCasiTotali.chartOptions,e.nuovi_casi=e.ProvNuoviCasi.chartdata,e.optionsNuoviCasi=e.ProvNuoviCasi.chartOptions,e.crescita_casi=e.ProvCrescitaCasi.chartdata,e.optionsCrescitaCasi=e.ProvCrescitaCasi.chartOptions,e.loaded=!0;case 13:case"end":return a.stop()}}),a)})))()}})},h=p,v=s("2877"),m=s("eebe"),g=s.n(m),C=s("9989"),k=s("ddd8"),w=s("880c"),y=s("62cd"),O=Object(v["a"])(h,t,i,!1,null,null,null);a["default"]=O.exports;g()(O,"components",{QPage:C["a"],QSelect:k["a"],QCarousel:w["a"],QCarouselSlide:y["a"]})},4678:function(e,a,s){var t={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"73332","./en-il.js":"73332","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df48","./fa.js":"8df48","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b46","./gd.js":"f6b46","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(e){var a=c(e);return s(a)}function c(e){if(!s.o(t,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t[e]}i.keys=function(){return Object.keys(t)},i.resolve=c,e.exports=i,i.id="4678"}}]);