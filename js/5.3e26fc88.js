(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"0292":function(a,t,e){"use strict";var s,i,n=e("1fca"),o=n["b"].reactiveProp,c={extends:n["a"],mixins:[o],props:["options"],mounted:function(){this.renderChart(this.chartData,this.options)},watch:{chartData:function(){this.$data._chart.update()}}},r=c,l=e("2877"),d=Object(l["a"])(r,s,i,!1,null,null,null);t["a"]=d.exports},4159:function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("q-page",{staticClass:"flex flex-center"},[e("div",{staticClass:"q-pa-md"},[e("div",{staticClass:"q-gutter-md row"},[e("q-select",{staticClass:"q-pa-md absolute-top",staticStyle:{"max-width":"200px"},attrs:{outlined:"",options:a.combo_options,label:"Regione"},model:{value:a.regione,callback:function(t){a.regione=t},expression:"regione"}}),"Panoramica"!=a.regione?e("q-carousel",{staticClass:"rounded-borders",attrs:{"transition-prev":"scale","transition-next":"scale",swipeable:"",animated:"","control-color":"primary",navigation:"",padding:"",arrows:"",height:"800px"},model:{value:a.slide,callback:function(t){a.slide=t},expression:"slide"}},[e("q-carousel-slide",{staticClass:"column no-wrap flex-center",attrs:{name:"totale_positivi_tamponi"}},[a.loaded?e("line-chart",{attrs:{width:a.chartw,height:a.charth,"chart-data":a.totale_positivi_tamponi,options:a.options}}):a._e()],1),e("q-carousel-slide",{staticClass:"column no-wrap flex-center",attrs:{name:"totale_casi_tamponi"}},[a.loaded?e("line-chart",{attrs:{width:a.chartw,height:a.charth,"chart-data":a.totale_casi_tamponi,options:a.options}}):a._e()],1),e("q-carousel-slide",{staticClass:"column no-wrap flex-center",attrs:{name:"decessi"}},[a.loaded?e("line-chart",{attrs:{width:a.chartw,height:a.charth,"chart-data":a.decessi,options:a.options}}):a._e()],1),e("q-carousel-slide",{staticClass:"column no-wrap flex-center",attrs:{name:"ricoverati"}},[a.loaded?e("line-chart",{attrs:{width:a.chartw,height:a.charth,"chart-data":a.ricoverati,options:a.options}}):a._e()],1),e("q-carousel-slide",{staticClass:"column no-wrap flex-center",attrs:{name:"t_i"}},[a.loaded?e("line-chart",{attrs:{width:a.chartw,height:a.charth,"chart-data":a.t_i,options:a.options}}):a._e()],1),e("q-carousel-slide",{staticClass:"column no-wrap flex-center",attrs:{name:"totale_positivi"}},[a.loaded?e("line-chart",{attrs:{width:a.chartw,height:a.charth,"chart-data":a.totale_positivi,options:a.options}}):a._e()],1)],1):e("q-carousel",{staticClass:"rounded-borders",attrs:{"transition-prev":"scale","transition-next":"scale",swipeable:"",animated:"","control-color":"primary",navigation:"",padding:"",arrows:"",height:"700px"},model:{value:a.slide_panoramica,callback:function(t){a.slide_panoramica=t},expression:"slide_panoramica"}},[e("q-carousel-slide",{staticClass:"column no-wrap flex-center",attrs:{name:"totale_positivi_tamponi"}},[a.loaded?e("line-chart",{attrs:{width:a.chartw,height:a.charth,"chart-data":a.totale_positivi_tamponi,options:a.options}}):a._e()],1),e("q-carousel-slide",{staticClass:"column no-wrap flex-center",attrs:{name:"totale_positivi"}},[a.loaded?e("line-chart",{attrs:{width:a.chartw,height:a.charth,"chart-data":a.totale_positivi,options:a.options}}):a._e()],1)],1)],1)])])},i=[],n=(e("8e6e"),e("8a81"),e("ac6a"),e("cadf"),e("06db"),e("456d"),e("967e")),o=e.n(n),c=(e("96cf"),e("fa84")),r=e.n(c),l=e("c47a"),d=e.n(l),j=e("0292"),b=e("2f62");function p(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,s)}return e}function f(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?p(Object(e),!0).forEach((function(t){d()(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):p(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}var h={name:"LineChartContainer",components:{LineChart:j["a"]},data:function(){return{charth:600,chartw:1e3,regione:"Panoramica",combo_options:["Panoramica","Abruzzo","Basilicata","P.A. Bolzano","Calabria","Campania","Emilia-Romagna","Friuli Venezia Giulia","Lazio","Liguria","Lombardia","Marche","Molise","Piemonte","Puglia","Sardegna","Sicilia","Toscana","P.A. Trento","Umbria","Valle d'Aosta","Veneto"],slide:"totale_positivi_tamponi",slide_panoramica:"totale_positivi_tamponi",loaded:!1,totale_positivi_tamponi:null,totale_casi_tamponi:null,decessi:null,ricoverati:null,t_i:null,totale_positivi:null,chartdata:null,options:{responsive:!0,maintainAspectRatio:!1}}},computed:f({},Object(b["c"])({ContagiTamponi:"data/getDataSetContagiTamponi"}),{},Object(b["c"])({TotaleCasiTamponi:"data/getDataSetTotaleCasiTamponi"}),{},Object(b["c"])({CrescitaDecessi:"data/getDataSetCrescitaDecessi"}),{},Object(b["c"])({Ospedalizzati:"data/getDataSetOspedalizzati"}),{},Object(b["c"])({TerapiaIntensiva:"data/getDataSetTerapiaIntensiva"}),{},Object(b["c"])({TotalePositivi:"data/getDataSetTotalePositivi"})),methods:f({},Object(b["b"])("data",["getData"])),mounted:function(){var a=this;return r()(o.a.mark((function t(){return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a.loaded=!1,t.prev=1,t.next=4,a.getData({data:"Nazionale"});case 4:return t.next=6,a.getData({data:"Regionale"});case 6:return t.next=8,a.getData({data:"Provinciale"});case 8:a.totale_positivi_tamponi=a.ContagiTamponi,a.totale_casi_tamponi=a.TotaleCasiTamponi,a.decessi=a.CrescitaDecessi,a.ricoverati=a.Ospedalizzati,a.t_i=a.TerapiaIntensiva,a.totale_positivi=a.TotalePositivi,a.chartdata=a.Nazionale,a.loaded=!0,t.next=21;break;case 18:t.prev=18,t.t0=t["catch"](1),console.error(t.t0);case 21:case"end":return t.stop()}}),t,null,[[1,18]])})))()}},u=h,m=e("2877"),g=e("eebe"),v=e.n(g),w=e("9989"),_=e("ddd8"),k=e("880c"),z=e("62cd"),y=Object(m["a"])(u,s,i,!1,null,null,null);t["default"]=y.exports;v()(y,"components",{QPage:w["a"],QSelect:_["a"],QCarousel:k["a"],QCarouselSlide:z["a"]})},4678:function(a,t,e){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"73332","./en-il.js":"73332","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df48","./fa.js":"8df48","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b46","./gd.js":"f6b46","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(a){var t=n(a);return e(t)}function n(a){if(!e.o(s,a)){var t=new Error("Cannot find module '"+a+"'");throw t.code="MODULE_NOT_FOUND",t}return s[a]}i.keys=function(){return Object.keys(s)},i.resolve=n,a.exports=i,i.id="4678"}}]);