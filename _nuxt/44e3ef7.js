(window.webpackJsonp=window.webpackJsonp||[]).push([[109,58,64],{380:function(t,e,n){var content=n(390);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("d3c7a3be",content,!0,{sourceMap:!1})},381:function(t,e,n){var content=n(392);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("c3e415e2",content,!0,{sourceMap:!1})},382:function(t,e,n){var content=n(396);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("bc739952",content,!0,{sourceMap:!1})},383:function(t,e,n){var content=n(405);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("7cf19f2f",content,!0,{sourceMap:!1})},384:function(t,e,n){var content=n(407);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("8ce8012e",content,!0,{sourceMap:!1})},385:function(t,e,n){var content=n(409);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("2bf24da6",content,!0,{sourceMap:!1})},386:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return l}));n(271),n(93);function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t<0?function(t){return null==t?void 0:t.toFixed(0)}:t>20?function(t){return null==t?void 0:t.toFixed(20)}:function(e){return null==e?void 0:e.toFixed(t)}}function o(){return function(t){return null==t?void 0:t.toLocaleString()}}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(e){return Number(r(t)(e)).toLocaleString("en",{minimumFractionDigits:t})}}},388:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(85),l=n(393),d=n(394),c=n(131),f=r.default.extend({components:{ExpantionPanel:l.default,Share:d.default,AppLink:o.default},props:{title:{type:String,default:""},titleId:{type:String,default:""},date:{type:String,default:""},headTitle:{type:String,default:""}},head:function(){return this.$route.params.card?{title:this.headTitle?this.headTitle:this.title,meta:[{hid:"og:title",property:"og:title",content:this.headTitle?this.headTitle:this.title},{hid:"description",name:"description",content:this.formattedDateForDisplay},{hid:"og:description",property:"og:description",content:this.formattedDateForDisplay}]}:{}},computed:{formattedDate:function(){return Object(c.c)(this.date)},formattedDateForDisplay:function(){return""!==this.date?this.$d(new Date(this.date),"dateTime"):""},permalink:function(){var t="/cards/".concat(this.titleId);return this.localePath(t)}}}),h=(n(395),n(12)),y=n(63),m=n.n(y),v=n(919),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"DataView"},[n("div",{staticClass:"DataView-Inner"},[n("div",{staticClass:"DataView-Header",class:t.$slots.dataSetPanel?"with-dataSetPanel":""},[n("h3",{staticClass:"DataView-Title",class:t.$slots.infoPanel?"with-infoPanel":t.$slots.dataSetPanel?"with-dataSetPanel":""},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),t.$slots.infoPanel?n("div",{staticClass:"DataView-InfoPanel"},[t._t("infoPanel")],2):t._e(),t._v(" "),t.$slots.dataSetPanel?n("div",{staticClass:"DataView-DataSetPanel"},[t._t("dataSetPanel")],2):t._e()]),t._v(" "),t.$slots.attentionNote?n("div",{staticClass:"DataView-AttentionNote"},[t._t("attentionNote")],2):t._e(),t._v(" "),n("div",{staticClass:"DataView-Description"},[t._t("description")],2),t._v(" "),n("div",[t._t("button")],2),t._v(" "),n("div",{staticClass:"DataView-Content"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"DataView-Description DataView-Description--Additional"},[t._t("additionalDescription")],2),t._v(" "),t.$slots.dataTable?n("expantion-panel",{staticClass:"DataView-ExpantionPanel"},[t._t("dataTable")],2):t._e(),t._v(" "),n("div",{staticClass:"DataView-Space"}),t._v(" "),n("div",{staticClass:"DataView-Footer"},[n("div",[t._t("footer"),t._v(" "),n("div",[n("app-link",{staticClass:"Permalink",attrs:{to:t.permalink}},[n("time",{attrs:{datetime:t.formattedDate}},[t._v("\n              "+t._s(t.$t("{date} 更新",{date:t.formattedDateForDisplay}))+"\n            ")])])],1)],2),t._v(" "),"true"!==t.$route.query.embed?n("share",{staticClass:"Footer-Right",attrs:{title:t.title,"title-id":t.titleId}}):t._e()],1)],1)])}),[],!1,null,null,null);e.default=component.exports;m()(component,{VCard:v.a})},389:function(t,e,n){"use strict";n(380)},390:function(t,e,n){var r=n(32)(!1);r.push([t.i,".v-expansion-panel-header__icon{margin-left:-5px!important}.v-expansion-panel-header__icon .v-icon--left{margin-right:5px}.v-expansion-panel--active .v-expansion-panel-header__icon .v-icon{transform:rotate(90deg)!important}.expansion-panel-text{color:#333;font-size:1.4rem}",""]),t.exports=r},391:function(t,e,n){"use strict";n(381)},392:function(t,e,n){var r=n(32)(!1);r.push([t.i,".DataView-Share-Opener{cursor:pointer;margin:-14px;padding:14px}.DataView-Share-Opener:focus{outline:1px dotted #707070}.DataView-Share-Buttons{position:absolute;padding:8px;right:2rem;bottom:3em;width:240px;border:1px solid #d9d9d9;background:#fff!important;border-radius:8px;text-align:left;z-index:2;font-size:1.6rem}.DataView-Share-Buttons>*{padding:4px 0}.DataView-Share-Buttons>.Close-Button{display:flex;justify-content:flex-end;color:#707070}.DataView-Share-Buttons>.Close-Button button{border-radius:50%;border:1px solid #fff}.DataView-Share-Buttons>.Close-Button button:focus{border:1px dotted #707070;outline:none}.DataView-Share-Buttons>.EmbedCode{position:relative;padding:4px 30px 4px 4px;color:#030303;border:1px solid #eee;border-radius:8px;font-size:1.2rem}.DataView-Share-Buttons>.EmbedCode .EmbedCode-Copy{position:absolute;top:.3em;right:.3em;color:#707070}.DataView-Share-Buttons>.EmbedCode button{border-radius:50%;border:1px solid #eee}.DataView-Share-Buttons>.EmbedCode button:focus{border:1px dotted #707070;outline:none}.DataView-Share-Buttons>.Buttons{display:flex;justify-content:center;margin-top:4px}.DataView-Share-Buttons>.Buttons .icon-resize{border-radius:50%}.DataView-Share-Buttons>.Buttons .icon-resize.twitter{color:#fff;background:#2a96eb}.DataView-Share-Buttons>.Buttons .icon-resize.facebook{color:#364e8a}.DataView-Share-Buttons>.Buttons .icon-resize.line{color:#1cb127}.DataView-Share-Buttons>.Buttons button{width:30px;height:30px;margin-left:4px;margin-right:4px}.DataView-Share-Buttons>.Buttons button:focus{border-radius:50%;border:1px dotted #707070;outline:none}.overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:1;top:0;left:0;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:.8}.overlay>.overlay-text{text-align:center;padding:2em;width:60%;background:#4d4d4d;border-radius:8px;color:#fff!important;font-size:1.6rem}",""]),t.exports=r},393:function(t,e,n){"use strict";n.r(e);var r=n(50),o=n(0),l=n(400),d=o.default.extend({data:function(){return{showDetails:!1,mdiChevronRight:r.e}},mounted:function(){this.showDetails=!0},methods:{toggleDetails:function(){l.a.$emit(l.b,{dataView:this.$parent})}}}),c=(n(389),n(12)),f=n(63),h=n.n(f),y=n(769),m=n(770),v=n(771),x=n(772),D=n(369),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.showDetails?n("v-expansion-panels",{attrs:{flat:""}},[n("v-expansion-panel",[n("v-expansion-panel-header",{style:{transition:"none"},attrs:{"hide-actions":!0},on:{click:t.toggleDetails}},[n("div",{staticClass:"v-expansion-panel-header__icon"},[n("v-icon",{attrs:{left:"",size:"2.4rem"}},[t._v(t._s(t.mdiChevronRight))])],1),t._v(" "),n("span",{staticClass:"expansion-panel-text"},[t._v(t._s(t.$t("テーブルを表示")))])]),t._v(" "),n("v-expansion-panel-content",[t._t("default")],2)],1)],1):[t._t("default")]],2)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VExpansionPanel:y.a,VExpansionPanelContent:m.a,VExpansionPanelHeader:v.a,VExpansionPanels:x.a,VIcon:D.a})},394:function(t,e,n){"use strict";n.r(e);n(68),n(16);var r=n(50),o=n(0).default.extend({props:{title:{type:String,default:""},titleId:{type:String,default:""}},data:function(){return{openGraphEmbed:!1,displayShare:!1,showOverlay:!1,mdiClipboardOutline:r.f,mdiClose:r.h}},computed:{graphEmbedValue:function(){var t='<iframe width="560" height="315" src="'.concat(this.permalink(!0,!0),'" frameborder="0"></iframe>');return t}},watch:{displayShare:function(t){t?document.documentElement.addEventListener("click",this.toggleShareMenu):document.documentElement.removeEventListener("click",this.toggleShareMenu)}},methods:{toggleShareMenu:function(t){t.stopPropagation(),this.displayShare=!this.displayShare},closeShareMenu:function(){this.displayShare=!1,this.$refs.shareOpener.focus()},isCopyAvailable:function(){return!!navigator.clipboard},copyEmbedCode:function(){var t=this;navigator.clipboard.writeText(this.graphEmbedValue).then((function(){t.closeShareMenu(),t.showOverlay=!0,setTimeout((function(){t.showOverlay=!1}),2e3)}))},stopClosingShareMenu:function(t){t.stopPropagation()},permalink:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],embed=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e="/cards/".concat(this.titleId);return embed&&(e="".concat(e,"?embed=true")),e=this.localePath(e),t&&(e="".concat(location.protocol,"//").concat(location.host).concat(e)),e},twitter:function(){var t="https://twitter.com/intent/tweet?text=".concat(this.title," / ").concat(this.$t("東京都")).concat(this.$t("新型コロナウイルス感染症")).concat(this.$t("対策サイト"),"&url=").concat(this.permalink(!0),"&hashtags=StopCovid19JP");window.open(t)},facebook:function(){var t="https://www.facebook.com/sharer.php?u=".concat(this.permalink(!0));window.open(t)},line:function(){var t="https://social-plugins.line.me/lineit/share?url=".concat(this.permalink(!0));window.open(t)}}}),l=(n(391),n(12)),d=n(63),c=n.n(d),f=n(369),h=n(773),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-tooltip",{attrs:{left:"","nudge-right":"20","nudge-bottom":"4"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("button",t._g({ref:"shareOpener",staticClass:"DataView-Share-Opener",on:{click:t.toggleShareMenu}},r),[n("svg",{attrs:{width:"14",height:"16",viewBox:"0 0 14 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":t.$t("{title}のグラフをシェア",{title:t.title})}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.59999 3.5H9.5L7 0.5L4.5 3.5H6.39999V11H7.59999V3.5ZM8.5 5.75H11.5C11.9142 5.75 12.25 6.08579 12.25 6.5V13.5C12.25 13.9142 11.9142 14.25 11.5 14.25H2.5C2.08579 14.25 1.75 13.9142 1.75 13.5V6.5C1.75 6.08579 2.08579 5.75 2.5 5.75H5.5V4.5H2.5C1.39543 4.5 0.5 5.39543 0.5 6.5V13.5C0.5 14.6046 1.39543 15.5 2.5 15.5H11.5C12.6046 15.5 13.5 14.6046 13.5 13.5V6.5C13.5 5.39543 12.6046 4.5 11.5 4.5H8.5V5.75Z",fill:"#808080"}})])])]}}])},[t._v(" "),n("span",[t._v(t._s(t.$t("情報をシェアする")))])]),t._v(" "),t.displayShare?n("div",{staticClass:"DataView-Share-Buttons py-2",on:{click:t.stopClosingShareMenu}},[n("div",{staticClass:"Close-Button"},[n("v-icon",{attrs:{"aria-label":t.$t("閉じる")},on:{click:t.closeShareMenu}},[t._v("\n        "+t._s(t.mdiClose)+"\n      ")])],1),t._v(" "),n("h4",[t._v(t._s(t.$t("埋め込み用コード")))]),t._v(" "),n("div",{staticClass:"EmbedCode"},[t.isCopyAvailable()?n("v-icon",{staticClass:"EmbedCode-Copy",attrs:{"aria-label":t.$t("クリップボードにコピー")},on:{click:t.copyEmbedCode}},[t._v(t._s(t.mdiClipboardOutline))]):t._e(),t._v("\n      "+t._s(t.graphEmbedValue)+"\n    ")],1),t._v(" "),n("div",{staticClass:"Buttons"},[n("button",{attrs:{"aria-label":t.$t("LINEで{title}のグラフをシェア",{title:t.title})},on:{click:t.line}},[t._m(0)]),t._v(" "),n("button",{attrs:{"aria-label":t.$t("Twitterで{title}のグラフをシェア",{title:t.title})},on:{click:t.twitter}},[t._m(1)]),t._v(" "),n("button",{attrs:{"aria-label":t.$t("facebookで{title}のグラフをシェア",{title:t.title})},on:{click:t.facebook}},[t._m(2)])])]):t._e(),t._v(" "),t.showOverlay?n("div",{staticClass:"overlay"},[n("div",{staticClass:"overlay-text"},[t._v("\n      "+t._s(t.$t("埋め込み用コードをコピーしました"))+"\n    ")])]):t._e()],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"icon-resize line",attrs:{srcset:"/line.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"icon-resize line",attrs:{src:"/line.png",alt:"LINE"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"icon-resize twitter",attrs:{srcset:"/twitter.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"icon-resize twitter",attrs:{src:"/twitter.png",alt:"Twitter"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"icon-resize facebook",attrs:{srcset:"/facebook.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"icon-resize facebook",attrs:{src:"/facebook.png",alt:"facebook"}})])}],!1,null,null,null);e.default=component.exports;c()(component,{VIcon:f.a,VTooltip:h.a})},395:function(t,e,n){"use strict";n(382)},396:function(t,e,n){var r=n(32)(!1);r.push([t.i,".DataView{height:100%;background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px}.DataView-Header{display:flex;align-items:flex-start;flex-flow:column;padding:0 10px}@media screen and (min-width:769px){.DataView-Header{padding:0 5px}}@media screen and (min-width:1171px){.DataView-Header{justify-content:space-between;flex-flow:row;padding:0}.DataView-Header.with-dataSetPanel{flex-flow:column}}.DataView-Inner{display:flex;flex-flow:column;padding:22px;height:100%}.DataView-Title{width:100%;margin-bottom:10px;line-height:1.5;font-weight:400;color:#4d4d4d;font-size:2rem}.DataView-Title.with-dataSetPanel{margin-bottom:0}@media screen and (min-width:1171px){.DataView-Title{margin-bottom:0}.DataView-Title.with-infoPanel{flex:1 1 50%;margin-right:24px}}.DataView-Title span{display:inline-block}.DataView-InfoPanel{flex:1 1 50%}.DataView-DataSetPanel{flex:1 0 auto;width:100%}.DataView-Content{margin:16px 0}.DataView-Space{margin-top:10px}.DataView-Description{margin-top:10px;color:#707070;font-size:1.2rem}.DataView-Description ul{list-style:disc inside;padding-left:1em}.DataView-Description ul li{margin-left:1.5em;text-indent:-1.5em}.DataView-Description--Additional,.DataView-ExpantionPanel{margin-bottom:10px}.DataView-Footer{display:flex;justify-content:space-between;margin-top:auto;color:#707070;font-size:1.2rem}.DataView-Footer ul{list-style-type:none;padding:0}.DataView-Footer .Permalink{color:#707070!important}.DataView-Footer .Footer-Right{display:flex;align-items:flex-end}.DataView-AttentionNote{margin:10px 0;padding:12px;background-color:#ffe200;border-radius:4px;color:#4d4d4d;font-size:1.2rem}.DataView-AttentionNote p{margin:0}",""]),t.exports=r},397:function(t,e,n){"use strict";n.r(e);var r=n(0).default.extend({props:{title:{type:String,required:!1,default:""},lText:{type:String,required:!1,default:""},sText:{type:String,required:!0},sTextUnder:{type:String,required:!1,default:""},unit:{type:String,required:!1,default:""}}}),o=(n(404),n(12)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DataView-DataSet"},[t.title?n("span",{staticClass:"DataView-DataSet-title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),n("div",{staticClass:"DataView-DataSet-info"},[t.lText?[n("span",{staticClass:"DataView-DataSet-summary"},[t._v("\n        "+t._s(t.lText)+"\n        "),n("small",{staticClass:"DataView-DataSet-summary-unit"},[t._v(t._s(t.unit))])]),t._v(" "),n("br")]:t._e(),t._v(" "),n("small",{staticClass:"DataView-DataSet-date"},[t._v(t._s(t.sText))]),t._v(" "),t.sTextUnder?[n("br"),t._v(" "),n("small",{staticClass:"DataView-DataSet-date"},[t._v(t._s(t.sTextUnder))])]:t._e()],2)])}),[],!1,null,null,null);e.default=component.exports},398:function(t,e,n){"use strict";n.r(e);n(28),n(21),n(40),n(13);var r=n(24),o=n.n(r),l=n(0),d={props:{headers:{type:Array,default:function(){return[]}},items:{type:Array,default:function(){return[]}},headerKey:{type:String,default:"text"}},computed:{dataKeys:function(){var t=this;return this.headers.map((function(t){return t.value})).filter((function(e){return e!==t.headerKey}))}},mounted:function(){var t=this.$refs.displayedTable.$el.querySelectorAll("table");Array.prototype.slice.call(t,0).forEach((function(table){table.setAttribute("tabindex","0")}))},methods:{formatDate:function(t){var e=o()(new Date(t));return e.isValid()?this.$d(e.toDate(),"date"):t}}},c=l.default.extend(d),f=(n(406),n(12)),h=n(63),y=n.n(h),m=n(926),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-data-table",{ref:"displayedTable",staticClass:"cardTable",attrs:{headers:t.headers,items:t.items,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"disable-sort":!0,"mobile-breakpoint":0,"item-key":"name"},scopedSlots:t._u([{key:"body",fn:function(e){var r=e.items;return[n("tbody",t._l(r,(function(e,i){return n("tr",{key:i},[n("th",{staticClass:"cardTable-header",attrs:{scope:"row"}},[t._v("\n          "+t._s(t.formatDate(e[t.headerKey]))+"\n        ")]),t._v(" "),t._l(t.dataKeys,(function(r,o){return n("td",{key:o,staticClass:"text-end"},[t._v("\n          "+t._s(e[r])+"\n        ")])}))],2)})),0)]}}])})}),[],!1,null,null,null);e.default=component.exports;y()(component,{VDataTable:m.a})},399:function(t,e,n){"use strict";n.r(e);n(68);var r=n(402),o={props:{displayData:{type:Object,required:!0},isWeekly:{type:Boolean,required:!1,default:!1}},data:function(){return{chartWidth:300,timerId:0}},watch:{displayData:function(){this.scrollRightSide()}},computed:{labelCount:function(){var t;return(null===(t=this.displayData.labels)||void 0===t?void 0:t.length)||0}},methods:{adjustChartWidth:function(){var t=this.$refs.chartContainer;if(t&&0!==t.clientWidth){var e=t.clientWidth;this.chartWidth=this.calcChartWidth(e,this.labelCount)}},calcChartWidth:function(t,e){var n=(t-38)/(this.isWeekly?24:60)*e+38;return Math.max(n,t)},scrollRightSide:function(){var t=this.$refs.scrollable;t&&(t.scrollLeft=this.chartWidth)},handleResize:function(){clearTimeout(this.timerId),this.timerId=window.setTimeout(this.adjustChartWidth,500)}},mounted:function(){var t=this;this.adjustChartWidth(),this.$on("update-width",this.scrollRightSide),window.addEventListener("resize",this.handleResize),r.a.$on(r.b,(function(){return setTimeout((function(){return t.adjustChartWidth()}))}))},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize),r.a.$off(r.b)}},l=(n(408),n(12)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"chartContainer",staticClass:"LegendStickyChart"},[n("div",{ref:"scrollable",staticClass:"scrollable",attrs:{tabindex:"0"}},[n("div",{style:{width:t.chartWidth+"px"}},[t._t("chart",null,{chartWidth:t.chartWidth})],2)]),t._v(" "),t._t("sticky-chart")],2)}),[],!1,null,"f591854c",null);e.default=component.exports},401:function(t,e,n){"use strict";n.d(e,"b",(function(){return y})),n.d(e,"a",(function(){return m}));var r={strokeColor:"#5a8055",fillColor:"#1b4d30"},o={strokeColor:"#5a8055",fillColor:"#00a040"},l={strokeColor:"#5a8055",fillColor:"#c5e2c6"},d={strokeColor:"#1b4d30",fillColor:"#cbe1c8"},c={strokeColor:"#cc7004",fillColor:"#cc7004"},f={strokeColor:"#1b4d30",fillColor:"#1b4d30"},h={strokeColor:"#5a8055",fillColor:"#e2eee2"};function y(t){switch(t){case 1:return[o];case 2:return[r,l];case 4:return[r,o,l,h];default:return[r,o,l]}}function m(t){return{A:r,B:o,C:l,D:d,E:c,F:f,G:h}[t]}},402:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=new(n(0).default),o="TOGGLE_TAB"},404:function(t,e,n){"use strict";n(383)},405:function(t,e,n){var r=n(32)(!1);r.push([t.i,".DataView-DataSet{display:flex;flex-flow:column;margin-bottom:10px;color:#4d4d4d}@media screen and (min-width:1171px){.DataView-DataSet{justify-content:space-between;flex-flow:row}}.DataView-DataSet-title{font-size:2rem;flex:1 1 50%;margin-bottom:10px}.DataView-DataSet-info{flex:1 1 50%}@media screen and (min-width:1171px){.DataView-DataSet-info{text-align:right}}.DataView-DataSet-summary{display:inline-block;color:#4d4d4d;white-space:nowrap;font-style:normal;line-height:30px;font-size:3rem}.DataView-DataSet-summary-unit{width:100%;font-size:1.8rem}.DataView-DataSet-date{display:inline-block;width:100%;color:#707070;line-height:normal;font-size:1.2rem}",""]),t.exports=r},406:function(t,e,n){"use strict";n(384)},407:function(t,e,n){var r=n(32)(!1);r.push([t.i,".cardTable-header{white-space:nowrap!important}.v-data-table .text-end{text-align:right}",""]),t.exports=r},408:function(t,e,n){"use strict";n(385)},409:function(t,e,n){var r=n(32)(!1);r.push([t.i,".LegendStickyChart[data-v-f591854c]{margin:16px 0;position:relative;overflow:hidden}.LegendStickyChart .scrollable[data-v-f591854c]{overflow-x:scroll}.LegendStickyChart .sticky-legend[data-v-f591854c]{position:absolute;top:0;pointer-events:none;width:100%}",""]),t.exports=r},412:function(t,e,n){"use strict";n(40),n(413);var r=n(24),o=n.n(r),l=n(131),d=n(386);function c(t,e){var n=e(t);switch(Math.sign(t)){case 1:return"+".concat(n);case-1:default:return"".concat(n)}}e.a=function(t){var e=t.displayData,n=t.dataIndex,r=void 0===n?0:n,f=t.digit,h=void 0===f?0:f,y=e.labels.slice(-1)[0],data=e.datasets[r].data,m=data.slice(-1)[0],v=m-data.slice(-2)[0],x=Object(d.a)(h);return{lastDay:o()(Object(l.d)(y)).toDate(),lastDayData:x(m),dayBeforeRatio:c(v,x)}}},413:function(t,e,n){n(5)({target:"Math",stat:!0},{sign:n(273)})},419:function(t,e,n){"use strict";n(22),n(28),n(34),n(37);var r=n(6),o=(n(93),n(25),n(36),n(64),n(257),n(17),n(35),n(258),n(259),n(260),n(261),n(262),n(263),n(264),n(265),n(266),n(267),n(268),n(269),n(270),n(38),n(44),n(13),n(69),n(272),n(0)),l=n(170),d=n(19);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],y=h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=h.reduce((function(t,e){return t["offset"+Object(d.B)(e)]={type:[String,Number],default:null},t}),{}),v=h.reduce((function(t,e){return t["order"+Object(d.B)(e)]={type:[String,Number],default:null},t}),{}),x={col:Object.keys(y),offset:Object.keys(m),order:Object.keys(v)};function D(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var w=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},y),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},v),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,d=(e.parent,"");for(var c in n)d+=String(n[c]);var f=w.get(d);return f||function(){var t,e;for(e in f=[],x)x[e].forEach((function(t){var r=n[t],o=D(e,t,r);o&&f.push(o)}));var o=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),w.set(d,f)}(),t(n.tag,Object(l.a)(data,{class:f}),o)}})},442:function(t,e,n){var content=n(520);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("78c297c0",content,!0,{sourceMap:!1})},519:function(t,e,n){"use strict";var r=n(442),o=n.n(r);n.d(e,"default",(function(){return o.a}))},520:function(t,e,n){var r=n(32)(!1);r.push([t.i,".GraphLegend_2nykv{text-align:center;list-style:none;padding:0!important}.GraphLegend_2nykv li{display:inline-block;margin:0 3px}.GraphLegend_2nykv li div{height:12px;margin:2px 4px;width:40px;display:inline-block;vertical-align:middle;border-width:1px;border-style:solid}.GraphLegend_2nykv li button{color:#707070;font-size:1.2rem}",""]),r.locals={GraphLegend:"GraphLegend_2nykv"},t.exports=r},564:function(t,e,n){"use strict";n.r(e);var r=n(6),o=n(110),l=(n(16),n(21),n(171),n(51),n(35),n(17),n(38),n(40),n(24)),d=n.n(l),c=n(0),f=n(388),h=n(397),y=n(398),m=n(399),v=n(132),x=n(412),D=n(401),w=n(386),_=c.default.extend({components:{DataView:f.default,DataViewTable:y.default,DataViewDataSetPanel:h.default,ScrollableChart:m.default},props:{title:{type:String,default:""},titleId:{type:String,required:!1,default:""},infoTitles:{type:Array,required:!1,default:function(){return[]}},chartId:{type:String,default:"untracked-rate-chart"},chartData:{type:Array,required:!1,default:function(){return[[],[],[],[]]}},date:{type:String,required:!0,default:""},labels:{type:Array,default:function(){return[]}},units:{type:Array,default:function(){return[]}},dataLabels:{type:Array,default:function(){return[]}},tableLabels:{type:Array,default:function(){return[]}},getFormatter:{type:Function,required:!1,default:function(t){return Object(w.c)()}},yAxesBgPlugin:{type:Array,default:function(){return v.b}},yAxesBgRightPlugin:{type:Array,default:function(){return v.c}}},data:function(){return{canvas:!0,colors:[Object(D.a)("A"),Object(D.a)("C"),Object(D.a)("E"),Object(D.a)("E")],displayLegends:[!0,!0,!0,!0]}},computed:{displayInfo:function(){var t=Object(x.a)({displayData:this.displayData,dataIndex:2,digit:1}),e=t.lastDay,n=t.lastDayData,r=t.dayBeforeRatio,o=Object(x.a)({displayData:this.displayData,dataIndex:3,digit:1}),l=o.lastDay,d=o.lastDayData,c=o.dayBeforeRatio;return[{lText:n,sText:"".concat(this.$t("{date} の数値",{date:this.$d(e,"date")}),"（").concat(this.$t("７日間移動平均"),"）"),sTextUnder:"（".concat(this.$t("前日比"),": ").concat(r," ").concat(this.units[0],"）"),unit:this.units[0]},{lText:d,sText:"".concat(this.$t("{date} の数値",{date:this.$d(l,"date")}),"（").concat(this.$t("７日間移動平均値をもとに算出"),"）"),sTextUnder:"（".concat(this.$t("前日比"),": ").concat(c," ").concat(this.units[1],"）"),unit:this.units[1]}]},displayData:function(){var t=[Object(D.a)("A"),Object(D.a)("C"),Object(D.a)("E"),Object(D.a)("E")];return{labels:this.labels,datasets:[{type:"bar",yAxisID:"y-axis-1",label:this.dataLabels[0],data:this.chartData[0],backgroundColor:t[0].fillColor,borderColor:t[0].strokeColor,borderWidth:1,order:4},{type:"bar",yAxisID:"y-axis-1",label:this.dataLabels[1],data:this.chartData[1],backgroundColor:t[1].fillColor,borderColor:t[1].strokeColor,borderWidth:1,order:3},{type:"line",yAxisID:"y-axis-1",label:this.dataLabels[2],data:this.chartData[2],pointBackgroundColor:"rgba(0,0,0,0)",pointBorderColor:"rgba(0,0,0,0)",borderColor:t[2].strokeColor,borderWidth:3,borderDash:[4],fill:!1,order:2,lineTension:0},{type:"line",yAxisID:"y-axis-2",label:this.dataLabels[3],data:this.chartData[3],pointBackgroundColor:"rgba(0,0,0,0)",pointBorderColor:"rgba(0,0,0,0)",borderColor:t[3].strokeColor,borderWidth:3,fill:!1,order:1,lineTension:0}]}},tableHeaders:function(){return[{text:this.$t("日付"),value:"text"}].concat(Object(o.a)(this.tableLabels.map((function(text,i){return{text:text,value:String(i),align:"end"}}))))},tableData:function(){var t=this;return this.labels.map((function(label,i){return Object.assign.apply(Object,[{text:label}].concat(Object(o.a)(t.chartData.map((function(e,n){var data=t.chartData[n];return null===data[i]?Object(r.a)({},n,""):Object(r.a)({},n,t.getFormatter(n)(data[i]))})))))})).sort((function(a,b){return d()(a.text).unix()-d()(b.text).unix()})).reverse()},displayOption:function(){var t=this,e=this.units[1],n={tooltips:{displayColors:!1,callbacks:{label:function(n){var r=t.getFormatter(n.datasetIndex)(parseFloat(n.value)),label="".concat(t.dataLabels[n.datasetIndex]," : ").concat(r," ").concat(t.$t("人"));return n.datasetIndex>=3&&(label="".concat(t.dataLabels[n.datasetIndex]," : ").concat(r," ").concat(e)),label},title:function(e,data){if(e[0].datasetIndex<4){var label=data.labels[e[0].index];return t.$d(new Date(label),"date")}return""}}},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"#808080",maxRotation:0,callback:function(label){return d()(label).format("D")}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!0,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"#808080",padding:3,fontStyle:"bold"},type:"time",time:{unit:"month",displayFormats:{month:"YYYY-MM"}}}],yAxes:[{id:"y-axis-1",position:"left",stacked:!0,gridLines:{display:!0,drawOnChartArea:!0,color:"#E5E5E5"},ticks:{maxTicksLimit:8,fontColor:"#808080",suggestedMin:0,suggestedMax:this.scaledTicksYAxisMax}},{id:"y-axis-2",position:"right",gridLines:{display:!0,drawOnChartArea:!1,color:"#E5E5E5"},ticks:{maxTicksLimit:8,fontColor:"#808080",suggestedMin:0,suggestedMax:this.scaledTicksYAxisMaxRight,callback:function(t){return"".concat(t,"%")}}}]}};return"true"===this.$route.query.ogp&&Object.assign(n,{animation:{duration:0}}),n},displayDataHeader:function(){var t=this.displayData.datasets,e=Array.from(t[0].data.keys()).map((function(i){return t[0].data[i]+t[1].data[i]})),n=e.reduce((function(a,b){return Math.max(a,b)}),0),r=e.indexOf(n);return{labels:["2020-01-01"],datasets:[{data:[this.displayData.datasets[0].data[r]],backgroundColor:"transparent",yAxisID:"y-axis-1",borderWidth:0},{data:[this.displayData.datasets[1].data[r]],backgroundColor:"transparent",yAxisID:"y-axis-1",borderWidth:0},{data:[0],backgroundColor:"transparent",yAxisID:"y-axis-1",borderWidth:0},{data:[this.displayData.datasets[3].data[r]],backgroundColor:"transparent",yAxisID:"y-axis-2",borderWidth:0}]}},displayOptionHeader:function(){return{tooltips:{enabled:!1},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"transparent",maxRotation:0,callback:function(label){return d()(label).format("D")}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!1,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"transparent",padding:13,fontStyle:"bold"},type:"time",time:{unit:"month",displayFormats:{month:"YYYY-MM"}}}],yAxes:[{id:"y-axis-1",position:"left",stacked:!0,gridLines:{display:!0,drawOnChartArea:!1,color:"#E5E5E5"},ticks:{maxTicksLimit:8,fontColor:"#808080",suggestedMin:0,suggestedMax:this.scaledTicksYAxisMax}},{id:"y-axis-2",position:"right",gridLines:{display:!0,drawOnChartArea:!1,color:"#E5E5E5"},ticks:{maxTicksLimit:8,fontColor:"#808080",suggestedMin:0,suggestedMax:this.scaledTicksYAxisMaxRight,callback:function(t){return"".concat(t,"%")}}}]},animation:{duration:0}}},scaledTicksYAxisMax:function(){var t=this,e=Array.from(this.chartData[0].keys()).map((function(i){return t.chartData[0][i]+t.chartData[1][i]})).reduce((function(a,b){return Math.max(a,b)}),0);return this.chartData[2].reduce((function(a,b){return Math.max(a,b)}),e)},scaledTicksYAxisMaxRight:function(){return this.chartData[3].reduce((function(a,b){return Math.max(a,b)}),0)}},created:function(){this.canvas=!0},mounted:function(){var canvas=this.$refs.barChart.$el.querySelector("canvas"),t="".concat(this.titleId,"-graph");canvas&&(canvas.setAttribute("role","img"),canvas.setAttribute("aria-labelledby",t))},methods:{onClickLegend:function(i){this.displayLegends[i]=!this.displayLegends[i],this.displayLegends=this.displayLegends.slice()},makeLineData:function(t){return this.chartData[0].map((function(e){return t}))}}}),C=n(519),k=n(12);var component=Object(k.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date,"head-title":t.title+t.infoTitles.join(",")},scopedSlots:t._u([{key:"description",fn:function(){return[t._t("description")]},proxy:!0},{key:"additionalDescription",fn:function(){return[t._t("additionalDescription")]},proxy:!0},{key:"dataTable",fn:function(){return[n("client-only",[n("data-view-table",{attrs:{headers:t.tableHeaders,items:t.tableData}})],1)]},proxy:!0},{key:"dataSetPanel",fn:function(){return t._l(t.displayInfo,(function(e,i){return n("data-view-data-set-panel",{key:i,attrs:{title:t.infoTitles[i],"l-text":e.lText,"s-text":e.sText,"s-text-under":e.sTextUnder,unit:e.unit}})}))},proxy:!0}],null,!0)},[t._v(" "),n("ul",{class:t.$style.GraphLegend,style:{display:t.canvas?"block":"none"}},t._l(t.dataLabels,(function(e,i){return n("li",{key:i,on:{click:function(e){return t.onClickLegend(i)}}},[n("button",[n("div",2===i?{style:{background:"repeating-linear-gradient(90deg, "+t.colors[i].fillColor+", "+t.colors[i].fillColor+" 2px, #fff 2px, #fff 4px)",border:0,height:"3px"}}:3===i?{style:{backgroundColor:t.colors[i].fillColor,border:0,height:"3px"}}:{style:{backgroundColor:t.colors[i].fillColor,borderColor:t.colors[i].strokeColor}}),t._v(" "),n("span",{style:{textDecoration:t.displayLegends[i]?"none":"line-through"}},[t._v(t._s(e))])])])})),0),t._v(" "),n("h4",{staticClass:"visually-hidden",attrs:{id:t.titleId+"-graph"}},[t._v("\n    "+t._s(t.$t("{title}のグラフ",{title:t.title}))+"\n  ")]),t._v(" "),n("scrollable-chart",{directives:[{name:"show",rawName:"v-show",value:t.canvas,expression:"canvas"}],attrs:{"display-data":t.displayData},scopedSlots:t._u([{key:"chart",fn:function(e){var r=e.chartWidth;return[n("bar",{ref:"barChart",attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.displayOption,"display-legends":t.displayLegends,height:240,width:r}})]}},{key:"sticky-chart",fn:function(){return[n("bar",{staticClass:"sticky-legend",attrs:{"chart-id":t.chartId+"-header-right","chart-data":t.displayDataHeader,options:t.displayOptionHeader,plugins:t.yAxesBgRightPlugin,"display-legends":t.displayLegends,height:240}})]},proxy:!0}])})],1)}),[],!1,(function(t){this.$style=C.default.locals||C.default}),null,null);e.default=component.exports},674:function(t,e,n){"use strict";n.r(e);n(21),n(28);var r=n(0),o=n(564),l=n(386),d=new Date("2020-03-27"),c=r.default.extend({components:{Chart:o.default},data:function(){return{dataLabels:[this.$t("接触歴等判明者数"),this.$t("接触歴等不明者数"),this.$t("接触歴等不明者数（７日間移動平均）"),this.$t("増加比")],tableLabels:[this.$t("接触歴等判明者数"),this.$t("接触歴等不明者数"),this.$t("接触歴等不明者数（７日間移動平均）"),this.$t("増加比")],getFormatter:function(t){return t>=2?Object(l.b)(1):Object(l.c)()},units:[this.$t("人"),"%"]}},computed:{chartData:function(){return[this.filteredDailyPositiveDetailData.map((function(t){return t.reportedCount})),this.filteredDailyPositiveDetailData.map((function(t){return t.missingCount})),this.filteredDailyPositiveDetailData.map((function(t){return t.weeklyAverageUntrackedCount})),this.filteredDailyPositiveDetailData.map((function(t){return t.weeklyAverageUntrackedIncresePercent}))]},date:function(){return this.dailyPositiveDetail.date},labels:function(){return this.filteredDailyPositiveDetailData.map((function(t){return"".concat(t.diagnosedDate)}))},filteredDailyPositiveDetailData:function(){return this.dailyPositiveDetail.data.filter((function(t){return new Date(t.diagnosedDate)>=d}))},dailyPositiveDetail:function(){return this.$store.state.dailyPositiveDetail}}}),f=n(12),h=n(63),y=n.n(h),m=n(419),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard UntrackedRateCard",attrs:{cols:"12",md:"6"}},[n("client-only",[n("chart",{attrs:{title:t.$t("モニタリング項目(3)"),"title-id":"untracked-rate","info-titles":[t.$t("新規陽性者における接触歴等不明者数"),t.$t("増加比")],"chart-id":"untracked-rate-chart","chart-data":t.chartData,date:t.date,labels:t.labels,units:t.units,"data-labels":t.dataLabels,"table-labels":t.tableLabels,"get-formatter":t.getFormatter},scopedSlots:t._u([{key:"additionalDescription",fn:function(){return[n("span",[t._v(t._s(t.$t("（注）")))]),t._v(" "),n("ul",[n("li",[t._v("\n            "+t._s(t.$t("保健所から発生届が提出された日別（報告日別）の新規陽性者について、接触歴等の不明者、判明者に区分したものである"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("集団感染発生や曜日による数値のばらつきにより、日々の結果が変動するため、こうしたばらつきを平準化し全体の傾向を見る趣旨から、過去7日間の移動平均値を不明者数として算出（例えば、2020年5月7日の移動平均値は、2020年5月1日から5月7日までの実績値を平均したもの）"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("濃厚接触者など、患者の発生状況の内訳の公表を開始した2020年3月27日から作成"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("増加比は、１週間前の接触歴等不明者数（移動平均値）との比較"))+"\n          ")])])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;y()(component,{VCol:m.a})}}]);