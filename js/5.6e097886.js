(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"6faf":function(e,t,o){"use strict";var a=o("abf1"),r=o.n(a);r.a},abf1:function(e,t,o){},cfe2:function(e,t,o){"use strict";var a=o("d317"),r=o.n(a);r.a},d317:function(e,t,o){},fdaa:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-page",{staticClass:"flex flex-center"},[e.loaded?o("div",{staticClass:" col"},[o("l-map",{staticStyle:{height:"80vh"},attrs:{center:e.center,zoom:e.zoom,options:e.mapOptions}},[o("l-choropleth-layer",{attrs:{data:e.regioniData,titleKey:"nome_regione",idKey:"codice_regione",value:e.valueregioni,geojsonIdKey:"COD_REG",geojsonIdName:"NOME_REG",geojson:e.GeoDataRegioni,colorScale:e.colorScale,circlesMarker:e.circlesMarker},scopedSlots:e._u([{key:"default",fn:function(t){return[o("l-reference-chart",{attrs:{title:e.titleLegend,colorScale:e.colorScale,min:t.min,max:t.max,position:"topright"}})]}}],null,!1,581357269)}),o("l-control-attribution",{attrs:{position:"bottomleft",prefix:e.prefix}}),o("l-control-zoom",{attrs:{position:"bottomright"}})],1)],1):e._e()])},r=[],i=(o("8e6e"),o("8a81"),o("ac6a"),o("cadf"),o("06db"),o("456d"),o("967e")),n=o.n(i),l=(o("96cf"),o("fa84")),c=o.n(l),s=(o("7f7f"),o("c47a")),u=o.n(s),f=o("2f62"),p=o("e11e"),d=o("2699"),m=o("f5ed"),b=o("c8b6");function g(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function v(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?g(Object(o),!0).forEach((function(t){u()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):g(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}delete p["Icon"].Default.prototype._getIconUrl,p["Icon"].Default.mergeOptions({iconRetinaUrl:o("584d"),iconUrl:o("6397"),shadowUrl:o("e2b9")});var h={name:"app",components:{LMap:d["a"],"l-info-control":o("cebf").default,"l-reference-chart":o("80b3").default,"l-choropleth-layer":o("fc1d").default,LControlAttribution:m["a"],LControlZoom:b["a"]},data:function(){return{loaded:!1,dense:!1,metrica:{label:"Letalità",value:"Letalità"},center:[41.69193,12.51133],zoom:6,regioniData:null,colorScale:["lightgreen","yellow","red"],valueregioni:{key:"Letalità"},mapOptions:{attributionControl:!1,zoomControl:!1},currentStrokeColor:"3d3213",circlesMarker:null,titleLegend:"% Letalità",prefix:"Letalità Covid-19"}},computed:v({},Object(f["c"])({GeoDataRegioni:"geo/getGeoDataRegioni"}),{},Object(f["c"])({GeoDataProvince:"geo/getGeoDataProvince"}),{},Object(f["c"])({GeoValoriRegioni:"geo/getGeoValoriRegioni"}),{},Object(f["c"])({Grafici:"geo/getGrafici"}),{getComboOptions:function(){var e=[],t=0;for(var o in this.Grafici){var a={label:this.Grafici[o].value,value:this.Grafici[o].name};e[t]=a,t++}return e}}),methods:v({},Object(f["b"])("geo",["loadGeoData"]),{loadData:function(){console.log("this.Grafici ",this.Grafici," ",this.metrica),this.valueregioni={key:this.metrica.value},this.titleLegend=this.Grafici[this.metrica.value].unit+" "+this.metrica.label,this.prefix=this.metrica.label+" Covid-19",this.regioniData=this.GeoValoriRegioni[this.metrica.value]}}),mounted:function(){var e=this;return c()(n.a.mark((function t(){var o;return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loaded=!1,t.prev=1,t.next=4,e.loadGeoData({data:"Regionale"});case 4:return t.next=6,e.loadGeoData({data:"Provinciale"});case 6:e.regioniData=e.GeoValoriRegioni[e.metrica.value],e.loaded=!0,o={section:"GeoMap",model:e.metrica,combo_options:e.getComboOptions,multiple:!1,maxvalues:1,hint:null,label:"Metrica",loaded:!0,model_prov:null,combo_options_prov:null,maxvalues_prov:null,hint_prov:null,label_prov:null,loaded_prov:!1},Event.$emit("enableCombo",o),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](1),console.error(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})))()},created:function(){var e=this;Event.$on("changeCombo",(function(t){"GeoMap"==t.section&&e.metrica&&e.metrica.value!=t.comboval1.value&&(e.metrica=t.comboval1,e.loadData())}))}},O=h,G=(o("cfe2"),o("6faf"),o("2877")),y=o("eebe"),D=o.n(y),j=o("9989"),w=o("ddd8"),_=Object(G["a"])(O,a,r,!1,null,"547c5b18",null);t["default"]=_.exports;D()(_,"components",{QPage:j["a"],QSelect:w["a"]})}}]);