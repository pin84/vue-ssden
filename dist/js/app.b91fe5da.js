(function(t){function e(e){for(var n,o,r=e[0],c=e[1],l=e[2],p=0,f=[];p<r.length;p++)o=r[p],s[o]&&f.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"004c":function(t,e,a){t.exports=a.p+"media/a09.f03a3f81.mp3"},"034f":function(t,e,a){"use strict";var n=a("c21b"),s=a.n(n);s.a},"07e5":function(t,e,a){},1033:function(t,e,a){t.exports=a.p+"media/a17.f4c46ac4.mp3"},"10b3":function(t,e,a){},1728:function(t,e,a){"use strict";var n=a("fbb4"),s=a.n(n);s.a},"244d":function(t,e,a){t.exports=a.p+"media/a06.ab1bf499.mp3"},"26e2":function(t,e,a){},"29f3":function(t,e,a){"use strict";var n=a("5166"),s=a.n(n);s.a},"2a9b":function(t,e,a){t.exports=a.p+"media/a02.819574f8.mp3"},"2ca2":function(t,e,a){"use strict";var n=a("920d"),s=a.n(n);s.a},"33eb":function(t,e,a){t.exports=a.p+"media/a16.48e2bbf6.mp3"},3404:function(t,e,a){"use strict";var n=a("10b3"),s=a.n(n);s.a},3794:function(t,e,a){t.exports=a.p+"media/t03.5c08eea0.mp3"},"382b":function(t,e,a){},"3dc3":function(t,e,a){"use strict";var n=a("e709"),s=a.n(n);s.a},"3f63":function(t,e,a){},"3f76":function(t,e,a){"use strict";var n=a("d191"),s=a.n(n);s.a},"3f9f":function(t,e,a){t.exports=a.p+"media/a21.1b69ee53.mp3"},"425e":function(t,e,a){"use strict";var n=a("3f63"),s=a.n(n);s.a},"42fc":function(t,e,a){t.exports=a.p+"media/a18.9068d568.mp3"},"45e5":function(t,e,a){t.exports=a.p+"media/a24.c45045f7.mp3"},"4dd7":function(t,e,a){t.exports=a.p+"media/a04.725858ed.mp3"},"4e23":function(t,e,a){},5166:function(t,e,a){},"549a":function(t,e,a){"use strict";var n=a("8833"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Book")],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{ref:"imgForm",staticClass:"wrapper"},[a("div",{staticClass:"main"},[t._m(0),a("div",{staticClass:"btn"},[a("FileBtn",{ref:"fileBtn",staticClass:"choosefile",attrs:{flag:!1}}),a("Btn",{ref:"upload",staticClass:"upload",attrs:{msg:"上传",flag:!0}})],1)]),a("div",{ref:"preview",staticClass:"preview"},[a("span",[t._v("预览区")])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"show"},[a("img",{attrs:{src:"",alt:""}})])}],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("input",{attrs:{type:"file",name:"file",id:"inputfile"}}),a("label",{ref:"lable",staticClass:"lab",attrs:{for:"inputfile"}},[t._v("\r\n    "+t._s(t.msg)+"\r\n  ")])])},l=[],u={props:{flag:{type:Boolean,default:!0}},computed:{msg:function(){return this.flag?"重新选择":"选择文件"}}},p=u,f=(a("2ca2"),a("2877")),d=Object(f["a"])(p,c,l,!1,null,"ca3d3fa4",null);d.options.__file="FileBtn.vue";var m=d.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("input",{ref:"btn",staticClass:"_btn",class:t.isactive,attrs:{type:"submit"},domProps:{value:t.msg}})},h=[],_={props:{msg:{type:String,default:"上传"},flag:{type:Boolean,default:!1}},computed:{isactive:function(){return this.flag?"isactive":"navigator"}}},g=_,b=(a("3404"),Object(f["a"])(g,v,h,!1,null,"fe06205c",null));b.options.__file="Btn.vue";var C=b.exports,y={components:{FileBtn:m,Btn:C},mounted:function(){this.getdata()},methods:{getdata:function(){var t=this.$refs.fileBtn.$el;t.addEventListener("change",function(){var e=new FormData;e.append("userfile",t.firstChild.files[0])})}}},w=y,T=(a("9928"),Object(f["a"])(w,o,r,!1,null,"916ac51c",null));T.options.__file="index.vue";var x=T.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"book",on:{click:t.toggleTopFoot}},[a("Top",{ref:"top",staticClass:"top"}),a("div",{staticClass:"main"},[a("router-view"),a("Nav",{staticClass:"nav"})],1),a("Foot",{ref:"foot",staticClass:"foot"})],1)])},F=[],P=a("a322"),$=(a("28a5"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper",on:{click:t.SHNav}},[a("h1",{staticClass:"bookname"},[t._v("新时代大学英语")]),t._m(0),a("ul",{attrs:{id:"list"}},[a("item",{staticClass:"item",attrs:{model:t.data.unitOne}})],1)])}),E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"nav"},[a("li",{staticClass:"preview"},[t._v("目录")])])}],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("div",{staticClass:"title",class:{bold:t.isFolder},on:{click:t.toggle,dblclick:t.changeType}},[a("span",{on:{touchstart:t.ts,touchend:t.toRouter}},[t._v(" "+t._s(t.model.name))]),t.isFolder?a("span",{staticClass:"symbol",on:{touchstart:t.sts,touchend:t.ste}},[t._v("["+t._s(t.open?"-":"+")+"]")]):t._e()]),t.isFolder?a("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}]},t._l(t.model.children,function(t,e){return a("item",{key:e,staticClass:"item",attrs:{model:t}})})):t._e()])},N=[],O=(a("a481"),{name:"item",props:{model:{}},data:function(){return{open:!1,url:""}},computed:{isFolder:function(){return this.model.children&&this.model.children.length},routPath:function(){}},mounted:function(){},methods:{sts:function(t){t.target.style.background="#6699CC"},ste:function(t){t.target.style.background=""},ts:function(){this.$el.style.background="#6699CC"},toRouter:function(t){this.$el.style.background="";var e=t.target.innerText.replace(/\s/g,"");switch(e){case"名词":e="PartTwoGrammarFocus01";break;case"1.名词的分类":e="PartTwoGrammarFocus02";break;case"2.名词的格":e="PartTwoGrammarFocus03";break;case"词义的选择":e="PartFourTranslationFocus01";break;case"1.根据搭配确定词义":e="PartFourTranslationFocus02";break;case"2.根据上下文确定词义":e="PartFourTranslationFocus03";break;case"3.根据词性确定词义":e="PartFourTranslationFocus04";break}this.$router.push("/".concat(e))},toggle:function(){this.isFolder&&(this.open=!this.open)},changeType:function(){this.isFolder||(Vue.set(this.model,"children",[]),this.addChild(),this.open=!0)},addChild:function(){this.model.children.push({name:"new stuff"})}}}),j=O,H=(a("cdd9"),Object(f["a"])(j,S,N,!1,null,"1e648387",null));H.options.__file="Tree.vue";var A=H.exports,B={data:function(){return{data:{unitOne:{name:"Unit 1 Communication",children:[{name:"Part One Reading",children:[{name:"Text A Waiting for Ages!",children:[{name:"Section 1 Vocabulary"},{name:"Section 2 Sentence Analysis"}]}]},{name:"Part Two Grammar Focus",children:[{name:"名词",children:[{name:"1. 名词的分类"},{name:"2. 名词的格"}]}]},{name:"Part Three Practical Writing",children:[{name:"Business Card"}]},{name:"Part Four Translation Focus",children:[{name:"词义的选择",children:[{name:"1. 根据搭配确定词义"},{name:"2. 根据上下文确定词义"},{name:"3. 根据词性确定词义"}]}]}]},unitTwo:{name:"Unit 2 Communication",children:[{name:"Part One Reading",children:[{name:"Text A Waiting for Ages!",children:[{name:"Section 1 Vocabulary"},{name:"Section 2 Sentence Analysis"}]}]},{name:"Part Two Grammar Focus",children:[{name:"child folder",children:[{name:"hello"},{name:"wat"}]},{name:"hello"},{name:"wat"},{name:"child folder",children:[{name:"hello"},{name:"wat"}]}]},{name:"Part Three Practical Writing",children:[{name:"child folder",children:[{name:"hello"},{name:"wat"}]},{name:"hello"},{name:"wat"},{name:"child folder",children:[{name:"hello"},{name:"wat"}]}]}]},flag:!1}}},components:{item:A},mounted:function(){this.$root.eventHub.$on("SHNav",this.SHNav)},methods:{SHNav:function(t){"[+]"!==t.target.innerText&&"[-]"!==t.target.innerText&&(this.flag?(this.$el.style.transform="translateX(-100%)",this.flag=!1):(this.$el.style.transform="translateX(0%)",this.flag=!0))}}},I=B,M=(a("7997"),Object(f["a"])(I,$,E,!1,null,"e2cd8fca",null));M.options.__file="Nav.vue";var D=M.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("div",{ref:"back",staticClass:"back",on:{touchstart:t.backTouchstart,touchend:t.backTouchend}}),t._m(0)])},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"right"},[a("span",{staticClass:"search"}),a("span")])}],R={methods:{backTouchstart:function(){var t=this.$refs.back;t.style.backgroundColor="#006699"},backTouchend:function(t){console.log("aaaaaaaa");var e=this.$refs.back;e.style.backgroundColor="",this.$root.eventHub.$emit("closeBook")}}},W=R,U=(a("dfce"),Object(f["a"])(W,G,L,!1,null,"d49183f4",null));U.options.__file="Top.vue";var J=U.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"foot"},[a("ul",{staticClass:"list"},t._l(t.mulu,function(e,n){return a("li",{key:n,on:{touchstart:t.liClickStart,touchend:t.liClickEnd}},[t._v("\n      "+t._s(e)+"\n    ")])}))])},V=[],q={data:function(){return{mulu:["目录","设置"]}},components:{},updated:function(){},methods:{liClickStart:function(t){var e=t.target;"LI"===e.tagName?e.style.background="#99CCCC":e.parentNode.style.background="#99CCCC"},liClickEnd:function(t){var e=t.target;"LI"===e.tagName?(e.style.background="","目录"===e.innerText&&this.$root.eventHub.$emit("SHNav",t)):e.parentNode.style.background=""}}},z=q,Z=(a("f4ec"),Object(f["a"])(z,Y,V,!1,null,"857c1ac8",null));Z.options.__file="Foot.vue";var X=Z.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"cover",staticClass:"cover",on:{click:t.openbook}},[n("div",{ref:"move",staticClass:"move"},[n("div",{ref:"img_3d",staticClass:"img_3d"},[n("img",{attrs:{src:a("90b2"),alt:""}})])])])},Q=[],tt={data:function(){return{flag:!0}},mounted:function(){var t=this;this.$root.eventHub.$on("closeBook",function(){t.openbook()})},methods:{openbook:function(){var t=this.$refs.img_3d,e=this.$refs.cover;if(this.flag)t.style.transform="rotateY(-180deg)",setTimeout(function(){e.style.display="none"},800),this.flag=!1;else{e.style.display="block";setTimeout(function(){t.style.transform="rotateY(0deg)"},100);this.flag=!0}}}},et=tt,at=(a("71ca"),Object(f["a"])(et,K,Q,!1,null,"3190fe81",null));at.options.__file="Cover.vue";var nt,st=at.exports,it=(nt={data:function(){return{flag:!0,TFflag:!0}},components:{Nav:D,Top:J,Foot:X,Cover:st},mounted:function(){}},Object(P["a"])(nt,"mounted",function(){var t=this;this.$root.eventHub.$on("toggleTopFoot",function(e){t.toggleTopFoot(e)})}),Object(P["a"])(nt,"methods",{toggleTopFoot:function(t){var e=t.target,a=this.$refs.top.$el,n=this.$refs.foot.$el;"audio"!==e.className.split(" ")[0]&&"symbol"!==e.className&&"CH_EN"!==e.className.split(" ")[0]&&(this.TFflag?(a.style.transform="translateY(0%)",n.style.transform="translateY(0%)",this.TFflag=!1):(a.style.transform="translateY(-100%)",n.style.transform="translateY(100%)",this.TFflag=!0))}}),nt),ot=it,rt=(a("fe99"),Object(f["a"])(ot,k,F,!1,null,"4134dcad",null));rt.options.__file="Book.vue";var ct=rt.exports,lt={name:"app",components:{Index:x,FileBtn:m,Book:ct}},ut=lt,pt=(a("034f"),Object(f["a"])(ut,s,i,!1,null,null,null));pt.options.__file="App.vue";var ft=pt.exports,dt=a("8c4f"),mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"part_1"},[a("div",{staticClass:"title"},[a("h3",{ref:"h3"},[t._v("Unit 1 Communication")]),a("h4",[t._v("Part One Reading")])]),a("TextA"),a("Section01",{ref:"section1",staticClass:"s1"}),a("Section02",{ref:"section2",staticClass:"s2"})],1)},vt=[],ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"detail",staticClass:"wrapper",attrs:{id:"wrapper"}},[a("h2",{staticClass:"title"},[t._v(t._s(this.title))]),t._l(t.texts,function(e,n){return a("div",{key:n,staticClass:"text",on:{click:t._play}},[a("span",{staticClass:"text_en"},[t._v("\n      "+t._s(e.text)+"\n    ")]),a("span",{staticClass:"text_ch"},[t._v("\n      "+t._s(e.text_ch)+"\n    ")]),a("span",{staticClass:"CH_EN",on:{click:t.CH_EN}}),a("span",{ref:"audiobox",refInFor:!0,staticClass:"audio"},[a("Audio",{attrs:{mp3_name:e.mp3}})],1)])})],2)},_t=[],gt=(a("ac6a"),a("1c4c"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("audio",{ref:"audio",on:{ended:t.resetAudioBoxImg}},[n("source",{attrs:{src:a("e1e8")("./"+t.mp3_name+".mp3")}})])}),bt=[],Ct={props:{mp3_name:"",flag:!0},data:function(){return{}},created:function(){},mounted:function(){var t=this;this.$root.eventHub.$on("stopPlay",function(){t.stopPlay()})},methods:{stopPlay:function(){var t=this.$refs.audio;t&&(t.pause(),t.currentTime=0,t.parentNode.className="audio start")},resetAudioBoxImg:function(){this.$el.parentNode.className="audio start"}}},yt=Ct,wt=(a("8e0b"),Object(f["a"])(yt,gt,bt,!1,null,"3b7ac8c6",null));wt.options.__file="Audio.vue";var Tt=wt.exports,xt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},kt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("span",{staticClass:"preview"},[t._v(" aaaaaaa")]),a("span",{staticClass:"next"},[t._v("bbbbbbbb")])])}],Ft={data:function(){return{chapter:1,countData:0,routers:["a","b","c","d","e","f"]}},mounted:function(){console.log("aaaaaa=====",window.location.href)},methods:{}},Pt=Ft,$t=(a("3dc3"),Object(f["a"])(Pt,xt,kt,!1,null,"4cbeea21",null));$t.options.__file="PageToggle.vue";var Et=$t.exports,St={data:function(){return{title:"",texts:[],flag:!0,CH_EN_flag:!0}},components:{Audio:Tt,PageToggle:Et},computed:{},created:function(){this._initDataText()},methods:{CH_EN:function(t){var e=t.target.previousSibling,a=e.previousSibling;this.CH_EN_flag?(a.style.opacity="0",e.style.opacity="1",setTimeout(function(){e.style.display="inline",a.style.display="none"},600),t.target.className="CH_EN en",this.CH_EN_flag=!1):(e.style.opacity="0",a.style.opacity="1",setTimeout(function(){a.style.display="inline",e.style.display="none"},600),t.target.className="CH_EN ch",this.CH_EN_flag=!0)},_play:function(t){var e=t.target,a=e.children[0];if("audio"===e.className.split(" ")[0]){if(e.flag)return a.pause(),a.currentTime=0,e.className="audio start",void(e.flag=!1);var n=Array.from(document.querySelectorAll(".audio"));n.forEach(function(t){t.flag=!1,t.children[0].pause(),t.className="audio start",t.children[0].currentTime=0}),e.flag?(a.pause(),a.currentTime=0,e.className="audio start",e.flag=!1):(e.flag=!0,a.play(),e.className="audio stop")}},_initDataText:function(t){var e=this;fetch("http://data.iathena.top/web/xsden/initDataText_1").then(function(t){return t.json()}).then(function(t){e.title=t[0].title,e.texts=t})}}},Nt=St,Ot=(a("a4f9"),Object(f["a"])(Nt,ht,_t,!1,null,"fba0aa8e",null));Ot.options.__file="TextA.vue";var jt=Ot.exports,Ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section"},[a("h3",[t._v("Section 1 Vocabulary")]),a("ul",{staticClass:"list"},t._l(t.data,function(e,n){return a("li",{key:n,staticClass:"item"},[a("strong",{ref:"strong",refInFor:!0,staticClass:"first",on:{touchstart:t.ts,touchend:t.te}},[t._v("\n        "+t._s(e.strong)+"\n        "),a("Audio",{attrs:{mp3_name:e.mp3}})],1),a("div",{staticClass:"content"},[a("span",[t._v(t._s(e.c1))]),a("p",[t._v(t._s(e.zh1))])]),a("div",{staticClass:"content"},[a("span",[t._v(t._s(e.c2))]),a("p",[t._v(t._s(e.zh2))])])])})),t._m(0)])},At=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"names"},[a("h4",[t._v("Proper Names")]),a("ul",{staticClass:"list"},[a("li",[t._v("1.\tJane [] （女子名）简")]),a("li",[t._v("2.\tManchester [] 曼彻斯特（英格兰西北部城市）")]),a("li",[t._v("3.\tMoss Side [] 莫斯赛德（地名）")])])])}],Bt={data:function(){return{items:{a:{strong:"1. the other day 前几天；不久前的一天",mp3:"a01",contents:{c1:{span:"1) I saw him in town the other day",p:"我前几天在镇上见过他"},c2:{span:"2)It was a terrible piece of work you turned in the other day.",p:"那天你交的作业太糟糕了。"}}},b:{strong:"2. arrange []  v. 安排；准备",mp3:"a02",contents:{c1:{span:"1)\tThey arranged to meet at seven o’clock.",p:"他们约好7点钟见面。"},c2:{span:"2)\tI have arranged to meet him at the restaurant. ",p:"我和他约好了在饭馆见面。"}}}},data:[]}},components:{Audio:Tt},mounted:function(){this._initData()},methods:{_initData:function(){var t=this;fetch("http://data.iathena.top/web/xsden/initData_1").then(function(t){return t.json()}).then(function(e){t.data=e})},ts:function(t){t.target.style.background="#6699CC"},te:function(t){t.target.style.background="",this.$root.eventHub.$emit("stopPlay"),t.target.children[0].play()}}},It=Bt,Mt=(a("3f76"),Object(f["a"])(It,Ht,At,!1,null,"591c6a5a",null));Mt.options.__file="Section01.vue";var Dt=Mt.exports,Gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section"},[a("h3",[t._v("Section 2 Sentence Analysis")]),a("ul",{staticClass:"list"},t._l(t.data,function(e,n){return a("li",{key:n,staticClass:"item"},[a("strong",[t._v(t._s(e.strong))]),a("p",[t._v(t._s(e.p1))]),a("p",[t._v(t._s(e.p2))])])}))])},Lt=[],Rt={data:function(){return{data:[]}},created:function(){this._initData()},methods:{_initData:function(){var t=this;fetch("http://data.iathena.top/web/xsden/initData_s2").then(function(t){return t.json()}).then(function(e){t.data=e})}}},Wt=Rt,Ut=(a("67f9"),Object(f["a"])(Wt,Gt,Lt,!1,null,"eded7cde",null));Ut.options.__file="Section02.vue";var Jt=Ut.exports,Yt={mounted:function(){},components:{TextA:jt,Section01:Dt,Section02:Jt}},Vt=Yt,qt=(a("549a"),Object(f["a"])(Vt,mt,vt,!1,null,"e3c37138",null));qt.options.__file="index.vue";var zt=qt.exports,Zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"partTwo"},[a("h2",[t._v("Part Two Grammar Focus")]),t._m(0),a("P01"),a("P02")],1)},Xt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index"},[a("strong",[t._v("名词:")]),a("span",[t._v("名词是表示人或物的名称的词。")])])}],Kt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Qt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("h3",[t._v("1. 名词的分类")]),a("div",{staticClass:"ex"},[t._v("\n    名词可分为专有名词和普通名词，普通名词又可分为个体名词、集体名词、物质名词和抽象名词。从名词是否可以计数来看，普通名词又可分为可数名词和不可数名词。\n  ")]),a("ul",{staticClass:"list"},[a("li",{staticClass:"item"},[a("h4",[t._v("1.1 专有名词")]),a("p",[t._v("专有名词是个人、国家、地方、机构、组织等专有的名称，如Bill Clinton, China, Hangzhou, Zhejiang University等。专有名词的首字母要大写，一般不用冠词。")]),a("p",[t._v("1) Harvard University is the oldest institution of higher education in the United States.")]),a("p",[t._v("2) The new show will open on Broadway next month.")]),a("p",[t._v("当表示组织、机构、杂志、书籍等专有名词时，有时也与the或其他限定词连用。")]),a("p",[t._v("1) The Beatles was an English rock band, active throughout the 1960s.")]),a("p",[t._v("2) The United Nations officially came into existence on October 24, 1945.")]),a("p",[t._v("很多专有名词已经接近于或转化为普通名词，前面可以带不定冠词或其他限定词，也可以有复数形式。")]),a("p",[t._v("1) My school’s basketball team met their Waterloo(滑铁卢；惨败) yesterday.")]),a("p",[t._v("2) LeBron does not have the desire to do what it takes to be a Michael Jordan.")])]),a("li",{staticClass:"item"},[a("h4",[t._v("1.2 个体名词")]),a("p",[t._v("个体名词表示作为个体而存在的人或东西。个体名词有复数形式，单数形式可以和不定冠词连用。")]),a("p",[t._v("1) Don’t sign anything until you’ve consulted a lawyer.")]),a("p",[t._v("2) The computers are all down(崩溃) at the moment.")])]),a("li",{staticClass:"item"},[a("h4",[t._v("1.3 集体名词")]),a("p",[t._v("集体名词表示若干个体组成的集合体，如class, committee(委员会), family, staff, public等。集体名词有时作单数看待，有时作复数看待。通常说来，视为整体时作单数看待，强调个体成员时作复数看待。")]),a("p",[t._v("1) The Webb family has a farm over there.")]),a("p",[t._v("2) Our entire family are going to Grandpa’s 80th birthday party.")])]),a("li",{staticClass:"item"},[a("h4",[t._v("1.4 物质名词")]),a("p",[t._v("物质名词表示无法切分为个体的实物。物质名词往往是不可数的，但有些物质名词可用作可数名词，表示“一份”“一杯”“一种”。")]),a("p",[t._v("1) Let’s go for a coffee when you’ve finished your essay.")]),a("p",[t._v("2) Longjing is a well-known tea in China.")])]),a("li",{staticClass:"item"},[a("h4",[t._v("1.5 抽象名词")]),a("p",[t._v("抽象名词表示动作、状态、品质、感情等抽象概念。一般来说，抽象名词也是不可数的，因此没有复数形式，前面也不加不定冠词。")]),a("p",[t._v("1) Paul’s face was filled with anger.")]),a("p",[t._v("2) Honesty is the best policy.")]),a("p",{staticClass:"middle"},[t._v("也有一些抽象名词，当意思转变而表示某类个体时，就成了个体名词。")]),a("p",[t._v("1) Gardening gives many people great pleasure. (这里pleasure是抽象名词，指的是喜悦)")]),a("p",[t._v("2) Swimming is one of my greatest pleasures. (这里pleasure是个体名词，指的是令人开心的事)")]),a("p",{staticClass:"middle"},[t._v("类似的词还有：youth(青春；青年人), necessity(必要性；必需品), beauty(美丽；美丽的人或物)等。")])]),a("li",{staticClass:"item"},[a("h4",[t._v("1.6 可数名词与不可数名词")]),a("p",[t._v("在英语中，可数名词与不可数名词的区分显得尤为重要，因为它涉及一个名词的形式和它前面是否可以加冠词以及加哪种冠词的问题。一般来说，个体名词和集体名词可以用数目来计算，称为可数名词；物质名词和抽象名词一般无法用数目来计算，称为不可数名词。")]),a("p",{staticClass:"middle"},[t._v("可数名词前可用定冠词、不定冠词、数词等充当限定词，有复数形式。")]),a("p",[t._v("1) I took the dog for a walk.")]),a("p",[t._v("2) There are many dogs in the village.")]),a("p",{staticClass:"middle"},[t._v("不可数名词没有复数形式，前面不能加不定冠词或数词，但可用the或不用。")]),a("p",[t._v("1) Bread is made from flour.")]),a("p",[t._v("2) If you pay for the bread, I will pay for the meat.")]),a("p",{staticClass:"middle"},[t._v("有不少名词在英语中是不可数的，但在汉语中却是可数的，在使用这类词时，学习者要小心。")]),a("p",[t._v("1) Each piece of furniture in their home suited the style of the house.")]),a("p",[t._v("2) I have one or two useful pieces of information to pass on to you.")]),a("p",[t._v("类似的词还有：equipment, clothing, news, paper, chocolate, grass等。")])])])])}],te={},ee=te,ae=(a("b24b"),Object(f["a"])(ee,Kt,Qt,!1,null,"57cdc3f5",null));ae.options.__file="P01.vue";var ne=ae.exports,se=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ie=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("h3",{staticClass:"title"},[t._v("2. 名词的格")]),a("ul",{staticClass:"list"},[a("li",{staticClass:"item"},[a("h4",[t._v("2.1 名词所有格的构成")]),a("p",[t._v("英语中，有很多名词都是由名词加-’s来表示所有关系的，此形式称为名词所有格，其构成主要有以下几种情况：")]),a("p",[t._v("(1) 单数名词和不以-s结尾的复数名词一般在词尾加-’s，如：my sister’s book, Linda’s pen, policemen’s opinions, women’s hobbies")]),a("p",[t._v("(2) 以-s结尾的复数名词，则只要加一个-’即可，如：the teachers’ office, workers’ time")]),a("p",[t._v("(3) 复合名词和作为一个整体的名词短语则在最后一个词的词尾加-’s，如：the Secretary of State’s visit, my brother-in-law’s friend")]),a("p",[t._v("(4) 以-s结尾且其发音为[]的专有名词，其所有格形式用-’s或-’均可，如：Mr. Jones’ house或Mr. Jones’s house")]),a("p",[t._v("但以-s结尾且其发音不是[]的专有名词，其所有格形式用-’s, 如：Ross’s family")])]),a("li",{staticClass:"item"},[a("h4",[t._v("2.2 名词所有格的用法")]),a("p",[t._v("(1) 表示有生命的名词，尤其用于人或较高级动物的名词：")]),a("p",[t._v("1) What’s your favorite children’s book from when you were a kid ?")]),a("p",[t._v("2) From the plane, we had a bird’s eye view of Manhattan.")]),a("p",{staticClass:"middle"},[t._v("(2) 表示时间、距离、价格等名词：")]),a("p",[t._v("1) The winner will receive eighty pounds’ worth of books.")]),a("p",[t._v("2) It’s about half an hour’s train ride from here.")]),a("p",{staticClass:"middle"},[t._v("(3) 表示地理、国家、城市等地方的名词：")]),a("p",[t._v("1) The Burj Khalifa, now the world’s tallest building, is 2,717 feet high.")]),a("p",[t._v("2) How is Chicago’s weather in spring?")]),a("p",{staticClass:"middle"},[t._v("(4) 表示集体、机构等的名词：")]),a("p",[t._v("1) They asked for further clarification of the government’s plans.")]),a("p",[t._v("2) The school’s music group will be giving a big show tomorrow night.")]),a("p",{staticClass:"middle"},[t._v("(5) 用在某些固定的词组中：")]),a("p",[t._v("1) She was at her wit’s end wondering how she’d manage to finish it in time.")]),a("p",[t._v("2) She paused, imagining the scene in her mind’s eye.")])]),a("li",{staticClass:"item"},[a("h4",[t._v("2.3 所有格所修饰词省略的情况")]),a("p",[t._v("(1) 名词所有格所修饰的词在上文已经出现过，可以省略，以避免重复：")]),a("p",[t._v("1) —Whose car is this? ")]),a("p",{staticClass:"it"},[t._v(" —It’s Peter’s.")]),a("p",[t._v("2)\tHer father seems to be stricter than Mary’s.")]),a("p",{staticClass:"middle"},[t._v("(2)\t可以用来表示店铺、教堂、公司的名字或表示某人的家：")]),a("p",[t._v("1)\tShe often does her shopping at Macy’s.")]),a("p",[t._v("2)\tI went to Jason’s, only to find that he was at his cousin’s.")]),a("p",{staticClass:"middle"},[t._v("(3)\t定冠词the加上某些名词的所有格表示一种场所：")]),a("p",[t._v("1)\tI’m going to the barber’s to get my hair cut.")]),a("p",[t._v("2)\tThey’re freshly baked. I fetched them from the baker’s this morning.")])])])])}],oe={},re=oe,ce=(a("29f3"),Object(f["a"])(re,se,ie,!1,null,"51dbe9ba",null));ce.options.__file="P02.vue";var le=ce.exports,ue={components:{P01:ne,P02:le}},pe=ue,fe=(a("425e"),Object(f["a"])(pe,Zt,Xt,!1,null,"8ca343fa",null));fe.options.__file="index.vue";var de=fe.exports,me=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ve=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("h3",{staticClass:"title"},[t._v("Part Three Practical Writing")]),a("div",{staticClass:"ex"},[a("h4",[t._v("Business Card")]),a("p",[t._v("在商务活动中，交换名片是一项很流行也很重要的活动。在对外交流中，将自己的名片印上英文是很有必要的。这就要求名片上的英文写法要规范，顺序符合英语规则。")])]),a("div",{staticClass:"explain"},[a("h3",[t._v("A business card should include the following details:")]),a("ul",{staticClass:"list"},[a("li",[t._v("1. 单位或公司名称（the name of your work unit or company）")]),a("li",[t._v("2. 姓名（your name）")]),a("li",[t._v("3. 职位、头衔或职业（your position, title, or occupation）")]),a("li",[t._v(" 4. 通讯方式:\n        "),a("p",[t._v("1) 地址（the address of your company）")]),a("p",[t._v("2) 电话号码（telephone number）")]),a("p",[t._v("3) 传真号码（fax number）")]),a("p",[t._v("4) 电子邮箱（e-mail address）")]),a("p",[t._v("5) 网址（website）")])]),a("li",[t._v("现在，名片有朝着多样化、个性化方向发展的趋势，不仅仅限于自我介绍的功效，还带着广告宣传的色彩。根据实际情况或艺术效果往往可以调整上述要点1和要点2在名片上的位置。下面是两个实例。")])])]),a("div",{staticClass:"sample"},[a("h3",{staticClass:"num"},[t._v("Sample 1")]),a("div",{staticClass:"show"},[a("div",{staticClass:"top"},[a("strong",[t._v("Li Hua")]),a("p",[t._v("Deputy Manager")]),a("p",[t._v("Export Department")]),a("p",[t._v("Yilong Mechanical & Electronic Products Trading Co., Ltd.")])]),a("div",{staticClass:"bottom"},[a("div",{staticClass:"left"},[a("p",[t._v("No. 123, Tianmushan Rd.")]),a("p",[t._v("Xihu District, Hangzhou ")]),a("p",[t._v("Zhejiang Province 310000")]),a("p",[t._v("P.R.China ")])]),a("div",{staticClass:"right"},[a("p",[t._v("Tel.: 86-0571-88888888")]),a("p",[t._v("Fax: 86-0571-66666666")]),a("p",[t._v("E-mail: lihua@yilong.com")]),a("p",[t._v("Mobile: 86-13905710000")])])])])]),a("div",{staticClass:"sample"},[a("h3",{staticClass:"num"},[t._v("Sample 2")]),a("div",{staticClass:"show"},[a("div",{staticClass:"top"},[a("p",[t._v("QIANJIANG FINANCIAL SCHOOL")]),a("strong",[t._v("Han Meimei")]),a("p",[t._v("Associate Professor")])]),a("div",{staticClass:"bottom"},[a("div",{staticClass:"left"},[a("p",[t._v("No. 468, Zhongshan Rd. ")]),a("p",[t._v("Ningbo,Zhejiang Province")]),a("p",[t._v("P.R.China ")]),a("p",[t._v("www.qianjiang.edu.cn")])]),a("div",{staticClass:"right"},[a("p",[t._v("Tel.: 86-0571-88888888")]),a("p",[t._v("Fax: 86-0571-66666666")]),a("p",[t._v("E-mail:hanmm@qianjiang.cn")]),a("p",[t._v("Mobile: 86-13905740000")])])])])]),a("div",{staticClass:"notes"},[a("h3",[t._v("【注意】")]),a("p",[t._v("1. 英语地名的写法，一般遵循从小地名到大地名的写法。一般顺序为： 室号——门牌号——街道名——城市名——省（州）——国家\n    ")]),a("p",[t._v("2.\t地址在名片上，应该保持一定的完整性。门牌号与街道名不可分开写，必须在同一行，不可断行。")])])])}],he={},_e=he,ge=(a("642a"),Object(f["a"])(_e,me,ve,!1,null,"1c2277e8",null));ge.options.__file="index.vue";var be=ge.exports,Ce=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("h2",{staticClass:"title"},[t._v("Part Four Translation Focus")]),t._m(0),a("div",{ref:"a",staticClass:"detail"},[a("h3",[t._v("1. 根据搭配确定词义")]),t._m(1)]),a("div",{ref:"b",staticClass:"detail"},[a("h3",[t._v("2. 根据上下文确定词义")]),t._m(2)]),t._m(3)])},ye=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ex"},[a("h3",[t._v("词义的选择")]),a("p",[t._v("词是句子的基本构建单位。如何选择正确的词义，是翻译过程中首先要解决的问题。在英语和汉语中，一词多义的现象都十分普遍。同样，一个简单的字或词语，在不同的上下文中，就可能有不同的含义，这就需要我们依靠具体的语境来判断某个字或词语的意义。")]),a("p",[t._v("在翻译过程中，如果仅拘泥于词典提供的基本释义，机械地在两种语言中寻找对应的词语，是有碍译文质量的。译者只有在掌握词典基本释义的基础上，根据具体的语言环境和搭配习惯确定和选择词义，才能进行不同的翻译搭配，并确定词义。")]),a("p",[t._v("词义选择可以从以下三个方面着手。")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"list"},[a("li",[t._v("英语和汉语都具有各自的组合规律或搭配习惯。因此，在翻译中，可以通过词之间的固定关系选择词及确定词义。")]),a("li",[t._v("下面，我们以“work”一词为例，来看不同搭配中的不同词义。")]),a("li",[t._v("1)\tMost people have to work in order to live.\n        "),a("p",[t._v("大多数人均须工作以维持生活。")])]),a("li",[t._v("2)\tMy plan worked, and I got them to agree.\n        "),a("p",[t._v("我的计划奏效了，我让他们同意了。")])]),a("li",[t._v("3)\tHer face worked as she stared at him in terror.\n        "),a("p",[t._v("她惊恐地注视着他，吓得脸也抽动起来。")])]),a("li",[t._v("4)\tRain has worked in through the roof.\n        "),a("p",[t._v("雨水透过房顶逐渐渗到屋子里来了。")])]),a("li",[t._v("5)\tMy watch doesn’t work.\n        "),a("p",[t._v("我的表不走了。")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"list"},[a("li",[t._v("在英语中，同一个词在不同的场合往往有不同的含义，因此翻译中要根据语境来判断和确定某个词在特定场合下所具有的含义，以达到翻译的通顺流畅。")]),a("li",[t._v("下面，我们以“figure”为例。")]),a("li",[t._v("1)\tHe has an income of six figures.\n        "),a("p",[t._v("他的收入是六位数的。")])]),a("li",[t._v("2)\tThe central figure in the painting is the artist’s daughter.\n        "),a("p",[t._v("画中间的那个人是画家的女儿。")])]),a("li",[t._v("3)\tShe’s a fine figure of a woman.\n        "),a("p",[t._v("她身材苗条。")])]),a("li",[t._v("4)\tThe figure on Page 22 shows a map of Africa.\n        "),a("p",[t._v("第22页的插图是非洲地图。")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail"},[a("h3",[t._v("3. 根据词性确定词义")]),a("ul",{staticClass:"list"},[a("li",[t._v("很多英文单词有多种词性。遇到这种情况时，如果不弄清楚词性，常常就会将词义搞错，进而影响对原文的正确理解和准确翻译。因此，在翻译中，我们可以根据语法关系来辨别关键词的词性，以便准确地判断词义。")]),a("li",[t._v("下面，我们以“round”一词为例。")]),a("li",[t._v("1)\tThe Earth is not completely round. (形容词)\n        "),a("p",[t._v("地球并不完全是圆的。")])]),a("li",[t._v("2)\tLet’s go into the museum and have a look round. (副词)\n        "),a("p",[t._v("让我们进博物馆转一转。")])]),a("li",[t._v("3)\tCut the pastry into small rounds, one for each pie. (名词)\n        "),a("p",[t._v("把油酥面团切成小圆片，每一片做一个馅饼。")])]),a("li",[t._v("4)\tThe Earth moves round the Sun. (介词)\n        "),a("p",[t._v("地球环绕太阳运行。")])])])])}],we={mounted:function(){}},Te=we,xe=(a("1728"),Object(f["a"])(Te,Ce,ye,!1,null,"2d2acf7d",null));xe.options.__file="index.vue";var ke=xe.exports;n["a"].use(dt["a"]);var Fe=new dt["a"]({scrollBehavior:function(t,e,a){var n={};switch(t.hash&&(n.selector=t.hash),t.path){case"/Unit1Communication":n.y=0;break;case"/PartOneReading":n.y=22;break;case"/TextAWaitingforAges!":n.y=40;break;case"/Section1Vocabulary":n.y=865;break;case"/Section2SentenceAnalysis":n.y=1333;break;case"/PartFourTranslationFocus01":n.y=44;break;case"/PartFourTranslationFocus02":n.y=376;break;case"/PartFourTranslationFocus03":n.y=780;break;case"/PartFourTranslationFocus04":n.y=1160;break}return n},routes:[{path:"/",component:zt},{path:"/Unit1Communication",component:zt,meta:{scrollToTop:!0}},{path:"/PartOneReading",component:zt,meta:{scrollToTop:!0}},{path:"/TextAWaitingforAges!",component:jt,meta:{scrollToTop:!0}},{path:"/Section1Vocabulary",component:Dt,meta:{scrollToTop:!0}},{path:"/Section2SentenceAnalysis",component:Jt,meta:{scrollToTop:!0}},{path:"/PartTwoGrammarFocus",component:de},{path:"/PartTwoGrammarFocus01",component:de},{path:"/PartTwoGrammarFocus02",component:ne},{path:"/PartTwoGrammarFocus03",component:le},{path:"/PartThreePracticalWriting",component:be},{path:"/BusinessCard",component:be},{path:"/PartFourTranslationFocus",component:ke},{path:"/PartFourTranslationFocus01",component:ke},{path:"/PartFourTranslationFocus02",component:ke,meta:{scrollToTop:!0}},{path:"/PartFourTranslationFocus03",component:ke},{path:"/PartFourTranslationFocus04",component:ke}]}),Pe=a("1368"),$e=a.n(Pe);$e.a.polyfill(),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(ft)},router:Fe,data:{eventHub:new n["a"]}}).$mount("#app")},"5f9d":function(t,e,a){t.exports=a.p+"media/a08.f73b19c6.mp3"},"618e":function(t,e,a){t.exports=a.p+"media/a14.d5e9980c.mp3"},"642a":function(t,e,a){"use strict";var n=a("b903"),s=a.n(n);s.a},"65cc":function(t,e,a){t.exports=a.p+"media/a20.3e46fc76.mp3"},"67f9":function(t,e,a){"use strict";var n=a("26e2"),s=a.n(n);s.a},"71ca":function(t,e,a){"use strict";var n=a("7512"),s=a.n(n);s.a},7512:function(t,e,a){},"792c":function(t,e,a){t.exports=a.p+"media/a23.d8a4599d.mp3"},7997:function(t,e,a){"use strict";var n=a("4e23"),s=a.n(n);s.a},8833:function(t,e,a){},"8e0b":function(t,e,a){"use strict";var n=a("df9e"),s=a.n(n);s.a},"90b2":function(t,e,a){t.exports=a.p+"img/cover_1.07b61a84.jpg"},"920b":function(t,e,a){t.exports=a.p+"media/a22.8418ec61.mp3"},"920d":function(t,e,a){},"92a1":function(t,e,a){t.exports=a.p+"media/t02.9a8b9432.mp3"},9483:function(t,e,a){t.exports=a.p+"media/a25.d190df13.mp3"},9928:function(t,e,a){"use strict";var n=a("af1e"),s=a.n(n);s.a},"9a37":function(t,e,a){t.exports=a.p+"media/a07.a669d35e.mp3"},a4f9:function(t,e,a){"use strict";var n=a("ea0c"),s=a.n(n);s.a},ae1c:function(t,e,a){},af1e:function(t,e,a){},af26:function(t,e,a){t.exports=a.p+"media/a19.5317f1a3.mp3"},b24b:function(t,e,a){"use strict";var n=a("382b"),s=a.n(n);s.a},b3dd:function(t,e,a){t.exports=a.p+"media/a15.68521379.mp3"},b63e:function(t,e,a){t.exports=a.p+"media/a13.3b5e5483.mp3"},b8d7:function(t,e,a){t.exports=a.p+"media/a03.5656773e.mp3"},b903:function(t,e,a){},bb4a:function(t,e,a){},c21b:function(t,e,a){},cdd9:function(t,e,a){"use strict";var n=a("07e5"),s=a.n(n);s.a},d191:function(t,e,a){},d664:function(t,e,a){t.exports=a.p+"media/t01.ea6f0520.mp3"},d782:function(t,e,a){t.exports=a.p+"media/a11.1b4295c4.mp3"},d7ea:function(t,e,a){t.exports=a.p+"media/a01.1f744830.mp3"},d963:function(t,e,a){t.exports=a.p+"media/a05.f75e90d0.mp3"},df9e:function(t,e,a){},dfce:function(t,e,a){"use strict";var n=a("ae1c"),s=a.n(n);s.a},e1e8:function(t,e,a){var n={"./a01.mp3":"d7ea","./a02.mp3":"2a9b","./a03.mp3":"b8d7","./a04.mp3":"4dd7","./a05.mp3":"d963","./a06.mp3":"244d","./a07.mp3":"9a37","./a08.mp3":"5f9d","./a09.mp3":"004c","./a10.mp3":"f50a","./a11.mp3":"d782","./a12.mp3":"f2bb","./a13.mp3":"b63e","./a14.mp3":"618e","./a15.mp3":"b3dd","./a16.mp3":"33eb","./a17.mp3":"1033","./a18.mp3":"42fc","./a19.mp3":"af26","./a20.mp3":"65cc","./a21.mp3":"3f9f","./a22.mp3":"920b","./a23.mp3":"792c","./a24.mp3":"45e5","./a25.mp3":"9483","./t01.mp3":"d664","./t02.mp3":"92a1","./t03.mp3":"3794"};function s(t){var e=i(t);return a(e)}function i(t){var e=n[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}s.keys=function(){return Object.keys(n)},s.resolve=i,t.exports=s,s.id="e1e8"},e709:function(t,e,a){},ea0c:function(t,e,a){},f2bb:function(t,e,a){t.exports=a.p+"media/a12.a409a745.mp3"},f4ec:function(t,e,a){"use strict";var n=a("bb4a"),s=a.n(n);s.a},f50a:function(t,e,a){t.exports=a.p+"media/a10.dc9a9b56.mp3"},f8de:function(t,e,a){},fbb4:function(t,e,a){},fe99:function(t,e,a){"use strict";var n=a("f8de"),s=a.n(n);s.a}});
//# sourceMappingURL=app.b91fe5da.js.map