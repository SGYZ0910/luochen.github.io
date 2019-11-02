// gameapi.js

window.famobi_gameID = window.famobi_gameID || '';
window.famobi_gameJS = window.famobi_gameJS || [];



var detection = (function() {
	var mod = {is:{}},
		d,
		ua = navigator.userAgent;
	mod.detect = {
		html5: function() {
			return document.createElement('canvas').getContext !== undefined;
		},
		touch: function() {
			var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
			return !!supportsTouch;
		},
		android: function() {
			return !!ua.match(/Android/i);
		},
		ios: function() {
			return !!ua.match(/iPhone|iPad|iPod/i);
		},
		ios7: function(){
			return mod.detect.ios && ua.match(/version\/7\./i);
		},
		bb10: function() {
			return !!ua.match(/BB10/i);
		},
		windows: function() {
			return !!ua.match(/Windows/i);
		},
		webkitVersion: function() {
			var regex = new RegExp(/AppleWebKit\/([\d.]+)/),
				result = regex.exec(ua),
				webkitVersion = result === null ? false : parseFloat(result[1]);
			return webkitVersion;
		},
		androidStockBrowser: function() {
			if (mod.is.android && mod.is.webkitVersion && mod.is.webkitVersion < 537) {
				return true;
			}
			return false;
		},
		standalone: function() {
			return !!window.navigator.standalone;
		},
		smartphone: function() {
			return (ua.match(/Android.*Mobile|iPhone|IEMobile|WPDesktop|BB10/i)) ? true : false;
		},
		tablet: function() {
			// Android smartphones have the combination Android...Mobile, tablets only Android
			var androidTablet = (mod.is.android && !mod.is.smartphone),
				iPad = ua.match(/iPad/i) ? true : false;
			return (androidTablet || iPad);
		},
		pc: function() {
			return (!mod.is.smartphone && !mod.is.tablet);
		},
		phantom: function() {
			return !!(window.callPhantom || ua.match(/PhantomJS/));
		},
		iframe: function(){
			return window.self != window.top;
		}
	};

	for (d in mod.detect) {
		if (typeof mod.detect[d] === 'function') {
			mod.is[d] = mod.detect[d]();
		}
	}

	return mod;
})();



/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
 * @version   3.2.1
 */

(function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function e(t){return"function"==typeof t}function n(t){G=t}function r(t){Q=t}function o(){return function(){process.nextTick(a)}}function i(){return function(){B(a)}}function s(){var t=0,e=new X(a),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function u(){var t=new MessageChannel;return t.port1.onmessage=a,function(){t.port2.postMessage(0)}}function c(){return function(){setTimeout(a,1)}}function a(){for(var t=0;J>t;t+=2){var e=tt[t],n=tt[t+1];e(n),tt[t]=void 0,tt[t+1]=void 0}J=0}function f(){try{var t=require,e=t("vertx");return B=e.runOnLoop||e.runOnContext,i()}catch(n){return c()}}function l(t,e){var n=this,r=new this.constructor(p);void 0===r[rt]&&k(r);var o=n._state;if(o){var i=arguments[o-1];Q(function(){x(o,r,i,n._result)})}else E(n,r,t,e);return r}function h(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(p);return g(n,t),n}function p(){}function _(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function v(t){try{return t.then}catch(e){return ut.error=e,ut}}function y(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function m(t,e,n){Q(function(t){var r=!1,o=y(n,e,function(n){r||(r=!0,e!==n?g(t,n):S(t,n))},function(e){r||(r=!0,j(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,j(t,o))},t)}function b(t,e){e._state===it?S(t,e._result):e._state===st?j(t,e._result):E(e,void 0,function(e){g(t,e)},function(e){j(t,e)})}function w(t,n,r){n.constructor===t.constructor&&r===et&&constructor.resolve===nt?b(t,n):r===ut?j(t,ut.error):void 0===r?S(t,n):e(r)?m(t,n,r):S(t,n)}function g(e,n){e===n?j(e,_()):t(n)?w(e,n,v(n)):S(e,n)}function A(t){t._onerror&&t._onerror(t._result),T(t)}function S(t,e){t._state===ot&&(t._result=e,t._state=it,0!==t._subscribers.length&&Q(T,t))}function j(t,e){t._state===ot&&(t._state=st,t._result=e,Q(A,t))}function E(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+it]=n,o[i+st]=r,0===i&&t._state&&Q(T,t)}function T(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r,o,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?x(n,r,o,i):o(i);t._subscribers.length=0}}function M(){this.error=null}function P(t,e){try{return t(e)}catch(n){return ct.error=n,ct}}function x(t,n,r,o){var i,s,u,c,a=e(r);if(a){if(i=P(r,o),i===ct?(c=!0,s=i.error,i=null):u=!0,n===i)return void j(n,d())}else i=o,u=!0;n._state!==ot||(a&&u?g(n,i):c?j(n,s):t===it?S(n,i):t===st&&j(n,i))}function C(t,e){try{e(function(e){g(t,e)},function(e){j(t,e)})}catch(n){j(t,n)}}function O(){return at++}function k(t){t[rt]=at++,t._state=void 0,t._result=void 0,t._subscribers=[]}function Y(t){return new _t(this,t).promise}function q(t){var e=this;return new e(I(t)?function(n,r){for(var o=t.length,i=0;o>i;i++)e.resolve(t[i]).then(n,r)}:function(t,e){e(new TypeError("You must pass an array to race."))})}function F(t){var e=this,n=new e(p);return j(n,t),n}function D(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function K(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function L(t){this[rt]=O(),this._result=this._state=void 0,this._subscribers=[],p!==t&&("function"!=typeof t&&D(),this instanceof L?C(this,t):K())}function N(t,e){this._instanceConstructor=t,this.promise=new t(p),this.promise[rt]||k(this.promise),I(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?S(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&S(this.promise,this._result))):j(this.promise,U())}function U(){return new Error("Array Methods must be provided an Array")}function W(){var t;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;(!n||"[object Promise]"!==Object.prototype.toString.call(n.resolve())||n.cast)&&(t.Promise=pt)}var z;z=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var B,G,H,I=z,J=0,Q=function(t,e){tt[J]=t,tt[J+1]=e,J+=2,2===J&&(G?G(a):H())},R="undefined"!=typeof window?window:void 0,V=R||{},X=V.MutationObserver||V.WebKitMutationObserver,Z="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),$="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,tt=new Array(1e3);H=Z?o():X?s():$?u():void 0===R&&"function"==typeof require?f():c();var et=l,nt=h,rt=Math.random().toString(36).substring(16),ot=void 0,it=1,st=2,ut=new M,ct=new M,at=0,ft=Y,lt=q,ht=F,pt=L;L.all=ft,L.race=lt,L.resolve=nt,L.reject=ht,L._setScheduler=n,L._setAsap=r,L._asap=Q,L.prototype={constructor:L,then:et,"catch":function(t){return this.then(null,t)}};var _t=N;N.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===ot&&t>n;n++)this._eachEntry(e[n],n)},N.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===nt){var o=v(t);if(o===et&&t._state!==ot)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===pt){var i=new n(p);w(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){e(t)}),e)}else this._willSettleAt(r(t),e)},N.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===ot&&(this._remaining--,t===st?j(r,n):this._result[e]=n),0===this._remaining&&S(r,this._result)},N.prototype._willSettleAt=function(t,e){var n=this;E(t,void 0,function(t){n._settledAt(it,e,t)},function(t){n._settledAt(st,e,t)})};var dt=W,vt={Promise:pt,polyfill:dt};"function"==typeof define&&define.amd?define(function(){return vt}):"undefined"!=typeof module&&module.exports?module.exports=vt:"undefined"!=typeof this&&(this.ES6Promise=vt),dt()}).call(this);



