(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{4159:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"flex flex-center"},[a("div",{staticClass:" col"},[a("q-carousel",{staticClass:"rounded-borders",staticStyle:{width:"80vw"},attrs:{"transition-prev":"scale","transition-next":"scale",swipeable:"",animated:"","control-color":"primary",padding:"",navigation:e.getNavigation,arrows:e.getArrows,height:"80vh"},on:{input:e.loadData},model:{value:e.slide,callback:function(t){e.slide=t},expression:"slide"}},[a("q-carousel-slide",{staticClass:"column no-wrap flex-center",attrs:{name:"totale_casi"}},[e.loaded?a("line-chart",{staticClass:"wrapper",attrs:{"chart-data":e.totale_casi,options:e.optionsCasiTotali}}):e._e()],1),a("q-carousel-slide",{staticClass:"column no-wrap flex-center",attrs:{name:"nuovi_casi"}},[e.loaded?a("line-chart",{staticClass:"wrapper",attrs:{"chart-data":e.nuovi_casi,options:e.optionsNuoviCasi}}):e._e()],1),a("q-carousel-slide",{staticClass:"column no-wrap flex-center",attrs:{name:"crescita_casi"}},[e.loaded?a("line-chart",{staticClass:"wrapper",attrs:{"chart-data":e.crescita_casi,options:e.optionsCrescitaCasi}}):e._e()],1)],1)],1)])},o=[],n=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("967e")),r=a.n(n),s=(a("96cf"),a("fa84")),c=a.n(s),l=(a("6762"),a("2fdb"),a("c47a")),v=a.n(l),p=a("0292"),d=a("2f62"),u=a("0967");function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){v()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var g={name:"LineChartContainer",components:{LineChart:p["a"]},data:function(){return{dense:!1,regione:["Lombardia"],provincia:[],slide:"totale_casi",loaded:!1,totale_casi:null,nuovi_casi:null,crescita_casi:null,options:{responsive:!0,maintainAspectRatio:!1},optionsCasiTotali:null,optionsNuoviCasi:null,optionsCrescitaCasi:null}},computed:b({},Object(d["c"])({ProvCasiTotali:"data/getDataSetProvCasiTotali"}),{},Object(d["c"])({ProvNuoviCasi:"data/getDataSetProvNuoviCasi"}),{},Object(d["c"])({ProvCrescitaCasi:"data/getDataSetProvCrescitaCasi"}),{},Object(d["c"])({regioni:"data/getRegioni"}),{},Object(d["c"])({province:"data/getProvince"}),{getComboProvince:function(){for(var e=[],t=0,a=0;a<this.regione.length;a++)for(var i=this.province[this.regione[a]],o=0;o<i.length;o++)e[t]=i[o],t++;return e},getNavigation:function(){return 1!=u["b"].is.mobile&&0!=this.loaded},getArrows:function(){return 1!=u["b"].is.mobile&&0!=this.loaded}}),methods:b({},Object(d["b"])("data",["getData"]),{},Object(d["b"])("data",["setProvinceSelected"]),{checkComboProvince:function(){for(var e=[],t=0,a=0;a<this.regione.length;a++)for(var i=this.province[this.regione[a]],o=0;o<i.length;o++){var n=i[o];this.provincia&&1==this.provincia.includes(n)&&(e[t]=n,t++)}var r=this.provincia.length,s=e.length;this.provincia=e,0==this.regione.length&&(this.loaded=!1),s<r&&this.loadData()},loadData:function(){var e=this;return c()(r.a.mark((function t(){var a,i;return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.loaded=!1,a=[],!(e.provincia&&e.provincia.length>0)){t.next=13;break}for(i=0;i<e.provincia.length;i++)a[i]=e.provincia[i];return t.next=6,e.setProvinceSelected({data:a});case 6:e.totale_casi=e.ProvCasiTotali.chartdata,e.optionsCasiTotali=e.ProvCasiTotali.chartOptions,e.nuovi_casi=e.ProvNuoviCasi.chartdata,e.optionsNuoviCasi=e.ProvNuoviCasi.chartOptions,e.crescita_casi=e.ProvCrescitaCasi.chartdata,e.optionsCrescitaCasi=e.ProvCrescitaCasi.chartOptions,e.loaded=!0;case 13:case"end":return t.stop()}}),t)})))()}}),mounted:function(){1==u["b"].is.mobile&&(this.dense=!0);var e={section:"Provinciale",model:this.regione,combo_options:this.regioni,multiple:!0,maxvalues:8,hint:"Max 8 selezioni",label:"Regione",loaded:!0,model_prov:this.provincia,combo_options_prov:this.getComboProvince,maxvalues_prov:8,hint_prov:"Max 8 selezioni",label_prov:"Provincia",loaded_prov:!0};Event.$emit("enableCombo",e)},created:function(){var e=this;Event.$on("changeCombo_prov",(function(t){"Provinciale"==t.section&&e.provincia&&e.provincia!=t.comboval2&&(e.provincia=t.comboval2,e.loadData())})),Event.$on("changeCombo",(function(t){if("Provinciale"==t.section&&e.regione&&e.regione!=t.comboval1){e.regione=t.comboval1,e.checkComboProvince();var a={model_prov:e.provincia,combo_options_prov:e.getComboProvince};Event.$emit("enableCombo_prov",a)}}))}},C=g,m=a("2877"),f=a("eebe"),P=a.n(f),_=a("9989"),O=a("880c"),w=a("62cd"),j=Object(m["a"])(C,i,o,!1,null,null,null);t["default"]=j.exports;P()(j,"components",{QPage:_["a"],QCarousel:O["a"],QCarouselSlide:w["a"]})}}]);