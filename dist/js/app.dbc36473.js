(function(t){function e(e){for(var a,s,r=e[0],c=e[1],l=e[2],p=0,d=[];p<r.length;p++)s=r[p],i[s]&&d.push(i[s][0]),i[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"004c":function(t,e,n){t.exports=n.p+"media/a09.f03a3f81.mp3"},"034f":function(t,e,n){"use strict";var a=n("c21b"),i=n.n(a);i.a},"04d3":function(t,e,n){},"0798":function(t,e,n){},"0e3c":function(t,e,n){"use strict";var a=n("1874"),i=n.n(a);i.a},"0e88":function(t,e,n){"use strict";var a=n("f4cc"),i=n.n(a);i.a},1033:function(t,e,n){t.exports=n.p+"media/a17.f4c46ac4.mp3"},1874:function(t,e,n){},"1a65":function(t,e,n){"use strict";var a=n("aff1"),i=n.n(a);i.a},"244d":function(t,e,n){t.exports=n.p+"media/a06.ab1bf499.mp3"},"28a8":function(t,e,n){"use strict";var a=n("f13c"),i=n.n(a);i.a},"2a9b":function(t,e,n){t.exports=n.p+"media/a02.819574f8.mp3"},"2be5":function(t,e,n){},"33be":function(t,e,n){"use strict";var a=n("a4fe"),i=n.n(a);i.a},"33eb":function(t,e,n){t.exports=n.p+"media/a16.48e2bbf6.mp3"},3794:function(t,e,n){t.exports=n.p+"media/t03.5c08eea0.mp3"},"3f36":function(t,e,n){"use strict";var a=n("2be5"),i=n.n(a);i.a},"3f9f":function(t,e,n){t.exports=n.p+"media/a21.1b69ee53.mp3"},"42fc":function(t,e,n){t.exports=n.p+"media/a18.9068d568.mp3"},"45e5":function(t,e,n){t.exports=n.p+"media/a24.c45045f7.mp3"},"4cd4":function(t,e,n){},"4dd7":function(t,e,n){t.exports=n.p+"media/a04.725858ed.mp3"},5108:function(t,e,n){"use strict";var a=n("04d3"),i=n.n(a);i.a},"537c":function(t,e,n){"use strict";var a=n("4cd4"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Book")],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("Cover",{staticClass:"cover"}),n("div",{ref:"book",staticClass:"book",on:{click:t.toggleTopFoot}},[n("Top",{ref:"top",staticClass:"top"}),n("div",{staticClass:"main"},[n("keep-alive",[n("router-view")],1),n("Nav",{staticClass:"nav"})],1)],1),n("PageToggle",{attrs:{id:"pageToggle"}})],1)},r=[],c=(n("28a5"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper",on:{click:t.SHNav}},[n("h1",{staticClass:"bookname"},[t._v("新时代大学英语")]),t._m(0),n("ul",{attrs:{id:"nav"}},[n("item",{staticClass:"item",attrs:{model:t.data.unitOne}})],1)])}),l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"nav"},[n("li",{staticClass:"preview"},[t._v("目录")])])}],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("div",{staticClass:"title",class:{bold:t.isFolder},attrs:{id:"isToggle"},on:{click:t.toggle,dblclick:t.changeType}},[n("span",{on:{touchstart:t.ts,touchend:t.toRouter}},[t._v(" "+t._s(t.model.name))]),t.isFolder?n("span",{staticClass:"symbol",on:{touchstart:t.sts,touchend:t.ste}},[t._v("["+t._s(t.open?"-":"+")+"]")]):t._e()]),t.isFolder?n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}]},t._l(t.model.children,function(t,e){return n("item",{key:e,staticClass:"item",attrs:{model:t}})})):t._e()])},p=[],d=(n("a481"),{name:"item",props:{model:{}},data:function(){return{open:!1,excludeUrl:["Unit1Communication","PartOneReading","PartTwoGrammarFocus","名词","PartThreePracticalWriting","PartFourTranslationFocus","词义的选择"]}},computed:{isFolder:function(){return this.model.children&&this.model.children.length},routPath:function(){}},mounted:function(){},methods:{sts:function(t){t.target.style.background="#6699CC"},ste:function(t){t.target.style.background=""},ts:function(){this.$el.style.background="#6699CC"},toRouter:function(t){this.$el.style.background="";var e=t.target.innerText.replace(/\s/g,"");if(-1===this.excludeUrl.indexOf(e)){switch(e){case"1.名词的分类":e="PartTwoGrammarFocus01";break;case"2.名词的格":e="PartTwoGrammarFocus02";break;case"1.根据搭配确定词义":e="PartFourTranslationFocus01";break;case"2.根据上下文确定词义":e="PartFourTranslationFocus02";break;case"3.根据词性确定词义":e="PartFourTranslationFocus03";break}this.$root.eventHub.$emit("modCurrentUrl","".concat(e)),this.$router.push("/".concat(e))}},toggle:function(){this.isFolder&&(this.open=!this.open)},changeType:function(){this.isFolder||(Vue.set(this.model,"children",[]),this.addChild(),this.open=!0)},addChild:function(){this.model.children.push({name:"new stuff"})}}}),f=d,m=(n("603b"),n("2877")),h=Object(m["a"])(f,u,p,!1,null,"0f18689a",null);h.options.__file="Tree.vue";var v=h.exports,_={data:function(){return{data:{unitOne:{name:"Unit 1 Communication",children:[{name:"Part One Reading",children:[{name:"Text A Waiting for Ages!"},{name:"Section 1 Vocabulary"},{name:"Section 2 Sentence Analysis"}]},{name:"Part Two Grammar Focus",children:[{name:"名词",children:[{name:"1. 名词的分类"},{name:"2. 名词的格"}]}]},{name:"Part Three Practical Writing",children:[{name:"Business Card"}]},{name:"Part Four Translation Focus",children:[{name:"词义的选择",children:[{name:"1. 根据搭配确定词义"},{name:"2. 根据上下文确定词义"},{name:"3. 根据词性确定词义"}]}]}]},unitTwo:{name:"Unit 2 Communication",children:[{name:"Part One Reading",children:[{name:"Text A Waiting for Ages!",children:[{name:"Section 1 Vocabulary"},{name:"Section 2 Sentence Analysis"}]}]},{name:"Part Two Grammar Focus",children:[{name:"child folder",children:[{name:"hello"},{name:"wat"}]},{name:"hello"},{name:"wat"},{name:"child folder",children:[{name:"hello"},{name:"wat"}]}]},{name:"Part Three Practical Writing",children:[{name:"child folder",children:[{name:"hello"},{name:"wat"}]},{name:"hello"},{name:"wat"},{name:"child folder",children:[{name:"hello"},{name:"wat"}]}]}]}},flag:!0,exclude:["Unit 1 Communication","Part One Reading","Part Two Grammar Focus","名词","Part Three Practical Writing","Part Four Translation Focus","词义的选择","[+]","[-]"]}},components:{item:v},mounted:function(){this.$root.eventHub.$on("SHNav",this.SHNav)},methods:{SHNav:function(t){var e=t.target;-1===this.exclude.indexOf(e.innerText.trim())&&(this.flag?(this.$el.style.transform="translateX(0%)",this.flag=!1):(this.$el.style.transform="translateX(-100%)",this.flag=!0))}}},g=_,b=(n("537c"),Object(m["a"])(g,c,l,!1,null,"588d85cb",null));b.options.__file="Nav.vue";var C=b.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{ref:"back",staticClass:"back",on:{touchstart:t.backTouchstart,touchend:t.backTouchend}}),n("div",{staticClass:"right"},[n("span",{staticClass:"search",on:{touchstart:t.liClickStart,touchend:t.liClickEnd}})])])},x=[],T={methods:{liClickStart:function(t){var e=t.target;e.style.background="#99CCCC"},liClickEnd:function(t){var e=t.target;e.style.background="","search"===e.className&&this.$root.eventHub.$emit("SHNav",t)},backTouchstart:function(){var t=this.$refs.back;t.style.backgroundColor="#006699"},backTouchend:function(t){var e=this.$refs.back;e.style.backgroundColor="",this.$root.eventHub.$emit("closeBook")}}},w=T,k=(n("9df0"),Object(m["a"])(w,y,x,!1,null,"c01b17b8",null));k.options.__file="Top.vue";var P=k.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"foot"},[n("ul",{staticClass:"list"},t._l(t.mulu,function(e,a){return n("li",{key:a,on:{touchstart:t.liClickStart,touchend:t.liClickEnd}},[t._v("\n      "+t._s(e)+"\n    ")])}))])},$=[],N={data:function(){return{mulu:["目录"]}},components:{},updated:function(){},methods:{liClickStart:function(t){var e=t.target;"LI"===e.tagName?e.style.background="#99CCCC":e.parentNode.style.background="#99CCCC"},liClickEnd:function(t){var e=t.target;"LI"===e.tagName?(e.style.background="","目录"===e.innerText&&this.$root.eventHub.$emit("SHNav",t)):e.parentNode.style.background=""}}},E=N,O=(n("7cf5"),Object(m["a"])(E,F,$,!1,null,"666b6200",null));O.options.__file="Foot.vue";var S=O.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"cover",staticClass:"cover",on:{click:t.openbook}},[a("div",{ref:"move",staticClass:"move"},[a("div",{ref:"img_3d",staticClass:"img_3d"},[a("img",{attrs:{src:n("90b2"),alt:""}})])])])},j=[],A={data:function(){return{flag:!0}},mounted:function(){var t=this;this.$root.eventHub.$on("closeBook",function(){t.openbook()})},methods:{openbook:function(){var t=this.$refs.img_3d,e=this.$refs.cover;if(this.flag)t.style.transform="rotateY(-180deg)",setTimeout(function(){e.style.display="none"},800),this.flag=!1;else{e.style.display="block";setTimeout(function(){t.style.transform="rotateY(0deg)"},100);this.flag=!0}}}},U=A,D=(n("71ca"),Object(m["a"])(U,H,j,!1,null,"3190fe81",null));D.options.__file="Cover.vue";var M=D.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[t.previewFlag?n("span",{ref:"preview",staticClass:"preview",on:{click:t.preview}},[t._v("上一章")]):t._e(),t.nextFlag?n("span",{staticClass:"next",on:{click:t.next}},[t._v("下一章")]):t._e()])},I=[],W={data:function(){return{routers:["TextAWaitingforAges!","Section1Vocabulary","Section2SentenceAnalysis","PartTwoGrammarFocus01","PartTwoGrammarFocus02","BusinessCard","PartFourTranslationFocus01"],currentUrl:""}},computed:{spanPre:function(){return this.routers[this.routers.indexOf(this.currentUrl)-1]},spanTNext:function(){return this.routers[this.routers.indexOf(this.currentUrl)+1]},previewFlag:function(){return this.currentUrl!==this.routers[0]},nextFlag:function(){return this.currentUrl!==this.routers[this.routers.length-1]}},mounted:function(){var t=this;this.currentUrl=window.location.href.split("#")[1].substr(1),this.$root.eventHub.$on("toPreview",function(){t.preview()}),this.$root.eventHub.$on("toNext",function(){t.next()}),this.$root.eventHub.$on("modCurrentUrl",function(e){t.currentUrl=e})},methods:{preview:function(){var t=this.routers[this.routers.indexOf(this.currentUrl)-1];this.currentUrl!==this.routers[0]&&(this.$router.push("".concat(t)),this.currentUrl=window.location.href.split("#")[1].substr(1))},next:function(){var t=this.routers[this.routers.indexOf(this.currentUrl)+1];this.currentUrl!==this.routers[this.routers.length-1]&&(this.$router.push("".concat(t)),this.currentUrl=window.location.href.split("#")[1].substr(1))}}},G=W,R=(n("1a65"),Object(m["a"])(G,B,I,!1,null,"5a26ef3c",null));R.options.__file="PageToggle.vue";var L=R.exports,V={data:function(){return{TFflag:!0,exclude:["Unit 1 Communication","Part One Reading","Part Two Grammar Focus","名词","Part Three Practical Writing","Part Four Translation Focus","词义的选择","[+]","[-]"]}},components:{Nav:C,Top:P,Foot:S,Cover:M,PageToggle:L},created:function(){},mounted:function(){var t=this;this.$root.eventHub.$on("toggleTopFoot",function(e){t.toggleTopFoot(e)})},updated:function(){},methods:{pageChange:function(){var t,e,n=this,a=this.$refs.book,i=document.body.scrollWidth/5;window.location.href;a.addEventListener("touchstart",function(e){t=e.touches[0].pageX}),a.addEventListener("touchend",function(a){e=a.changedTouches[0].pageX;var o=e-t;Math.abs(o)>i&&(o>0?(n.$root.eventHub.$emit("toPreview"),console.log("next")):(console.log("preview"),n.$root.eventHub.$emit("toNext")))})},toggleTopFoot:function(t){var e=t.target,n=this.$refs.top.$el;"isToggle"===e.parentNode.id&&"nav"!==e.className.split(" ")[1]||(this.TFflag&&"audio"!==e.className.split(" ")[0]&&"symbol"!==e.className&&"CH_EN"!==e.className.split(" ")[0]&&"preview"!==e.className&&"next"!==e.className?(n.style.transform="translateY(0%)",this.TFflag=!1):(n.style.transform="translateY(-100%)",this.TFflag=!0))}}},X=V,Y=(n("8a07"),Object(m["a"])(X,s,r,!1,null,"4b80eaed",null));Y.options.__file="index.vue";var J=Y.exports,q={name:"app",components:{Book:J}},z=q,Z=(n("034f"),Object(m["a"])(z,i,o,!1,null,null,null));Z.options.__file="App.vue";var Q=Z.exports,K=n("8c4f"),tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"detail",staticClass:"wrapper",attrs:{id:"wrapper"}},[n("h2",{staticClass:"title"},[t._v(t._s(this.title))]),t._l(t.texts,function(e,a){return n("div",{key:a,staticClass:"text",on:{click:t._play}},[n("span",{staticClass:"text_en"},[t._v("\n      "+t._s(e.text)+"\n    ")]),n("span",{staticClass:"text_ch"},[t._v("\n      "+t._s(e.text_ch)+"\n    ")]),n("span",{staticClass:"CH_EN",on:{click:t.CH_EN}}),n("span",[n("Audio",{attrs:{mp3_name:e.mp3}})],1)])})],2)},et=[],nt=(n("ac6a"),n("1c4c"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"audio"},[a("audio",{ref:"audio",on:{ended:t.resetAudioBoxImg}},[a("source",{attrs:{src:n("e1e8")("./"+t.mp3_name+".mp3")}})])])}),at=[],it={props:{mp3_name:""},data:function(){return{}},mounted:function(){var t=this;this.$root.eventHub.$on("stopPlay",function(){t.stopPlay()})},methods:{stopPlay:function(){console.log("stopPlay");var t=this.$refs.audio;t&&(t.pause(),t.currentTime=0,t.parentNode.className="audio start")},resetAudioBoxImg:function(){this.$el.className="audio"}}},ot=it,st=(n("33be"),Object(m["a"])(ot,nt,at,!1,null,"25a5565a",null));st.options.__file="Audio_1.vue";var rt=st.exports,ct="localhost:9000",lt={env:ct},ut={data:function(){return{title:"",texts:[],flag:!0,CH_EN_flag:!0}},components:{Audio:rt,PageToggle:L},computed:{},created:function(){this._initDataText()},methods:{CH_EN:function(t){var e=t.target.previousSibling,n=e.previousSibling;this.CH_EN_flag?(n.style.opacity="0",e.style.opacity="1",setTimeout(function(){e.style.display="inline",n.style.display="none"},600),t.target.className="CH_EN en",this.CH_EN_flag=!1):(e.style.opacity="0",n.style.opacity="1",setTimeout(function(){n.style.display="inline",e.style.display="none"},600),t.target.className="CH_EN ch",this.CH_EN_flag=!0)},_play:function(t){var e=t.target,n=e.children[0];if("audio"===e.className.split(" ")[0]){if(e.flag)return n.pause(),n.currentTime=0,e.className="audio start",void(e.flag=!1);var a=Array.from(document.querySelectorAll(".audio"));a.forEach(function(t){t.flag=!1,t.children[0].pause(),t.className="audio start",t.children[0].currentTime=0}),e.flag?(n.pause(),n.currentTime=0,e.className="audio start",e.flag=!1):(e.flag=!0,n.play(),e.className="audio stop")}},_initDataText:function(t){var e=this;fetch("http://".concat(lt.env,"/web/xsden/initDataText_1")).then(function(t){return t.json()}).then(function(t){e.title=t[0].title,e.texts=t})}}},pt=ut,dt=(n("3f36"),Object(m["a"])(pt,tt,et,!1,null,"7ae0dfa2",null));dt.options.__file="TextA.vue";var ft=dt.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section"},[n("h3",[t._v("Section 1 Vocabulary")]),n("ul",{staticClass:"list"},t._l(t.data,function(e,a){return n("li",{key:a,ref:"myli",refInFor:!0,staticClass:"item"},[n("strong",{ref:"strong",refInFor:!0,staticClass:"first"},[t._v("\n        "+t._s(e.strong)+"\n      ")]),n("span",{staticClass:"audio_box",on:{click:t.play}},[n("Audio",{staticClass:"audio",attrs:{mp3_name:e.mp3}})],1),n("div",{staticClass:"content"},[n("span",[t._v(t._s(e.c1))]),n("p",[t._v(t._s(e.zh1))])]),n("div",{staticClass:"content"},[n("span",[t._v(t._s(e.c2))]),n("p",[t._v(t._s(e.zh2))])])])})),t._m(0)])},ht=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"names"},[n("h4",[t._v("Proper Names")]),n("ul",{staticClass:"list"},[n("li",[t._v("1. Jane [] （女子名）简")]),n("li",[t._v("2. Manchester [] 曼彻斯特（英格兰西北部城市）")]),n("li",[t._v("3. Moss Side [] 莫斯赛德（地名）")])])])}],vt={data:function(){return{items:{a:{strong:"1. the other day 前几天；不久前的一天",mp3:"a01",contents:{c1:{span:"1) I saw him in town the other day",p:"我前几天在镇上见过他"},c2:{span:"2)It was a terrible piece of work you turned in the other day.",p:"那天你交的作业太糟糕了。"}}},b:{strong:"2. arrange []  v. 安排；准备",mp3:"a02",contents:{c1:{span:"1)\tThey arranged to meet at seven o’clock.",p:"他们约好7点钟见面。"},c2:{span:"2)\tI have arranged to meet him at the restaurant. ",p:"我和他约好了在饭馆见面。"}}}},data:[],color:["#99CCFF","#99CCCC","#66CCCC","#009999"]}},components:{Audio:rt,PageToggle:L},mounted:function(){this._initData()},updated:function(){this.addBackground()},methods:{addBackground:function(){var t=this,e=this.$refs.myli,n=0;e.forEach(function(e){e.style.background="".concat(t.color[n]),n++,n>t.color.length-1&&(n=0)})},_initData:function(){var t=this;fetch("http://".concat(lt.env,"/web/xsden/initData_1")).then(function(t){return t.json()}).then(function(e){t.data=e})},play:function(t){var e=t.target.children[0];this.$root.eventHub.$emit("stopPlay"),t.target.className="audio stop",e.play()}}},_t=vt,gt=(n("5108"),Object(m["a"])(_t,mt,ht,!1,null,"90eb3a88",null));gt.options.__file="Section01.vue";var bt=gt.exports,Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section"},[n("h3",[t._v("Section 2 Sentence Analysis")]),n("ul",{staticClass:"list"},t._l(t.data,function(e,a){return n("li",{key:a,ref:"myli",refInFor:!0,staticClass:"item"},[n("strong",[t._v(t._s(e.strong))]),n("p",[t._v(t._s(e.p1))]),n("p",[t._v(t._s(e.p2))])])}))])},yt=[],xt={data:function(){return{data:[],color:["#99CCFF","#99CCCC","#66CCCC","#009999"]}},components:{PageToggle:L},created:function(){this._initData()},updated:function(){this.addBackground()},methods:{addBackground:function(){var t=this,e=this.$refs.myli,n=0;e.forEach(function(e){e.style.background="".concat(t.color[n]),n++,n>t.color.length-1&&(n=0)})},_initData:function(){var t=this;fetch("http://".concat(lt.env,"/web/xsden/initData_s2")).then(function(t){return t.json()}).then(function(e){t.data=e})}}},Tt=xt,wt=(n("28a8"),Object(m["a"])(Tt,Ct,yt,!1,null,"9313d96a",null));wt.options.__file="Section02.vue";var kt=wt.exports,Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("h3",[t._v("1. 名词的分类")]),n("div",{staticClass:"ex"},[t._v("\n    名词可分为专有名词和普通名词，普通名词又可分为个体名词、集体名词、物质名词和抽象名词。从名词是否可以计数来看，普通名词又可分为可数名词和不可数名词。\n  ")]),n("ul",{staticClass:"list"},t._l(t.titles,function(e,a){return n("li",{key:a,staticClass:"item"},[n("h4",[t._v(t._s(e))]),t._l(t.datas[a],function(e,a){return n("p",{key:a},[t._v("\n        "+t._s(e)+"\n      ")])})],2)}))])},Ft=[],$t={data:function(){return{datas:[],titles:[]}},mounted:function(){this.initData_p2_01()},methods:{initData_p2_01:function(){var t=this;fetch("http://".concat(lt.env,"/web/xsden/initP2_01")).then(function(t){return t.json()}).then(function(e){e.forEach(function(e){t.titles.push(e.title),delete e.id,delete e.title}),t.datas=e})}}},Nt=$t,Et=(n("0e3c"),Object(m["a"])(Nt,Pt,Ft,!1,null,"60960cea",null));Et.options.__file="P01.vue";var Ot=Et.exports,St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("h3",{staticClass:"title"},[t._v("2. 名词的格")]),n("ul",{staticClass:"list"},t._l(t.titles,function(e,a){return n("li",{key:a,staticClass:"item"},[n("h4",[t._v(t._s(e))]),t._l(t.datas[a],function(e,a){return n("p",{key:a},[t._v("\n        "+t._s(e)+"\n      ")])})],2)}))])},Ht=[],jt={data:function(){return{titles:[],datas:[]}},mounted:function(){this.initData_p2_02()},methods:{initData_p2_02:function(){var t=this;fetch("http://".concat(lt.env,"/web/xsden/initP2_02")).then(function(t){return t.json()}).then(function(e){e.forEach(function(e){t.titles.push(e.title),delete e.id,delete e.title}),t.datas=e})}}},At=jt,Ut=(n("0e88"),Object(m["a"])(At,St,Ht,!1,null,"9e070b2c",null));Ut.options.__file="P02.vue";var Dt=Ut.exports,Mt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Bt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("h3",{staticClass:"title"},[t._v("Part Three Practical Writing")]),n("div",{staticClass:"ex"},[n("h4",[t._v("Business Card")]),n("p",[t._v("在商务活动中，交换名片是一项很流行也很重要的活动。在对外交流中，将自己的名片印上英文是很有必要的。这就要求名片上的英文写法要规范，顺序符合英语规则。")])]),n("div",{staticClass:"explain"},[n("h3",[t._v("A business card should include the following details:")]),n("ul",{staticClass:"list"},[n("li",[t._v("1. 单位或公司名称（the name of your work unit or company）")]),n("li",[t._v("2. 姓名（your name）")]),n("li",[t._v("3. 职位、头衔或职业（your position, title, or occupation）")]),n("li",[t._v(" 4. 通讯方式:\n        "),n("p",[t._v("1) 地址（the address of your company）")]),n("p",[t._v("2) 电话号码（telephone number）")]),n("p",[t._v("3) 传真号码（fax number）")]),n("p",[t._v("4) 电子邮箱（e-mail address）")]),n("p",[t._v("5) 网址（website）")])]),n("li",[t._v("现在，名片有朝着多样化、个性化方向发展的趋势，不仅仅限于自我介绍的功效，还带着广告宣传的色彩。根据实际情况或艺术效果往往可以调整上述要点1和要点2在名片上的位置。下面是两个实例。")])])]),n("div",{staticClass:"sample"},[n("h3",{staticClass:"num"},[t._v("Sample 1")]),n("div",{staticClass:"show"},[n("div",{staticClass:"top"},[n("strong",[t._v("Li Hua")]),n("p",[t._v("Deputy Manager")]),n("p",[t._v("Export Department")]),n("p",[t._v("Yilong Mechanical & Electronic Products Trading Co., Ltd.")])]),n("div",{staticClass:"bottom"},[n("div",{staticClass:"left"},[n("p",[t._v("No. 123, Tianmushan Rd.")]),n("p",[t._v("Xihu District, Hangzhou ")]),n("p",[t._v("Zhejiang Province 310000")]),n("p",[t._v("P.R.China ")])]),n("div",{staticClass:"right"},[n("p",[t._v("Tel.: 86-0571-88888888")]),n("p",[t._v("Fax: 86-0571-66666666")]),n("p",[t._v("E-mail: lihua@yilong.com")]),n("p",[t._v("Mobile: 86-13905710000")])])])])]),n("div",{staticClass:"sample"},[n("h3",{staticClass:"num"},[t._v("Sample 2")]),n("div",{staticClass:"show"},[n("div",{staticClass:"top"},[n("p",[t._v("QIANJIANG FINANCIAL SCHOOL")]),n("strong",[t._v("Han Meimei")]),n("p",[t._v("Associate Professor")])]),n("div",{staticClass:"bottom"},[n("div",{staticClass:"left"},[n("p",[t._v("No. 468, Zhongshan Rd. ")]),n("p",[t._v("Ningbo,Zhejiang Province")]),n("p",[t._v("P.R.China ")]),n("p",[t._v("www.qianjiang.edu.cn")])]),n("div",{staticClass:"right"},[n("p",[t._v("Tel.: 86-0571-88888888")]),n("p",[t._v("Fax: 86-0571-66666666")]),n("p",[t._v("E-mail:hanmm@qianjiang.cn")]),n("p",[t._v("Mobile: 86-13905740000")])])])])]),n("div",{staticClass:"notes"},[n("h3",[t._v("【注意】")]),n("p",[t._v("1. 英语地名的写法，一般遵循从小地名到大地名的写法。一般顺序为： 室号——门牌号——街道名——城市名——省（州）——国家\n    ")]),n("p",[t._v("2.\t地址在名片上，应该保持一定的完整性。门牌号与街道名不可分开写，必须在同一行，不可断行。")])])])}],It={components:{PageToggle:L}},Wt=It,Gt=(n("ada4"),Object(m["a"])(Wt,Mt,Bt,!1,null,"c884fdf2",null));Gt.options.__file="index.vue";var Rt=Gt.exports,Lt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Vt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("h2",{staticClass:"title"},[t._v("Part Four Translation Focus")]),n("div",{staticClass:"ex"},[n("h3",[t._v("词义的选择")]),n("p",[t._v("词是句子的基本构建单位。如何选择正确的词义，是翻译过程中首先要解决的问题。在英语和汉语中，一词多义的现象都十分普遍。同样，一个简单的字或词语，在不同的上下文中，就可能有不同的含义，这就需要我们依靠具体的语境来判断某个字或词语的意义。")]),n("p",[t._v("在翻译过程中，如果仅拘泥于词典提供的基本释义，机械地在两种语言中寻找对应的词语，是有碍译文质量的。译者只有在掌握词典基本释义的基础上，根据具体的语言环境和搭配习惯确定和选择词义，才能进行不同的翻译搭配，并确定词义。")]),n("p",[t._v("词义选择可以从以下三个方面着手。")])]),n("div",{staticClass:"detail"},[n("h3",[t._v("1. 根据搭配确定词义")]),n("ul",{staticClass:"list"},[n("li",[t._v("英语和汉语都具有各自的组合规律或搭配习惯。因此，在翻译中，可以通过词之间的固定关系选择词及确定词义。")]),n("li",[t._v("下面，我们以“work”一词为例，来看不同搭配中的不同词义。")]),n("li",[t._v("1)\tMost people have to work in order to live.\n        "),n("p",[t._v("大多数人均须工作以维持生活。")])]),n("li",[t._v("2)\tMy plan worked, and I got them to agree.\n        "),n("p",[t._v("我的计划奏效了，我让他们同意了。")])]),n("li",[t._v("3)\tHer face worked as she stared at him in terror.\n        "),n("p",[t._v("她惊恐地注视着他，吓得脸也抽动起来。")])]),n("li",[t._v("4)\tRain has worked in through the roof.\n        "),n("p",[t._v("雨水透过房顶逐渐渗到屋子里来了。")])]),n("li",[t._v("5)\tMy watch doesn’t work.\n        "),n("p",[t._v("我的表不走了。")])])])]),n("div",{staticClass:"detail"},[n("h3",[t._v("2. 根据上下文确定词义")]),n("ul",{staticClass:"list"},[n("li",[t._v("在英语中，同一个词在不同的场合往往有不同的含义，因此翻译中要根据语境来判断和确定某个词在特定场合下所具有的含义，以达到翻译的通顺流畅。")]),n("li",[t._v("下面，我们以“figure”为例。")]),n("li",[t._v("1)\tHe has an income of six figures.\n        "),n("p",[t._v("他的收入是六位数的。")])]),n("li",[t._v("2)\tThe central figure in the painting is the artist’s daughter.\n        "),n("p",[t._v("画中间的那个人是画家的女儿。")])]),n("li",[t._v("3)\tShe’s a fine figure of a woman.\n        "),n("p",[t._v("她身材苗条。")])]),n("li",[t._v("4)\tThe figure on Page 22 shows a map of Africa.\n        "),n("p",[t._v("第22页的插图是非洲地图。")])])])]),n("div",{staticClass:"detail"},[n("h3",[t._v("3. 根据词性确定词义")]),n("ul",{staticClass:"list"},[n("li",[t._v("很多英文单词有多种词性。遇到这种情况时，如果不弄清楚词性，常常就会将词义搞错，进而影响对原文的正确理解和准确翻译。因此，在翻译中，我们可以根据语法关系来辨别关键词的词性，以便准确地判断词义。")]),n("li",[t._v("下面，我们以“round”一词为例。")]),n("li",[t._v("1)\tThe Earth is not completely round. (形容词)\n        "),n("p",[t._v("地球并不完全是圆的。")])]),n("li",[t._v("2)\tLet’s go into the museum and have a look round. (副词)\n        "),n("p",[t._v("让我们进博物馆转一转。")])]),n("li",[t._v("3)\tCut the pastry into small rounds, one for each pie. (名词)\n        "),n("p",[t._v("把油酥面团切成小圆片，每一片做一个馅饼。")])]),n("li",[t._v("4)\tThe Earth moves round the Sun. (介词)\n        "),n("p",[t._v("地球环绕太阳运行。")])])])])])}],Xt={components:{PageToggle:L}},Yt=Xt,Jt=(n("a789"),Object(m["a"])(Yt,Lt,Vt,!1,null,"9f159d84",null));Jt.options.__file="index.vue";var qt=Jt.exports;a["a"].use(K["a"]);var zt=new K["a"]({scrollBehavior:function(t,e,n){var a={};switch(t.hash&&(a.selector=t.hash),t.path){case"/TextAWaitingforAges!":a.y=0;break;case"/PartFourTranslationFocus02":a.y=812;break;case"/PartFourTranslationFocus03":a.y=1183;break}return a},routes:[{path:"/",redirect:"/TextAWaitingforAges!"},{path:"/TextAWaitingforAges!",component:ft,meta:{scrollToTop:!0}},{path:"/Section1Vocabulary",component:bt,meta:{scrollToTop:!0}},{path:"/Section2SentenceAnalysis",component:kt,meta:{scrollToTop:!0}},{path:"/PartTwoGrammarFocus01",component:Ot},{path:"/PartTwoGrammarFocus02",component:Dt},{path:"/BusinessCard",component:Rt},{path:"/PartFourTranslationFocus01",component:qt},{path:"/PartFourTranslationFocus02",component:qt,meta:{scrollToTop:!0}},{path:"/PartFourTranslationFocus03",component:qt,meta:{scrollToTop:!0}}]}),Zt=n("1368"),Qt=n.n(Zt);Qt.a.polyfill(),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(Q)},router:zt,data:{eventHub:new a["a"]}}).$mount("#app")},"5f9d":function(t,e,n){t.exports=n.p+"media/a08.f73b19c6.mp3"},"603b":function(t,e,n){"use strict";var a=n("0798"),i=n.n(a);i.a},"618e":function(t,e,n){t.exports=n.p+"media/a14.d5e9980c.mp3"},"65cc":function(t,e,n){t.exports=n.p+"media/a20.3e46fc76.mp3"},"6a92":function(t,e,n){},"71ca":function(t,e,n){"use strict";var a=n("7512"),i=n.n(a);i.a},7512:function(t,e,n){},"792c":function(t,e,n){t.exports=n.p+"media/a23.d8a4599d.mp3"},"7cf5":function(t,e,n){"use strict";var a=n("6a92"),i=n.n(a);i.a},"8a07":function(t,e,n){"use strict";var a=n("a65f"),i=n.n(a);i.a},"90b2":function(t,e,n){t.exports=n.p+"img/cover_1.07b61a84.jpg"},"920b":function(t,e,n){t.exports=n.p+"media/a22.8418ec61.mp3"},"92a1":function(t,e,n){t.exports=n.p+"media/t02.9a8b9432.mp3"},9483:function(t,e,n){t.exports=n.p+"media/a25.d190df13.mp3"},"9a37":function(t,e,n){t.exports=n.p+"media/a07.a669d35e.mp3"},"9df0":function(t,e,n){"use strict";var a=n("d1cc"),i=n.n(a);i.a},a4fe:function(t,e,n){},a65f:function(t,e,n){},a789:function(t,e,n){"use strict";var a=n("d594"),i=n.n(a);i.a},ada4:function(t,e,n){"use strict";var a=n("cbda"),i=n.n(a);i.a},af26:function(t,e,n){t.exports=n.p+"media/a19.5317f1a3.mp3"},aff1:function(t,e,n){},b3dd:function(t,e,n){t.exports=n.p+"media/a15.68521379.mp3"},b63e:function(t,e,n){t.exports=n.p+"media/a13.3b5e5483.mp3"},b8d7:function(t,e,n){t.exports=n.p+"media/a03.5656773e.mp3"},c21b:function(t,e,n){},cbda:function(t,e,n){},d1cc:function(t,e,n){},d594:function(t,e,n){},d664:function(t,e,n){t.exports=n.p+"media/t01.ea6f0520.mp3"},d782:function(t,e,n){t.exports=n.p+"media/a11.1b4295c4.mp3"},d7ea:function(t,e,n){t.exports=n.p+"media/a01.1f744830.mp3"},d963:function(t,e,n){t.exports=n.p+"media/a05.f75e90d0.mp3"},e1e8:function(t,e,n){var a={"./a01.mp3":"d7ea","./a02.mp3":"2a9b","./a03.mp3":"b8d7","./a04.mp3":"4dd7","./a05.mp3":"d963","./a06.mp3":"244d","./a07.mp3":"9a37","./a08.mp3":"5f9d","./a09.mp3":"004c","./a10.mp3":"f50a","./a11.mp3":"d782","./a12.mp3":"f2bb","./a13.mp3":"b63e","./a14.mp3":"618e","./a15.mp3":"b3dd","./a16.mp3":"33eb","./a17.mp3":"1033","./a18.mp3":"42fc","./a19.mp3":"af26","./a20.mp3":"65cc","./a21.mp3":"3f9f","./a22.mp3":"920b","./a23.mp3":"792c","./a24.mp3":"45e5","./a25.mp3":"9483","./t01.mp3":"d664","./t02.mp3":"92a1","./t03.mp3":"3794"};function i(t){var e=o(t);return n(e)}function o(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}i.keys=function(){return Object.keys(a)},i.resolve=o,t.exports=i,i.id="e1e8"},f13c:function(t,e,n){},f2bb:function(t,e,n){t.exports=n.p+"media/a12.a409a745.mp3"},f4cc:function(t,e,n){},f50a:function(t,e,n){t.exports=n.p+"media/a10.dc9a9b56.mp3"}});
//# sourceMappingURL=app.dbc36473.js.map