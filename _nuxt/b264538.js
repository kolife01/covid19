(window.webpackJsonp=window.webpackJsonp||[]).push([[115,11,63],{380:function(t,e,n){var content=n(390);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("d3c7a3be",content,!0,{sourceMap:!1})},381:function(t,e,n){var content=n(392);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("c3e415e2",content,!0,{sourceMap:!1})},382:function(t,e,n){var content=n(396);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("bc739952",content,!0,{sourceMap:!1})},387:function(t,e,n){var content=n(411);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("905bdcd6",content,!0,{sourceMap:!1})},388:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(85),l=n(393),c=n(394),d=n(131),f=o.default.extend({components:{ExpantionPanel:l.default,Share:c.default,AppLink:r.default},props:{title:{type:String,default:""},titleId:{type:String,default:""},date:{type:String,default:""},headTitle:{type:String,default:""}},head:function(){return this.$route.params.card?{title:this.headTitle?this.headTitle:this.title,meta:[{hid:"og:title",property:"og:title",content:this.headTitle?this.headTitle:this.title},{hid:"description",name:"description",content:this.formattedDateForDisplay},{hid:"og:description",property:"og:description",content:this.formattedDateForDisplay}]}:{}},computed:{formattedDate:function(){return Object(d.c)(this.date)},formattedDateForDisplay:function(){return""!==this.date?this.$d(new Date(this.date),"dateTime"):""},permalink:function(){var t="/cards/".concat(this.titleId);return this.localePath(t)}}}),_=(n(395),n(12)),v=n(63),m=n.n(v),h=n(919),component=Object(_.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"DataView"},[n("div",{staticClass:"DataView-Inner"},[n("div",{staticClass:"DataView-Header",class:t.$slots.dataSetPanel?"with-dataSetPanel":""},[n("h3",{staticClass:"DataView-Title",class:t.$slots.infoPanel?"with-infoPanel":t.$slots.dataSetPanel?"with-dataSetPanel":""},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),t.$slots.infoPanel?n("div",{staticClass:"DataView-InfoPanel"},[t._t("infoPanel")],2):t._e(),t._v(" "),t.$slots.dataSetPanel?n("div",{staticClass:"DataView-DataSetPanel"},[t._t("dataSetPanel")],2):t._e()]),t._v(" "),t.$slots.attentionNote?n("div",{staticClass:"DataView-AttentionNote"},[t._t("attentionNote")],2):t._e(),t._v(" "),n("div",{staticClass:"DataView-Description"},[t._t("description")],2),t._v(" "),n("div",[t._t("button")],2),t._v(" "),n("div",{staticClass:"DataView-Content"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"DataView-Description DataView-Description--Additional"},[t._t("additionalDescription")],2),t._v(" "),t.$slots.dataTable?n("expantion-panel",{staticClass:"DataView-ExpantionPanel"},[t._t("dataTable")],2):t._e(),t._v(" "),n("div",{staticClass:"DataView-Space"}),t._v(" "),n("div",{staticClass:"DataView-Footer"},[n("div",[t._t("footer"),t._v(" "),n("div",[n("app-link",{staticClass:"Permalink",attrs:{to:t.permalink}},[n("time",{attrs:{datetime:t.formattedDate}},[t._v("\n              "+t._s(t.$t("{date} 更新",{date:t.formattedDateForDisplay}))+"\n            ")])])],1)],2),t._v(" "),"true"!==t.$route.query.embed?n("share",{staticClass:"Footer-Right",attrs:{title:t.title,"title-id":t.titleId}}):t._e()],1)],1)])}),[],!1,null,null,null);e.default=component.exports;m()(component,{VCard:h.a})},389:function(t,e,n){"use strict";n(380)},390:function(t,e,n){var o=n(32)(!1);o.push([t.i,".v-expansion-panel-header__icon{margin-left:-5px!important}.v-expansion-panel-header__icon .v-icon--left{margin-right:5px}.v-expansion-panel--active .v-expansion-panel-header__icon .v-icon{transform:rotate(90deg)!important}.expansion-panel-text{color:#333;font-size:1.4rem}",""]),t.exports=o},391:function(t,e,n){"use strict";n(381)},392:function(t,e,n){var o=n(32)(!1);o.push([t.i,".DataView-Share-Opener{cursor:pointer;margin:-14px;padding:14px}.DataView-Share-Opener:focus{outline:1px dotted #707070}.DataView-Share-Buttons{position:absolute;padding:8px;right:2rem;bottom:3em;width:240px;border:1px solid #d9d9d9;background:#fff!important;border-radius:8px;text-align:left;z-index:2;font-size:1.6rem}.DataView-Share-Buttons>*{padding:4px 0}.DataView-Share-Buttons>.Close-Button{display:flex;justify-content:flex-end;color:#707070}.DataView-Share-Buttons>.Close-Button button{border-radius:50%;border:1px solid #fff}.DataView-Share-Buttons>.Close-Button button:focus{border:1px dotted #707070;outline:none}.DataView-Share-Buttons>.EmbedCode{position:relative;padding:4px 30px 4px 4px;color:#030303;border:1px solid #eee;border-radius:8px;font-size:1.2rem}.DataView-Share-Buttons>.EmbedCode .EmbedCode-Copy{position:absolute;top:.3em;right:.3em;color:#707070}.DataView-Share-Buttons>.EmbedCode button{border-radius:50%;border:1px solid #eee}.DataView-Share-Buttons>.EmbedCode button:focus{border:1px dotted #707070;outline:none}.DataView-Share-Buttons>.Buttons{display:flex;justify-content:center;margin-top:4px}.DataView-Share-Buttons>.Buttons .icon-resize{border-radius:50%}.DataView-Share-Buttons>.Buttons .icon-resize.twitter{color:#fff;background:#2a96eb}.DataView-Share-Buttons>.Buttons .icon-resize.facebook{color:#364e8a}.DataView-Share-Buttons>.Buttons .icon-resize.line{color:#1cb127}.DataView-Share-Buttons>.Buttons button{width:30px;height:30px;margin-left:4px;margin-right:4px}.DataView-Share-Buttons>.Buttons button:focus{border-radius:50%;border:1px dotted #707070;outline:none}.overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:1;top:0;left:0;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:.8}.overlay>.overlay-text{text-align:center;padding:2em;width:60%;background:#4d4d4d;border-radius:8px;color:#fff!important;font-size:1.6rem}",""]),t.exports=o},393:function(t,e,n){"use strict";n.r(e);var o=n(50),r=n(0),l=n(400),c=r.default.extend({data:function(){return{showDetails:!1,mdiChevronRight:o.e}},mounted:function(){this.showDetails=!0},methods:{toggleDetails:function(){l.a.$emit(l.b,{dataView:this.$parent})}}}),d=(n(389),n(12)),f=n(63),_=n.n(f),v=n(769),m=n(770),h=n(771),w=n(772),x=n(369),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.showDetails?n("v-expansion-panels",{attrs:{flat:""}},[n("v-expansion-panel",[n("v-expansion-panel-header",{style:{transition:"none"},attrs:{"hide-actions":!0},on:{click:t.toggleDetails}},[n("div",{staticClass:"v-expansion-panel-header__icon"},[n("v-icon",{attrs:{left:"",size:"2.4rem"}},[t._v(t._s(t.mdiChevronRight))])],1),t._v(" "),n("span",{staticClass:"expansion-panel-text"},[t._v(t._s(t.$t("テーブルを表示")))])]),t._v(" "),n("v-expansion-panel-content",[t._t("default")],2)],1)],1):[t._t("default")]],2)}),[],!1,null,null,null);e.default=component.exports;_()(component,{VExpansionPanel:v.a,VExpansionPanelContent:m.a,VExpansionPanelHeader:h.a,VExpansionPanels:w.a,VIcon:x.a})},394:function(t,e,n){"use strict";n.r(e);n(68),n(16);var o=n(50),r=n(0).default.extend({props:{title:{type:String,default:""},titleId:{type:String,default:""}},data:function(){return{openGraphEmbed:!1,displayShare:!1,showOverlay:!1,mdiClipboardOutline:o.f,mdiClose:o.h}},computed:{graphEmbedValue:function(){var t='<iframe width="560" height="315" src="'.concat(this.permalink(!0,!0),'" frameborder="0"></iframe>');return t}},watch:{displayShare:function(t){t?document.documentElement.addEventListener("click",this.toggleShareMenu):document.documentElement.removeEventListener("click",this.toggleShareMenu)}},methods:{toggleShareMenu:function(t){t.stopPropagation(),this.displayShare=!this.displayShare},closeShareMenu:function(){this.displayShare=!1,this.$refs.shareOpener.focus()},isCopyAvailable:function(){return!!navigator.clipboard},copyEmbedCode:function(){var t=this;navigator.clipboard.writeText(this.graphEmbedValue).then((function(){t.closeShareMenu(),t.showOverlay=!0,setTimeout((function(){t.showOverlay=!1}),2e3)}))},stopClosingShareMenu:function(t){t.stopPropagation()},permalink:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],embed=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e="/cards/".concat(this.titleId);return embed&&(e="".concat(e,"?embed=true")),e=this.localePath(e),t&&(e="".concat(location.protocol,"//").concat(location.host).concat(e)),e},twitter:function(){var t="https://twitter.com/intent/tweet?text=".concat(this.title," / ").concat(this.$t("東京都")).concat(this.$t("新型コロナウイルス感染症")).concat(this.$t("対策サイト"),"&url=").concat(this.permalink(!0),"&hashtags=StopCovid19JP");window.open(t)},facebook:function(){var t="https://www.facebook.com/sharer.php?u=".concat(this.permalink(!0));window.open(t)},line:function(){var t="https://social-plugins.line.me/lineit/share?url=".concat(this.permalink(!0));window.open(t)}}}),l=(n(391),n(12)),c=n(63),d=n.n(c),f=n(369),_=n(773),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-tooltip",{attrs:{left:"","nudge-right":"20","nudge-bottom":"4"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("button",t._g({ref:"shareOpener",staticClass:"DataView-Share-Opener",on:{click:t.toggleShareMenu}},o),[n("svg",{attrs:{width:"14",height:"16",viewBox:"0 0 14 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":t.$t("{title}のグラフをシェア",{title:t.title})}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.59999 3.5H9.5L7 0.5L4.5 3.5H6.39999V11H7.59999V3.5ZM8.5 5.75H11.5C11.9142 5.75 12.25 6.08579 12.25 6.5V13.5C12.25 13.9142 11.9142 14.25 11.5 14.25H2.5C2.08579 14.25 1.75 13.9142 1.75 13.5V6.5C1.75 6.08579 2.08579 5.75 2.5 5.75H5.5V4.5H2.5C1.39543 4.5 0.5 5.39543 0.5 6.5V13.5C0.5 14.6046 1.39543 15.5 2.5 15.5H11.5C12.6046 15.5 13.5 14.6046 13.5 13.5V6.5C13.5 5.39543 12.6046 4.5 11.5 4.5H8.5V5.75Z",fill:"#808080"}})])])]}}])},[t._v(" "),n("span",[t._v(t._s(t.$t("情報をシェアする")))])]),t._v(" "),t.displayShare?n("div",{staticClass:"DataView-Share-Buttons py-2",on:{click:t.stopClosingShareMenu}},[n("div",{staticClass:"Close-Button"},[n("v-icon",{attrs:{"aria-label":t.$t("閉じる")},on:{click:t.closeShareMenu}},[t._v("\n        "+t._s(t.mdiClose)+"\n      ")])],1),t._v(" "),n("h4",[t._v(t._s(t.$t("埋め込み用コード")))]),t._v(" "),n("div",{staticClass:"EmbedCode"},[t.isCopyAvailable()?n("v-icon",{staticClass:"EmbedCode-Copy",attrs:{"aria-label":t.$t("クリップボードにコピー")},on:{click:t.copyEmbedCode}},[t._v(t._s(t.mdiClipboardOutline))]):t._e(),t._v("\n      "+t._s(t.graphEmbedValue)+"\n    ")],1),t._v(" "),n("div",{staticClass:"Buttons"},[n("button",{attrs:{"aria-label":t.$t("LINEで{title}のグラフをシェア",{title:t.title})},on:{click:t.line}},[t._m(0)]),t._v(" "),n("button",{attrs:{"aria-label":t.$t("Twitterで{title}のグラフをシェア",{title:t.title})},on:{click:t.twitter}},[t._m(1)]),t._v(" "),n("button",{attrs:{"aria-label":t.$t("facebookで{title}のグラフをシェア",{title:t.title})},on:{click:t.facebook}},[t._m(2)])])]):t._e(),t._v(" "),t.showOverlay?n("div",{staticClass:"overlay"},[n("div",{staticClass:"overlay-text"},[t._v("\n      "+t._s(t.$t("埋め込み用コードをコピーしました"))+"\n    ")])]):t._e()],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"icon-resize line",attrs:{srcset:"/line.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"icon-resize line",attrs:{src:"/line.png",alt:"LINE"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"icon-resize twitter",attrs:{srcset:"/twitter.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"icon-resize twitter",attrs:{src:"/twitter.png",alt:"Twitter"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"icon-resize facebook",attrs:{srcset:"/facebook.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"icon-resize facebook",attrs:{src:"/facebook.png",alt:"facebook"}})])}],!1,null,null,null);e.default=component.exports;d()(component,{VIcon:f.a,VTooltip:_.a})},395:function(t,e,n){"use strict";n(382)},396:function(t,e,n){var o=n(32)(!1);o.push([t.i,".DataView{height:100%;background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px}.DataView-Header{display:flex;align-items:flex-start;flex-flow:column;padding:0 10px}@media screen and (min-width:769px){.DataView-Header{padding:0 5px}}@media screen and (min-width:1171px){.DataView-Header{justify-content:space-between;flex-flow:row;padding:0}.DataView-Header.with-dataSetPanel{flex-flow:column}}.DataView-Inner{display:flex;flex-flow:column;padding:22px;height:100%}.DataView-Title{width:100%;margin-bottom:10px;line-height:1.5;font-weight:400;color:#4d4d4d;font-size:2rem}.DataView-Title.with-dataSetPanel{margin-bottom:0}@media screen and (min-width:1171px){.DataView-Title{margin-bottom:0}.DataView-Title.with-infoPanel{flex:1 1 50%;margin-right:24px}}.DataView-Title span{display:inline-block}.DataView-InfoPanel{flex:1 1 50%}.DataView-DataSetPanel{flex:1 0 auto;width:100%}.DataView-Content{margin:16px 0}.DataView-Space{margin-top:10px}.DataView-Description{margin-top:10px;color:#707070;font-size:1.2rem}.DataView-Description ul{list-style:disc inside;padding-left:1em}.DataView-Description ul li{margin-left:1.5em;text-indent:-1.5em}.DataView-Description--Additional,.DataView-ExpantionPanel{margin-bottom:10px}.DataView-Footer{display:flex;justify-content:space-between;margin-top:auto;color:#707070;font-size:1.2rem}.DataView-Footer ul{list-style-type:none;padding:0}.DataView-Footer .Permalink{color:#707070!important}.DataView-Footer .Footer-Right{display:flex;align-items:flex-end}.DataView-AttentionNote{margin:10px 0;padding:12px;background-color:#ffe200;border-radius:4px;color:#4d4d4d;font-size:1.2rem}.DataView-AttentionNote p{margin:0}",""]),t.exports=o},403:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(85),l=o.default.extend({components:{AppLink:r.default},props:{url:{type:String,default:""}}}),c=(n(410),n(12)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("app-link",{attrs:{to:t.url}},[t._v("\n  "+t._s(t.$t("オープンデータを入手"))+"\n")])}),[],!1,null,null,null);e.default=component.exports},410:function(t,e,n){"use strict";n(387)},411:function(t,e,n){var o=n(32)(!1);o.push([t.i,".OpenDataLink{text-decoration:none}.OpenDataLink .ExternalLinkIcon{vertical-align:text-bottom}",""]),t.exports=o},419:function(t,e,n){"use strict";n(22),n(28),n(34),n(37);var o=n(6),r=(n(93),n(25),n(36),n(64),n(257),n(17),n(35),n(258),n(259),n(260),n(261),n(262),n(263),n(264),n(265),n(266),n(267),n(268),n(269),n(270),n(38),n(44),n(13),n(69),n(272),n(0)),l=n(170),c=n(19);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _=["sm","md","lg","xl"],v=_.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=_.reduce((function(t,e){return t["offset"+Object(c.B)(e)]={type:[String,Number],default:null},t}),{}),h=_.reduce((function(t,e){return t["order"+Object(c.B)(e)]={type:[String,Number],default:null},t}),{}),w={col:Object.keys(v),offset:Object.keys(m),order:Object.keys(h)};function x(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var y=new Map;e.a=r.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},h),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,c=(e.parent,"");for(var d in n)c+=String(n[d]);var f=y.get(c);return f||function(){var t,e;for(e in f=[],w)w[e].forEach((function(t){var o=n[t],r=x(e,t,o);r&&f.push(r)}));var r=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!r||!n.cols},Object(o.a)(t,"col-".concat(n.cols),n.cols),Object(o.a)(t,"offset-".concat(n.offset),n.offset),Object(o.a)(t,"order-".concat(n.order),n.order),Object(o.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),y.set(c,f)}(),t(n.tag,Object(l.a)(data,{class:f}),r)}})},438:function(t,e,n){var content=n(512);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("5d7fba66",content,!0,{sourceMap:!1})},456:function(t,e,n){var content=n(597);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("18855c9f",content,!0,{sourceMap:!1})},511:function(t,e,n){"use strict";var o=n(438),r=n.n(o);n.d(e,"default",(function(){return r.a}))},512:function(t,e,n){var o=n(32)(!1);o.push([t.i,'.container_23lpF{width:100%;color:#008830;line-height:1.35;padding-left:0!important}.container_23lpF,.container_23lpF *{box-sizing:border-box}.container_23lpF ul{padding-left:0}.group_3UZz7{flex:0 0 auto;padding-left:3px!important;border-top:3px solid #008830;border-left:3px solid #008830}.content_2eA9Q{padding:5px 10px;display:flex;justify-content:space-between;align-items:center;width:100%;border:3px solid #008830}.content_2eA9Q>span{display:block;font-size:1.4rem}.content_2eA9Q>span:first-child{text-align:left;margin-top:1px;flex-shrink:2}.content_2eA9Q>span:last-child{margin-left:10px;text-align:right;flex-shrink:1}.content_2eA9Q>span:not(:last-child){word-wrap:break-word}.content_2eA9Q strong{font-size:1.6rem}.content_2eA9Q span.unit_3J4fU{font-size:1.4rem}.box_3MSu7{display:block;margin-top:3px}.box_3MSu7.parent_3WYVw{border-top:3px solid #008830;border-left:3px solid #008830;position:relative;padding-left:29px}.box_3MSu7.parent_3WYVw:after{content:"";display:block;position:absolute;left:-1px;bottom:0;width:30px;border-bottom:3px solid #008830}.box_3MSu7.parent_3WYVw>.content_2eA9Q{margin-left:-29px;width:calc(100% + 29px);border-top:none;border-left:none;border-bottom:none}@media screen and (max-width:1263px){.group_3UZz7{padding-left:.238vw!important;border-top:.238vw solid #008830;border-left:.238vw solid #008830}.content_2eA9Q{padding:.396vw .792vw;border:.238vw solid #008830}.content_2eA9Q>span{font-size:1.4rem}.content_2eA9Q>span:first-child{margin-top:.08vw}.content_2eA9Q>span:last-child{margin-left:10px}.content_2eA9Q strong{font-size:1.6rem}.content_2eA9Q span.unit_3J4fU{font-size:1.4rem}.box_3MSu7{margin-top:.238vw}.box_3MSu7.parent_3WYVw{border-top:.238vw solid #008830;border-left:.238vw solid #008830;padding-left:2.296vw}.box_3MSu7.parent_3WYVw:after{width:2.534vw;border-bottom:.238vw solid #008830}.box_3MSu7.parent_3WYVw>.content_2eA9Q{margin-left:-2.296vw;width:calc(100% + 2.296vw)}}@media screen and (max-width:959px){.group_3UZz7{padding-left:.313vw!important;border-top:.313vw solid #008830;border-left:.313vw solid #008830}.content_2eA9Q{padding:.521vw 1.042vw;border:.313vw solid #008830}.content_2eA9Q>span{font-size:1.4rem}.content_2eA9Q>span:first-child{margin-top:.105vw}.content_2eA9Q>span:last-child{margin-left:10px}.content_2eA9Q strong{font-size:1.6rem}.content_2eA9Q span.unit_3J4fU{font-size:1.4rem}.box_3MSu7{margin-top:.313vw}.box_3MSu7.parent_3WYVw{border-top:.313vw solid #008830;border-left:.313vw solid #008830;padding-left:3.02vw}.box_3MSu7.parent_3WYVw:after{width:3.334vw;border-bottom:.313vw solid #008830}.box_3MSu7.parent_3WYVw>.content_2eA9Q{margin-left:-3.02vw;width:calc(100% + 3.02vw)}}@media screen and (max-width:600px){.group_3UZz7{padding-left:.5vw!important;border-top:.5vw solid #008830;border-left:.5vw solid #008830}.content_2eA9Q{padding:.834vw 1.667vw;border:.5vw solid #008830}.content_2eA9Q>span{font-size:1.4rem}.content_2eA9Q>span:first-child{margin-top:.167vw}.content_2eA9Q>span:last-child{margin-left:10px}.content_2eA9Q strong{font-size:1.6rem}.content_2eA9Q span.unit_3J4fU{font-size:1.4rem}.box_3MSu7{margin-top:.5vw}.box_3MSu7.parent_3WYVw{border-top:.5vw solid #008830;border-left:.5vw solid #008830;padding-left:4.834vw}.box_3MSu7.parent_3WYVw:after{width:5.334vw;border-bottom:.5vw solid #008830}.box_3MSu7.parent_3WYVw>.content_2eA9Q{margin-left:-4.834vw;width:calc(100% + 4.834vw)}}',""]),o.locals={container:"container_23lpF",group:"group_3UZz7",content:"content_2eA9Q",unit:"unit_3J4fU",box:"box_3MSu7",parent:"parent_3WYVw"},t.exports=o},560:function(t,e,n){"use strict";n.r(e);n(93);var o=n(0).default.extend({props:{"陽性者数":{type:Number,required:!0},"入院中":{type:Number,required:!0},"軽症中等症":{type:Number,required:!0},"重症":{type:Number,required:!0},"宿泊療養":{type:Number,required:!0},"自宅療養":{type:Number,required:!0},"調査中":{type:Number,required:!0},"死亡":{type:Number,required:!0},"退院":{type:Number,required:!0}}}),r=n(511),l=n(12);var component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.$style.container},[n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(" "+t._s(t.$t("陽性者数"))+" ("+t._s(t.$t("累計"))+") ")]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.陽性者数.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("入院")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.入院中.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",{domProps:{innerHTML:t._s(t.$t("軽症・中等症"))}}),t._v(" "),n("span",[n("strong",[t._v(t._s(t.軽症中等症.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("重症")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.重症.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])])]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("宿泊療養")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.宿泊療養.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("自宅療養")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.自宅療養.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("入院・療養等調整中")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.調査中.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("死亡")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.死亡.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("退院等（療養期間経過を含む）")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.退院.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])])])])}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.default=component.exports},596:function(t,e,n){"use strict";var o=n(456),r=n.n(o);n.d(e,"default",(function(){return r.a}))},597:function(t,e,n){var o=n(32)(!1);o.push([t.i,".button_1ZEr3{margin:20px 0 0;color:#008830!important;text-decoration:none;padding:4px 8px;font-size:1.4rem;display:inline-block;border-radius:4px;background-color:#fff;border:1px solid #008830;color:#008830;cursor:pointer}.button_1ZEr3:hover{color:#fff!important;background-color:#008830;color:#fff}.button_1ZEr3:hover>i{color:#fff!important}",""]),o.locals={button:"button_1ZEr3"},t.exports=o},668:function(t,e,n){"use strict";n.r(e);var o=n(24),r=n.n(o),l=n(85),c=n(388),d=n(403),f=n(560),_=n(112);n(13);function v(data,t){var e;return function n(data){e||(data.attr===t?e=data.value:data.children&&data.children.forEach((function(t){e||n(t)})))}(data),e||0}var m={components:{DataView:c.default,ConfirmedCasesDetailsTable:f.default,AppLink:l.default,OpenDataLink:d.default},data:function(){var t=_.main_summary;return{confirmedCases:function(data){return{"陽性者数":v(data,"陽性患者数"),"入院中":v(data,"入院中"),"軽症中等症":v(data,"軽症・中等症"),"重症":v(data,"重症"),"宿泊療養":v(data,"宿泊療養"),"自宅療養":v(data,"自宅療養"),"調査中":v(data,"調査中"),"死亡":v(data,"死亡"),"退院":v(data,"退院")}}(t),date:r()(t.children[0].date).format("YYYY/MM/DD HH:mm")}}},h=n(596),w=n(12),x=n(63),y=n.n(x),$=n(419);var component=Object(w.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard ConfirmedCasesDetailsCard",attrs:{cols:"12",md:"6"}},[n("client-only",[n("data-view",{attrs:{title:t.$t("検査陽性者の状況"),"title-id":"details-of-confirmed-cases",date:t.date},scopedSlots:t._u([{key:"additionalDescription",fn:function(){return[n("span",[t._v(t._s(t.$t("（注）")))]),t._v(" "),n("ul",[n("li",[t._v("\n            "+t._s(t.$t("チャーター機帰国者、クルーズ船乗客等は含まれていない"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("「重症」は、人工呼吸器管理（ECMOを含む）が必要な患者数を計上。"))+"\n            "),n("app-link",{attrs:{to:"https://www.bousai.metro.tokyo.lg.jp/_res/projects/default_project/_page_/001/011/435/7kai/202008207.pdf"}},[t._v("\n              "+t._s(t.$t("重症基準の考え方はこちら"))+"\n            ")])],1),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("退院者数の把握には一定の期間を要しており、確認次第数値を更新している"))+"\n          ")])])]},proxy:!0},{key:"footer",fn:function(){return[n("open-data-link",{attrs:{url:"https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000089"}})]},proxy:!0}])},[t._v(" "),n("confirmed-cases-details-table",t._b({attrs:{"aria-label":t.$t("検査陽性者の状況")}},"confirmed-cases-details-table",t.confirmedCases,!1)),t._v(" "),n("div",[n("app-link",{class:t.$style.button,attrs:{to:("ja"!==t.$i18n.locale?t.$i18n.locale:"")+"/cards/deaths-by-death-date"}},[t._v("\n          "+t._s(t.$t("死亡日別による死亡者数の推移はこちら"))+"\n        ")])],1)],1)],1)],1)}),[],!1,(function(t){this.$style=h.default.locals||h.default}),null,null);e.default=component.exports;y()(component,{VCol:$.a})}}]);