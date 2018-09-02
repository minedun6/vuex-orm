(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{168:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"database-and-registration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database-and-registration","aria-hidden":"true"}},[t._v("#")]),t._v(" Database And Registration")]),t._v(" "),a("p",[t._v("To register Models and Modules to the Vuex, you must first create Database, register Models along with Modules to the Database, and then register Database to the Vuex through Vuex ORM "),a("code",[t._v("install")]),t._v(" method.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vuex "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'vuex'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" VuexORM "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'@vuex-orm/core'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" User "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./User'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Post "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./Post'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" users "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./users'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" posts "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./posts'")]),t._v("\n\nVue"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("use")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vuex"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Create new instance of Database.")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" database "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("VuexORM"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Database")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Register Model and Module. The first argument is the Model, and second")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// is the Module.")]),t._v("\ndatabase"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("register")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("User"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" users"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndatabase"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("register")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Post"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" posts"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Create Vuex Store and register database through Vuex ORM.")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vuex"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Store")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("VuexORM"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("install")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("database"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" store\n")])])]),a("h2",{attrs:{id:"changing-the-namespace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changing-the-namespace","aria-hidden":"true"}},[t._v("#")]),t._v(" Changing The Namespace")]),t._v(" "),a("p",[t._v("By default, Vuex ORM creates a module named "),a("code",[t._v("entities")]),t._v(" in Vuex Store. All modules and data handled by Vuex ORM are going to be stored under this namespace.")]),t._v(" "),a("p",[t._v("If you would like to change the module name, pass "),a("code",[t._v("namespace")]),t._v(" option to the "),a("code",[t._v("install")]),t._v(" method when registering Vuex ORM as a plugin.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Vuex"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("Store")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("VuexORM"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("install")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("database"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" namespace"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'my_entities'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("With above example, you can access the Vuex Store with "),a("code",[t._v("store.state.my_entities")]),t._v(".")])])}],!1,null,null,null);s.default=e.exports}}]);