var app=function(){"use strict";function t(){}function e(t){return t()}function r(){return Object.create(null)}function n(t){t.forEach(e)}function o(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e){t.appendChild(e)}function a(t,e,r){t.insertBefore(e,r||null)}function c(t){t.parentNode.removeChild(t)}function u(t,e){for(let r=0;r<t.length;r+=1)t[r]&&t[r].d(e)}function l(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function h(){return d("")}function p(t,e,r,n){return t.addEventListener(e,r,n),()=>t.removeEventListener(e,r,n)}function y(t,e,r){null==r?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function m(t,e){(null!=e||t.value)&&(t.value=e)}let b;function g(t){b=t}"serviceWorker"in navigator&&navigator.serviceWorker.register("service-worker.js").then((function(t){console.log("Service worker registered.")})).catch((function(t){console.log("Service worker not registered. This happened:",t)})),window.addEventListener("beforeinstallprompt",t=>{showInstallPromotion()}),window.addEventListener("DOMContentLoaded",()=>{const t=new URL(window.location).searchParams.get("text");if(!t)return;const e=new CustomEvent("share",{detail:t});window.dispatchEvent(e)});const w=[],v=[],_=[],$=[],A=Promise.resolve();let E=!1;function x(t){_.push(t)}function T(){const t=new Set;do{for(;w.length;){const t=w.shift();g(t),B(t.$$)}for(;v.length;)v.pop()();for(let e=0;e<_.length;e+=1){const r=_[e];t.has(r)||(r(),t.add(r))}_.length=0}while(w.length);for(;$.length;)$.pop()();E=!1}function B(t){if(null!==t.fragment){t.update(),n(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(x)}}const P=new Set;function O(t,e){t&&t.i&&(P.delete(t),t.i(e))}function U(t,e,r,n){if(t&&t.o){if(P.has(t))return;P.add(t),(void 0).c.push(()=>{P.delete(t),n&&(r&&t.d(1),n())}),t.o(e)}}function S(t){t&&t.c()}function j(t,r,s){const{fragment:i,on_mount:a,on_destroy:c,after_update:u}=t.$$;i&&i.m(r,s),x(()=>{const r=a.map(e).filter(o);c?c.push(...r):n(r),t.$$.on_mount=[]}),u.forEach(x)}function L(t,e){const r=t.$$;null!==r.fragment&&(n(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function k(t,e){-1===t.$$.dirty[0]&&(w.push(t),E||(E=!0,A.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(e,o,s,i,a,c,u=[-1]){const l=b;g(e);const d=o.props||{},f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:r(),dirty:u};let h=!1;f.ctx=s?s(e,d,(t,r,n=r)=>(f.ctx&&a(f.ctx[t],f.ctx[t]=n)&&(f.bound[t]&&f.bound[t](n),h&&k(e,t)),r)):[],f.update(),h=!0,n(f.before_update),f.fragment=!!i&&i(f.ctx),o.target&&(o.hydrate?f.fragment&&f.fragment.l(function(t){return Array.from(t.childNodes)}(o.target)):f.fragment&&f.fragment.c(),o.intro&&O(e.$$.fragment),j(e,o.target,o.anchor),T()),g(l)}class R{$destroy(){L(this,1),this.$destroy=t}$on(t,e){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),()=>{const t=r.indexOf(e);-1!==t&&r.splice(t,1)}}$set(){}}function D(e){let r,o,s,u,d,h,b,g,w,v,_;return{c(){var t,n,i,a;r=l("form"),o=l("div"),s=l("div"),u=l("input"),d=f(),h=l("p"),h.innerHTML='\n        Put url <span class="hero-detail"><em>https://www.instagram.com/p/B7JqW9uA1mP/ </em></span>or just the code <span class="hero-detail"><em>B7JqW9uA1mP</em></span>',b=f(),g=l("input"),w=f(),v=l("div"),y(u,"class","input-large svelte-1nyoq64"),y(u,"type","text"),y(u,"placeholder","url"),y(u,"id","url"),t="word-break",n="break-word",h.style.setProperty(t,n,i?"important":""),y(g,"class","button-primary button-large svelte-1nyoq64"),y(g,"type","submit"),g.value="Submit",y(s,"class","column"),y(v,"class","column"),y(o,"class","row"),_=[p(u,"input",e[2]),p(g,"click",(a=e[1],function(t){return t.preventDefault(),a.call(this,t)}))]},m(t,n){a(t,r,n),i(r,o),i(o,s),i(s,u),m(u,e[0]),i(s,d),i(s,h),i(s,b),i(s,g),i(o,w),i(o,v)},p(t,[e]){1&e&&u.value!==t[0]&&m(u,t[0])},i:t,o:t,d(t){t&&c(r),n(_)}}}function F(t,e,r){let{url:n=""}=e;return t.$set=t=>{"url"in t&&r(0,n=t.url)},[n,function(e){!function(t,e){const r=t.$$.callbacks[e.type];r&&r.slice().forEach(t=>t(e))}(t,e)},function(){n=this.value,r(0,n)}]}class q extends R{constructor(t){super(),I(this,t,F,D,s,{url:0})}}function C(t,e,r){const n=t.slice();return n[7]=e[r],n[9]=r,n}function H(t,e,r){const n=t.slice();return n[3]=e[r],n[6]=r,n}function M(t){let e,r,n,o;function s(t,e){return"GraphImage"==t[7].typename?G:N}let u=s(t),d=u(t);return{c(){e=l("div"),r=l("div"),d.c(),y(r,"popover-bottom","Download"),y(r,"class","media svelte-10s3nip"),y(r,"data-source",n=t[7].src),y(e,"class","column"),o=p(r,"click",t[2])},m(t,n){a(t,e,n),i(e,r),d.m(r,null)},p(t,e){u===(u=s(t))&&d?d.p(t,e):(d.d(1),d=u(t),d&&(d.c(),d.m(r,null))),1&e&&n!==(n=t[7].src)&&y(r,"data-source",n)},d(t){t&&c(e),d.d(),o()}}}function N(t){let e,r,n;return{c(){e=l("video"),r=l("source"),r.src!==(n=t[7].src)&&y(r,"src",n),y(r,"type","video/mp4"),y(e,"class","media-video svelte-10s3nip"),e.controls=!0},m(n,o){a(n,e,o),i(e,r),t[4](e)},p(t,e){1&e&&r.src!==(n=t[7].src)&&y(r,"src",n)},d(r){r&&c(e),t[4](null)}}}function G(t){let e,r;return{c(){e=l("img"),e.src!==(r=t[7].src)&&y(e,"src",r),y(e,"alt","media")},m(t,r){a(t,e,r)},p(t,n){1&n&&e.src!==(r=t[7].src)&&y(e,"src",r)},d(t){t&&c(e)}}}function z(t){let e,r=t[7]&&t[7].src&&t[7].typename&&M(t);return{c(){r&&r.c(),e=h()},m(t,n){r&&r.m(t,n),a(t,e,n)},p(t,n){t[7]&&t[7].src&&t[7].typename?r?r.p(t,n):(r=M(t),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},d(t){r&&r.d(t),t&&c(e)}}}function W(t){let e,r,n=t[3],o=[];for(let e=0;e<n.length;e+=1)o[e]=z(C(t,n,e));return{c(){e=l("div");for(let t=0;t<o.length;t+=1)o[t].c();r=f(),y(e,"class","row")},m(t,n){a(t,e,n);for(let t=0;t<o.length;t+=1)o[t].m(e,null);i(e,r)},p(t,s){if(7&s){let i;for(n=t[3],i=0;i<n.length;i+=1){const a=C(t,n,i);o[i]?o[i].p(a,s):(o[i]=z(a),o[i].c(),o[i].m(e,r))}for(;i<o.length;i+=1)o[i].d(1);o.length=n.length}},d(t){t&&c(e),u(o,t)}}}function J(e){let r,n=e[0],o=[];for(let t=0;t<n.length;t+=1)o[t]=W(H(e,n,t));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();r=h()},m(t,e){for(let r=0;r<o.length;r+=1)o[r].m(t,e);a(t,r,e)},p(t,[e]){if(7&e){let s;for(n=t[0],s=0;s<n.length;s+=1){const i=H(t,n,s);o[s]?o[s].p(i,e):(o[s]=W(i),o[s].c(),o[s].m(r.parentNode,r))}for(;s<o.length;s+=1)o[s].d(1);o.length=n.length}},i:t,o:t,d(t){u(o,t),t&&c(r)}}}function V(t,e,r){let n,{media:o=[]}=e;const s=(t,e)=>Array(Math.ceil(t.length/e)).fill().map((t,r)=>r*e).map(r=>t.slice(r,r+e));return t.$set=t=>{"media"in t&&r(0,o=t.media)},t.$$.update=()=>{1&t.$$.dirty&&r(0,o=s(o,3)),3&t.$$.dirty&&o&&n&&n.load()},[o,n,({target:t})=>{const e=t.getAttribute("data-source");e&&window.open(e)},s,function(t){v[t?"unshift":"push"](()=>{r(1,n=t)})}]}class X extends R{constructor(t){super(),I(this,t,V,J,s,{media:0})}}var K="URLSearchParams"in self,Y="Symbol"in self&&"iterator"in Symbol,Q="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),Z="FormData"in self,tt="ArrayBuffer"in self;if(tt)var et=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],rt=ArrayBuffer.isView||function(t){return t&&et.indexOf(Object.prototype.toString.call(t))>-1};function nt(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function ot(t){return"string"!=typeof t&&(t=String(t)),t}function st(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return Y&&(e[Symbol.iterator]=function(){return e}),e}function it(t){this.map={},t instanceof it?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function at(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function ct(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function ut(t){var e=new FileReader,r=ct(e);return e.readAsArrayBuffer(t),r}function lt(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function dt(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:Q&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:Z&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:K&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():tt&&Q&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=lt(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):tt&&(ArrayBuffer.prototype.isPrototypeOf(t)||rt(t))?this._bodyArrayBuffer=lt(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):K&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},Q&&(this.blob=function(){var t=at(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?at(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(ut)}),this.text=function(){var t,e,r,n=at(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=ct(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},Z&&(this.formData=function(){return this.text().then(pt)}),this.json=function(){return this.text().then(JSON.parse)},this}it.prototype.append=function(t,e){t=nt(t),e=ot(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},it.prototype.delete=function(t){delete this.map[nt(t)]},it.prototype.get=function(t){return t=nt(t),this.has(t)?this.map[t]:null},it.prototype.has=function(t){return this.map.hasOwnProperty(nt(t))},it.prototype.set=function(t,e){this.map[nt(t)]=ot(e)},it.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},it.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),st(t)},it.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),st(t)},it.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),st(t)},Y&&(it.prototype[Symbol.iterator]=it.prototype.entries);var ft=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function ht(t,e){var r,n,o=(e=e||{}).body;if(t instanceof ht){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new it(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new it(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),ft.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function pt(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}})),e}function yt(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new it(e.headers),this.url=e.url||"",this._initBody(t)}ht.prototype.clone=function(){return new ht(this,{body:this._bodyInit})},dt.call(ht.prototype),dt.call(yt.prototype),yt.prototype.clone=function(){return new yt(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new it(this.headers),url:this.url})},yt.error=function(){var t=new yt(null,{status:0,statusText:""});return t.type="error",t};var mt=[301,302,303,307,308];yt.redirect=function(t,e){if(-1===mt.indexOf(e))throw new RangeError("Invalid status code");return new yt(null,{status:e,headers:{location:t}})};var bt=self.DOMException;try{new bt}catch(t){(bt=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),bt.prototype.constructor=bt}function gt(t,e){return new Promise((function(r,n){var o=new ht(t,e);if(o.signal&&o.signal.aborted)return n(new bt("Aborted","AbortError"));var s=new XMLHttpRequest;function i(){s.abort()}s.onload=function(){var t,e,n={status:s.status,statusText:s.statusText,headers:(t=s.getAllResponseHeaders()||"",e=new it,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}})),e)};n.url="responseURL"in s?s.responseURL:n.headers.get("X-Request-URL");var o="response"in s?s.response:s.responseText;r(new yt(o,n))},s.onerror=function(){n(new TypeError("Network request failed"))},s.ontimeout=function(){n(new TypeError("Network request failed"))},s.onabort=function(){n(new bt("Aborted","AbortError"))},s.open(o.method,o.url,!0),"include"===o.credentials?s.withCredentials=!0:"omit"===o.credentials&&(s.withCredentials=!1),"responseType"in s&&Q&&(s.responseType="blob"),o.headers.forEach((function(t,e){s.setRequestHeader(e,t)})),o.signal&&(o.signal.addEventListener("abort",i),s.onreadystatechange=function(){4===s.readyState&&o.signal.removeEventListener("abort",i)}),s.send(void 0===o._bodyInit?null:o._bodyInit)}))}gt.polyfill=!0,self.fetch||(self.fetch=gt,self.Headers=it,self.Request=ht,self.Response=yt);var wt=self.fetch.bind(self);function vt(t){let e;return{c(){e=l("blockquote"),e.innerHTML="<p><em>Media not found.</em></p>",y(e,"class","alert danger svelte-1z0d4p9")},m(t,r){a(t,e,r)},d(t){t&&c(e)}}}function _t(t){let e,r,n,o,s,u,d,h,p,m,b=!t[2]&&vt();function g(e){t[6].call(null,e)}let w={};void 0!==t[0]&&(w.url=t[0]);const _=new q({props:w});v.push(()=>function(t,e,r){const n=t.$$.props[e];void 0!==n&&(t.$$.bound[n]=r,r(t.$$.ctx[n]))}(_,"url",g)),_.$on("click",t[3]);const A=new X({props:{media:t[1]}});return{c(){e=l("div"),r=l("header"),r.innerHTML="<h1>Yet! Another instagram downloader.</h1>",n=f(),o=l("main"),b&&b.c(),s=f(),S(_.$$.fragment),d=f(),S(A.$$.fragment),h=f(),p=l("footer"),p.innerHTML='\n    Made with ❤ by Husnul Anwari <br> \n    <a href="https://github.com/husnulhamidiah/instagram-downloader">Github</a>',y(r,"class","header svelte-1z0d4p9"),y(p,"class","footer svelte-1z0d4p9"),y(e,"class","container")},m(t,c){a(t,e,c),i(e,r),i(e,n),i(e,o),b&&b.m(o,null),i(o,s),j(_,o,null),i(o,d),j(A,o,null),i(e,h),i(e,p),m=!0},p(t,[e]){t[2]?b&&(b.d(1),b=null):b||(b=vt(),b.c(),b.m(o,s));const r={};var n;!u&&1&e&&(u=!0,r.url=t[0],n=()=>u=!1,$.push(n)),_.$set(r);const i={};2&e&&(i.media=t[1]),A.$set(i)},i(t){m||(O(_.$$.fragment,t),O(A.$$.fragment,t),m=!0)},o(t){U(_.$$.fragment,t),U(A.$$.fragment,t),m=!1},d(t){t&&c(e),b&&b.d(),L(_),L(A)}}}function $t(t,e,r){let n,o,s=!0;const i=async()=>{try{const t=a(n),{graphql:{shortcode_media:e}}=await(t=>wt(`https://www.instagram.com/p/${t}/?__a=1`).then(t=>t.json()))(t),i=await c(e);r(1,o=Array.isArray(i)?i:[i]),r(0,n=""),r(2,s=!0)}catch(t){r(1,o=[]),r(0,n=""),r(2,s=!1)}},a=t=>{const e=t.match(/p\/([_a-z0-9]+)/gi);return e?e.shift().substring(2):t},c=async t=>{switch(t.__typename){case"GraphImage":return{typename:t.__typename,src:t.display_resources.pop().src};case"GraphVideo":return{typename:t.__typename,src:t.video_url};case"GraphSidecar":const e=t.edge_sidecar_to_children.edges.map(t=>c(t.node));return await Promise.all(e);default:return{typename:t.__typename,src:t.display_url}}};return window.addEventListener("share",t=>{r(0,n=t.detail),i()},!1),[n,o,s,i,a,c,function(t){n=t,r(0,n)}]}return new class extends R{constructor(t){super(),I(this,t,$t,_t,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map