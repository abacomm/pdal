(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{236:function(t,e,n){t.exports=n.p+"img/714b795.png"},237:function(t,e,n){t.exports=n.p+"img/32fab5e.svg"},238:function(t,e,n){t.exports=n.p+"img/cd46cd0.svg"},239:function(t,e,n){t.exports=n.p+"img/3d734fb.svg"},241:function(t,e,n){t.exports=n.p+"img/b047509.webp"},261:function(t,e,n){t.exports=n.p+"img/f96c539.svg"},282:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"fixed-nav",attrs:{id:"fixed-nav"}},[r("div",{staticClass:"container"},[r("a",{staticClass:"navbar-brand",attrs:{href:"#",title:"Voltar ao início"}},[r("img",{staticClass:"img-logo-pdal",attrs:{src:n(239),alt:"Pdal logo",width:"110",height:"44"}})]),t._v(" "),r("button",{staticClass:"navbar-toggler-dark",attrs:{id:"navbar-toggle-fixed",type:"button","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})]),t._v(" "),r("div",{staticClass:"submenu",attrs:{id:"submenu"}},[r("a",{staticClass:"nav-item nav-link anchor",attrs:{title:"Funcionalidades",href:"#features-section"}},[t._v("Funcionalidades")]),t._v(" "),r("a",{staticClass:"nav-item nav-link anchor",attrs:{title:"Depoimentos",href:"#testimonials-section"}},[t._v("Depoimentos")]),t._v(" "),r("a",{staticClass:"nav-item nav-link anchor",attrs:{title:"Baixe o aplicativo",href:"#cta-section"}},[t._v("Baixe o aplicativo")]),t._v(" "),r("a",{staticClass:"nav-item nav-link anchor",attrs:{title:"Fique por dentro",href:"#newsletter-section"}},[t._v("Fique por dentro")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("nav",{staticClass:"navbar navbar-expand-lg navbar-dark"},[r("a",{staticClass:"navbar-brand",attrs:{href:"#",title:"Voltar ao início"}},[r("img",{staticClass:"img-logo-pdal",attrs:{src:n(261),alt:"Pdal logo",width:"110"}})]),t._v(" "),r("button",{staticClass:"navbar-toggler",attrs:{type:"button","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})]),t._v(" "),r("div",{staticClass:"navbar-collapse justify-content-md-end",attrs:{id:"navbarNavAltMarkup"}},[r("div",{staticClass:"navbar-nav mt-4 mt-lg-0"},[r("a",{staticClass:"nav-item nav-link anchor",attrs:{href:"#features-section"}},[t._v("Funcionalidades")]),t._v(" "),r("a",{staticClass:"nav-item nav-link anchor",attrs:{href:"#testimonials-section"}},[t._v("Depoimentos")]),t._v(" "),r("a",{staticClass:"nav-item nav-link anchor",attrs:{href:"#cta-section"}},[t._v("Baixe o aplicativo")]),t._v(" "),r("a",{staticClass:"nav-item nav-link anchor",attrs:{href:"#newsletter-section"}},[t._v("Fique por dentro")])])])])])}],o=(n(25),n(33),n(34),n(31),n(35),n(16),n(8),n(24),n(32),n(37),n(242)),l=n.n(o);function c(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw o}}}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var d={mounted:function(){var t=this;window.onscroll=function(t){window.pageYOffset>100?document.querySelector("#fixed-nav").classList.add("active"):document.querySelector("#fixed-nav").classList.remove("active")},document.querySelector("#navbar-toggle-fixed").addEventListener("click",(function(t){document.getElementById("submenu").classList.toggle("active")})),document.querySelector(".navbar-toggler").addEventListener("click",(function(t){document.getElementById("navbarNavAltMarkup").classList.toggle("active")}));var e,n=c(document.querySelectorAll("#submenu a"));try{for(n.s();!(e=n.n()).done;){e.value.addEventListener("click",(function(e){e.preventDefault(),document.getElementById("submenu").classList.remove("active"),t.scrollTo(document.querySelector(e.target.hash))}))}}catch(t){n.e(t)}finally{n.f()}var r,o=c(document.querySelectorAll("#navbarNavAltMarkup a"));try{for(o.s();!(r=o.n()).done;){r.value.addEventListener("click",(function(e){e.preventDefault(),document.getElementById("navbarNavAltMarkup").classList.remove("active"),t.scrollTo(document.querySelector(e.target.hash))}))}}catch(t){o.e(t)}finally{o.f()}l()(".anchor").on("click",(function(t){var e=l()(l()(this).attr("href"));e.length&&(t.preventDefault(),l()("html, body").animate({scrollTop:e.offset().top-60},1e3))}))},methods:{scrollTo:function(element){window.scroll({behavior:"smooth",left:0,top:element.offsetTop-document.getElementById("fixed-nav").clientHeight})}}},m=n(42),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("header",{staticClass:"header"},[t._m(1),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"row align-items-start mt-5"},[r("div",{staticClass:"col-md-12 col-lg-7"},[r("picture",[r("source",{attrs:{srcset:n(241),type:"image/webp"}}),t._v(" "),r("source",{attrs:{srcset:n(236),type:"image/png"}}),t._v(" "),r("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"d-block mb-5 mb-lg-none d-lg-none iphone-device iphone-1",attrs:{src:n(236),alt:"Imagem do aplicativo no iPhone"}})]),t._v(" "),r("h1",{staticClass:"hero-title mt-5 text-center text-md-left"},[t._v("\n            Você acaba de encontrar as melhores aulas de bike indoor do\n            Brasil!\n          ")]),t._v(" "),r("p",{staticClass:"hero-subtitle mt-4 mb-5 text-center text-md-left"},[t._v("\n            Está procurando aulas orientadas com profissionais de alta\n            qualidade? Baixe o app e escolha seu treino.\n          ")]),t._v(" "),r("a",{attrs:{href:"#",target:"_blank",rel:"noopener"}},[r("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"btn-apple",attrs:{src:n(237),alt:"Botão para download na AppStore"}})]),t._v(" "),r("a",{attrs:{href:"#",target:"_blank",rel:"noopener"}},[r("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"btn-google",attrs:{src:n(238),alt:"Botão para download no Google Play"}})])]),t._v(" "),r("div",{staticClass:"col-md-12 col-lg-5 mt-5 mt-lg-0 d-none d-lg-block"},[r("picture",[r("source",{attrs:{srcset:n(241),type:"image/webp"}}),t._v(" "),r("source",{attrs:{srcset:n(236),type:"image/png"}}),t._v(" "),r("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"iphone-device iphone-2",attrs:{src:n(236),alt:"Imagem do aplicativo no iPhone"}})])])])])])])}),r,!1,null,null,null);e.default=component.exports}}]);