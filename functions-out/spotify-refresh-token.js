!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t){e.exports=require("stream")},function(e,t){e.exports=require("zlib")},function(e,t){e.exports=require("url")},function(e,t,r){e.exports=r(7)},function(e,t){e.exports=require("http")},function(e,t){e.exports=require("https")},function(e,t,r){"use strict";r.r(t),r.d(t,"handler",function(){return c});var n=r(3),o=r.n(n);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(n=(s=a.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function s(e,t,r,n,o,i,s){try{var a=e[i](s),u=a.value}catch(e){return void r(e)}a.done?t(u):Promise.resolve(u).then(n,o)}var a=r(9).default;function u(e){return e.then(function(e){return[null,e]}).catch(function(e){return[e]})}function c(e,t){return l.apply(this,arguments)}function l(){return(l=function(e){return function(){var t=this,r=arguments;return new Promise(function(n,o){var i=e.apply(t,r);function a(e){s(i,n,o,a,u,"next",e)}function u(e){s(i,n,o,a,u,"throw",e)}a(void 0)})}}(o.a.mark(function e(t,r){var n,s,c,l,f,h,d,p,y,b;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://accounts.spotify.com/api/token",s={Authorization:"Basic ".concat("MWU2M2Q5NTJjNDA3NDJlNDk4M2Q1YTkwZDI1MTNjYWU6ODIxOTQ5Y2I1YTMwNDQ2Yzk0Y2U3MTA4OTdmN2NhZTQ="),"Content-Type":"application/x-www-form-urlencoded"},c={grant_type:"refresh_token",refresh_token:"AQAzpULUzq4yVSgnA-AX-ducvwfsw2WVuovf_dC0UUYIs6XgUNXgfSyQxgln2D2E0jKXzFK9MeEmYUblgGnW5dVTg9H61WNFhyAWNWADBq82beemy4MuMTm_lOKmbcAxPcWEDA"},l=Object.keys(c).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(c[e])}).join("&"),f={method:"POST",headers:s,body:l},e.next=8,u(a(n,f));case 8:if(h=e.sent,d=i(h,2),p=d[0],y=d[1],!p){e.next=14;break}return e.abrupt("return",{statusCode:500,body:JSON.stringify({message:p.message})});case 14:if(y.ok){e.next=16;break}return e.abrupt("return",{statusCode:y.status,body:y.statusText});case 16:return e.next=18,y.json();case 18:return b=e.sent,e.abrupt("return",{statusCode:y.status,body:JSON.stringify({data:b})});case 20:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}},function(e,t,r){var n=function(){return this||"object"==typeof self&&self}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,e.exports=r(8),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(e){n.regeneratorRuntime=void 0}},function(e,t){!function(t){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",c="object"==typeof e,l=t.regeneratorRuntime;if(l)c&&(e.exports=l);else{(l=t.regeneratorRuntime=c?e.exports:{}).wrap=w;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",y={},b={};b[s]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(k([])));g&&g!==n&&o.call(g,s)&&(b=g);var v=T.prototype=j.prototype=Object.create(b);O.prototype=v.constructor=T,T.constructor=O,T[u]=O.displayName="GeneratorFunction",l.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===O||"GeneratorFunction"===(t.displayName||t.name))},l.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,T):(e.__proto__=T,u in e||(e[u]="GeneratorFunction")),e.prototype=Object.create(v),e},l.awrap=function(e){return{__await:e}},S(E.prototype),E.prototype[a]=function(){return this},l.AsyncIterator=E,l.async=function(e,t,r,n){var o=new E(w(e,t,r,n));return l.isGeneratorFunction(t)?o:o.next().then(function(e){return e.done?e.value:o.next()})},S(v),v[u]="Generator",v[s]=function(){return this},v.toString=function(){return"[object Generator]"},l.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=k,B.prototype={constructor:B,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(A),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,o){return a.type="throw",a.arg=e,t.next=n,o&&(t.method="next",t.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],a=s.completion;if("root"===s.tryLoc)return n("end");if(s.tryLoc<=this.prev){var u=o.call(s,"catchLoc"),c=o.call(s,"finallyLoc");if(u&&c){if(this.prev<s.catchLoc)return n(s.catchLoc,!0);if(this.prev<s.finallyLoc)return n(s.finallyLoc)}else if(u){if(this.prev<s.catchLoc)return n(s.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return n(s.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=e,s.arg=t,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),A(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:k(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),y}}}function w(e,t,r,n){var o=t&&t.prototype instanceof j?t:j,i=Object.create(o.prototype),s=new B(n||[]);return i._invoke=function(e,t,r){var n=f;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return _()}for(r.method=o,r.arg=i;;){var s=r.delegate;if(s){var a=P(s,r);if(a){if(a===y)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=x(e,t,r);if("normal"===u.type){if(n=r.done?p:h,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(e,r,s),i}function x(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function j(){}function O(){}function T(){}function S(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function E(e){var t;this._invoke=function(r,n){function i(){return new Promise(function(t,i){!function t(r,n,i,s){var a=x(e[r],e,n);if("throw"!==a.type){var u=a.arg,c=u.value;return c&&"object"==typeof c&&o.call(c,"__await")?Promise.resolve(c.__await).then(function(e){t("next",e,i,s)},function(e){t("throw",e,i,s)}):Promise.resolve(c).then(function(e){u.value=e,i(u)},function(e){return t("throw",e,i,s)})}s(a.arg)}(r,n,t,i)})}return t=t?t.then(i,i):i()}}function P(e,t){var n=e.iterator[t.method];if(n===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=r,P(e,t),"throw"===t.method))return y;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=x(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,y;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,y):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,y)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function B(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function k(e){if(e){var t=e[s];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(o.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=r,t.done=!0,t};return i.next=i}}return{next:_}}function _(){return{value:r,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},function(e,t,r){"use strict";r.r(t),r.d(t,"Headers",function(){return E}),r.d(t,"Request",function(){return I}),r.d(t,"Response",function(){return C}),r.d(t,"FetchError",function(){return f});var n=r(0),o=r(4),i=r(2),s=r(5),a=r(1);const u=Symbol("buffer"),c=Symbol("type");class l{constructor(){this[c]="";const e=arguments[0],t=arguments[1],r=[];if(e){const t=e,n=Number(t.length);for(let e=0;e<n;e++){const n=t[e];let o;o=n instanceof Buffer?n:ArrayBuffer.isView(n)?Buffer.from(n.buffer,n.byteOffset,n.byteLength):n instanceof ArrayBuffer?Buffer.from(n):n instanceof l?n[u]:Buffer.from("string"==typeof n?n:String(n)),r.push(o)}}this[u]=Buffer.concat(r);let n=t&&void 0!==t.type&&String(t.type).toLowerCase();n&&!/[^\u0020-\u007E]/.test(n)&&(this[c]=n)}get size(){return this[u].length}get type(){return this[c]}slice(){const e=this.size,t=arguments[0],r=arguments[1];let n,o;n=void 0===t?0:t<0?Math.max(e+t,0):Math.min(t,e),o=void 0===r?e:r<0?Math.max(e+r,0):Math.min(r,e);const i=Math.max(o-n,0),s=this[u].slice(n,n+i),a=new l([],{type:arguments[2]});return a[u]=s,a}}function f(e,t,r){Error.call(this,e),this.message=e,this.type=t,r&&(this.code=this.errno=r.code),Error.captureStackTrace(this,this.constructor)}let h;Object.defineProperties(l.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}}),Object.defineProperty(l.prototype,Symbol.toStringTag,{value:"Blob",writable:!1,enumerable:!1,configurable:!0}),f.prototype=Object.create(Error.prototype),f.prototype.constructor=f,f.prototype.name="FetchError";try{h=require("encoding").convert}catch(e){}const d=Symbol("Body internals"),p=n.PassThrough;function y(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=r.size;let i=void 0===o?0:o;var s=r.timeout;let a=void 0===s?0:s;null==e?e=null:"string"==typeof e||m(e)||e instanceof l||Buffer.isBuffer(e)||"[object ArrayBuffer]"===Object.prototype.toString.call(e)||ArrayBuffer.isView(e)||e instanceof n||(e=String(e)),this[d]={body:e,disturbed:!1,error:null},this.size=i,this.timeout=a,e instanceof n&&e.on("error",function(e){const r="AbortError"===e.name?e:new f(`Invalid response body while trying to fetch ${t.url}: ${e.message}`,"system",e);t[d].error=r})}function b(){var e=this;if(this[d].disturbed)return y.Promise.reject(new TypeError(`body used already for: ${this.url}`));if(this[d].disturbed=!0,this[d].error)return y.Promise.reject(this[d].error);if(null===this.body)return y.Promise.resolve(Buffer.alloc(0));if("string"==typeof this.body)return y.Promise.resolve(Buffer.from(this.body));if(this.body instanceof l)return y.Promise.resolve(this.body[u]);if(Buffer.isBuffer(this.body))return y.Promise.resolve(this.body);if("[object ArrayBuffer]"===Object.prototype.toString.call(this.body))return y.Promise.resolve(Buffer.from(this.body));if(ArrayBuffer.isView(this.body))return y.Promise.resolve(Buffer.from(this.body.buffer,this.body.byteOffset,this.body.byteLength));if(!(this.body instanceof n))return y.Promise.resolve(Buffer.alloc(0));let t=[],r=0,o=!1;return new y.Promise(function(n,i){let s;e.timeout&&(s=setTimeout(function(){o=!0,i(new f(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`,"body-timeout"))},e.timeout)),e.body.on("error",function(t){"AbortError"===t.name?(o=!0,i(t)):i(new f(`Invalid response body while trying to fetch ${e.url}: ${t.message}`,"system",t))}),e.body.on("data",function(n){if(!o&&null!==n){if(e.size&&r+n.length>e.size)return o=!0,void i(new f(`content size at ${e.url} over limit: ${e.size}`,"max-size"));r+=n.length,t.push(n)}}),e.body.on("end",function(){if(!o){clearTimeout(s);try{n(Buffer.concat(t))}catch(t){i(new f(`Could not create Buffer from response body for ${e.url}: ${t.message}`,"system",t))}}})})}function m(e){return"object"==typeof e&&"function"==typeof e.append&&"function"==typeof e.delete&&"function"==typeof e.get&&"function"==typeof e.getAll&&"function"==typeof e.has&&"function"==typeof e.set&&("URLSearchParams"===e.constructor.name||"[object URLSearchParams]"===Object.prototype.toString.call(e)||"function"==typeof e.sort)}function g(e){let t,r,o=e.body;if(e.bodyUsed)throw new Error("cannot clone body after it is used");return o instanceof n&&"function"!=typeof o.getBoundary&&(t=new p,r=new p,o.pipe(t),o.pipe(r),e[d].body=t,o=r),o}function v(e){const t=e.body;return null===t?0:"string"==typeof t?Buffer.byteLength(t):m(t)?Buffer.byteLength(String(t)):t instanceof l?t.size:Buffer.isBuffer(t)?t.length:"[object ArrayBuffer]"===Object.prototype.toString.call(t)?t.byteLength:ArrayBuffer.isView(t)?t.byteLength:t&&"function"==typeof t.getLengthSync&&(t._lengthRetrievers&&0==t._lengthRetrievers.length||t.hasKnownLength&&t.hasKnownLength())?t.getLengthSync():null}y.prototype={get body(){return this[d].body},get bodyUsed(){return this[d].disturbed},arrayBuffer(){return b.call(this).then(function(e){return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)})},blob(){let e=this.headers&&this.headers.get("content-type")||"";return b.call(this).then(function(t){return Object.assign(new l([],{type:e.toLowerCase()}),{[u]:t})})},json(){var e=this;return b.call(this).then(function(t){try{return JSON.parse(t.toString())}catch(t){return y.Promise.reject(new f(`invalid json response body at ${e.url} reason: ${t.message}`,"invalid-json"))}})},text(){return b.call(this).then(function(e){return e.toString()})},buffer(){return b.call(this)},textConverted(){var e=this;return b.call(this).then(function(t){return function(e,t){if("function"!=typeof h)throw new Error("The package `encoding` must be installed to use the textConverted() function");const r=t.get("content-type");let n,o,i="utf-8";r&&(n=/charset=([^;]*)/i.exec(r));o=e.slice(0,1024).toString(),!n&&o&&(n=/<meta.+?charset=(['"])(.+?)\1/i.exec(o));!n&&o&&(n=/<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(o))&&(n=/charset=(.*)/i.exec(n.pop()));!n&&o&&(n=/<\?xml.+?encoding=(['"])(.+?)\1/i.exec(o));n&&("gb2312"!==(i=n.pop())&&"gbk"!==i||(i="gb18030"));return h(e,"UTF-8",i).toString()}(t,e.headers)})}},Object.defineProperties(y.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0}}),y.mixIn=function(e){for(const t of Object.getOwnPropertyNames(y.prototype))if(!(t in e)){const r=Object.getOwnPropertyDescriptor(y.prototype,t);Object.defineProperty(e,t,r)}},y.Promise=global.Promise;const w=/[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,x=/[^\t\x20-\x7e\x80-\xff]/;function j(e){if(e=`${e}`,w.test(e))throw new TypeError(`${e} is not a legal HTTP header name`)}function O(e){if(e=`${e}`,x.test(e))throw new TypeError(`${e} is not a legal HTTP header value`)}function T(e,t){t=t.toLowerCase();for(const r in e)if(r.toLowerCase()===t)return r}const S=Symbol("map");class E{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;if(this[S]=Object.create(null),e instanceof E){const t=e.raw(),r=Object.keys(t);for(const e of r)for(const r of t[e])this.append(e,r)}else if(null==e);else{if("object"!=typeof e)throw new TypeError("Provided initializer must be an object");{const t=e[Symbol.iterator];if(null!=t){if("function"!=typeof t)throw new TypeError("Header pairs must be iterable");const r=[];for(const t of e){if("object"!=typeof t||"function"!=typeof t[Symbol.iterator])throw new TypeError("Each header pair must be iterable");r.push(Array.from(t))}for(const e of r){if(2!==e.length)throw new TypeError("Each header pair must be a name/value tuple");this.append(e[0],e[1])}}else for(const t of Object.keys(e)){const r=e[t];this.append(t,r)}}}}get(e){j(e=`${e}`);const t=T(this[S],e);return void 0===t?null:this[S][t].join(", ")}forEach(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,r=P(this),n=0;for(;n<r.length;){var o=r[n];const i=o[0],s=o[1];e.call(t,s,i,this),r=P(this),n++}}set(e,t){t=`${t}`,j(e=`${e}`),O(t);const r=T(this[S],e);this[S][void 0!==r?r:e]=[t]}append(e,t){t=`${t}`,j(e=`${e}`),O(t);const r=T(this[S],e);void 0!==r?this[S][r].push(t):this[S][e]=[t]}has(e){return j(e=`${e}`),void 0!==T(this[S],e)}delete(e){j(e=`${e}`);const t=T(this[S],e);void 0!==t&&delete this[S][t]}raw(){return this[S]}keys(){return A(this,"key")}values(){return A(this,"value")}[Symbol.iterator](){return A(this,"key+value")}}function P(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"key+value";return Object.keys(e[S]).sort().map("key"===t?function(e){return e.toLowerCase()}:"value"===t?function(t){return e[S][t].join(", ")}:function(t){return[t.toLowerCase(),e[S][t].join(", ")]})}E.prototype.entries=E.prototype[Symbol.iterator],Object.defineProperty(E.prototype,Symbol.toStringTag,{value:"Headers",writable:!1,enumerable:!1,configurable:!0}),Object.defineProperties(E.prototype,{get:{enumerable:!0},forEach:{enumerable:!0},set:{enumerable:!0},append:{enumerable:!0},has:{enumerable:!0},delete:{enumerable:!0},keys:{enumerable:!0},values:{enumerable:!0},entries:{enumerable:!0}});const L=Symbol("internal");function A(e,t){const r=Object.create(B);return r[L]={target:e,kind:t,index:0},r}const B=Object.setPrototypeOf({next(){if(!this||Object.getPrototypeOf(this)!==B)throw new TypeError("Value of `this` is not a HeadersIterator");var e=this[L];const t=e.target,r=e.kind,n=e.index,o=P(t,r);return n>=o.length?{value:void 0,done:!0}:(this[L].index=n+1,{value:o[n],done:!1})}},Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));Object.defineProperty(B,Symbol.toStringTag,{value:"HeadersIterator",writable:!1,enumerable:!1,configurable:!0});const k=Symbol("Response internals"),_=o.STATUS_CODES;class C{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};y.call(this,e,t);const r=t.status||200;this[k]={url:t.url,status:r,statusText:t.statusText||_[r],headers:new E(t.headers)}}get url(){return this[k].url}get status(){return this[k].status}get ok(){return this[k].status>=200&&this[k].status<300}get statusText(){return this[k].statusText}get headers(){return this[k].headers}clone(){return new C(g(this),{url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok})}}y.mixIn(C.prototype),Object.defineProperties(C.prototype,{url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}}),Object.defineProperty(C.prototype,Symbol.toStringTag,{value:"Response",writable:!1,enumerable:!1,configurable:!0});const $=Symbol("Request internals"),R=i.parse,U=i.format,z="destroy"in n.Readable.prototype;function N(e){return"object"==typeof e&&"object"==typeof e[$]}class I{constructor(e){let t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};N(e)?t=R(e.url):(t=e&&e.href?R(e.href):R(`${e}`),e={});let n=r.method||e.method||"GET";if(n=n.toUpperCase(),(null!=r.body||N(e)&&null!==e.body)&&("GET"===n||"HEAD"===n))throw new TypeError("Request with GET/HEAD method cannot have body");let o=null!=r.body?r.body:N(e)&&null!==e.body?g(e):null;y.call(this,o,{timeout:r.timeout||e.timeout||0,size:r.size||e.size||0});const i=new E(r.headers||e.headers||{});if(null!=r.body){const e=function(e){const t=e.body;return null===t?null:"string"==typeof t?"text/plain;charset=UTF-8":m(t)?"application/x-www-form-urlencoded;charset=UTF-8":t instanceof l?t.type||null:Buffer.isBuffer(t)?null:"[object ArrayBuffer]"===Object.prototype.toString.call(t)?null:ArrayBuffer.isView(t)?null:"function"==typeof t.getBoundary?`multipart/form-data;boundary=${t.getBoundary()}`:null}(this);null===e||i.has("Content-Type")||i.append("Content-Type",e)}let s=N(e)?e.signal:null;if("signal"in r&&(s=r.signal),null!=s&&!function(e){const t=e&&"object"==typeof e&&Object.getPrototypeOf(e);return!(!t||"AbortSignal"!==t.constructor.name)}(s))throw new TypeError("Expected signal to be an instanceof AbortSignal");this[$]={method:n,redirect:r.redirect||e.redirect||"follow",headers:i,parsedURL:t,signal:s},this.follow=void 0!==r.follow?r.follow:void 0!==e.follow?e.follow:20,this.compress=void 0!==r.compress?r.compress:void 0===e.compress||e.compress,this.counter=r.counter||e.counter||0,this.agent=r.agent||e.agent}get method(){return this[$].method}get url(){return U(this[$].parsedURL)}get headers(){return this[$].headers}get redirect(){return this[$].redirect}get signal(){return this[$].signal}clone(){return new I(this)}}function M(e){const t=e[$].parsedURL,r=new E(e[$].headers);if(r.has("Accept")||r.set("Accept","*/*"),!t.protocol||!t.hostname)throw new TypeError("Only absolute URLs are supported");if(!/^https?:$/.test(t.protocol))throw new TypeError("Only HTTP(S) protocols are supported");if(e.signal&&e.body instanceof n.Readable&&!z)throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");let o=null;if(null==e.body&&/^(POST|PUT)$/i.test(e.method)&&(o="0"),null!=e.body){const t=v(e);"number"==typeof t&&(o=String(t))}return o&&r.set("Content-Length",o),r.has("User-Agent")||r.set("User-Agent","node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"),e.compress&&!r.has("Accept-Encoding")&&r.set("Accept-Encoding","gzip,deflate"),r.has("Connection")||e.agent||r.set("Connection","close"),Object.assign({},t,{method:e.method,headers:function(e){const t=Object.assign({__proto__:null},e[S]),r=T(e[S],"Host");return void 0!==r&&(t[r]=t[r][0]),t}(r),agent:e.agent})}function q(e){Error.call(this,e),this.type="aborted",this.message=e,Error.captureStackTrace(this,this.constructor)}y.mixIn(I.prototype),Object.defineProperty(I.prototype,Symbol.toStringTag,{value:"Request",writable:!1,enumerable:!1,configurable:!0}),Object.defineProperties(I.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0}}),q.prototype=Object.create(Error.prototype),q.prototype.constructor=q,q.prototype.name="AbortError";const F=n.PassThrough,H=i.resolve;function D(e,t){if(!D.Promise)throw new Error("native promise missing, set fetch.Promise to your favorite alternative");return y.Promise=D.Promise,new D.Promise(function(r,i){const c=new I(e,t),h=M(c),d=("https:"===h.protocol?s:o).request,p=c.signal;let y=null;const b=function(){let e=new q("The user aborted a request.");i(e),c.body&&c.body instanceof n.Readable&&c.body.destroy(e),y&&y.body&&y.body.emit("error",e)};if(p&&p.aborted)return void b();const g=function(){b(),T()},j=d(h);let O;function T(){j.abort(),p&&p.removeEventListener("abort",g),clearTimeout(O)}p&&p.addEventListener("abort",g),c.timeout&&j.once("socket",function(e){O=setTimeout(function(){i(new f(`network timeout at: ${c.url}`,"request-timeout")),T()},c.timeout)}),j.on("error",function(e){i(new f(`request to ${c.url} failed, reason: ${e.message}`,"system",e)),T()}),j.on("response",function(e){clearTimeout(O);const t=function(e){const t=new E;for(const r of Object.keys(e))if(!w.test(r))if(Array.isArray(e[r]))for(const n of e[r])x.test(n)||(void 0===t[S][r]?t[S][r]=[n]:t[S][r].push(n));else x.test(e[r])||(t[S][r]=[e[r]]);return t}(e.headers);if(D.isRedirect(e.statusCode)){const n=t.get("Location"),o=null===n?null:H(c.url,n);switch(c.redirect){case"error":return i(new f(`redirect mode is set to error: ${c.url}`,"no-redirect")),void T();case"manual":if(null!==o)try{t.set("Location",o)}catch(e){i(e)}break;case"follow":if(null===o)break;if(c.counter>=c.follow)return i(new f(`maximum redirect reached at: ${c.url}`,"max-redirect")),void T();const n={headers:new E(c.headers),follow:c.follow,counter:c.counter+1,agent:c.agent,compress:c.compress,method:c.method,body:c.body,signal:c.signal};return 303!==e.statusCode&&c.body&&null===v(c)?(i(new f("Cannot follow redirect with body being a readable stream","unsupported-redirect")),void T()):(303!==e.statusCode&&(301!==e.statusCode&&302!==e.statusCode||"POST"!==c.method)||(n.method="GET",n.body=void 0,n.headers.delete("content-length")),r(D(new I(o,n))),void T())}}e.once("end",function(){p&&p.removeEventListener("abort",g)});let n=e.pipe(new F);const o={url:c.url,status:e.statusCode,statusText:e.statusMessage,headers:t,size:c.size,timeout:c.timeout},s=t.get("Content-Encoding");if(!c.compress||"HEAD"===c.method||null===s||204===e.statusCode||304===e.statusCode)return y=new C(n,o),void r(y);const u={flush:a.Z_SYNC_FLUSH,finishFlush:a.Z_SYNC_FLUSH};if("gzip"==s||"x-gzip"==s)return n=n.pipe(a.createGunzip(u)),y=new C(n,o),void r(y);if("deflate"!=s&&"x-deflate"!=s)y=new C(n,o),r(y);else{e.pipe(new F).once("data",function(e){n=8==(15&e[0])?n.pipe(a.createInflate()):n.pipe(a.createInflateRaw()),y=new C(n,o),r(y)})}}),function(e,t){const r=t.body;null===r?e.end():"string"==typeof r?(e.write(r),e.end()):m(r)?(e.write(Buffer.from(String(r))),e.end()):r instanceof l?(e.write(r[u]),e.end()):Buffer.isBuffer(r)?(e.write(r),e.end()):"[object ArrayBuffer]"===Object.prototype.toString.call(r)?(e.write(Buffer.from(r)),e.end()):ArrayBuffer.isView(r)?(e.write(Buffer.from(r.buffer,r.byteOffset,r.byteLength)),e.end()):r.pipe(e)}(j,c)})}D.isRedirect=function(e){return 301===e||302===e||303===e||307===e||308===e},D.Promise=global.Promise,t.default=D}]));