(function(e){function t(t){for(var a,o,l=t[0],c=t[1],i=t[2],m=0,d=[];m<l.length;m++)o=l[m],s[o]&&d.push(s[o][0]),s[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,l=1;l<n.length;l++){var c=n[l];0!==s[c]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},s={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1abf":function(e,t,n){},4505:function(e,t,n){"use strict";var a=n("1abf"),s=n.n(a);s.a},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=r(e);return n(t)}function r(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}s.keys=function(){return Object.keys(a)},s.resolve=r,e.exports=s,s.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],o=n("2877"),l={},c=Object(o["a"])(l,s,r,!1,null,null,null),i=c.exports,u=n("0a89"),m=n.n(u),d=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"text-center site-title"},[e._v("\n    "+e._s(this.$route.meta.title)+"\n    "),n("SwitchViews")],1),n("div",{staticClass:"p-3"},[n("transition",{attrs:{name:"slide-x",mode:"out-in"}},[n("router-view")],1)],1),n("Pagination",{attrs:{activePage:e.activePage}})],1)},f=[],v=(n("a481"),n("e814")),h=n.n(v),b=(n("7f7f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},e._l(e.frameworks,function(t){return n("div",{key:t.title,staticClass:"col-12 col-md-6"},[n("h4",{staticClass:"text-center"},[e._v(e._s(t.title))]),n("div",{staticClass:"card mb-2"},[n("div",{staticClass:"card-body"},[n("ul",e._l(t.list,function(t,a){return n("li",{key:a},[e._v("\n              "+e._s(t)+"\n            ")])}),0)])])])}),0),n("p",{staticClass:"text-center mt-4 text-muted"},[e._v("\n    Totally unbiased! 🤷🏻\n  ")])])}),g=[],j={data:function(){return{frameworks:[{title:"Vue",list:["Programmer friendly API","Documentation","Vuex","Form handling and v-model","Emitting events","Named routes","Webpack configuration","Vue DevTools","Stuff gets done faster","React's and Angular's love child 👨‍❤️‍👨"]},{title:"React",list:["Everything is in your hands 🔪","Context","JSX??","Hooks?"]}]}}},C=j,y=Object(o["a"])(C,b,g,!1,null,null,null),k=y.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-lg-8 mb-3"},[n("Codemirror",{staticClass:"mb-2",attrs:{lang:"html"},model:{value:e.sourceHtml,callback:function(t){e.sourceHtml=t},expression:"sourceHtml"}}),n("Codemirror",{model:{value:e.sourceJs,callback:function(t){e.sourceJs=t},expression:"sourceJs"}})],1),n("div",{staticClass:"col-12 col-lg-4 text-center"},[n("div",{staticClass:"mb-2"},[n("button",{staticClass:"btn btn-primary mr-2",attrs:{type:"button"},on:{click:e.handleIncrement}},[e._v("\n          Increment\n        ")]),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:e.handleDecrement}},[e._v("\n          Decrement\n        ")])]),e._v("\n      Count: "+e._s(e.count)+"\n    ")])])])},_=[],x='<template>\n  <form>\n    <input type="text" v-model="person.name">\n    <input type="text" v-model="person.surname">\n    <input type="number" v-model="person.age">\n    <select v-model="person.framework">\n      <option value="vue">Vue</option>\n      <option value="react">React</option>\n      <option value="angular">Angular</option>\n    </select>\n    <label>\n      <input type="checkbox" v-model="person.newsletter">\n      Receive newsletter\n    </label>\n  </form>\n</template>',P="<script>\nexport default {\n  data () {\n    return {\n      person: {\n        name: '',\n        surname: '',\n        age: 20,\n        framework: 'vue',\n        newsletter: false\n      }\n    }\n  }\n}\n<\/script>",S='const awesomeForm = () => {\n  const [person, setPerson] = useState({\n    name: \'\',\n    surname: \'\',\n    age: 20,\n    framework: \'vue\',\n    newsletter: false\n  });\n  \n  const handlePersonChange = change => {\n    setPerson({\n      ...person,\n      ...change\n    })\n  };\n  \n  const handleNameChange = ({target}) => handlePersonChange({name: target.value});\n  const handleSurnameChange = ({target}) => handlePersonChange({surname: target.value});\n  const handleAgeChange = ({target}) => handlePersonChange({age: target.value});\n  const handleFrameworkChange = ({target}) => handlePersonChange({framework: target.value});\n  const handleNewsletterChange = ({target}) => handlePersonChange({newsletter: target.value});\n\n  return (\n    <form>\n      <input type="text" :value={person.name} onChange={handleNameChange} />\n      <input type="text" :value={person.surname} onChange={handleSurnameChange} />\n      <input type="number" :value={person.age} onChange={handleAgeChange} />\n      <select :value={person.framework} onChange={handleFrameworkChange}>\n        <option value="vue">Vue</option>\n        <option value="react">React</option>\n        <option value="angular">Angular</option>\n      </select>\n      <label>\n        <input type="checkbox" value={person.newsletter} onChange={handleNewsletterChange}>\n        Receive newsletter\n      </label>\n    </form>\n  );\n}\n',$="const awesomeForm = () => {\n  const [person, setPerson] = useState({\n    name: '',\n    surname: '',\n    age: 20,\n    framework: 'vue',\n    newsletter: false\n  });\n  \n  const handlePersonChange = ({target}, property) => {\n    setPerson({\n      ...person,\n      [property]: target.value\n    })\n  };\n\n  return (\n    <form>\n      <input type=\"text\" :value={person.name} onChange={e => handlePersonChange(e, 'name')} />\n      <input type=\"text\" :value={person.surname} onChange={e => handlePersonChange(e, 'surname')} />\n      <input type=\"number\" :value={person.age} onChange={e => handlePersonChange(e, 'age')} />\n      <select :value={person.framework} onChange={e => handlePersonChange(e, 'framework')}>\n        <option value=\"vue\">Vue</option>\n        <option value=\"react\">React</option>\n        <option value=\"angular\">Angular</option>\n      </select>\n      <label>\n        <input type=\"checkbox\" value={person.newsletter} onChange={e => handlePersonChange(e, 'newsletter'}>\n        Receive newsletter\n      </label>\n    </form>\n  );\n}\n",E="<template>\n  <ChildComponent\n    @onSuccess=\"handleSuccess\"\n    @onFail=\"handleFail\" />\n</template>\n\n<script>\nimport ChildComponent from './ChildComponent'\n\nexport default {\n  methods: {\n    handleSuccess () {\n      console.log('Yay!')\n    },\n    handleFail (message) {\n      console.log('Me no happy!', message)\n    }\n  },\n  components: {\n    ChildComponent\n  }\n}\n<\/script>",O='<template>\n  <p>\n    <button type="button" @click="$emit(\'onSuccess\')">\n      Success\n    </button>\n    <button type="button" @click="alertFail">\n      Fail\n    </button>\n  </p>\n</template>\n\n<script>\nexport default {\n  methods: {\n    alertFail () {\n      this.$emit(\'onFail\', \'This is your failure payload\')\n    }\n  }\n}\n<\/script>',V='<template>\n  <div>\n    <button v-for="instance in data"\n      type="button"\n      :key="instance.label"\n      @click="model = instance.value"\n      :class="{active: model === instance.value}">\n      {{ instance.title }}\n    </button>\n  </div>\n</template>\n\n<script>\nexport default {\n  props: {\n    value: {\n      type: String,\n      default: \'\'\n    },\n    data: {\n      type: Array\n    }\n  },\n  data () {\n    return {\n      model: this.value\n    }\n  },\n  watch: {\n    model () {\n      this.$emit(\'input\', this.model)\n    }\n  }\n}\n<\/script>',z="<template>\n  <ButtonPicker v-model=\"flower\" :data=\"options\" />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      flower: 'rose',\n      options: [\n        {\n          title: 'Rose', value: 'rose'\n        },\n        {\n          title: 'Lily', value: 'lily'\n        },\n        {\n          title: 'Sunflower', value: 'sunflower'\n        },\n        {\n          title: 'Cactus', value: 'they-are-beautiful-too'\n        }\n      ]\n    }\n  }\n}\n<\/script>",R='<template>\n  <div>\n    <div class="text-center">\n      <button type="button" @click="handleIncrement">\n        Increment\n      </button>\n      <button type="button" @click="handleDecrement">\n        Decrement\n      </button>\n    </div>\n    {{ count }}\n  </div>\n</template>',D="<script>\nexport default {\n  data() {\n    return {\n      count: 1\n    }\n  },\n  methods: {\n    handleIncrement() {\n      this.count++\n    },\n    handleDecrement() {\n      this.count--\n    }\n  }\n}\n<\/script>",T="<template>\n  <div class=\"counter\">\n    {{ displayedTime }}\n  </div>\n</template>\n\n<script>\nimport moment from 'moment'\n\nexport default {\n  props: {\n    format: {\n      type: String,\n      default: 'HH:mm:ss'\n    }\n  },\n  data() {\n    return {\n      currentTime: moment(),\n      counter: null\n    }\n  },\n  computed: {\n    displayedTime() {\n      console.log('[Clock] Computed function')\n      return this.currentTime.format(this.format)\n    }\n  },\n  created() {\n    this.counter = setInterval(() => {\n      this.currentTime = moment()\n    }, 1000);\n  },\n  beforeDestroy () {\n    clearInterval(this.counter);\n  }\n}\n<\/script>\n\n<style scoped>\n.counter {\n  font-size: 2.5rem;\n  font-family: Georgia, serif;\n}\n</style>",H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Codemirror",{style:e.customStyle,attrs:{options:e.options,width:"auto"},nativeOn:{keydown:function(e){e.stopPropagation()}},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})},A=[],F=(n("c5f6"),n("8f94")),I=(n("f9d4"),n("d69f"),n("7b00"),n("31c5"),n("10b2"),{props:{value:{type:String},lang:{type:String,default:"javascript"},height:{type:Number}},data:function(){return{model:this.value||"",options:{tabSize:2,styleActiveLine:!0,lineNumbers:!0,autoCloseTags:!0,autoCloseBrackets:!0,line:!0,mode:"text/".concat(this.lang),theme:"oceanic-next"}}},computed:{customStyle:function(){var e={};return this.height&&(e.height=this.height+"px"),e}},watch:{value:function(){this.model=this.value||""},model:function(){this.$emit("input",this.model)}},components:{Codemirror:F["codemirror"]}}),N=I,J=Object(o["a"])(N,H,A,!1,null,null,null),M=J.exports,B={data:function(){return{count:1,sourceHtml:R,sourceJs:D}},methods:{handleIncrement:function(){this.count++},handleDecrement:function(){this.count--}},components:{Codemirror:M}},L=B,Y=Object(o["a"])(L,w,_,!1,null,null,null),U=Y.exports,G=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},K=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center"},[n("img",{attrs:{src:"https://vuejs.org/images/lifecycle.png"}}),n("p",{staticClass:"text-muted text-center"},[e._v("\n    Stolen from "),n("a",{attrs:{href:"https://vuejs.org/v2/guide/instance.html",target:"_blank"}},[e._v("https://vuejs.org/v2/guide/instance.html")])])])}],q={},W=Object(o["a"])(q,G,K,!1,null,null,null),X=W.exports,Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-lg-6 mb-3"},[n("pre",[e._v(e._s(e.script))]),n("br"),n("div",{staticClass:"card"},[n("pre",[e._v(e._s(e.clock1))]),n("Clock")],1),n("div",{staticClass:"card"},[n("pre",[e._v(e._s(e.clock2))]),n("Clock",{attrs:{format:"dddd, DD.MM. HH:mm"}})],1),n("div",{staticClass:"card"},[n("pre",[e._v(e._s(e.clock3))]),n("Clock",{attrs:{format:"DD.MM.YYYY, HH:mm"}})],1)]),n("div",{staticClass:"col-12 col-lg-6"},[n("Codemirror",{model:{value:e.source,callback:function(t){e.source=t},expression:"source"}})],1)])])},Z=[],ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"counter"},[e._v("\n  "+e._s(e.displayedTime)+"\n")])},te=[],ne=n("c1df"),ae=n.n(ne),se={props:{format:{type:String,default:"HH:mm:ss"}},data:function(){return{currentTime:ae()(),counter:null}},computed:{displayedTime:function(){return console.log("[Clock] Computed function"),this.currentTime.format(this.format)}},created:function(){var e=this;this.counter=setInterval(function(){e.currentTime=ae()()},1e3)},beforeDestroy:function(){clearInterval(this.counter)}},re=se,oe=(n("4505"),Object(o["a"])(re,ee,te,!1,null,"2bfe0e2b",null)),le=oe.exports,ce={data:function(){return{source:T,clock1:"<Clock />",clock2:'<Clock format="dddd, DD.MM. HH:mm" />',clock3:'<Clock format="DD.MM.YYYY, HH:mm" />',script:"<script>\nimport Clock from './components/Clock'\n\nexport default {\n  components: {\n    Clock\n  }\n}\n<\/script>"}},components:{Codemirror:M,Clock:le}},ie=ce,ue=Object(o["a"])(ie,Q,Z,!1,null,null,null),me=ue.exports,de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("a",{attrs:{href:"https://router.vuejs.org/guide/essentials/named-routes.html",target:"_blank"}},[e._v("\n    https://router.vuejs.org/guide/essentials/named-routes.html\n  ")]),n("hr"),n("Codemirror",{model:{value:e.routerJs,callback:function(t){e.routerJs=t},expression:"routerJs"}}),n("p",{staticClass:"text-muted text-center"},[e._v("js - router initialization")]),n("Codemirror",{attrs:{lang:"html"},model:{value:e.htmlCode,callback:function(t){e.htmlCode=t},expression:"htmlCode"}}),n("p",{staticClass:"text-muted text-center"},[e._v("html usage")]),n("Codemirror",{model:{value:e.routerPush,callback:function(t){e.routerPush=t},expression:"routerPush"}}),n("p",{staticClass:"text-muted text-center"},[e._v("js - programmatic navigation")])],1)},pe=[],fe={components:{Codemirror:M},data:function(){return{routerJs:"const router = new VueRouter({\n  routes: [\n    {\n      path: '/user/:userId',\n      name: 'user',\n      component: User\n    }\n  ]\n})",htmlCode:"<router-link :to=\"{ name: 'user', params: { userId: 123 }}\">\n  User\n</router-link>",routerPush:"this.$router.push({\n  name: 'user',\n  params: { userId: 123 }\n})"}}},ve=fe,he=Object(o["a"])(ve,de,pe,!1,null,null,null),be=he.exports,ge=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"mb-2"},[n("button",{staticClass:"btn btn-primary mr-2",class:{active:"vue"===e.way},attrs:{type:"button"},on:{click:function(t){e.way="vue"}}},[e._v("\n      Vue way\n    ")]),n("button",{staticClass:"btn btn-primary",class:{active:"react"===e.way},attrs:{type:"button"},on:{click:function(t){e.way="react"}}},[e._v("\n      React way\n    ")])]),"vue"===e.way?n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-7"},[n("Codemirror",{staticClass:"mb-2",attrs:{lang:"html"},model:{value:e.formHtml,callback:function(t){e.formHtml=t},expression:"formHtml"}}),n("Codemirror",{model:{value:e.formJs,callback:function(t){e.formJs=t},expression:"formJs"}})],1),n("div",{staticClass:"col-12 col-md-5"},[n("div",{staticClass:"card mb-3 p-4"},[n("form",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.person.name,expression:"person.name"}],staticClass:"form-control mb-2",attrs:{type:"text",placeholder:"Name"},domProps:{value:e.person.name},on:{input:function(t){t.target.composing||e.$set(e.person,"name",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.person.surname,expression:"person.surname"}],staticClass:"form-control mb-2",attrs:{type:"text",placeholder:"Surname"},domProps:{value:e.person.surname},on:{input:function(t){t.target.composing||e.$set(e.person,"surname",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.person.age,expression:"person.age"}],staticClass:"form-control mb-2",attrs:{type:"number",placeholder:"Age"},domProps:{value:e.person.age},on:{input:function(t){t.target.composing||e.$set(e.person,"age",t.target.value)}}}),n("select",{directives:[{name:"model",rawName:"v-model",value:e.person.framework,expression:"person.framework"}],staticClass:"form-control mb-2",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.person,"framework",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"vue"}},[e._v("Vue")]),n("option",{attrs:{value:"react"}},[e._v("React")]),n("option",{attrs:{value:"angular"}},[e._v("Angular")])]),n("div",{staticClass:"form-check"},[n("label",{staticClass:"form-check-label"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.person.newsletter,expression:"person.newsletter"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.person.newsletter)?e._i(e.person.newsletter,null)>-1:e.person.newsletter},on:{change:function(t){var n=e.person.newsletter,a=t.target,s=!!a.checked;if(Array.isArray(n)){var r=null,o=e._i(n,r);a.checked?o<0&&e.$set(e.person,"newsletter",n.concat([r])):o>-1&&e.$set(e.person,"newsletter",n.slice(0,o).concat(n.slice(o+1)))}else e.$set(e.person,"newsletter",s)}}}),e._v("\n              Receive newsletter\n            ")])])])]),n("pre",[e._v(e._s(e.person))])])]):[n("Codemirror",{staticClass:"mb-2",model:{value:e.formReact1,callback:function(t){e.formReact1=t},expression:"formReact1"}}),n("Codemirror",{model:{value:e.formReact2,callback:function(t){e.formReact2=t},expression:"formReact2"}})]],2)},je=[];function Ce(){this.name="",this.surname="",this.age=20,this.framework="vue",this.newsletter=!1}var ye={data:function(){return{formHtml:x,formJs:P,formReact1:S,formReact2:$,person:new Ce,way:"vue"}},components:{Codemirror:M}},ke=ye,we=Object(o["a"])(ke,ge,je,!1,null,null,null),_e=we.exports,xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),n("div",{staticClass:"text-center mb-3"},[n("ButtonsEmit",{on:{onFail:e.handleFail,onSuccess:e.handleSuccess}})],1),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-6 mb-3"},[n("span",{staticClass:"small text-muted"},[e._v("ChildComponent.vue")]),n("Codemirror",{attrs:{lang:"html"},model:{value:e.childComponent,callback:function(t){e.childComponent=t},expression:"childComponent"}})],1),n("div",{staticClass:"col-12 col-md-6"},[n("span",{staticClass:"small text-muted"},[e._v("ParentComponent.vue")]),n("Codemirror",{model:{value:e.parentComponent,callback:function(t){e.parentComponent=t},expression:"parentComponent"}})],1)])])},Pe=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center"},[n("p",[e._v("\n      When you prefer alerting the parent instead of passing down the function in props...\n      "),n("br"),n("strong",[e._v("Because why would you do that in the first place?")])])])}],Se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("button",{staticClass:"btn btn-primary mr-2",attrs:{type:"button"},on:{click:function(t){return e.$emit("onSuccess")}}},[e._v("\n    Success\n  ")]),n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:e.alertFail}},[e._v("\n    Fail\n  ")])])},$e=[],Ee={methods:{alertFail:function(){this.$emit("onFail","This is your failure payload")}}},Oe=Ee,Ve=Object(o["a"])(Oe,Se,$e,!1,null,null,null),ze=Ve.exports,Re={data:function(){return{parentComponent:E,childComponent:O}},methods:{handleSuccess:function(){console.log("Yay!")},handleFail:function(e){console.log("Me no happy!",e)}},components:{Codemirror:M,ButtonsEmit:ze}},De=Re,Te=Object(o["a"])(De,xe,Pe,!1,null,null,null),He=Te.exports,Ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"row mb-3"},[n("div",{staticClass:"col-12 col-md-6"},[n("div",{staticClass:"card mb-3"},[n("ButtonPicker",{staticClass:"mb-2",attrs:{data:e.flowers},model:{value:e.flower,callback:function(t){e.flower=t},expression:"flower"}}),n("pre",[e._v(e._s(e.flower))])],1)]),n("div",{staticClass:"col-12 col-md-6"},[n("div",{staticClass:"card"},[n("ButtonPicker",{staticClass:"mb-2",attrs:{data:e.colors},model:{value:e.color,callback:function(t){e.color=t},expression:"color"}}),n("pre",[e._v(e._s(e.color))])],1)])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-6"},[n("span",{staticClass:"text-muted small"},[e._v("Parent.vue")]),n("Codemirror",{model:{value:e.parentSource,callback:function(t){e.parentSource=t},expression:"parentSource"}})],1),n("div",{staticClass:"col-12 col-md-6"},[n("span",{staticClass:"text-muted small"},[e._v("ButtonPicker.vue")]),n("Codemirror",{model:{value:e.buttonPickerSource,callback:function(t){e.buttonPickerSource=t},expression:"buttonPickerSource"}})],1)])])},Fe=[],Ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.data,function(t){return n("button",{key:t.label,staticClass:"btn btn-danger mr-2",class:{active:e.model===t.value},attrs:{type:"button"},on:{click:function(n){e.model=t.value}}},[e._v("\n    "+e._s(t.title)+"\n  ")])}),0)},Ne=[],Je={props:{value:{type:String,default:""},data:{type:Array}},data:function(){return{model:this.value}},watch:{model:function(){this.$emit("input",this.model)}}},Me=Je,Be=Object(o["a"])(Me,Ie,Ne,!1,null,null,null),Le=Be.exports,Ye={data:function(){return{buttonPickerSource:V,parentSource:z,flower:"rose",flowers:[{title:"Rose",value:"rose"},{title:"Lily",value:"lily"},{title:"Sunflower",value:"sunflower"},{title:"Cactus",value:"they-are-beautiful-too"}],color:"#0000ff",colors:[{title:"Red",value:"#ff0000"},{title:"Green",value:"#00ff00"},{title:"Blue",value:"#0000ff"}]}},components:{Codemirror:M,ButtonPicker:Le}},Ue=Ye,Ge=Object(o["a"])(Ue,Ae,Fe,!1,null,null,null),Ke=Ge.exports,qe=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},We=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("p",[e._v("\n    The app:"),n("br"),n("a",{attrs:{href:"https://vue-brown-bag.herokuapp.com/",target:"_blank"}},[e._v("\n      https://vue-brown-bag.herokuapp.com/\n    ")])]),n("p",[e._v("\n    The app source code:"),n("br"),n("a",{attrs:{href:"https://github.com/DJanoskova/Vue.js-Brown-bag",target:"_blank"}},[e._v("\n      https://github.com/DJanoskova/Vue.js-Brown-bag\n    ")])]),n("p",[e._v("\n    Vue.js getting started guide:"),n("br"),n("a",{attrs:{href:"https://vuejs.org/v2/guide/",target:"_blank"}},[e._v("\n      https://vuejs.org/v2/guide/\n    ")])]),n("p",[e._v("\n    Vue API CheatSheet:"),n("br"),n("a",{attrs:{href:"https://vuejs-tips.github.io/cheatsheet/",target:"_blank"}},[e._v("\n      https://vuejs-tips.github.io/cheatsheet/\n    ")])]),n("p",[e._v("\n    Vue CLI:"),n("br"),n("a",{attrs:{href:"https://cli.vuejs.org/",target:"_blank"}},[e._v("\n      https://cli.vuejs.org/\n    ")])]),n("p",[e._v("\n    Made with Vue.js:"),n("br"),n("a",{attrs:{href:"https://madewithvuejs.com/",target:"_blank"}},[e._v("\n      https://madewithvuejs.com/\n    ")])])])}],Xe={},Qe=Object(o["a"])(Xe,qe,We,!1,null,null,null),Ze=Qe.exports,et=[{name:"vuejs-vs-react",meta:{title:"Vue.js vs React"},component:k},{name:"introduction",meta:{title:"Introduction to Vue.js"},component:U},{name:"lifecycle",meta:{title:"Vue.js lifecycle hooks"},component:X},{name:"custom-components",meta:{title:"Custom components"},component:me},{name:"named-routes",meta:{title:"Named routes"},component:be},{name:"vue-forms-basics",meta:{title:"Vue forms basics"},component:_e},{name:"emit",meta:{title:"$emit"},component:He},{name:"custom-v-model",meta:{title:"Custom v-model"},component:Ke},{name:"links",meta:{title:"Useful links"},component:Ze}];et.forEach(function(e,t){return e.path="".concat(t+1)});var tt=et,nt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"float-right app-views"},e._l(e.views,function(t){return n("button",{key:t.value,staticClass:"btn btn-primary mr-1",class:{active:e.currentView===t.value},on:{click:function(n){e.currentView=t.value}}},[n(t.icon,{tag:"component"})],1)}),0)},at=[],st=n("0a35"),rt={data:function(){return{currentView:"monitor",views:[{icon:st["a"],value:"monitor"},{icon:st["b"],value:"tv"}]}},watch:{currentView:function(){switch(this.currentView){case"monitor":return void document.documentElement.classList.remove("text-enlarge");case"tv":return void document.documentElement.classList.add("text-enlarge");default:return}}},components:{TvIcon:st["b"],MonitorIcon:st["a"]}},ot=rt,lt=Object(o["a"])(ot,nt,at,!1,null,null,null),ct=lt.exports,it=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"paginator"},e._l(e.pagesCount,function(t){return n("span",{key:t,staticClass:"paginator__page",class:{active:t===e.activePage}})}),0)},ut=[],mt={props:{activePage:{type:Number,default:1}},data:function(){return{pagesCount:tt.length}}},dt=mt,pt=Object(o["a"])(dt,it,ut,!1,null,null,null),ft=pt.exports,vt={metaInfo:function(){return{title:this.$route.meta.title}},methods:{handleKeydown:function(e){var t=e.key,n=e.keyCode,a="ArrowRight"===t||39===n,s="ArrowLeft"===t||37===n;(a||s)&&(a?this.handleNextPage():this.handlePrevPage())},handleNextPage:function(){var e=tt.length;if(this.activePage<e){var t=tt[this.activePage];this.$router.push({name:t.name})}},handlePrevPage:function(){var e=1;if(this.activePage>e){var t=tt[this.activePage-2];this.$router.push({name:t.name})}}},computed:{activePage:function(){return h()(this.$route.path.replace(/\D+/g,""))}},components:{SwitchViews:ct,Pagination:ft},mounted:function(){window.addEventListener("keydown",this.handleKeydown)},beforeDestroy:function(){window.removeEventListener("keydown",this.handleKeydown)}},ht=vt,bt=Object(o["a"])(ht,p,f,!1,null,null,null),gt=bt.exports;a["a"].use(d["a"]);var jt=new d["a"]({mode:"hash",base:"/",routes:[{path:"/pages",component:gt,children:tt},{path:"*",redirect:"/pages/1"}]}),Ct=n("2f62");a["a"].use(Ct["a"]);var yt=new Ct["a"].Store({state:{},mutations:{},actions:{}});n("a0d8");a["a"].config.productionTip=!1,a["a"].config.devtools=!0,a["a"].use(m.a),new a["a"]({router:jt,store:yt,render:function(e){return e(i)}}).$mount("#app")},a0d8:function(e,t,n){}});
//# sourceMappingURL=app.bc22b924.js.map