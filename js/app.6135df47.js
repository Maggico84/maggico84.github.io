(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{0:function(a,t,e){a.exports=e("2f39")},"2f39":function(a,t,e){"use strict";e.r(t);var r={};e.r(r),e.d(r,"getDataSetContagiTamponi",(function(){return N})),e.d(r,"getDataSetTotaleCasiTamponi",(function(){return P})),e.d(r,"getDataSetCrescitaDecessi",(function(){return T})),e.d(r,"getDataSetOspedalizzati",(function(){return w})),e.d(r,"getDataSetTerapiaIntensiva",(function(){return x})),e.d(r,"getDataSetTotalePositivi",(function(){return S})),e.d(r,"getDataSetRegContagiTamponi",(function(){return y})),e.d(r,"getDataSetRegTotalePositivi",(function(){return O})),e.d(r,"getDataSetRegTotaleCasiTamponi",(function(){return B})),e.d(r,"getDataSetRegCrescitaDecessi",(function(){return I})),e.d(r,"getDataSetRegOspedalizzati",(function(){return j})),e.d(r,"getDataSetRegTerapiaIntensiva",(function(){return A})),e.d(r,"getDataSetProvCasiTotali",(function(){return M})),e.d(r,"getDataSetProvNuoviCasi",(function(){return V})),e.d(r,"getDataSetCrescitaCasi",(function(){return W})),e.d(r,"extractDateFromat",(function(){return Y})),e.d(r,"getChartOptions",(function(){return $})),e.d(r,"getRegioni",(function(){return q})),e.d(r,"getProvince",(function(){return J}));var n={};e.r(n),e.d(n,"getData",(function(){return E})),e.d(n,"setProvinceSelected",(function(){return F})),e.d(n,"addData",(function(){return Q}));var o={};e.r(o),e.d(o,"getData",(function(){return K})),e.d(o,"setProvinceSelected",(function(){return L})),e.d(o,"addData",(function(){return U}));var i=e("967e"),l=e.n(i),c=(e("a481"),e("96cf"),e("fa84")),d=e.n(c),g=(e("7d6e"),e("e54f"),e("985d"),e("31cd"),e("2b0e")),u=e("1f91"),s=e("42d2"),b=e("b05d");g["a"].use(b["a"],{config:{},lang:u["a"],iconSet:s["a"]});var p=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"q-app"}},[e("router-view")],1)},v=[],f={name:"App",mounted:function(){this.$router.replace("/nazionale")}},h=f,C=e("2877"),m=Object(C["a"])(h,p,v,!1,null,null,null),k=m.exports,z=e("2f62"),_=function(){return{data:{},regioni:[],provSelected:[],province:{},colorNoOpacity:["rgba(255,101,80,0.50)","rgba(156,101,80,0.50)","rgba(29,101,80,0.50)","rgba(7,213,80,0.50)","rgba(7,51,80,0.50)","rgba(0,0,0,0.50)","rgba(0,0,89,0.50)","rgba(0,0,179,0.50)","rgba(0,0,255,0.50)","rgba(0,255,255,0.50)","rgba(0,114,135,0.50)","rgba(113,0,121,0.50)","rgba(224,0,121,0.50)","rgba(64,4,80,0.50)","rgba(64,76,0,0.50)","rgba(154,76,0,0.50)","rgba(255,195,0,0.50)","rgba(255,255,0,0.50)","rgba(255,67,0,0.50)","rgba(178,67,0,0.50)","rgba(178,175,0,0.50)"],colorWithOpacity:["rgba(255,101,80,1)","rgba(156,101,80,1)","rgba(29,101,80,1)","rgba(7,213,80,1)","rgba(7,51,80,1)","rgba(0,0,0,1)","rgba(0,0,89,1)","rgba(0,0,179,1)","rgba(0,0,255,1)","rgba(0,255,255,1)","rgba(0,114,135,1)","rgba(113,0,121,1)","rgba(224,0,121,1)","rgba(64,4,80,1)","rgba(64,76,0,1)","rgba(154,76,0,1)","rgba(255,195,0,1)","rgba(255,255,0,1)","rgba(255,67,0,1)","rgba(178,67,0,1)","rgba(178,175,0,1)"],urls:{Nazionale:{url:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json"},Regionale:{url:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json"},Provinciale:{url:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province.json"}},chartOptions:{}}},R=(e("6762"),e("bd4c")),D=e("0967");function N(a){for(var t={},e=[],r=[],n=0;n<a.data.Nazionale.length;n++){r[n]=Y(a.data.Nazionale[n].data);var o=a.data.Nazionale[n].totale_positivi/a.data.Nazionale[n].tamponi*100;e[n]=o}var i=[{label:"% Contagi per Tamponi",data:e,backgroundColor:"transparent",borderColor:"rgba(1, 116, 188, 0.50)",pointBackgroundColor:"rgba(171, 71, 188, 1)"}];return t={labels:r,datasets:i},t}function P(a){for(var t={},e=[],r=[],n=[],o=0;o<a.data.Nazionale.length;o++)e[o]=Y(a.data.Nazionale[o].data),r[o]=a.data.Nazionale[o].totale_casi,n[o]=a.data.Nazionale[o].tamponi;var i=[{label:"Contagi Totali",data:r,backgroundColor:"transparent",borderColor:"rgba(255, 153, 0, 0.50)",pointBackgroundColor:"rgba(255, 51, 0, 1)"},{label:"Tamponi Totali",data:n,backgroundColor:"transparent",borderColor:"rgba(1, 116, 188, 0.50)",pointBackgroundColor:"rgba(171, 71, 188, 1)"}];return t={labels:e,datasets:i},t}function T(a){for(var t={},e=[],r=[],n=0;n<a.data.Nazionale.length;n++)if(e[n]=Y(a.data.Nazionale[n].data),0==n)r[n]=0;else{var o=a.data.Nazionale[n-1].deceduti,i=a.data.Nazionale[n].deceduti,l=i-o,c=0;0!=l&&(c=100*l/i),r[n]=c}var d=[{label:"Crescita Decessi",data:r,backgroundColor:"transparent",borderColor:"rgba(1, 116, 188, 0.50)",pointBackgroundColor:"rgba(171, 71, 188, 1)"}];return t={labels:e,datasets:d},t}function w(a){for(var t={},e=[],r=[],n=[],o=[],i=0;i<a.data.Nazionale.length;i++)e[i]=Y(a.data.Nazionale[i].data),r[i]=a.data.Nazionale[i].ricoverati_con_sintomi,n[i]=a.data.Nazionale[i].terapia_intensiva,o[i]=a.data.Nazionale[i].deceduti;var l=[{label:"Ricoverati",data:r,backgroundColor:"transparent",borderColor:"rgba(255, 153, 0, 0.50)",pointBackgroundColor:"rgba(255, 51, 0, 1)"},{label:"Terapie Intensive",data:n,backgroundColor:"transparent",borderColor:"rgba(1, 116, 188, 0.50)",pointBackgroundColor:"rgba(171, 71, 188, 1)"},{label:"Deceduti",data:o,backgroundColor:"transparent",borderColor:"rgba(0, 153, 51, 0.50)",pointBackgroundColor:"rgba(0, 153, 153, 1)"}];return t={labels:e,datasets:l},t}function x(a){for(var t={},e=[],r=[],n=0;n<a.data.Nazionale.length;n++)e[n]=Y(a.data.Nazionale[n].data),r[n]=a.data.Nazionale[n].terapia_intensiva;var o=[{label:"Terapie Intensive",data:r,backgroundColor:"transparent",borderColor:"rgba(255, 153, 0, 0.50)",pointBackgroundColor:"rgba(255, 51, 0, 1)"}];return t={labels:e,datasets:o},t}function S(a){for(var t={},e=[],r=[],n=0;n<a.data.Nazionale.length;n++)e[n]=Y(a.data.Nazionale[n].data),r[n]=a.data.Nazionale[n].totale_positivi;var o=[{label:"Totale Attualmente Positivi",data:r,backgroundColor:"transparent",borderColor:"rgba(255, 153, 0, 0.50)",pointBackgroundColor:"rgba(255, 51, 0, 1)"}];return t={labels:e,datasets:o},t}function y(a){for(var t={},e=[],r=[],n=[],o=[],i=[],l=0;l<a.regioni.length;l++){var c=a.regioni[l];r[c]=[],e[c]=[],n[c]=0}for(var d=0;d<a.data.Regionale.length;d++){var g=a.data.Regionale[d].denominazione_regione,u=n[g];r[g][u]=Y(a.data.Regionale[d].data);var s=a.data.Regionale[d].totale_positivi/a.data.Regionale[d].tamponi*100;e[g][u]=s,n[g]={},n[g]=u+1}for(var b=0;b<a.regioni.length;b++){var p=a.regioni[b];0==b&&(o=r[p]);var v=a.colorNoOpacity[b],f=a.colorWithOpacity[b];1==D["b"].is.mobile&&(v=a.colorNoOpacity[b],f=a.colorNoOpacity[b]),i[b]={label:p,data:e[p],backgroundColor:"transparent",borderColor:v,pointBackgroundColor:f};var h=[{label:"% Contagi per Tamponi",data:e[p],backgroundColor:"transparent",borderColor:"rgba(1, 116, 188, 0.50)",pointBackgroundColor:"rgba(171, 71, 188, 1)"}];t[p]={labels:r[p],datasets:h}}return t["Panoramica"]={labels:o,datasets:i},t}function O(a){for(var t={},e=[],r=[],n=[],o=[],i=[],l=0;l<a.regioni.length;l++){var c=a.regioni[l];r[c]=[],e[c]=[],n[c]=0}for(var d=0;d<a.data.Regionale.length;d++){var g=a.data.Regionale[d].denominazione_regione,u=n[g];r[g][u]=Y(a.data.Regionale[d].data);var s=a.data.Regionale[d].totale_positivi;e[g][u]=s,n[g]={},n[g]=u+1}for(var b=0;b<a.regioni.length;b++){var p=a.regioni[b];0==b&&(o=r[p]);var v=a.colorNoOpacity[b],f=a.colorWithOpacity[b];1==D["b"].is.mobile&&(v=a.colorNoOpacity[b],f=a.colorNoOpacity[b]),i[b]={label:p,data:e[p],backgroundColor:"transparent",borderColor:v,pointBackgroundColor:f};var h=[{label:"Totale Attualmente Positivi",data:e[p],backgroundColor:"transparent",borderColor:"rgba(1, 116, 188, 0.50)",pointBackgroundColor:"rgba(171, 71, 188, 1)"}];t[p]={labels:r[p],datasets:h}}return t["Panoramica"]={labels:o,datasets:i},t}function B(a){for(var t={},e=[],r=[],n=[],o=[],i=0;i<a.regioni.length;i++){var l=a.regioni[i];n[l]=[],e[l]=[],r[l]=[],o[l]=0}for(var c=0;c<a.data.Regionale.length;c++){var d=a.data.Regionale[c].denominazione_regione,g=o[d];n[d][g]=Y(a.data.Regionale[c].data),e[d][g]=a.data.Regionale[c].totale_casi,r[d][g]=a.data.Regionale[c].tamponi,o[d]={},o[d]=g+1}for(var u=0;u<a.regioni.length;u++){var s=a.regioni[u],b=[{label:"Contagi Totali",data:e[s],backgroundColor:"transparent",borderColor:"rgba(255, 153, 0, 0.50)",pointBackgroundColor:"rgba(255, 51, 0, 1)"},{label:"Tamponi Totali",data:r[s],backgroundColor:"transparent",borderColor:"rgba(1, 116, 188, 0.50)",pointBackgroundColor:"rgba(171, 71, 188, 1)"}];t[s]={labels:n[s],datasets:b}}return t}function I(a){for(var t={},e=[],r=[],n=[],o=[],i=0;i<a.regioni.length;i++){var l=a.regioni[i];n[l]=[],e[l]=[],r[l]=[],o[l]=0}for(var c=0;c<a.data.Regionale.length;c++){var d=a.data.Regionale[c].denominazione_regione,g=o[d];n[d][g]=Y(a.data.Regionale[c].data),r[d][g]=a.data.Regionale[c].deceduti;var u=r[d][g];if(0==g)e[d][g]=0;else{var s=r[d][g-1],b=u-s,p=0;p=0==b?0:100*b/u,e[d][g]=p}o[d]={},o[d]=g+1}for(var v=0;v<a.regioni.length;v++){var f=a.regioni[v],h=[{label:"Crescita Decessi",data:e[f],backgroundColor:"transparent",borderColor:"rgba(255, 153, 0, 0.50)",pointBackgroundColor:"rgba(255, 51, 0, 1)"}];t[f]={labels:n[f],datasets:h}}return t}function j(a){for(var t={},e=[],r=[],n=[],o=[],i=[],l=0;l<a.regioni.length;l++){var c=a.regioni[l];o[c]=[],e[c]=[],r[c]=[],n[c]=[],i[c]=0}for(var d=0;d<a.data.Regionale.length;d++){var g=a.data.Regionale[d].denominazione_regione,u=i[g];o[g][u]=Y(a.data.Regionale[d].data),e[g][u]=a.data.Regionale[d].ricoverati_con_sintomi,r[g][u]=a.data.Regionale[d].terapia_intensiva,n[g][u]=a.data.Regionale[d].deceduti,i[g]={},i[g]=u+1}for(var s=0;s<a.regioni.length;s++){var b=a.regioni[s],p=[{label:"Ricoverati",data:e[b],backgroundColor:"transparent",borderColor:"rgba(255, 153, 0, 0.50)",pointBackgroundColor:"rgba(255, 51, 0, 1)"},{label:"Terapie Intensive",data:r[b],backgroundColor:"transparent",borderColor:"rgba(1, 116, 188, 0.50)",pointBackgroundColor:"rgba(171, 71, 188, 1)"},{label:"Deceduti",data:n[b],backgroundColor:"transparent",borderColor:"rgba(0, 153, 51, 0.50)",pointBackgroundColor:"rgba(0, 153, 153, 1)"}];t[b]={labels:o[b],datasets:p}}return t}function A(a){for(var t={},e=[],r=[],n=[],o=0;o<a.regioni.length;o++){var i=a.regioni[o];r[i]=[],e[i]=[],n[i]=0}for(var l=0;l<a.data.Regionale.length;l++){var c=a.data.Regionale[l].denominazione_regione,d=n[c];r[c][d]=Y(a.data.Regionale[l].data);var g=a.data.Regionale[l].terapia_intensiva;e[c][d]=g,n[c]={},n[c]=d+1}for(var u=0;u<a.regioni.length;u++){var s=a.regioni[u],b=[{label:"Terapie Intensive",data:e[s],backgroundColor:"transparent",borderColor:"rgba(255, 153, 0, 0.50)",pointBackgroundColor:"rgba(255, 51, 0, 1)"}];t[s]={labels:r[s],datasets:b}}return t}function M(a){for(var t=[],e={},r=[],n=[],o=[],i=[],l=0;l<a.provSelected.length;l++){var c=a.provSelected[l];r[c]=[],o[c]=0,t[l]=c}for(var d=!0,g=null,u=0,s=0;s<a.data.Provinciale.length;s++){var b=a.data.Provinciale[s].denominazione_provincia;if(1==t.includes(b)){1==d&&(g=b,d=!1),g==b&&(n[u]=Y(a.data.Provinciale[s].data),u++);var p=o[b],v=a.data.Provinciale[s].totale_casi;r[b][p]=v,o[b]={},o[b]=p+1}}for(var f=0;f<t.length;f++){var h=t[f],C=a.colorNoOpacity[f],m=a.colorWithOpacity[f];1==D["b"].is.mobile&&(C=a.colorNoOpacity[f],m=a.colorNoOpacity[f]),i[f]={label:h,data:r[h],backgroundColor:"transparent",borderColor:C,pointBackgroundColor:m}}return e={labels:n,datasets:i},e}function V(a){}function W(a){}function Y(a){var t=R["a"].extractDate(a,"YYYY-MM-DD");return R["a"].formatDate(t.getTime(),"D MMMM")}function $(a){return a.chartOptions}function q(a){return a.regioni}function J(a){return a.province}e("2fdb");function E(a,t){a.data[t.selection]=t.data;var e=0;if("Regionale"==t.selection)for(var r=0;r<a.data.Regionale.length;r++){var n=a.data.Regionale[r].denominazione_regione;0==a.regioni.includes(n)&&(a.regioni[e]=n,e+=1)}if("Provinciale"==t.selection)for(var o=[],i=0;i<a.data.Provinciale.length;i++){var l=a.data.Provinciale[i].denominazione_regione,c=a.data.Provinciale[i].denominazione_provincia;if(a.data.Provinciale[i].sigla_provincia.length>0&&(a.province[l]||(o[l]=0,a.province[l]=[]),0==a.province[l].includes(c))){var d=o[l];a.province[l][d]=c,d+=1,o[l]=d}}a.chartOptions["totale_positivi_tamponi"]={responsive:!0,maintainAspectRatio:!1,title:{text:"% Contagi per Tamponi",display:!0},legend:{position:"right",labels:{fontSize:8,padding:8,boxWidth:30}}},a.chartOptions["totale_positivi"]={responsive:!0,maintainAspectRatio:!1,title:{text:"Totale Attualmente Positivi",display:!0},legend:{position:"right",labels:{fontSize:8,padding:8,boxWidth:30}}}}function F(a,t){t.data&&(a.provSelected=[],a.provSelected=t.data)}function Q(a,t){var e=a.data[t.selection].length,r=a.data[t.selection];r[e]=t.data,g["a"].delete(a.data,t.selection),g["a"].set(a.data,t.selection,r)}var G=e("bc3a"),H=e.n(G);function K(a,t){var e=a.commit,r=a.state;return H.a.get(r.urls[t.data].url).then((function(a){e("getData",{selection:t.data,data:a.data})})).catch((function(a){}))}function L(a,t){var e=a.commit;e("setProvinceSelected",t)}function U(a,t){var e=a.commit,r={data:"2020-04-07T17:00:00",stato:"ITA",ricoverati_con_sintomi:101,terapia_intensiva:26,totale_ospedalizzati:127,isolamento_domiciliare:94,totale_positivi:221,variazione_totale_positivi:0,nuovi_positivi:221,dimessi_guariti:1,deceduti:7,totale_casi:229,tamponi:4324,note_it:"",note_en:""};e("addData",{selection:"Nazionale",data:r})}g["a"].prototype.$axios=H.a;var X={namespaced:!0,state:_,getters:r,mutations:n,actions:o};g["a"].use(z["a"]);var Z=function(){var a=new z["a"].Store({modules:{data:X},strict:!1});return a},aa=e("8c4f"),ta=[{path:"/",component:function(){return Promise.all([e.e(0),e.e(4)]).then(e.bind(null,"713b"))},children:[{path:"/",component:function(){return Promise.all([e.e(0),e.e(1)]).then(e.bind(null,"b0b6"))}},{path:"/nazionale",component:function(){return Promise.all([e.e(0),e.e(1)]).then(e.bind(null,"b0b6"))}},{path:"/regionale",component:function(){return Promise.all([e.e(0),e.e(6)]).then(e.bind(null,"9bf4"))}},{path:"/provinciale",component:function(){return Promise.all([e.e(0),e.e(5)]).then(e.bind(null,"4159"))}}]}];ta.push({path:"*",component:function(){return Promise.all([e.e(0),e.e(7)]).then(e.bind(null,"e51e"))}});var ea=ta;g["a"].use(aa["a"]);var ra=function(){var a=new aa["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:ea,mode:"hash",base:""});return a},na=function(){return oa.apply(this,arguments)};function oa(){return oa=d()(l.a.mark((function a(){var t,e,r;return l.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if("function"!==typeof Z){a.next=6;break}return a.next=3,Z({Vue:g["a"]});case 3:a.t0=a.sent,a.next=7;break;case 6:a.t0=Z;case 7:if(t=a.t0,"function"!==typeof ra){a.next=14;break}return a.next=11,ra({Vue:g["a"],store:t});case 11:a.t1=a.sent,a.next=15;break;case 14:a.t1=ra;case 15:return e=a.t1,t.$router=e,r={el:"#q-app",router:e,store:t,render:function(a){return a(k)}},a.abrupt("return",{app:r,store:t,router:e});case 19:case"end":return a.stop()}}),a)}))),oa.apply(this,arguments)}function ia(){return la.apply(this,arguments)}function la(){return la=d()(l.a.mark((function a(){var t,e,r,n,o,i,c,d,u;return l.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,na();case 2:t=a.sent,e=t.app,r=t.store,n=t.router,o=!0,i=function(a){o=!1,window.location.href=a},c=window.location.href.replace(window.location.origin,""),d=[void 0],u=0;case 11:if(!(!0===o&&u<d.length)){a.next=29;break}if("function"===typeof d[u]){a.next=14;break}return a.abrupt("continue",26);case 14:return a.prev=14,a.next=17,d[u]({app:e,router:n,store:r,Vue:g["a"],ssrContext:null,redirect:i,urlPath:c});case 17:a.next=26;break;case 19:if(a.prev=19,a.t0=a["catch"](14),!a.t0||!a.t0.url){a.next=24;break}return window.location.href=a.t0.url,a.abrupt("return");case 24:return console.error("[Quasar] boot error:",a.t0),a.abrupt("return");case 26:u++,a.next=11;break;case 29:if(!1!==o){a.next=31;break}return a.abrupt("return");case 31:new g["a"](e);case 32:case"end":return a.stop()}}),a,null,[[14,19]])}))),la.apply(this,arguments)}ia()},"31cd":function(a,t,e){}},[[0,3,0]]]);