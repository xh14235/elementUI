webpackJsonp([2],{IIpU:function(t,e){},iUBz:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("I29D"),i=n.n(s),a={name:"NewList",data:function(){return{newsList:[]}},methods:{getNewsData:function(){var t=this;i.a.get("/api/news.json").then(function(e){var n=e.data.data;t.newsList=n})},newsDetail:function(t){this.$router.push({name:"NewsDetail",params:{id:t}})}},mounted:function(){this.getNewsData()}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"newslist"},[n("div",{staticClass:"container"},[n("el-row",{staticClass:"bread"},[n("el-breadcrumb",{attrs:{separator:"/"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._v(" "),n("el-breadcrumb-item",[t._v("新闻列表")])],1)],1),t._v(" "),n("div",{staticClass:"list"},t._l(t.newsList,function(e){return n("li",{key:e.id,on:{click:function(n){return t.newsDetail(e.id)}}},[t._v("\n        "+t._s(e.title)+"\n      ")])}),0)],1)])},staticRenderFns:[]};var c={name:"NewsList",components:{NewList:n("VU/8")(a,r,!1,function(t){n("iokJ")},"data-v-07915072",null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"newslist"},[e("new-list")],1)},staticRenderFns:[]};var l=n("VU/8")(c,o,!1,function(t){n("IIpU")},"data-v-c49fe1c6",null);e.default=l.exports},iokJ:function(t,e){}});