/* Zepto v1.2.0 - zepto event ajax form ie - zeptojs.com/license */
!function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t)}):e(t)}(this,function(t){var e=function(){function $(t){return null==t?String(t):S[C.call(t)]||"object"}function F(t){return"function"==$(t)}function k(t){return null!=t&&t==t.window}function M(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function R(t){return"object"==$(t)}function Z(t){return R(t)&&!k(t)&&Object.getPrototypeOf(t)==Object.prototype}function z(t){var e=!!t&&"length"in t&&t.length,n=r.type(t);return"function"!=n&&!k(t)&&("array"==n||0===e||"number"==typeof e&&e>0&&e-1 in t)}function q(t){return a.call(t,function(t){return null!=t})}function H(t){return t.length>0?r.fn.concat.apply([],t):t}function I(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function V(t){return t in l?l[t]:l[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function _(t,e){return"number"!=typeof e||h[I(t)]?e:e+"px"}function B(t){var e,n;return c[t]||(e=f.createElement(t),f.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),c[t]=n),c[t]}function U(t){return"children"in t?u.call(t.children):r.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function X(t,e){var n,r=t?t.length:0;for(n=0;r>n;n++)this[n]=t[n];this.length=r,this.selector=e||""}function J(t,r,i){for(n in r)i&&(Z(r[n])||L(r[n]))?(Z(r[n])&&!Z(t[n])&&(t[n]={}),L(r[n])&&!L(t[n])&&(t[n]=[]),J(t[n],r[n],i)):r[n]!==e&&(t[n]=r[n])}function W(t,e){return null==e?r(t):r(t).filter(e)}function Y(t,e,n,r){return F(e)?e.call(t,n,r):e}function G(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function K(t,n){var r=t.className||"",i=r&&r.baseVal!==e;return n===e?i?r.baseVal:r:void(i?r.baseVal=n:t.className=n)}function Q(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?r.parseJSON(t):t):t}catch(e){return t}}function tt(t,e){e(t);for(var n=0,r=t.childNodes.length;r>n;n++)tt(t.childNodes[n],e)}var e,n,r,i,O,P,o=[],s=o.concat,a=o.filter,u=o.slice,f=t.document,c={},l={},h={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},p=/^\s*<(\w+|!)[^>]*>/,d=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,m=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,g=/^(?:body|html)$/i,v=/([A-Z])/g,y=["val","css","html","text","data","width","height","offset"],x=["after","prepend","before","append"],b=f.createElement("table"),E=f.createElement("tr"),j={tr:f.createElement("tbody"),tbody:b,thead:b,tfoot:b,td:E,th:E,"*":f.createElement("div")},w=/complete|loaded|interactive/,T=/^[\w-]*$/,S={},C=S.toString,N={},A=f.createElement("div"),D={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},L=Array.isArray||function(t){return t instanceof Array};return N.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=A).appendChild(t),r=~N.qsa(i,e).indexOf(t),o&&A.removeChild(t),r},O=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},P=function(t){return a.call(t,function(e,n){return t.indexOf(e)==n})},N.fragment=function(t,n,i){var o,s,a;return d.test(t)&&(o=r(f.createElement(RegExp.$1))),o||(t.replace&&(t=t.replace(m,"<$1></$2>")),n===e&&(n=p.test(t)&&RegExp.$1),n in j||(n="*"),a=j[n],a.innerHTML=""+t,o=r.each(u.call(a.childNodes),function(){a.removeChild(this)})),Z(i)&&(s=r(o),r.each(i,function(t,e){y.indexOf(t)>-1?s[t](e):s.attr(t,e)})),o},N.Z=function(t,e){return new X(t,e)},N.isZ=function(t){return t instanceof N.Z},N.init=function(t,n){var i;if(!t)return N.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&p.test(t))i=N.fragment(t,RegExp.$1,n),t=null;else{if(n!==e)return r(n).find(t);i=N.qsa(f,t)}else{if(F(t))return r(f).ready(t);if(N.isZ(t))return t;if(L(t))i=q(t);else if(R(t))i=[t],t=null;else if(p.test(t))i=N.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==e)return r(n).find(t);i=N.qsa(f,t)}}return N.Z(i,t)},r=function(t,e){return N.init(t,e)},r.extend=function(t){var e,n=u.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){J(t,n,e)}),t},N.qsa=function(t,e){var n,r="#"==e[0],i=!r&&"."==e[0],o=r||i?e.slice(1):e,s=T.test(o);return t.getElementById&&s&&r?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:u.call(s&&!r&&t.getElementsByClassName?i?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},r.contains=f.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},r.type=$,r.isFunction=F,r.isWindow=k,r.isArray=L,r.isPlainObject=Z,r.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},r.isNumeric=function(t){var e=Number(t),n=typeof t;return null!=t&&"boolean"!=n&&("string"!=n||t.length)&&!isNaN(e)&&isFinite(e)||!1},r.inArray=function(t,e,n){return o.indexOf.call(e,t,n)},r.camelCase=O,r.trim=function(t){return null==t?"":String.prototype.trim.call(t)},r.uuid=0,r.support={},r.expr={},r.noop=function(){},r.map=function(t,e){var n,i,o,r=[];if(z(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&r.push(n);else for(o in t)n=e(t[o],o),null!=n&&r.push(n);return H(r)},r.each=function(t,e){var n,r;if(z(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t},r.grep=function(t,e){return a.call(t,e)},t.JSON&&(r.parseJSON=JSON.parse),r.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){S["[object "+e+"]"]=e.toLowerCase()}),r.fn={constructor:N.Z,length:0,forEach:o.forEach,reduce:o.reduce,push:o.push,sort:o.sort,splice:o.splice,indexOf:o.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=N.isZ(e)?e.toArray():e;return s.apply(N.isZ(this)?this.toArray():this,n)},map:function(t){return r(r.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return r(u.apply(this,arguments))},ready:function(t){return w.test(f.readyState)&&f.body?t(r):f.addEventListener("DOMContentLoaded",function(){t(r)},!1),this},get:function(t){return t===e?u.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return o.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return F(t)?this.not(this.not(t)):r(a.call(this,function(e){return N.matches(e,t)}))},add:function(t,e){return r(P(this.concat(r(t,e))))},is:function(t){return this.length>0&&N.matches(this[0],t)},not:function(t){var n=[];if(F(t)&&t.call!==e)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):z(t)&&F(t.item)?u.call(t):r(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return r(n)},has:function(t){return this.filter(function(){return R(t)?r.contains(this,t):r(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!R(t)?t:r(t)},last:function(){var t=this[this.length-1];return t&&!R(t)?t:r(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?r(t).filter(function(){var t=this;return o.some.call(n,function(e){return r.contains(e,t)})}):1==this.length?r(N.qsa(this[0],t)):this.map(function(){return N.qsa(this,t)}):r()},closest:function(t,e){var n=[],i="object"==typeof t&&r(t);return this.each(function(r,o){for(;o&&!(i?i.indexOf(o)>=0:N.matches(o,t));)o=o!==e&&!M(o)&&o.parentNode;o&&n.indexOf(o)<0&&n.push(o)}),r(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=r.map(n,function(t){return(t=t.parentNode)&&!M(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return W(e,t)},parent:function(t){return W(P(this.pluck("parentNode")),t)},children:function(t){return W(this.map(function(){return U(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||u.call(this.childNodes)})},siblings:function(t){return W(this.map(function(t,e){return a.call(U(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return r.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=B(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=F(t);if(this[0]&&!e)var n=r(t).get(0),i=n.parentNode||this.length>1;return this.each(function(o){r(this).wrapAll(e?t.call(this,o):i?n.cloneNode(!0):n)})},wrapAll:function(t){if(this[0]){r(this[0]).before(t=r(t));for(var e;(e=t.children()).length;)t=e.first();r(t).append(this)}return this},wrapInner:function(t){var e=F(t);return this.each(function(n){var i=r(this),o=i.contents(),s=e?t.call(this,n):t;o.length?o.wrapAll(s):i.append(s)})},unwrap:function(){return this.parent().each(function(){r(this).replaceWith(r(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var n=r(this);(t===e?"none"==n.css("display"):t)?n.show():n.hide()})},prev:function(t){return r(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return r(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;r(this).empty().append(Y(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=Y(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this.pluck("textContent").join(""):null},attr:function(t,r){var i;return"string"!=typeof t||1 in arguments?this.each(function(e){if(1===this.nodeType)if(R(t))for(n in t)G(this,n,t[n]);else G(this,t,Y(this,r,e,this.getAttribute(t)))}):0 in this&&1==this[0].nodeType&&null!=(i=this[0].getAttribute(t))?i:e},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){G(this,t)},this)})},prop:function(t,e){return t=D[t]||t,1 in arguments?this.each(function(n){this[t]=Y(this,e,n,this[t])}):this[0]&&this[0][t]},removeProp:function(t){return t=D[t]||t,this.each(function(){delete this[t]})},data:function(t,n){var r="data-"+t.replace(v,"-$1").toLowerCase(),i=1 in arguments?this.attr(r,n):this.attr(r);return null!==i?Q(i):e},val:function(t){return 0 in arguments?(null==t&&(t=""),this.each(function(e){this.value=Y(this,t,e,this.value)})):this[0]&&(this[0].multiple?r(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(e){if(e)return this.each(function(t){var n=r(this),i=Y(this,e,t,n.offset()),o=n.offsetParent().offset(),s={top:i.top-o.top,left:i.left-o.left};"static"==n.css("position")&&(s.position="relative"),n.css(s)});if(!this.length)return null;if(f.documentElement!==this[0]&&!r.contains(f.documentElement,this[0]))return{top:0,left:0};var n=this[0].getBoundingClientRect();return{left:n.left+t.pageXOffset,top:n.top+t.pageYOffset,width:Math.round(n.width),height:Math.round(n.height)}},css:function(t,e){if(arguments.length<2){var i=this[0];if("string"==typeof t){if(!i)return;return i.style[O(t)]||getComputedStyle(i,"").getPropertyValue(t)}if(L(t)){if(!i)return;var o={},s=getComputedStyle(i,"");return r.each(t,function(t,e){o[e]=i.style[O(e)]||s.getPropertyValue(e)}),o}}var a="";if("string"==$(t))e||0===e?a=I(t)+":"+_(t,e):this.each(function(){this.style.removeProperty(I(t))});else for(n in t)t[n]||0===t[n]?a+=I(n)+":"+_(n,t[n])+";":this.each(function(){this.style.removeProperty(I(n))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(r(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?o.some.call(this,function(t){return this.test(K(t))},V(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var n=K(this),o=Y(this,t,e,n);o.split(/\s+/g).forEach(function(t){r(this).hasClass(t)||i.push(t)},this),i.length&&K(this,n+(n?" ":"")+i.join(" "))}}):this},removeClass:function(t){return this.each(function(n){if("className"in this){if(t===e)return K(this,"");i=K(this),Y(this,t,n,i).split(/\s+/g).forEach(function(t){i=i.replace(V(t)," ")}),K(this,i.trim())}})},toggleClass:function(t,n){return t?this.each(function(i){var o=r(this),s=Y(this,t,i,K(this));s.split(/\s+/g).forEach(function(t){(n===e?!o.hasClass(t):n)?o.addClass(t):o.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var n="scrollTop"in this[0];return t===e?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var n="scrollLeft"in this[0];return t===e?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=g.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(r(t).css("margin-top"))||0,n.left-=parseFloat(r(t).css("margin-left"))||0,i.top+=parseFloat(r(e[0]).css("border-top-width"))||0,i.left+=parseFloat(r(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||f.body;t&&!g.test(t.nodeName)&&"static"==r(t).css("position");)t=t.offsetParent;return t})}},r.fn.detach=r.fn.remove,["width","height"].forEach(function(t){var n=t.replace(/./,function(t){return t[0].toUpperCase()});r.fn[t]=function(i){var o,s=this[0];return i===e?k(s)?s["inner"+n]:M(s)?s.documentElement["scroll"+n]:(o=this.offset())&&o[t]:this.each(function(e){s=r(this),s.css(t,Y(this,i,e,s[t]()))})}}),x.forEach(function(n,i){var o=i%2;r.fn[n]=function(){var n,a,s=r.map(arguments,function(t){var i=[];return n=$(t),"array"==n?(t.forEach(function(t){return t.nodeType!==e?i.push(t):r.zepto.isZ(t)?i=i.concat(t.get()):void(i=i.concat(N.fragment(t)))}),i):"object"==n||null==t?t:N.fragment(t)}),u=this.length>1;return s.length<1?this:this.each(function(e,n){a=o?n:n.parentNode,n=0==i?n.nextSibling:1==i?n.firstChild:2==i?n:null;var c=r.contains(f.documentElement,a);s.forEach(function(e){if(u)e=e.cloneNode(!0);else if(!a)return r(e).remove();a.insertBefore(e,n),c&&tt(e,function(e){if(!(null==e.nodeName||"SCRIPT"!==e.nodeName.toUpperCase()||e.type&&"text/javascript"!==e.type||e.src)){var n=e.ownerDocument?e.ownerDocument.defaultView:t;n.eval.call(n,e.innerHTML)}})})})},r.fn[o?n+"To":"insert"+(i?"Before":"After")]=function(t){return r(t)[n](this),this}}),N.Z.prototype=X.prototype=r.fn,N.uniq=P,N.deserializeValue=Q,r.zepto=N,r}();return t.Zepto=e,void 0===t.$&&(t.$=e),function(e){function h(t){return t._zid||(t._zid=n++)}function p(t,e,n,r){if(e=d(e),e.ns)var i=m(e.ns);return(a[h(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||i.test(t.ns))&&(!n||h(t.fn)===h(n))&&(!r||t.sel==r)})}function d(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function m(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function g(t,e){return t.del&&!f&&t.e in c||!!e}function v(t){return l[t]||f&&c[t]||t}function y(t,n,i,o,s,u,f){var c=h(t),p=a[c]||(a[c]=[]);n.split(/\s/).forEach(function(n){if("ready"==n)return e(document).ready(i);var a=d(n);a.fn=i,a.sel=s,a.e in l&&(i=function(t){var n=t.relatedTarget;return!n||n!==this&&!e.contains(this,n)?a.fn.apply(this,arguments):void 0}),a.del=u;var c=u||i;a.proxy=function(e){if(e=T(e),!e.isImmediatePropagationStopped()){e.data=o;var n=c.apply(t,e._args==r?[e]:[e].concat(e._args));return n===!1&&(e.preventDefault(),e.stopPropagation()),n}},a.i=p.length,p.push(a),"addEventListener"in t&&t.addEventListener(v(a.e),a.proxy,g(a,f))})}function x(t,e,n,r,i){var o=h(t);(e||"").split(/\s/).forEach(function(e){p(t,e,n,r).forEach(function(e){delete a[o][e.i],"removeEventListener"in t&&t.removeEventListener(v(e.e),e.proxy,g(e,i))})})}function T(t,n){return(n||!t.isDefaultPrevented)&&(n||(n=t),e.each(w,function(e,r){var i=n[e];t[e]=function(){return this[r]=b,i&&i.apply(n,arguments)},t[r]=E}),t.timeStamp||(t.timeStamp=Date.now()),(n.defaultPrevented!==r?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(t.isDefaultPrevented=b)),t}function S(t){var e,n={originalEvent:t};for(e in t)j.test(e)||t[e]===r||(n[e]=t[e]);return T(n,t)}var r,n=1,i=Array.prototype.slice,o=e.isFunction,s=function(t){return"string"==typeof t},a={},u={},f="onfocusin"in t,c={focus:"focusin",blur:"focusout"},l={mouseenter:"mouseover",mouseleave:"mouseout"};u.click=u.mousedown=u.mouseup=u.mousemove="MouseEvents",e.event={add:y,remove:x},e.proxy=function(t,n){var r=2 in arguments&&i.call(arguments,2);if(o(t)){var a=function(){return t.apply(n,r?r.concat(i.call(arguments)):arguments)};return a._zid=h(t),a}if(s(n))return r?(r.unshift(t[n],t),e.proxy.apply(null,r)):e.proxy(t[n],t);throw new TypeError("expected function")},e.fn.bind=function(t,e,n){return this.on(t,e,n)},e.fn.unbind=function(t,e){return this.off(t,e)},e.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var b=function(){return!0},E=function(){return!1},j=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,w={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(t,e,n){return this.on(e,t,n)},e.fn.undelegate=function(t,e,n){return this.off(e,t,n)},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(t,n,a,u,f){var c,l,h=this;return t&&!s(t)?(e.each(t,function(t,e){h.on(t,n,a,e,f)}),h):(s(n)||o(u)||u===!1||(u=a,a=n,n=r),(u===r||a===!1)&&(u=a,a=r),u===!1&&(u=E),h.each(function(r,o){f&&(c=function(t){return x(o,t.type,u),u.apply(this,arguments)}),n&&(l=function(t){var r,s=e(t.target).closest(n,o).get(0);return s&&s!==o?(r=e.extend(S(t),{currentTarget:s,liveFired:o}),(c||u).apply(s,[r].concat(i.call(arguments,1)))):void 0}),y(o,t,u,a,n,l||c)}))},e.fn.off=function(t,n,i){var a=this;return t&&!s(t)?(e.each(t,function(t,e){a.off(t,n,e)}),a):(s(n)||o(i)||i===!1||(i=n,n=r),i===!1&&(i=E),a.each(function(){x(this,t,i,n)}))},e.fn.trigger=function(t,n){return t=s(t)||e.isPlainObject(t)?e.Event(t):T(t),t._args=n,this.each(function(){t.type in c&&"function"==typeof this[t.type]?this[t.type]():"dispatchEvent"in this?this.dispatchEvent(t):e(this).triggerHandler(t,n)})},e.fn.triggerHandler=function(t,n){var r,i;return this.each(function(o,a){r=S(s(t)?e.Event(t):t),r._args=n,r.target=a,e.each(p(a,t.type||t),function(t,e){return i=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),i},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t){e.fn[t]=function(e){return 0 in arguments?this.bind(t,e):this.trigger(t)}}),e.Event=function(t,e){s(t)||(e=t,t=e.type);var n=document.createEvent(u[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),T(n)}}(e),function(e){function p(t,n,r){var i=e.Event(n);return e(t).trigger(i,r),!i.isDefaultPrevented()}function d(t,e,n,i){return t.global?p(e||r,n,i):void 0}function m(t){t.global&&0===e.active++&&d(t,null,"ajaxStart")}function g(t){t.global&&!--e.active&&d(t,null,"ajaxStop")}function v(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||d(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void d(e,n,"ajaxSend",[t,e])}function y(t,e,n,r){var i=n.context,o="success";n.success.call(i,t,o,e),r&&r.resolveWith(i,[t,o,e]),d(n,i,"ajaxSuccess",[e,n,t]),b(o,e,n)}function x(t,e,n,r,i){var o=r.context;r.error.call(o,n,e,t),i&&i.rejectWith(o,[n,e,t]),d(r,o,"ajaxError",[n,r,t||e]),b(e,n,r)}function b(t,e,n){var r=n.context;n.complete.call(r,e,t),d(n,r,"ajaxComplete",[e,n]),g(n)}function E(t,e,n){if(n.dataFilter==j)return t;var r=n.context;return n.dataFilter.call(r,t,e)}function j(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==c?"html":t==f?"json":a.test(t)?"script":u.test(t)&&"xml")||"text"}function T(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function S(t){t.processData&&t.data&&"string"!=e.type(t.data)&&(t.data=e.param(t.data,t.traditional)),!t.data||t.type&&"GET"!=t.type.toUpperCase()&&"jsonp"!=t.dataType||(t.url=T(t.url,t.data),t.data=void 0)}function C(t,n,r,i){return e.isFunction(n)&&(i=r,r=n,n=void 0),e.isFunction(r)||(i=r,r=void 0),{url:t,data:n,success:r,dataType:i}}function O(t,n,r,i){var o,s=e.isArray(n),a=e.isPlainObject(n);e.each(n,function(n,u){o=e.type(u),i&&(n=r?i:i+"["+(a||"object"==o||"array"==o?n:"")+"]"),!i&&s?t.add(u.name,u.value):"array"==o||!r&&"object"==o?O(t,u,r,n):t.add(n,u)})}var i,o,n=+new Date,r=t.document,s=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,a=/^(?:text|application)\/javascript/i,u=/^(?:text|application)\/xml/i,f="application/json",c="text/html",l=/^\s*$/,h=r.createElement("a");h.href=t.location.href,e.active=0,e.ajaxJSONP=function(i,o){if(!("type"in i))return e.ajax(i);var c,p,s=i.jsonpCallback,a=(e.isFunction(s)?s():s)||"Zepto"+n++,u=r.createElement("script"),f=t[a],l=function(t){e(u).triggerHandler("error",t||"abort")},h={abort:l};return o&&o.promise(h),e(u).on("load error",function(n,r){clearTimeout(p),e(u).off().remove(),"error"!=n.type&&c?y(c[0],h,i,o):x(null,r||"error",h,i,o),t[a]=f,c&&e.isFunction(f)&&f(c[0]),f=c=void 0}),v(h,i)===!1?(l("abort"),h):(t[a]=function(){c=arguments},u.src=i.url.replace(/\?(.+)=\?/,"?$1="+a),r.head.appendChild(u),i.timeout>0&&(p=setTimeout(function(){l("timeout")},i.timeout)),h)},e.ajaxSettings={type:"GET",beforeSend:j,success:j,error:j,complete:j,context:null,global:!0,xhr:function(){return new t.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:f,xml:"application/xml, text/xml",html:c,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:j},e.ajax=function(n){var u,f,s=e.extend({},n||{}),a=e.Deferred&&e.Deferred();for(i in e.ajaxSettings)void 0===s[i]&&(s[i]=e.ajaxSettings[i]);m(s),s.crossDomain||(u=r.createElement("a"),u.href=s.url,u.href=u.href,s.crossDomain=h.protocol+"//"+h.host!=u.protocol+"//"+u.host),s.url||(s.url=t.location.toString()),(f=s.url.indexOf("#"))>-1&&(s.url=s.url.slice(0,f)),S(s);var c=s.dataType,p=/\?.+=\?/.test(s.url);if(p&&(c="jsonp"),s.cache!==!1&&(n&&n.cache===!0||"script"!=c&&"jsonp"!=c)||(s.url=T(s.url,"_="+Date.now())),"jsonp"==c)return p||(s.url=T(s.url,s.jsonp?s.jsonp+"=?":s.jsonp===!1?"":"callback=?")),e.ajaxJSONP(s,a);var P,d=s.accepts[c],g={},b=function(t,e){g[t.toLowerCase()]=[t,e]},C=/^([\w-]+:)\/\//.test(s.url)?RegExp.$1:t.location.protocol,N=s.xhr(),O=N.setRequestHeader;if(a&&a.promise(N),s.crossDomain||b("X-Requested-With","XMLHttpRequest"),b("Accept",d||"*/*"),(d=s.mimeType||d)&&(d.indexOf(",")>-1&&(d=d.split(",",2)[0]),N.overrideMimeType&&N.overrideMimeType(d)),(s.contentType||s.contentType!==!1&&s.data&&"GET"!=s.type.toUpperCase())&&b("Content-Type",s.contentType||"application/x-www-form-urlencoded"),s.headers)for(o in s.headers)b(o,s.headers[o]);if(N.setRequestHeader=b,N.onreadystatechange=function(){if(4==N.readyState){N.onreadystatechange=j,clearTimeout(P);var t,n=!1;if(N.status>=200&&N.status<300||304==N.status||0==N.status&&"file:"==C){if(c=c||w(s.mimeType||N.getResponseHeader("content-type")),"arraybuffer"==N.responseType||"blob"==N.responseType)t=N.response;else{t=N.responseText;try{t=E(t,c,s),"script"==c?(1,eval)(t):"xml"==c?t=N.responseXML:"json"==c&&(t=l.test(t)?null:e.parseJSON(t))}catch(r){n=r}if(n)return x(n,"parsererror",N,s,a)}y(t,N,s,a)}else x(N.statusText||null,N.status?"error":"abort",N,s,a)}},v(N,s)===!1)return N.abort(),x(null,"abort",N,s,a),N;var A="async"in s?s.async:!0;if(N.open(s.type,s.url,A,s.username,s.password),s.xhrFields)for(o in s.xhrFields)N[o]=s.xhrFields[o];for(o in g)O.apply(N,g[o]);return s.timeout>0&&(P=setTimeout(function(){N.onreadystatechange=j,N.abort(),x(null,"timeout",N,s,a)},s.timeout)),N.send(s.data?s.data:null),N},e.get=function(){return e.ajax(C.apply(null,arguments))},e.post=function(){var t=C.apply(null,arguments);return t.type="POST",e.ajax(t)},e.getJSON=function(){var t=C.apply(null,arguments);return t.dataType="json",e.ajax(t)},e.fn.load=function(t,n,r){if(!this.length)return this;var a,i=this,o=t.split(/\s/),u=C(t,n,r),f=u.success;return o.length>1&&(u.url=o[0],a=o[1]),u.success=function(t){i.html(a?e("<div>").html(t.replace(s,"")).find(a):t),f&&f.apply(i,arguments)},e.ajax(u),this};var N=encodeURIComponent;e.param=function(t,n){var r=[];return r.add=function(t,n){e.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(N(t)+"="+N(n))},O(r,t,n),r.join("&").replace(/%20/g,"+")}}(e),function(t){t.fn.serializeArray=function(){var e,n,r=[],i=function(t){return t.forEach?t.forEach(i):void r.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(r,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&i(t(o).val())}),r},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(e),function(){try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;t.getComputedStyle=function(t,e){try{return n(t,e)}catch(r){return null}}}}(),e});



// see https://github.com/blai/fashionista/issues/2
;(function ($) {
	$.getScript = function(src, func, error_func) {
		var script = document.createElement('script');
		script.async = "async";
		script.src = src;
		if (func) {
			script.onload = func;
		}
		if (error_func) {
			script.onerror = error_func;
		}
		document.getElementsByTagName("head")[0].appendChild( script );
	}
})(Zepto);



/* sockjs-client v1.0.3 | http://sockjs.org | MIT license */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;"undefined"!=typeof window?e=window:"undefined"!=typeof global?e=global:"undefined"!=typeof self&&(e=self),e.SockJS=t()}}(function(){var t;return function e(t,n,r){function i(s,a){if(!n[s]){if(!t[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(o)return o(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[s]={exports:{}};t[s][0].call(c.exports,function(e){var n=t[s][1][e];return i(n?n:e)},c,c.exports,e,t,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(t,e){(function(n){"use strict";var r=t("./transport-list");e.exports=t("./main")(r),"_sockjs_onload"in n&&setTimeout(n._sockjs_onload,1)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./main":14,"./transport-list":16}],2:[function(t,e){"use strict";function n(){i.call(this),this.initEvent("close",!1,!1),this.wasClean=!1,this.code=0,this.reason=""}var r=t("inherits"),i=t("./event");r(n,i),e.exports=n},{"./event":4,inherits:54}],3:[function(t,e){"use strict";function n(){i.call(this)}var r=t("inherits"),i=t("./eventtarget");r(n,i),n.prototype.removeAllListeners=function(t){t?delete this._listeners[t]:this._listeners={}},n.prototype.once=function(t,e){function n(){r.removeListener(t,n),i||(i=!0,e.apply(this,arguments))}var r=this,i=!1;this.on(t,n)},n.prototype.emit=function(t){var e=this._listeners[t];if(e)for(var n=Array.prototype.slice.call(arguments,1),r=0;r<e.length;r++)e[r].apply(this,n)},n.prototype.on=n.prototype.addListener=i.prototype.addEventListener,n.prototype.removeListener=i.prototype.removeEventListener,e.exports.EventEmitter=n},{"./eventtarget":5,inherits:54}],4:[function(t,e){"use strict";function n(t){this.type=t}n.prototype.initEvent=function(t,e,n){return this.type=t,this.bubbles=e,this.cancelable=n,this.timeStamp=+new Date,this},n.prototype.stopPropagation=function(){},n.prototype.preventDefault=function(){},n.CAPTURING_PHASE=1,n.AT_TARGET=2,n.BUBBLING_PHASE=3,e.exports=n},{}],5:[function(t,e){"use strict";function n(){this._listeners={}}n.prototype.addEventListener=function(t,e){t in this._listeners||(this._listeners[t]=[]);var n=this._listeners[t];-1===n.indexOf(e)&&(n=n.concat([e])),this._listeners[t]=n},n.prototype.removeEventListener=function(t,e){var n=this._listeners[t];if(n){var r=n.indexOf(e);return-1!==r?void(n.length>1?this._listeners[t]=n.slice(0,r).concat(n.slice(r+1)):delete this._listeners[t]):void 0}},n.prototype.dispatchEvent=function(t){var e=t.type,n=Array.prototype.slice.call(arguments,0);if(this["on"+e]&&this["on"+e].apply(this,n),e in this._listeners)for(var r=this._listeners[e],i=0;i<r.length;i++)r[i].apply(this,n)},e.exports=n},{}],6:[function(t,e){"use strict";function n(t){i.call(this),this.initEvent("message",!1,!1),this.data=t}var r=t("inherits"),i=t("./event");r(n,i),e.exports=n},{"./event":4,inherits:54}],7:[function(t,e){"use strict";function n(t){this._transport=t,t.on("message",this._transportMessage.bind(this)),t.on("close",this._transportClose.bind(this))}var r=t("json3"),i=t("./utils/iframe");n.prototype._transportClose=function(t,e){i.postMessage("c",r.stringify([t,e]))},n.prototype._transportMessage=function(t){i.postMessage("t",t)},n.prototype._send=function(t){this._transport.send(t)},n.prototype._close=function(){this._transport.close(),this._transport.removeAllListeners()},e.exports=n},{"./utils/iframe":47,json3:55}],8:[function(t,e){"use strict";var n=t("./utils/url"),r=t("./utils/event"),i=t("json3"),o=t("./facade"),s=t("./info-iframe-receiver"),a=t("./utils/iframe"),u=t("./location");e.exports=function(t,e){var l={};e.forEach(function(t){t.facadeTransport&&(l[t.facadeTransport.transportName]=t.facadeTransport)}),l[s.transportName]=s;var c;t.bootstrap_iframe=function(){var e;a.currentWindowId=u.hash.slice(1);var s=function(r){if(r.source===parent&&("undefined"==typeof c&&(c=r.origin),r.origin===c)){var s;try{s=i.parse(r.data)}catch(f){return}if(s.windowId===a.currentWindowId)switch(s.type){case"s":var h;try{h=i.parse(s.data)}catch(f){break}var d=h[0],p=h[1],v=h[2],m=h[3];if(d!==t.version)throw new Error('Incompatibile SockJS! Main site uses: "'+d+'", the iframe: "'+t.version+'".');if(!n.isOriginEqual(v,u.href)||!n.isOriginEqual(m,u.href))throw new Error("Can't connect to different domain from within an iframe. ("+u.href+", "+v+", "+m+")");e=new o(new l[p](v,m));break;case"m":e._send(s.data);break;case"c":e&&e._close(),e=null}}};r.attachEvent("message",s),a.postMessage("s")}}},{"./facade":7,"./info-iframe-receiver":10,"./location":13,"./utils/event":46,"./utils/iframe":47,"./utils/url":52,debug:void 0,json3:55}],9:[function(t,e){"use strict";function n(t,e){r.call(this);var n=this,i=+new Date;this.xo=new e("GET",t),this.xo.once("finish",function(t,e){var r,a;if(200===t){if(a=+new Date-i,e)try{r=o.parse(e)}catch(u){}s.isObject(r)||(r={})}n.emit("finish",r,a),n.removeAllListeners()})}var r=t("events").EventEmitter,i=t("inherits"),o=t("json3"),s=t("./utils/object");i(n,r),n.prototype.close=function(){this.removeAllListeners(),this.xo.close()},e.exports=n},{"./utils/object":49,debug:void 0,events:3,inherits:54,json3:55}],10:[function(t,e){"use strict";function n(t){var e=this;i.call(this),this.ir=new a(t,s),this.ir.once("finish",function(t,n){e.ir=null,e.emit("message",o.stringify([t,n]))})}var r=t("inherits"),i=t("events").EventEmitter,o=t("json3"),s=t("./transport/sender/xhr-local"),a=t("./info-ajax");r(n,i),n.transportName="iframe-info-receiver",n.prototype.close=function(){this.ir&&(this.ir.close(),this.ir=null),this.removeAllListeners()},e.exports=n},{"./info-ajax":9,"./transport/sender/xhr-local":37,events:3,inherits:54,json3:55}],11:[function(t,e){(function(n){"use strict";function r(t,e){var r=this;i.call(this);var o=function(){var n=r.ifr=new u(l.transportName,e,t);n.once("message",function(t){if(t){var e;try{e=s.parse(t)}catch(n){return r.emit("finish"),void r.close()}var i=e[0],o=e[1];r.emit("finish",i,o)}r.close()}),n.once("close",function(){r.emit("finish"),r.close()})};n.document.body?o():a.attachEvent("load",o)}var i=t("events").EventEmitter,o=t("inherits"),s=t("json3"),a=t("./utils/event"),u=t("./transport/iframe"),l=t("./info-iframe-receiver");o(r,i),r.enabled=function(){return u.enabled()},r.prototype.close=function(){this.ifr&&this.ifr.close(),this.removeAllListeners(),this.ifr=null},e.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./info-iframe-receiver":10,"./transport/iframe":22,"./utils/event":46,debug:void 0,events:3,inherits:54,json3:55}],12:[function(t,e){"use strict";function n(t,e){var n=this;r.call(this),setTimeout(function(){n.doXhr(t,e)},0)}var r=t("events").EventEmitter,i=t("inherits"),o=t("./utils/url"),s=t("./transport/sender/xdr"),a=t("./transport/sender/xhr-cors"),u=t("./transport/sender/xhr-local"),l=t("./transport/sender/xhr-fake"),c=t("./info-iframe"),f=t("./info-ajax");i(n,r),n._getReceiver=function(t,e,n){return n.sameOrigin?new f(e,u):a.enabled?new f(e,a):s.enabled&&n.sameScheme?new f(e,s):c.enabled()?new c(t,e):new f(e,l)},n.prototype.doXhr=function(t,e){var r=this,i=o.addPath(t,"/info");this.xo=n._getReceiver(t,i,e),this.timeoutRef=setTimeout(function(){r._cleanup(!1),r.emit("finish")},n.timeout),this.xo.once("finish",function(t,e){r._cleanup(!0),r.emit("finish",t,e)})},n.prototype._cleanup=function(t){clearTimeout(this.timeoutRef),this.timeoutRef=null,!t&&this.xo&&this.xo.close(),this.xo=null},n.prototype.close=function(){this.removeAllListeners(),this._cleanup(!1)},n.timeout=8e3,e.exports=n},{"./info-ajax":9,"./info-iframe":11,"./transport/sender/xdr":34,"./transport/sender/xhr-cors":35,"./transport/sender/xhr-fake":36,"./transport/sender/xhr-local":37,"./utils/url":52,debug:void 0,events:3,inherits:54}],13:[function(t,e){(function(t){"use strict";e.exports=t.location||{origin:"http://localhost:80",protocol:"http",host:"localhost",port:80,href:"http://localhost/",hash:""}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],14:[function(t,e){(function(n){"use strict";function r(t,e,n){if(!(this instanceof r))return new r(t,e,n);if(arguments.length<1)throw new TypeError("Failed to construct 'SockJS: 1 argument required, but only 0 present");b.call(this),this.readyState=r.CONNECTING,this.extensions="",this.protocol="",n=n||{},n.protocols_whitelist&&m.warn("'protocols_whitelist' is DEPRECATED. Use 'transports' instead."),this._transportsWhitelist=n.transports;var i=n.sessionId||8;if("function"==typeof i)this._generateSessionId=i;else{if("number"!=typeof i)throw new TypeError("If sessionId is used in the options, it needs to be a number or a function.");this._generateSessionId=function(){return l.string(i)}}this._server=n.server||l.numberString(1e3);var o=new s(t);if(!o.host||!o.protocol)throw new SyntaxError("The URL '"+t+"' is invalid");if(o.hash)throw new SyntaxError("The URL must not contain a fragment");if("http:"!==o.protocol&&"https:"!==o.protocol)throw new SyntaxError("The URL's scheme must be either 'http:' or 'https:'. '"+o.protocol+"' is not allowed.");var a="https:"===o.protocol;if("https"===g.protocol&&!a)throw new Error("SecurityError: An insecure SockJS connection may not be initiated from a page loaded over HTTPS");e?Array.isArray(e)||(e=[e]):e=[];var u=e.sort();u.forEach(function(t,e){if(!t)throw new SyntaxError("The protocols entry '"+t+"' is invalid.");if(e<u.length-1&&t===u[e+1])throw new SyntaxError("The protocols entry '"+t+"' is duplicated.")});var c=f.getOrigin(g.href);this._origin=c?c.toLowerCase():null,o.set("pathname",o.pathname.replace(/\/+$/,"")),this.url=o.href,this._urlInfo={nullOrigin:!v.hasDomain(),sameOrigin:f.isOriginEqual(this.url,g.href),sameScheme:f.isSchemeEqual(this.url,g.href)},this._ir=new _(this.url,this._urlInfo),this._ir.once("finish",this._receiveInfo.bind(this))}function i(t){return 1e3===t||t>=3e3&&4999>=t}t("./shims");var o,s=t("url-parse"),a=t("inherits"),u=t("json3"),l=t("./utils/random"),c=t("./utils/escape"),f=t("./utils/url"),h=t("./utils/event"),d=t("./utils/transport"),p=t("./utils/object"),v=t("./utils/browser"),m=t("./utils/log"),y=t("./event/event"),b=t("./event/eventtarget"),g=t("./location"),w=t("./event/close"),x=t("./event/trans-message"),_=t("./info-receiver");a(r,b),r.prototype.close=function(t,e){if(t&&!i(t))throw new Error("InvalidAccessError: Invalid code");if(e&&e.length>123)throw new SyntaxError("reason argument has an invalid length");if(this.readyState!==r.CLOSING&&this.readyState!==r.CLOSED){var n=!0;this._close(t||1e3,e||"Normal closure",n)}},r.prototype.send=function(t){if("string"!=typeof t&&(t=""+t),this.readyState===r.CONNECTING)throw new Error("InvalidStateError: The connection has not been established yet");this.readyState===r.OPEN&&this._transport.send(c.quote(t))},r.version=t("./version"),r.CONNECTING=0,r.OPEN=1,r.CLOSING=2,r.CLOSED=3,r.prototype._receiveInfo=function(t,e){if(this._ir=null,!t)return void this._close(1002,"Cannot connect to server");this._rto=this.countRTO(e),this._transUrl=t.base_url?t.base_url:this.url,t=p.extend(t,this._urlInfo);var n=o.filterToEnabled(this._transportsWhitelist,t);this._transports=n.main,this._connect()},r.prototype._connect=function(){for(var t=this._transports.shift();t;t=this._transports.shift()){if(t.needBody&&(!n.document.body||"undefined"!=typeof n.document.readyState&&"complete"!==n.document.readyState&&"interactive"!==n.document.readyState))return this._transports.unshift(t),void h.attachEvent("load",this._connect.bind(this));var e=this._rto*t.roundTrips||5e3;this._transportTimeoutId=setTimeout(this._transportTimeout.bind(this),e);var r=f.addPath(this._transUrl,"/"+this._server+"/"+this._generateSessionId()),i=new t(r,this._transUrl);return i.on("message",this._transportMessage.bind(this)),i.once("close",this._transportClose.bind(this)),i.transportName=t.transportName,void(this._transport=i)}this._close(2e3,"All transports failed",!1)},r.prototype._transportTimeout=function(){this.readyState===r.CONNECTING&&this._transportClose(2007,"Transport timed out")},r.prototype._transportMessage=function(t){var e,n=this,r=t.slice(0,1),i=t.slice(1);switch(r){case"o":return void this._open();case"h":return void this.dispatchEvent(new y("heartbeat"))}if(i)try{e=u.parse(i)}catch(o){}if("undefined"!=typeof e)switch(r){case"a":Array.isArray(e)&&e.forEach(function(t){n.dispatchEvent(new x(t))});break;case"m":this.dispatchEvent(new x(e));break;case"c":Array.isArray(e)&&2===e.length&&this._close(e[0],e[1],!0)}},r.prototype._transportClose=function(t,e){return this._transport&&(this._transport.removeAllListeners(),this._transport=null,this.transport=null),i(t)||2e3===t||this.readyState!==r.CONNECTING?void this._close(t,e):void this._connect()},r.prototype._open=function(){this.readyState===r.CONNECTING?(this._transportTimeoutId&&(clearTimeout(this._transportTimeoutId),this._transportTimeoutId=null),this.readyState=r.OPEN,this.transport=this._transport.transportName,this.dispatchEvent(new y("open"))):this._close(1006,"Server lost session")},r.prototype._close=function(t,e,n){var i=!1;if(this._ir&&(i=!0,this._ir.close(),this._ir=null),this._transport&&(this._transport.close(),this._transport=null,this.transport=null),this.readyState===r.CLOSED)throw new Error("InvalidStateError: SockJS has already been closed");this.readyState=r.CLOSING,setTimeout(function(){this.readyState=r.CLOSED,i&&this.dispatchEvent(new y("error"));var o=new w("close");o.wasClean=n||!1,o.code=t||1e3,o.reason=e,this.dispatchEvent(o),this.onmessage=this.onclose=this.onerror=null}.bind(this),0)},r.prototype.countRTO=function(t){return t>100?4*t:300+t},e.exports=function(e){return o=d(e),t("./iframe-bootstrap")(r,e),r}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./event/close":2,"./event/event":4,"./event/eventtarget":5,"./event/trans-message":6,"./iframe-bootstrap":8,"./info-receiver":12,"./location":13,"./shims":15,"./utils/browser":44,"./utils/escape":45,"./utils/event":46,"./utils/log":48,"./utils/object":49,"./utils/random":50,"./utils/transport":51,"./utils/url":52,"./version":53,debug:void 0,inherits:54,json3:55,"url-parse":56}],15:[function(){"use strict";function t(t){var e=+t;return e!==e?e=0:0!==e&&e!==1/0&&e!==-(1/0)&&(e=(e>0||-1)*Math.floor(Math.abs(e))),e}function e(t){return t>>>0}function n(){}var r,i=Array.prototype,o=Object.prototype,s=Function.prototype,a=String.prototype,u=i.slice,l=o.toString,c=function(t){return"[object Function]"===o.toString.call(t)},f=function(t){return"[object Array]"===l.call(t)},h=function(t){return"[object String]"===l.call(t)},d=Object.defineProperty&&function(){try{return Object.defineProperty({},"x",{}),!0}catch(t){return!1}}();r=d?function(t,e,n,r){!r&&e in t||Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:!0,value:n})}:function(t,e,n,r){!r&&e in t||(t[e]=n)};var p=function(t,e,n){for(var i in e)o.hasOwnProperty.call(e,i)&&r(t,i,e[i],n)},v=function(t){if(null==t)throw new TypeError("can't convert "+t+" to object");return Object(t)};p(s,{bind:function(t){var e=this;if(!c(e))throw new TypeError("Function.prototype.bind called on incompatible "+e);for(var r=u.call(arguments,1),i=function(){if(this instanceof l){var n=e.apply(this,r.concat(u.call(arguments)));return Object(n)===n?n:this}return e.apply(t,r.concat(u.call(arguments)))},o=Math.max(0,e.length-r.length),s=[],a=0;o>a;a++)s.push("$"+a);var l=Function("binder","return function ("+s.join(",")+"){ return binder.apply(this, arguments); }")(i);return e.prototype&&(n.prototype=e.prototype,l.prototype=new n,n.prototype=null),l}}),p(Array,{isArray:f});var m=Object("a"),y="a"!==m[0]||!(0 in m),b=function(t){var e=!0,n=!0;return t&&(t.call("foo",function(t,n,r){"object"!=typeof r&&(e=!1)}),t.call([1],function(){n="string"==typeof this},"x")),!!t&&e&&n};p(i,{forEach:function(t){var e=v(this),n=y&&h(this)?this.split(""):e,r=arguments[1],i=-1,o=n.length>>>0;if(!c(t))throw new TypeError;for(;++i<o;)i in n&&t.call(r,n[i],i,e)}},!b(i.forEach));var g=Array.prototype.indexOf&&-1!==[0,1].indexOf(1,2);p(i,{indexOf:function(e){var n=y&&h(this)?this.split(""):v(this),r=n.length>>>0;if(!r)return-1;var i=0;for(arguments.length>1&&(i=t(arguments[1])),i=i>=0?i:Math.max(0,r+i);r>i;i++)if(i in n&&n[i]===e)return i;return-1}},g);var w=a.split;2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||"t"==="tesst".split(/(s)*/)[1]||4!=="test".split(/(?:)/,-1).length||"".split(/.?/).length||".".split(/()()/).length>1?!function(){var t=void 0===/()??/.exec("")[1];a.split=function(n,r){var o=this;if(void 0===n&&0===r)return[];if("[object RegExp]"!==l.call(n))return w.call(this,n,r);var s,a,u,c,f=[],h=(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.extended?"x":"")+(n.sticky?"y":""),d=0;for(n=new RegExp(n.source,h+"g"),o+="",t||(s=new RegExp("^"+n.source+"$(?!\\s)",h)),r=void 0===r?-1>>>0:e(r);(a=n.exec(o))&&(u=a.index+a[0].length,!(u>d&&(f.push(o.slice(d,a.index)),!t&&a.length>1&&a[0].replace(s,function(){for(var t=1;t<arguments.length-2;t++)void 0===arguments[t]&&(a[t]=void 0)}),a.length>1&&a.index<o.length&&i.push.apply(f,a.slice(1)),c=a[0].length,d=u,f.length>=r)));)n.lastIndex===a.index&&n.lastIndex++;return d===o.length?(c||!n.test(""))&&f.push(""):f.push(o.slice(d)),f.length>r?f.slice(0,r):f}}():"0".split(void 0,0).length&&(a.split=function(t,e){return void 0===t&&0===e?[]:w.call(this,t,e)});var x="	\n\f\r   ᠎             　\u2028\u2029﻿",_="​",E="["+x+"]",j=new RegExp("^"+E+E+"*"),T=new RegExp(E+E+"*$"),S=a.trim&&(x.trim()||!_.trim());p(a,{trim:function(){if(void 0===this||null===this)throw new TypeError("can't convert "+this+" to object");return String(this).replace(j,"").replace(T,"")}},S);var O=a.substr,C="".substr&&"b"!=="0b".substr(-1);p(a,{substr:function(t,e){return O.call(this,0>t&&(t=this.length+t)<0?0:t,e)}},C)},{}],16:[function(t,e){"use strict";e.exports=[t("./transport/websocket"),t("./transport/xhr-streaming"),t("./transport/xdr-streaming"),t("./transport/eventsource"),t("./transport/lib/iframe-wrap")(t("./transport/eventsource")),t("./transport/htmlfile"),t("./transport/lib/iframe-wrap")(t("./transport/htmlfile")),t("./transport/xhr-polling"),t("./transport/xdr-polling"),t("./transport/lib/iframe-wrap")(t("./transport/xhr-polling")),t("./transport/jsonp-polling")]},{"./transport/eventsource":20,"./transport/htmlfile":21,"./transport/jsonp-polling":23,"./transport/lib/iframe-wrap":26,"./transport/websocket":38,"./transport/xdr-polling":39,"./transport/xdr-streaming":40,"./transport/xhr-polling":41,"./transport/xhr-streaming":42}],17:[function(t,e){(function(n){"use strict";function r(t,e,n,r){var o=this;i.call(this),setTimeout(function(){o._start(t,e,n,r)},0)}var i=t("events").EventEmitter,o=t("inherits"),s=t("../../utils/event"),a=t("../../utils/url"),u=n.XMLHttpRequest;o(r,i),r.prototype._start=function(t,e,n,i){var o=this;try{this.xhr=new u}catch(l){}if(!this.xhr)return this.emit("finish",0,"no xhr support"),void this._cleanup();e=a.addQuery(e,"t="+ +new Date),this.unloadRef=s.unloadAdd(function(){o._cleanup(!0)});try{this.xhr.open(t,e,!0),this.timeout&&"timeout"in this.xhr&&(this.xhr.timeout=this.timeout,this.xhr.ontimeout=function(){o.emit("finish",0,""),o._cleanup(!1)})}catch(c){return this.emit("finish",0,""),void this._cleanup(!1)}if(i&&i.noCredentials||!r.supportsCORS||(this.xhr.withCredentials="true"),i&&i.headers)for(var f in i.headers)this.xhr.setRequestHeader(f,i.headers[f]);this.xhr.onreadystatechange=function(){if(o.xhr){var t,e,n=o.xhr;switch(n.readyState){case 3:try{e=n.status,t=n.responseText}catch(r){}1223===e&&(e=204),200===e&&t&&t.length>0&&o.emit("chunk",e,t);break;case 4:e=n.status,1223===e&&(e=204),(12005===e||12029===e)&&(e=0),o.emit("finish",e,n.responseText),o._cleanup(!1)}}};try{o.xhr.send(n)}catch(c){o.emit("finish",0,""),o._cleanup(!1)}},r.prototype._cleanup=function(t){if(this.xhr){if(this.removeAllListeners(),s.unloadDel(this.unloadRef),this.xhr.onreadystatechange=function(){},this.xhr.ontimeout&&(this.xhr.ontimeout=null),t)try{this.xhr.abort()}catch(e){}this.unloadRef=this.xhr=null}},r.prototype.close=function(){this._cleanup(!0)},r.enabled=!!u;var l=["Active"].concat("Object").join("X");!r.enabled&&l in n&&(u=function(){try{return new n[l]("Microsoft.XMLHTTP")}catch(t){return null}},r.enabled=!!new u);var c=!1;try{c="withCredentials"in new u}catch(f){}r.supportsCORS=c,e.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../utils/event":46,"../../utils/url":52,debug:void 0,events:3,inherits:54}],18:[function(t,e){(function(t){e.exports=t.EventSource}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],19:[function(t,e){(function(t){e.exports=t.WebSocket||t.MozWebSocket}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],20:[function(t,e){"use strict";function n(t){if(!n.enabled())throw new Error("Transport created when disabled");i.call(this,t,"/eventsource",o,s)}var r=t("inherits"),i=t("./lib/ajax-based"),o=t("./receiver/eventsource"),s=t("./sender/xhr-cors"),a=t("eventsource");r(n,i),n.enabled=function(){return!!a},n.transportName="eventsource",n.roundTrips=2,e.exports=n},{"./lib/ajax-based":24,"./receiver/eventsource":29,"./sender/xhr-cors":35,eventsource:18,inherits:54}],21:[function(t,e){"use strict";function n(t){if(!i.enabled)throw new Error("Transport created when disabled");s.call(this,t,"/htmlfile",i,o)}var r=t("inherits"),i=t("./receiver/htmlfile"),o=t("./sender/xhr-local"),s=t("./lib/ajax-based");r(n,s),n.enabled=function(t){return i.enabled&&t.sameOrigin},n.transportName="htmlfile",n.roundTrips=2,e.exports=n},{"./lib/ajax-based":24,"./receiver/htmlfile":30,"./sender/xhr-local":37,inherits:54}],22:[function(t,e){"use strict";function n(t,e,r){if(!n.enabled())throw new Error("Transport created when disabled");o.call(this);var i=this;this.origin=a.getOrigin(r),this.baseUrl=r,this.transUrl=e,this.transport=t,this.windowId=c.string(8);var s=a.addPath(r,"/iframe.html")+"#"+this.windowId;this.iframeObj=u.createIframe(s,function(t){i.emit("close",1006,"Unable to load an iframe ("+t+")"),i.close()}),this.onmessageCallback=this._message.bind(this),l.attachEvent("message",this.onmessageCallback)}var r=t("inherits"),i=t("json3"),o=t("events").EventEmitter,s=t("../version"),a=t("../utils/url"),u=t("../utils/iframe"),l=t("../utils/event"),c=t("../utils/random");r(n,o),n.prototype.close=function(){if(this.removeAllListeners(),this.iframeObj){l.detachEvent("message",this.onmessageCallback);try{this.postMessage("c")}catch(t){}this.iframeObj.cleanup(),this.iframeObj=null,this.onmessageCallback=this.iframeObj=null}},n.prototype._message=function(t){if(a.isOriginEqual(t.origin,this.origin)){var e;try{e=i.parse(t.data)}catch(n){return}if(e.windowId===this.windowId)switch(e.type){case"s":this.iframeObj.loaded(),this.postMessage("s",i.stringify([s,this.transport,this.transUrl,this.baseUrl]));break;case"t":this.emit("message",e.data);break;case"c":var r;try{r=i.parse(e.data)}catch(n){return}this.emit("close",r[0],r[1]),this.close()}}},n.prototype.postMessage=function(t,e){this.iframeObj.post(i.stringify({windowId:this.windowId,type:t,data:e||""}),this.origin)},n.prototype.send=function(t){this.postMessage("m",t)},n.enabled=function(){return u.iframeEnabled},n.transportName="iframe",n.roundTrips=2,e.exports=n},{"../utils/event":46,"../utils/iframe":47,"../utils/random":50,"../utils/url":52,"../version":53,debug:void 0,events:3,inherits:54,json3:55}],23:[function(t,e){(function(n){"use strict";function r(t){if(!r.enabled())throw new Error("Transport created when disabled");o.call(this,t,"/jsonp",a,s)}var i=t("inherits"),o=t("./lib/sender-receiver"),s=t("./receiver/jsonp"),a=t("./sender/jsonp");i(r,o),r.enabled=function(){return!!n.document},r.transportName="jsonp-polling",r.roundTrips=1,r.needBody=!0,e.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./lib/sender-receiver":28,"./receiver/jsonp":31,"./sender/jsonp":33,inherits:54}],24:[function(t,e){"use strict";function n(t){return function(e,n,r){var i={};"string"==typeof n&&(i.headers={"Content-type":"text/plain"});var s=o.addPath(e,"/xhr_send"),a=new t("POST",s,n,i);return a.once("finish",function(t){return a=null,200!==t&&204!==t?r(new Error("http status "+t)):void r()}),function(){a.close(),a=null;var t=new Error("Aborted");t.code=1e3,r(t)}}}function r(t,e,r,i){s.call(this,t,e,n(i),r,i)}var i=t("inherits"),o=t("../../utils/url"),s=t("./sender-receiver");i(r,s),e.exports=r},{"../../utils/url":52,"./sender-receiver":28,debug:void 0,inherits:54}],25:[function(t,e){"use strict";function n(t,e){i.call(this),this.sendBuffer=[],this.sender=e,this.url=t}var r=t("inherits"),i=t("events").EventEmitter;r(n,i),n.prototype.send=function(t){this.sendBuffer.push(t),this.sendStop||this.sendSchedule()},n.prototype.sendScheduleWait=function(){var t,e=this;this.sendStop=function(){e.sendStop=null,clearTimeout(t)},t=setTimeout(function(){e.sendStop=null,e.sendSchedule()},25)},n.prototype.sendSchedule=function(){var t=this;if(this.sendBuffer.length>0){var e="["+this.sendBuffer.join(",")+"]";this.sendStop=this.sender(this.url,e,function(e){t.sendStop=null,e?(t.emit("close",e.code||1006,"Sending error: "+e),t._cleanup()):t.sendScheduleWait()}),this.sendBuffer=[]}},n.prototype._cleanup=function(){this.removeAllListeners()},n.prototype.stop=function(){this._cleanup(),this.sendStop&&(this.sendStop(),this.sendStop=null)},e.exports=n},{debug:void 0,events:3,inherits:54}],26:[function(t,e){(function(n){"use strict";var r=t("inherits"),i=t("../iframe"),o=t("../../utils/object");e.exports=function(t){function e(e,n){i.call(this,t.transportName,e,n)}return r(e,i),e.enabled=function(e,r){if(!n.document)return!1;var s=o.extend({},r);return s.sameOrigin=!0,t.enabled(s)&&i.enabled()},e.transportName="iframe-"+t.transportName,e.needBody=!0,e.roundTrips=i.roundTrips+t.roundTrips-1,e.facadeTransport=t,e}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../utils/object":49,"../iframe":22,inherits:54}],27:[function(t,e){"use strict";function n(t,e,n){i.call(this),this.Receiver=t,this.receiveUrl=e,this.AjaxObject=n,this._scheduleReceiver()}var r=t("inherits"),i=t("events").EventEmitter;r(n,i),n.prototype._scheduleReceiver=function(){var t=this,e=this.poll=new this.Receiver(this.receiveUrl,this.AjaxObject);e.on("message",function(e){t.emit("message",e)}),e.once("close",function(n,r){t.poll=e=null,t.pollIsClosing||("network"===r?t._scheduleReceiver():(t.emit("close",n||1006,r),t.removeAllListeners()))})},n.prototype.abort=function(){this.removeAllListeners(),this.pollIsClosing=!0,this.poll&&this.poll.abort()},e.exports=n},{debug:void 0,events:3,inherits:54}],28:[function(t,e){"use strict";function n(t,e,n,r,a){var u=i.addPath(t,e),l=this;o.call(this,t,n),this.poll=new s(r,u,a),this.poll.on("message",function(t){l.emit("message",t)}),this.poll.once("close",function(t,e){l.poll=null,l.emit("close",t,e),l.close()})}var r=t("inherits"),i=t("../../utils/url"),o=t("./buffered-sender"),s=t("./polling");r(n,o),n.prototype.close=function(){this.removeAllListeners(),this.poll&&(this.poll.abort(),this.poll=null),this.stop()},e.exports=n},{"../../utils/url":52,"./buffered-sender":25,"./polling":27,debug:void 0,inherits:54}],29:[function(t,e){"use strict";function n(t){i.call(this);var e=this,n=this.es=new o(t);n.onmessage=function(t){e.emit("message",decodeURI(t.data))},n.onerror=function(t){var r=2!==n.readyState?"network":"permanent";e._cleanup(),e._close(r)}}var r=t("inherits"),i=t("events").EventEmitter,o=t("eventsource");r(n,i),n.prototype.abort=function(){this._cleanup(),this._close("user")},n.prototype._cleanup=function(){var t=this.es;t&&(t.onmessage=t.onerror=null,t.close(),this.es=null)},n.prototype._close=function(t){var e=this;setTimeout(function(){e.emit("close",null,t),e.removeAllListeners()},200)},e.exports=n},{debug:void 0,events:3,eventsource:18,inherits:54}],30:[function(t,e){(function(n){"use strict";function r(t){a.call(this);var e=this;o.polluteGlobalNamespace(),this.id="a"+u.string(6),t=s.addQuery(t,"c="+decodeURIComponent(o.WPrefix+"."+this.id));var i=r.htmlfileEnabled?o.createHtmlfile:o.createIframe;n[o.WPrefix][this.id]={start:function(){e.iframeObj.loaded()},message:function(t){e.emit("message",t)},stop:function(){e._cleanup(),e._close("network")}},this.iframeObj=i(t,function(){e._cleanup(),e._close("permanent")})}var i=t("inherits"),o=t("../../utils/iframe"),s=t("../../utils/url"),a=t("events").EventEmitter,u=t("../../utils/random");i(r,a),r.prototype.abort=function(){this._cleanup(),this._close("user")},r.prototype._cleanup=function(){this.iframeObj&&(this.iframeObj.cleanup(),this.iframeObj=null),delete n[o.WPrefix][this.id]},r.prototype._close=function(t){this.emit("close",null,t),this.removeAllListeners()},r.htmlfileEnabled=!1;var l=["Active"].concat("Object").join("X");if(l in n)try{r.htmlfileEnabled=!!new n[l]("htmlfile")}catch(c){}r.enabled=r.htmlfileEnabled||o.iframeEnabled,e.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../utils/iframe":47,"../../utils/random":50,"../../utils/url":52,debug:void 0,events:3,inherits:54}],31:[function(t,e){(function(n){"use strict";function r(t){var e=this;l.call(this),i.polluteGlobalNamespace(),this.id="a"+o.string(6);var s=a.addQuery(t,"c="+encodeURIComponent(i.WPrefix+"."+this.id));n[i.WPrefix][this.id]=this._callback.bind(this),this._createScript(s),this.timeoutId=setTimeout(function(){e._abort(new Error("JSONP script loaded abnormally (timeout)"))},r.timeout)}var i=t("../../utils/iframe"),o=t("../../utils/random"),s=t("../../utils/browser"),a=t("../../utils/url"),u=t("inherits"),l=t("events").EventEmitter;u(r,l),r.prototype.abort=function(){if(n[i.WPrefix][this.id]){var t=new Error("JSONP user aborted read");t.code=1e3,this._abort(t)}},r.timeout=35e3,r.scriptErrorTimeout=1e3,r.prototype._callback=function(t){this._cleanup(),this.aborting||(t&&this.emit("message",t),this.emit("close",null,"network"),this.removeAllListeners())},r.prototype._abort=function(t){this._cleanup(),this.aborting=!0,this.emit("close",t.code,t.message),this.removeAllListeners()},r.prototype._cleanup=function(){if(clearTimeout(this.timeoutId),this.script2&&(this.script2.parentNode.removeChild(this.script2),this.script2=null),this.script){var t=this.script;t.parentNode.removeChild(t),t.onreadystatechange=t.onerror=t.onload=t.onclick=null,this.script=null}delete n[i.WPrefix][this.id]},r.prototype._scriptError=function(){var t=this;this.errorTimer||(this.errorTimer=setTimeout(function(){t.loadedOkay||t._abort(new Error("JSONP script loaded abnormally (onerror)"))},r.scriptErrorTimeout))},r.prototype._createScript=function(t){var e,r=this,i=this.script=n.document.createElement("script");if(i.id="a"+o.string(8),i.src=t,i.type="text/javascript",i.charset="UTF-8",i.onerror=this._scriptError.bind(this),i.onload=function(){r._abort(new Error("JSONP script loaded abnormally (onload)"))},i.onreadystatechange=function(){if(/loaded|closed/.test(i.readyState)){if(i&&i.htmlFor&&i.onclick){r.loadedOkay=!0;try{i.onclick()}catch(t){}}i&&r._abort(new Error("JSONP script loaded abnormally (onreadystatechange)"))}},"undefined"==typeof i.async&&n.document.attachEvent)if(s.isOpera())e=this.script2=n.document.createElement("script"),e.text="try{var a = document.getElementById('"+i.id+"'); if(a)a.onerror();}catch(x){};",i.async=e.async=!1;
else{try{i.htmlFor=i.id,i.event="onclick"}catch(a){}i.async=!0}"undefined"!=typeof i.async&&(i.async=!0);var u=n.document.getElementsByTagName("head")[0];u.insertBefore(i,u.firstChild),e&&u.insertBefore(e,u.firstChild)},e.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../utils/browser":44,"../../utils/iframe":47,"../../utils/random":50,"../../utils/url":52,debug:void 0,events:3,inherits:54}],32:[function(t,e){"use strict";function n(t,e){i.call(this);var n=this;this.bufferPosition=0,this.xo=new e("POST",t,null),this.xo.on("chunk",this._chunkHandler.bind(this)),this.xo.once("finish",function(t,e){n._chunkHandler(t,e),n.xo=null;var r=200===t?"network":"permanent";n.emit("close",null,r),n._cleanup()})}var r=t("inherits"),i=t("events").EventEmitter;r(n,i),n.prototype._chunkHandler=function(t,e){if(200===t&&e)for(var n=-1;;this.bufferPosition+=n+1){var r=e.slice(this.bufferPosition);if(n=r.indexOf("\n"),-1===n)break;var i=r.slice(0,n);i&&this.emit("message",i)}},n.prototype._cleanup=function(){this.removeAllListeners()},n.prototype.abort=function(){this.xo&&(this.xo.close(),this.emit("close",null,"user"),this.xo=null),this._cleanup()},e.exports=n},{debug:void 0,events:3,inherits:54}],33:[function(t,e){(function(n){"use strict";function r(t){try{return n.document.createElement('<iframe name="'+t+'">')}catch(e){var r=n.document.createElement("iframe");return r.name=t,r}}function i(){o=n.document.createElement("form"),o.style.display="none",o.style.position="absolute",o.method="POST",o.enctype="application/x-www-form-urlencoded",o.acceptCharset="UTF-8",s=n.document.createElement("textarea"),s.name="d",o.appendChild(s),n.document.body.appendChild(o)}var o,s,a=t("../../utils/random"),u=t("../../utils/url");e.exports=function(t,e,n){o||i();var l="a"+a.string(8);o.target=l,o.action=u.addQuery(u.addPath(t,"/jsonp_send"),"i="+l);var c=r(l);c.id=l,c.style.display="none",o.appendChild(c);try{s.value=e}catch(f){}o.submit();var h=function(t){c.onerror&&(c.onreadystatechange=c.onerror=c.onload=null,setTimeout(function(){c.parentNode.removeChild(c),c=null},500),s.value="",n(t))};return c.onerror=function(){h()},c.onload=function(){h()},c.onreadystatechange=function(t){"complete"===c.readyState&&h()},function(){h(new Error("Aborted"))}}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../utils/random":50,"../../utils/url":52,debug:void 0}],34:[function(t,e){(function(n){"use strict";function r(t,e,n){var r=this;i.call(this),setTimeout(function(){r._start(t,e,n)},0)}var i=t("events").EventEmitter,o=t("inherits"),s=t("../../utils/event"),a=t("../../utils/browser"),u=t("../../utils/url");o(r,i),r.prototype._start=function(t,e,r){var i=this,o=new n.XDomainRequest;e=u.addQuery(e,"t="+ +new Date),o.onerror=function(){i._error()},o.ontimeout=function(){i._error()},o.onprogress=function(){i.emit("chunk",200,o.responseText)},o.onload=function(){i.emit("finish",200,o.responseText),i._cleanup(!1)},this.xdr=o,this.unloadRef=s.unloadAdd(function(){i._cleanup(!0)});try{this.xdr.open(t,e),this.timeout&&(this.xdr.timeout=this.timeout),this.xdr.send(r)}catch(a){this._error()}},r.prototype._error=function(){this.emit("finish",0,""),this._cleanup(!1)},r.prototype._cleanup=function(t){if(this.xdr){if(this.removeAllListeners(),s.unloadDel(this.unloadRef),this.xdr.ontimeout=this.xdr.onerror=this.xdr.onprogress=this.xdr.onload=null,t)try{this.xdr.abort()}catch(e){}this.unloadRef=this.xdr=null}},r.prototype.close=function(){this._cleanup(!0)},r.enabled=!(!n.XDomainRequest||!a.hasDomain()),e.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../utils/browser":44,"../../utils/event":46,"../../utils/url":52,debug:void 0,events:3,inherits:54}],35:[function(t,e){"use strict";function n(t,e,n,r){i.call(this,t,e,n,r)}var r=t("inherits"),i=t("../driver/xhr");r(n,i),n.enabled=i.enabled&&i.supportsCORS,e.exports=n},{"../driver/xhr":17,inherits:54}],36:[function(t,e){"use strict";function n(){var t=this;r.call(this),this.to=setTimeout(function(){t.emit("finish",200,"{}")},n.timeout)}var r=t("events").EventEmitter,i=t("inherits");i(n,r),n.prototype.close=function(){clearTimeout(this.to)},n.timeout=2e3,e.exports=n},{events:3,inherits:54}],37:[function(t,e){"use strict";function n(t,e,n){i.call(this,t,e,n,{noCredentials:!0})}var r=t("inherits"),i=t("../driver/xhr");r(n,i),n.enabled=i.enabled,e.exports=n},{"../driver/xhr":17,inherits:54}],38:[function(t,e){"use strict";function n(t){if(!n.enabled())throw new Error("Transport created when disabled");s.call(this);var e=this,o=i.addPath(t,"/websocket");o="https"===o.slice(0,5)?"wss"+o.slice(5):"ws"+o.slice(4),this.url=o,this.ws=new a(this.url),this.ws.onmessage=function(t){e.emit("message",t.data)},this.unloadRef=r.unloadAdd(function(){e.ws.close()}),this.ws.onclose=function(t){e.emit("close",t.code,t.reason),e._cleanup()},this.ws.onerror=function(t){e.emit("close",1006,"WebSocket connection broken"),e._cleanup()}}var r=t("../utils/event"),i=t("../utils/url"),o=t("inherits"),s=t("events").EventEmitter,a=t("./driver/websocket");o(n,s),n.prototype.send=function(t){var e="["+t+"]";this.ws.send(e)},n.prototype.close=function(){this.ws&&this.ws.close(),this._cleanup()},n.prototype._cleanup=function(){var t=this.ws;t&&(t.onmessage=t.onclose=t.onerror=null),r.unloadDel(this.unloadRef),this.unloadRef=this.ws=null,this.removeAllListeners()},n.enabled=function(){return!!a},n.transportName="websocket",n.roundTrips=2,e.exports=n},{"../utils/event":46,"../utils/url":52,"./driver/websocket":19,debug:void 0,events:3,inherits:54}],39:[function(t,e){"use strict";function n(t){if(!a.enabled)throw new Error("Transport created when disabled");i.call(this,t,"/xhr",s,a)}var r=t("inherits"),i=t("./lib/ajax-based"),o=t("./xdr-streaming"),s=t("./receiver/xhr"),a=t("./sender/xdr");r(n,i),n.enabled=o.enabled,n.transportName="xdr-polling",n.roundTrips=2,e.exports=n},{"./lib/ajax-based":24,"./receiver/xhr":32,"./sender/xdr":34,"./xdr-streaming":40,inherits:54}],40:[function(t,e){"use strict";function n(t){if(!s.enabled)throw new Error("Transport created when disabled");i.call(this,t,"/xhr_streaming",o,s)}var r=t("inherits"),i=t("./lib/ajax-based"),o=t("./receiver/xhr"),s=t("./sender/xdr");r(n,i),n.enabled=function(t){return t.cookie_needed||t.nullOrigin?!1:s.enabled&&t.sameScheme},n.transportName="xdr-streaming",n.roundTrips=2,e.exports=n},{"./lib/ajax-based":24,"./receiver/xhr":32,"./sender/xdr":34,inherits:54}],41:[function(t,e){"use strict";function n(t){if(!a.enabled&&!s.enabled)throw new Error("Transport created when disabled");i.call(this,t,"/xhr",o,s)}var r=t("inherits"),i=t("./lib/ajax-based"),o=t("./receiver/xhr"),s=t("./sender/xhr-cors"),a=t("./sender/xhr-local");r(n,i),n.enabled=function(t){return t.nullOrigin?!1:a.enabled&&t.sameOrigin?!0:s.enabled},n.transportName="xhr-polling",n.roundTrips=2,e.exports=n},{"./lib/ajax-based":24,"./receiver/xhr":32,"./sender/xhr-cors":35,"./sender/xhr-local":37,inherits:54}],42:[function(t,e){(function(n){"use strict";function r(t){if(!u.enabled&&!a.enabled)throw new Error("Transport created when disabled");o.call(this,t,"/xhr_streaming",s,a)}var i=t("inherits"),o=t("./lib/ajax-based"),s=t("./receiver/xhr"),a=t("./sender/xhr-cors"),u=t("./sender/xhr-local"),l=t("../utils/browser");i(r,o),r.enabled=function(t){return t.nullOrigin?!1:l.isOpera()?!1:a.enabled},r.transportName="xhr-streaming",r.roundTrips=2,r.needBody=!!n.document,e.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../utils/browser":44,"./lib/ajax-based":24,"./receiver/xhr":32,"./sender/xhr-cors":35,"./sender/xhr-local":37,inherits:54}],43:[function(t,e){(function(t){"use strict";e.exports.randomBytes=t.crypto&&t.crypto.getRandomValues?function(e){var n=new Uint8Array(e);return t.crypto.getRandomValues(n),n}:function(t){for(var e=new Array(t),n=0;t>n;n++)e[n]=Math.floor(256*Math.random());return e}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],44:[function(t,e){(function(t){"use strict";e.exports={isOpera:function(){return t.navigator&&/opera/i.test(t.navigator.userAgent)},isKonqueror:function(){return t.navigator&&/konqueror/i.test(t.navigator.userAgent)},hasDomain:function(){if(!t.document)return!0;try{return!!t.document.domain}catch(e){return!1}}}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],45:[function(t,e){"use strict";var n,r=t("json3"),i=/[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g,o=function(t){var e,n={},r=[];for(e=0;65536>e;e++)r.push(String.fromCharCode(e));return t.lastIndex=0,r.join("").replace(t,function(t){return n[t]="\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4),""}),t.lastIndex=0,n};e.exports={quote:function(t){var e=r.stringify(t);return i.lastIndex=0,i.test(e)?(n||(n=o(i)),e.replace(i,function(t){return n[t]})):e}}},{json3:55}],46:[function(t,e){(function(n){"use strict";var r=t("./random"),i={},o=!1,s=n.chrome&&n.chrome.app&&n.chrome.app.runtime;e.exports={attachEvent:function(t,e){"undefined"!=typeof n.addEventListener?n.addEventListener(t,e,!1):n.document&&n.attachEvent&&(n.document.attachEvent("on"+t,e),n.attachEvent("on"+t,e))},detachEvent:function(t,e){"undefined"!=typeof n.addEventListener?n.removeEventListener(t,e,!1):n.document&&n.detachEvent&&(n.document.detachEvent("on"+t,e),n.detachEvent("on"+t,e))},unloadAdd:function(t){if(s)return null;var e=r.string(8);return i[e]=t,o&&setTimeout(this.triggerUnloadCallbacks,0),e},unloadDel:function(t){t in i&&delete i[t]},triggerUnloadCallbacks:function(){for(var t in i)i[t](),delete i[t]}};var a=function(){o||(o=!0,e.exports.triggerUnloadCallbacks())};s||e.exports.attachEvent("unload",a)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./random":50}],47:[function(t,e){(function(n){"use strict";var r=t("./event"),i=t("json3"),o=t("./browser");e.exports={WPrefix:"_jp",currentWindowId:null,polluteGlobalNamespace:function(){e.exports.WPrefix in n||(n[e.exports.WPrefix]={})},postMessage:function(t,r){n.parent!==n&&n.parent.postMessage(i.stringify({windowId:e.exports.currentWindowId,type:t,data:r||""}),"*")},createIframe:function(t,e){var i,o,s=n.document.createElement("iframe"),a=function(){clearTimeout(i);try{s.onload=null}catch(t){}s.onerror=null},u=function(){s&&(a(),setTimeout(function(){s&&s.parentNode.removeChild(s),s=null},0),r.unloadDel(o))},l=function(t){s&&(u(),e(t))},c=function(t,e){try{setTimeout(function(){s&&s.contentWindow&&s.contentWindow.postMessage(t,e)},0)}catch(n){}};return s.src=t,s.style.display="none",s.style.position="absolute",s.onerror=function(){l("onerror")},s.onload=function(){clearTimeout(i),i=setTimeout(function(){l("onload timeout")},2e3)},n.document.body.appendChild(s),i=setTimeout(function(){l("timeout")},15e3),o=r.unloadAdd(u),{post:c,cleanup:u,loaded:a}},createHtmlfile:function(t,i){var o,s,a,u=["Active"].concat("Object").join("X"),l=new n[u]("htmlfile"),c=function(){clearTimeout(o),a.onerror=null},f=function(){l&&(c(),r.unloadDel(s),a.parentNode.removeChild(a),a=l=null,CollectGarbage())},h=function(t){l&&(f(),i(t))},d=function(t,e){try{setTimeout(function(){a&&a.contentWindow&&a.contentWindow.postMessage(t,e)},0)}catch(n){}};l.open(),l.write('<html><script>document.domain="'+n.document.domain+'";</script></html>'),l.close(),l.parentWindow[e.exports.WPrefix]=n[e.exports.WPrefix];var p=l.createElement("div");return l.body.appendChild(p),a=l.createElement("iframe"),p.appendChild(a),a.src=t,a.onerror=function(){h("onerror")},o=setTimeout(function(){h("timeout")},15e3),s=r.unloadAdd(f),{post:d,cleanup:f,loaded:c}}},e.exports.iframeEnabled=!1,n.document&&(e.exports.iframeEnabled=("function"==typeof n.postMessage||"object"==typeof n.postMessage)&&!o.isKonqueror())}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./browser":44,"./event":46,debug:void 0,json3:55}],48:[function(t,e){(function(t){"use strict";var n={};["log","debug","warn"].forEach(function(e){var r=t.console&&t.console[e]&&t.console[e].apply;n[e]=r?function(){return t.console[e].apply(t.console,arguments)}:"log"===e?function(){}:n.log}),e.exports=n}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],49:[function(t,e){"use strict";e.exports={isObject:function(t){var e=typeof t;return"function"===e||"object"===e&&!!t},extend:function(t){if(!this.isObject(t))return t;for(var e,n,r=1,i=arguments.length;i>r;r++){e=arguments[r];for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t}}},{}],50:[function(t,e){"use strict";var n=t("crypto"),r="abcdefghijklmnopqrstuvwxyz012345";e.exports={string:function(t){for(var e=r.length,i=n.randomBytes(t),o=[],s=0;t>s;s++)o.push(r.substr(i[s]%e,1));return o.join("")},number:function(t){return Math.floor(Math.random()*t)},numberString:function(t){var e=(""+(t-1)).length,n=new Array(e+1).join("0");return(n+this.number(t)).slice(-e)}}},{crypto:43}],51:[function(t,e){"use strict";e.exports=function(t){return{filterToEnabled:function(e,n){var r={main:[],facade:[]};return e?"string"==typeof e&&(e=[e]):e=[],t.forEach(function(t){t&&("websocket"!==t.transportName||n.websocket!==!1)&&(e.length&&-1===e.indexOf(t.transportName)||t.enabled(n)&&(r.main.push(t),t.facadeTransport&&r.facade.push(t.facadeTransport)))}),r}}}},{debug:void 0}],52:[function(t,e){"use strict";var n=t("url-parse");e.exports={getOrigin:function(t){if(!t)return null;var e=new n(t);if("file:"===e.protocol)return null;var r=e.port;return r||(r="https:"===e.protocol?"443":"80"),e.protocol+"//"+e.hostname+":"+r},isOriginEqual:function(t,e){var n=this.getOrigin(t)===this.getOrigin(e);return n},isSchemeEqual:function(t,e){return t.split(":")[0]===e.split(":")[0]},addPath:function(t,e){var n=t.split("?");return n[0]+e+(n[1]?"?"+n[1]:"")},addQuery:function(t,e){return t+(-1===t.indexOf("?")?"?"+e:"&"+e)}}},{debug:void 0,"url-parse":56}],53:[function(t,e){e.exports="1.0.3"},{}],54:[function(t,e){e.exports="function"==typeof Object.create?function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},{}],55:[function(e,n,r){(function(e){(function(){function i(t,e){function n(t){if(n[t]!==m)return n[t];var i;if("bug-string-char-index"==t)i="a"!="a"[0];else if("json"==t)i=n("json-stringify")&&n("json-parse");else{var s,a='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';if("json-stringify"==t){var u=e.stringify,c="function"==typeof u&&g;if(c){(s=function(){return 1}).toJSON=s;try{c="0"===u(0)&&"0"===u(new r)&&'""'==u(new o)&&u(b)===m&&u(m)===m&&u()===m&&"1"===u(s)&&"[1]"==u([s])&&"[null]"==u([m])&&"null"==u(null)&&"[null,null,null]"==u([m,b,null])&&u({a:[s,!0,!1,null,"\x00\b\n\f\r	"]})==a&&"1"===u(null,s)&&"[\n 1,\n 2\n]"==u([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==u(new l(-864e13))&&'"+275760-09-13T00:00:00.000Z"'==u(new l(864e13))&&'"-000001-01-01T00:00:00.000Z"'==u(new l(-621987552e5))&&'"1969-12-31T23:59:59.999Z"'==u(new l(-1))}catch(f){c=!1}}i=c}if("json-parse"==t){var h=e.parse;if("function"==typeof h)try{if(0===h("0")&&!h(!1)){s=h(a);var d=5==s.a.length&&1===s.a[0];if(d){try{d=!h('"	"')}catch(f){}if(d)try{d=1!==h("01")}catch(f){}if(d)try{d=1!==h("1.")}catch(f){}}}}catch(f){d=!1}i=d}}return n[t]=!!i}t||(t=u.Object()),e||(e=u.Object());var r=t.Number||u.Number,o=t.String||u.String,a=t.Object||u.Object,l=t.Date||u.Date,c=t.SyntaxError||u.SyntaxError,f=t.TypeError||u.TypeError,h=t.Math||u.Math,d=t.JSON||u.JSON;"object"==typeof d&&d&&(e.stringify=d.stringify,e.parse=d.parse);var p,v,m,y=a.prototype,b=y.toString,g=new l(-0xc782b5b800cec);try{g=-109252==g.getUTCFullYear()&&0===g.getUTCMonth()&&1===g.getUTCDate()&&10==g.getUTCHours()&&37==g.getUTCMinutes()&&6==g.getUTCSeconds()&&708==g.getUTCMilliseconds()}catch(w){}if(!n("json")){var x="[object Function]",_="[object Date]",E="[object Number]",j="[object String]",T="[object Array]",S="[object Boolean]",O=n("bug-string-char-index");if(!g)var C=h.floor,A=[0,31,59,90,120,151,181,212,243,273,304,334],N=function(t,e){return A[e]+365*(t-1970)+C((t-1969+(e=+(e>1)))/4)-C((t-1901+e)/100)+C((t-1601+e)/400)};if((p=y.hasOwnProperty)||(p=function(t){var e,n={};return(n.__proto__=null,n.__proto__={toString:1},n).toString!=b?p=function(t){var e=this.__proto__,n=t in(this.__proto__=null,this);return this.__proto__=e,n}:(e=n.constructor,p=function(t){var n=(this.constructor||e).prototype;return t in this&&!(t in n&&this[t]===n[t])}),n=null,p.call(this,t)}),v=function(t,e){var n,r,i,o=0;(n=function(){this.valueOf=0}).prototype.valueOf=0,r=new n;for(i in r)p.call(r,i)&&o++;return n=r=null,o?v=2==o?function(t,e){var n,r={},i=b.call(t)==x;for(n in t)i&&"prototype"==n||p.call(r,n)||!(r[n]=1)||!p.call(t,n)||e(n)}:function(t,e){var n,r,i=b.call(t)==x;for(n in t)i&&"prototype"==n||!p.call(t,n)||(r="constructor"===n)||e(n);(r||p.call(t,n="constructor"))&&e(n)}:(r=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"],v=function(t,e){var n,i,o=b.call(t)==x,a=!o&&"function"!=typeof t.constructor&&s[typeof t.hasOwnProperty]&&t.hasOwnProperty||p;for(n in t)o&&"prototype"==n||!a.call(t,n)||e(n);for(i=r.length;n=r[--i];a.call(t,n)&&e(n));}),v(t,e)},!n("json-stringify")){var k={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},I="000000",P=function(t,e){return(I+(e||0)).slice(-t)},L="\\u00",R=function(t){for(var e='"',n=0,r=t.length,i=!O||r>10,o=i&&(O?t.split(""):t);r>n;n++){var s=t.charCodeAt(n);switch(s){case 8:case 9:case 10:case 12:case 13:case 34:case 92:e+=k[s];break;default:if(32>s){e+=L+P(2,s.toString(16));break}e+=i?o[n]:t.charAt(n)}}return e+'"'},U=function(t,e,n,r,i,o,s){var a,u,l,c,h,d,y,g,w,x,O,A,k,I,L,M;try{a=e[t]}catch(q){}if("object"==typeof a&&a)if(u=b.call(a),u!=_||p.call(a,"toJSON"))"function"==typeof a.toJSON&&(u!=E&&u!=j&&u!=T||p.call(a,"toJSON"))&&(a=a.toJSON(t));else if(a>-1/0&&1/0>a){if(N){for(h=C(a/864e5),l=C(h/365.2425)+1970-1;N(l+1,0)<=h;l++);for(c=C((h-N(l,0))/30.42);N(l,c+1)<=h;c++);h=1+h-N(l,c),d=(a%864e5+864e5)%864e5,y=C(d/36e5)%24,g=C(d/6e4)%60,w=C(d/1e3)%60,x=d%1e3}else l=a.getUTCFullYear(),c=a.getUTCMonth(),h=a.getUTCDate(),y=a.getUTCHours(),g=a.getUTCMinutes(),w=a.getUTCSeconds(),x=a.getUTCMilliseconds();a=(0>=l||l>=1e4?(0>l?"-":"+")+P(6,0>l?-l:l):P(4,l))+"-"+P(2,c+1)+"-"+P(2,h)+"T"+P(2,y)+":"+P(2,g)+":"+P(2,w)+"."+P(3,x)+"Z"}else a=null;if(n&&(a=n.call(e,t,a)),null===a)return"null";if(u=b.call(a),u==S)return""+a;if(u==E)return a>-1/0&&1/0>a?""+a:"null";if(u==j)return R(""+a);if("object"==typeof a){for(I=s.length;I--;)if(s[I]===a)throw f();if(s.push(a),O=[],L=o,o+=i,u==T){for(k=0,I=a.length;I>k;k++)A=U(k,a,n,r,i,o,s),O.push(A===m?"null":A);M=O.length?i?"[\n"+o+O.join(",\n"+o)+"\n"+L+"]":"["+O.join(",")+"]":"[]"}else v(r||a,function(t){var e=U(t,a,n,r,i,o,s);e!==m&&O.push(R(t)+":"+(i?" ":"")+e)}),M=O.length?i?"{\n"+o+O.join(",\n"+o)+"\n"+L+"}":"{"+O.join(",")+"}":"{}";return s.pop(),M}};e.stringify=function(t,e,n){var r,i,o,a;if(s[typeof e]&&e)if((a=b.call(e))==x)i=e;else if(a==T){o={};for(var u,l=0,c=e.length;c>l;u=e[l++],a=b.call(u),(a==j||a==E)&&(o[u]=1));}if(n)if((a=b.call(n))==E){if((n-=n%1)>0)for(r="",n>10&&(n=10);r.length<n;r+=" ");}else a==j&&(r=n.length<=10?n:n.slice(0,10));return U("",(u={},u[""]=t,u),i,o,r,"",[])}}if(!n("json-parse")){var M,q,D=o.fromCharCode,W={92:"\\",34:'"',47:"/",98:"\b",116:"	",110:"\n",102:"\f",114:"\r"},J=function(){throw M=q=null,c()},B=function(){for(var t,e,n,r,i,o=q,s=o.length;s>M;)switch(i=o.charCodeAt(M)){case 9:case 10:case 13:case 32:M++;break;case 123:case 125:case 91:case 93:case 58:case 44:return t=O?o.charAt(M):o[M],M++,t;case 34:for(t="@",M++;s>M;)if(i=o.charCodeAt(M),32>i)J();else if(92==i)switch(i=o.charCodeAt(++M)){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:t+=W[i],M++;break;case 117:for(e=++M,n=M+4;n>M;M++)i=o.charCodeAt(M),i>=48&&57>=i||i>=97&&102>=i||i>=65&&70>=i||J();t+=D("0x"+o.slice(e,M));break;default:J()}else{if(34==i)break;for(i=o.charCodeAt(M),e=M;i>=32&&92!=i&&34!=i;)i=o.charCodeAt(++M);t+=o.slice(e,M)}if(34==o.charCodeAt(M))return M++,t;J();default:if(e=M,45==i&&(r=!0,i=o.charCodeAt(++M)),i>=48&&57>=i){for(48==i&&(i=o.charCodeAt(M+1),i>=48&&57>=i)&&J(),r=!1;s>M&&(i=o.charCodeAt(M),i>=48&&57>=i);M++);if(46==o.charCodeAt(M)){for(n=++M;s>n&&(i=o.charCodeAt(n),i>=48&&57>=i);n++);n==M&&J(),M=n}if(i=o.charCodeAt(M),101==i||69==i){for(i=o.charCodeAt(++M),(43==i||45==i)&&M++,n=M;s>n&&(i=o.charCodeAt(n),i>=48&&57>=i);n++);n==M&&J(),M=n}return+o.slice(e,M)}if(r&&J(),"true"==o.slice(M,M+4))return M+=4,!0;if("false"==o.slice(M,M+5))return M+=5,!1;if("null"==o.slice(M,M+4))return M+=4,null;J()}return"$"},G=function(t){var e,n;if("$"==t&&J(),"string"==typeof t){if("@"==(O?t.charAt(0):t[0]))return t.slice(1);if("["==t){for(e=[];t=B(),"]"!=t;n||(n=!0))n&&(","==t?(t=B(),"]"==t&&J()):J()),","==t&&J(),e.push(G(t));return e}if("{"==t){for(e={};t=B(),"}"!=t;n||(n=!0))n&&(","==t?(t=B(),"}"==t&&J()):J()),(","==t||"string"!=typeof t||"@"!=(O?t.charAt(0):t[0])||":"!=B())&&J(),e[t.slice(1)]=G(B());return e}J()}return t},F=function(t,e,n){var r=H(t,e,n);r===m?delete t[e]:t[e]=r},H=function(t,e,n){var r,i=t[e];if("object"==typeof i&&i)if(b.call(i)==T)for(r=i.length;r--;)F(i,r,n);else v(i,function(t){F(i,t,n)});return n.call(t,e,i)};e.parse=function(t,e){var n,r;return M=0,q=""+t,n=G(B()),"$"!=B()&&J(),M=q=null,e&&b.call(e)==x?H((r={},r[""]=n,r),"",e):n}}}return e.runInContext=i,e}var o="function"==typeof t&&t.amd,s={"function":!0,object:!0},a=s[typeof r]&&r&&!r.nodeType&&r,u=s[typeof window]&&window||this,l=a&&s[typeof n]&&n&&!n.nodeType&&"object"==typeof e&&e;if(!l||l.global!==l&&l.window!==l&&l.self!==l||(u=l),a&&!o)i(u,a);else{var c=u.JSON,f=u.JSON3,h=!1,d=i(u,u.JSON3={noConflict:function(){return h||(h=!0,u.JSON=c,u.JSON3=f,c=f=null),d}});u.JSON={parse:d.parse,stringify:d.stringify}}o&&t(function(){return d})}).call(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],56:[function(t,e){"use strict";function n(t,e,u){if(!(this instanceof n))return new n(t,e,u);var l,c,f,h,d=s.test(t),p=typeof e,v=this,m=0;for("object"!==p&&"string"!==p&&(u=e,e=null),u&&"function"!=typeof u&&(u=o.parse),e=i(e);m<a.length;m++)c=a[m],l=c[0],h=c[1],l!==l?v[h]=t:"string"==typeof l?~(f=t.indexOf(l))&&("number"==typeof c[2]?(v[h]=t.slice(0,f),t=t.slice(f+c[2])):(v[h]=t.slice(f),t=t.slice(0,f))):(f=l.exec(t))&&(v[h]=f[1],t=t.slice(0,t.length-f[0].length)),v[h]=v[h]||(c[3]||"port"===h&&d?e[h]||"":""),c[4]&&(v[h]=v[h].toLowerCase());u&&(v.query=u(v.query)),r(v.port,v.protocol)||(v.host=v.hostname,v.port=""),v.username=v.password="",v.auth&&(c=v.auth.split(":"),v.username=c[0]||"",v.password=c[1]||""),v.href=v.toString()}var r=t("requires-port"),i=t("./lolcation"),o=t("querystringify"),s=/^\/(?!\/)/,a=[["#","hash"],["?","query"],["//","protocol",2,1,1],["/","pathname"],["@","auth",1],[0/0,"host",void 0,1,1],[/\:(\d+)$/,"port"],[0/0,"hostname",void 0,1,1]];n.prototype.set=function(t,e,n){var i=this;return"query"===t?("string"==typeof e&&(e=(n||o.parse)(e)),i[t]=e):"port"===t?(i[t]=e,r(e,i.protocol)?e&&(i.host=i.hostname+":"+e):(i.host=i.hostname,i[t]="")):"hostname"===t?(i[t]=e,i.port&&(e+=":"+i.port),i.host=e):"host"===t?(i[t]=e,/\:\d+/.test(e)&&(e=e.split(":"),i.hostname=e[0],i.port=e[1])):i[t]=e,i.href=i.toString(),i},n.prototype.toString=function(t){t&&"function"==typeof t||(t=o.stringify);var e,n=this,r=n.protocol+"//";return n.username&&(r+=n.username,n.password&&(r+=":"+n.password),r+="@"),r+=n.hostname,n.port&&(r+=":"+n.port),r+=n.pathname,n.query&&(e="object"==typeof n.query?t(n.query):n.query,r+=("?"===e.charAt(0)?"":"?")+e),n.hash&&(r+=n.hash),r},n.qs=o,n.location=i,e.exports=n},{"./lolcation":57,querystringify:58,"requires-port":59}],57:[function(t,e){(function(n){"use strict";var r,i={hash:1,query:1};e.exports=function(e){e=e||n.location||{},r=r||t("./");var o,s={},a=typeof e;if("blob:"===e.protocol)s=new r(unescape(e.pathname),{});else if("string"===a){s=new r(e,{});for(o in i)delete s[o]}else if("object"===a)for(o in e)o in i||(s[o]=e[o]);return s}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./":56}],58:[function(t,e,n){"use strict";function r(t){for(var e,n=/([^=?&]+)=([^&]*)/g,r={};e=n.exec(t);r[decodeURIComponent(e[1])]=decodeURIComponent(e[2]));return r}function i(t,e){e=e||"";var n=[];"string"!=typeof e&&(e="?");for(var r in t)o.call(t,r)&&n.push(encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return n.length?e+n.join("&"):""}var o=Object.prototype.hasOwnProperty;n.stringify=i,n.parse=r},{}],59:[function(t,e){"use strict";e.exports=function(t,e){if(e=e.split(":")[0],t=+t,!t)return!1;switch(e){case"http":case"ws":return 80!==t;case"https":case"wss":return 443!==t;case"ftp":return 22!==t;case"gopher":return 70!==t;case"file":return!1}return 0!==t}},{}]},{},[1])(1)});



faZepto = Zepto;

if (detection.is.pc && window.top !== window.self) {
	var keydownFn = function(e) {
		// space and arrow keys
		if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
			e.preventDefault();
		}
	};
	window.removeEventListener("keydown", keydownFn, false);
	window.addEventListener("keydown", keydownFn, false);
}




fg_api.prototype.adsModule = function() {
	var self = this,
		M;

	function module() {
		this.closeCallback = function() {};
		// flag if the last ad request was filled
		this.adDidLoad = false;
		// time in millis when the last ad was shown
		this.lastAdCall = +self.now();
	}

	module.prototype.init = function() {
		self.config.ads = faZepto.extend({
			"off": (self.config.gameParams.ad_type === "off"),
			"show_initial": false,
			"show_video": false
		}, self.config.ads);

		if (window.famobi_env === "vp") {
			self.config.ads.show_initial = false;
		}

		if (!M.isEnabled()) {
			M.provider = "none";
		} else {
			M.provider = self.config.ads.provider;
		}

		M.adcount = 0;
		M.floodProtectionMap = {};
		M.show_initial = self.config.ads.show_initial && !self.config.ads.off;
		M.show_video = self.config.ads.show_video || detection.is.pc;
		M.show_video_initial = self.config.ads.show_video_initial;

		switch (M.provider) {
			case 'a4g':
			case 'aerserv':
			case 'redpm':
			case 'dfp':
				// halt the loading of the game until showAd() callback is fired.
				self.game.setWaiting(M.show_initial);

				faZepto.getScript("https://imasdk.googleapis.com/js/sdkloader/ima3.js",
					sdkLoadedCallback,
					function() {
						sdkLoadedCallback();
						self.tracking.trackEvent("AdBlocker event", "DFP", famobi_gameID);
					});

				M.dfp_ad_unit_code = '/37336410/InGameInterstitial//' + self.config.aid + '//d0';

				if (window.famobi_env === "vp") {
					M.dfp_ad_unit_code = '/37336410/InVideo//' + self.config.aid;
				}
				break;
			case 'none':
				self.config.ads.off = true;
			case 'housead':
			case 'matched_content':
			case 'blocker':
			case 'sulvo':
			default:
				// no external scripts neccessary
				if (typeof sdkLoadedCallback == "function") {
					sdkLoadedCallback();
				}
				break;
		}

		function sdkLoadedCallback() {
			if (typeof google != "undefined" && google.ima) {
				google.ima.settings.setLocale(self.gametranslation.getNavigatorLanguage());

				google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED);

				if (window.famobi_env === "vp") {
					var options = {
						id: 'fa-video',
						showCountdown: false,
						adTagUrl: M.getAdTagUrl()
					};

					// This must be called before player.play() below.
					self.video.player.ima(options);
				}
			}

			var showInitialAd = function() {
				if (M.show_initial) {
					M.forceAd();
				}
			};

			if (M.provider === 'dfp') {
				self.lsg.ready().then(showInitialAd, showInitialAd);
			} else if (M.provider === 'sulvo') {
				M.forceAd();
			} else {
				showInitialAd();
			}
		}
	};

	module.prototype.showClick2PlayOverlay = function(callback, force) {
		if (M.playBtnContainer) {
			if (M.playBtnContainer.parentElement) {
				M.playBtnContainer.parentElement.removeChild(M.playBtnContainer);
			}
		}

		if (M.delayNextAdModal(force)) {
			M.fireAdCallback();
			return false;
		}

		var friendly_name = "";

		switch (window.famobi_gameID) {
			case "embed-game":
			case "test-game":
			case "flash-game":
				break;
			default:
				friendly_name = self.config.name;
		}

		M.playBtnContainer = self.createElement("div", {
			"class": "fg-click2play" + (M.adcount > 0 ? " fg-click2play-continue" : "") + (detection.is.smartphone ? " smartphone" : "")
		});

		M.gameIcon = self.createElement("div", {
			"class": "fg-gameicon",
			"title": friendly_name
		});
		M.branding = self.createElement("div", {
			"class": "fg-branding"
		});
		if (typeof self.config.thumb !== "undefined") {
			var nImg = document.createElement('img');
			nImg.src = self.config.thumb;
			nImg.onload = function(){
				M.gameIcon.innerHTML = '<img src="' + self.config.thumb + '" alt>';
			};

			//M.branding.style.background = 'url("' + self.config.thumb + '") no-repeat center center';
		}
		M.playBtnStage = self.createElement("div", {
			"class": "fg-click2play-stage"
		});
		M.playBtn = self.createElement("div", {
			"class": "btn-play",
			"title": ""
		});

		M.playBtn.innerHTML = '<div class="fg-click2play-loading"><span class="fg-click2play-loading-bounce1"></span><span class="fg-click2play-loading-bounce2"></span><span class="fg-click2play-loading-bounce3"></span></div>';

		M.gameDetails = self.createElement("div", {
			"class": "fg-gameDetails"
		});

		M.playBtnContainer.appendChild(M.playBtnStage);
		M.playBtnStage.appendChild(M.gameDetails);
		M.gameDetails.appendChild(M.gameIcon);
		M.playBtnContainer.appendChild(M.branding);
		M.gameDetails.appendChild(M.playBtn);

		self.spinner.show();
		
		self.wait(1250).then(function() {
			self.spinner.hide();

			faZepto(M.playBtnContainer).css({
				"opacity": "1"
			});

			// Display "Get it on Google Play / App Store" Button
			//if (self.notify.isEnabled()) {
				// if (M.isNthAdvertising(2)) {
					self.notify.showAppOverlay();
				// } else {
					// self.notify.closeAppOverlay();
					// M.getItOn = faZepto('<div class="fa-getiton"><a href="' + self.navigation.getMoreGamesLink() + '" target="_blank"><img src="' + self.getMoreGamesButtonImage() + '" alt="Get it on Google Play / App Store"></a></div>');

					// M.getItOn.find("img").css({
					// 	"width": self.getOrientation() === "portrait" ? "150px" : "120px"
					// });

					// M.getItOn.appendTo(M.playBtnContainer);

					// self.handleClick(M.getItOn.get(0), function() {
					// 	self.tracking.trackEvent("Button event", detection.is.ios ? "App Store" : "Play Store", self.config.package_id);
					// 	return true;
					// });

					// M.getItOn.css({
					// 	"opacity": "1"
					// });
				// }
			//}
		});

		self.handleClick(M.playBtnContainer, startVideoCallback);

		self.rootElement.appendChild(M.playBtnContainer);

		function startVideoCallback() {
			faZepto(M.playBtn).addClass('loading');

			try {
				if (M.show_initial && !detection.is.pc && !detection.is.ios && self.hasFeature('fullscreen')) {
					self.fullscreen.start();
				}
			} catch (error) {
				self.log(error);
			}

			M.showIMA(function() {
				try {
					self.orientation.lock();
				} catch (error) {
					self.log(error);
				}

				M.fireAdCallback();
			}, true);

			return false;
		}
	};

	module.prototype.showAd = function(callback, force) {
		if (self.adapters.run("ads", "show", callback, force)) {
			return false;
		}

		M.closeCallback = callback;

		switch (M.provider) {
			case 'a4g':
			case 'aerserv':
			case 'redpm':
			case 'dfp':
				if (detection.is.pc) {
					return M.showIMA(callback, force);
				}
				return M.showClick2PlayOverlay(callback, force);
			case 'housead':
				return M.showHouseAd(callback, force);
			case 'matched_content':
				return M.showMatchedContent(callback, force);
			case 'blocker':
				return M.showBlocker(callback, force);
			case 'sulvo':
				if (M.adcount >= 1) {
					M.adcount++;
					M.showAppTeaser(callback, force);
					return M.showStickyAd(callback, force);
				}
				M.adcount++;
				return M.showStickyAd(callback, force);
			default:
				return M.fireAdCallback();
		}
	};

	module.prototype.forceAd = function(callback) {
		//self.tracking.trackEvent('Ad Event', 'Force Ad', famobi_gameID);
		
		if (self.adapters.run("ads", "show", callback, true)) {
			return false;
		}

		return M.showAd(callback, true);
	};

	module.prototype.rewardedAd = function(callback) {
		self.tracking.trackEvent('Ad Event', 'Rewarded Ad', famobi_gameID);
		
		if (self.adapters.run("ads", "rewarded", callback)) {
			return false;
		}

		M.closeCallback = callback;

		if (M.provider !== "dfp") {
			return M.forceAd(callback);
		}

		return M.showAppTeaser(callback, true);
	};

	module.prototype.showAppTeaser = function(callback, force) {
		var opts = {
			force: !!force,
			iframeAllowed: true,
			min_s_between: 0,
			returnCallback: function() {
				self.wait(100).then(function() {
					M.fireAdCallback();
				});
			},
			returnCallback2: function() {
				M.delayNextAdModal(true);
				if (self.game.isWaiting()) {
					self.game.setWaiting(false);
					self.game.init();
				}
			}
		};
		var packageId = '';
		var apps = [
			'smarty-bubbles',
			'gold-mine',
			'fruita-crush',
			'fruita-swipe-2',
			'candy-bubble',
			'creamy-ice',
			'backgammon-classic',
			'bubble-gems',
			'bubble-spirit',
			'solitaire-classic',
			'jewel-jungle',
			'streetrace-fury',
			'smarty-bubbles-xmas',
			'flow-free',
			'animal-quiz',
			'winter-lily',
			'slacking-school',
			'sudoku-classic',
			'chess-classic',
			'lovetester',
			'wordguess-2-easy',
			'wordguess-2-heavy'
		];
		
		var rand = Math.random();
		var randomIndex = self.rand(0, apps.length - 1);
		var randomApp = apps[randomIndex];

		packageId = randomApp;

		if (!M.isEnabled()) {
			self.log("ads disabled");
			M.fireAdCallback();
			return false;
		}

		if (!M.initAdModal(opts)) {
			return false;
		}

		self.iframe.show('/sda/teaser/' + packageId + '/' + self.config.aid + '/?hl=' + self.gametranslation.getNavigatorLanguage(), {
			overlayColor: 'rgba(0,0,0,0.8)',
			width: (self.getOrientation() == "landscape" ? 586 : 768) - 21
		});
		var header = self.translate("api.ad_modal_header2");
		self.modal.setHeader(header);
		self.modal.setCloseCallback(opts.returnCallback);
		self.modal.setCloseCallback(opts.returnCallback2);
	};

	module.prototype.getPriceRuleName = function() {
		return (M.priceRule && M.priceRule.name) ? M.priceRule.name : "";
	};

	module.prototype.showIMA = function(callback, force) {
		if (!M.initAdModal({
				"returnCallback": function() {
					M.fireAdCallback();
				},
				"force": force,
				"iframeAllowed": self.config.ads.dfp_available
			})) {
			return false;
		}

		M.priceRule = self.lsg.getRule();

		// @see https://developers.google.com/interactive-media-ads/docs/sdks/html5/v3/quickstart
		M.adContainerElement = document.createElement('div');
		M.adContainerElement.className = 'fg-ad-container';
		M.adContainerElement.style.zIndex = '9999990';
		M.adContainerElement.style.margin = '0 auto 0';
		self.rootElement.appendChild(M.adContainerElement);

		M.adWidth = window.innerWidth + "px";
		M.adHeight = window.innerHeight + "px";

		M.adContainerElement.style.width = M.adWidth;
		M.adContainerElement.style.height = M.adHeight;

		try {
			M.adDisplayContainer = new google.ima.AdDisplayContainer(M.adContainerElement);
			M.adDisplayContainer.initialize();

			M.adsLoader = new google.ima.AdsLoader(M.adDisplayContainer);

			M.showAdModal({
				"returnCallback": callback,
				"width": parseInt(M.adWidth),
				"height": parseInt(M.adHeight)
			}, M.adContainerElement);
		} catch (reason) {
			if (self.debug) {
				self.modal.setHeader(reason);
				self.modal.clearCloseBtnTimer();
				self.modal.activateCloseBtn(true);
			} else {
				self.modal.close();
			}

			if (typeof google === "undefined" && detection.is.pc) {
				var btn = faZepto("<div><h1 style='font-weight:normal;color:#647999; text-align: center; padding: 30px 0 10px 0 !important;'>Please disable your AdBlocker on this site to play our games!<img src='//games.cdn.famobi.com/html5games/gameapi/CandyInTears.png' alt='' style='margin: 0 auto; display: block; width: 270px; margin-top: 20px;'></h1><span style='display:inline-block;padding:15px;border:5px solid #647999;font-weight:bold; color: #647999;'>Done? Refresh this page.</span><br><br><span style='color:#647999; display: block; margin-bottom: 30px; opacity: 0.8;'><strong>Why?</strong> Some functionality is incorrectly blocked by AdBlockers</span><iframe src='//giphy.com/embed/RL6gd7A8xvLYA' width='320' height='246' frameBorder='0' allowFullScreen></iframe></div>").appendTo("body").css({"display": "block !important", "position": "absolute", "top": "0", "bottom": "0", "color": "#333", width: "100%", "cursor": "pointer", "font-size": "14px", "background-color": "#d1f6ff", "overflow-y": "scroll", "font-family": "Helvetica, Arial, sans-serif", "text-align": "center", "z-index": self.rand(900000, 999999)});
				self.handleClick(btn.get(0), function() {
					window.location.reload();
				});
				setTimeout(function() {
					btn.remove();
				}, 15E3);
			}
			
			if (self.game.isWaiting()) {
				self.game.setWaiting(false);
				self.game.init();
			}

			return M.showAppTeaser(callback);
		}
		self.spinner.show();
		// self.game.hideCanvas();

		module.prototype.onAdsManagerLoaded = function(adsManagerLoadedEvent) {
			//self.log("adsManagerLoadedEvent", adsManagerLoadedEvent);

			var adsRenderingSettings = new google.ima.AdsRenderingSettings();
			adsRenderingSettings.enablePreloading = false;
			adsRenderingSettings.uiElements = [google.ima.UiElements.COUNTDOWN];

			// Get the ads manager.
			M.adsManager = adsManagerLoadedEvent.getAdsManager(M.adContainerElement, adsRenderingSettings);

			// Listen to any additional events, if necessary.
			faZepto.each(['LOADED', 'IMPRESSION', 'STARTED',
				'SKIPPABLE_STATE_CHANGED', 'FIRST_QUARTILE', 'MIDPOINT',
				'THIRD_QUARTILE', 'USER_CLOSE', 'SKIPPED', 'COMPLETE',
				'ALL_ADS_COMPLETED', 'DURATION_CHANGE', 'CONTENT_RESUME_REQUESTED', 'CONTENT_PAUSE_REQUESTED'
			], function(key, value) {
				M.adsManager.addEventListener(google.ima.AdEvent.Type[value], M.onAdEvent);
			});
			
			M.adsManager.init(parseInt(M.adWidth), parseInt(M.adHeight), google.ima.ViewMode.FULLSCREEN);
			
			M.adsManager.start();
		};

		module.prototype.onAdEvent = function(adEvent) {
			var ad = adEvent.getAd();

			//self.log('adEvent', adEvent.type, ad);

			switch (adEvent.type) {
				case google.ima.AdEvent.Type.LOADED:
					M.adcount++;
					self.adapters.run("adEvent", "loaded", ad);
					if (ad.isLinear() && M.adsManager.getRemainingTime() > 0) {
						self.modal.setCloseBtnTimer(M.adsManager.getRemainingTime());
					}
					faZepto(self.modal.overlay).css('background', '#000');
					break;
				case google.ima.AdEvent.Type.STARTED:
					M.adDidLoad = true;

					if (ad.isLinear() && M.adsManager.getRemainingTime() > 0) {
						self.tracking.trackEvent("Ad event", "DFP Video", adEvent.type);
					} else {
						self.tracking.trackEvent("Ad event", "DFP", adEvent.type);
					}

					self.modal.clearCloseBtnTimer();
					self.modal.activateCloseBtn(false);
					break;
				case google.ima.AdEvent.Type.DURATION_CHANGE:
					M.delayNextAdModal(true);
					break;
				case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
					faZepto(M.playBtnContainer).remove();
					M.playBtnContainer = undefined;
					self.notify.closeAppOverlay();

					self.spinner.hide();
					break;
				case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
					faZepto(self.modal.overlay).css('background', 'transparent');
					// self.game.showCanvas();
					setTimeout(function() {
						self.modal.close();
					}, 300);
					break;
			}

			switch (adEvent.type) {
				case google.ima.AdEvent.Type.STARTED:
					self.adapters.run("adEvent", "displayed");
					break;
				case google.ima.AdEvent.Type.COMPLETE:
					self.adapters.run("adEvent", "completed", M.adcount);
					break;
				case google.ima.AdEvent.Type.SKIPPED:
					self.adapters.run("adEvent", "skipped");
					break;
				case google.ima.AdEvent.Type.USER_CLOSE:
					self.adapters.run("adEvent", "userClosed", M.adcount);
					break;
			}
		};

		module.prototype.onAdError = function(adErrorEvent) {
			self.tracking.trackEvent("Ad error event", "DFP", adErrorEvent.getError());
			self.log(adErrorEvent.getError());

			self.modal.close();
			
			self.adapters.run("adEvent", "errored", adErrorEvent);
			
			if (M.adsManager) {
				M.adsManager.destroy();
			}
		};

		// Add event listeners
		M.adsLoader.addEventListener(
			google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
			M.onAdsManagerLoaded,
			false);
		M.adsLoader.addEventListener(
			google.ima.AdErrorEvent.Type.AD_ERROR,
			M.onAdError,
			false);

		var adsRequest = new google.ima.AdsRequest();
		adsRequest.disableCompanionAds = true;

		// Specify the linear and nonlinear slot sizes. This helps the SDK to
		// select the correct creative if multiple are returned.
		adsRequest.linearAdSlotWidth = 640;
		adsRequest.linearAdSlotHeight = 480;

		// 2015-10-29
		// Force Full-Slot ad rendering
		// Games publishers (mandatory):
		// When using overlay ads with gaming content, you must ensure that all creative sizes are rendered with the Full-Slot interface by manually setting adsrequest.forceNonLinearFullSlot to true. This is required to comply with AdSense and Ad Exchange Policies.
		adsRequest.forceNonLinearFullSlot = true;

		adsRequest.nonLinearAdSlotWidth = parseInt(M.adWidth);
		adsRequest.nonLinearAdSlotHeight = parseInt(M.adHeight);

		// Custom VAST Tag URL
		M.getVastTagUrl().then(function(myadTagUrl) {
			adsRequest.adTagUrl = myadTagUrl;

			M.adsLoader.requestAds(adsRequest);
		});

		M.adDidLoad = false;
		M.show_initial = false;
		M.show_video_initial = false;
	};

	module.prototype.getAdTagUrl = function() {
		var myadTagUrl = "";
		var descriptionUrl = encodeURIComponent(self.config.ads.description_url);
		var language = self.gametranslation.getNavigatorLanguage();

		M.dfp_custom_params = {
			"a": "" + self.config.aid,
			"game": "" + window.famobi_gameID,
			"gametype": "html5",
			"uuid": "" + self.config.uuid,
			"video": (M.show_video || M.show_video_initial) ? "1" : "0", // allow video for desktop always; on mobile only for request A) because of the neccessary user interaction
			"pr": M.getPriceRuleName(),
			"adcount": (M.adcount > 20) ? "gt20"
										: (M.adcount >= 10) ? "" + M.adcount
															: "0" + M.adcount
		};

		if (window.famobi_env === "vp") {
			M.dfp_custom_params.gametype = "video";
			M.dfp_custom_params.video = "1";
			M.dfp_custom_params.invideo = "1";
			M.dfp_custom_params.videoid = self.config.video.id;
		}

		// @see https://support.google.com/dfp_premium/answer/1068325?hl=de
		myadTagUrl =
			"https://securepubads.g.doubleclick.net/gampad/ads?impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&url=[referrer_url]&correlator=[timestamp]&ciu_szs=";

		if (M.dfp_ad_unit_code != "") {
			myadTagUrl = myadTagUrl + "&iu=" + M.dfp_ad_unit_code;
		}

		if (M.adWidth >= 728) {
			myadTagUrl = myadTagUrl + "&sz=728x480";
		} else if (M.adWidth >= 640 || (M.dfp_custom_params.video && M.dfp_custom_params.video === "1")) {
			myadTagUrl = myadTagUrl + "&sz=640x480";
		} else if (M.adWidth >= 336) {
			myadTagUrl = myadTagUrl + "&sz=336x280";
		} else {
			myadTagUrl = myadTagUrl + "&sz=300x250";
		}

		if (descriptionUrl != "") {
			myadTagUrl = myadTagUrl + "&description_url=" + descriptionUrl;
		}

		if (M.dfp_custom_params) {
			myadTagUrl = myadTagUrl + "&cust_params=" + encodeURIComponent(faZepto.param(
				M.dfp_custom_params));
		}

		if (language != "") {
			myadTagUrl = myadTagUrl + "&hl=" + language;
		}

		return myadTagUrl;
	};

	module.prototype.getVastTagUrl = function() {
		self.adapters.run("ads", "vastUrl");

		return new Promise(function(resolve, reject) {
			var vast_url = M.getAdTagUrl();

			if (self.config.ads.vast_url) {
				vast_url = self.config.ads.vast_url;

				self.geo.getLatLon().then(function(latlong) {
					vast_url = vast_url.replace(/\[UA\]/, encodeURIComponent(navigator.userAgent));
					vast_url = vast_url.replace(/\[URL\]/, encodeURIComponent(self.config.ads.description_url));
					vast_url = vast_url.replace(/\[DEVICECATEGORY\]/, detection.is.tablet ? 'tablet' : 'phone');
					vast_url = vast_url.replace(/\[CACHEBUSTER\]/, self.rand(100000, 999999));
					vast_url = vast_url.replace(/\[LAT\]/, latlong[0]);
					vast_url = vast_url.replace(/\[LON\]/, latlong[1]);

					resolve(vast_url);
				}, reject);
			} else {
				resolve(vast_url);
			}
		});
	};

	module.prototype.initAdModal = function(options) {
		var opts = faZepto.extend({
			iframeAllowed: false,
			force: false,
			returnCallback: function() {}
		}, options);

		// check if ad is allowed inside this window / frame
		if (!M.isAdvertisingActive(opts)) {
			M.showAppTeaser(opts.returnCallback, opts.force);
			return false;
		}

		// regard timeout between ads
		if (M.delayNextAdModal(opts.force)) {
			self.modal.setCloseCallback(opts.returnCallback);
			return false;
		}

		return true;
	};

	module.prototype.showAdModal = function(options, contentDiv) {
		var opts = faZepto.extend({
			mode: "seamless",
			closeBtnTimer: 9,
			faketime: 3,
			overlayColor: "rgba(255,255,255,.5)",
			showCloseBtn: true,
			returnCallback: function() {},
			returnCallback2: function() {
				self.adapters.run("ads", "callback", { 
					"adDidLoad": !!M.adDidLoad 
				});
				M.delayNextAdModal(true);

				self.notify.showAppOverlay();
				faZepto(M.playBtnContainer).remove();
				M.playBtnContainer = undefined;

				if (self.game.isWaiting()) {
					self.game.setWaiting(false);
					self.game.init();
				}

				self.lsg.remix({
					lastRequestWas: (M.adDidLoad ? 'fill' : 'nofill')
				});
			}
		}, options);

		M.delayNextAdModal(true);

		self.modal.create(opts);

		self.modal.updateCloseBtn(true);
		self.modal.setCloseBtnTimer(opts.closeBtnTimer, {"faketime": opts.faketime});
		self.modal.setDimensions(opts.width, opts.height);
		self.modal.setContent(contentDiv);
		self.modal.setCloseCallback(opts.returnCallback);
		self.modal.setCloseCallback(opts.returnCallback2);

		return self;
	};

	module.prototype.showHouseAd = function(callback, force) {
		var opts = {
			mode: "ad",
			showCloseBtn: false,
			width: 300,
			height: 250,
			min_s_between: (+self.config.ads.min_s_between > 0) ? +self.config.ads.min_s_between : 30000,
			iframeAllowed: true,
			returnCallback: callback || function() {},
			returnCallback2: function() {
				M.delayNextAdModal(true);
				if (self.game.isWaiting()) {
					self.game.setWaiting(false);
					self.game.init();
				}
			},
			force: force
		};

		self.log("show house ad");

		if (!M.isEnabled()) {
			self.log("ads disabled");
			opts.returnCallback();
			return false;
		}

		if (!M.initAdModal(opts)) {
			return false;
		}

		M.delayNextAdModal(true);

		// show house ad
		var url = '/sda/housead/' + window.famobi_gameID + '/' + window.famobi.config
			.aid;
		self.iframe.show(url, opts);
		self.modal.setHeader(self.translate("api.ad_modal_header2"));
		self.modal.setCloseCallback(opts.returnCallback);
		self.modal.setCloseCallback(opts.returnCallback2);
		self.modal.showCloseBtn();
		self.modal.clearCloseBtnTimer();
		self.modal.activateCloseOverlay(true);

		M.adcount++;

		return self;
	};

	module.prototype.showMatchedContent = function(callback, force) {
		var opts = {
			showCloseBtn: false,
			width: 800,
			height: 480,
			min_s_between: (+self.config.ads.min_s_between > 0) ? +self.config.ads.min_s_between : 30000,
			iframeAllowed: true,
			returnCallback: callback || function() {},
			returnCallback2: function() {
				M.delayNextAdModal(true);
				if (self.game.isWaiting()) {
					self.game.setWaiting(false);
					self.game.init();
				}
			},
			force: force
		};

		self.log("show matched content");

		if (!M.isEnabled()) {
			self.log("ads disabled");
			opts.returnCallback();
			return false;
		}

		if (!M.initAdModal(opts)) {
			return false;
		}

		M.delayNextAdModal(true);

		// show house ad
		var url = '/sda/matched_content/' + window.famobi_gameID + '/' + window.famobi.config
			.aid;
		self.iframe.show(url, opts);
		self.modal.setHeader(self.translate("api.ad_modal_header2"));
		self.modal.setCloseCallback(opts.returnCallback);
		self.modal.setCloseCallback(opts.returnCallback2);
		self.modal.showCloseBtn();
		self.modal.clearCloseBtnTimer();
		self.modal.activateCloseOverlay(true);

		M.adcount++;

		return self;
	};

	module.prototype.showBlocker = function(callback, force) {
		var opts = {
			mode: "ad",
			showCloseBtn: false,
			width: 300,
			height: 250,
			min_s_between: (+self.config.ads.min_s_between > 0) ? +self.config.ads.min_s_between : 30000,
			iframeAllowed: true,
			returnCallback: callback || function() {},
			force: force
		};

		self.log("show blocker (npm not available due to policy violations)");

		if (!M.isEnabled()) {
			self.log("ads disabled");
			opts.returnCallback();
			return false;
		}

		if (!M.initAdModal(opts)) {
			return false;
		}

		M.delayNextAdModal(true);

		// show house ad
		var url = '/sda/blocker/' + window.famobi_gameID + '/' + window.famobi.config
			.aid;
		self.iframe.show(url, opts);
		self.modal.setHeader(self.translate("api.ad_modal_header_blocked"));
		self.modal.setCloseCallback(opts.returnCallback);

		M.adcount++;

		return self;
	};

	module.prototype.showTeaser = function(callback) {
		var opts = {
			mode: "ad",
			width: 300,
			height: 300,
			min_s_between: (+self.config.ads.min_s_between > 0) ? +self.config.ads.min_s_between : 30000,
			iframeAllowed: true,
			returnCallback: callback || function() {},
			force: true
		};

		self.log("show teaser ad");

		if (!M.initAdModal(opts)) {
			return false;
		}

		M.delayNextAdModal(true);

		// show banner
		var url = '/sda/teaser/' + window.famobi_gameID + '/' + window.famobi.config
			.aid;
		self.iframe.show(url, opts);
		self.modal.setHeader(self.translate("api.teaser_modal_header"));
		self.modal.setCloseCallback(opts.returnCallback);

		return self;
	};

	module.prototype.showStickyAd = function(callback, force) {
		if (faZepto('#SP_sticky_mobile_bottom').length <= 0) {
			faZepto.getScript("//surgeprice.com/display/async/defKYzzSGzk88nn2S/famobi.com/ariel.js",
				function() {
					faZepto(self.bodyElement).prepend('<div id="famobi.com_sticky_mobile_bottom_ingame" class="surgeprice"><script data-cfasync="false" type="text/javascript">surgeprice.display("famobi.com_sticky_mobile_bottom_ingame");</script></div>');
					if (typeof googletag !== "undefined") {
						setInterval(function() {
							googletag.pubads().refresh();
						}, 90E3);
					}
				});
		}
		if (faZepto('#a4g').length <= 0) {
			faZepto(self.bodyElement).prepend('<div id="a4g"></div>');
			faZepto.getScript("//video.a4g.com/www/delivery/video.php?zoneid=60436&width=640&height=480&siteurl=" + encodeURIComponent(self.config.ads.description_url) + "&wrapper=a4g&autoplay=1");
		}
	};

	module.prototype.delayNextAdModal = function(isSetter) {
		// check if Ads are enabled
		if (!M.isEnabled()) {
			self.log("ads disabled");
			return true;
		}

		// disable all Ads for X seconds
		if (isSetter) {
			M.lastAdCall = self.now();
		} else if (!M.hasCooledDown()) {
			self.log("skipped ad");
			return true;
		}

		return false;
	};
	
	module.prototype.hasCooledDown = function() {
		var min_s_between = (M.adcount === 0 && +self.config.ads.min_s_before > 0) ? +self.config.ads.min_s_before : +self.config.ads.min_s_between;

		var ret = (self.now() - (min_s_between * 1000)) > M.lastAdCall;

		return ret;
	};

	module.prototype.isAdvertisingActive = function(opts) {
		if (!opts.iframeAllowed && window.top !== window.self) {
			self.log("ads disabled in <iframe>");
			return false;
		}
		return true;
	};

	module.prototype.isNthAdvertising = function(n) {
		return (+M.adcount % n) === 0;
	};

	module.prototype.lastAdCallWasNsecondsAgo = function(n) {
		return (self.now() - n * 1000) >= M.lastAdCall;
	};

	module.prototype.fireAdCallback = function() {
		if (typeof M.closeCallback == "function") {
			M.closeCallback();
		}
		M.closeCallback = function() {};
	};

	module.prototype.isEnabled = function() {
		return self.hasFeature("ads") && !self.config.ads.off;
	};

	module.prototype.floodProtect = function(eventName, delay) {
		if (M.floodProtectionMap[eventName]) {
			return true;
		}

		M.floodProtectionMap[eventName] = setTimeout(function() {
			M.floodProtectionMap[eventName] = undefined;
		}, delay);

		return false;
	};

	M = new module();
	M.init();

	return M;
};

// show ad programmatically
fg_api.prototype.showAd = function(callback) {
	if (this.ads.floodProtect('Show Ad', 1E3)) {
		if (typeof callback == 'function')
			callback();
		return;
	}

	this.ads.showAd(callback);
};
fg_api.prototype.forceAd = function(callback) {
	if (this.ads.floodProtect('Force Ad', 1E3)) {
		if (typeof callback == 'function')
			callback();
		return;
	}

	this.ads.forceAd(callback);
};
fg_api.prototype.rewardedAd = function(callback) {
	if (this.ads.floodProtect('Rewarded Ad', 1E3)) {
		if (typeof callback == 'function')
			callback();
		return;
	}

	this.ads.rewardedAd(callback);
};
fg_api.prototype.showTeaser = function(callback) {
	if (this.ads.floodProtect('Teaser Ad', 1E3)) {
		if (typeof callback == 'function')
			callback();
		return;
	}

	this.ads.showTeaser(callback);
};




fg_api.prototype.notifyModule = function() {
	var self = this,
		M;

	function module() {}

	module.prototype.init = function() {
		self.config.notify = !!self.config.notify;

		if (window.famobi_env === "vp" || detection.is.pc) {
			self.config.notify = false;
		}

		M.appTeaser = null;
		M.closeBtn  = null;

		M.isStock   = detection.is.androidStockBrowser;
	};

	module.prototype.showAppOverlay = function(callback, force) {
		if (!M.isEnabled()) {
			return self;
		}

		if (!M.isStock && !M.show_initial) {
			// Check if the element doesn't exist yet, it won't be removed when closed
			if (!M.appTeaser) {
				M.appTeaser = self.gametranslation.translateHtml(faZepto(self.config.appOverlayHtml));
				M.appTeaser.appendTo(self.rootElement);

				faZepto(M.appTeaser).find(".fg-app-teaser-storeIcon")
									.addClass('fg-app-teaser-storeIcon-' +  
										(detection.is.ios ? 'appStore' : 'playStore'));

				faZepto(M.appTeaser).find(".fg-app-link").each(function() {
					self.handleClick(this, function() {
						self.tracking.trackEvent("Button event", detection.is.ios ? "App Store" : "Play Store", self.config.package_id);
						return true;
					});
				});

				M.closeBtn = M.appTeaser.find('.fg-app-teaser-close').get(0);
				self.handleClick(M.closeBtn, function() {
					M.closeAppOverlay().then(function() {
						self.config.notify = false;
					});
				});
			}

			self.wait(100).then(function() {
				M.appTeaser.css('bottom', '-1px');
			});
		}
	};

	module.prototype.closeAppOverlay = function(event) {
		return new Promise(function(resolve, reject) {
			if (!M.isEnabled()) {
				resolve();
				return;
			}

			if (M.appTeaser) {
				M.appTeaser.css('bottom', '-150px');
			}
			resolve();
		});
	};

	module.prototype.isEnabled = function() {
		if (!self.config.notify) {
			self.log("notifs disabled");
			return false;
		}
		return true;
	};

	M = new module();
	M.init();

	return M;
};




fg_api.prototype.adaptersModule = function() {
	var self = this,
		M;

	function module(){ // define private vars
		this.adapters = {
			ads: {
				show: !1,
				rewarded: !1,
				callback: !1,
				vastUrl: !1
			},
			adEvent: {
				loaded: !1,
				displayed: !1,
				errored: !1,
				userClosed: !1,
				completed: !1
			},
			analytics: {
				trackEvent: !1,
				trackScreen: !1,
				trackStats: !1
			},
			game: {
				loaded: !1,
				gameOver: !1,
				levelUp: !1
			},
			highscore: {
				show: !1,
				submit: !1
			},
			screenshot: {
				submit: !1
			}
		};
		this.adapter_templates = {
			ads: {
				show: function(callback, force) { /* when an interstitial ad is requested */},
				rewarded: function(callback) { /* when a rewarded ad is requested */},
				callback: function(options) { /* fired when ad modal is closed */},
				vastUrl: function() { /* fired when ad vast tag is retrieved */}
			},
			adEvent: {
				loaded: function(ad) { /**/},
				displayed: function() { /**/},
				errored: function(adErrorEvent) { /**/},
				userClosed: function(adcount) { /**/},
				completed: function(adcount) { /**/}
			},
			analytics: {
				trackEvent: function(event, params) { /**/},
				trackScreen: function(screen, pageTitle) { /**/},
				trackStats: function(key, value) { /**/}
			},
			game: {
				loaded: function() { /**/},
				gameOver: function() { /**/},
				levelUp: function() { /**/}
			},
			highscore: {
				show: function(level) { /**/},
				submit: function(level, score) { /**/}
			},
			screenshot: {
				submit: function(screenshot_url, options) { /**/}
			}
		};
	}

	var adaptersPrototype = module.prototype;

	adaptersPrototype.init = function() {
		var section = "",
			subsection = "";
		if (typeof famobi_adapters !== "undefined") {
			for (section in famobi_adapters) {
				//self.log(section);
				for (subsection in famobi_adapters[section]) {
					//self.log(subsection);
					this.add(section, subsection, famobi_adapters[section][subsection]);
				}
			}
		}
	};

	adaptersPrototype.list = function(){
		self.log("available adapters: ", this.adapters);
		self.log("adapter templates: ", this.adapter_templates);
	};

	adaptersPrototype.add = function(section, subsection, callback){
		self.log("adding adapter: ", section + "." + subsection, callback);
		if (section in this.adapters && subsection in this.adapters[section] && callback) {
			if (!M.has(section, subsection)) {
				this.adapters[section][subsection] = callback;
			} else {
				self.log("adapters.add: callback already exists");
			}
		} else {
			self.log("adapters.add: invalid (sub-)section or missing callback");
		}
		return this;
	};

	adaptersPrototype.has = function(section, subsection){
		if (this.adapters[section] && this.adapters[section][subsection]) {
			return typeof this.adapters[section][subsection] === "function";
		}
		return false;
	};

	adaptersPrototype.run = function(section, subsection){
		var args = arguments ? Array.prototype.slice.call(arguments, 2) : [];
		if (this.has(section, subsection)) {
			//self.log("args", args);
			this.adapters[section][subsection].apply(this, args);
			return true;
		}
		// self.log("adapters.run: invalid (sub-)section or missing callback");
		return false;
	};

	M = new module();
	M.init();

	return M;
};




/* http://updates.html5rocks.com/2014/07/Web-Audio-Changes-in-m36 */
//window.AudioContext = window.AudioContext || window.webkitAudioContext;

fg_api.prototype.getVolume = function() {
	return 0.5;
};

fg_api.prototype._muted = true;

fg_api.prototype.getMuted = function() {
	var self = this;
	
	return self._muted;
};

fg_api.prototype.setMuted = function(muted) {
	var self = this;

	self._muted = !!muted;
};



function fg_api(config, queue, debug) {
	config = config || {};
	queue = queue || [];

	var i = 0, j = queue.length, self = this;

	self.config = config;
	self.debug = !!debug;

	/**
	 * create log function with proper line number
	 */
	(function createLogger() {
		self.log = function() {};
		self.error = function() {};
		if (self.debug && window.console) {
			if (Function.prototype.bind) {
				self.log = Function.prototype.bind.call(window.console.log, window.console);
				self.error = Function.prototype.bind.call(window.console.error, window.console);
			} else {
				self.log = function() {
					Function.prototype.apply.call(window.console.log, window.console, arguments);
				};
				self.error = function() {
					Function.prototype.apply.call(window.console.error, window.console, arguments);
				};
			}
		}
	})();


	faZepto(function() {
		self.init();

		while(i < j){
			self.push(queue[i++]);
		}
	});
}

faZepto.fn.preventClick = function() {
	this.each(function() {
		faZepto(this).on("click touchstart touchmove touchcancel touchend", function(e) {
			e.stopPropagation();
			return false;
		});
	});

	return this;
};

fg_api.prototype.hasFeature = function(feature) {
	return feature in this.config.features && this.config.features[feature];
};

fg_api.prototype.createElement = function(type, attributes){
	var element = document.createElement(type);
	for(var key in attributes) {
		if(attributes.hasOwnProperty(key)){
			element.setAttribute(key, attributes[key]);
		}
	}
	return element;
};

fg_api.prototype.handleClick = function(element, callback){
	var self = this;

	var eventHandler = function(e){
		callback.call(this, e);
		e.cancelBubble = true;
		e.stopPropagation();
		return false;
	};

	if (typeof callback === 'function'){
		// http://stackoverflow.com/questions/13396297/windows-phone-8-touch-support
		//
		// Performing operations that require explicit user interaction on touchstart events is deprecated and will be removed in M54, around October 2016. See https://www.chromestatus.com/features/5649871251963904 for more details.
		if (window.navigator.msPointerEnabled) {
			element.addEventListener("MSPointerDown", eventHandler, false);
		} else {
			element.addEventListener(!detection.is.touch ? "click" : "touchend", eventHandler);
		}
	}

	return eventHandler;
};

fg_api.prototype.removeClick = function(element, eventHandler){
	var self = this;

	if (typeof eventHandler === 'function'){
		if (window.navigator.msPointerEnabled) {
			element.removeEventListener("MSPointerDown", eventHandler, false);
		} else {
			element.removeEventListener(!detection.is.touch ? "click" : "touchend", eventHandler);
		}
	}

	return element;
};

fg_api.prototype.getUrlParams = function(a, b, c) {
	a = /[?&]?([^=]+)=([^&]*)/g, b = document.location && document.location.search ? document.location.search.split("+").join(" ") : "";
	for (var d = {}; c = a.exec(b);) d[decodeURIComponent(c[1])] = decodeURIComponent(c[2]);
	return d;
};

fg_api.prototype.str = function(chrs) {
	var str = '';
	function chr(n){return String.fromCharCode(n);}
	for (var i = 0; i < chrs.length; i++) {
		str += chr(Number(chrs[i]));
	}
	return str;
};

fg_api.prototype.guid = function(){
	function s4() {
    	return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  	}
  	return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

/**
 * create stubs
 */
if (!window.console){
	window.console = {
		log: function() {},
		debug: function() {},
		info: function() {},
		warn: function() {},
		error: function() {}
	};
}

fg_api.prototype.sizeOf = function(data) {
	var length = 0;
	var prop;

	if (!data) {
		return length;
	}

	if (typeof data.length != 'undefined') {
		return data.length;
	}

	if (Object.keys) {
		// available since ECMAScript 5 and in some browser 10x faster
		length = Object.keys(data).length;
	} else {
		for (prop in data){
			if (data.hasOwnProperty(prop)) {
				length++;
			}
		}
	}
	return length;
};

fg_api.prototype.rand = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

fg_api.prototype.now = function() {
    return (1*(new Date));
};

fg_api.prototype.round = function(n, decimals) {
	var pow =  (Math.pow(10, decimals));
	return Math.round(n * pow) / pow;
};

fg_api.prototype.find = function(obj, key) {
	var index = "";
	if (typeof obj === "object") {
		for (index in obj) {
			if (obj[index] === key) {
				return index;
			}
		}
	} else if (typeof obj !== "undefined") {
		if (typeof obj.indexOf === "function") {
			return obj.indexOf(key);
		}
	}
	return -1;
};

fg_api.prototype.wait = function(n) {
	return new Promise(function (resolve, reject) {
		setTimeout(resolve, n);
	});
};

fg_api.prototype.vibrate = function(n) {
	if (typeof n === "undefined") {
		n = 20;
	}

	if (navigator.vibrate) {
		return navigator.vibrate(n);
	}

	return false;
};



fg_api.prototype.getMoreGamesButtonImage = function (forceAbsolute) {
	var mgb = this.__("more_games_image") ;

 

	return mgb;
};



fg_api.prototype.sdkModule = function() {
	var self = this,
		postMessageListeners = {},
		M;

	function module() {}

	module.prototype.init = function() {
		listenForPostMessage();

		module.prototype.subscribePostMessageListener("sdk", "setItems", function (data) {

			self.localStorage.receivingData = true;
			for (var key in data) {
				self.localStorage.setItem(key, data[key], "");
			}
			self.localStorage.receivingData = false;
			self.game.setWaiting(false);
		});

		module.prototype.subscribePostMessageListener("sdk", "game.setWaiting", function (data) {
			self.game.setWaiting(data.setWaiting);
		});

		// check if famobi sdk is loaded
		if(window.top != window.self && !hasLocalStorageKeys()) {
			window.top.postMessage({
				scope: 'famobi_sdk', 
				method: 'getData', 
				time: +(new Date), 
				package_id: window.famobi_gameID, 
				aid: self.config.aid
			}, "*");
		}
	}

	module.prototype.subscribePostMessageListener = function(moduleName, actionName, callback) {
		if (!postMessageListeners[moduleName]) {
			postMessageListeners[moduleName] = {};
		}
		postMessageListeners[moduleName][actionName] = callback;
		// method chaining
		return module.prototype;
	};

	function hasPostMessageListener(message) {
		return message.module && postMessageListeners[message.module] && message.action && postMessageListeners[message.module][message.action];
	}

	function notifyPostMessageListener(message) {
		if (hasPostMessageListener(message)) {
			return postMessageListeners[message.module][message.action]((message.data || {}));
		}
		return false;
	}

	function hasLocalStorageKeys() {
		var	aid = self.config.aid,
			package_id = window.famobi_gameID;

		if (typeof window.localStorage === "undefined") {
			return false;
		}

		// get all keys of localstorage and check if they start with aid or package id
		for (var key in window.localStorage) {
			if (key.indexOf(aid) === 0 || key.indexOf(package_id) === 0) {
				return true;
			}
		}

		return false;
	}

	function onPostMessageReceive(e){
		var messageObject = e.data;
		notifyPostMessageListener(messageObject);
	}

	function listenForPostMessage(){
		// Use postMessage API for "secure" cross-domain message-passing
		window.addEventListener("message", onPostMessageReceive, false);
	}

	M = new module();
	M.init();

	return M;
}



fg_api.prototype.storageModule = function(type) {
	var self = this,
		postMessageListeners = {},
		M;

	function module() { // define private vars

	}

	var storagePrototype = module.prototype;

	storagePrototype.init = function(storageType) {
		this.receivingData = false;
		this.localStorage = {};
		this.sessionStorage = {};
		this.storage = {}; // one of the above
		this.length = 0;

		if (storageType == 'localStorage' ||
			storageType == 'sessionStorage') {
				M.setStorageType(storageType);
				M.createStorage(storageType);
		}
	};

	storagePrototype.setStorageType = function(storageType) {
		M.storageType = storageType;
	};

	storagePrototype.getStorageType = function() {
		return M.storageType;
	};

	storagePrototype.createStorage = function(storageType) {
		if (testStorage(storageType)) {
			M.storage = createProxyStorage(storageType);
		} else {
			M.storage = createFallbackStorage(storageType);
		}
	};

	function testStorage(storageType) {
		var storage;
		try {
			storage = window[storageType];
			storage.setItem('test', 1);
			storage.removeItem('test');
			return true;
		} catch (e) {
			return false;
		}
	}

	function getNamespacedKey(key, ns) {
		if (typeof ns === "undefined") {
			ns = famobi_gameID;
		}
		if (ns.length) {
			key = ns + ':' + key;
		}
		return key;
	}

	// Create a storage proxy (same api like local-/sessionStorage) with double the data!
	function createProxyStorage(storageType) {
		return {
			data: {},
			getItem: function (key, ns) {
				key = getNamespacedKey(key, ns);
				return window[storageType].getItem(key);
			},
			getProxyItem: function (key, ns) {
				key = getNamespacedKey(key, ns);
				return this.data[key];
			},
			setItem: function (key, value, ns) {
				key = getNamespacedKey(key, ns);
				this.data[key] = value;
				this.updateLength();
				window[storageType].setItem(key, value);
			},
			removeItem: function (key, ns) {
				key = getNamespacedKey(key, ns);
				try {
					delete this.data[key];
				} catch (e) {
				}
				this.updateLength();
				window[storageType].removeItem(key);
			},
			clear: function () {
				for (var key in window[storageType]) {
					if(key.indexOf(window.famobi_gameID) === 0) this.removeItem(key, "");
				}
			},
			key: function (i) {
				var keys = [];
				for (var key in window[storageType]) {
					if(key.indexOf(window.famobi_gameID) === 0) keys.push(key);
				}
				return typeof keys[i] === "undefined" ? null : keys[i];
			},
			updateLength: function(){
				M.length = self.sizeOf(this.data);
			},
			getKeys: function(){
				var keys = [];
				for (var key in window[storageType]) {
					if(key.indexOf(window.famobi_gameID) === 0) keys.push(key);
				}
				return keys;
			}
		};
	}

	// Create a storage stub (same api like local-/sessionStorage)
	function createFallbackStorage(storageType) {
		return {
			data: {},
			getItem: function (key, ns) {
				key = getNamespacedKey(key, ns);
				return this.data[key];
			},
			setItem: function (key, value, ns) {
				key = getNamespacedKey(key, ns);
				this.data[key] = value;
				this.updateLength();
			},
			removeItem: function (key, ns) {
				key = getNamespacedKey(key, ns);
				try {
					delete this.data[key];
				} catch (e) {
				}
				this.updateLength();
			},
			clear: function (ns) {
				for (var key in this.data) {
					if(key.indexOf(window.famobi_gameID) === 0) this.removeItem(key, "");
				}
			},
			key: function (i) {
				var keys = [];
				for (var key in this.data) {
					if(key.indexOf(window.famobi_gameID) === 0) keys.push(key);
				}
				return typeof keys[i] === "undefined" ? null : keys[i];
			},
			updateLength: function(){
				M.length = self.sizeOf(this.data);
			},
			getKeys: function(){
				var keys = [];
				for (var key in this.data) {
					keys.push(key);
				}
				return keys;
			}
		};
	}

	storagePrototype.getStorage = function() {
		return M.storage;
	};

	storagePrototype.getItem = function(key, ns) {
		var value = M.getStorage().getItem(key, ns);
		return value;
	};

	storagePrototype.setItem = function(key, value, ns) {

		if(!M.receivingData && window.top != window.self) {
			window.top.postMessage({
				scope: 'famobi_sdk',
				method: 'setItem',
				package_id: window.famobi_gameID,
				aid: self.config.aid,
				data: {
					key: getNamespacedKey(key, ns),
					value: value
				}
			}, "*");
		}

		return M.getStorage().setItem(key, value, ns);
	};

	storagePrototype.setMaxItem = function(key, value, ns) {
		var old_value = parseInt(M.getStorage().getItem(key, ns), 10);

		if(!old_value || parseInt(value, 10) > old_value) {
			M.getStorage().setItem(key, value, ns);
			return true;
		} else {
			return false;
		}
	};

	storagePrototype.removeItem = function(key, ns) {
		if(window.top != window.self) {
			window.top.postMessage({
				scope: 'famobi_sdk',
				method: 'removeItem',
				package_id: window.famobi_gameID,
				aid: self.config.aid,
				data: {
					key: getNamespacedKey(key, ns)
				}
			}, "*");
		}

		return M.getStorage().removeItem(key, ns);
	};

	storagePrototype.clear = function() {
		return M.getStorage().clear();
	};

	storagePrototype.key = function(i) {
		return M.getStorage().key(i);
	};

	storagePrototype.getKeys = function() {
		return M.getStorage().getKeys();
	};

	M = new module();
	M.init(type);

	return M;
};




fg_api.prototype.highscoresModule = function() {
	var self = this,
		M;

	function module(){ // define private vars

	}

	var highscoresPrototype = module.prototype;

	highscoresPrototype.init = function () {

	};

	highscoresPrototype.submit = function(level, score) {
		level = (typeof level !== "undefined" && (level.length || level > 0)) ? level : "0";
		score = parseInt(score, 10);

		self.tracking.data({'level': level, 'score': score});

		self.tracking.trackEvent('Highscore event', 'submit', famobi_gameID + ':level:' + level);

		if (!self.hasFeature("highscores")){
			self.showAd();

			return self;
		}

		self.showAd(function() {

			// Run Adapter if possible
			if (self.adapters.run("highscore", "submit", level, score)) {
				return self;
			}

			function doSubmit(score) {
				/*var leaderboardId = "kitchensink";
				var submitEndpoint = "https://scores-api.staging.gc.famobi.com/submit";
				if (self.debug) {
					leaderboardId = "kitchensink_dev";
					submitEndpoint = "https://scores-api.staging.gc.famobi.com/submit";
				}
				Promise.all([self.geo.getCity(), self.geo.getCountryCode()])
					   .then(function(values) {
					   	var city = values[0],
					   		countryCode = values[1],
					   		dataObj = {},
					   		name = "";

						if (city == "Bonn") {
							city = "Cologne"; // Kölsche Jungs
						}

						name = city + " @ " + window.famobi_gameID;

						dataObj = {
							communityId: 'games1community',
							leaderboardId: leaderboardId,
							userId: self.player.getId(),
							name: name,
							countryCode: countryCode,
							score: score
						};
						self.log(dataObj);
						faZepto.ajax({
							type: "POST",
							url: submitEndpoint, 
							data: JSON.stringify(dataObj),
							contentType: "application/json",
							dataType: "json",
							processData: false
						});
				});*/
			}

			// Save local
			self.sessionStorage.setMaxItem("famobi:level", level);
			if (self.sessionStorage.setMaxItem("famobi:score", score)) {
				doSubmit(score);
			}

		});

		return self;
	};

	highscoresPrototype.show = function(level){
		if (self.hasFeature("highscores")){
			// Run Adapter if possible
			if (self.adapters.run("highscore", "show", level)) {
				return self;
			}

			// Business as usual
		}

		return self;
	};

	highscoresPrototype.get = function(){
		return self.sessionStorage.getItem("famobi:score");
	};

	highscoresPrototype.del = function(){
		self.sessionStorage.delItem("famobi:score");
	};

	highscoresPrototype.submitHighscoreCallback = function() {
		M.del();
		faZepto(self.rootElement).trigger("fg_api.submitHighscore");
	};

	M = new module();
	M.init();

	return M;
};

fg_api.prototype.submitHighscore = function(level, score){
	if (this.hasFeature("highscores")){
		this.highscores.submit(level, score);
	}
};

fg_api.prototype.showHighscore = function(){
	this.highscores.show();
};

fg_api.prototype.getHighscore = function(){
	return this.highscores.get();
};

fg_api.prototype.submitHighscoreCallback = function(){
	this.highscores.submitHighscoreCallback();
};



fg_api.prototype.screenshotModule = function() {

	// http://stackoverflow.com/questions/4998908/convert-data-uri-to-file-then-append-to-formdata

	var self = this,
		M;

	function module() {

		this.clipClicked = false;
		this.options = {
			width: 480,
			height: 640
		};

		this.savingTryoutsNum = 5;
		this.savingTryoutsInterval = 3000;
		this.savingLocked = false;
		this.savingInterval = null;
		this.releaseSavingTimeout = null;
		this.releaseTimeout = 20000;
	}

	function getCameraIcon() {
		return '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve"><g id="CAMERA_1_" enable-background="new    "><g id="CAMERA"><g><path d="M32,22c-6.627,0-12,5.372-12,12c0,6.627,5.373,12,12,12s12-5.373,12-12S38.627,22,32,22z M61,12H48.243l-5.095-5.094l-0.002,0.003C42.602,6.35,41.843,6,41,6H23c-0.976,0-1.835,0.474-2.383,1.196L15.813,12H3c-1.657,0-3,1.343-3,3v40c0,1.657,1.343,3,3,3h58c1.657,0,3-1.343,3-3V15C64,13.343,62.657,12,61,12z M32,52c-9.941,0-18-8.059-18-18c0-9.941,8.059-18,18-18c9.941,0,18,8.059,18,18C50,43.941,41.941,52,32,52z"/></g></g></g></svg>';
	}

	function initClip() {
		var fgFotoshootOverlay = self.createElement("div", {
			id: "fg-fotoshoot-overlay"
		});

		if(self.config.gameParams.screenshot && self.config.gameParams.screenshot.camera) {
			fgFotoshootOverlay.style.top = "auto"; //reset css
			fgFotoshootOverlay.style.right = "auto"; //reset css

			var cameraConfig = self.config.gameParams.screenshot.camera;
			for (var idx in cameraConfig.position) {
				if (cameraConfig.position[idx]) {
					var direction = cameraConfig.position[idx];
					switch (direction) {
						case "top":
						case "bottom":
							fgFotoshootOverlay.style[direction] = cameraConfig.y + '%';
							break;
						case "right":
						case "left":
							fgFotoshootOverlay.style[direction] = cameraConfig.x + '%';
							break;
					}
				}
			}
		}

		fgFotoshootOverlay.innerHTML = getCameraIcon();

		self.rootElement.appendChild(fgFotoshootOverlay);

		self.handleClick(fgFotoshootOverlay, takeScreenshot);
	}

	function getScreenshotParam(name) {
		if (self.config.gameParams.screenshot[name]) {
			return self.config.gameParams.screenshot[name];
		}
	}

	module.prototype.init = function () {

		// is feature disabled
		if (!self.hasFeature("screenshot")) {
			return;
		}

		// hasn't special screenshot settings configured
		// or screenshot feature is disabled (again???)
		// or no screenshot areas defined
		if (!self.config.gameParams.screenshot ||
			!self.config.gameParams.screenshot.active ||
			!self.sizeOf(self.config.gameParams.screenshot.areas)
		) {
			return false;
		}

		self.iframe.subscribePostMessageListener("screenshot", "handleScreenshotSave", handleScreenshotSave);

		initClip();
	};

	function discardScreenshotUpload(event) {
		self.tracking.trackEvent('Screenshot event', 'discard', famobi_gameID);
		self.modal.close();
	}

	function releaseUploadLock() {
		M.savingLocked = false;
	}

	function lockUpload() {
		M.savingLocked = true;
	}

	function uploadScreenshot(imageSrc) {
		if (M.savingLocked) {
			return false;
		}

		self.tracking.trackEvent('Screenshot event', 'save', famobi_gameID);

		M.fgSaveScreenshot.classList.add('fg-screenshot-btn-loading');

		lockUpload();
		faZepto.ajax({
			type: 'POST',
			url: self.config.urlRoot + '/services/upload/images',
			data: {
				reference_id: self.config.uuid,
				pingback: 'services/upload',
				file: imageSrc,
				type: 'screenshot'
			},
			dataType: 'json',
			success: function(response) {

				handleScreenshotSave({
					url: response.data.public,
					txid: response.data.reference.id
				});
			}
		});

		return self;
	}

	function handleScreenshotSave(data){
		var countTryouts = 0;
		var image;

		if(!data.url || !data.txid){
			return false; //Unknown error
		}

		// store transaction id from server
		M.txid = data.txid;

		image = new Image();
		image.src = data.url;
		image.onload = function () {
			imageLoaded(true);
		};
		image.onerror = function () {
			countTryouts++;
			if (countTryouts >= M.savingTryoutsNum) {
				imageLoaded(false);
			}
		};

		function imageLoaded(imageHasLoaded) {
			self.tracking.trackEvent('Screenshot event', 'uploaded:' + (imageHasLoaded ? '1':'0'), famobi_gameID);

			clearInterval(M.savingInterval);
			clearTimeout(M.releaseSavingTimeout);
			releaseUploadLock();

			if (imageHasLoaded) {
				self.modal.close();
				M.fgSaveScreenshot.classList.add('fg-screenshot-btn-loading-complete');

				self.showAd(function() {
					// Run Adapter if possible
					self.adapters.run("screenshot", "submit", data.url , {
						width: M.options.width,
						height: M.options.height
					});
				});
			}else{
				self.modal.shake();
				M.fgSaveScreenshot.classList.add('fg-screenshot-btn-loading-fail');
				setTimeout(function(){
					M.fgSaveScreenshot.classList.remove('fg-screenshot-btn-loading-fail');
					M.fgSaveScreenshot.classList.remove('fg-screenshot-btn-loading');
				}, 1500);
			}
		}
	}

	function getCanvas(canvasID) {
		return canvasID ? document.getElementById(canvasID) : document.getElementsByTagName("canvas")[0];
	}

	function createImageFromCanvas(canvas, area) {
		var image = new Image();
		image.src =  canvas.toDataURL('image/jpeg');
		var targetHeight = 0,
			targetWidth = 0;

		// calculate based on percentage configured in screenshot params
		var slicing = {
			width: image.width / 100 * area.width,
			height: image.height / 100 * area.height,
			x: image.width / 100 * area.x,
			y: image.height / 100 * area.y
		};

		slicing.aspectRatio = slicing.width / slicing.height;

		var aspectRatioCanvas = M.options.width / M.options.height;

		// rotate target canvas
		if (Math.floor(slicing.aspectRatio) !== Math.floor(aspectRatioCanvas)) {
			var tmp = M.options.height;
			M.options.height = M.options.width;
			M.options.width = tmp;
			aspectRatioCanvas = M.options.width / M.options.height;
		}

		function byHeight() {
			targetHeight = M.options.height;
			targetWidth = M.options.height * slicing.aspectRatio;
		}
		function byWidth() {
			targetWidth = M.options.width;
			targetHeight = M.options.width / slicing.aspectRatio;
		}

		if(slicing.aspectRatio > 1){
			byHeight();
		} else {
			byWidth();
		}

		if(targetWidth > M.options.width){
			byWidth();
		}
		if(targetHeight > M.options.height){
			byHeight();
		}

		// find center postion of image
		var positionX = (M.options.width - targetWidth) / 2;
		var positionY = (M.options.height - targetHeight) / 2;

		return {
			element: image,
			slicing: slicing,
			positionX: parseInt(positionX),
			positionY: parseInt(positionY),
			targetWidth: parseInt(targetWidth),
			targetHeight: parseInt(targetHeight),
			createTemporaryCanvas: function() {
				return self.createElement('canvas', {'width': M.options.width, 'height': M.options.height});
			}
		};
	}

	function getCanvasContext(canvas) {
		return canvas.getContext('2d');
	}

	function cropImage(canvas, area) {
		var image = createImageFromCanvas(canvas, area);
		var tempCanvas = image.createTemporaryCanvas();
		var ctx = getCanvasContext(tempCanvas);

		ctx.drawImage(
			image.element,
			image.slicing.x,
			image.slicing.y,
			image.slicing.width,
			image.slicing.height,
			image.positionX,
			image.positionY,
			image.targetWidth,
			image.targetHeight
		);
		var imageSrc = canvas.toDataURL('image/jpeg', 0.7);
		image = null;
		tempCanvas = null;
		ctx = null;

		return imageSrc;
	}

	function displayScreenshotOverlay(imageSrc) {
		self.modal.create({
			showCloseBtn: false,
			transparent: true
		});

		// screenshot container
		var fgScreenshot = self.createElement("div", {
			"class": "fg-screenshot"
		});

		// upload screenshot image (link)
		M.fgSaveScreenshot = self.createElement("a", {
			"class": "fg-screenshot-btn-upload"
		});
		M.fgSaveScreenshot.innerHTML = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><polygon id="check-mark-icon" points="398.218,92.985 199.729,291.475 113.754,205.476 50,269.242 199.733,419.015 462,156.726 "/></svg>';
		self.handleClick(M.fgSaveScreenshot, function() {
			uploadScreenshot(imageSrc);
		});
		fgScreenshot.appendChild(M.fgSaveScreenshot);

		// discard screenshot image (link)
		var fgDiscardScreenshot = self.createElement("a", {
			"class": "fg-screenshot-btn-discard"
		});
		fgDiscardScreenshot.innerHTML = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><polygon id="x-mark-icon" points="438.393,374.595 319.757,255.977 438.378,137.348 374.595,73.607 255.995,192.225 137.375,73.622 73.607,137.352 192.246,255.983 73.622,374.625 137.352,438.393 256.002,319.734 374.652,438.378 "/></svg>';
		self.handleClick(fgDiscardScreenshot, discardScreenshotUpload);
		fgScreenshot.appendChild(fgDiscardScreenshot);

		var fgScreenshotImage = self.createElement("img", {"src": imageSrc});
		fgScreenshot.appendChild(fgScreenshotImage);

		self.modal.setContent(faZepto(fgScreenshot).get(0));
		self.modal.setDimensions(M.options.width, M.options.height);
		self.modal.setCloseCallback(function() {
			self.clipClicked = false;
		});
	}

	function takeScreenshot(area) {
		if (self.clipClicked) {
			return false;
		}
		self.clipClicked = true;
		// reset transaction id
		M.txid = null;
		self.tracking.trackEvent('Screenshot event', 'shoot', famobi_gameID);

		if (getScreenshotParam('areas')) {
			if (area && getScreenshotParam('areas')[area]) {
				area = getScreenshotParam('areas')[area];
			} else if(getScreenshotParam('areas')['default']) {
				area = getScreenshotParam('areas')['default'];
			} else {
				area = null;
			}
		}

		if (!area) {
			throw Error('No areas defined');
		}

		var originalCanvas = getCanvas(M.canvasID);
		var imageSrc = cropImage(originalCanvas, area);
		displayScreenshotOverlay(imageSrc);
	}

	M = new module();
	M.init();

	return M;
};




fg_api.prototype.navigationModule = function() {
	var self = this,
		M;

	function module(){ // define private vars
		this.cross_promo = {
			"entries": {},
			"choices": []
		};
		this.eventHandler = function () {
			
		};
	}

	var navigationPrototype = module.prototype;

	navigationPrototype.init = function(){
		self.fgNavigation = document.createElement("nav");
		self.fgNavigation.style.position = "relative";
		self.fgNavigation.setAttribute("id", "fg-navigation");
		faZepto(self.headElement).append(self.config.style);
		if (window.top !== window.self) {
			// hide navigation inside frames
			return self;
		}
		self.fgOverlay.innerHTML = self.config.headerHtml;
		self.fgOverlay.appendChild(self.fgNavigation);
		self.fgOverlay_visible = false;
		self.fgHeader = document.getElementById("fg-header");

		faZepto("#fg-clip, #fg-logo").each(function(){
			self.handleClick(this, toggleOverlay);
		});

		if(detection.is.android || detection.is.ios) {
			faZepto(self.fgOverlay).addClass("isMobile");
		}

		function toggleOverlay(e){
			if (self.fgOverlay_visible){
				M.hideAll();
			} else {
				M.show();
				self.tracking.trackEvent("Button event", "Show Overlay", self.config.package_id);
			}
			e.stopPropagation();
			return false;
		}

		// Init Left-Hand-Navigation
		if (self.hasFeature('menu')) {
			M.setHtml(self.config.menuHtml);
		}

		M.getRelatedGames().then(M.renderRelatedGames);

		return self;
	};

	navigationPrototype.getRelatedGames = function() {
		return new Promise(function(resolve, reject) {
			setTimeout(2E3, reject);
			self.firebase.isReady().then(function() {
				self.firebase.database().ref('/fgs_web/cross_promo/_all').once('value').then(function(snapshot) {
					if (snapshot.val()) {
						var key = null;
						var childData = null;
						var relatedGames = [];
						var randomGames = [];
						var maxEntries = 4;
						var randomEntry = 0;
						var parts = [];
						var thumb = "";
						var isSticky = false;

						snapshot.forEach(function(childSnapshot) {
							key = childSnapshot.key;

							// Hide active game
							if (key != self.config.package_id) {
								M.cross_promo.entries[key] = faZepto.extend({
									sticky: false,
									thumb: "auto"
								}, childSnapshot.val());
								if (M.cross_promo.entries[key]["thumb"] === "auto") {
									parts = key.split("-");
									thumb = "";
									for (var j = 0; j < parts.length; j++) {
										thumb += parts[j].substring(0, 1).toUpperCase() + parts[j].substring(1);
									}
									M.cross_promo.entries[key]["thumb"] = thumb + "Teaser.jpg";
								}
								
								relatedGames.push(key);

								if (M.cross_promo.entries[key]["sticky"]) {
									randomGames.push(key);
									relatedGames.splice(relatedGames.indexOf(key), 1);
									maxEntries--;
								}
							} 
						});
						
						for (var i = 0; i < maxEntries; i++) {
							randomEntry = self.rand(0, relatedGames.length - 1);
							randomGames.push(relatedGames[randomEntry]);
							relatedGames.splice(randomEntry, 1);
						}

						M.cross_promo.choices = randomGames;

						resolve(M.cross_promo.choices);
					}
				}, reject);
			}, reject);
		});
	};

	navigationPrototype.renderRelatedGames = function(choices) {
		var packageId = '';
		var thumb = '';

		faZepto('.fg-related-games').html('');

		for(var i = 0; i < choices.length; i++) {
			packageId = choices[i];
			thumb = M.cross_promo.entries[packageId].thumb;

			faZepto('.fg-related-games').append('<li><a href="https://play.famobi.com/'+packageId+'/'+self.config.aid+'"><img src="https://img.cdn.famobi.com/portal/html5games/images/tmp/60/'+thumb+'" alt=""></li>');
		}
	};

	navigationPrototype.bindEvents = function() {
		faZepto("[data-switch-lang]").each(function() {
			var $this = faZepto(this),
				lang = faZepto(this).attr("data-switch-lang");

			$this.removeClass('fg-lang-selected');

			if (lang === self.gametranslation.curLangString) {
				// Move selected language to first position
				$this.closest('ul').prepend($this);

				$this.addClass('fg-lang-selected');
			}

			self.handleClick(this, function() {
				if($this.hasClass('fg-lang-selected') === true) {
					M.toggleLanguages();
				} else {
					if (lang.length) {
						M.switchLanguage(lang);
						self.tracking.trackEvent("Button event", "Switch Language " + lang.toUpperCase(), self.config.package_id);
					}	
				}
			});
		});

		faZepto("[data-famobi-href]").css("cursor", "pointer").each(function() {
			var callback = function() {
				var link = faZepto(this).attr("data-famobi-href");

				M.hideAll();

				switch (link) {
					case 'moreGames':
						self.tracking.trackEvent("Button event", "More Games 1", self.config.package_id);
						return self.moreGamesLink();
					case 'back':
						self.tracking.trackEvent("Button event", "Back Link", self.config.package_id);
						return self.backLink();
				}
			};

			self.handleClick(this, callback);
		});

		faZepto("[data-famobi-fullscreen]").each(function() {
			self.handleClick(this, M.switchFullscreen);
		});

		faZepto("[data-famobi-screenshot]").each(function() {
			self.handleClick(this, M.takeScreenshot);
		});
	};

	navigationPrototype.toggleLanguages = function(){
		$overlayNode = faZepto(self.fgOverlay);
		if ($overlayNode.hasClass('fa-lang-shown')) {
			$overlayNode.removeClass('fa-lang-shown');
		} else {
			$overlayNode.addClass('fa-lang-shown');
		}
	};

	navigationPrototype.switchLanguage = function(lang) {
		var params = self.getUrlParams(),
			qs = '';

		M.hideAll();
		params.locale = lang;
		qs = faZepto.param(params);
		document.location.replace(document.location.pathname + "?" + qs + (document.location.hash ? document.location.hash : ""));
	};

	navigationPrototype.switchFullscreen = function () {
		M.hideAll();

		self.fullscreen.toggle();

		self.tracking.trackEvent("Button event", "Toggle Fullscreen", self.config.package_id);

		return true;
	};

	navigationPrototype.takeScreenshot = function() {
		self.screenshot.shoot();
	};

	navigationPrototype.show = function() {
		if (self.fgOverlay_visible) {
			return self;
		}
		var $fullscreenIcon = faZepto('#fg-overlay .fa-menu-button-fullscreen');

		M.hideAll();

		M.eventHandler = self.handleClick(faZepto('html').get(0), M.hideAll);
		faZepto('html').get(0).style.cursor = 'pointer';

		if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
			$fullscreenIcon.removeClass('fa-fullscreen-enabled').addClass('fa-fullscreen-disabled');
		} else {
			$fullscreenIcon.removeClass('fa-fullscreen-disabled').addClass('fa-fullscreen-enabled');
		}

		self.fgOverlay_visible = true;
		faZepto(self.fgOverlay).addClass("navigation-view");
		
		self.fgNavigation.style.display = "";

		return self;
	};

	navigationPrototype.hide = function() {
		return M.hideAll();
	};

	// hide all views (navigation, iframe, maybe more) call before you want to display a new "view"
	navigationPrototype.hideAll = function() {
		if (!self.fgOverlay_visible) {
			return self;
		}

		if (M.eventHandler) {
			self.removeClick(faZepto('html').get(0), M.eventHandler);
		}

		$fgOverlay = faZepto(self.fgOverlay);
		$fgOverlay.removeClass("iframe-view navigation-view fa-lang-shown");
		self.fgOverlay_visible = false;

		return self;
	};

	navigationPrototype.invisible = function() {
		self.fgOverlay.style.display = "none";
	};

	navigationPrototype.visible = function() {
		self.fgOverlay.style.display = "";
	};
	
	navigationPrototype.getMoreGamesLink = function() {
		return self.__("more_games_url");
	};
	
	navigationPrototype._moreGamesLink = function(popup) {
		var moreGamesLink = M.getMoreGamesLink();
		if (!moreGamesLink || moreGamesLink == "http://" || moreGamesLink == "javascript:") {
			return false;
		}

		// open link in new window
		if (typeof popup == "undefined") {
			popup = false;
		}

		if (!popup || !window.open(moreGamesLink, "")) {
			try {
				window.top.location.href = moreGamesLink;
			} catch (ex) {
				window.location.href = moreGamesLink;
			}
		}
		return true;
	};

	navigationPrototype.moreGamesLink = function(popup) {
		return M._moreGamesLink(popup);
	};

	navigationPrototype.setHtml = function(html) {
		self.fgNavigation.innerHTML = html;

		M.bindEvents();

		self.gametranslation.translateHtml(faZepto(self.fgNavigation));
	};

	M = new module();

	M.init();

	return M;
};

fg_api.prototype.backLink = function() {
	var self = this;

	// Fallback to previous page
	if (history.length > 1) {
		window.history.go(-1);
	} else {
		if (window.opener) {
			try {
				// iOS8 is missing window.close support, thanks AAPL
				window.close();
			} catch (ex) {
				// SecurityError
			}
		}

		// Fallback to more games url
		self.moreGamesLink(false);
	}

	return false;
};

fg_api.prototype.moreGamesLink = function(popup) {
	return this.navigation.moreGamesLink();
};

fg_api.prototype.getShortLink = function() {
	return this.config.short_url;
};

fg_api.prototype.getAppLink = function() {
	return 'https://play.famobi.com/' + window.famobi_gameID + '.app/' + this.config.aid;
};




fg_api.prototype.spinnerModule = function() {
	var self = this,
		M;

	function module(){ // define private vars
		this.spinner = "";
		this.timeout = 15000;
		this.maxTimeout = null;
		this.stateTimeout = null;
	}

	var spinnerPrototype = module.prototype;

	spinnerPrototype.init = function() {
		M.spinner = self.createElement("div", {"class": "fg-spinner"});
		//M.spinner.innerHTML = '<div class="fg-dot1"></div><div class="fg-dot2"></div><div class="fg-dot3"></div><div class="fg-dot4"></div><div class="fg-dot5"></div><div class="fg-dot6"></div><div class="fg-dot7"></div>';
		M.spinner.innerHTML = '<div id="cssload-pgloading"><div class="cssload-loadingwrap"><ul class="cssload-bokeh"><li></li><li></li><li></li><li></li></ul></div></div>';

		self.rootElement.appendChild(M.spinner);

		M.spinnerOutline = self.createElement("div", {"class": "fg-spinner-outline"});
		M.spinnerOutline.innerHTML = '<div></div>';

		self.rootElement.appendChild(M.spinnerOutline);

		faZepto(M.spinnerOutline).css({
			"position": "absolute",
			"display": "none",
			"visibility": "hidden",
			"top": 0,
			"left": 0,
			"right": 0,
			"bottom": 0,
			'background': 'rgba(255,255,255,0.5)'
		});

		return this;
	};

	spinnerPrototype.show = function(timeout){

		M.spinnerState = "new";
		M.spinner.style.display = "block";
		M.spinnerOutline.style.display = "block";
		M.spinner.style.visibility = "visible";
		M.spinnerOutline.style.visibility = "visible";
		M.spinner.style.left = "50%";
		//M.spinner.style.background = 'rgba(255,255,255,0.25)';
		M.spinner.style.opacity = "1.0";
		M.spinnerOutline.style.opacity = "1.0";

		// custom timeout
		if (timeout) {
			M.timeout = timeout;
		}

		M.stateTimeout = setTimeout(function(){
			if(M.spinnerState == "tryhide"){
				M.spinnerState = "closeable";
				M.hide();
			}else{
				M.spinnerState = "closeable";
			}
		}, 250);

		//show spinner max 15sec
		M.maxTimeout = setTimeout(function(){
			M.hide();
		}, M.timeout);

		return this;
	};

	spinnerPrototype.hide = function(){

		if (M.spinnerState && M.spinnerState == "closeable") {
			M.spinner.style.opacity = "0.0";
			M.spinnerOutline.style.opacity = "0.0";

			setTimeout(function(){
				M.spinner.style.display = "none";
				M.spinnerOutline.style.display = "none";
				M.spinner.style.visibility = "hidden";
				M.spinnerOutline.style.visibility = "hidden";
			}, 250);

			clearTimeout(M.maxTimeout);
			clearTimeout(M.stateTimeout);

		} else {
			M.spinnerState = "tryhide";
		}
		return this;
	};

	M = new module();
	M.init();

	return M;
};

fg_api.prototype.showSpinner = function(timeMillis) {
	var self = this;
	
	self.spinner.show(timeMillis);
};

fg_api.prototype.hideSpinner = function() {
	var self = this;
	
	self.spinner.hide();
};




fg_api.prototype.modalModule = function() {
	var self = this,
		M;

	function module() { // define private vars
		this.element = "";
		this.closing = false;
		this.closeCallbacks = [];
	}

	var modalPrototype = module.prototype;

	modalPrototype.init = function() {
		self.iframe
			.subscribePostMessageListener("modal", "showModalCloseBtn", function() {
				M.showCloseBtn();
			})
			.subscribePostMessageListener("modal", "setModalHeader", function(data) {
				M.setHeader(data.title);
			})
			.subscribePostMessageListener("modal", "close", function(data) {
				M.close();
			})
			.subscribePostMessageListener("modal", "setModalCloseBtnTimer", function(data) {
				self.spinner.hide();
				M.setCloseBtnTimer(data.sec, data.options);
			});
	};

	modalPrototype.create = function(options) {
		var opts = faZepto.extend({
			overlayColor: null,
			overlayStyle: {},
			showCloseBtn: true,
			title: ''
		}, options);

		if (!M.closing) {
			M.close(); // close all other window - it's a MODAL
		}

		self.navigation.invisible();

		self.game.pause();

		var className = "";
		if (opts.mode) {
			className = opts.mode + "-mode";
		}

		if (M.element && M.element.parentNode) {
		    M.element.parentNode.removeChild(M.element);
		}
		M.element = self.createElement('div', {'class': 'fg-modal fg-fade fg-show ' + className});

		if (M.overlay && M.overlay.parentNode) {
			M.overlay.parentNode.removeChild(M.overlay);
		}
		M.overlay = self.createElement('div', {'class': 'fg-modal-overlay'});
		if (opts.overlayColor) {
			M.overlay.style.backgroundColor = opts.overlayColor;
		}
		if (opts.overlayStyle) {
			faZepto(M.overlay).css(opts.overlayStyle);
		}
		self.rootElement.appendChild(M.overlay);

		M.header = self.createElement('header', {});
		M.element.appendChild(M.header);

		M.body = self.createElement('div', {'class': 'fg-modal-body'});
		M.element.appendChild(M.body);

		self.rootElement.appendChild(M.element);

		if (opts.showCloseBtn !== false) {
			M.showCloseBtn();
		}

		if (opts.transparent) {
			M.body.classList.add('fg-modal-transparent');
		}

		if (opts.title) {
			M.setHeader(opts.title);
		}

		M.closeCallbacks.push(function() {
			self.game.resume();
			self.navigation.visible();
		});
	};

	modalPrototype.showCloseBtn = function() {
		M.closeBtn = self.createElement('div', {
			'class': 'fg-modal-close icon-cancel'
		});

		if (!M.element) {
			return false;
		}

		M.element.appendChild(M.closeBtn);

		self.handleClick(M.closeBtn, function() {
			if (!this.getAttribute("data-disable"))
				M.close();
		});

		self.handleClick(M.overlay, function() {
			if (!M.closeBtn.getAttribute("data-disable") && !M.overlay.getAttribute("data-disable"))
				M.close();
		});
	};

	modalPrototype.setCloseCallback = function(callback) {
		if (M.element && M.element.style.display !== "none") {
			M.closeCallbacks.push(callback);
			return true;
		} else {
			callback();
			return false;
		}
	};

	modalPrototype.updateCloseBtn = function(disable) {
		var currentSec = M.closeBtnTimer ? M.closeBtnTimer.current : 0;

		if (disable) {
			M.fallbackTimeout = setTimeout(M.updateCloseBtn, 5000);
		} else if (M.fallbackTimeout) {
			clearTimeout(M.fallbackTimeout);
		}

		if (!M.closeBtn) {
			return;
		}

		if (currentSec > 0 || disable) {
			M.closeBtn.innerHTML = '<span class="counter">' + currentSec + '</span>' || '';
			M.closeBtn.setAttribute("data-disable", "true");
		} else {
			M.closeBtn.innerHTML = "";
			M.closeBtn.removeAttribute("data-disable");
		}
	};

	modalPrototype.setCloseBtnTimer = function(sec, options) {
		if (!options)
			options = {};

		M.clearCloseBtnTimer();

		M.closeBtnTimer = {
			autoclose: typeof options.autoclose == "undefined" ? true : options.autoclose,
			sec: sec,
			current: (options.faketime || sec)+1,
			timeout: 0,
			options: options
		};

		M.closeBtnTicker();
	};

	modalPrototype.clearCloseBtnTimer = function() {
		if (M.closeBtnTimer && M.closeBtnTimer.timeout) {
			clearTimeout(M.closeBtnTimer.timeout);
		}
	};

	modalPrototype.closeBtnTicker = function() {
		var options = M.closeBtnTimer.options;
		M.closeBtnTimer.current = Math.max(--M.closeBtnTimer.current, 0);

		if (M.closeBtnTimer.current === 0 && M.closeBtnTimer.autoclose) {
			M.close();
		} else {
			M.updateCloseBtn();
		}

		var faketime = parseInt(options.faketime || M.closeBtnTimer.sec, 10);

		M.closeBtnTimer.timeout = setTimeout(M.closeBtnTicker, parseInt((M.closeBtnTimer.sec/faketime)*1000, 10));
	};

	modalPrototype.activateCloseBtn = function(state) {

		if (!M.closeBtn) {
			return false;
		}

		M.closeBtn.style.display = state ? 'block' : 'none';

		if (state) {
			M.closeBtn.removeAttribute("data-disable");
		}
		else {
			M.closeBtn.setAttribute("data-disable", "true");
		}
	};

	modalPrototype.activateCloseOverlay = function(state) {
		if (!M.overlay) {
			return false;
		}

		if (state) {
			M.overlay.removeAttribute("data-disable");
		}
		else {
			M.overlay.setAttribute("data-disable", "true");
		}
	};

	modalPrototype.setContent = function(contentElement) {
		if (contentElement) {
			M.body.appendChild(contentElement);
		}
	};

	modalPrototype.setHeader = function(headline) {
		headline = headline || '';

		if (!M.header) {
			return;
		}

		M.header.innerHTML = headline.length ? headline + "" : "";
		M.header.style.display = headline.length ? "block" : "none";
	};

	modalPrototype.setDimensions = function(width, height) {
		if (!width || width === "")
			width = 480;

		if (!height || height === "")
			height = 500;

		M.element.style.maxHeight = parseInt(height, 10) + 60 + "px";
		M.element.style.maxWidth = parseInt(width, 10) + 20 + "px";
		M.element.style.display = "";
	};

	modalPrototype.close = function() {
		M.closing = true;

		M.clearCloseBtnTimer();

		if (M.element) {
			M.element.style.display = 'none';
		} else {
			return false;
		}

		if (M.overlay) {
			M.overlay.style.display = 'none';
		} else {
			return false;
		}

		faZepto.each(M.closeCallbacks, function(key, callback) {
			if (typeof callback === "function") {
				callback();
			}
		});
		M.closeCallbacks = [];

		self.spinner.hide();

		M.closing = false;
	};

	modalPrototype.shake = function(callback) {
		M.element.classList.add('fg-modal-shake');

		setTimeout(function() {
			M.element.classList.remove('fg-modal-shake');
			if (typeof callback === "function") {
				callback();
			}
		}, 2000);
	};

	modalPrototype.shakeAndClose = function() {
		M.shake(M.close);
	};

	M = new module();
	M.init();

	return M;
};




fg_api.prototype.iframeModule = function() {
	var self = this,
		postMessageListeners = {},
		M;

	function module(){ // define private vars

	}

	var iframePrototype = module.prototype;

	iframePrototype.init = function() {
		listenForPostMessage();
	};

	iframePrototype.subscribePostMessageListener = function(moduleName, actionName, callback) {
		if (!postMessageListeners[moduleName]) {
			postMessageListeners[moduleName] = {};
		}
		postMessageListeners[moduleName][actionName] = callback;
		// method chaining
		return iframePrototype;
	};

	function hasPostMessageListener(message) {
		return message.module && postMessageListeners[message.module] && message.action && postMessageListeners[message.module][message.action];
	}

	function notifyPostMessageListener(message) {
		if (hasPostMessageListener(message)) {
			return postMessageListeners[message.module][message.action]((message.data || {}));
		}
		// self.error('Post message listener [' + (message.module || 'undefined') + '] with action [' + (message.action || 'undefined') + '] not found');
		return false;
	}

	function onPostMessageReceive(e){
		var messageObject = e.data;
		notifyPostMessageListener(messageObject);
	}

	function listenForPostMessage(){
		// Use postMessage API for "secure" cross-domain message-passing
		window.addEventListener("message", onPostMessageReceive, false);
	}

	iframePrototype.create = function(){
		self.iframeContainer = self.createElement("div", {"id": "fg-iframe-container"});

		self.iframeElement = self.createElement("iframe", {
			"id": "fg-iframe",
			"class": "fg-iframe",
			"name": "fg-iframe",
			"src": "",
			"style": "background: transparent none;"
		});
		self.iframeContainer.appendChild(self.iframeElement);

		return self;
	};

	iframePrototype.updateSize = function(){
		if (self.iframeElement){
			self.iframeElement.style.height = "0px";
			self.iframeElement.style.height = "100%";
		}

		return self;
	};

	/**
	 * Set the iframe's src="" attribute
	 */
	iframePrototype.load = function(src) {
		self.comIframe = self.createElement("iframe", {
			"id": "fg-com-iframe",
			"name": "fg-com-iframe",
			"src": src
		});
		self.fgOverlay.appendChild(self.comIframe);
	};

	/**
	 * Displays the iframe with the specified width/height dimensions
	 */
	iframePrototype.show = function(url, options) {
		var opts = faZepto.extend({
			width: "",
			height: ""
		}, options);

		if (!self.iframeContainer){ //create iframe if not exist
			M.create();
		}

		self.navigation.hideAll();

		self.modal.create(options);
		self.log("iframeContainer");
		self.log(self.iframeContainer);

		if (url.length){
			if (url.indexOf('/') === 0) {
				url = self.config.urlRoot + url;
			}
			self.iframeElement.setAttribute("src", url);
			self.spinner.show(2E3);

			self.iframeElement.onload = function(){
				self.spinner.hide();
			};
		} else {
			self.log("url not set");
		}

		if (opts.mode && opts.mode == "seamless") {
			self.iframeElement.setAttribute("seamless", "seamless");
			opts.height = "none";
		}

		if (opts.mode && opts.mode == "ad")
			self.iframeElement.setAttribute("scrolling", "no");
		else
			self.iframeElement.setAttribute("scrolling", "yes");

		self.modal.setCloseCallback(function(){
			self.log("closeCallback");
			if (self.iframeElement) {
				self.iframeElement.setAttribute("src", "");
			}
		});

		self.modal.setContent(self.iframeContainer); //insert iframe into modal

		self.modal.setDimensions(opts.width, opts.height);

		self.tracking.trackEvent('IFrame event', 'show', url);

		return self;
	};

	iframePrototype.hide = function() {

		faZepto(self.fgOverlay).css({
			'max-width': '',
			'max-height': ''
		});

		return self;
	};

	M = new module();
	M.init();

	return M;
};




fg_api.prototype.orientationModule = function() {
	var self = this,
		M;

	function module(){ // define private vars

	}

	var orientationPrototype = module.prototype;

	orientationPrototype.init = function() {
		if (window.famobi_env === "vp") {
			return self;
		}
		
		M.update(self.config.gameParams.orientation);

		return self;
	};

	orientationPrototype.update = function(orientation){
		// show rotation screen?
		if (typeof orientation != 'undefined' &&
			!detection.is.pc && !detection.is.tablet && window.screen && window.screen.height !== window.screen.width) {
			self.rootElement.className = self.rootElement.className + ' fg-orientation-' + orientation;

			if (typeof M.fgLandscapeOverlay == "undefined") {
				M.fgLandscapeOverlay = document.createElement("div");
				M.fgLandscapeOverlay.setAttribute("id", "fg-landscape-overlay");

				M.fgLandscapeImage = document.createElement("img");
				M.fgLandscapeImage.setAttribute("src", "./gameapi/v1/images/RotateToLandscape.png");
				M.fgLandscapeImage.setAttribute("class", "fg-orientation-icon");
				M.fgLandscapeImage.setAttribute("alt", "switch to landscape");
				M.fgLandscapeOverlay.appendChild(M.fgLandscapeImage);

				self.rootElement.appendChild(M.fgLandscapeOverlay);
			}

			if (typeof M.fgPortraitOverlay == "undefined") {
				M.fgPortraitOverlay = document.createElement("div");
				M.fgPortraitOverlay.setAttribute("id", "fg-portrait-overlay");

				M.fgPortraitImage = document.createElement("img");
				M.fgPortraitImage.setAttribute("src", "./gameapi/v1/images/RotateToPortrait.png");
				M.fgPortraitImage.setAttribute("class", "fg-orientation-icon");
				M.fgPortraitImage.setAttribute("alt", "switch to portrait");
				M.fgPortraitOverlay.appendChild(M.fgPortraitImage);

				self.rootElement.appendChild(M.fgPortraitOverlay);
			}
		}

		return self;
	};

	orientationPrototype.lock = function () {
		var lockOrientation = ('orientation-lock' in self.config.gameParams) ? self.config.gameParams['orientation-lock'] : self.config.gameParams.orientation;
		if ('orientation' in screen) {
			// API supported, yeah!
			if (!detection.is.smartphone) {
				// exit here, if desktop, notebook or tablet device is detected. orientation is only valid for smartphones, tablets could use a responsive version of the game in a different orientation mode or just scale accordingly.
				return true;
			}
			switch (lockOrientation) {
				case 'portrait':
					screen.orientation.lock('portrait-primary');
					break;
				case 'landscape':
					screen.orientation.lock('landscape-primary');
					break;
				default:
					//screen.orientation.lock(self.getOrientation() + '-primary');
					break;
			}
		} else {
			// API not supported :(
		}
	};

	orientationPrototype.unlock = function () {
		if ('orientation' in screen) {
			screen.orientation.unlock();
		}
	}

	M = new module();
	M.init().onorientationchange(function() {
		self.log('famobi.onorientationchange: ', self.getOrientation(), window.innerWidth, window.innerHeight);
	});

	return M;
};

fg_api.prototype.getOrientation = function() {
	var orientation = '';
	if (window.innerHeight != window.innerWidth) {
		orientation = window.matchMedia('(orientation: portrait)').matches ? 'portrait' : 'landscape';
	}
	return orientation;
};

fg_api.prototype.onOrientationChange = fg_api.prototype.onorientationchange = function(callback) {
	if (typeof callback !== 'function') {
		this.error('famobi.onorientationchange: no valid callback provided.');
	}
	return faZepto(window).resize(callback);
};





fg_api.prototype.trackingModule = function() {
	var self = this,
		M;

	function module(){ // define private vars

	}

	var trackingPrototype = module.prototype;

	trackingPrototype.init = function() {
		famobi_dataLayer = window.famobi_dataLayer || window.dataLayer || [];

		// Use dataLayer variables
		famobi_dataLayer.push({
			'packageId': window.famobi_gameID,
			'affiliateId': self.config.aid,
			'section': 'ingame'
		});
		this.floodProtectionMap = {};
		this.floodProtectionPrefix = 'Flood event';

		faZepto(self.rootElement).one('faGame:loaded', function() {
			if (window.famobi_env === "vp") {
				// Track Video after 30 seconds
				setTimeout(function() {
					M.trackEvent("Target", "Videoplay", self.config.package_id);
				}, 30E3);

				return self;
			}

			// Track Gameplay after 30 seconds
			setTimeout(function() {
				M.trackEvent("Target", "Gameplay", self.config.package_id);
			}, 30E3);

			return self;
		});
	};

	trackingPrototype.data = function(dataObject) {
		famobi_dataLayer.push(dataObject);
	};

	trackingPrototype.trackEvent = function(category, action, label, value, nonInteraction) {
		if (typeof nonInteraction === 'undefined')
			nonInteraction = false;

		var key = [category, action, label, value].join('');

		if (typeof M.floodProtectionMap[key] !== "undefined" && 
			category != M.floodProtectionPrefix) {
			// M.trackEvent(M.floodProtectionPrefix, key, window.famobi_gameID);

			self.log('Flood protection: key ' + key + ' was already called in trackEvent');
		}

		// Track unique events in a Map for flood protection
		// Delete entry from Map after a certain timeout
		M.floodProtectionMap[key] = setTimeout(function() {
			M.floodProtectionMap[key] = undefined;
		}, 250);

		famobi_dataLayer.push({
			'event': 'Ingame event',
			'eventCategory': category,
			'eventAction': action,
			'eventLabel': label,
			'eventValue': value,
			'nonInteraction': nonInteraction
		});

		famobi_dataLayer.push({
			'event': undefined,
			'eventCategory': undefined,
			'eventAction': undefined,
			'eventLabel': undefined,
			'eventValue': undefined,
			'nonInteraction': undefined
		});
	};

	trackingPrototype.trackPassiveEvent = function(category, action, label, value) {
		return M.trackEvent(category, action, label, value, true);
	};

	trackingPrototype.trackEventData = function(category, data) {
		if (!window.mixpanel) {
			// in case mixpanel is missing in GTM
			window.mixpanel = {
				track: function() {},
				register: function() {},
				register_once: function() {},
				identify: function() {},
				alias: function() {},
				people: {
					'set': function() {},
					increment: function() {},
					track_charge: function() {}
				}
			};
		}

		famobi_dataLayer.push({
			'event': 'Ingame event data',
			'eventCategory': category,
			'eventData': data
		});

		famobi_dataLayer.push({
			'event': undefined,
			'eventCategory': undefined,
			'eventData': undefined
		});
	};

	M = new module();
	M.init();

	return M;
};





!function(a, b) {
	var famobi_analytics = {
		'stats' : {}, // params for achivements etc. - custom key-value pairs
		'events': [], // list of logged events, for debugging purposes
		'currentScreen': '',
		'pageTitle' : '',

		// STATS
		'trackStats': function(key, value) {
			return new Promise(function(resolve, reject) {
				var res = {};
				var values = {};

				if (typeof key === 'string') {
					values[key] = value;
				}

				var statsValidator = function() {
					for (var k in values) {
						var testKey = (typeof key === 'string' && key.length && key.length <= 42) && key.match(/^[a-z\_0-9]+$/);
						if (!testKey) {
							console.warn("trackStats(): key '" + key + "' contains not only lowercase letters, numbers and underscore ([a-z_0-9]), maximum length: 42 characters");
							return false;
						}
					}

					return true;
				}

				var isValid = statsValidator();

				if (!isValid) {
					reject("trackStats(): invalid params " + JSON.stringify(key, value));
					return false;
				}

				var updateKey = function(key, value) {
					if (typeof key === 'string' && key.length) {
						if (key in famobi_analytics.stats && 
							(typeof value === "undefined" || value === null)) {
							delete famobi_analytics.stats[key];
						} else {
							if(typeof value !== "undefined" && value) {
								famobi_analytics.stats[key] = value;
							}
						}

						return true;
					} else {
						throw("trackStats(): key is not a string or an Object");

						return false;
					}
				}

				if(key && typeof key === 'object') {
					for(var k in key) {
						value = key[k]
						updateKey(k, value);
					}

					res = key;
				} else {
					updateKey(key, value);

					res[key] = value;
				}

				if (famobi.hasOwnProperty("adapters")) {
					famobi.adapters.run("analytics", "trackStats", key, value);
				}

				resolve(res);
			});
		},
		'getStats': function() {
			// for debugging purposes
			return new Promise(function(resolve, reject) {
				resolve(famobi_analytics.stats);
			});
		},

		// EVENTS
		'trackEvent': function(event, params) {
			return new Promise(function(resolve, reject) {
				if (typeof famobi_analytics[event] === "undefined") {
					reject('trackEvent(): unknown event \'' + event + '\'');
					return false;
				}

				params = params || {};

				if (typeof params !== "object" && params !== null) {
					reject('trackEvent(): second parameter needs to be an object');
					return false;
				}

				var paramsValidator = function() {
					var availableParams = {
						'levelName': '',
						'reason': ['timeout', 'dead', 'wrong_answer', 'quit', 'draw'],
						'levelScore': -0.0,
						'totalScore': -0.0,
						'bgmVolume': 0.0,
						'sfxVolume': 0.0
					};
					var requiredParams = {
						'EVENT_LEVELFAIL': ['levelName', 'reason'],
						'EVENT_LEVELRESTART': ['levelName'],
						'EVENT_LEVELSTART': ['levelName'],
						'EVENT_LEVELSUCCESS': ['levelName'],
						'EVENT_LEVELSCORE': ['levelName', 'levelScore'],
						'EVENT_TOTALSCORE': ['totalScore'],
						'EVENT_VOLUMECHANGE': ['bgmVolume', 'sfxVolume'],
						'EVENT_CUSTOM': []
					};

					if (typeof requiredParams[event] !== "undefined" && Object.keys(params).length === 0) {
						console.warn("trackEvent(): '" + event + "' requires at least one parameter");
						return false;
					}

					if (typeof requiredParams[event] === "undefined") {
						return true;
					}

					var k = 0;
					var name = '';
					var param = null;

					for (k; k < requiredParams[event].length; k++) {
						name = requiredParams[event][k];
						param = availableParams[name];

						if (typeof param === "string") {
							if (typeof params[name] !== "string") {
								console.warn("trackEvent(): required param '" + name + "' has to be of type string");
								return false;
							}
						}

						if (typeof param === "number") {
							if (typeof params[name] !== "number") {
								console.warn("trackEvent(): required param '" + name + "' has to be of type number");
								return false;
							}
						}

						if (typeof param === "object") {
							if (param.indexOf(params[name]) === -1) {
								console.warn("trackEvent(): required param '" + name + "' has to be one of \"" + param.join('", "') + "\"");
								return false;
							}
						}
					}

					return true;
				}

				var isValid = paramsValidator();

				if (!isValid) {
					return reject("trackEvent(): invalid params " + JSON.stringify(params));
				}

				famobi_analytics.events.push({event: event, params: params});

				if (famobi.hasOwnProperty("adapters")) {
					famobi.adapters.run("analytics", "trackEvent", event, params);
				}

				if (famobi_analytics.TRIGGER_AD.indexOf(event) > -1) {
					return famobi.showAd(function() {
						resolve(event, params);
					});
				}

				if (famobi_analytics.TRIGGER_LEVELSCORE.indexOf(event) > -1) {
					famobi.submitHighscore(params['levelName'], params['levelScore']);
					return resolve(event, params);
				}

				if (famobi_analytics.TRIGGER_TOTALSCORE.indexOf(event) > -1) {
					famobi.submitHighscore('TOTAL', params['totalScore']);
					return resolve(event, params);
				}

				return resolve(event, params);
			});
		},
		'getEvents': function() {
			// for debugging purposes
			return new Promise(function(resolve, reject) {
				resolve(famobi_analytics.events);
			});
		},

		EVENT_CUSTOM:               'EVENT_CUSTOM', 
		EVENT_LEVELFAIL:     		'EVENT_LEVELFAIL', 
		EVENT_LEVELRESTART:  		'EVENT_LEVELRESTART', 
		EVENT_LEVELSTART:    		'EVENT_LEVELSTART', 
		EVENT_LEVELSUCCESS:  		'EVENT_LEVELSUCCESS', 
		EVENT_LEVELSCORE:  		    'EVENT_LEVELSCORE', 
		EVENT_TOTALSCORE:  		    'EVENT_TOTALSCORE', 
		EVENT_TUTORIALCOMPLETED:    'EVENT_TUTORIALCOMPLETED', 
		EVENT_TUTORIALSKIPPED:      'EVENT_TUTORIALSKIPPED', 
		EVENT_VOLUMECHANGE:  		'EVENT_VOLUMECHANGE', 

		// SCREEN
		'trackScreen': function(screen, pageTitle) {
			return new Promise(function(resolve, reject) {
				var requiredPageTitleScreens = [
					'SCREEN_OTHER'
				];

				if (typeof famobi_analytics[screen] === "undefined") {
					reject("trackScreen(): unknown screen '" + screen + "'");
					return false;
				}

				if (!pageTitle && screen.indexOf(requiredPageTitleScreens) > -1) {
					reject("trackScreen(): screen '" + screen + "' requires param 'pageTitle'");
					return false;
				}

				if (pageTitle && typeof pageTitle !== "string") {
					reject("trackScreen(): required param 'pageTitle' has to be a non-empty string");
					return false;
				}

				famobi_analytics.currentScreen = screen;
				famobi_analytics.pageTitle = pageTitle;

				if (famobi.hasOwnProperty("adapters")) {
					famobi.adapters.run("analytics", "trackScreen", screen, pageTitle);
				}

				resolve(screen, pageTitle);
			});
		},
		'getScreen': function() {
			return famobi_analytics.currentScreen;
		},
		'getPageTitle': function() {
			return famobi_analytics.pageTitle;
		},

		SCREEN_OTHER:        'SCREEN_OTHER', // custom, use pageTitle to differentiate
		SCREEN_BONUS:        'SCREEN_BONUS', // bonus screen, e.g. extra chance
		SCREEN_CHARACTER:    'SCREEN_CHARACTER', // Select character
		SCREEN_CREDITS:      'SCREEN_CREDITS', // credits screen, if used
		SCREEN_GAMERESULT:   'SCREEN_GAMERESULT', // result screen with total score (game over)
		SCREEN_HELP:         'SCREEN_HELP', // help screen
		SCREEN_HOME:         'SCREEN_HOME', // home screen (start screen)
		SCREEN_LEVEL:        'SCREEN_LEVEL', // level screen while playing
		SCREEN_LEVELINTRO:   'SCREEN_LEVELINTRO', // level has not yet begun (optional)
		SCREEN_LEVELLOADING: 'SCREEN_LEVELLOADING', // level is loading (optional)
		SCREEN_LEVELRESULT:  'SCREEN_LEVELRESULT', // result screen with level score
		SCREEN_LEVELSELECT:  'SCREEN_LEVELSELECT', // level select screen
		SCREEN_PAUSE:        'SCREEN_PAUSE', // pause screen
		SCREEN_SETTINGS:     'SCREEN_SETTINGS', // settings screen (advanced game settings)
		SCREEN_SHOP:         'SCREEN_SHOP', // when the game features an ingame shop, use pageTitle to differentiate between items
		SCREEN_SPLASH:       'SCREEN_SPLASH', // splash screen, if used
		SCREEN_TUTORIAL:     'SCREEN_TUTORIAL', // tutorial screen(s), use pageTitle to differentiate between multiple tutorial screens

		TRIGGER_AD:          ['EVENT_LEVELSUCCESS', 'EVENT_LEVELFAIL'],
		TRIGGER_LEVELSCORE:  ['EVENT_LEVELSCORE'],
		TRIGGER_TOTALSCORE:  ['EVENT_TOTALSCORE']
	};

	// export famobi_analytics object to global object
	b[a] = famobi_analytics;

}('famobi_analytics', window);




fg_api.prototype.gameStarted = function() {
	var self = this;
	
	self.log("Received gameStarted signal");
};

fg_api.prototype.gamePaused = function() {
	var self = this;
	
	self.log("Received gamePaused signal");
};

fg_api.prototype.gameResumed = function() {
	var self = this;
	
	self.log("Received gameResumed signal");
};

fg_api.prototype.gameOver = function() {
	var self = this;
	
	// self.ads.showAd(function() {
	// 	// Run Adapter if possible
	// 	self.adapters.run("game", "gameOver");
	// });

	self.log("Received gameOver signal");
};

fg_api.prototype.levelUp = function() {
	var self = this;
	
	// self.ads.showAd(function() {
	// 	// Run Adapter if possible
	// 	self.adapters.run("game", "levelUp");
	// });

	self.log("Received levelUp signal");
}

fg_api.prototype.setVolume = function(newVolume) {
	var self = this;
	
	self.log("Received volume control signal");
};



fg_api.prototype.firebaseModule = function() {
	var self = this,
		M;

	function module() {
		this.database = null;
		this.promise = null;
	};

	module.prototype.init = function() {
		M.initializeFirebase();
	};

	module.prototype.initializeFirebase = function() {
		if (M.promise) {
			return M.promise;
		}

		M.promise = new Promise(function(resolve, reject) {
			if (self.hasFeature("standalone")) {
				reject();
				return;
			}
			setTimeout(reject, 3E3);
			faZepto.getScript('./firebase.js', function() {
				// Initialize Firebase
				var config = {
					apiKey: "AIzaSyAN2Zj_J4pObQIbXxYYDYatv-VkMvxLoVQ",
					authDomain: "famobi-01.firebaseapp.com",
					databaseURL: "https://famobi-01.firebaseio.com",
					storageBucket: "famobi-01.appspot.com",
				};
				firebase.initializeApp(config);

				M.database = firebase.database;

				resolve();
			}, function() {
				reject('Firebase not ready');
			});
		});

		return M.promise;
	};

	module.prototype.isReady = function() {
		return M.initializeFirebase();
	};

	M = new module();
	M.init();

	return M;
};



fg_api.prototype.geoModule = function() {
	var self = this,
		M;

	function module(){ // define private vars
		// this.fields = 2;
		// this.promise = null;
		// this.geolocationUrl = 'https://pro.ip-api.com/json/?key=96vqgIz0XaUNBzI&fields=' + this.fields;
		// this.geodata = {
		// 	"countryCode": ""
		// };
	}

	var modulePrototype = module.prototype;

	modulePrototype.init = function() {
		M.promise = new Promise(function(resolve, reject) {
			if (self.hasFeature("standalone")) {
				reject();
				return;
			}
			setTimeout(reject, 2E3);
			self.rest.get(M.geolocationUrl).then(function(result) {
				if (!result || !result.countryCode) {
					// reject();
					return;
				}
				faZepto.extend(M.geodata, result);
				resolve(M.geodata);
			}, reject);
		});
	};

	modulePrototype.getCity = function() {
		return new Promise(function(resolve, reject) {
			M.promise.then(function(geodata) {
				resolve(geodata.city);
			}, reject);
		});
	};

	modulePrototype.getCountryCode = function() {
		return new Promise(function(resolve, reject) {
			M.promise.then(function(geodata) {
				resolve(geodata.countryCode);
			}, reject);
		});
	};

	modulePrototype.getLatLon = function() {
		return new Promise(function(resolve, reject) {
			M.promise.then(function(geodata) {
				resolve([geodata.lat, geodata.lon]);
			}, reject);
		});
	};

	M = new module();
	M.init();

	return M;
};



fg_api.prototype.lsgModule = function() {
	var self = this,
		M;

	function module() {
	}

	module.prototype.init = function() {
		this.lsg_version = 'lsg_v17';
		this.sample_rate = 20.0;
		this.is_active   = true;
		this.is_sampling = false;
		this.is_sampling_only = false;
		this.is_sampling_all_rules = Math.random() < (this.getSampleRate() / 100);
		self.log('lsg.is_sampling_all_rules: ', this.isSamplingAllRules());

		this.rules = [];
		this.rule = null; // price rule
		this.dc = null; // device category
		this.locale = null; // CountryCode
		this.promise = null;
	};

	module.prototype.ready = function() {
		if (!M.promise) {
			M.promise = new Promise(function(resolve, reject) {
				var promises = [ M.isActive(), M.getLocale() ];
				Promise.all(promises).then(function(values) {
					if (M.isSamplingAllRules()) {
						M.pickRandomRule().then(resolve, reject);
					} else if (M.isSamplingOnly()) {
					    reject('is_sampling_only: true');
					} else {
						M.pickDynamicRule().then(resolve, reject);
					}
				}, reject);
			});
		}

		return M.promise;
	};
	
	module.prototype.isActive = function(setter) {
		if (typeof setter !== "undefined") {
			M.is_active = setter;
			return setter;
		}

		return new Promise(function(resolve, reject) {
			if (M.is_active) {
				resolve();
			} else {
				reject();
			}
		});
	};
	
	module.prototype.isSampling = function(setter) {
		if (typeof setter !== "undefined") {
			M.is_sampling = !!setter;
		}
		return !!M.is_sampling;
	};
	
	module.prototype.isSamplingOnly = function(setter) {
		if (typeof setter !== "undefined") {
			M.is_sampling_only = !!setter;
		}
		return !!M.is_sampling_only;
	};
	
	module.prototype.isSamplingAllRules = function(setter) {
		if (typeof setter !== "undefined") {
			M.is_sampling_all_rules = !!setter;
		}
		return !!M.is_sampling_all_rules;
	};
	
	module.prototype.getSampleRate = function() {
		return Math.min(100, Math.max(0, M.sample_rate));
	};

	module.prototype.getDeviceCategory = function() {
		if (null === M.dc) {
			switch (true) {
				case detection.is.pc:
					M.dc = "desktop";
					break;
				case detection.is.smartphone:
					M.dc = "mobile";
					break;
				case detection.is.tablet:
					M.dc = "tablet";
					break;
				default:
					M.dc = "other";
			}
		}

		return M.dc;
	};

	module.prototype.getRules = function() {
		return new Promise(function(resolve, reject) {
			if (self.sizeOf(M.rules)) {
				return resolve(M.rules);
			}
			if (!M.isActive()) {
				return reject();
			}
			setTimeout(reject, 2E3);
			self.firebase.isReady().then(function() {
				var rulesRef = self.firebase.database().ref('lsg_rules');
				M.rules = [];
				rulesRef.once('value').then(function (snapshot) {
					faZepto.each(snapshot.val(), function(key, value) {
						M.rules.push([key, value]);
					});
					resolve(M.rules);
				}, reject);
			}, reject);
		});
	};

	// send event to the database: request, fill or no fill for the given rule
	module.prototype.sampleAdRequest = function(eventName, ruleName) {
		return new Promise(function(resolve, reject) {
			if (!ruleName || !M.isSampling()) {
				setTimeout(function() {
					reject('sample reject');
				}, 100);
				return;
			}
			self.firebase.isReady().then(function() {
				//self.log("sample", ruleName);
				var ruleRef = M.getRuleRef(ruleName).transaction(function(rule) {
					var recalcFillRate = false;
					var weight = 0.001;

					if (M.isSamplingAllRules()) {
						weight = weight * (100 / M.getSampleRate());
					}

					rule = rule || {};

					rule.id = M.getRuleName();
					rule.amount_ecpm = rule.amount_ecpm || M.getRuleValue();
					rule.amount_req_ecpm = rule.amount_req_ecpm || 0.00;
					rule.amount_req_ecpm_weighted = rule.amount_req_ecpm_weighted || rule.amount_req_ecpm;
					rule.fill_rate = rule.fill_rate || 0.00;
					rule.nb_impressions = rule.nb_impressions || 0;
					rule.nb_requests = rule.nb_requests || 0;
					rule.weighted = Math.max((rule.weighted || rule.fill_rate), 0);
					rule.sample_rate = rule.sample_rate || 0.00;

					if (eventName === 'fill') {
						rule.weighted = ((1.0 - weight) * rule.weighted) + weight;
						rule.nb_requests++;
						rule.nb_impressions++;
					} else if (eventName === 'nofill') {
						rule.weighted = ((1.0 - weight) * rule.weighted);
						rule.nb_requests++;
					}

					rule.fill_rate = self.round(rule.nb_impressions / Math.max(1, rule.nb_requests), 2);
					rule.amount_req_ecpm = self.round(rule.fill_rate * rule.amount_ecpm, 4);
					rule.weighted = self.round(rule.weighted, 6);

					// Did we achive the required number of samples yet?
					var sampleRate = rule.nb_requests / Math.min(10, rule.amount_ecpm);
					rule.sample_rate = self.round(sampleRate, 4);

					if (sampleRate < 100) {
						rule.amount_req_ecpm_weighted = rule.amount_req_ecpm;
					} else {
						rule.amount_req_ecpm_weighted = self.round(rule.weighted * rule.amount_ecpm, 6);
					}

					return rule;
				}).then(resolve, reject);
			}, function(reason) {
				self.log(reason);
				reject(reason);
			});
		});
	};

	module.prototype.getRuleRefName = function(ruleName) {
		ruleName = ruleName || M.getRuleName();

		if (!ruleName) {
			ruleName = "unknown";
		}

		//self.log("ruleName", ruleName);

		return [M.lsg_version, M.getLocale(), M.getDeviceCategory(), ruleName].join('/');
	};

	module.prototype.getDynamicRulesRef = function() {
		return self.firebase.database().ref(M.getDynamicRulesRefName());
	};

	module.prototype.getDynamicRulesRefName = function() {
		return [M.lsg_version, M.getLocale(), M.getDeviceCategory()].join('/');
	};

	module.prototype.pickDynamicRule = function() {
		return new Promise(function(resolve, reject) {
			setTimeout(reject, 3E3);
			self.firebase.isReady().then(function() {
				M.getRules().then(function() {
					var nbRules = 2;
					var amountThreshold = 10; // Percent
					var bestRulesRef = M.getDynamicRulesRef()
							.orderByChild('amount_req_ecpm_weighted')
							.limitToLast(nbRules);

					Promise.all([
						bestRulesRef.once('value')
					]).then(function(snapshots) {
						var rules = [],
							bestRules = snapshots[0].val(),
							bestRule = {},
							rulesMap = {},
							threshold = 0,
							a = b = 0;

						if (self.sizeOf(bestRules) < nbRules) {
							self.log("Not enough rules: ", self.sizeOf(bestRules));
							return false;
						}

						// Find out which rule has the best eCPM
						faZepto.each(bestRules, function(index, item) {
							if (!bestRule.id || item.amount_req_ecpm_weighted > bestRule.amount_req_ecpm_weighted) {
								bestRule = {
									id: index,
									amount_req_ecpm_weighted: item.amount_req_ecpm_weighted
								};
							}
						});

						a = bestRule.amount_req_ecpm_weighted;

						threshold = a * (1 - amountThreshold / 100);

						self.log('bestRule', bestRule);
						self.log('threshold', threshold);

						// Filter out items that don't match the desired request eCPM
						faZepto.each(bestRules, function(index, item) {
							b = item.amount_req_ecpm_weighted;

							if (b < threshold) {
								return null;
							}

							rulesMap[index] = item;
						});

						rulesMap[bestRule.id] = bestRules[bestRule.id];

						self.log(rulesMap);

						if (rulesMap) {
							M.rules = [];
							faZepto.each(rulesMap, function(key, rule) {
								var value = rule.amount_req_ecpm_weighted;
								var fill_rate = rule.fill_rate;
								if (rule.amount_req_ecpm <= 0) {
									return true;
								}
								M.rules.push([key, value, fill_rate]);
							});
						}

						M.remix().then(resolve, reject);
					}, reject);
				}, reject);
			}, reject);
		});
	};

	module.prototype.pickRandomRule = function(options) {
		var opts = faZepto.extend({}, options);
		return new Promise(function(resolve, reject) {
			M.getRules().then(function() {
				var i = 0,
					factor = 0,
					fr = 0,
					val = 0
				;

				if (!self.sizeOf(M.rules)) {
					M.rule = "";
					resolve(M.rule);
					return;
				}

				var randomRule = M.rules[self.rand(0, self.sizeOf(M.rules) - 1)];
				
				if (!randomRule) {
				    reject();
				    return;
				}

				M.rule = {
					"name": randomRule[0],
					"value": randomRule[1]
				};

				self.log(M.rule);

				resolve(M.rule);
			}, reject);
		});
	};

	module.prototype.remix = function(options) {
		var opts = faZepto.extend({
				lastRequestWas: "" /* fill | nofill | backfill */
			}, options),
			randomOpts = {};

		switch (opts.lastRequestWas) {
			case 'nofill': 
				// pick a new rule by chance with the highest fill rate
				//randomOpts.byFillrate = true;
				break;
			case 'fill':
			case 'backfill':
			default:
				// pick a new rule by chance with the highest value
				break;
		}

		return M.pickRandomRule(randomOpts);
	};

	module.prototype.getRule = function() {
		if (!M.rule) {
			return "";
		}
		return M.rule;
	};

	module.prototype.getRuleName = function() {
		if (!M.rule) {
			return "";
		}
		return M.rule.name;
	};

	module.prototype.getRuleValue = function() {
		if (!M.rule) {
			return 0;
		}
		return M.rule.value;
	};

	module.prototype.getRuleRef = function() {
		var refName = M.getRuleRefName();

		return self.firebase.database().ref(refName);
	};

	module.prototype.getLocale = function() {
		if (null !== M.locale) {
			return M.locale;
		}

		return new Promise(function(resolve, reject) {
			self.geo.getCountryCode().then(function(countryCode) {
				M.locale = countryCode.toUpperCase();
				resolve(M.locale);
			}, function() {
				M.locale = self.gametranslation.getNavigatorLanguage();
				M.locale = M.locale.toUpperCase();
				resolve(M.locale);
			});
		});
	};

	module.prototype.getTopGrossingFillRate = function() {
		var topGrossing = {};

		return new Promise(function (resolve, reject) {
			var fr = 1,
				val = 1;
			faZepto.each(M.rules, function (key, rule) {
				fr = rule[2] || 0;
				val = rule[1] || 0;
				if (typeof topGrossing.fill_rate === "undefined" || topGrossing.val < val) {
					topGrossing.val = val;
					topGrossing.fill_rate = fr;
				}
			});

			resolve(Math.max(0, topGrossing.fill_rate));
		});
	};

	M = new module();
	M.init();

	return M;
};



fg_api.prototype.gametranslationModule = function() {
	var self = this,
		M;

	function module(){ // define private vars

	}

	var gameTranslationPrototype = module.prototype;

	gameTranslationPrototype.init = function() {
		M.curLangString = M.getUserLang();

		M.translationData = M.getGameTranslations();

		M.translateHtml(faZepto('body'));
	};

	gameTranslationPrototype.getSupportedLanguages = function() {
		return self.config.languages;
	};

	gameTranslationPrototype.getGameTranslations = function() {
		var i18n = self.config.game_i18n,
			lang = M.curLangString;

		if (i18n.current) {
			return i18n.current;
		}

		faZepto.each(i18n, function (language, translations) {
			faZepto.each(translations, function(key, value) {
				if(value == null){
					i18n[language][key] = "";
				} else if(typeof i18n[language][key] === "string") {
					i18n[language][key] = value.replace(/\{lang\}/g, language);
				}
			});
		});

		i18n.current = faZepto.extend(
			{},
			i18n["default"],
			i18n[self.config.aid+".default"],
			i18n[lang],
			i18n[self.config.aid+'.'+lang]
		);

		return (self.config.game_i18n.current = i18n.current);
	};

	gameTranslationPrototype.translateString = function(key) {
		return M.translationData.hasOwnProperty(key) ? M.translationData[key] : null;
	};

	gameTranslationPrototype.getNavigatorLocale = function() {
		var language = "";

		if (navigator.languages && self.sizeOf(navigator.languages)) {
			language = navigator.languages[0];
		} else if (navigator.language) {
			language = navigator.language;
		} else if (navigator.userLanguage) {
			language = navigator.userLanguage;
		} else if (navigator.browserLanguage) {
			language = navigator.browserLanguage;
		}

		return language;
	};

	gameTranslationPrototype.getNavigatorLanguage = function() {
		return M.getNavigatorLocale().substr(0, 2);
	};

	gameTranslationPrototype.getUserLang = function() {
		var urlParams = self.getUrlParams(),
			lang = M.getNavigatorLanguage();

		if (urlParams.locale && urlParams.locale.length == 2){
			return urlParams.locale;
		}

		switch (lang) {
			case "ch":
			case "at":
				return "de";
			default:
				return lang;
		}
	};

	gameTranslationPrototype.translateHtml = function ($selector) {
		$selector.find('[data-i18n]').each(function() {
			var textkey = this.getAttribute('data-i18n');
			this.innerHTML = M.translateString(textkey);
		});
		return $selector;
	};

	gameTranslationPrototype.translateXml = function (xml) {
		if (!xml) {
			return xml;
		}

		var $xml = jQuery(jQuery.parseXML(xml)),
			prefix = xml.substr(0, xml.indexOf("\n"));

		self.log($xml);

		$xml.find('[data-i18n]').each(function() {
			var textkey = this.getAttribute('data-i18n');
			jQuery(this).text(M.translateString(textkey));
		});

		var tagName = $xml.get(0).documentElement.tagName;
		try {
			xml = (new XMLSerializer()).serializeToString($xml.get(0));
		} catch (ex) {
			// xml = prefix + "\n" + "<" + tagName + ">" + $xml.get(0).documentElement + "</" + tagName + ">";
		}

		self.log(xml);

		return xml;
	};

	M = new module();

	M.init();

	return M;
};

fg_api.prototype.__ = function (key) {
	return this.gametranslation.translateString(key);
};

// Alias for __()
fg_api.prototype.translate = function(key) {
	return this.__(key);
};

fg_api.prototype.translateHtml = function() {
	return this.gametranslation.translateHtml.apply(this, arguments);
};

fg_api.prototype.translateXml = function() {
	return this.gametranslation.translateXml.apply(this, arguments);
};

fg_api.prototype.getCurrentLanguage = function () {
	return this.gametranslation.curLangString;
};




fg_api.prototype.gameModule = function() {
	var self = this,
		M;

	function module(){ // define private vars
		this.waitingCounter = 0;
	}

	var gamePrototype = module.prototype;

	gamePrototype.prepare = function() {
		M.linkCanonical().changeOpacity().changeMetaViewport();
		faZepto(self.rootElement).on('faGame:loaded', M.changeMetaViewport);
		faZepto(self.rootElement).on('faGame:loaded', M.hideCanvasBodyOverflow);

		return new Promise(function (resolve, reject) {
			(function next() {
				if (!window.famobi_pregameJS || !window.famobi_pregameJS.length) {
					resolve(M);
					return;
				}
				var currentScript = window.famobi_pregameJS.shift();

				if (typeof currentScript === "function") {
					currentScript();
					next();
				} else {
					var scriptEl = document.createElement("script");
					scriptEl.onload = next;
					scriptEl.onerror = next;
					scriptEl.src = currentScript;
					self.bodyElement.appendChild(scriptEl);
				}
			})();
		});
	};

	gamePrototype.setWaiting = function(newVal) {
		newVal ? M.waitingCounter++ : M.waitingCounter > 0 ? M.waitingCounter-- : M.waitingCounter = 0;
		return M;
	};

	gamePrototype.isWaiting = function() {
		return M.waitingCounter > 0;
	};

	gamePrototype.init = function() {
		self.spinner.show();

		(function next() {
			// is the game waiting for an Ad to finish loading/displaying (DFP Video)?
			if (M.isWaiting()) {
				return;
			}

			if (!window.famobi_gameJS.length) {
				faZepto(self.rootElement).trigger('faGame:loaded');
				self.spinner.hide();
				if (self.debug) {
					self.navigation.show();
				}
				// Run Adapter if possible
				// self.adapters.run("game", "loaded");
				return;
			}
			var currentScript = window.famobi_gameJS.shift();

			if (typeof currentScript === "function") {
				currentScript();
				next();
			} else {
				var scriptEl = document.createElement("script");
				scriptEl.onload = next;
				scriptEl.onerror = next;
				scriptEl.src = currentScript;
				self.bodyElement.appendChild(scriptEl);
			}
		})();
	};

	gamePrototype.pause = function() {
		//self.log('game.pause');

		M.setWaiting(true);

		try {
			if (typeof window.famobi_onPauseRequested == 'function') {
				window.famobi_onPauseRequested();
				return true;
			}
			// Phaser
			if (window.game && typeof window.game.paused !== "undefined") {
				window.game.paused = true;
				return true;
			}
			// Construct 2
			if (typeof window.cr_setSuspended !== "undefined") {
				cr_setSuspended(true);
				return true;
			}
			// CreateJS <3
			if (typeof window.createjs !== "undefined") {
				//window.createjs.Sound.setMute(true);
			}
		} catch(e) {
			self.log("Pausing game failed: "+e);
		}

		return false;
	};

	gamePrototype.resume = function() {
		//self.log('game.resume');
		//self.log('isWaiting?', M.isWaiting());

		if (!M.isWaiting()) {
			self.log('game is not waiting, do not resume');
			return false;
		}

		M.setWaiting(false);

		try {
			if (typeof window.famobi_onResumeRequested == 'function') {
				window.famobi_onResumeRequested();
				return true;
			}
			// Phaser
			if (window.game && typeof window.game.paused !== "undefined") {
				window.game.paused = false;
				return true;
			}
			// Construct 2
			if (typeof window.cr_setSuspended !== "undefined") {
				cr_setSuspended(false);
				return true;
			}
			// CreateJS <3
			if (typeof window.createjs !== "undefined") {
				//window.createjs.Sound.setMute(false);
			}
		} catch(e) {
			self.log("Resuming game failed: "+e);
		}

		return false;
	};

	gamePrototype.linkCanonical = function() {
		var link = faZepto('<link rel="canonical" href="' + self.getShortLink() + '">');

		link.appendTo(self.headElement);

		return M;
	};

	gamePrototype.changeOpacity = function() {
		var opac = self.bodyElement.style.opacity+"";

		if (opac !== "" && parseInt(opac) < 1) {
			self.bodyElement.style.opacity = "1.0";
		}

		return M;
	};

	gamePrototype.changeMetaViewport = function() {
		// change meta viewport content if its attribute 'data-original' exists
		var $metaviewport = document.querySelector("meta[name=viewport]"),
			ua = navigator.userAgent,
			metaViewPortSetting = $metaviewport ? $metaviewport.getAttribute("data-original") : undefined;
		if ($metaviewport && metaViewPortSetting){
			if(!!ua.match(/iPhone|iPod|Tizen/i))
				metaViewPortSetting = 'width=device-width, user-scalable=0, minimum-scale=1.0, initial-scale=0.5, maximum-scale=0.5, minimal-ui';
			else if(!!ua.match(/iPad/i))
				metaViewPortSetting = 'width=device-width, user-scalable=0, minimum-scale=1.0, initial-scale=1.0, maximum-scale=1.0, minimal-ui';
		  	else if(!!ua.match(/Android/i))
				metaViewPortSetting = 'width=device-width, initial-scale=1, maximum-scale=1.01';

			$metaviewport.setAttribute('content', metaViewPortSetting);
		}
	};

	gamePrototype.showCanvas = function() {
		var canvas = document.querySelectorAll("canvas");
		var i = 0;
		if (canvas) {
			for (i; i < canvas.length; ++i) {
				canvas[i].style.display = canvas[i].getAttribute('fa-orig-display') || '';
			}
		}
	};

	gamePrototype.hideCanvas = function() {
		var canvas = document.querySelectorAll("canvas");
		var i = 0;
		if (canvas) {
			for (i; i < canvas.length; ++i) {
				canvas[i].setAttribute('fa-orig-display', canvas[i].style.display);
				canvas[i].style.display = "none";
			}
		}
	};

	gamePrototype.hideCanvasBodyOverflow = function() {
		var canvas = document.querySelector("canvas");
		if (canvas) {
			self.bodyElement.style.overflow = 'hidden';
		}
	};

	M = new module();

	return M;
};



fg_api.prototype.fullscreenModule = function() {
	var self = this,
		M;

	function module(){ // define private vars
		this.isSupported = false;
	}

	var fullscreenPrototype = module.prototype;

	fullscreenPrototype.init = function() {
		var elem = document.documentElement;

		try {
			if (!elem) {
				throw('documentElement not supported');
			}

			if (!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)) {
				throw('Fullscreen mode not supported');
			}

			if (elem.requestFullscreen) {
				this.requestFullscreen = 'requestFullscreen';
			} else if (elem.requestFullScreen) {
				this.requestFullscreen = 'requestFullScreen';
			} else if (elem.webkitRequestFullScreen) {
				this.requestFullscreen = 'webkitRequestFullscreen';
			} else if (elem.webkitRequestFullScreen) {
				this.requestFullscreen = 'webkitRequestFullScreen';
			} else if (elem.mozRequestFullScreen) {
				this.requestFullscreen = 'mozRequestFullScreen';
			} else if (elem.msRequestFullscreen) {
				this.requestFullscreen = 'msRequestFullscreen';
			} else {
				throw('Fullscreen API not supported');
			}

			this.isSupported = this.requestFullscreen;
		} catch (ex) {
			this.isSupported = false;
		}

		if (!self.config.gameParams.fullscreen_enabled) {
			this.isSupported = false;
		}
		
		if (!this.isSupported) {
			faZepto("[data-famobi-fullscreen]").remove();
		}
	};

	fullscreenPrototype.isSupported = function() {
		return this.isSupported;
	}

	fullscreenPrototype.start = function() {
		var elem = document.documentElement;

		if (self.fullscreen.isSupported) {
			elem[this.requestFullscreen]();
		} else {
			return false;
		}
		
		return true;
	}

	fullscreenPrototype.stop = function() {
		self.orientation.unlock();
		
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		}
		
		return true;
	}

	fullscreenPrototype.toggle = function() {
		if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
			M.start();
			setTimeout(function() {
				self.orientation.lock();
			}, 1E3);
			return true;
		} else {
			return M.stop();
		}
	}

	M = new module();
	M.init();

	return M;
};



fg_api.prototype.flashModule = function() {
	var self = this,
		M;

	function module() { // define private vars

		this.offsetWidth	= 0; // px
		this.offsetHeight	= 0; // px

		// swfobject
		this.swfUrl 		= window.famobi_gameID+".swf";
		this.replaceElemId 	= "myContent";
		this.width			= parseInt(window.innerWidth)-this.offsetWidth;
		this.height			= parseInt(window.innerHeight)-this.offsetHeight;
		this.swfVersion		= "9.0.0";
		this.xiSwfUrl		= "expressInstall.swf";
		this.flashvars 		= {
								fg_aid : window.famobi.config.aid,
								fg_uid : window.famobi.config.uuid,
								fg_game : window.famobi_gameID
							};
		this.params 		= {
								allowscriptaccess : "always"
							};
		this.attributes 	= {};
		this.callbackFn 	= function() {};
	}

	var flashPrototype = module.prototype;

	flashPrototype.init = function() {

		var fgFlash = null, // flash replacing container
			fgGetFlashLink = null, // get flash link
			arr = ['flashvars', 'params', 'attributes'];
			fgGetFlash = null; // get flash image

		if (!self.config.gameParams.flash) return false;

		//self.log("Set, ...");
		M.replaceElemId 	= self.config.gameParams.flash.replaceElemId || M.replaceElemId;
		M.swfUrl 			= self.config.gameParams.flash.swfUrl || M.swfUrl;
		M.width				= self.config.gameParams.flash.width || M.width;
		M.height			= self.config.gameParams.flash.height || M.height;
		M.swfVersion		= self.config.gameParams.flash.swfVersion || M.swfVersion;
		M.xiSwfUrl			= self.config.gameParams.flash.xiSwfUrl || M.xiSwfUrl;

		// create div container for swfobject to replace
		fgFlash = document.createElement("div");
		fgFlash.setAttribute("id", M.replaceElemId);
		fgFlash.setAttribute("style", "display: none");
		self.bodyElement.appendChild(fgFlash);

		// disable ads
		self.config.ads.off = true;

		// callback
		if(self.config.gameParams.flash.callbackFn) {
			M.callbackFn = new Function(self.config.gameParams.flash.callbackFn);
		} else {
			M.callbackFn = function() {
				if(swfobject.getFlashPlayerVersion().major === 0) {
					fgFlash.style.display = "block";

					fgGetFlashLink = self.createElement("a", {
						"href": "http://www.adobe.com/go/getflashplayer",
						"target": "_blank"
					});
					fgGetFlash = self.createElement("img", {
						"src": "/flashgames/swfobject/getFlash.png",
						"alt": "Get Adobe Flash player",
						"title": "Get Adobe Flash player"
					});
					fgGetFlashLink.appendChild(fgGetFlash);
					fgFlash.appendChild(fgGetFlashLink);

					self.modal.create({'title': 'Get Adobe Flash player'});
					self.modal.setContent(fgFlash);
				};
			};
		}

		// merge flashvars, params and attributes
		for(var key in arr) {
			if(!self.config.gameParams.flash[arr[key]]) break;
			for (var attrName in self.config.gameParams.flash[arr[key]]) { M[arr[key]][attrName] =  self.config.gameParams.flash[arr[key]][attrName]; }
		}

		//self.log("Go!");
		window.famobi_gameJS = window.famobi_gameJS || [];
		window.famobi_gameJS.unshift(
			"/flashgames/swfobject/swfobject.js",
			function() {
				swfobject.embedSWF(M.swfUrl, M.replaceElemId, M.width, M.height, M.swfVersion, M.xiSwfUrl, M.flashvars, M.params, M.attributes, M.callbackFn);
			}
		);

		return self;
	};

	//create new instace of Module
	M = new module();
	//initialize Module
	M.init();

	return M;
};





fg_api.prototype.restModule = function() {
	var self = this,
		M;

	function module() {
	};

	module.prototype.init = function() {
		
	};

	module.prototype.get = function (url, headers) {
		return new Promise(function (resolve, reject) {
			faZepto.ajax({
				url: url,
				headers: headers,
				success: function (result) {
					resolve(result);
				},
				error: function (err) {
					reject(err);
				}
			});
		});
	};

	module.prototype.getJSON = function (url, headers) {
		return new Promise(function (resolve, reject) {
			faZepto.ajax({
				url: url,
				headers: headers,
				contentType: 'application/json; charset=UTF-8',
				success: function (result) {
					resolve(result);
				},
				error: function (err) {
					reject(err);
				}
			});
		});
	};

	module.prototype.post = function(url, data, headers) {
		headers = headers || {};
		return new Promise(function (resolve, reject) {
			faZepto.ajax({
				url: url,
				type: 'POST',
				contentType: 'application/json; charset=UTF-8',
				headers: headers,
				data: JSON.stringify(data),
				success: function (result) {
					resolve(result);
				},
				error: function (err) {
					reject(err);
				}
			})
		});
	};

	M = new module();
	M.init();

	return M;
};



fg_api.prototype.playerModule = function() {
	var self = this,
		M;

	function module() {
		this.playerUrl = 'https://player-api.famobi.com';

		if (location.search.indexOf('.staging.gc.') >= 0) {
			this.playerUrl = 'https://player-api.staging.gc.famobi.com';
		}
		else if (location.hostname.indexOf('dev.') >= 0) {
			this.playerUrl = "https://player-api.staging.gc.famobi.com";
		}

		this.player = {};
		this.guestPlayer = {
			id: "",
			name: "Guest",
			token: "",
			hasAccount: false,
			hasSubscription: false
		};
	};

	module.prototype.init = function() {
		// 
	};

	module.prototype.getGUID = function() {
		// from http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript?answertab=votes#105074
		function s4() {
			return Math.floor((1 + Math.random()) * 0x10000)
				.toString(16)
				.substring(1);
		}

		return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
		s4() + '-' + s4() + s4() + s4();
	};

	module.prototype.getId = function () {
		return M.getPlayer().id;
	};

	module.prototype.getToken = function () {
		return M.getPlayer().token;
	};

	module.prototype.getPlayer = function () {
		M.player.id = self.localStorage.getItem('id', 'fa-user');
		if (M.player.id) {
			return M.player;
		}
		M.player.id = M.getGUID();
		self.localStorage.setItem('id', M.player.id, 'fa-user');
		return M.player;
	};

	M = new module();
	M.init();

	return M;
};




fg_api.prototype.socketModule = function() {
	var self = this,
		M;

	function socket() {
		var me = this;
		this.uid = '';
		this.resolve = null;
		this.reject = null;
		this.promise = new Promise(function (resolve, reject){
			me.resolve = resolve;
			me.reject = reject;
		});
		this.instance = null;
		// only set when the connection should not automatically reconnect,
		// e.g. when actively closed by the server due to multiple instances
		// from the same user
		M.autoReconnect = true;
	}

	function module() {
		this.httpsUrl = 'https://ws-api.famobi.com/sock';
		this.wsUrl = 'wss://ws-api.famobi.com/ws';

		if (location.search.indexOf('.staging.gc.') >= 0) {
			this.httpsUrl = 'https://ws-api.staging.gc.famobi.com/sock';
			this.wsUrl = 'wss://ws-api.staging.gc.famobi.com/ws';
		}
		else if (location.hostname.indexOf('dev.') >= 0) {
			this.httpsUrl = "https://ws-api.staging.gc.famobi.com/sock";
			this.wsUrl = "wss://ws-api.staging.gc.famobi.com/ws";
		}
	}

	module.prototype.init = function() {
	}

	socket.prototype.hubs = {
		connection: {
			event: {
				uid: function (data) {
					this.uid = data;
					self.log("Event uid", this);
				},
				close: function(){
					M.instance = null;
					M.autoReconnect = false;
					self.log("Socketconnection closed");
				}
			}
		},
		error: {
			event: {
				"2": function (data) {
					self.log("error", data);
					alert("Error: " + data);
					self.modal.shakeAndClose();
				}
			}
		},
		payment: {
			event: {
				item_bought: function (itemId) {
					self.pay.fireSuccessCallback(itemId);
				}
			}
		}
	};

	socket.prototype.init = function () {
		var me = this;
		var sock = function () {
			var ws,
				useWebsocket = false;
			try {
				if (useWebsocket) {
				// try to establish native WebSocket connection
					ws = new WebSocket(M.wsUrl);
				} else {
				// otherwise fall back to SockJS implementation
					ws = new SockJS(M.httpsUrl, null, {
						transports: [
							'websocket'
						]
					});
				}
			} catch (e) {
				self.log(e);
			}
			return ws;
		}();

		sock.onopen = function () {
			self.log('open');
			sock.send(JSON.stringify({
				userid: self.player.getId()
			}));
			me.resolve();
			self.modal.setHeader("");
		};
		sock.onmessage = function (e) {
			self.log('message', e);
			var msg = JSON.parse(e.data);
			self.log("msg", msg);
			me.handleIncomingMessage(msg.hub, msg.ev, msg.data);
		};
		sock.onclose = function () {
			M.instance = null;
			self.log('close');
			if (M.autoReconnect) {
				self.modal.setHeader("Connection lost...");
				setTimeout(function() {
					self.modal.setHeader("Trying to reconnect...");
					M.getInstance();
				}, 2E3);
			}
		};

		var send = function (hub, ev, msg) {
			sock.send(JSON.stringify({
				hub: hub,
				ev: ev,
				msg: msg
			}))
		};
	};

	socket.prototype.handleIncomingMessage = function (hub, event, data) {
		var me = this;
		hub = me.hubs[hub];
		if (hub == null) {
			self.log("hub not found: " + hub);
			return;
		}

		event = hub.event[event];
		if (event == null) {
			self.log("event " + event + " not found within hub: " + hub);
			return;
		}

		//dispatch event
		event.call(me, data);
	};

	socket.prototype.getPromise = function (){
		return this.promise;
	};

	module.prototype.getInstance = function() {
		if (!M.instance) {
			M.instance = new socket();
			M.instance.init();
		}
		return M.instance;
	};

	M = new module();
	M.init();

	return M;
};




fg_api.prototype.payModule = function() {
	var self = this,
		postMessageListeners = {},
		M;

	function module() {
	};

	module.prototype.init = function() {
		// which items are available?
		var items = M.getItems();

		if (!items) {
			return;
		}

		var newStylesheet = document.createElement("link");
		newStylesheet.setAttribute("rel", "stylesheet");
		newStylesheet.setAttribute("type", "text/css");
		newStylesheet.setAttribute("href", self.config.assetsPath + "/css/pay.css");
		self.headElement.appendChild(newStylesheet);

		self.bodyElement.appendChild(faZepto(self.config.payHtml).get(0));

		self.iframe
			.subscribePostMessageListener("pay", "selectMethod", function(data) {
				M.selectMethod(data.method);
			})
			.subscribePostMessageListener("pay", "selectMethod2", function(data) {
				// M.selectMethod(data.method);
			})
			.subscribePostMessageListener("pay", "trackError", function(data) {
				M.trackError(data.errorMsg);
			})
			.subscribePostMessageListener("pay", "trackCountry", function(data) {
				M.trackCountry(data.code);
			})
		;

		this.paymentUrl = 'https://commune.famobi.com/product.html';

		if (location.search.indexOf('.staging.gc.') >= 0) {
			this.paymentUrl = 'https://commune.staging.gc.famobi.com/product.html';
		}
		else if (location.hostname.indexOf('dev.') >= 0) {
			this.paymentUrl = "https://commune.dev.famobi.com/product.html";
		}

		this.paymentApiUrl = 'https://payment-api.famobi.com';

		if (location.search.indexOf('.staging.gc.') >= 0) {
			this.paymentApiUrl = 'https://payment-api.staging.gc.famobi.com';
		}
		else if (location.hostname.indexOf('dev.') >= 0) {
			this.paymentApiUrl = "https://payment-api.staging.gc.famobi.com";
		}
	};

	module.prototype.selectMethod = function(method) {
		self.tracking.trackEvent('Payment event', 'Select method ' + method, window.famobi_gameID);

		self.modal.setHeader(self.__('api.paymentmethod_headline') + self.__('api.paymentmethod.' + method));
		self.modal.activateCloseOverlay(false);
	};

	module.prototype.trackError = function(message) {
		self.tracking.trackEvent('Payment event', 'Error: ' + message, window.famobi_gameID);
	};

	module.prototype.trackCountry = function(code) {
		self.tracking.trackEvent('Payment event', 'Country Code: ' + code, window.famobi_gameID);
	};

	module.prototype.getItem = function(itemId) {
		var paymentItems = M.getItems();
		if (!paymentItems || !(itemId in paymentItems)) {
			throw "itemId " + itemId + " is not defined";
		}
		return paymentItems[itemId];
	};

	module.prototype.getItems = function() {
		var paymentItems = self.__('api.payment');
		self.log("famobi.pay items: ", paymentItems);
		return paymentItems;
	};

	module.prototype.beginTransaction = function(itemId, paymentSystem) {
		var websocketApi = self.socket.getInstance();

		var guid = M.getGUID();
		self.localStorage.setItem('pay.txid', guid);

		self.tracking.trackEvent('Payment event', 'Select item ' + itemId, window.famobi_gameID);

		if (!paymentSystem) {
			paymentSystem = '';
		} else {
			M.selectMethod(paymentSystem);
		}

		self.modal.setCloseCallback(function() {
			self.localStorage.removeItem('pay.txid');
		})
	};

	module.prototype.buy = function(itemId, paymentSystem) {
		var websocketApi = self.socket.getInstance();
		var item = M.getItem(itemId);
		var widgetUrlPromise = M.getPaymentWidgetUrl(itemId, paymentSystem);

		M.beginTransaction(itemId, paymentSystem);

		websocketApi.getPromise()
			.then(widgetUrlPromise)
			.then(function (url){
				return url;
				// self.game.hideCanvas();
				// self.iframe.show(M.paymentUrl + '?' +
				// 	"usertxid=" + self.localStorage.getItem('pay.txid') +
				// 	"&userid=" + self.player.getId() +
				// 	'&gameid=' + self.config.uuid +
				// 	'&portalid=' + self.config.pid +
				// 	'&item=' + itemId +
				// 	'&name=' + encodeURIComponent(item.name + ', ' + document.title) +
				// 	'&price=' + item.price +
				// 	'&ps=' + paymentSystem
				// 	, {
				// 		'mode': paymentSystem == 'cc' ? 'seamless' : 'pay',
				// 		'showCloseBtn': false,
				// 		'overlayColor': paymentSystem == 'mobiamo' ? '#fff' : '#333',
				// 		'width': detection.is.pc ? 641 : undefined,
				// 		'height': paymentSystem == 'paypal' ? 100 : 0
				// 	}
				// );
				// famobi.modal.activateCloseOverlay(false);
				// setTimeout(function() {
				// 	self.modal.showCloseBtn();
				// }, 10E3);
			});

		return false;
	};

	module.prototype.getUrl = function(itemId, paymentSystem) {
		M.beginTransaction(itemId, paymentSystem);
		
		return M.getPaymentWidgetUrl(itemId, paymentSystem);
	};

	module.prototype.getPaymentWidgetUrl = function (itemId, paymentSystem) {
		var item = M.getItem(itemId);
		var widget = "m2_1";
		var websocketApi = self.socket.getInstance();

		return new Promise(function(resolve, reject) {
			Promise.resolve(websocketApi.getPromise()).then(function() {
				self.rest.getJSON(M.paymentApiUrl + "/widget/mtx?" +
					"widget=" + widget +
					"&amount=" + item.price +
					"&currencyCode=" + (item.currency || "EUR") +
					"&ag_name=" + encodeURIComponent(item.name + ' ' + document.title) +
					"&ag_external_id=" + itemId +
					"&ag_type=fixed" +
					"&portalid=" + self.config.pid +
					"&gameid=" + self.config.uuid +
					"&uid=" + self.player.getId()
				).then(resolve, reject);
			});
		});
	};

	module.prototype.getPaymentWidgetUrls = function (itemId, paymentSystems) {
		var item = M.getItem(itemId),
			widgetUrls = {},
			y = 0;

		M.beginTransaction(itemId);

		paymentSystems = paymentSystems || {'paypal': true, 'cc': true, 'mobiamo': true};

		if (!itemId) {
			throw 'missing parameter: itemId';
		}

		for (y in paymentSystems) {
			var key = y;
			var value = paymentSystems[y];
			if (!value) {
				continue;
			}
			widgetUrls[key] = M.paymentUrl + '?' +
				"usertxid=" + self.localStorage.getItem('pay.txid') +
				"&userid=" + self.player.getId() +
				'&gameid=' + self.config.uuid +
				'&portalid=' + self.config.pid +
				'&item=' + itemId +
				'&name=' + encodeURIComponent(item.name + ', ' + document.title) +
				'&price=' + item.price +
				'&ps=' + key;
		}

		return widgetUrls;
	};

	module.prototype.getGUID = function() {
		// from http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript?answertab=votes#105074
		function s4() {
			return Math.floor((1 + Math.random()) * 0x10000)
				.toString(16)
				.substring(1);
		}

		return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
		s4() + '-' + s4() + s4() + s4();
	};

	module.prototype.showSelection = function(itemId, options) {
		var opts = faZepto.extend({
			mode: 'seamless', 
			overlayColor: '#fff',
			paymentSystems: null
		}, options);
		var trackingText = 'Show selection';
		self.tracking.trackEvent('Payment event', trackingText, window.famobi_gameID);
		self.spinner.show(); 
		self.modal.create(opts);
		self.modal.activateCloseOverlay(false);

		var $clonedOverlayContent = faZepto('[data-paymentitem="'+itemId+'"]').clone();

		self.gametranslation.translateHtml($clonedOverlayContent);

		M.getUrl(itemId).then(function(url) {
			var widgetUrl = url;
			$clonedOverlayContent.find('[data-buy-paymentmethod]').each(function () {
				var $this = faZepto(this),
					ps = $this.attr('data-buy-paymentmethod'),
					href = widgetUrl;

				$this.attr('href', href).attr('target', '_blank');
			});

			self.modal.setContent($clonedOverlayContent.css('display', 'block').get(0));
			self.spinner.hide();
		});
	};

	module.prototype.unregisterSuccessCallback = function() {
		M.successCallback = null;
	};

	module.prototype.registerSuccessCallback = function(callback) {
		self.log(typeof callback !== "function");
		if (typeof callback !== "function") {
			throw 'Error: pay.callback is not a function';
		}
		M.successCallback = callback;
	};

	module.prototype.fireSuccessCallback = function(itemId) {
		self.log("fireSuccessCallback(itemId): ", itemId);
		var item = M.getItem(itemId);

		self.tracking.trackEvent('Payment event', 'Bought item ' + itemId, window.famobi_gameID);

		self.tracking.trackEvent('Payment event', 'Payment success', itemId + ' in ' + window.famobi_gameID, Number(item.price));

		var usertxid = self.localStorage.getItem('pay.txid');
		if (typeof M.successCallback === "function") {
			M.successCallback(item);
		} else {
			throw 'Error: successCallback is not defined';
		}

		setTimeout(function() {
			window.focus();
			alert('🎈 Thank you 🎁');
			self.modal.close();
		}, 1E3);
	};

	M = new module();
	M.init();

	return M;
};

fg_api.prototype.buy = function(item, callback) {
	var self = this;

	self.pay.registerSuccessCallback(callback);

	return self.pay.buy(item);
};

fg_api.prototype.buyWith = function(paymentSystem, item, callback) {
	var self = this;

	self.pay.registerSuccessCallback(callback);

	return this.pay.buy(item, paymentSystem);
};

fg_api.prototype.showSelection = function(item, options, callback) {
	var self = this;

	if (typeof options === "function") {
		callback = options;
		options = {};
	}

	if (typeof callback !== "function") {
		throw 'Error: pay.callback is not defined';
	}

	self.pay.registerSuccessCallback(callback);

	return self.pay.showSelection(item, options);
};




fg_api.prototype.videoModule = function() {
	var self = this,
		M;

	function module() {
		this.promise = null;
		this.element = null;
	}

	module.prototype.init = function() {
		if (window.famobi_env === "vp") {
			M.element = document.getElementById('fa-video');

			M.player = videojs('fa-video');

			M.player.src([
				{
					type: "video/mp4",
					src: "https://assets.cdn.famobi.com/marketing/videos/" + self.config.video.sources.mp4
				}
			]);

			M.player.dock({
				title: self.config.name + " 📽"
			});

			M.player.brand({
				image: 'FamobiFLogo.svg',
				title: 'Proudly brought to you by Famobi.com',
				destination: 'https://famobi.com',
				destinationTarget: '_blank'
			});

			M.player.watermark({
				image: 'FamobiFWhiteLogo.svg',
				position: 'top-right',
				fadeTime: 1000,
				url: 'https://famobi.com'
			});

			M.player.replayButton();

			// Remove controls from the player on iPad to stop native controls from stealing
			// our click
			var contentPlayer = document.getElementById('fa-video');
			if ((navigator.userAgent.match(/iPad/i) ||
				navigator.userAgent.match(/Android/i)) &&
				contentPlayer.hasAttribute('controls')) {
				contentPlayer.removeAttribute('controls');
			}

			// Initialize the ad container when the video player is clicked, but only the
			// first time it's clicked.
			var startEvent = 'click';
			if (navigator.userAgent.match(/iPhone/i) ||
				navigator.userAgent.match(/iPad/i) ||
				navigator.userAgent.match(/Android/i)) {
				startEvent = 'touchend';
			}

			M.player.one(startEvent, function() {
				M.player.ima.initializeAdDisplayContainer();
				M.player.ima.requestAds();
				M.player.play();

				// track video play
				var postData = {
					"aid": self.config.aid,
					"event": "video.play"
				}
				faZepto.post('/service/video/videos/' + self.config.video.id + '/track/', postData);
			});
		}

		return self;
	};

	module.prototype.ready = function() {
		if (!M.promise) {
			M.promise = new Promise(function(resolve, reject) {
				// resolve video by game-id
			});
		}

		return M.promise;
	};

	M = new module();
	M.init();

	return M;
};



fg_api.prototype.debugModule = function() {
	var self = this,
		M;

	function module() {

	};

	module.prototype.init = function() {
		if (self.debug) {
			(function (d, url, fgJS, firstJS) {
				fgJS = d.createElement('script');
				firstJS = d.getElementsByTagName('script')[0];
				fgJS.src = url;
				firstJS.parentNode.insertBefore(fgJS, firstJS);
			})(document, 'https://markknol.github.io/console-log-viewer/console-log-viewer.js?closed=true');
		}

		// self.adapters.add('analytics', 'trackStats', function(key, value) {
		// 	famobi.log('%c trackStats ', 'background: #333333; color: white; display: block;');
		// 	if(typeof key === "string") {
		// 		famobi.log(key + ": " + value);
		// 	} else {
		// 		famobi.log(key);
		// 	}
		// });

		// self.adapters.add('analytics', 'trackEvent', function(event, params) {
		// 	famobi.log('%c '+event+" %c (trackEvent)", 'background: #0092c3; color: white; display: block;', '');
		//  	famobi.log(params);
		// });

		// self.adapters.add('analytics', 'trackScreen', function(screen, pageTitle){
		// 	famobi.log('%c '+screen+' %c (trackScreen)'+(pageTitle ? ' - pageTitle: '+pageTitle : ''), 'background: #f08119; color: white; display: block;', '') ;
		// });


	};

	M = new module();
	M.init();

	return M;
};




fg_api.prototype.init = function() {
	var self = this;
	self.rootElement = document.getElementById("fg-root");
	self.bodyElement = document.getElementsByTagName("body")[0];
	self.headElement = document.getElementsByTagName("head")[0];

	if (!self.rootElement){
		self.rootElement = self.createElement("div", {
			"id": "fg-root",
			"class": "fg-root",
			"hidden": "hidden"
		});
		document.body.insertBefore(self.rootElement,document.body.firstChild);
	}

	self.fgOverlay = self.createElement("div", {"id": "fg-overlay"});

	if (self.config.gameParams.overlay_position)
		self.fgOverlay.className = 'overlay-' + self.config.gameParams.overlay_position + ' clip-' + self.config.gameParams.overlay_position;

	if (self.config.gameParams.overlay_distance && self.config.gameParams.overlay_distance !== ''){
		if(self.config.gameParams.overlay_position && self.config.gameParams.overlay_position == "bottom")
			self.fgOverlay.style.bottom = self.config.gameParams.overlay_distance + "px";
		else
			self.fgOverlay.style.top = self.config.gameParams.overlay_distance + "px";
	}

	self.rootElement.appendChild(self.fgOverlay);

	self.config.name = faZepto.parseJSON(self.config.name);
	self.config.package_id = faZepto.parseJSON(self.config.package_id);

	document.title = self.config.name;

	function require(module) {
		return self[module + "Module"] && self[module + "Module"].call(self, Array.prototype.slice.call(arguments, 1));
	}
	self.game 			= require("game");
	// self.adapters 		= require("adapters");
	self.localStorage 	= require("storage", "localStorage");
	self.sessionStorage = require("storage", "sessionStorage");
	if (self.config.aid !== 'A-MBC') {
		self.sdk		= require("sdk");
	}
	self.gametranslation= require("gametranslation");
	self.rest			= require("rest");
	self.firebase		= require("firebase");
	self.geo 			= require("geo");
	self.lsg 			= require("lsg");

	function onloadCallback(){
		self.rootElement.removeAttribute("hidden");
		// keep order
		// navigation first, because event handlers and language switches otherwise don't work
		self.navigation 	= require("navigation");
		// spinner first, used by ads
		self.spinner 		= require("spinner").show();
		self.tracking 		= require("tracking");
		self.iframe 		= require("iframe");
		self.modal          = require("modal");
		self.highscores 	= require("highscores");
		self.screenshot 	= require("screenshot");
		// self.ads 			= require("ads");
		self.notify 		= require("notify");
		self.fullscreen		= require("fullscreen");
		self.orientation	= require("orientation");
		self.flash			= require("flash");
		self.player			= require("player");
		self.socket			= require("socket");
		self.pay			= require("pay");
		self.video			= require("video");
		self.debugger		= require("debug");

		self.game.init();

		if (detection.is.pc && window.console) {
			console.log("%c ", "background: #fff; margin-right: 10px; border-left: 150px dashed #0092c3;");
			console.log("%c ", "background: #fff; margin-right: 10px; border-left: 50px dashed #f08119;");
			console.log("%c famobi.com ", "background: #fff; color: #333; padding-left: 60px; border-left: 15px dashed #333;");
		}
	}
	
	// Favicon
	if (!faZepto('link[rel="icon"]').length) {
		if (self.config.favicon_32) {
			self.headElement.appendChild(faZepto('<link rel="icon" type="image/png" sizes="32x32" href="' + self.config.favicon_32 + '">').get(0));
		}
		if (self.config.favicon_64) {
			self.headElement.appendChild(faZepto('<link rel="icon" type="image/png" sizes="64x64" href="' + self.config.favicon_64 + '">').get(0));
		}
		if (self.config.favicon_96) {
			self.headElement.appendChild(faZepto('<link rel="icon" type="image/png" sizes="96x96" href="' + self.config.favicon_96 + '">').get(0));
		}
		if (self.config.favicon_192) {
			self.headElement.appendChild(faZepto('<link rel="icon" type="image/png" sizes="192x192" href="' + self.config.favicon_192 + '">').get(0));
		}
	}

	// Load Styles
	function loadStylesheet() {
		return new Promise(function(resolve, reject) {
			self.wait(1500).then(resolve);
			var newStylesheet = document.createElement("link");
			newStylesheet.setAttribute("rel", "stylesheet");
			newStylesheet.setAttribute("type", "text/css");
			newStylesheet.setAttribute("href", self.config.assetsPath + "/css/play.css");
			newStylesheet.onload = resolve;
			newStylesheet.onerror = resolve;

			self.headElement.appendChild(newStylesheet);
		});
	}

	function loadMoreGamesButton() {
		return new Promise(function(resolve, reject) {
			// Hack! Detect if more-games-button can be loaded, otherwise fall back to a transparent png
			var moreGamesBtn = self.getMoreGamesButtonImage();
			var moreGamesImg = new Image();

			self.firebase.isReady().then(function() {
				if (detection.is.android || (detection.is.pc && self.config.aid.indexOf("A1000-") === 0)) {
					self.firebase.database().ref('/fgs_android/apps/' + self.config.package_id + '/notify').once('value').then(function (snapshot) {
						if (snapshot.val()) {
							// self.config.game_i18n.current.more_games_url = self.getAppLink();
							// self.config.game_i18n.current.more_games_image = "/portal/7e1fadf8-c3f9-43d9-a819-811a73337e61/more-games-button/600x253/58ca6f0c83608.png";
							self.config.notify = true;
							resolve();
						} else {
							resolve();
						}
					}, resolve);
					return;
				} else if (detection.is.ios) {
					self.firebase.database().ref('/fgs_ios/apps/' + self.config.package_id + '/notify').once('value').then(function (snapshot) {
						if (snapshot.val()) {
							// self.config.game_i18n.current.more_games_url = self.getAppLink();
							// self.config.game_i18n.current.more_games_image = "/portal/560a27a4-9570-4d54-bab9-c610b5d5b5d2/more-games-button/600x253/589485f516224.png";
							self.config.notify = true;
							resolve();
						} else {
							resolve();
						}
					}, resolve);
					return;
				}
					
				moreGamesImg.onload = resolve;
				moreGamesImg.onerror = function() {
					if (self.config.game_i18n.current) {
						self.config.game_i18n.current.more_games_image = "/html5games/branding/default/More_Games600x253_transparent.png";
						resolve();
					}
					resolve();
				}
				moreGamesImg.src = moreGamesBtn;
			}, resolve);
		});
	}

	Promise.all([
		self.game.prepare(), 
		loadStylesheet(),
		loadMoreGamesButton()
	]).then(onloadCallback).catch(onloadCallback);

	return self;
};