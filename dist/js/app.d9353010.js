(function(e){function t(t){for(var r,i,u=t[0],c=t[1],a=t[2],d=0,f=[];d<u.length;d++)i=u[d],o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,a||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var a=0;a<u.length;a++)t(u[a]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=n("7d02"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("b-container",{staticClass:"bv-example-row"},[n("Header",{attrs:{numCorrect:e.numCorrect,numTotal:e.numTotal}}),n("b-row",[n("b-col",[e.questions.length?n("QuestionBox",{attrs:{currentQuestion:e.questions[e.index],next:e.next,increment:e.increment}}):e._e()],1)],1)],1)],1)},i=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-nav",[n("b-nav-item",{attrs:{disabled:""}},[e._v("Fancy Quiz App")]),n("b-nav-item",{attrs:{disabled:""}},[e._v("Counter "+e._s(e.numCorrect)+"/"+e._s(e.numTotal))])],1)],1)},c=[],a={props:["numCorrect","numTotal"]},l=a,d=n("2877"),f=Object(d["a"])(l,u,c,!1,null,null,null),p=f.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-jumbotron",{staticClass:"text-center"},[n("template",{slot:"header"},[e._v("Some question here")]),n("template",{slot:"lead"},[e._v("\n            "+e._s(e.currentQuestion.question)+"\n        ")]),n("hr",{staticClass:"my-4"}),n("b-list-group",{staticClass:"mb-4 w-50 mx-auto"},e._l(e.shaflovaniOdgovori,function(t,r){return n("b-list-group-item",{key:r,attrs:{href:"#",variant:[e.answered||e.selectedIndex!==r?e.answered&&e.correctIndex===r?"success":"":"selected"]},on:{click:function(t){return t.preventDefault(),e.selectAnswer(r)}}},[e._v("\n                "+e._s(t)+"\n            ")])}),1),n("b-button",{staticClass:"mr-2",attrs:{variant:"primary",disabled:null===e.selectedIndex},on:{click:e.submitAnswer}},[e._v("\n            Potvrdi bolan\n        ")]),n("b-button",{attrs:{variant:"success"},on:{click:e.next}},[e._v("Slijedece")])],2)],1)},m=[],v=n("75fc"),b=n("2ef0"),x=n.n(b),w={props:{currentQuestion:Object,next:Function,increment:Function},data:function(){return{selectedIndex:null,shaflovaniOdgovori:[],correctIndex:null,answered:!1}},watch:{currentQuestion:{immediate:!0,handler:function(){this.selectedIndex=null,this.answered=!1,this.shuffleAnswers()}}},methods:{selectAnswer:function(e){this.selectedIndex=e},shuffleAnswers:function(){var e=[].concat(Object(v["a"])(this.currentQuestion.incorrect_answers),[this.currentQuestion.correct_answer]);this.shaflovaniOdgovori=x.a.shuffle(e),this.correctIndex=this.shaflovaniOdgovori.indexOf(this.currentQuestion.correct_answer)},submitAnswer:function(){var e=!1;e=this.correctIndex===this.selectedIndex,this.answered=!0,this.increment(e)}}},_=w,g=Object(d["a"])(_,h,m,!1,null,null,null),y=g.exports,O={name:"app",components:{Header:p,QuestionBox:y},data:function(){return{questions:[],index:0,numCorrect:0,numTotal:0}},methods:{next:function(){this.index++},increment:function(e){e&&this.numCorrect++,this.numTotal++}},mounted:function(){var e=this;fetch("https://opentdb.com/api.php?amount=20&category=28&type=multiple",{method:"get"}).then(function(e){return e.json()}).then(function(t){e.questions=t.results})}},j=O,C=(n("5c0b"),Object(d["a"])(j,s,i,!1,null,null,null)),I=C.exports;r["a"].use(o["a"]),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(I)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(e,t,n){}});
//# sourceMappingURL=app.d9353010.js.map