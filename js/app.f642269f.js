(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{0:function(a,t,e){a.exports=e("2f39")},"2f39":function(a,t,e){"use strict";e.r(t);var o={};e.r(o),e.d(o,"getDataSetContagiTamponi",(function(){return R})),e.d(o,"getDataSetTotaleCasiTamponi",(function(){return S})),e.d(o,"getDataSetCrescitaDecessi",(function(){return _})),e.d(o,"getDataSetOspedalizzati",(function(){return P})),e.d(o,"getDataSetTerapiaIntensiva",(function(){return x})),e.d(o,"getDataSetTotalePositivi",(function(){return D})),e.d(o,"getDataSetNuoviDeceduti",(function(){return T})),e.d(o,"getDataSetRegContagiTamponi",(function(){return w})),e.d(o,"getDataSetRegTotalePositivi",(function(){return B})),e.d(o,"getDataSetRegTotaleCasiTamponi",(function(){return W})),e.d(o,"getDataSetRegCrescitaDecessi",(function(){return A})),e.d(o,"getDataSetRegOspedalizzati",(function(){return I})),e.d(o,"getDataSetRegTerapiaIntensiva",(function(){return j})),e.d(o,"getDataSetProvCasiTotali",(function(){return M})),e.d(o,"getDataSetProvNuoviCasi",(function(){return V})),e.d(o,"getDataSetProvCrescitaCasi",(function(){return Y})),e.d(o,"extractDateFromat",(function(){return $})),e.d(o,"getChartOptions",(function(){return q})),e.d(o,"getRegioni",(function(){return J})),e.d(o,"getProvince",(function(){return E}));var r={};e.r(r),e.d(r,"getData",(function(){return F})),e.d(r,"setRegioniSelected",(function(){return L})),e.d(r,"setProvinceSelected",(function(){return Q})),e.d(r,"addData",(function(){return G}));var n={};e.r(n),e.d(n,"getData",(function(){return U})),e.d(n,"setRegioniSelected",(function(){return X})),e.d(n,"setProvinceSelected",(function(){return Z})),e.d(n,"addData",(function(){return aa}));var i=e("967e"),l=e.n(i),c=(e("a481"),e("96cf"),e("fa84")),d=e.n(c),s=(e("7d6e"),e("e54f"),e("985d"),e("31cd"),e("2b0e")),u=e("1f91"),p=e("42d2"),g=e("b05d");s["a"].use(g["a"],{config:{},lang:u["a"],iconSet:p["a"]});var v=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"q-app"}},[e("router-view")],1)},b=[],f={name:"App",mounted:function(){this.$router.replace("/nazionale")}},h=f,m=e("2877"),C=Object(m["a"])(h,v,b,!1,null,null,null),N=C.exports,O=e("2f62"),y=function(){return{data:{},regSelected:[],regioni:[],provSelected:[],province:{},colorNoOpacity:["rgba(1, 116, 188, 0.50)","rgba(255, 153, 0, 0.50)","rgba(0, 153, 51, 0.50)","rgba(255,101,80,0.50)","rgba(156,101,80,0.50)","rgba(29,101,80,0.50)","rgba(7,213,80,0.50)","rgba(7,51,80,0.50)","rgba(0,0,0,0.50)","rgba(0,0,89,0.50)","rgba(0,0,179,0.50)","rgba(0,0,255,0.50)","rgba(0,255,255,0.50)","rgba(0,114,135,0.50)","rgba(113,0,121,0.50)","rgba(224,0,121,0.50)","rgba(64,4,80,0.50)","rgba(64,76,0,0.50)","rgba(154,76,0,0.50)","rgba(255,195,0,0.50)","rgba(255,255,0,0.50)","rgba(255,67,0,0.50)","rgba(178,67,0,0.50)","rgba(178,175,0,0.50)"],colorWithOpacity:["rgba(1, 116, 188, 1)","rgba(255, 153, 0, 1)","rgba(0, 153, 51, 1)","rgba(255,101,80,1)","rgba(156,101,80,1)","rgba(29,101,80,1)","rgba(7,213,80,1)","rgba(7,51,80,1)","rgba(0,0,0,1)","rgba(0,0,89,1)","rgba(0,0,179,1)","rgba(0,0,255,1)","rgba(0,255,255,1)","rgba(0,114,135,1)","rgba(113,0,121,1)","rgba(224,0,121,1)","rgba(64,4,80,1)","rgba(64,76,0,1)","rgba(154,76,0,1)","rgba(255,195,0,1)","rgba(255,255,0,1)","rgba(255,67,0,1)","rgba(178,67,0,1)","rgba(178,175,0,1)"],urls:{Nazionale:{url:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json"},Regionale:{url:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json"},Provinciale:{url:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province.json"}},chartOptions:{}}},z=(e("6762"),e("bd4c")),k=e("0967");function R(a){for(var t={},e=[],o=[],r=0;r<a.data.Nazionale.length;r++){o[r]=$(a.data.Nazionale[r].data);var n=a.data.Nazionale[r].totale_positivi/a.data.Nazionale[r].tamponi*100;e[r]=n}var i=[{label:"% Contagi per Tamponi",data:e,backgroundColor:"transparent",borderColor:"rgba(1, 116, 188, 0.50)",pointBackgroundColor:"rgba(1, 116, 188, 1)"}];return t={labels:o,datasets:i},t}function S(a){for(var t={},e=[],o=[],r=[],n=0;n<a.data.Nazionale.length;n++)e[n]=$(a.data.Nazionale[n].data),o[n]=a.data.Nazionale[n].totale_casi,r[n]=a.data.Nazionale[n].tamponi;var i=[{label:"Contagi Totali",data:o,backgroundColor:"transparent",borderColor:"rgba(255, 153, 0, 0.50)",pointBackgroundColor:"rgba(255, 153, 0, 1)"},{label:"Tamponi Totali",data:r,backgroundColor:"transparent",borderColor:"rgba(1, 116, 188, 0.50)",pointBackgroundColor:"rgba(1, 116, 188, 1)"}];return t={labels:e,datasets:i},t}function _(a){for(var t={},e=[],o=[],r=0;r<a.data.Nazionale.length;r++)if(e[r]=$(a.data.Nazionale[r].data),0==r)o[r]=0;else{var n=a.data.Nazionale[r-1].deceduti,i=a.data.Nazionale[r].deceduti,l=i-n,c=0;0!=l&&(c=100*l/i),o[r]=c}var d=[{label:"Crescita Decessi",data:o,backgroundColor:"transparent",borderColor:"rgba(1, 116, 188, 0.50)",pointBackgroundColor:"rgba(1, 116, 188, 1)"}];return t={labels:e,datasets:d},t}function P(a){for(var t={},e=[],o=[],r=[],n=[],i=0;i<a.data.Nazionale.length;i++)e[i]=$(a.data.Nazionale[i].data),o[i]=a.data.Nazionale[i].ricoverati_con_sintomi,r[i]=a.data.Nazionale[i].terapia_intensiva,n[i]=a.data.Nazionale[i].deceduti;var l=[{label:"Ricoverati",data:o,backgroundColor:"transparent",borderColor:"rgba(255, 153, 0, 0.50)",pointBackgroundColor:"rgba(255, 153, 0, 1)"},{label:"Terapie Intensive",data:r,backgroundColor:"transparent",borderColor:"rgba(1, 116, 188, 0.50)",pointBackgroundColor:"rgba(1, 116, 188, 1)"},{label:"Deceduti",data:n,backgroundColor:"transparent",borderColor:"rgba(0, 153, 51, 0.50)",pointBackgroundColor:"rgba(0, 153, 51, 1)"}];return t={labels:e,datasets:l},t}function x(a){for(var t={},e=[],o=[],r=0;r<a.data.Nazionale.length;r++)e[r]=$(a.data.Nazionale[r].data),o[r]=a.data.Nazionale[r].terapia_intensiva;var n=[{label:"Terapie Intensive",data:o,backgroundColor:"transparent",borderColor:"rgba(1, 116, 188, 0.50)",pointBackgroundColor:"rgba(1, 116, 188, 1)"}];return t={labels:e,datasets:n},t}function D(a){for(var t={},e=[],o=[],r=0;r<a.data.Nazionale.length;r++)e[r]=$(a.data.Nazionale[r].data),o[r]=a.data.Nazionale[r].totale_positivi;var n=[{label:"Totale Attualmente Positivi",data:o,backgroundColor:"transparent",borderColor:"rgba(1, 116, 188, 0.50)",pointBackgroundColor:"rgba(1, 116, 188, 1)"}];return t={labels:e,datasets:n},t}function T(a){for(var t={},e=[],o=[],r=0;r<a.data.Nazionale.length;r++){o[r]=$(a.data.Nazionale[r].data);var n=a.data.Nazionale[r].deceduti;r>0&&(n=a.data.Nazionale[r].deceduti-a.data.Nazionale[r-1].deceduti),e[r]=n}var i=[{label:"Nuovi deceduti",data:e,backgroundColor:"transparent",borderColor:"rgba(1, 116, 188, 0.50)",pointBackgroundColor:"rgba(1, 116, 188, 1)"}];return t={labels:o,datasets:i},t}function w(a){for(var t={},e=[],o=[],r=[],n=[],i=[],l=0;l<a.regSelected.length;l++){var c=a.regSelected[l];e[c]=[],n[c]=0,i[l]=c}for(var d=!0,s=null,u=0,p=0;p<a.data.Regionale.length;p++){var g=a.data.Regionale[p].denominazione_regione;if(1==i.includes(g)){1==d&&(s=g,d=!1),s==g&&(r[u]=$(a.data.Regionale[p].data),u++);var v=n[g],b=a.data.Regionale[p].totale_positivi/a.data.Regionale[p].tamponi*100;e[g][v]=b,n[g]={},n[g]=v+1}}for(var f=0;f<i.length;f++){var h=i[f],m=a.colorNoOpacity[f],C=a.colorWithOpacity[f];1==k["b"].is.mobile&&(m=a.colorNoOpacity[f],C=a.colorNoOpacity[f]),o[f]={label:h,data:e[h],backgroundColor:"transparent",borderColor:m,pointBackgroundColor:C}}t={labels:r,datasets:o};var N={responsive:!0,maintainAspectRatio:!1,title:{text:"% Contagi per Tamponi",display:!0},legend:{position:"right",labels:{fontSize:8,padding:8,boxWidth:30}}},O={chartdata:t,chartOptions:N};return O}function B(a){for(var t={},e=[],o=[],r=[],n=[],i=[],l=0;l<a.regSelected.length;l++){var c=a.regSelected[l];e[c]=[],n[c]=0,i[l]=c}for(var d=!0,s=null,u=0,p=0;p<a.data.Regionale.length;p++){var g=a.data.Regionale[p].denominazione_regione;if(1==i.includes(g)){1==d&&(s=g,d=!1),s==g&&(r[u]=$(a.data.Regionale[p].data),u++);var v=n[g],b=a.data.Regionale[p].totale_positivi;e[g][v]=b,n[g]={},n[g]=v+1}}for(var f=0;f<i.length;f++){var h=i[f],m=a.colorNoOpacity[f],C=a.colorWithOpacity[f];1==k["b"].is.mobile&&(m=a.colorNoOpacity[f],C=a.colorNoOpacity[f]),o[f]={label:h,data:e[h],backgroundColor:"transparent",borderColor:m,pointBackgroundColor:C}}t={labels:r,datasets:o};var N={responsive:!0,maintainAspectRatio:!1,title:{text:"Totale Attualmente Positivi",display:!0},legend:{position:"right",labels:{fontSize:8,padding:8,boxWidth:30}}},O={chartdata:t,chartOptions:N};return O}function W(a){for(var t={},e=[],o=[],r=[],n=[],i=[],l=[],c=0;c<a.regSelected.length;c++){var d=a.regSelected[c];e[d]=[],o[d]=[],i[d]=0,l[c]=d}for(var s=!0,u=null,p=0,g=0;g<a.data.Regionale.length;g++){var v=a.data.Regionale[g].denominazione_regione;if(1==l.includes(v)){1==s&&(u=v,s=!1),u==v&&(n[p]=$(a.data.Regionale[g].data),p++);var b=i[v];e[v][b]=a.data.Regionale[g].totale_casi,o[v][b]=a.data.Regionale[g].tamponi,i[v]={},i[v]=b+1}}for(var f=0;f<l.length;f++){var h=l[f],m=a.colorNoOpacity[f],C=a.colorWithOpacity[f],N=a.colorNoOpacity[f+1],O=a.colorWithOpacity[f+1];1==k["b"].is.mobile&&(m=a.colorNoOpacity[f],C=a.colorNoOpacity[f],N=a.colorNoOpacity[f+1],O=a.colorNoOpacity[f+1]),r[f]={label:"Contagi Totali",data:e[h],backgroundColor:"transparent",borderColor:m,pointBackgroundColor:C},r[f+1]={label:"Tamponi Totali",data:o[h],backgroundColor:"transparent",borderColor:N,pointBackgroundColor:O}}t={labels:n,datasets:r};var y={responsive:!0,maintainAspectRatio:!1},z={chartdata:t,chartOptions:y};return z}function A(a){for(var t={},e=[],o=[],r=[],n=[],i=[],l=[],c=0;c<a.regSelected.length;c++){var d=a.regSelected[c];e[d]=[],i[d]=0,l[c]=d,r[d]=[]}for(var s=!0,u=null,p=0,g=0;g<a.data.Regionale.length;g++){var v=a.data.Regionale[g].denominazione_regione;if(1==l.includes(v)){1==s&&(u=v,s=!1),u==v&&(n[p]=$(a.data.Regionale[g].data),p++);var b=i[v];r[v][b]=a.data.Regionale[g].deceduti;var f=r[v][b];if(0==b)e[v][b]=0;else{var h=r[v][b-1],m=f-h,C=0;C=0==m?0:100*m/f,e[v][b]=C}i[v]={},i[v]=b+1}}for(var N=0;N<l.length;N++){var O=l[N],y=a.colorNoOpacity[N],z=a.colorWithOpacity[N];1==k["b"].is.mobile&&(y=a.colorNoOpacity[N],z=a.colorNoOpacity[N]),o[N]={label:"Crescita Decessi",data:e[O],backgroundColor:"transparent",borderColor:y,pointBackgroundColor:z}}t={labels:n,datasets:o};var R={responsive:!0,maintainAspectRatio:!1},S={chartdata:t,chartOptions:R};return S}function I(a){for(var t={},e=[],o=[],r=[],n=[],i=[],l=[],c=[],d=0;d<a.regSelected.length;d++){var s=a.regSelected[d];e[s]=[],o[s]=[],r[s]=[],l[s]=0,c[d]=s}for(var u=!0,p=null,g=0,v=0;v<a.data.Regionale.length;v++){var b=a.data.Regionale[v].denominazione_regione;if(1==c.includes(b)){1==u&&(p=b,u=!1),p==b&&(i[g]=$(a.data.Regionale[v].data),g++);var f=l[b];e[b][f]=a.data.Regionale[v].ricoverati_con_sintomi,o[b][f]=a.data.Regionale[v].terapia_intensiva,r[b][f]=a.data.Regionale[v].deceduti,l[b]={},l[b]=f+1}}for(var h=0;h<c.length;h++){var m=c[h],C=a.colorNoOpacity[h],N=a.colorWithOpacity[h],O=a.colorNoOpacity[h+1],y=a.colorWithOpacity[h+1],z=a.colorNoOpacity[h+2],R=a.colorWithOpacity[h+2];1==k["b"].is.mobile&&(C=a.colorNoOpacity[h],N=a.colorNoOpacity[h],O=a.colorNoOpacity[h+1],y=a.colorNoOpacity[h+1],z=a.colorNoOpacity[h+2],R=a.colorNoOpacity[h+2]),n[h]={label:"Ricoverati",data:e[m],backgroundColor:"transparent",borderColor:C,pointBackgroundColor:N},n[h+1]={label:"Terapie Intensive",data:o[m],backgroundColor:"transparent",borderColor:O,pointBackgroundColor:y},n[h+2]={label:"Deceduti",data:r[m],backgroundColor:"transparent",borderColor:z,pointBackgroundColor:R}}t={labels:i,datasets:n};var S={responsive:!0,maintainAspectRatio:!1},_={chartdata:t,chartOptions:S};return _}function j(a){for(var t={},e=[],o=[],r=[],n=[],i=[],l=0;l<a.regSelected.length;l++){var c=a.regSelected[l];e[c]=[],n[c]=0,i[l]=c}for(var d=!0,s=null,u=0,p=0;p<a.data.Regionale.length;p++){var g=a.data.Regionale[p].denominazione_regione;if(1==i.includes(g)){1==d&&(s=g,d=!1),s==g&&(r[u]=$(a.data.Regionale[p].data),u++);var v=n[g];e[g][v]=a.data.Regionale[p].terapia_intensiva,n[g]={},n[g]=v+1}}for(var b=0;b<i.length;b++){var f=i[b],h=a.colorNoOpacity[b],m=a.colorWithOpacity[b];1==k["b"].is.mobile&&(h=a.colorNoOpacity[b],m=a.colorNoOpacity[b]),o[b]={label:"Terapie Intensive",data:e[f],backgroundColor:"transparent",borderColor:h,pointBackgroundColor:m}}t={labels:r,datasets:o};var C={responsive:!0,maintainAspectRatio:!1},N={chartdata:t,chartOptions:C};return N}function M(a){for(var t=[],e={},o=[],r=[],n=[],i=[],l=0;l<a.provSelected.length;l++){var c=a.provSelected[l];o[c]=[],n[c]=0,t[l]=c}for(var d=!0,s=null,u=0,p=0;p<a.data.Provinciale.length;p++){var g=a.data.Provinciale[p].denominazione_provincia;if(1==t.includes(g)){1==d&&(s=g,d=!1),s==g&&(r[u]=$(a.data.Provinciale[p].data),u++);var v=n[g],b=a.data.Provinciale[p].totale_casi;o[g][v]=b,n[g]={},n[g]=v+1}}for(var f=0;f<t.length;f++){var h=t[f],m=a.colorNoOpacity[f],C=a.colorWithOpacity[f];1==k["b"].is.mobile&&(m=a.colorNoOpacity[f],C=a.colorNoOpacity[f]),i[f]={label:h,data:o[h],backgroundColor:"transparent",borderColor:m,pointBackgroundColor:C}}e={labels:r,datasets:i};var N={responsive:!0,maintainAspectRatio:!1,title:{text:"Casi Totali",display:!0},legend:{position:"right",labels:{fontSize:8,padding:8,boxWidth:30}}},O={chartdata:e,chartOptions:N};return O}function V(a){for(var t=[],e={},o=[],r=[],n=[],i=[],l=[],c=0;c<a.provSelected.length;c++){var d=a.provSelected[c];o[d]=[],r[d]=[],i[d]=0,t[c]=d}for(var s=!0,u=null,p=0,g=0;g<a.data.Provinciale.length;g++){var v=a.data.Provinciale[g].denominazione_provincia;if(1==t.includes(v)){1==s&&(u=v,s=!1),u==v&&(n[p]=$(a.data.Provinciale[g].data),p++);var b=i[v],f=a.data.Provinciale[g].totale_casi;if(b>0&&f>0){var h=r[v][b-1],m=a.data.Provinciale[g].totale_casi;f=m-h>0?Math.log(m-h):0}o[v][b]=f,r[v][b]=a.data.Provinciale[g].totale_casi,i[v]={},i[v]=b+1}}for(var C=0;C<t.length;C++){var N=t[C],O=a.colorNoOpacity[C],y=a.colorWithOpacity[C];1==k["b"].is.mobile&&(O=a.colorNoOpacity[C],y=a.colorNoOpacity[C]),l[C]={label:N,data:o[N],backgroundColor:"transparent",borderColor:O,pointBackgroundColor:y}}e={labels:n,datasets:l};var z={responsive:!0,maintainAspectRatio:!1,title:{text:"LN(Nuovi Casi)",display:!0},legend:{position:"right",labels:{fontSize:8,padding:8,boxWidth:30}}},R={chartdata:e,chartOptions:z};return R}function Y(a){for(var t=[],e={},o=[],r=[],n=[],i=[],l=[],c=0;c<a.provSelected.length;c++){var d=a.provSelected[c];o[d]=[],r[d]=[],i[d]=0,t[c]=d}for(var s=!0,u=null,p=0,g=0;g<a.data.Provinciale.length;g++){var v=a.data.Provinciale[g].denominazione_provincia;if(1==t.includes(v)){1==s&&(u=v,s=!1),u==v&&(n[p]=$(a.data.Provinciale[g].data),p++);var b=i[v],f=a.data.Provinciale[g].totale_casi;if(b>0&&f>0){var h=r[v][b-1],m=a.data.Provinciale[g].totale_casi;f=h>0?(m-h)/h*100:0}o[v][b]=f,r[v][b]=a.data.Provinciale[g].totale_casi,i[v]={},i[v]=b+1}}for(var C=0;C<t.length;C++){var N=t[C],O=a.colorNoOpacity[C],y=a.colorWithOpacity[C];1==k["b"].is.mobile&&(O=a.colorNoOpacity[C],y=a.colorNoOpacity[C]),l[C]={label:N,data:o[N],backgroundColor:"transparent",borderColor:O,pointBackgroundColor:y}}e={labels:n,datasets:l};var z={responsive:!0,maintainAspectRatio:!1,title:{text:"Crescita percentuale casi rispetto a giorno precedente",display:!0},legend:{position:"right",labels:{fontSize:8,padding:8,boxWidth:30}}},R={chartdata:e,chartOptions:z};return R}function $(a){var t=z["a"].extractDate(a,"YYYY-MM-DD");return z["a"].formatDate(t.getTime(),"D MMMM")}function q(a){return a.chartOptions}function J(a){return a.regioni}function E(a){return a.province}e("2fdb");function F(a,t){a.data[t.selection]=t.data;var e=0;if("Regionale"==t.selection)for(var o=0;o<a.data.Regionale.length;o++){var r=a.data.Regionale[o].denominazione_regione;0==a.regioni.includes(r)&&(a.regioni[e]=r,e+=1)}if("Provinciale"==t.selection)for(var n=[],i=0;i<a.data.Provinciale.length;i++){var l=a.data.Provinciale[i].denominazione_regione,c=a.data.Provinciale[i].denominazione_provincia;if(a.data.Provinciale[i].sigla_provincia.length>0&&(a.province[l]||(n[l]=0,a.province[l]=[]),0==a.province[l].includes(c))){var d=n[l];a.province[l][d]=c,d+=1,n[l]=d}}a.chartOptions["totale_positivi_tamponi"]={responsive:!0,maintainAspectRatio:!1,title:{text:"% Contagi per Tamponi",display:!0},legend:{position:"right",labels:{fontSize:8,padding:8,boxWidth:30}}},a.chartOptions["totale_positivi"]={responsive:!0,maintainAspectRatio:!1,title:{text:"Totale Attualmente Positivi",display:!0},legend:{position:"right",labels:{fontSize:8,padding:8,boxWidth:30}}},a.chartOptions["totale_casi"]={responsive:!0,maintainAspectRatio:!1,title:{text:"Totale Casi",display:!0}}}function L(a,t){t.data&&(a.regSelected=[],a.regSelected=t.data)}function Q(a,t){t.data&&(a.provSelected=[],a.provSelected=t.data)}function G(a,t){var e=a.data[t.selection].length,o=a.data[t.selection];o[e]=t.data,s["a"].delete(a.data,t.selection),s["a"].set(a.data,t.selection,o)}var H=e("bc3a"),K=e.n(H);function U(a,t){var e=a.commit,o=a.state;return K.a.get(o.urls[t.data].url).then((function(a){e("getData",{selection:t.data,data:a.data})})).catch((function(a){}))}function X(a,t){var e=a.commit;e("setRegioniSelected",t)}function Z(a,t){var e=a.commit;e("setProvinceSelected",t)}function aa(a,t){var e=a.commit,o={data:"2020-04-07T17:00:00",stato:"ITA",ricoverati_con_sintomi:101,terapia_intensiva:26,totale_ospedalizzati:127,isolamento_domiciliare:94,totale_positivi:221,variazione_totale_positivi:0,nuovi_positivi:221,dimessi_guariti:1,deceduti:7,totale_casi:229,tamponi:4324,note_it:"",note_en:""};e("addData",{selection:"Nazionale",data:o})}s["a"].prototype.$axios=K.a;var ta={namespaced:!0,state:y,getters:o,mutations:r,actions:n};s["a"].use(O["a"]);var ea=function(){var a=new O["a"].Store({modules:{data:ta},strict:!1});return a},oa=e("8c4f"),ra=[{path:"/",component:function(){return Promise.all([e.e(0),e.e(4)]).then(e.bind(null,"713b"))},children:[{path:"/",component:function(){return Promise.all([e.e(0),e.e(1)]).then(e.bind(null,"b0b6"))}},{path:"/nazionale",component:function(){return Promise.all([e.e(0),e.e(1)]).then(e.bind(null,"b0b6"))}},{path:"/regionale",component:function(){return Promise.all([e.e(0),e.e(7)]).then(e.bind(null,"9bf4"))}},{path:"/panoramicaregionale",component:function(){return Promise.all([e.e(0),e.e(5)]).then(e.bind(null,"a922"))}},{path:"/provinciale",component:function(){return Promise.all([e.e(0),e.e(6)]).then(e.bind(null,"4159"))}}]}];ra.push({path:"*",component:function(){return Promise.all([e.e(0),e.e(8)]).then(e.bind(null,"e51e"))}});var na=ra;s["a"].use(oa["a"]);var ia=function(){var a=new oa["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:na,mode:"hash",base:""});return a},la=function(){return ca.apply(this,arguments)};function ca(){return ca=d()(l.a.mark((function a(){var t,e,o;return l.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if("function"!==typeof ea){a.next=6;break}return a.next=3,ea({Vue:s["a"]});case 3:a.t0=a.sent,a.next=7;break;case 6:a.t0=ea;case 7:if(t=a.t0,"function"!==typeof ia){a.next=14;break}return a.next=11,ia({Vue:s["a"],store:t});case 11:a.t1=a.sent,a.next=15;break;case 14:a.t1=ia;case 15:return e=a.t1,t.$router=e,o={el:"#q-app",router:e,store:t,render:function(a){return a(N)}},a.abrupt("return",{app:o,store:t,router:e});case 19:case"end":return a.stop()}}),a)}))),ca.apply(this,arguments)}function da(){return sa.apply(this,arguments)}function sa(){return sa=d()(l.a.mark((function a(){var t,e,o,r,n,i,c,d,u;return l.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,la();case 2:t=a.sent,e=t.app,o=t.store,r=t.router,n=!0,i=function(a){n=!1,window.location.href=a},c=window.location.href.replace(window.location.origin,""),d=[void 0],u=0;case 11:if(!(!0===n&&u<d.length)){a.next=29;break}if("function"===typeof d[u]){a.next=14;break}return a.abrupt("continue",26);case 14:return a.prev=14,a.next=17,d[u]({app:e,router:r,store:o,Vue:s["a"],ssrContext:null,redirect:i,urlPath:c});case 17:a.next=26;break;case 19:if(a.prev=19,a.t0=a["catch"](14),!a.t0||!a.t0.url){a.next=24;break}return window.location.href=a.t0.url,a.abrupt("return");case 24:return console.error("[Quasar] boot error:",a.t0),a.abrupt("return");case 26:u++,a.next=11;break;case 29:if(!1!==n){a.next=31;break}return a.abrupt("return");case 31:new s["a"](e);case 32:case"end":return a.stop()}}),a,null,[[14,19]])}))),sa.apply(this,arguments)}da()},"31cd":function(a,t,e){}},[[0,3,0]]]);