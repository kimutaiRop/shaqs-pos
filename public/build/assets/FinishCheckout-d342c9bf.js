import{r as Te,b as Se,c as Ae,R as re,j as Q,F as Ce,a as j}from"./app-77b91c57.js";import Pe from"./Dialog-76cd114e.js";import ke from"./MpesaUnused-3a3cd266.js";import Re from"./Receipt-8d2e58eb.js";import"./helper-76ebf62d.js";var xe={exports:{}};(function(ue,_e){(function(fe,ne){ue.exports=ne(Te.exports,Se.exports)})(typeof self<"u"?self:Ae,function(fe,ne){return function(){var de={156:function(y){y.exports=fe},111:function(y){y.exports=ne},582:function(y,g,h){h.r(g),h.d(g,{__addDisposableResource:function(){return ce},__assign:function(){return K},__asyncDelegator:function(){return ae},__asyncGenerator:function(){return ge},__asyncValues:function(){return ie},__await:function(){return L},__awaiter:function(){return w},__classPrivateFieldGet:function(){return se},__classPrivateFieldIn:function(){return P},__classPrivateFieldSet:function(){return le},__createBinding:function(){return _},__decorate:function(){return $},__disposeResources:function(){return ye},__esDecorate:function(){return I},__exportStar:function(){return R},__extends:function(){return X},__generator:function(){return T},__importDefault:function(){return U},__importStar:function(){return B},__makeTemplateObject:function(){return ve},__metadata:function(){return u},__param:function(){return Z},__propKey:function(){return a},__read:function(){return q},__rest:function(){return z},__runInitializers:function(){return m},__setFunctionName:function(){return c},__spread:function(){return v},__spreadArray:function(){return H},__spreadArrays:function(){return F},__values:function(){return S}});var J=function(t,e){return J=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,r){o.__proto__=r}||function(o,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(o[n]=r[n])},J(t,e)};function X(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}J(t,e),t.prototype=e===null?Object.create(e):(o.prototype=e.prototype,new o)}var K=function(){return K=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var n in e=arguments[o])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},K.apply(this,arguments)};function z(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function"){var n=0;for(r=Object.getOwnPropertySymbols(t);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(o[r[n]]=t[r[n]])}return o}function $(t,e,o,r){var n,l=arguments.length,i=l<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,o):r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var f=t.length-1;f>=0;f--)(n=t[f])&&(i=(l<3?n(i):l>3?n(e,o,i):n(e,o))||i);return l>3&&i&&Object.defineProperty(e,o,i),i}function Z(t,e){return function(o,r){e(o,r,t)}}function I(t,e,o,r,n,l){function i(ee){if(ee!==void 0&&typeof ee!="function")throw new TypeError("Function expected");return ee}for(var f,O=r.kind,x=O==="getter"?"get":O==="setter"?"set":"value",s=!e&&t?r.static?t:t.prototype:null,p=e||(s?Object.getOwnPropertyDescriptor(s,r.name):{}),C=!1,M=o.length-1;M>=0;M--){var G={};for(var V in r)G[V]=V==="access"?{}:r[V];for(var V in r.access)G.access[V]=r.access[V];G.addInitializer=function(ee){if(C)throw new TypeError("Cannot add initializers after decoration has completed");l.push(i(ee||null))};var Y=(0,o[M])(O==="accessor"?{get:p.get,set:p.set}:p[x],G);if(O==="accessor"){if(Y===void 0)continue;if(Y===null||typeof Y!="object")throw new TypeError("Object expected");(f=i(Y.get))&&(p.get=f),(f=i(Y.set))&&(p.set=f),(f=i(Y.init))&&n.unshift(f)}else(f=i(Y))&&(O==="field"?n.unshift(f):p[x]=f)}s&&Object.defineProperty(s,r.name,p),C=!0}function m(t,e,o){for(var r=arguments.length>2,n=0;n<e.length;n++)o=r?e[n].call(t,o):e[n].call(t);return r?o:void 0}function a(t){return typeof t=="symbol"?t:"".concat(t)}function c(t,e,o){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:o?"".concat(o," ",e):e})}function u(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)}function w(t,e,o,r){return new(o||(o=Promise))(function(n,l){function i(x){try{O(r.next(x))}catch(s){l(s)}}function f(x){try{O(r.throw(x))}catch(s){l(s)}}function O(x){var s;x.done?n(x.value):(s=x.value,s instanceof o?s:new o(function(p){p(s)})).then(i,f)}O((r=r.apply(t,e||[])).next())})}function T(t,e){var o,r,n,l,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return l={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function f(O){return function(x){return function(s){if(o)throw new TypeError("Generator is already executing.");for(;l&&(l=0,s[0]&&(i=0)),i;)try{if(o=1,r&&(n=2&s[0]?r.return:s[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,s[1])).done)return n;switch(r=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!((n=(n=i.trys).length>0&&n[n.length-1])||s[0]!==6&&s[0]!==2)){i=0;continue}if(s[0]===3&&(!n||s[1]>n[0]&&s[1]<n[3])){i.label=s[1];break}if(s[0]===6&&i.label<n[1]){i.label=n[1],n=s;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(s);break}n[2]&&i.ops.pop(),i.trys.pop();continue}s=e.call(t,i)}catch(p){s=[6,p],r=0}finally{o=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([O,x])}}}var _=Object.create?function(t,e,o,r){r===void 0&&(r=o);var n=Object.getOwnPropertyDescriptor(e,o);n&&!("get"in n?!e.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return e[o]}}),Object.defineProperty(t,r,n)}:function(t,e,o,r){r===void 0&&(r=o),t[r]=e[o]};function R(t,e){for(var o in t)o==="default"||Object.prototype.hasOwnProperty.call(e,o)||_(e,t,o)}function S(t){var e=typeof Symbol=="function"&&Symbol.iterator,o=e&&t[e],r=0;if(o)return o.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function q(t,e){var o=typeof Symbol=="function"&&t[Symbol.iterator];if(!o)return t;var r,n,l=o.call(t),i=[];try{for(;(e===void 0||e-- >0)&&!(r=l.next()).done;)i.push(r.value)}catch(f){n={error:f}}finally{try{r&&!r.done&&(o=l.return)&&o.call(l)}finally{if(n)throw n.error}}return i}function v(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(q(arguments[e]));return t}function F(){for(var t=0,e=0,o=arguments.length;e<o;e++)t+=arguments[e].length;var r=Array(t),n=0;for(e=0;e<o;e++)for(var l=arguments[e],i=0,f=l.length;i<f;i++,n++)r[n]=l[i];return r}function H(t,e,o){if(o||arguments.length===2)for(var r,n=0,l=e.length;n<l;n++)!r&&n in e||(r||(r=Array.prototype.slice.call(e,0,n)),r[n]=e[n]);return t.concat(r||Array.prototype.slice.call(e))}function L(t){return this instanceof L?(this.v=t,this):new L(t)}function ge(t,e,o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,n=o.apply(t,e||[]),l=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(p){n[p]&&(r[p]=function(C){return new Promise(function(M,G){l.push([p,C,M,G])>1||f(p,C)})})}function f(p,C){try{(M=n[p](C)).value instanceof L?Promise.resolve(M.value.v).then(O,x):s(l[0][2],M)}catch(G){s(l[0][3],G)}var M}function O(p){f("next",p)}function x(p){f("throw",p)}function s(p,C){p(C),l.shift(),l.length&&f(l[0][0],l[0][1])}}function ae(t){var e,o;return e={},r("next"),r("throw",function(n){throw n}),r("return"),e[Symbol.iterator]=function(){return this},e;function r(n,l){e[n]=t[n]?function(i){return(o=!o)?{value:L(t[n](i)),done:!1}:l?l(i):i}:l}}function ie(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,o=t[Symbol.asyncIterator];return o?o.call(t):(t=S(t),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(n){e[n]=t[n]&&function(l){return new Promise(function(i,f){(function(O,x,s,p){Promise.resolve(p).then(function(C){O({value:C,done:s})},x)})(i,f,(l=t[n](l)).done,l.value)})}}}function ve(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}var E=Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e};function B(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var o in t)o!=="default"&&Object.prototype.hasOwnProperty.call(t,o)&&_(e,t,o);return E(e,t),e}function U(t){return t&&t.__esModule?t:{default:t}}function se(t,e,o,r){if(o==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return o==="m"?r:o==="a"?r.call(t):r?r.value:e.get(t)}function le(t,e,o,r,n){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!n)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!n:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?n.call(t,o):n?n.value=o:e.set(t,o),o}function P(t,e){if(e===null||typeof e!="object"&&typeof e!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof t=="function"?e===t:t.has(e)}function ce(t,e,o){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var r;if(o){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=e[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=e[Symbol.dispose]}if(typeof r!="function")throw new TypeError("Object not disposable.");t.stack.push({value:e,dispose:r,async:o})}else o&&t.stack.push({async:!0});return e}var he=typeof SuppressedError=="function"?SuppressedError:function(t,e,o){var r=new Error(o);return r.name="SuppressedError",r.error=t,r.suppressed=e,r};function ye(t){function e(o){t.error=t.hasError?new he(o,t.error,"An error was suppressed during disposal."):o,t.hasError=!0}return function o(){for(;t.stack.length;){var r=t.stack.pop();try{var n=r.dispose&&r.dispose.call(r.value);if(r.async)return Promise.resolve(n).then(o,function(l){return e(l),o()})}catch(l){e(l)}}if(t.hasError)throw t.error}()}g.default={__extends:X,__assign:K,__rest:z,__decorate:$,__param:Z,__metadata:u,__awaiter:w,__generator:T,__createBinding:_,__exportStar:R,__values:S,__read:q,__spread:v,__spreadArrays:F,__spreadArray:H,__await:L,__asyncGenerator:ge,__asyncDelegator:ae,__asyncValues:ie,__makeTemplateObject:ve,__importStar:B,__importDefault:U,__classPrivateFieldGet:se,__classPrivateFieldSet:le,__classPrivateFieldIn:P,__addDisposableResource:ce,__disposeResources:ye}}},oe={};function A(y){var g=oe[y];if(g!==void 0)return g.exports;var h=oe[y]={exports:{}};return de[y](h,h.exports,A),h.exports}A.d=function(y,g){for(var h in g)A.o(g,h)&&!A.o(y,h)&&Object.defineProperty(y,h,{enumerable:!0,get:g[h]})},A.o=function(y,g){return Object.prototype.hasOwnProperty.call(y,g)},A.r=function(y){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(y,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(y,"__esModule",{value:!0})};var pe={};return function(){var y=pe;Object.defineProperty(y,"__esModule",{value:!0}),y.useReactToPrint=y.PrintContextConsumer=void 0;var g=A(582),h=A(156),J=A(111),X=Object.prototype.hasOwnProperty.call(h,"createContext"),K=Object.prototype.hasOwnProperty.call(h,"useMemo")&&Object.prototype.hasOwnProperty.call(h,"useCallback"),z=X?h.createContext({}):null;y.PrintContextConsumer=z?z.Consumer:function(){return null};var $={copyStyles:!0,pageStyle:`
        @page {
            /* Remove browser default header (title) and footer (url) */
            margin: 0;
        }
        @media print {
            body {
                /* Tell browsers to print background colors */
                -webkit-print-color-adjust: exact; /* Chrome/Safari/Edge/Opera */
                color-adjust: exact; /* Firefox */
            }
        }
    `,removeAfterPrint:!1,suppressErrors:!1},Z=function(I){function m(){var a=I!==null&&I.apply(this,arguments)||this;return a.startPrint=function(c){var u=a.props,w=u.onAfterPrint,T=u.onPrintError,_=u.print,R=u.documentTitle;setTimeout(function(){var S,q;if(c.contentWindow)if(c.contentWindow.focus(),_)_(c).then(function(){return w==null?void 0:w()}).then(function(){return a.handleRemoveIframe()}).catch(function(H){T?T("print",H):a.logMessages(["An error was thrown by the specified `print` function"])});else{if(c.contentWindow.print){var v=(q=(S=c.contentDocument)===null||S===void 0?void 0:S.title)!==null&&q!==void 0?q:"",F=c.ownerDocument.title;R&&(c.ownerDocument.title=R,c.contentDocument&&(c.contentDocument.title=R)),c.contentWindow.print(),R&&(c.ownerDocument.title=F,c.contentDocument&&(c.contentDocument.title=v))}else a.logMessages(["Printing for this browser is not currently possible: the browser does not have a `print` method available for iframes."]);w==null||w(),a.handleRemoveIframe()}else a.logMessages(["Printing failed because the `contentWindow` of the print iframe did not load. This is possibly an error with `react-to-print`. Please file an issue: https://github.com/gregnb/react-to-print/issues/"])},500)},a.triggerPrint=function(c){var u=a.props,w=u.onBeforePrint,T=u.onPrintError;if(w){var _=w();_&&typeof _.then=="function"?_.then(function(){a.startPrint(c)}).catch(function(R){T&&T("onBeforePrint",R)}):a.startPrint(c)}else a.startPrint(c)},a.handleClick=function(){var c=a.props,u=c.onBeforeGetContent,w=c.onPrintError;if(u){var T=u();T&&typeof T.then=="function"?T.then(a.handlePrint).catch(function(_){w&&w("onBeforeGetContent",_)}):a.handlePrint()}else a.handlePrint()},a.handlePrint=function(){var c=a.props,u=c.bodyClass,w=c.content,T=c.copyStyles,_=c.fonts,R=c.pageStyle,S=c.nonce,q=w();if(q!==void 0)if(q!==null){var v=document.createElement("iframe");v.width="".concat(document.documentElement.clientWidth,"px"),v.height="".concat(document.documentElement.clientHeight,"px"),v.style.position="absolute",v.style.top="-".concat(document.documentElement.clientHeight+100,"px"),v.style.left="-".concat(document.documentElement.clientWidth+100,"px"),v.id="printWindow",v.srcdoc="<!DOCTYPE html>";var F=(0,J.findDOMNode)(q);if(F){var H=F.cloneNode(!0),L=H instanceof Text,ge=document.querySelectorAll("link[rel~='stylesheet'], link[as='style']"),ae=L?[]:H.querySelectorAll("img"),ie=L?[]:H.querySelectorAll("video"),ve=_?_.length:0;a.numResourcesToLoad=ge.length+ae.length+ie.length+ve,a.resourcesLoaded=[],a.resourcesErrored=[];var E=function(B,U){a.resourcesLoaded.includes(B)?a.logMessages(["Tried to mark a resource that has already been handled",B],"debug"):(U?(a.logMessages(g.__spreadArray(['"react-to-print" was unable to load a resource but will continue attempting to print the page'],g.__read(U),!1)),a.resourcesErrored.push(B)):a.resourcesLoaded.push(B),a.resourcesLoaded.length+a.resourcesErrored.length===a.numResourcesToLoad&&a.triggerPrint(v))};v.onload=function(){var B,U,se,le;v.onload=null;var P=v.contentDocument||((U=v.contentWindow)===null||U===void 0?void 0:U.document);if(P){P.body.appendChild(H),_&&(!((se=v.contentDocument)===null||se===void 0)&&se.fonts&&(!((le=v.contentWindow)===null||le===void 0)&&le.FontFace)?_.forEach(function(D){var d=new FontFace(D.family,D.source,{weight:D.weight,style:D.style});v.contentDocument.fonts.add(d),d.loaded.then(function(){E(d)}).catch(function(b){E(d,["Failed loading the font:",d,"Load error:",b])})}):(_.forEach(function(D){return E(D)}),a.logMessages(['"react-to-print" is not able to load custom fonts because the browser does not support the FontFace API but will continue attempting to print the page'])));var ce=typeof R=="function"?R():R;if(typeof ce!="string")a.logMessages(['"react-to-print" expected a "string" from `pageStyle` but received "'.concat(typeof ce,'". Styles from `pageStyle` will not be applied.')]);else{var he=P.createElement("style");S&&(he.setAttribute("nonce",S),P.head.setAttribute("nonce",S)),he.appendChild(P.createTextNode(ce)),P.head.appendChild(he)}if(u&&(B=P.body.classList).add.apply(B,g.__spreadArray([],g.__read(u.split(" ")),!1)),!L){for(var ye=L?[]:F.querySelectorAll("canvas"),t=P.querySelectorAll("canvas"),e=0;e<ye.length;++e){var o=ye[e],r=t[e].getContext("2d");r&&r.drawImage(o,0,0)}var n=function(D){var d=ae[D],b=d.getAttribute("src");if(b){var N=new Image;N.onload=function(){return E(d)},N.onerror=function(te,me,be,W,k){return E(d,["Error loading <img>",d,"Error",k])},N.src=b}else E(d,['Found an <img> tag with an empty "src" attribute. This prevents pre-loading it. The <img> is:',d])};for(e=0;e<ae.length;e++)n(e);var l=function(D){var d=ie[D];d.preload="auto";var b=d.getAttribute("poster");if(b){var N=new Image;N.onload=function(){return E(d)},N.onerror=function(te,me,be,W,k){return E(d,["Error loading video poster",b,"for video",d,"Error:",k])},N.src=b}else d.readyState>=2?E(d):(d.onloadeddata=function(){return E(d)},d.onerror=function(te,me,be,W,k){return E(d,["Error loading video",d,"Error",k])},d.onstalled=function(){return E(d,["Loading video stalled, skipping",d])})};for(e=0;e<ie.length;e++)l(e);var i="input",f=F.querySelectorAll(i),O=P.querySelectorAll(i);for(e=0;e<f.length;e++)O[e].value=f[e].value;var x="input[type=checkbox],input[type=radio]",s=F.querySelectorAll(x),p=P.querySelectorAll(x);for(e=0;e<s.length;e++)p[e].checked=s[e].checked;var C="select",M=F.querySelectorAll(C),G=P.querySelectorAll(C);for(e=0;e<M.length;e++)G[e].value=M[e].value}if(T)for(var V=document.querySelectorAll("style, link[rel~='stylesheet'], link[as='style']"),Y=function(D,d){var b=V[D];if(b.tagName.toLowerCase()==="style"){var N=P.createElement(b.tagName),te=b.sheet;if(te){var me="";try{for(var be=te.cssRules.length,W=0;W<be;++W)typeof te.cssRules[W].cssText=="string"&&(me+="".concat(te.cssRules[W].cssText,`\r
`))}catch{a.logMessages(["A stylesheet could not be accessed. This is likely due to the stylesheet having cross-origin imports, and many browsers block script access to cross-origin stylesheets. See https://github.com/gregnb/react-to-print/issues/429 for details. You may be able to load the sheet by both marking the stylesheet with the cross `crossorigin` attribute, and setting the `Access-Control-Allow-Origin` header on the server serving the stylesheet. Alternatively, host the stylesheet on your domain to avoid this issue entirely.",b],"warning")}N.setAttribute("id","react-to-print-".concat(D)),S&&N.setAttribute("nonce",S),N.appendChild(P.createTextNode(me)),P.head.appendChild(N)}}else if(b.getAttribute("href"))if(b.hasAttribute("disabled"))a.logMessages(["`react-to-print` encountered a <link> tag with a `disabled` attribute and will ignore it. Note that the `disabled` attribute is deprecated, and some browsers ignore it. You should stop using it. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-disabled. The <link> is:",b],"warning"),E(b);else{for(var k=P.createElement(b.tagName),Ee=(W=0,b.attributes.length);W<Ee;++W){var we=b.attributes[W];we&&k.setAttribute(we.nodeName,we.nodeValue||"")}k.onload=function(){return E(k)},k.onerror=function(Oe,De,Me,Ne,je){return E(k,["Failed to load",k,"Error:",je])},S&&k.setAttribute("nonce",S),P.head.appendChild(k)}else a.logMessages(["`react-to-print` encountered a <link> tag with an empty `href` attribute. In addition to being invalid HTML, this can cause problems in many browsers, and so the <link> was not loaded. The <link> is:",b],"warning"),E(b)},ee=(e=0,V.length);e<ee;++e)Y(e)}a.numResourcesToLoad!==0&&T||a.triggerPrint(v)},a.handleRemoveIframe(!0),document.body.appendChild(v)}else a.logMessages(['"react-to-print" could not locate the DOM node corresponding with the `content` prop'])}else a.logMessages(['There is nothing to print because the "content" prop returned "null". Please ensure "content" is renderable before allowing "react-to-print" to be called.']);else a.logMessages(["To print a functional component ensure it is wrapped with `React.forwardRef`, and ensure the forwarded ref is used. See the README for an example: https://github.com/gregnb/react-to-print#examples"])},a.handleRemoveIframe=function(c){var u=a.props.removeAfterPrint;if(c||u){var w=document.getElementById("printWindow");w&&document.body.removeChild(w)}},a.logMessages=function(c,u){u===void 0&&(u="error"),a.props.suppressErrors||(u==="error"?console.error(c):u==="warning"?console.warn(c):u==="debug"&&console.debug(c))},a}return g.__extends(m,I),m.prototype.render=function(){var a=this.props,c=a.children,u=a.trigger;if(u)return h.cloneElement(u(),{onClick:this.handleClick});if(!z)return this.logMessages(['"react-to-print" requires React ^16.3.0 to be able to use "PrintContext"']),null;var w={handlePrint:this.handleClick};return h.createElement(z.Provider,{value:w},c)},m.defaultProps=$,m}(h.Component);y.default=Z,y.useReactToPrint=function(I){if(!K)return I.suppressErrors||console.error('"react-to-print" requires React ^16.8.0 to be able to use "useReactToPrint"'),function(){throw new Error('"react-to-print" requires React ^16.8.0 to be able to use "useReactToPrint"')};var m=h.useMemo(function(){return new Z(g.__assign(g.__assign({},$),I))},[I]);return h.useCallback(function(){return m.handleClick()},[m])}}(),pe}()})})(xe);const Be=({cart:ue,clearCart:_e})=>{const[fe,ne]=re.useState(!1),[de,oe]=re.useState(!1),[A,pe]=re.useState(0),[y,g]=re.useState(""),[h,J]=re.useState(0),[X,K]=re.useState(null),z={cashier:"John Doe",orderNumber:1},$=re.useRef(null),Z=xe.exports.useReactToPrint({pageStyle:`@media print {
            @page {
              size: 80mm 100vh;
              margin: 0;
            }
          }`,content:()=>$.current}),I=()=>{if(!confirm("Are you sure you want to print this receipt?"))return;let a={method:A>0?"CASH":"MPESA",cashAmount:A,paymentId:h,menus:ue.map(u=>({quantity:u.quantity,id:u.id}))},c=new Headers;c.append("Content-Type","application/json"),c.append("Authorization",`Bearer ${localStorage.getItem("token")}`),fetch("/api/orders",{method:"POST",headers:c,body:JSON.stringify(a)}).then(async u=>{setTimeout(()=>{Z(),_e()},1e3)}).catch(u=>{console.log(u)})};return Q(Ce,{children:[Q("form",{className:"w-full flex justify-center items-center flex-col space-y-2",onSubmit:m=>{m.preventDefault(),ne(!fe)},children:[Q("select",{className:"border-2 border-black rounded py-2 px-5 w-full",name:"type",required:!0,onChange:m=>g(m.target.value),children:[j("option",{value:"",children:"Select Order Type"}),j("option",{value:"Sit In",children:"Sit In"}),j("option",{value:"takeaway",children:"Take Away"}),j("option",{value:"delivery",children:"Delivery"})]}),j("button",{className:"bg-accent  rounded-full p-2 w-full",children:"Checkout"})]}),fe&&j(Pe,{close:()=>ne(!1),children:j("div",{className:"w-full mx-auto max-w-screen-2xl bg-white h-full flex flex-col",children:Q("div",{className:"grid grid-cols-5 h-full",children:[Q("div",{className:"overflow-auto relative col-span-3 flex py-3 bg-secondary h-full border-r justify-center items-center w-full",children:[j(Re,{cart:ue,printRef:$,data:z,serveType:y,cashAmount:A,selectedPayament:X,paymentId:h})," ",(h?X.total:A)>=ue.reduce((m,a)=>m+a.price*a.quantity,0)&&j("button",{onClick:I,className:"absolute left-2 bottom-2 bg-accent px-5 shadow rounded py-1.5",children:"print"})]}),Q("div",{className:"col-span-2 h-full flex flex-col overflow-auto",children:[Q("div",{className:"p-2 flex justify-between items-center",children:[j("h2",{className:"h-4 capitalize font-bold text-xl",children:"Unused Payments"}),j("button",{onClick:()=>oe(!de),className:"bg-accent py-1 px-5 rounded shadow",children:"Receive Cash"}),de&&j(Pe,{close:()=>oe(!1),show:de,className:"justify-center items-center",children:j("div",{className:"w-full mx-auto max-w-sm  justify-center h-full flex flex-col ",children:Q("form",{onSubmit:m=>{m.preventDefault(),oe(!1)},className:"bg-white h-52 p-2 flex flex-col justify-center rounded-xl space-y-2",children:[j("label",{className:"font-bold",children:"Received Amount"}),j("input",{onChange:m=>{pe(m.target.value),J(null)},type:"number",className:"border-2 border-black w-full rounded py-2 px-5"}),j("button",{className:"bg-accent py-2 px-2 rounded shadoe",children:"Receive Cash"})]})})})]}),j(ke,{selectPayment:m=>{K(m),J(m==null?void 0:m.id),pe(0)},paymentId:h})]})]})})})]})};export{Be as default};