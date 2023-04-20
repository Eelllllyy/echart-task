(function(){"use strict";var t={534:function(t,e,n){var r=n(963),i=n(252),a=n(577),l=n(262),u=n(655),s=n(876),c=n(154),o=(0,s.Q_)("api",{state:function(){return{newWells:[],currentYear:null,structure:[],description:{left:"",right:""},title:"",activeBar:0,activePie:0}},actions:{commissNewWells:function(){return(0,u.mG)(this,void 0,void 0,(function(){var t,e;return(0,u.Jh)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,c.Z.get("data/total/CommissNewWells_BarChart.json")];case 1:return t=n.sent(),this.newWells=t.data,this.title="Ввод новых скважин",this.currentYear=t.data.at(-1),[3,3];case 2:return e=n.sent(),console.error(e),[3,3];case 3:return[2]}}))}))},regionalStructure:function(){return(0,u.mG)(this,void 0,void 0,(function(){var t,e;return(0,u.Jh)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,c.Z.get("data/total/RegionalStructure_PieChart.json")];case 1:return t=n.sent(),this.structure=t.data,[3,3];case 2:return e=n.sent(),console.error(e),[3,3];case 3:return[2]}}))}))},commissNewWellsDescription:function(){return(0,u.mG)(this,void 0,void 0,(function(){var t,e;return(0,u.Jh)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,c.Z.get("data/total/CommissNewWells_BarChart_description.json")];case 1:return t=n.sent(),this.description.left=t.data.description.left,this.description.right=t.data.description.right,[3,3];case 2:return e=n.sent(),console.error(e),[3,3];case 3:return[2]}}))}))},wellStockDynamics:function(){return(0,u.mG)(this,void 0,void 0,(function(){var t,e;return(0,u.Jh)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,c.Z.get("data/fund/WellStockDynamics_BarChart.json")];case 1:return t=n.sent(),this.newWells=t.data,this.title="Динамика фонда скважин",this.currentYear=t.data.at(-1),[3,3];case 2:return e=n.sent(),console.error(e),[3,3];case 3:return[2]}}))}))},regionalStructureFund:function(){return(0,u.mG)(this,void 0,void 0,(function(){var t,e;return(0,u.Jh)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,c.Z.get("data/fund/RegionalStructure_PieChart.json")];case 1:return t=n.sent(),this.structure=t.data,[3,3];case 2:return e=n.sent(),console.error(e),[3,3];case 3:return[2]}}))}))},wellStockDescription:function(){return(0,u.mG)(this,void 0,void 0,(function(){var t,e;return(0,u.Jh)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,c.Z.get("data/fund/WellStockDynamics_BarChart_description.json")];case 1:return t=n.sent(),this.description.left=t.data.description.left,this.description.right=t.data.description.right,[3,3];case 2:return e=n.sent(),console.error(e),[3,3];case 3:return[2]}}))}))}}}),d=n(893),v=function(t){return(0,i.dD)("data-v-7da9e941"),t=t(),(0,i.Cn)(),t},f={class:"article-bar"},h={class:"bar-description"},p=v((function(){return(0,i._)("p",null,[(0,i.Uk)(" Изменение "),(0,i._)("br"),(0,i.Uk)(" к отчетному году ")],-1)})),_={class:"big-number"},b={class:"big-number"},w=v((function(){return(0,i._)("span",null,"мдрд куб.",-1)})),g=(0,i.aZ)({__name:"barWell",setup:function(t){var e,n=(0,l.iH)(),r=o(),u=(0,i.Fl)((function(){var t={title:{left:"6%",text:r.title,subtext:"СКВ."},xAxis:{type:"category",axisTick:{show:!1},data:r.newWells.map((function(t){return t.year}))},yAxis:{type:"value"},series:[{barWidth:22,itemStyle:{color:function(t){return t.dataIndex===r.newWells.length-1?"#EA3742":"#F3AE4D"}},label:{show:!0,position:"top"},data:r.newWells,selectedMode:"single",type:"bar"}]};return t}));(0,i.YP)(u,(function(){e.setOption(u.value)}));var s=(0,i.Fl)((function(){var t,e,n,i=((null===(t=r.currentYear)||void 0===t?void 0:t.value)-r.activeBar).toFixed(1),a=(100*r.activeBar/(null===(e=r.currentYear)||void 0===e?void 0:e.value)).toFixed(1);return r.activeBar===(null===(n=r.currentYear)||void 0===n?void 0:n.value)?[0,0]:r.activeBar?[i,a]:[0,0]}));return(0,i.bv)((function(){e=d.S1(n.value),e.setOption(u.value),e.resize({width:730}),e.on("click",(function(t){r.activeBar=t.data.value}))})),function(t,e){return(0,i.wg)(),(0,i.iD)("article",f,[(0,i._)("div",{class:"new-wells",ref_key:"newWellstRef",ref:n},null,512),(0,i._)("div",h,[p,(0,i._)("h1",_,(0,a.zw)((0,l.SU)(s)[1])+" %",1),(0,i._)("h1",b,(0,a.zw)((0,l.SU)(s)[0]),1),w])])}}}),m=n(744);const y=(0,m.Z)(g,[["__scopeId","data-v-7da9e941"]]);var k=y,D=function(t){return(0,i.dD)("data-v-114bf7a3"),t=t(),(0,i.Cn)(),t},S={class:"article-pie"},W={class:"pie-description"},C={class:"big-number"},j=D((function(){return(0,i._)("span",null,"п.п.",-1)})),O=(0,i.aZ)({__name:"pieStructure",setup:function(t){var e,n=(0,l.iH)(),r=o(),u=["#951B81","#EA3742","#F3AE4D"],s=(0,i.Fl)((function(){var t={title:{text:"Региональная структура",left:"0",top:"0"},legend:{orient:"vertical",left:"left",padding:[40,0],itemGap:17,itemWidth:32,itemHeight:47,itemStyle:{opacity:0,padding:[20],border:1,width:100}},series:[{name:"Access From",color:u,type:"pie",radius:["50%","70%"],label:{show:!1,position:"center",color:"rgba(255, 255, 255, 0)"},labelLine:{show:!1},data:r.structure}]};return t}));return(0,i.YP)(s,(function(){e.setOption(s.value)})),(0,i.bv)((function(){e=d.S1(n.value),e.setOption(s.value),e.on("click",(function(t){r.activePie=t.data.value}))})),function(t,e){return(0,i.wg)(),(0,i.iD)("article",S,[(0,i._)("div",{class:"regional-structure",ref_key:"structureRef",ref:n},null,512),(0,i._)("div",W,[(0,i._)("h1",C,(0,a.zw)((0,l.SU)(r).activePie)+" %",1),j])])}}});const x=(0,m.Z)(O,[["__scopeId","data-v-114bf7a3"]]);var Z=x,B=function(t){return(0,i.dD)("data-v-446ec680"),t=t(),(0,i.Cn)(),t},P={class:"main-nav"},Y={class:"main-nav-content"},F=B((function(){return(0,i._)("h3",{class:"title-nav"},"Основные тенденции и факторы",-1)})),U={class:"articles-nav"},z=B((function(){return(0,i._)("div",{class:"gray-line"},null,-1)})),H={class:"sub-li"},A=(0,i.aZ)({__name:"myNavbar",setup:function(t){var e={title:"Добыча",list:[{title:"Нефти и газового конденсата",subTitle:[{title:"Всего",url:"#"},{title:"ВИНК",url:"#"},{title:"Независимые производители",url:"#"},{title:"СРП",url:"#"}],url:"#"},{title:"В разрезе регионов страны",url:"#"},{title:"На новых месторождениях(гринфилдах)",url:"#"},{title:"На шельфе",url:"#"}]},n={title:"Технологические показатели",list:[{title:"Капитальные вложения ВИНК в нефтедобычу",url:"#"},{title:"Бурение",url:"#"},{title:"Ввод новых скважин",url:"#"},{title:"Закачка воды для поддержания пластового давления",url:"#"}]},r={title:"Экспорт",list:[{title:"Экспорт нефти из России",subTitle:[{title:"Всего",url:"#"},{title:"ВИНК",url:"#"},{title:"Независимые производители",url:"#"},{title:"СРП",url:"#"}],url:"#"},{title:"По направлениям",url:"#"},{title:"Основные транспортные коридоры экспорта нефти",url:"#"}]},u={title:"Развитие",list:[{title:"Магистральные нефтепроводы Российской Федерации",url:"#"},{title:"Проекты российских компаний за рубежом",url:"#"}]},s=(0,l.qj)([e,r,n,u]);return function(t,e){return(0,i.wg)(),(0,i.iD)("main",P,[(0,i._)("div",Y,[F,(0,i._)("div",U,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s,(function(t,e){return(0,i.wg)(),(0,i.iD)("article",{class:"one-article",key:e},[(0,i._)("h3",null,(0,a.zw)(t.title),1),z,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.list,(function(t){return(0,i.wg)(),(0,i.iD)("ul",null,[(0,i._)("li",null,[(0,i.Uk)((0,a.zw)(t.title)+" ",1),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.subTitle,(function(t){return(0,i.wg)(),(0,i.iD)("ul",null,[(0,i._)("li",H,(0,a.zw)(null===t||void 0===t?void 0:t.title),1)])})),256))])])})),256))])})),128))])])])}}});const T=(0,m.Z)(A,[["__scopeId","data-v-446ec680"]]);var G=T;const N=t=>((0,i.dD)("data-v-01e018e9"),t=t(),(0,i.Cn)(),t),I={class:"footer-section"},J=N((()=>(0,i._)("div",{class:"footer-content"},[(0,i._)("div",null,[(0,i._)("h1",null,"ТЭК России"),(0,i._)("p",{class:"text-thin"},"Функционирование и развитие")]),(0,i._)("div",{class:"subblock-footer"},[(0,i._)("span",null,[(0,i.Uk)("Дизайн "),(0,i._)("br"),(0,i.Uk)(" и разработка")]),(0,i._)("div",{class:"line-gray-footer"}),(0,i._)("span",null,[(0,i.Uk)("ЦДУ "),(0,i._)("br"),(0,i._)("b",null,"ТЭК")])])],-1))),E=[J];function R(t,e){return(0,i.wg)(),(0,i.iD)("section",I,E)}const K={},M=(0,m.Z)(K,[["render",R],["__scopeId","data-v-01e018e9"]]);var q=M,L=function(t){return(0,i.dD)("data-v-1f4a5c48"),t=t(),(0,i.Cn)(),t},Q={class:"header"},V={class:"header-content"},X={class:"header-title"},$=L((function(){return(0,i._)("h1",null,"НЕФТЯННАЯ ПРОМЫШЛЕННОСТЬ",-1)})),tt=L((function(){return(0,i._)("div",{class:"header-dowload"},[(0,i._)("div",{class:"icon-dowload"}),(0,i._)("button",{class:"btn-dowload btn"},"Скачать отчет")],-1)})),et={key:0},nt={class:"main"},rt={class:"main-content"},it={class:"section"},at=L((function(){return(0,i._)("h2",{class:"title-page"},"ВВОД НОВЫХ СКВАЖИН",-1)})),lt={class:"btn-common-block"},ut={class:"description"},st={class:"text-left"},ct=L((function(){return(0,i._)("div",{class:"line-gray-vertical"},null,-1)})),ot=(0,i.aZ)({__name:"newWells",setup:function(t){var e=o(),n=(0,l.iH)(!1),r=(0,l.iH)(!1),u=function(){e.commissNewWells(),e.commissNewWellsDescription(),e.regionalStructure(),r.value=!r.value,e.activeBar=0,e.activePie=0},s=function(){e.wellStockDynamics(),e.regionalStructureFund(),e.wellStockDescription(),r.value=!r.value,e.activeBar=0,e.activePie=0};return(0,i.bv)((function(){u()})),function(t,c){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("header",Q,[(0,i._)("div",V,[(0,i._)("div",X,[$,(0,i._)("button",{onClick:c[0]||(c[0]=function(t){return n.value=!n.value}),class:(0,a.C_)([[n.value?"close-navbar":"open-navbar"],"btn"])},null,2)]),tt])]),n.value?((0,i.wg)(),(0,i.iD)("div",et,[(0,i.Wm)(G)])):(0,i.kq)("",!0),(0,i._)("main",nt,[(0,i._)("div",rt,[(0,i._)("section",it,[at,(0,i._)("div",lt,[(0,i._)("button",{class:(0,a.C_)(["btn-static",[r.value?"active":"inactive"]]),onClick:c[1]||(c[1]=function(t){return u()})},"Всего",2),(0,i._)("button",{class:(0,a.C_)(["btn-static",[r.value?"inactive":"active"]]),onClick:c[2]||(c[2]=function(t){return s()})},"Фонд эксплуатации скважин",2)]),(0,i.Wm)(k),(0,i._)("div",ut,[(0,i._)("div",st,(0,a.zw)((0,l.SU)(e).description.left),1),ct,(0,i._)("h1",null,(0,a.zw)((0,l.SU)(e).description.right),1)]),(0,i.Wm)(Z)])])]),(0,i.Wm)(q)],64)}}});const dt=(0,m.Z)(ot,[["__scopeId","data-v-1f4a5c48"]]);var vt=dt,ft=(0,i.aZ)({__name:"App",setup:function(t){return function(t,e){return(0,i.wg)(),(0,i.j4)(vt)}}});const ht=ft;var pt=ht,_t=(0,s.WB)(),bt=(0,r.ri)(pt);bt.use(_t),bt.mount("#app")}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,a){if(!r){var l=1/0;for(o=0;o<t.length;o++){r=t[o][0],i=t[o][1],a=t[o][2];for(var u=!0,s=0;s<r.length;s++)(!1&a||l>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[s])}))?r.splice(s--,1):(u=!1,a<l&&(l=a));if(u){t.splice(o--,1);var c=i();void 0!==c&&(e=c)}}return e}a=a||0;for(var o=t.length;o>0&&t[o-1][2]>a;o--)t[o]=t[o-1];t[o]=[r,i,a]}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,a,l=r[0],u=r[1],s=r[2],c=0;if(l.some((function(e){return 0!==t[e]}))){for(i in u)n.o(u,i)&&(n.m[i]=u[i]);if(s)var o=s(n)}for(e&&e(r);c<l.length;c++)a=l[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(o)},r=self["webpackChunkproject"]=self["webpackChunkproject"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(534)}));r=n.O(r)})();
//# sourceMappingURL=app.2a863a31.js.map