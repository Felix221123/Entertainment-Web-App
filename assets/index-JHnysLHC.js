function cm(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function dm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Td={exports:{}},$s={},Cd={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fi=Symbol.for("react.element"),fm=Symbol.for("react.portal"),hm=Symbol.for("react.fragment"),pm=Symbol.for("react.strict_mode"),mm=Symbol.for("react.profiler"),vm=Symbol.for("react.provider"),gm=Symbol.for("react.context"),ym=Symbol.for("react.forward_ref"),_m=Symbol.for("react.suspense"),wm=Symbol.for("react.memo"),Im=Symbol.for("react.lazy"),_u=Symbol.iterator;function Em(t){return t===null||typeof t!="object"?null:(t=_u&&t[_u]||t["@@iterator"],typeof t=="function"?t:null)}var Nd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pd=Object.assign,Rd={};function lr(t,e,n){this.props=t,this.context=e,this.refs=Rd,this.updater=n||Nd}lr.prototype.isReactComponent={};lr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};lr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ad(){}Ad.prototype=lr.prototype;function sl(t,e,n){this.props=t,this.context=e,this.refs=Rd,this.updater=n||Nd}var ol=sl.prototype=new Ad;ol.constructor=sl;Pd(ol,lr.prototype);ol.isPureReactComponent=!0;var wu=Array.isArray,Od=Object.prototype.hasOwnProperty,al={current:null},xd={key:!0,ref:!0,__self:!0,__source:!0};function Ld(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Od.call(e,r)&&!xd.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:fi,type:t,key:s,ref:o,props:i,_owner:al.current}}function km(t,e){return{$$typeof:fi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ll(t){return typeof t=="object"&&t!==null&&t.$$typeof===fi}function Sm(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Iu=/\/+/g;function vo(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Sm(""+t.key):e.toString(36)}function Bi(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case fi:case fm:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+vo(o,0):r,wu(i)?(n="",t!=null&&(n=t.replace(Iu,"$&/")+"/"),Bi(i,e,n,"",function(u){return u})):i!=null&&(ll(i)&&(i=km(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Iu,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",wu(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+vo(s,a);o+=Bi(s,e,n,l,i)}else if(l=Em(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+vo(s,a++),o+=Bi(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ti(t,e,n){if(t==null)return t;var r=[],i=0;return Bi(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Tm(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var _e={current:null},Hi={transition:null},Cm={ReactCurrentDispatcher:_e,ReactCurrentBatchConfig:Hi,ReactCurrentOwner:al};F.Children={map:Ti,forEach:function(t,e,n){Ti(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ti(t,function(){e++}),e},toArray:function(t){return Ti(t,function(e){return e})||[]},only:function(t){if(!ll(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};F.Component=lr;F.Fragment=hm;F.Profiler=mm;F.PureComponent=sl;F.StrictMode=pm;F.Suspense=_m;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cm;F.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Pd({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=al.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Od.call(e,l)&&!xd.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:fi,type:t.type,key:i,ref:s,props:r,_owner:o}};F.createContext=function(t){return t={$$typeof:gm,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:vm,_context:t},t.Consumer=t};F.createElement=Ld;F.createFactory=function(t){var e=Ld.bind(null,t);return e.type=t,e};F.createRef=function(){return{current:null}};F.forwardRef=function(t){return{$$typeof:ym,render:t}};F.isValidElement=ll;F.lazy=function(t){return{$$typeof:Im,_payload:{_status:-1,_result:t},_init:Tm}};F.memo=function(t,e){return{$$typeof:wm,type:t,compare:e===void 0?null:e}};F.startTransition=function(t){var e=Hi.transition;Hi.transition={};try{t()}finally{Hi.transition=e}};F.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};F.useCallback=function(t,e){return _e.current.useCallback(t,e)};F.useContext=function(t){return _e.current.useContext(t)};F.useDebugValue=function(){};F.useDeferredValue=function(t){return _e.current.useDeferredValue(t)};F.useEffect=function(t,e){return _e.current.useEffect(t,e)};F.useId=function(){return _e.current.useId()};F.useImperativeHandle=function(t,e,n){return _e.current.useImperativeHandle(t,e,n)};F.useInsertionEffect=function(t,e){return _e.current.useInsertionEffect(t,e)};F.useLayoutEffect=function(t,e){return _e.current.useLayoutEffect(t,e)};F.useMemo=function(t,e){return _e.current.useMemo(t,e)};F.useReducer=function(t,e,n){return _e.current.useReducer(t,e,n)};F.useRef=function(t){return _e.current.useRef(t)};F.useState=function(t){return _e.current.useState(t)};F.useSyncExternalStore=function(t,e,n){return _e.current.useSyncExternalStore(t,e,n)};F.useTransition=function(){return _e.current.useTransition()};F.version="18.2.0";Cd.exports=F;var S=Cd.exports;const Dd=dm(S),Nm=cm({__proto__:null,default:Dd},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm=S,Rm=Symbol.for("react.element"),Am=Symbol.for("react.fragment"),Om=Object.prototype.hasOwnProperty,xm=Pm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lm={key:!0,ref:!0,__self:!0,__source:!0};function Md(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Om.call(e,r)&&!Lm.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Rm,type:t,key:s,ref:o,props:i,_owner:xm.current}}$s.Fragment=Am;$s.jsx=Md;$s.jsxs=Md;Td.exports=$s;var d=Td.exports,Zo={},Ud={exports:{}},Ae={},jd={exports:{}},bd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,M){var b=O.length;O.push(M);e:for(;0<b;){var ee=b-1>>>1,oe=O[ee];if(0<i(oe,M))O[ee]=M,O[b]=oe,b=ee;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var M=O[0],b=O.pop();if(b!==M){O[0]=b;e:for(var ee=0,oe=O.length,ki=oe>>>1;ee<ki;){var on=2*(ee+1)-1,mo=O[on],an=on+1,Si=O[an];if(0>i(mo,b))an<oe&&0>i(Si,mo)?(O[ee]=Si,O[an]=b,ee=an):(O[ee]=mo,O[on]=b,ee=on);else if(an<oe&&0>i(Si,b))O[ee]=Si,O[an]=b,ee=an;else break e}}return M}function i(O,M){var b=O.sortIndex-M.sortIndex;return b!==0?b:O.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,v=3,y=!1,w=!1,h=!1,_=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(O){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=O)r(u),M.sortIndex=M.expirationTime,e(l,M);else break;M=n(u)}}function I(O){if(h=!1,g(O),!w)if(n(l)!==null)w=!0,ho(C);else{var M=n(u);M!==null&&po(I,M.startTime-O)}}function C(O,M){w=!1,h&&(h=!1,m(P),P=-1),y=!0;var b=v;try{for(g(M),f=n(l);f!==null&&(!(f.expirationTime>M)||O&&!ve());){var ee=f.callback;if(typeof ee=="function"){f.callback=null,v=f.priorityLevel;var oe=ee(f.expirationTime<=M);M=t.unstable_now(),typeof oe=="function"?f.callback=oe:f===n(l)&&r(l),g(M)}else r(l);f=n(l)}if(f!==null)var ki=!0;else{var on=n(u);on!==null&&po(I,on.startTime-M),ki=!1}return ki}finally{f=null,v=b,y=!1}}var R=!1,N=null,P=-1,j=5,x=-1;function ve(){return!(t.unstable_now()-x<j)}function mr(){if(N!==null){var O=t.unstable_now();x=O;var M=!0;try{M=N(!0,O)}finally{M?vr():(R=!1,N=null)}}else R=!1}var vr;if(typeof p=="function")vr=function(){p(mr)};else if(typeof MessageChannel<"u"){var yu=new MessageChannel,um=yu.port2;yu.port1.onmessage=mr,vr=function(){um.postMessage(null)}}else vr=function(){_(mr,0)};function ho(O){N=O,R||(R=!0,vr())}function po(O,M){P=_(function(){O(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){w||y||(w=!0,ho(C))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(v){case 1:case 2:case 3:var M=3;break;default:M=v}var b=v;v=M;try{return O()}finally{v=b}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,M){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var b=v;v=O;try{return M()}finally{v=b}},t.unstable_scheduleCallback=function(O,M,b){var ee=t.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?ee+b:ee):b=ee,O){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=b+oe,O={id:c++,callback:M,priorityLevel:O,startTime:b,expirationTime:oe,sortIndex:-1},b>ee?(O.sortIndex=b,e(u,O),n(l)===null&&O===n(u)&&(h?(m(P),P=-1):h=!0,po(I,b-ee))):(O.sortIndex=oe,e(l,O),w||y||(w=!0,ho(C))),O},t.unstable_shouldYield=ve,t.unstable_wrapCallback=function(O){var M=v;return function(){var b=v;v=M;try{return O.apply(this,arguments)}finally{v=b}}}})(bd);jd.exports=bd;var Dm=jd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fd=S,Re=Dm;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vd=new Set,Br={};function Cn(t,e){Xn(t,e),Xn(t+"Capture",e)}function Xn(t,e){for(Br[t]=e,t=0;t<e.length;t++)Vd.add(e[t])}var mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ea=Object.prototype.hasOwnProperty,Mm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Eu={},ku={};function Um(t){return ea.call(ku,t)?!0:ea.call(Eu,t)?!1:Mm.test(t)?ku[t]=!0:(Eu[t]=!0,!1)}function jm(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function bm(t,e,n,r){if(e===null||typeof e>"u"||jm(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function we(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){de[t]=new we(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];de[e]=new we(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){de[t]=new we(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){de[t]=new we(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){de[t]=new we(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){de[t]=new we(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){de[t]=new we(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){de[t]=new we(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){de[t]=new we(t,5,!1,t.toLowerCase(),null,!1,!1)});var ul=/[\-:]([a-z])/g;function cl(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ul,cl);de[e]=new we(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ul,cl);de[e]=new we(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ul,cl);de[e]=new we(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){de[t]=new we(t,1,!1,t.toLowerCase(),null,!1,!1)});de.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){de[t]=new we(t,1,!1,t.toLowerCase(),null,!0,!0)});function dl(t,e,n,r){var i=de.hasOwnProperty(e)?de[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(bm(e,n,i,r)&&(n=null),r||i===null?Um(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Et=Fd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ci=Symbol.for("react.element"),An=Symbol.for("react.portal"),On=Symbol.for("react.fragment"),fl=Symbol.for("react.strict_mode"),ta=Symbol.for("react.profiler"),$d=Symbol.for("react.provider"),zd=Symbol.for("react.context"),hl=Symbol.for("react.forward_ref"),na=Symbol.for("react.suspense"),ra=Symbol.for("react.suspense_list"),pl=Symbol.for("react.memo"),Ct=Symbol.for("react.lazy"),Bd=Symbol.for("react.offscreen"),Su=Symbol.iterator;function gr(t){return t===null||typeof t!="object"?null:(t=Su&&t[Su]||t["@@iterator"],typeof t=="function"?t:null)}var X=Object.assign,go;function Tr(t){if(go===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);go=e&&e[1]||""}return`
`+go+t}var yo=!1;function _o(t,e){if(!t||yo)return"";yo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{yo=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Tr(t):""}function Fm(t){switch(t.tag){case 5:return Tr(t.type);case 16:return Tr("Lazy");case 13:return Tr("Suspense");case 19:return Tr("SuspenseList");case 0:case 2:case 15:return t=_o(t.type,!1),t;case 11:return t=_o(t.type.render,!1),t;case 1:return t=_o(t.type,!0),t;default:return""}}function ia(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case On:return"Fragment";case An:return"Portal";case ta:return"Profiler";case fl:return"StrictMode";case na:return"Suspense";case ra:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case zd:return(t.displayName||"Context")+".Consumer";case $d:return(t._context.displayName||"Context")+".Provider";case hl:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pl:return e=t.displayName||null,e!==null?e:ia(t.type)||"Memo";case Ct:e=t._payload,t=t._init;try{return ia(t(e))}catch{}}return null}function Vm(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ia(e);case 8:return e===fl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qt(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Hd(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $m(t){var e=Hd(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ni(t){t._valueTracker||(t._valueTracker=$m(t))}function Wd(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Hd(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ls(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function sa(t,e){var n=e.checked;return X({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Tu(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Qt(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Kd(t,e){e=e.checked,e!=null&&dl(t,"checked",e,!1)}function oa(t,e){Kd(t,e);var n=Qt(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?aa(t,e.type,n):e.hasOwnProperty("defaultValue")&&aa(t,e.type,Qt(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Cu(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function aa(t,e,n){(e!=="number"||ls(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Cr=Array.isArray;function Bn(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Qt(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function la(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return X({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Nu(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(T(92));if(Cr(n)){if(1<n.length)throw Error(T(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Qt(n)}}function Gd(t,e){var n=Qt(e.value),r=Qt(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Pu(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function qd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ua(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?qd(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Pi,Qd=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Pi=Pi||document.createElement("div"),Pi.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Pi.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Hr(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var xr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zm=["Webkit","ms","Moz","O"];Object.keys(xr).forEach(function(t){zm.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),xr[e]=xr[t]})});function Jd(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||xr.hasOwnProperty(t)&&xr[t]?(""+e).trim():e+"px"}function Yd(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Jd(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Bm=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ca(t,e){if(e){if(Bm[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62))}}function da(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fa=null;function ml(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ha=null,Hn=null,Wn=null;function Ru(t){if(t=mi(t)){if(typeof ha!="function")throw Error(T(280));var e=t.stateNode;e&&(e=Ks(e),ha(t.stateNode,t.type,e))}}function Xd(t){Hn?Wn?Wn.push(t):Wn=[t]:Hn=t}function Zd(){if(Hn){var t=Hn,e=Wn;if(Wn=Hn=null,Ru(t),e)for(t=0;t<e.length;t++)Ru(e[t])}}function ef(t,e){return t(e)}function tf(){}var wo=!1;function nf(t,e,n){if(wo)return t(e,n);wo=!0;try{return ef(t,e,n)}finally{wo=!1,(Hn!==null||Wn!==null)&&(tf(),Zd())}}function Wr(t,e){var n=t.stateNode;if(n===null)return null;var r=Ks(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(T(231,e,typeof n));return n}var pa=!1;if(mt)try{var yr={};Object.defineProperty(yr,"passive",{get:function(){pa=!0}}),window.addEventListener("test",yr,yr),window.removeEventListener("test",yr,yr)}catch{pa=!1}function Hm(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Lr=!1,us=null,cs=!1,ma=null,Wm={onError:function(t){Lr=!0,us=t}};function Km(t,e,n,r,i,s,o,a,l){Lr=!1,us=null,Hm.apply(Wm,arguments)}function Gm(t,e,n,r,i,s,o,a,l){if(Km.apply(this,arguments),Lr){if(Lr){var u=us;Lr=!1,us=null}else throw Error(T(198));cs||(cs=!0,ma=u)}}function Nn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function rf(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Au(t){if(Nn(t)!==t)throw Error(T(188))}function qm(t){var e=t.alternate;if(!e){if(e=Nn(t),e===null)throw Error(T(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Au(i),t;if(s===r)return Au(i),e;s=s.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?t:e}function sf(t){return t=qm(t),t!==null?of(t):null}function of(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=of(t);if(e!==null)return e;t=t.sibling}return null}var af=Re.unstable_scheduleCallback,Ou=Re.unstable_cancelCallback,Qm=Re.unstable_shouldYield,Jm=Re.unstable_requestPaint,te=Re.unstable_now,Ym=Re.unstable_getCurrentPriorityLevel,vl=Re.unstable_ImmediatePriority,lf=Re.unstable_UserBlockingPriority,ds=Re.unstable_NormalPriority,Xm=Re.unstable_LowPriority,uf=Re.unstable_IdlePriority,zs=null,Ze=null;function Zm(t){if(Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(zs,t,void 0,(t.current.flags&128)===128)}catch{}}var Be=Math.clz32?Math.clz32:nv,ev=Math.log,tv=Math.LN2;function nv(t){return t>>>=0,t===0?32:31-(ev(t)/tv|0)|0}var Ri=64,Ai=4194304;function Nr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fs(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Nr(a):(s&=o,s!==0&&(r=Nr(s)))}else o=n&~i,o!==0?r=Nr(o):s!==0&&(r=Nr(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Be(e),i=1<<n,r|=t[n],e&=~i;return r}function rv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iv(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Be(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=rv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function va(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function cf(){var t=Ri;return Ri<<=1,!(Ri&4194240)&&(Ri=64),t}function Io(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function hi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Be(e),t[e]=n}function sv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Be(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function gl(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Be(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var z=0;function df(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ff,yl,hf,pf,mf,ga=!1,Oi=[],bt=null,Ft=null,Vt=null,Kr=new Map,Gr=new Map,Pt=[],ov="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xu(t,e){switch(t){case"focusin":case"focusout":bt=null;break;case"dragenter":case"dragleave":Ft=null;break;case"mouseover":case"mouseout":Vt=null;break;case"pointerover":case"pointerout":Kr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gr.delete(e.pointerId)}}function _r(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=mi(e),e!==null&&yl(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function av(t,e,n,r,i){switch(e){case"focusin":return bt=_r(bt,t,e,n,r,i),!0;case"dragenter":return Ft=_r(Ft,t,e,n,r,i),!0;case"mouseover":return Vt=_r(Vt,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Kr.set(s,_r(Kr.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Gr.set(s,_r(Gr.get(s)||null,t,e,n,r,i)),!0}return!1}function vf(t){var e=dn(t.target);if(e!==null){var n=Nn(e);if(n!==null){if(e=n.tag,e===13){if(e=rf(n),e!==null){t.blockedOn=e,mf(t.priority,function(){hf(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ya(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);fa=r,n.target.dispatchEvent(r),fa=null}else return e=mi(n),e!==null&&yl(e),t.blockedOn=n,!1;e.shift()}return!0}function Lu(t,e,n){Wi(t)&&n.delete(e)}function lv(){ga=!1,bt!==null&&Wi(bt)&&(bt=null),Ft!==null&&Wi(Ft)&&(Ft=null),Vt!==null&&Wi(Vt)&&(Vt=null),Kr.forEach(Lu),Gr.forEach(Lu)}function wr(t,e){t.blockedOn===e&&(t.blockedOn=null,ga||(ga=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,lv)))}function qr(t){function e(i){return wr(i,t)}if(0<Oi.length){wr(Oi[0],t);for(var n=1;n<Oi.length;n++){var r=Oi[n];r.blockedOn===t&&(r.blockedOn=null)}}for(bt!==null&&wr(bt,t),Ft!==null&&wr(Ft,t),Vt!==null&&wr(Vt,t),Kr.forEach(e),Gr.forEach(e),n=0;n<Pt.length;n++)r=Pt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Pt.length&&(n=Pt[0],n.blockedOn===null);)vf(n),n.blockedOn===null&&Pt.shift()}var Kn=Et.ReactCurrentBatchConfig,hs=!0;function uv(t,e,n,r){var i=z,s=Kn.transition;Kn.transition=null;try{z=1,_l(t,e,n,r)}finally{z=i,Kn.transition=s}}function cv(t,e,n,r){var i=z,s=Kn.transition;Kn.transition=null;try{z=4,_l(t,e,n,r)}finally{z=i,Kn.transition=s}}function _l(t,e,n,r){if(hs){var i=ya(t,e,n,r);if(i===null)Oo(t,e,r,ps,n),xu(t,r);else if(av(i,t,e,n,r))r.stopPropagation();else if(xu(t,r),e&4&&-1<ov.indexOf(t)){for(;i!==null;){var s=mi(i);if(s!==null&&ff(s),s=ya(t,e,n,r),s===null&&Oo(t,e,r,ps,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Oo(t,e,r,null,n)}}var ps=null;function ya(t,e,n,r){if(ps=null,t=ml(r),t=dn(t),t!==null)if(e=Nn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=rf(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ps=t,null}function gf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ym()){case vl:return 1;case lf:return 4;case ds:case Xm:return 16;case uf:return 536870912;default:return 16}default:return 16}}var Dt=null,wl=null,Ki=null;function yf(){if(Ki)return Ki;var t,e=wl,n=e.length,r,i="value"in Dt?Dt.value:Dt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ki=i.slice(t,1<r?1-r:void 0)}function Gi(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function xi(){return!0}function Du(){return!1}function Oe(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?xi:Du,this.isPropagationStopped=Du,this}return X(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xi)},persist:function(){},isPersistent:xi}),e}var ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Il=Oe(ur),pi=X({},ur,{view:0,detail:0}),dv=Oe(pi),Eo,ko,Ir,Bs=X({},pi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:El,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ir&&(Ir&&t.type==="mousemove"?(Eo=t.screenX-Ir.screenX,ko=t.screenY-Ir.screenY):ko=Eo=0,Ir=t),Eo)},movementY:function(t){return"movementY"in t?t.movementY:ko}}),Mu=Oe(Bs),fv=X({},Bs,{dataTransfer:0}),hv=Oe(fv),pv=X({},pi,{relatedTarget:0}),So=Oe(pv),mv=X({},ur,{animationName:0,elapsedTime:0,pseudoElement:0}),vv=Oe(mv),gv=X({},ur,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yv=Oe(gv),_v=X({},ur,{data:0}),Uu=Oe(_v),wv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Iv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ev={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ev[t])?!!e[t]:!1}function El(){return kv}var Sv=X({},pi,{key:function(t){if(t.key){var e=wv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Gi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Iv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:El,charCode:function(t){return t.type==="keypress"?Gi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Tv=Oe(Sv),Cv=X({},Bs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ju=Oe(Cv),Nv=X({},pi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:El}),Pv=Oe(Nv),Rv=X({},ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),Av=Oe(Rv),Ov=X({},Bs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),xv=Oe(Ov),Lv=[9,13,27,32],kl=mt&&"CompositionEvent"in window,Dr=null;mt&&"documentMode"in document&&(Dr=document.documentMode);var Dv=mt&&"TextEvent"in window&&!Dr,_f=mt&&(!kl||Dr&&8<Dr&&11>=Dr),bu=" ",Fu=!1;function wf(t,e){switch(t){case"keyup":return Lv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function If(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xn=!1;function Mv(t,e){switch(t){case"compositionend":return If(e);case"keypress":return e.which!==32?null:(Fu=!0,bu);case"textInput":return t=e.data,t===bu&&Fu?null:t;default:return null}}function Uv(t,e){if(xn)return t==="compositionend"||!kl&&wf(t,e)?(t=yf(),Ki=wl=Dt=null,xn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return _f&&e.locale!=="ko"?null:e.data;default:return null}}var jv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jv[t.type]:e==="textarea"}function Ef(t,e,n,r){Xd(r),e=ms(e,"onChange"),0<e.length&&(n=new Il("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Mr=null,Qr=null;function bv(t){Lf(t,0)}function Hs(t){var e=Mn(t);if(Wd(e))return t}function Fv(t,e){if(t==="change")return e}var kf=!1;if(mt){var To;if(mt){var Co="oninput"in document;if(!Co){var $u=document.createElement("div");$u.setAttribute("oninput","return;"),Co=typeof $u.oninput=="function"}To=Co}else To=!1;kf=To&&(!document.documentMode||9<document.documentMode)}function zu(){Mr&&(Mr.detachEvent("onpropertychange",Sf),Qr=Mr=null)}function Sf(t){if(t.propertyName==="value"&&Hs(Qr)){var e=[];Ef(e,Qr,t,ml(t)),nf(bv,e)}}function Vv(t,e,n){t==="focusin"?(zu(),Mr=e,Qr=n,Mr.attachEvent("onpropertychange",Sf)):t==="focusout"&&zu()}function $v(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hs(Qr)}function zv(t,e){if(t==="click")return Hs(e)}function Bv(t,e){if(t==="input"||t==="change")return Hs(e)}function Hv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ke=typeof Object.is=="function"?Object.is:Hv;function Jr(t,e){if(Ke(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ea.call(e,i)||!Ke(t[i],e[i]))return!1}return!0}function Bu(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hu(t,e){var n=Bu(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bu(n)}}function Tf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Tf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Cf(){for(var t=window,e=ls();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ls(t.document)}return e}function Sl(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Wv(t){var e=Cf(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Tf(n.ownerDocument.documentElement,n)){if(r!==null&&Sl(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Hu(n,s);var o=Hu(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Kv=mt&&"documentMode"in document&&11>=document.documentMode,Ln=null,_a=null,Ur=null,wa=!1;function Wu(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wa||Ln==null||Ln!==ls(r)||(r=Ln,"selectionStart"in r&&Sl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ur&&Jr(Ur,r)||(Ur=r,r=ms(_a,"onSelect"),0<r.length&&(e=new Il("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ln)))}function Li(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Dn={animationend:Li("Animation","AnimationEnd"),animationiteration:Li("Animation","AnimationIteration"),animationstart:Li("Animation","AnimationStart"),transitionend:Li("Transition","TransitionEnd")},No={},Nf={};mt&&(Nf=document.createElement("div").style,"AnimationEvent"in window||(delete Dn.animationend.animation,delete Dn.animationiteration.animation,delete Dn.animationstart.animation),"TransitionEvent"in window||delete Dn.transitionend.transition);function Ws(t){if(No[t])return No[t];if(!Dn[t])return t;var e=Dn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Nf)return No[t]=e[n];return t}var Pf=Ws("animationend"),Rf=Ws("animationiteration"),Af=Ws("animationstart"),Of=Ws("transitionend"),xf=new Map,Ku="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xt(t,e){xf.set(t,e),Cn(e,[t])}for(var Po=0;Po<Ku.length;Po++){var Ro=Ku[Po],Gv=Ro.toLowerCase(),qv=Ro[0].toUpperCase()+Ro.slice(1);Xt(Gv,"on"+qv)}Xt(Pf,"onAnimationEnd");Xt(Rf,"onAnimationIteration");Xt(Af,"onAnimationStart");Xt("dblclick","onDoubleClick");Xt("focusin","onFocus");Xt("focusout","onBlur");Xt(Of,"onTransitionEnd");Xn("onMouseEnter",["mouseout","mouseover"]);Xn("onMouseLeave",["mouseout","mouseover"]);Xn("onPointerEnter",["pointerout","pointerover"]);Xn("onPointerLeave",["pointerout","pointerover"]);Cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pr));function Gu(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Gm(r,e,void 0,t),t.currentTarget=null}function Lf(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Gu(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Gu(i,a,u),s=l}}}if(cs)throw t=ma,cs=!1,ma=null,t}function W(t,e){var n=e[Ta];n===void 0&&(n=e[Ta]=new Set);var r=t+"__bubble";n.has(r)||(Df(e,t,2,!1),n.add(r))}function Ao(t,e,n){var r=0;e&&(r|=4),Df(n,t,r,e)}var Di="_reactListening"+Math.random().toString(36).slice(2);function Yr(t){if(!t[Di]){t[Di]=!0,Vd.forEach(function(n){n!=="selectionchange"&&(Qv.has(n)||Ao(n,!1,t),Ao(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Di]||(e[Di]=!0,Ao("selectionchange",!1,e))}}function Df(t,e,n,r){switch(gf(e)){case 1:var i=uv;break;case 4:i=cv;break;default:i=_l}n=i.bind(null,e,n,t),i=void 0,!pa||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Oo(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=dn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}nf(function(){var u=s,c=ml(n),f=[];e:{var v=xf.get(t);if(v!==void 0){var y=Il,w=t;switch(t){case"keypress":if(Gi(n)===0)break e;case"keydown":case"keyup":y=Tv;break;case"focusin":w="focus",y=So;break;case"focusout":w="blur",y=So;break;case"beforeblur":case"afterblur":y=So;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Mu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=hv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Pv;break;case Pf:case Rf:case Af:y=vv;break;case Of:y=Av;break;case"scroll":y=dv;break;case"wheel":y=xv;break;case"copy":case"cut":case"paste":y=yv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ju}var h=(e&4)!==0,_=!h&&t==="scroll",m=h?v!==null?v+"Capture":null:v;h=[];for(var p=u,g;p!==null;){g=p;var I=g.stateNode;if(g.tag===5&&I!==null&&(g=I,m!==null&&(I=Wr(p,m),I!=null&&h.push(Xr(p,I,g)))),_)break;p=p.return}0<h.length&&(v=new y(v,w,null,n,c),f.push({event:v,listeners:h}))}}if(!(e&7)){e:{if(v=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",v&&n!==fa&&(w=n.relatedTarget||n.fromElement)&&(dn(w)||w[vt]))break e;if((y||v)&&(v=c.window===c?c:(v=c.ownerDocument)?v.defaultView||v.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=u,w=w?dn(w):null,w!==null&&(_=Nn(w),w!==_||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(h=Mu,I="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(h=ju,I="onPointerLeave",m="onPointerEnter",p="pointer"),_=y==null?v:Mn(y),g=w==null?v:Mn(w),v=new h(I,p+"leave",y,n,c),v.target=_,v.relatedTarget=g,I=null,dn(c)===u&&(h=new h(m,p+"enter",w,n,c),h.target=g,h.relatedTarget=_,I=h),_=I,y&&w)t:{for(h=y,m=w,p=0,g=h;g;g=Rn(g))p++;for(g=0,I=m;I;I=Rn(I))g++;for(;0<p-g;)h=Rn(h),p--;for(;0<g-p;)m=Rn(m),g--;for(;p--;){if(h===m||m!==null&&h===m.alternate)break t;h=Rn(h),m=Rn(m)}h=null}else h=null;y!==null&&qu(f,v,y,h,!1),w!==null&&_!==null&&qu(f,_,w,h,!0)}}e:{if(v=u?Mn(u):window,y=v.nodeName&&v.nodeName.toLowerCase(),y==="select"||y==="input"&&v.type==="file")var C=Fv;else if(Vu(v))if(kf)C=Bv;else{C=$v;var R=Vv}else(y=v.nodeName)&&y.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(C=zv);if(C&&(C=C(t,u))){Ef(f,C,n,c);break e}R&&R(t,v,u),t==="focusout"&&(R=v._wrapperState)&&R.controlled&&v.type==="number"&&aa(v,"number",v.value)}switch(R=u?Mn(u):window,t){case"focusin":(Vu(R)||R.contentEditable==="true")&&(Ln=R,_a=u,Ur=null);break;case"focusout":Ur=_a=Ln=null;break;case"mousedown":wa=!0;break;case"contextmenu":case"mouseup":case"dragend":wa=!1,Wu(f,n,c);break;case"selectionchange":if(Kv)break;case"keydown":case"keyup":Wu(f,n,c)}var N;if(kl)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else xn?wf(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(_f&&n.locale!=="ko"&&(xn||P!=="onCompositionStart"?P==="onCompositionEnd"&&xn&&(N=yf()):(Dt=c,wl="value"in Dt?Dt.value:Dt.textContent,xn=!0)),R=ms(u,P),0<R.length&&(P=new Uu(P,t,null,n,c),f.push({event:P,listeners:R}),N?P.data=N:(N=If(n),N!==null&&(P.data=N)))),(N=Dv?Mv(t,n):Uv(t,n))&&(u=ms(u,"onBeforeInput"),0<u.length&&(c=new Uu("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=N))}Lf(f,e)})}function Xr(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ms(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Wr(t,n),s!=null&&r.unshift(Xr(t,s,i)),s=Wr(t,e),s!=null&&r.push(Xr(t,s,i))),t=t.return}return r}function Rn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qu(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Wr(n,s),l!=null&&o.unshift(Xr(n,l,a))):i||(l=Wr(n,s),l!=null&&o.push(Xr(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Jv=/\r\n?/g,Yv=/\u0000|\uFFFD/g;function Qu(t){return(typeof t=="string"?t:""+t).replace(Jv,`
`).replace(Yv,"")}function Mi(t,e,n){if(e=Qu(e),Qu(t)!==e&&n)throw Error(T(425))}function vs(){}var Ia=null,Ea=null;function ka(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Sa=typeof setTimeout=="function"?setTimeout:void 0,Xv=typeof clearTimeout=="function"?clearTimeout:void 0,Ju=typeof Promise=="function"?Promise:void 0,Zv=typeof queueMicrotask=="function"?queueMicrotask:typeof Ju<"u"?function(t){return Ju.resolve(null).then(t).catch(eg)}:Sa;function eg(t){setTimeout(function(){throw t})}function xo(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),qr(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);qr(e)}function $t(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Yu(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var cr=Math.random().toString(36).slice(2),Xe="__reactFiber$"+cr,Zr="__reactProps$"+cr,vt="__reactContainer$"+cr,Ta="__reactEvents$"+cr,tg="__reactListeners$"+cr,ng="__reactHandles$"+cr;function dn(t){var e=t[Xe];if(e)return e;for(var n=t.parentNode;n;){if(e=n[vt]||n[Xe]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Yu(t);t!==null;){if(n=t[Xe])return n;t=Yu(t)}return e}t=n,n=t.parentNode}return null}function mi(t){return t=t[Xe]||t[vt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Mn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function Ks(t){return t[Zr]||null}var Ca=[],Un=-1;function Zt(t){return{current:t}}function G(t){0>Un||(t.current=Ca[Un],Ca[Un]=null,Un--)}function H(t,e){Un++,Ca[Un]=t.current,t.current=e}var Jt={},me=Zt(Jt),ke=Zt(!1),yn=Jt;function Zn(t,e){var n=t.type.contextTypes;if(!n)return Jt;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Se(t){return t=t.childContextTypes,t!=null}function gs(){G(ke),G(me)}function Xu(t,e,n){if(me.current!==Jt)throw Error(T(168));H(me,e),H(ke,n)}function Mf(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(T(108,Vm(t)||"Unknown",i));return X({},n,r)}function ys(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Jt,yn=me.current,H(me,t),H(ke,ke.current),!0}function Zu(t,e,n){var r=t.stateNode;if(!r)throw Error(T(169));n?(t=Mf(t,e,yn),r.__reactInternalMemoizedMergedChildContext=t,G(ke),G(me),H(me,t)):G(ke),H(ke,n)}var ot=null,Gs=!1,Lo=!1;function Uf(t){ot===null?ot=[t]:ot.push(t)}function rg(t){Gs=!0,Uf(t)}function en(){if(!Lo&&ot!==null){Lo=!0;var t=0,e=z;try{var n=ot;for(z=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}ot=null,Gs=!1}catch(i){throw ot!==null&&(ot=ot.slice(t+1)),af(vl,en),i}finally{z=e,Lo=!1}}return null}var jn=[],bn=0,_s=null,ws=0,xe=[],Le=0,_n=null,at=1,lt="";function ln(t,e){jn[bn++]=ws,jn[bn++]=_s,_s=t,ws=e}function jf(t,e,n){xe[Le++]=at,xe[Le++]=lt,xe[Le++]=_n,_n=t;var r=at;t=lt;var i=32-Be(r)-1;r&=~(1<<i),n+=1;var s=32-Be(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,at=1<<32-Be(e)+i|n<<i|r,lt=s+t}else at=1<<s|n<<i|r,lt=t}function Tl(t){t.return!==null&&(ln(t,1),jf(t,1,0))}function Cl(t){for(;t===_s;)_s=jn[--bn],jn[bn]=null,ws=jn[--bn],jn[bn]=null;for(;t===_n;)_n=xe[--Le],xe[Le]=null,lt=xe[--Le],xe[Le]=null,at=xe[--Le],xe[Le]=null}var Pe=null,Ne=null,q=!1,ze=null;function bf(t,e){var n=De(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ec(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pe=t,Ne=$t(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pe=t,Ne=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=_n!==null?{id:at,overflow:lt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=De(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pe=t,Ne=null,!0):!1;default:return!1}}function Na(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pa(t){if(q){var e=Ne;if(e){var n=e;if(!ec(t,e)){if(Na(t))throw Error(T(418));e=$t(n.nextSibling);var r=Pe;e&&ec(t,e)?bf(r,n):(t.flags=t.flags&-4097|2,q=!1,Pe=t)}}else{if(Na(t))throw Error(T(418));t.flags=t.flags&-4097|2,q=!1,Pe=t}}}function tc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pe=t}function Ui(t){if(t!==Pe)return!1;if(!q)return tc(t),q=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ka(t.type,t.memoizedProps)),e&&(e=Ne)){if(Na(t))throw Ff(),Error(T(418));for(;e;)bf(t,e),e=$t(e.nextSibling)}if(tc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ne=$t(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ne=null}}else Ne=Pe?$t(t.stateNode.nextSibling):null;return!0}function Ff(){for(var t=Ne;t;)t=$t(t.nextSibling)}function er(){Ne=Pe=null,q=!1}function Nl(t){ze===null?ze=[t]:ze.push(t)}var ig=Et.ReactCurrentBatchConfig;function Ve(t,e){if(t&&t.defaultProps){e=X({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Is=Zt(null),Es=null,Fn=null,Pl=null;function Rl(){Pl=Fn=Es=null}function Al(t){var e=Is.current;G(Is),t._currentValue=e}function Ra(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Gn(t,e){Es=t,Pl=Fn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ee=!0),t.firstContext=null)}function je(t){var e=t._currentValue;if(Pl!==t)if(t={context:t,memoizedValue:e,next:null},Fn===null){if(Es===null)throw Error(T(308));Fn=t,Es.dependencies={lanes:0,firstContext:t}}else Fn=Fn.next=t;return e}var fn=null;function Ol(t){fn===null?fn=[t]:fn.push(t)}function Vf(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ol(e)):(n.next=i.next,i.next=n),e.interleaved=n,gt(t,r)}function gt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Nt=!1;function xl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $f(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ft(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,gt(t,n)}return i=r.interleaved,i===null?(e.next=e,Ol(r)):(e.next=i.next,i.next=e),r.interleaved=e,gt(t,n)}function qi(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gl(t,n)}}function nc(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ks(t,e,n,r){var i=t.updateQueue;Nt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,c=u=l=null,a=s;do{var v=a.lane,y=a.eventTime;if((r&v)===v){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,h=a;switch(v=e,y=n,h.tag){case 1:if(w=h.payload,typeof w=="function"){f=w.call(y,f,v);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=h.payload,v=typeof w=="function"?w.call(y,f,v):w,v==null)break e;f=X({},f,v);break e;case 2:Nt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,v=i.effects,v===null?i.effects=[a]:v.push(a))}else y={eventTime:y,lane:v,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=f):c=c.next=y,o|=v;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;v=a,a=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(!0);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);In|=o,t.lanes=o,t.memoizedState=f}}function rc(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var zf=new Fd.Component().refs;function Aa(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:X({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var qs={isMounted:function(t){return(t=t._reactInternals)?Nn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ye(),i=Ht(t),s=ft(r,i);s.payload=e,n!=null&&(s.callback=n),e=zt(t,s,i),e!==null&&(He(e,t,i,r),qi(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ye(),i=Ht(t),s=ft(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=zt(t,s,i),e!==null&&(He(e,t,i,r),qi(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ye(),r=Ht(t),i=ft(n,r);i.tag=2,e!=null&&(i.callback=e),e=zt(t,i,r),e!==null&&(He(e,t,r,n),qi(e,t,r))}};function ic(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Jr(n,r)||!Jr(i,s):!0}function Bf(t,e,n){var r=!1,i=Jt,s=e.contextType;return typeof s=="object"&&s!==null?s=je(s):(i=Se(e)?yn:me.current,r=e.contextTypes,s=(r=r!=null)?Zn(t,i):Jt),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=qs,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function sc(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&qs.enqueueReplaceState(e,e.state,null)}function Oa(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=zf,xl(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=je(s):(s=Se(e)?yn:me.current,i.context=Zn(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Aa(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&qs.enqueueReplaceState(i,i.state,null),ks(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Er(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===zf&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,t))}return t}function ji(t,e){throw t=Object.prototype.toString.call(e),Error(T(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function oc(t){var e=t._init;return e(t._payload)}function Hf(t){function e(m,p){if(t){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=Wt(m,p),m.index=0,m.sibling=null,m}function s(m,p,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,g,I){return p===null||p.tag!==6?(p=Vo(g,m.mode,I),p.return=m,p):(p=i(p,g),p.return=m,p)}function l(m,p,g,I){var C=g.type;return C===On?c(m,p,g.props.children,I,g.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ct&&oc(C)===p.type)?(I=i(p,g.props),I.ref=Er(m,p,g),I.return=m,I):(I=es(g.type,g.key,g.props,null,m.mode,I),I.ref=Er(m,p,g),I.return=m,I)}function u(m,p,g,I){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=$o(g,m.mode,I),p.return=m,p):(p=i(p,g.children||[]),p.return=m,p)}function c(m,p,g,I,C){return p===null||p.tag!==7?(p=mn(g,m.mode,I,C),p.return=m,p):(p=i(p,g),p.return=m,p)}function f(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Vo(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ci:return g=es(p.type,p.key,p.props,null,m.mode,g),g.ref=Er(m,null,p),g.return=m,g;case An:return p=$o(p,m.mode,g),p.return=m,p;case Ct:var I=p._init;return f(m,I(p._payload),g)}if(Cr(p)||gr(p))return p=mn(p,m.mode,g,null),p.return=m,p;ji(m,p)}return null}function v(m,p,g,I){var C=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(m,p,""+g,I);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ci:return g.key===C?l(m,p,g,I):null;case An:return g.key===C?u(m,p,g,I):null;case Ct:return C=g._init,v(m,p,C(g._payload),I)}if(Cr(g)||gr(g))return C!==null?null:c(m,p,g,I,null);ji(m,g)}return null}function y(m,p,g,I,C){if(typeof I=="string"&&I!==""||typeof I=="number")return m=m.get(g)||null,a(p,m,""+I,C);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Ci:return m=m.get(I.key===null?g:I.key)||null,l(p,m,I,C);case An:return m=m.get(I.key===null?g:I.key)||null,u(p,m,I,C);case Ct:var R=I._init;return y(m,p,g,R(I._payload),C)}if(Cr(I)||gr(I))return m=m.get(g)||null,c(p,m,I,C,null);ji(p,I)}return null}function w(m,p,g,I){for(var C=null,R=null,N=p,P=p=0,j=null;N!==null&&P<g.length;P++){N.index>P?(j=N,N=null):j=N.sibling;var x=v(m,N,g[P],I);if(x===null){N===null&&(N=j);break}t&&N&&x.alternate===null&&e(m,N),p=s(x,p,P),R===null?C=x:R.sibling=x,R=x,N=j}if(P===g.length)return n(m,N),q&&ln(m,P),C;if(N===null){for(;P<g.length;P++)N=f(m,g[P],I),N!==null&&(p=s(N,p,P),R===null?C=N:R.sibling=N,R=N);return q&&ln(m,P),C}for(N=r(m,N);P<g.length;P++)j=y(N,m,P,g[P],I),j!==null&&(t&&j.alternate!==null&&N.delete(j.key===null?P:j.key),p=s(j,p,P),R===null?C=j:R.sibling=j,R=j);return t&&N.forEach(function(ve){return e(m,ve)}),q&&ln(m,P),C}function h(m,p,g,I){var C=gr(g);if(typeof C!="function")throw Error(T(150));if(g=C.call(g),g==null)throw Error(T(151));for(var R=C=null,N=p,P=p=0,j=null,x=g.next();N!==null&&!x.done;P++,x=g.next()){N.index>P?(j=N,N=null):j=N.sibling;var ve=v(m,N,x.value,I);if(ve===null){N===null&&(N=j);break}t&&N&&ve.alternate===null&&e(m,N),p=s(ve,p,P),R===null?C=ve:R.sibling=ve,R=ve,N=j}if(x.done)return n(m,N),q&&ln(m,P),C;if(N===null){for(;!x.done;P++,x=g.next())x=f(m,x.value,I),x!==null&&(p=s(x,p,P),R===null?C=x:R.sibling=x,R=x);return q&&ln(m,P),C}for(N=r(m,N);!x.done;P++,x=g.next())x=y(N,m,P,x.value,I),x!==null&&(t&&x.alternate!==null&&N.delete(x.key===null?P:x.key),p=s(x,p,P),R===null?C=x:R.sibling=x,R=x);return t&&N.forEach(function(mr){return e(m,mr)}),q&&ln(m,P),C}function _(m,p,g,I){if(typeof g=="object"&&g!==null&&g.type===On&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ci:e:{for(var C=g.key,R=p;R!==null;){if(R.key===C){if(C=g.type,C===On){if(R.tag===7){n(m,R.sibling),p=i(R,g.props.children),p.return=m,m=p;break e}}else if(R.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ct&&oc(C)===R.type){n(m,R.sibling),p=i(R,g.props),p.ref=Er(m,R,g),p.return=m,m=p;break e}n(m,R);break}else e(m,R);R=R.sibling}g.type===On?(p=mn(g.props.children,m.mode,I,g.key),p.return=m,m=p):(I=es(g.type,g.key,g.props,null,m.mode,I),I.ref=Er(m,p,g),I.return=m,m=I)}return o(m);case An:e:{for(R=g.key;p!==null;){if(p.key===R)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=i(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=$o(g,m.mode,I),p.return=m,m=p}return o(m);case Ct:return R=g._init,_(m,p,R(g._payload),I)}if(Cr(g))return w(m,p,g,I);if(gr(g))return h(m,p,g,I);ji(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,g),p.return=m,m=p):(n(m,p),p=Vo(g,m.mode,I),p.return=m,m=p),o(m)):n(m,p)}return _}var tr=Hf(!0),Wf=Hf(!1),vi={},et=Zt(vi),ei=Zt(vi),ti=Zt(vi);function hn(t){if(t===vi)throw Error(T(174));return t}function Ll(t,e){switch(H(ti,e),H(ei,t),H(et,vi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ua(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ua(e,t)}G(et),H(et,e)}function nr(){G(et),G(ei),G(ti)}function Kf(t){hn(ti.current);var e=hn(et.current),n=ua(e,t.type);e!==n&&(H(ei,t),H(et,n))}function Dl(t){ei.current===t&&(G(et),G(ei))}var J=Zt(0);function Ss(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Do=[];function Ml(){for(var t=0;t<Do.length;t++)Do[t]._workInProgressVersionPrimary=null;Do.length=0}var Qi=Et.ReactCurrentDispatcher,Mo=Et.ReactCurrentBatchConfig,wn=0,Y=null,re=null,ae=null,Ts=!1,jr=!1,ni=0,sg=0;function fe(){throw Error(T(321))}function Ul(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ke(t[n],e[n]))return!1;return!0}function jl(t,e,n,r,i,s){if(wn=s,Y=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Qi.current=t===null||t.memoizedState===null?ug:cg,t=n(r,i),jr){s=0;do{if(jr=!1,ni=0,25<=s)throw Error(T(301));s+=1,ae=re=null,e.updateQueue=null,Qi.current=dg,t=n(r,i)}while(jr)}if(Qi.current=Cs,e=re!==null&&re.next!==null,wn=0,ae=re=Y=null,Ts=!1,e)throw Error(T(300));return t}function bl(){var t=ni!==0;return ni=0,t}function Ye(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?Y.memoizedState=ae=t:ae=ae.next=t,ae}function be(){if(re===null){var t=Y.alternate;t=t!==null?t.memoizedState:null}else t=re.next;var e=ae===null?Y.memoizedState:ae.next;if(e!==null)ae=e,re=t;else{if(t===null)throw Error(T(310));re=t,t={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},ae===null?Y.memoizedState=ae=t:ae=ae.next=t}return ae}function ri(t,e){return typeof e=="function"?e(t):e}function Uo(t){var e=be(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=re,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((wn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,Y.lanes|=c,In|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Ke(r,e.memoizedState)||(Ee=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Y.lanes|=s,In|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function jo(t){var e=be(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ke(s,e.memoizedState)||(Ee=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Gf(){}function qf(t,e){var n=Y,r=be(),i=e(),s=!Ke(r.memoizedState,i);if(s&&(r.memoizedState=i,Ee=!0),r=r.queue,Fl(Yf.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ae!==null&&ae.memoizedState.tag&1){if(n.flags|=2048,ii(9,Jf.bind(null,n,r,i,e),void 0,null),le===null)throw Error(T(349));wn&30||Qf(n,e,i)}return i}function Qf(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Y.updateQueue,e===null?(e={lastEffect:null,stores:null},Y.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Jf(t,e,n,r){e.value=n,e.getSnapshot=r,Xf(e)&&Zf(t)}function Yf(t,e,n){return n(function(){Xf(e)&&Zf(t)})}function Xf(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ke(t,n)}catch{return!0}}function Zf(t){var e=gt(t,1);e!==null&&He(e,t,1,-1)}function ac(t){var e=Ye();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ri,lastRenderedState:t},e.queue=t,t=t.dispatch=lg.bind(null,Y,t),[e.memoizedState,t]}function ii(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Y.updateQueue,e===null?(e={lastEffect:null,stores:null},Y.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function eh(){return be().memoizedState}function Ji(t,e,n,r){var i=Ye();Y.flags|=t,i.memoizedState=ii(1|e,n,void 0,r===void 0?null:r)}function Qs(t,e,n,r){var i=be();r=r===void 0?null:r;var s=void 0;if(re!==null){var o=re.memoizedState;if(s=o.destroy,r!==null&&Ul(r,o.deps)){i.memoizedState=ii(e,n,s,r);return}}Y.flags|=t,i.memoizedState=ii(1|e,n,s,r)}function lc(t,e){return Ji(8390656,8,t,e)}function Fl(t,e){return Qs(2048,8,t,e)}function th(t,e){return Qs(4,2,t,e)}function nh(t,e){return Qs(4,4,t,e)}function rh(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ih(t,e,n){return n=n!=null?n.concat([t]):null,Qs(4,4,rh.bind(null,e,t),n)}function Vl(){}function sh(t,e){var n=be();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ul(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function oh(t,e){var n=be();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ul(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ah(t,e,n){return wn&21?(Ke(n,e)||(n=cf(),Y.lanes|=n,In|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ee=!0),t.memoizedState=n)}function og(t,e){var n=z;z=n!==0&&4>n?n:4,t(!0);var r=Mo.transition;Mo.transition={};try{t(!1),e()}finally{z=n,Mo.transition=r}}function lh(){return be().memoizedState}function ag(t,e,n){var r=Ht(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},uh(t))ch(e,n);else if(n=Vf(t,e,n,r),n!==null){var i=ye();He(n,t,r,i),dh(n,e,r)}}function lg(t,e,n){var r=Ht(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(uh(t))ch(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ke(a,o)){var l=e.interleaved;l===null?(i.next=i,Ol(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Vf(t,e,i,r),n!==null&&(i=ye(),He(n,t,r,i),dh(n,e,r))}}function uh(t){var e=t.alternate;return t===Y||e!==null&&e===Y}function ch(t,e){jr=Ts=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function dh(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gl(t,n)}}var Cs={readContext:je,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},ug={readContext:je,useCallback:function(t,e){return Ye().memoizedState=[t,e===void 0?null:e],t},useContext:je,useEffect:lc,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ji(4194308,4,rh.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ji(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ji(4,2,t,e)},useMemo:function(t,e){var n=Ye();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ye();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ag.bind(null,Y,t),[r.memoizedState,t]},useRef:function(t){var e=Ye();return t={current:t},e.memoizedState=t},useState:ac,useDebugValue:Vl,useDeferredValue:function(t){return Ye().memoizedState=t},useTransition:function(){var t=ac(!1),e=t[0];return t=og.bind(null,t[1]),Ye().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Y,i=Ye();if(q){if(n===void 0)throw Error(T(407));n=n()}else{if(n=e(),le===null)throw Error(T(349));wn&30||Qf(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,lc(Yf.bind(null,r,s,t),[t]),r.flags|=2048,ii(9,Jf.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ye(),e=le.identifierPrefix;if(q){var n=lt,r=at;n=(r&~(1<<32-Be(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ni++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=sg++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},cg={readContext:je,useCallback:sh,useContext:je,useEffect:Fl,useImperativeHandle:ih,useInsertionEffect:th,useLayoutEffect:nh,useMemo:oh,useReducer:Uo,useRef:eh,useState:function(){return Uo(ri)},useDebugValue:Vl,useDeferredValue:function(t){var e=be();return ah(e,re.memoizedState,t)},useTransition:function(){var t=Uo(ri)[0],e=be().memoizedState;return[t,e]},useMutableSource:Gf,useSyncExternalStore:qf,useId:lh,unstable_isNewReconciler:!1},dg={readContext:je,useCallback:sh,useContext:je,useEffect:Fl,useImperativeHandle:ih,useInsertionEffect:th,useLayoutEffect:nh,useMemo:oh,useReducer:jo,useRef:eh,useState:function(){return jo(ri)},useDebugValue:Vl,useDeferredValue:function(t){var e=be();return re===null?e.memoizedState=t:ah(e,re.memoizedState,t)},useTransition:function(){var t=jo(ri)[0],e=be().memoizedState;return[t,e]},useMutableSource:Gf,useSyncExternalStore:qf,useId:lh,unstable_isNewReconciler:!1};function rr(t,e){try{var n="",r=e;do n+=Fm(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function bo(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xa(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var fg=typeof WeakMap=="function"?WeakMap:Map;function fh(t,e,n){n=ft(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ps||(Ps=!0,za=r),xa(t,e)},n}function hh(t,e,n){n=ft(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){xa(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xa(t,e),typeof r!="function"&&(Bt===null?Bt=new Set([this]):Bt.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function uc(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new fg;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Cg.bind(null,t,e,n),e.then(t,t))}function cc(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function dc(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ft(-1,1),e.tag=2,zt(n,e,1))),n.lanes|=1),t)}var hg=Et.ReactCurrentOwner,Ee=!1;function ge(t,e,n,r){e.child=t===null?Wf(e,null,n,r):tr(e,t.child,n,r)}function fc(t,e,n,r,i){n=n.render;var s=e.ref;return Gn(e,i),r=jl(t,e,n,r,s,i),n=bl(),t!==null&&!Ee?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,yt(t,e,i)):(q&&n&&Tl(e),e.flags|=1,ge(t,e,r,i),e.child)}function hc(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ql(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ph(t,e,s,r,i)):(t=es(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Jr,n(o,r)&&t.ref===e.ref)return yt(t,e,i)}return e.flags|=1,t=Wt(s,r),t.ref=e.ref,t.return=e,e.child=t}function ph(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Jr(s,r)&&t.ref===e.ref)if(Ee=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ee=!0);else return e.lanes=t.lanes,yt(t,e,i)}return La(t,e,n,r,i)}function mh(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},H($n,Ce),Ce|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,H($n,Ce),Ce|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,H($n,Ce),Ce|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,H($n,Ce),Ce|=r;return ge(t,e,i,n),e.child}function vh(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function La(t,e,n,r,i){var s=Se(n)?yn:me.current;return s=Zn(e,s),Gn(e,i),n=jl(t,e,n,r,s,i),r=bl(),t!==null&&!Ee?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,yt(t,e,i)):(q&&r&&Tl(e),e.flags|=1,ge(t,e,n,i),e.child)}function pc(t,e,n,r,i){if(Se(n)){var s=!0;ys(e)}else s=!1;if(Gn(e,i),e.stateNode===null)Yi(t,e),Bf(e,n,r),Oa(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=je(u):(u=Se(n)?yn:me.current,u=Zn(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&sc(e,o,r,u),Nt=!1;var v=e.memoizedState;o.state=v,ks(e,r,o,i),l=e.memoizedState,a!==r||v!==l||ke.current||Nt?(typeof c=="function"&&(Aa(e,n,c,r),l=e.memoizedState),(a=Nt||ic(e,n,a,r,v,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,$f(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Ve(e.type,a),o.props=u,f=e.pendingProps,v=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=je(l):(l=Se(n)?yn:me.current,l=Zn(e,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||v!==l)&&sc(e,o,r,l),Nt=!1,v=e.memoizedState,o.state=v,ks(e,r,o,i);var w=e.memoizedState;a!==f||v!==w||ke.current||Nt?(typeof y=="function"&&(Aa(e,n,y,r),w=e.memoizedState),(u=Nt||ic(e,n,u,r,v,w,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),o.props=r,o.state=w,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),r=!1)}return Da(t,e,n,r,s,i)}function Da(t,e,n,r,i,s){vh(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Zu(e,n,!1),yt(t,e,s);r=e.stateNode,hg.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=tr(e,t.child,null,s),e.child=tr(e,null,a,s)):ge(t,e,a,s),e.memoizedState=r.state,i&&Zu(e,n,!0),e.child}function gh(t){var e=t.stateNode;e.pendingContext?Xu(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Xu(t,e.context,!1),Ll(t,e.containerInfo)}function mc(t,e,n,r,i){return er(),Nl(i),e.flags|=256,ge(t,e,n,r),e.child}var Ma={dehydrated:null,treeContext:null,retryLane:0};function Ua(t){return{baseLanes:t,cachePool:null,transitions:null}}function yh(t,e,n){var r=e.pendingProps,i=J.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),H(J,i&1),t===null)return Pa(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Xs(o,r,0,null),t=mn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ua(n),e.memoizedState=Ma,t):$l(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return pg(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Wt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Wt(a,s):(s=mn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ua(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ma,r}return s=t.child,t=s.sibling,r=Wt(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function $l(t,e){return e=Xs({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function bi(t,e,n,r){return r!==null&&Nl(r),tr(e,t.child,null,n),t=$l(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function pg(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=bo(Error(T(422))),bi(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Xs({mode:"visible",children:r.children},i,0,null),s=mn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&tr(e,t.child,null,o),e.child.memoizedState=Ua(o),e.memoizedState=Ma,s);if(!(e.mode&1))return bi(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(T(419)),r=bo(s,r,void 0),bi(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ee||a){if(r=le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,gt(t,i),He(r,t,i,-1))}return Gl(),r=bo(Error(T(421))),bi(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Ng.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ne=$t(i.nextSibling),Pe=e,q=!0,ze=null,t!==null&&(xe[Le++]=at,xe[Le++]=lt,xe[Le++]=_n,at=t.id,lt=t.overflow,_n=e),e=$l(e,r.children),e.flags|=4096,e)}function vc(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ra(t.return,e,n)}function Fo(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function _h(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ge(t,e,r.children,n),r=J.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vc(t,n,e);else if(t.tag===19)vc(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(H(J,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ss(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Fo(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ss(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Fo(e,!0,n,null,s);break;case"together":Fo(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Yi(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function yt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),In|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,n=Wt(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wt(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function mg(t,e,n){switch(e.tag){case 3:gh(e),er();break;case 5:Kf(e);break;case 1:Se(e.type)&&ys(e);break;case 4:Ll(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;H(Is,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(H(J,J.current&1),e.flags|=128,null):n&e.child.childLanes?yh(t,e,n):(H(J,J.current&1),t=yt(t,e,n),t!==null?t.sibling:null);H(J,J.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return _h(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(J,J.current),r)break;return null;case 22:case 23:return e.lanes=0,mh(t,e,n)}return yt(t,e,n)}var wh,ja,Ih,Eh;wh=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ja=function(){};Ih=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,hn(et.current);var s=null;switch(n){case"input":i=sa(t,i),r=sa(t,r),s=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),s=[];break;case"textarea":i=la(t,i),r=la(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=vs)}ca(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Br.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Br.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&W("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Eh=function(t,e,n,r){n!==r&&(e.flags|=4)};function kr(t,e){if(!q)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function he(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function vg(t,e,n){var r=e.pendingProps;switch(Cl(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(e),null;case 1:return Se(e.type)&&gs(),he(e),null;case 3:return r=e.stateNode,nr(),G(ke),G(me),Ml(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ui(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ze!==null&&(Wa(ze),ze=null))),ja(t,e),he(e),null;case 5:Dl(e);var i=hn(ti.current);if(n=e.type,t!==null&&e.stateNode!=null)Ih(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(T(166));return he(e),null}if(t=hn(et.current),Ui(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Xe]=e,r[Zr]=s,t=(e.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<Pr.length;i++)W(Pr[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":Tu(r,s),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},W("invalid",r);break;case"textarea":Nu(r,s),W("invalid",r)}ca(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Mi(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Mi(r.textContent,a,t),i=["children",""+a]):Br.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&W("scroll",r)}switch(n){case"input":Ni(r),Cu(r,s,!0);break;case"textarea":Ni(r),Pu(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=vs)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=qd(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Xe]=e,t[Zr]=r,wh(t,e,!1,!1),e.stateNode=t;e:{switch(o=da(n,r),n){case"dialog":W("cancel",t),W("close",t),i=r;break;case"iframe":case"object":case"embed":W("load",t),i=r;break;case"video":case"audio":for(i=0;i<Pr.length;i++)W(Pr[i],t);i=r;break;case"source":W("error",t),i=r;break;case"img":case"image":case"link":W("error",t),W("load",t),i=r;break;case"details":W("toggle",t),i=r;break;case"input":Tu(t,r),i=sa(t,r),W("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),W("invalid",t);break;case"textarea":Nu(t,r),i=la(t,r),W("invalid",t);break;default:i=r}ca(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Yd(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Qd(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Hr(t,l):typeof l=="number"&&Hr(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Br.hasOwnProperty(s)?l!=null&&s==="onScroll"&&W("scroll",t):l!=null&&dl(t,s,l,o))}switch(n){case"input":Ni(t),Cu(t,r,!1);break;case"textarea":Ni(t),Pu(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Qt(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Bn(t,!!r.multiple,s,!1):r.defaultValue!=null&&Bn(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=vs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return he(e),null;case 6:if(t&&e.stateNode!=null)Eh(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(T(166));if(n=hn(ti.current),hn(et.current),Ui(e)){if(r=e.stateNode,n=e.memoizedProps,r[Xe]=e,(s=r.nodeValue!==n)&&(t=Pe,t!==null))switch(t.tag){case 3:Mi(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Mi(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xe]=e,e.stateNode=r}return he(e),null;case 13:if(G(J),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(q&&Ne!==null&&e.mode&1&&!(e.flags&128))Ff(),er(),e.flags|=98560,s=!1;else if(s=Ui(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(T(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(T(317));s[Xe]=e}else er(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;he(e),s=!1}else ze!==null&&(Wa(ze),ze=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||J.current&1?ie===0&&(ie=3):Gl())),e.updateQueue!==null&&(e.flags|=4),he(e),null);case 4:return nr(),ja(t,e),t===null&&Yr(e.stateNode.containerInfo),he(e),null;case 10:return Al(e.type._context),he(e),null;case 17:return Se(e.type)&&gs(),he(e),null;case 19:if(G(J),s=e.memoizedState,s===null)return he(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)kr(s,!1);else{if(ie!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ss(t),o!==null){for(e.flags|=128,kr(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return H(J,J.current&1|2),e.child}t=t.sibling}s.tail!==null&&te()>ir&&(e.flags|=128,r=!0,kr(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ss(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),kr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!q)return he(e),null}else 2*te()-s.renderingStartTime>ir&&n!==1073741824&&(e.flags|=128,r=!0,kr(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=te(),e.sibling=null,n=J.current,H(J,r?n&1|2:n&1),e):(he(e),null);case 22:case 23:return Kl(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ce&1073741824&&(he(e),e.subtreeFlags&6&&(e.flags|=8192)):he(e),null;case 24:return null;case 25:return null}throw Error(T(156,e.tag))}function gg(t,e){switch(Cl(e),e.tag){case 1:return Se(e.type)&&gs(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return nr(),G(ke),G(me),Ml(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Dl(e),null;case 13:if(G(J),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(T(340));er()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return G(J),null;case 4:return nr(),null;case 10:return Al(e.type._context),null;case 22:case 23:return Kl(),null;case 24:return null;default:return null}}var Fi=!1,pe=!1,yg=typeof WeakSet=="function"?WeakSet:Set,A=null;function Vn(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Z(t,e,r)}else n.current=null}function ba(t,e,n){try{n()}catch(r){Z(t,e,r)}}var gc=!1;function _g(t,e){if(Ia=hs,t=Cf(),Sl(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,v=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(y=f.firstChild)!==null;)v=f,f=y;for(;;){if(f===t)break t;if(v===n&&++u===i&&(a=o),v===s&&++c===r&&(l=o),(y=f.nextSibling)!==null)break;f=v,v=f.parentNode}f=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ea={focusedElem:t,selectionRange:n},hs=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var h=w.memoizedProps,_=w.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?h:Ve(e.type,h),_);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(I){Z(e,e.return,I)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return w=gc,gc=!1,w}function br(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ba(e,n,s)}i=i.next}while(i!==r)}}function Js(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Fa(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function kh(t){var e=t.alternate;e!==null&&(t.alternate=null,kh(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Xe],delete e[Zr],delete e[Ta],delete e[tg],delete e[ng])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Sh(t){return t.tag===5||t.tag===3||t.tag===4}function yc(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Sh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Va(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=vs));else if(r!==4&&(t=t.child,t!==null))for(Va(t,e,n),t=t.sibling;t!==null;)Va(t,e,n),t=t.sibling}function $a(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for($a(t,e,n),t=t.sibling;t!==null;)$a(t,e,n),t=t.sibling}var ue=null,$e=!1;function kt(t,e,n){for(n=n.child;n!==null;)Th(t,e,n),n=n.sibling}function Th(t,e,n){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(zs,n)}catch{}switch(n.tag){case 5:pe||Vn(n,e);case 6:var r=ue,i=$e;ue=null,kt(t,e,n),ue=r,$e=i,ue!==null&&($e?(t=ue,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&($e?(t=ue,n=n.stateNode,t.nodeType===8?xo(t.parentNode,n):t.nodeType===1&&xo(t,n),qr(t)):xo(ue,n.stateNode));break;case 4:r=ue,i=$e,ue=n.stateNode.containerInfo,$e=!0,kt(t,e,n),ue=r,$e=i;break;case 0:case 11:case 14:case 15:if(!pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ba(n,e,o),i=i.next}while(i!==r)}kt(t,e,n);break;case 1:if(!pe&&(Vn(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Z(n,e,a)}kt(t,e,n);break;case 21:kt(t,e,n);break;case 22:n.mode&1?(pe=(r=pe)||n.memoizedState!==null,kt(t,e,n),pe=r):kt(t,e,n);break;default:kt(t,e,n)}}function _c(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new yg),e.forEach(function(r){var i=Pg.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Fe(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ue=a.stateNode,$e=!1;break e;case 3:ue=a.stateNode.containerInfo,$e=!0;break e;case 4:ue=a.stateNode.containerInfo,$e=!0;break e}a=a.return}if(ue===null)throw Error(T(160));Th(s,o,i),ue=null,$e=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Z(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ch(e,t),e=e.sibling}function Ch(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Fe(e,t),Je(t),r&4){try{br(3,t,t.return),Js(3,t)}catch(h){Z(t,t.return,h)}try{br(5,t,t.return)}catch(h){Z(t,t.return,h)}}break;case 1:Fe(e,t),Je(t),r&512&&n!==null&&Vn(n,n.return);break;case 5:if(Fe(e,t),Je(t),r&512&&n!==null&&Vn(n,n.return),t.flags&32){var i=t.stateNode;try{Hr(i,"")}catch(h){Z(t,t.return,h)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Kd(i,s),da(a,o);var u=da(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?Yd(i,f):c==="dangerouslySetInnerHTML"?Qd(i,f):c==="children"?Hr(i,f):dl(i,c,f,u)}switch(a){case"input":oa(i,s);break;case"textarea":Gd(i,s);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Bn(i,!!s.multiple,y,!1):v!==!!s.multiple&&(s.defaultValue!=null?Bn(i,!!s.multiple,s.defaultValue,!0):Bn(i,!!s.multiple,s.multiple?[]:"",!1))}i[Zr]=s}catch(h){Z(t,t.return,h)}}break;case 6:if(Fe(e,t),Je(t),r&4){if(t.stateNode===null)throw Error(T(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(h){Z(t,t.return,h)}}break;case 3:if(Fe(e,t),Je(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qr(e.containerInfo)}catch(h){Z(t,t.return,h)}break;case 4:Fe(e,t),Je(t);break;case 13:Fe(e,t),Je(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Hl=te())),r&4&&_c(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(pe=(u=pe)||c,Fe(e,t),pe=u):Fe(e,t),Je(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(A=t,c=t.child;c!==null;){for(f=A=c;A!==null;){switch(v=A,y=v.child,v.tag){case 0:case 11:case 14:case 15:br(4,v,v.return);break;case 1:Vn(v,v.return);var w=v.stateNode;if(typeof w.componentWillUnmount=="function"){r=v,n=v.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(h){Z(r,n,h)}}break;case 5:Vn(v,v.return);break;case 22:if(v.memoizedState!==null){Ic(f);continue}}y!==null?(y.return=v,A=y):Ic(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Jd("display",o))}catch(h){Z(t,t.return,h)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(h){Z(t,t.return,h)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Fe(e,t),Je(t),r&4&&_c(t);break;case 21:break;default:Fe(e,t),Je(t)}}function Je(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Sh(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Hr(i,""),r.flags&=-33);var s=yc(t);$a(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=yc(t);Va(t,a,o);break;default:throw Error(T(161))}}catch(l){Z(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function wg(t,e,n){A=t,Nh(t)}function Nh(t,e,n){for(var r=(t.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Fi;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||pe;a=Fi;var u=pe;if(Fi=o,(pe=l)&&!u)for(A=i;A!==null;)o=A,l=o.child,o.tag===22&&o.memoizedState!==null?Ec(i):l!==null?(l.return=o,A=l):Ec(i);for(;s!==null;)A=s,Nh(s),s=s.sibling;A=i,Fi=a,pe=u}wc(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,A=s):wc(t)}}function wc(t){for(;A!==null;){var e=A;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:pe||Js(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!pe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ve(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&rc(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}rc(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&qr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}pe||e.flags&512&&Fa(e)}catch(v){Z(e,e.return,v)}}if(e===t){A=null;break}if(n=e.sibling,n!==null){n.return=e.return,A=n;break}A=e.return}}function Ic(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var n=e.sibling;if(n!==null){n.return=e.return,A=n;break}A=e.return}}function Ec(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Js(4,e)}catch(l){Z(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Z(e,i,l)}}var s=e.return;try{Fa(e)}catch(l){Z(e,s,l)}break;case 5:var o=e.return;try{Fa(e)}catch(l){Z(e,o,l)}}}catch(l){Z(e,e.return,l)}if(e===t){A=null;break}var a=e.sibling;if(a!==null){a.return=e.return,A=a;break}A=e.return}}var Ig=Math.ceil,Ns=Et.ReactCurrentDispatcher,zl=Et.ReactCurrentOwner,Me=Et.ReactCurrentBatchConfig,V=0,le=null,ne=null,ce=0,Ce=0,$n=Zt(0),ie=0,si=null,In=0,Ys=0,Bl=0,Fr=null,Ie=null,Hl=0,ir=1/0,st=null,Ps=!1,za=null,Bt=null,Vi=!1,Mt=null,Rs=0,Vr=0,Ba=null,Xi=-1,Zi=0;function ye(){return V&6?te():Xi!==-1?Xi:Xi=te()}function Ht(t){return t.mode&1?V&2&&ce!==0?ce&-ce:ig.transition!==null?(Zi===0&&(Zi=cf()),Zi):(t=z,t!==0||(t=window.event,t=t===void 0?16:gf(t.type)),t):1}function He(t,e,n,r){if(50<Vr)throw Vr=0,Ba=null,Error(T(185));hi(t,n,r),(!(V&2)||t!==le)&&(t===le&&(!(V&2)&&(Ys|=n),ie===4&&Rt(t,ce)),Te(t,r),n===1&&V===0&&!(e.mode&1)&&(ir=te()+500,Gs&&en()))}function Te(t,e){var n=t.callbackNode;iv(t,e);var r=fs(t,t===le?ce:0);if(r===0)n!==null&&Ou(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ou(n),e===1)t.tag===0?rg(kc.bind(null,t)):Uf(kc.bind(null,t)),Zv(function(){!(V&6)&&en()}),n=null;else{switch(df(r)){case 1:n=vl;break;case 4:n=lf;break;case 16:n=ds;break;case 536870912:n=uf;break;default:n=ds}n=Mh(n,Ph.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ph(t,e){if(Xi=-1,Zi=0,V&6)throw Error(T(327));var n=t.callbackNode;if(qn()&&t.callbackNode!==n)return null;var r=fs(t,t===le?ce:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=As(t,r);else{e=r;var i=V;V|=2;var s=Ah();(le!==t||ce!==e)&&(st=null,ir=te()+500,pn(t,e));do try{Sg();break}catch(a){Rh(t,a)}while(!0);Rl(),Ns.current=s,V=i,ne!==null?e=0:(le=null,ce=0,e=ie)}if(e!==0){if(e===2&&(i=va(t),i!==0&&(r=i,e=Ha(t,i))),e===1)throw n=si,pn(t,0),Rt(t,r),Te(t,te()),n;if(e===6)Rt(t,r);else{if(i=t.current.alternate,!(r&30)&&!Eg(i)&&(e=As(t,r),e===2&&(s=va(t),s!==0&&(r=s,e=Ha(t,s))),e===1))throw n=si,pn(t,0),Rt(t,r),Te(t,te()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(T(345));case 2:un(t,Ie,st);break;case 3:if(Rt(t,r),(r&130023424)===r&&(e=Hl+500-te(),10<e)){if(fs(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ye(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Sa(un.bind(null,t,Ie,st),e);break}un(t,Ie,st);break;case 4:if(Rt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Be(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ig(r/1960))-r,10<r){t.timeoutHandle=Sa(un.bind(null,t,Ie,st),r);break}un(t,Ie,st);break;case 5:un(t,Ie,st);break;default:throw Error(T(329))}}}return Te(t,te()),t.callbackNode===n?Ph.bind(null,t):null}function Ha(t,e){var n=Fr;return t.current.memoizedState.isDehydrated&&(pn(t,e).flags|=256),t=As(t,e),t!==2&&(e=Ie,Ie=n,e!==null&&Wa(e)),t}function Wa(t){Ie===null?Ie=t:Ie.push.apply(Ie,t)}function Eg(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ke(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Rt(t,e){for(e&=~Bl,e&=~Ys,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Be(e),r=1<<n;t[n]=-1,e&=~r}}function kc(t){if(V&6)throw Error(T(327));qn();var e=fs(t,0);if(!(e&1))return Te(t,te()),null;var n=As(t,e);if(t.tag!==0&&n===2){var r=va(t);r!==0&&(e=r,n=Ha(t,r))}if(n===1)throw n=si,pn(t,0),Rt(t,e),Te(t,te()),n;if(n===6)throw Error(T(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,un(t,Ie,st),Te(t,te()),null}function Wl(t,e){var n=V;V|=1;try{return t(e)}finally{V=n,V===0&&(ir=te()+500,Gs&&en())}}function En(t){Mt!==null&&Mt.tag===0&&!(V&6)&&qn();var e=V;V|=1;var n=Me.transition,r=z;try{if(Me.transition=null,z=1,t)return t()}finally{z=r,Me.transition=n,V=e,!(V&6)&&en()}}function Kl(){Ce=$n.current,G($n)}function pn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Xv(n)),ne!==null)for(n=ne.return;n!==null;){var r=n;switch(Cl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&gs();break;case 3:nr(),G(ke),G(me),Ml();break;case 5:Dl(r);break;case 4:nr();break;case 13:G(J);break;case 19:G(J);break;case 10:Al(r.type._context);break;case 22:case 23:Kl()}n=n.return}if(le=t,ne=t=Wt(t.current,null),ce=Ce=e,ie=0,si=null,Bl=Ys=In=0,Ie=Fr=null,fn!==null){for(e=0;e<fn.length;e++)if(n=fn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}fn=null}return t}function Rh(t,e){do{var n=ne;try{if(Rl(),Qi.current=Cs,Ts){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ts=!1}if(wn=0,ae=re=Y=null,jr=!1,ni=0,zl.current=null,n===null||n.return===null){ie=1,si=e,ne=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ce,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var v=c.alternate;v?(c.updateQueue=v.updateQueue,c.memoizedState=v.memoizedState,c.lanes=v.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=cc(o);if(y!==null){y.flags&=-257,dc(y,o,a,s,e),y.mode&1&&uc(s,u,e),e=y,l=u;var w=e.updateQueue;if(w===null){var h=new Set;h.add(l),e.updateQueue=h}else w.add(l);break e}else{if(!(e&1)){uc(s,u,e),Gl();break e}l=Error(T(426))}}else if(q&&a.mode&1){var _=cc(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),dc(_,o,a,s,e),Nl(rr(l,a));break e}}s=l=rr(l,a),ie!==4&&(ie=2),Fr===null?Fr=[s]:Fr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=fh(s,l,e);nc(s,m);break e;case 1:a=l;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Bt===null||!Bt.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var I=hh(s,a,e);nc(s,I);break e}}s=s.return}while(s!==null)}xh(n)}catch(C){e=C,ne===n&&n!==null&&(ne=n=n.return);continue}break}while(!0)}function Ah(){var t=Ns.current;return Ns.current=Cs,t===null?Cs:t}function Gl(){(ie===0||ie===3||ie===2)&&(ie=4),le===null||!(In&268435455)&&!(Ys&268435455)||Rt(le,ce)}function As(t,e){var n=V;V|=2;var r=Ah();(le!==t||ce!==e)&&(st=null,pn(t,e));do try{kg();break}catch(i){Rh(t,i)}while(!0);if(Rl(),V=n,Ns.current=r,ne!==null)throw Error(T(261));return le=null,ce=0,ie}function kg(){for(;ne!==null;)Oh(ne)}function Sg(){for(;ne!==null&&!Qm();)Oh(ne)}function Oh(t){var e=Dh(t.alternate,t,Ce);t.memoizedProps=t.pendingProps,e===null?xh(t):ne=e,zl.current=null}function xh(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=gg(n,e),n!==null){n.flags&=32767,ne=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ie=6,ne=null;return}}else if(n=vg(n,e,Ce),n!==null){ne=n;return}if(e=e.sibling,e!==null){ne=e;return}ne=e=t}while(e!==null);ie===0&&(ie=5)}function un(t,e,n){var r=z,i=Me.transition;try{Me.transition=null,z=1,Tg(t,e,n,r)}finally{Me.transition=i,z=r}return null}function Tg(t,e,n,r){do qn();while(Mt!==null);if(V&6)throw Error(T(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(T(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(sv(t,s),t===le&&(ne=le=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Vi||(Vi=!0,Mh(ds,function(){return qn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Me.transition,Me.transition=null;var o=z;z=1;var a=V;V|=4,zl.current=null,_g(t,n),Ch(n,t),Wv(Ea),hs=!!Ia,Ea=Ia=null,t.current=n,wg(n),Jm(),V=a,z=o,Me.transition=s}else t.current=n;if(Vi&&(Vi=!1,Mt=t,Rs=i),s=t.pendingLanes,s===0&&(Bt=null),Zm(n.stateNode),Te(t,te()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ps)throw Ps=!1,t=za,za=null,t;return Rs&1&&t.tag!==0&&qn(),s=t.pendingLanes,s&1?t===Ba?Vr++:(Vr=0,Ba=t):Vr=0,en(),null}function qn(){if(Mt!==null){var t=df(Rs),e=Me.transition,n=z;try{if(Me.transition=null,z=16>t?16:t,Mt===null)var r=!1;else{if(t=Mt,Mt=null,Rs=0,V&6)throw Error(T(331));var i=V;for(V|=4,A=t.current;A!==null;){var s=A,o=s.child;if(A.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(A=u;A!==null;){var c=A;switch(c.tag){case 0:case 11:case 15:br(8,c,s)}var f=c.child;if(f!==null)f.return=c,A=f;else for(;A!==null;){c=A;var v=c.sibling,y=c.return;if(kh(c),c===u){A=null;break}if(v!==null){v.return=y,A=v;break}A=y}}}var w=s.alternate;if(w!==null){var h=w.child;if(h!==null){w.child=null;do{var _=h.sibling;h.sibling=null,h=_}while(h!==null)}}A=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:br(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,A=m;break e}A=s.return}}var p=t.current;for(A=p;A!==null;){o=A;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,A=g;else e:for(o=p;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Js(9,a)}}catch(C){Z(a,a.return,C)}if(a===o){A=null;break e}var I=a.sibling;if(I!==null){I.return=a.return,A=I;break e}A=a.return}}if(V=i,en(),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(zs,t)}catch{}r=!0}return r}finally{z=n,Me.transition=e}}return!1}function Sc(t,e,n){e=rr(n,e),e=fh(t,e,1),t=zt(t,e,1),e=ye(),t!==null&&(hi(t,1,e),Te(t,e))}function Z(t,e,n){if(t.tag===3)Sc(t,t,n);else for(;e!==null;){if(e.tag===3){Sc(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bt===null||!Bt.has(r))){t=rr(n,t),t=hh(e,t,1),e=zt(e,t,1),t=ye(),e!==null&&(hi(e,1,t),Te(e,t));break}}e=e.return}}function Cg(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ye(),t.pingedLanes|=t.suspendedLanes&n,le===t&&(ce&n)===n&&(ie===4||ie===3&&(ce&130023424)===ce&&500>te()-Hl?pn(t,0):Bl|=n),Te(t,e)}function Lh(t,e){e===0&&(t.mode&1?(e=Ai,Ai<<=1,!(Ai&130023424)&&(Ai=4194304)):e=1);var n=ye();t=gt(t,e),t!==null&&(hi(t,e,n),Te(t,n))}function Ng(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Lh(t,n)}function Pg(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(e),Lh(t,n)}var Dh;Dh=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ke.current)Ee=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ee=!1,mg(t,e,n);Ee=!!(t.flags&131072)}else Ee=!1,q&&e.flags&1048576&&jf(e,ws,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Yi(t,e),t=e.pendingProps;var i=Zn(e,me.current);Gn(e,n),i=jl(null,e,r,t,i,n);var s=bl();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Se(r)?(s=!0,ys(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,xl(e),i.updater=qs,e.stateNode=i,i._reactInternals=e,Oa(e,r,t,n),e=Da(null,e,r,!0,s,n)):(e.tag=0,q&&s&&Tl(e),ge(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Yi(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Ag(r),t=Ve(r,t),i){case 0:e=La(null,e,r,t,n);break e;case 1:e=pc(null,e,r,t,n);break e;case 11:e=fc(null,e,r,t,n);break e;case 14:e=hc(null,e,r,Ve(r.type,t),n);break e}throw Error(T(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ve(r,i),La(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ve(r,i),pc(t,e,r,i,n);case 3:e:{if(gh(e),t===null)throw Error(T(387));r=e.pendingProps,s=e.memoizedState,i=s.element,$f(t,e),ks(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=rr(Error(T(423)),e),e=mc(t,e,r,n,i);break e}else if(r!==i){i=rr(Error(T(424)),e),e=mc(t,e,r,n,i);break e}else for(Ne=$t(e.stateNode.containerInfo.firstChild),Pe=e,q=!0,ze=null,n=Wf(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(er(),r===i){e=yt(t,e,n);break e}ge(t,e,r,n)}e=e.child}return e;case 5:return Kf(e),t===null&&Pa(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ka(r,i)?o=null:s!==null&&ka(r,s)&&(e.flags|=32),vh(t,e),ge(t,e,o,n),e.child;case 6:return t===null&&Pa(e),null;case 13:return yh(t,e,n);case 4:return Ll(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=tr(e,null,r,n):ge(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ve(r,i),fc(t,e,r,i,n);case 7:return ge(t,e,e.pendingProps,n),e.child;case 8:return ge(t,e,e.pendingProps.children,n),e.child;case 12:return ge(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,H(Is,r._currentValue),r._currentValue=o,s!==null)if(Ke(s.value,o)){if(s.children===i.children&&!ke.current){e=yt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=ft(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ra(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(T(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ra(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ge(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Gn(e,n),i=je(i),r=r(i),e.flags|=1,ge(t,e,r,n),e.child;case 14:return r=e.type,i=Ve(r,e.pendingProps),i=Ve(r.type,i),hc(t,e,r,i,n);case 15:return ph(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ve(r,i),Yi(t,e),e.tag=1,Se(r)?(t=!0,ys(e)):t=!1,Gn(e,n),Bf(e,r,i),Oa(e,r,i,n),Da(null,e,r,!0,t,n);case 19:return _h(t,e,n);case 22:return mh(t,e,n)}throw Error(T(156,e.tag))};function Mh(t,e){return af(t,e)}function Rg(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(t,e,n,r){return new Rg(t,e,n,r)}function ql(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ag(t){if(typeof t=="function")return ql(t)?1:0;if(t!=null){if(t=t.$$typeof,t===hl)return 11;if(t===pl)return 14}return 2}function Wt(t,e){var n=t.alternate;return n===null?(n=De(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function es(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ql(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case On:return mn(n.children,i,s,e);case fl:o=8,i|=8;break;case ta:return t=De(12,n,e,i|2),t.elementType=ta,t.lanes=s,t;case na:return t=De(13,n,e,i),t.elementType=na,t.lanes=s,t;case ra:return t=De(19,n,e,i),t.elementType=ra,t.lanes=s,t;case Bd:return Xs(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $d:o=10;break e;case zd:o=9;break e;case hl:o=11;break e;case pl:o=14;break e;case Ct:o=16,r=null;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=De(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function mn(t,e,n,r){return t=De(7,t,r,e),t.lanes=n,t}function Xs(t,e,n,r){return t=De(22,t,r,e),t.elementType=Bd,t.lanes=n,t.stateNode={isHidden:!1},t}function Vo(t,e,n){return t=De(6,t,null,e),t.lanes=n,t}function $o(t,e,n){return e=De(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Og(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Io(0),this.expirationTimes=Io(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Io(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ql(t,e,n,r,i,s,o,a,l){return t=new Og(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=De(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xl(s),t}function xg(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:An,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Uh(t){if(!t)return Jt;t=t._reactInternals;e:{if(Nn(t)!==t||t.tag!==1)throw Error(T(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Se(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(T(171))}if(t.tag===1){var n=t.type;if(Se(n))return Mf(t,n,e)}return e}function jh(t,e,n,r,i,s,o,a,l){return t=Ql(n,r,!0,t,i,s,o,a,l),t.context=Uh(null),n=t.current,r=ye(),i=Ht(n),s=ft(r,i),s.callback=e??null,zt(n,s,i),t.current.lanes=i,hi(t,i,r),Te(t,r),t}function Zs(t,e,n,r){var i=e.current,s=ye(),o=Ht(i);return n=Uh(n),e.context===null?e.context=n:e.pendingContext=n,e=ft(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=zt(i,e,o),t!==null&&(He(t,i,o,s),qi(t,i,o)),o}function Os(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Tc(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Jl(t,e){Tc(t,e),(t=t.alternate)&&Tc(t,e)}function Lg(){return null}var bh=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yl(t){this._internalRoot=t}eo.prototype.render=Yl.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(T(409));Zs(t,e,null,null)};eo.prototype.unmount=Yl.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;En(function(){Zs(null,t,null,null)}),e[vt]=null}};function eo(t){this._internalRoot=t}eo.prototype.unstable_scheduleHydration=function(t){if(t){var e=pf();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Pt.length&&e!==0&&e<Pt[n].priority;n++);Pt.splice(n,0,t),n===0&&vf(t)}};function Xl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function to(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Cc(){}function Dg(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Os(o);s.call(u)}}var o=jh(e,r,t,0,null,!1,!1,"",Cc);return t._reactRootContainer=o,t[vt]=o.current,Yr(t.nodeType===8?t.parentNode:t),En(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Os(l);a.call(u)}}var l=Ql(t,0,!1,null,null,!1,!1,"",Cc);return t._reactRootContainer=l,t[vt]=l.current,Yr(t.nodeType===8?t.parentNode:t),En(function(){Zs(e,l,n,r)}),l}function no(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Os(o);a.call(l)}}Zs(e,o,t,i)}else o=Dg(n,e,t,i,r);return Os(o)}ff=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Nr(e.pendingLanes);n!==0&&(gl(e,n|1),Te(e,te()),!(V&6)&&(ir=te()+500,en()))}break;case 13:En(function(){var r=gt(t,1);if(r!==null){var i=ye();He(r,t,1,i)}}),Jl(t,1)}};yl=function(t){if(t.tag===13){var e=gt(t,134217728);if(e!==null){var n=ye();He(e,t,134217728,n)}Jl(t,134217728)}};hf=function(t){if(t.tag===13){var e=Ht(t),n=gt(t,e);if(n!==null){var r=ye();He(n,t,e,r)}Jl(t,e)}};pf=function(){return z};mf=function(t,e){var n=z;try{return z=t,e()}finally{z=n}};ha=function(t,e,n){switch(e){case"input":if(oa(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ks(r);if(!i)throw Error(T(90));Wd(r),oa(r,i)}}}break;case"textarea":Gd(t,n);break;case"select":e=n.value,e!=null&&Bn(t,!!n.multiple,e,!1)}};ef=Wl;tf=En;var Mg={usingClientEntryPoint:!1,Events:[mi,Mn,Ks,Xd,Zd,Wl]},Sr={findFiberByHostInstance:dn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ug={bundleType:Sr.bundleType,version:Sr.version,rendererPackageName:Sr.rendererPackageName,rendererConfig:Sr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Et.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=sf(t),t===null?null:t.stateNode},findFiberByHostInstance:Sr.findFiberByHostInstance||Lg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$i.isDisabled&&$i.supportsFiber)try{zs=$i.inject(Ug),Ze=$i}catch{}}Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mg;Ae.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xl(e))throw Error(T(200));return xg(t,e,null,n)};Ae.createRoot=function(t,e){if(!Xl(t))throw Error(T(299));var n=!1,r="",i=bh;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ql(t,1,!1,null,null,n,!1,r,i),t[vt]=e.current,Yr(t.nodeType===8?t.parentNode:t),new Yl(e)};Ae.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):(t=Object.keys(t).join(","),Error(T(268,t)));return t=sf(e),t=t===null?null:t.stateNode,t};Ae.flushSync=function(t){return En(t)};Ae.hydrate=function(t,e,n){if(!to(e))throw Error(T(200));return no(null,t,e,!0,n)};Ae.hydrateRoot=function(t,e,n){if(!Xl(t))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=bh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=jh(e,null,t,1,n??null,i,!1,s,o),t[vt]=e.current,Yr(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new eo(e)};Ae.render=function(t,e,n){if(!to(e))throw Error(T(200));return no(null,t,e,!1,n)};Ae.unmountComponentAtNode=function(t){if(!to(t))throw Error(T(40));return t._reactRootContainer?(En(function(){no(null,null,t,!1,function(){t._reactRootContainer=null,t[vt]=null})}),!0):!1};Ae.unstable_batchedUpdates=Wl;Ae.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!to(n))throw Error(T(200));if(t==null||t._reactInternals===void 0)throw Error(T(38));return no(t,e,n,!1,r)};Ae.version="18.2.0-next-9e3b772b8-20220608";function Fh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fh)}catch(t){console.error(t)}}Fh(),Ud.exports=Ae;var jg=Ud.exports,Nc=jg;Zo.createRoot=Nc.createRoot,Zo.hydrateRoot=Nc.hydrateRoot;/**
 * @remix-run/router v1.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oi(){return oi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},oi.apply(this,arguments)}var Ut;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ut||(Ut={}));const Pc="popstate";function bg(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Ka("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Vh(i)}return Vg(e,n,null,t)}function se(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Zl(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Fg(){return Math.random().toString(36).substr(2,8)}function Rc(t,e){return{usr:t.state,key:t.key,idx:e}}function Ka(t,e,n,r){return n===void 0&&(n=null),oi({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?dr(e):e,{state:n,key:e&&e.key||r||Fg()})}function Vh(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function dr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Vg(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Ut.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(oi({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){a=Ut.Pop;let _=c(),m=_==null?null:_-u;u=_,l&&l({action:a,location:h.location,delta:m})}function v(_,m){a=Ut.Push;let p=Ka(h.location,_,m);n&&n(p,_),u=c()+1;let g=Rc(p,u),I=h.createHref(p);try{o.pushState(g,"",I)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(I)}s&&l&&l({action:a,location:h.location,delta:1})}function y(_,m){a=Ut.Replace;let p=Ka(h.location,_,m);n&&n(p,_),u=c();let g=Rc(p,u),I=h.createHref(p);o.replaceState(g,"",I),s&&l&&l({action:a,location:h.location,delta:0})}function w(_){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof _=="string"?_:Vh(_);return se(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let h={get action(){return a},get location(){return t(i,o)},listen(_){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Pc,f),l=_,()=>{i.removeEventListener(Pc,f),l=null}},createHref(_){return e(i,_)},createURL:w,encodeLocation(_){let m=w(_);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:v,replace:y,go(_){return o.go(_)}};return h}var Ac;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ac||(Ac={}));function $g(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?dr(e):e,i=Bh(r.pathname||"/",n);if(i==null)return null;let s=$h(t);zg(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Yg(s[a],e0(i));return o}function $h(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(se(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=vn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(se(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),$h(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Qg(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of zh(s.path))i(s,o,l)}),e}function zh(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=zh(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function zg(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Jg(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Bg=/^:[\w-]+$/,Hg=3,Wg=2,Kg=1,Gg=10,qg=-2,Oc=t=>t==="*";function Qg(t,e){let n=t.split("/"),r=n.length;return n.some(Oc)&&(r+=qg),e&&(r+=Wg),n.filter(i=>!Oc(i)).reduce((i,s)=>i+(Bg.test(s)?Hg:s===""?Kg:Gg),r)}function Jg(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Yg(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=Xg({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;s.push({params:r,pathname:vn([i,c.pathname]),pathnameBase:a0(vn([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=vn([i,c.pathnameBase]))}return s}function Xg(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Zg(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{let{paramName:v,isOptional:y}=c;if(v==="*"){let h=a[f]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}const w=a[f];return y&&!w?u[v]=void 0:u[v]=t0(w||"",v),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Zg(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Zl(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function e0(t){try{return decodeURI(t)}catch(e){return Zl(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function t0(t,e){try{return decodeURIComponent(t)}catch(n){return Zl(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Bh(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function n0(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?dr(t):t;return{pathname:n?n.startsWith("/")?n:r0(n,e):e,search:l0(r),hash:u0(i)}}function r0(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function zo(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function i0(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function s0(t,e){let n=i0(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function o0(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=dr(t):(i=oi({},t),se(!i.pathname||!i.pathname.includes("?"),zo("?","pathname","search",i)),se(!i.pathname||!i.pathname.includes("#"),zo("#","pathname","hash",i)),se(!i.search||!i.search.includes("#"),zo("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let v=o.split("/");for(;v[0]==="..";)v.shift(),f-=1;i.pathname=v.join("/")}a=f>=0?e[f]:"/"}let l=n0(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const vn=t=>t.join("/").replace(/\/\/+/g,"/"),a0=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),l0=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,u0=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function c0(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Hh=["post","put","patch","delete"];new Set(Hh);const d0=["get",...Hh];new Set(d0);/**
 * React Router v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ai(){return ai=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ai.apply(this,arguments)}const eu=S.createContext(null),f0=S.createContext(null),ro=S.createContext(null),io=S.createContext(null),fr=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Wh=S.createContext(null);function so(){return S.useContext(io)!=null}function Kh(){return so()||se(!1),S.useContext(io).location}function Gh(t){S.useContext(ro).static||S.useLayoutEffect(t)}function h0(){let{isDataRoute:t}=S.useContext(fr);return t?C0():p0()}function p0(){so()||se(!1);let t=S.useContext(eu),{basename:e,future:n,navigator:r}=S.useContext(ro),{matches:i}=S.useContext(fr),{pathname:s}=Kh(),o=JSON.stringify(s0(i,n.v7_relativeSplatPath)),a=S.useRef(!1);return Gh(()=>{a.current=!0}),S.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=o0(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:vn([e,f.pathname])),(c.replace?r.replace:r.push)(f,c.state,c)},[e,r,o,s,t])}function m0(t,e){return v0(t,e)}function v0(t,e,n,r){so()||se(!1);let{navigator:i}=S.useContext(ro),{matches:s}=S.useContext(fr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Kh(),c;if(e){var f;let _=typeof e=="string"?dr(e):e;l==="/"||(f=_.pathname)!=null&&f.startsWith(l)||se(!1),c=_}else c=u;let v=c.pathname||"/",y=l==="/"?v:v.slice(l.length)||"/",w=$g(t,{pathname:y}),h=I0(w&&w.map(_=>Object.assign({},_,{params:Object.assign({},a,_.params),pathname:vn([l,i.encodeLocation?i.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?l:vn([l,i.encodeLocation?i.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),s,n,r);return e&&h?S.createElement(io.Provider,{value:{location:ai({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Ut.Pop}},h):h}function g0(){let t=T0(),e=c0(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,null)}const y0=S.createElement(g0,null);class _0 extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?S.createElement(fr.Provider,{value:this.props.routeContext},S.createElement(Wh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function w0(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(eu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(fr.Provider,{value:e},r)}function I0(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id]));c>=0||se(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let f=o[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:v,errors:y}=n,w=f.route.loader&&v[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||w){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,f,v)=>{let y,w=!1,h=null,_=null;n&&(y=a&&f.route.id?a[f.route.id]:void 0,h=f.route.errorElement||y0,l&&(u<0&&v===0?(N0("route-fallback",!1),w=!0,_=null):u===v&&(w=!0,_=f.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,v+1)),p=()=>{let g;return y?g=h:w?g=_:f.route.Component?g=S.createElement(f.route.Component,null):f.route.element?g=f.route.element:g=c,S.createElement(w0,{match:f,routeContext:{outlet:c,matches:m,isDataRoute:n!=null},children:g})};return n&&(f.route.ErrorBoundary||f.route.errorElement||v===0)?S.createElement(_0,{location:n.location,revalidation:n.revalidation,component:h,error:y,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var qh=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(qh||{}),xs=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(xs||{});function E0(t){let e=S.useContext(eu);return e||se(!1),e}function k0(t){let e=S.useContext(f0);return e||se(!1),e}function S0(t){let e=S.useContext(fr);return e||se(!1),e}function Qh(t){let e=S0(),n=e.matches[e.matches.length-1];return n.route.id||se(!1),n.route.id}function T0(){var t;let e=S.useContext(Wh),n=k0(xs.UseRouteError),r=Qh(xs.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function C0(){let{router:t}=E0(qh.UseNavigateStable),e=Qh(xs.UseNavigateStable),n=S.useRef(!1);return Gh(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ai({fromRouteId:e},s)))},[t,e])}const xc={};function N0(t,e,n){!e&&!xc[t]&&(xc[t]=!0)}function ts(t){se(!1)}function P0(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ut.Pop,navigator:s,static:o=!1,future:a}=t;so()&&se(!1);let l=e.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:l,navigator:s,static:o,future:ai({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=dr(r));let{pathname:c="/",search:f="",hash:v="",state:y=null,key:w="default"}=r,h=S.useMemo(()=>{let _=Bh(c,l);return _==null?null:{location:{pathname:_,search:f,hash:v,state:y,key:w},navigationType:i}},[l,c,f,v,y,w,i]);return h==null?null:S.createElement(ro.Provider,{value:u},S.createElement(io.Provider,{children:n,value:h}))}function R0(t){let{children:e,location:n}=t;return m0(Ga(e),n)}new Promise(()=>{});function Ga(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let s=[...e,i];if(r.type===S.Fragment){n.push.apply(n,Ga(r.props.children,s));return}r.type!==ts&&se(!1),!r.props.index||!r.props.children||se(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ga(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const A0="startTransition",Lc=Nm[A0];function O0(t){let{basename:e,children:n,future:r,window:i}=t,s=S.useRef();s.current==null&&(s.current=bg({window:i,v5Compat:!0}));let o=s.current,[a,l]=S.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=S.useCallback(f=>{u&&Lc?Lc(()=>l(f)):l(f)},[l,u]);return S.useLayoutEffect(()=>o.listen(c),[o,c]),S.createElement(P0,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var Dc;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Dc||(Dc={}));var Mc;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Mc||(Mc={}));const Jh="data:image/svg+xml,%3csvg%20width='33'%20height='27'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m26.463.408%203.2%206.4h-4.8l-3.2-6.4h-3.2l3.2%206.4h-4.8l-3.2-6.4h-3.2l3.2%206.4h-4.8l-3.2-6.4h-1.6a3.186%203.186%200%200%200-3.184%203.2l-.016%2019.2a3.2%203.2%200%200%200%203.2%203.2h25.6a3.2%203.2%200%200%200%203.2-3.2V.408h-6.4Z'%20fill='%23FC4747'/%3e%3c/svg%3e";var Uc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},x0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Xh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,f=(s&3)<<4|a>>4;let v=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(v=64)),r.push(n[c],n[f],n[v],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Yh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):x0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new L0;const v=s<<2|a>>4;if(r.push(v),u!==64){const y=a<<4&240|u>>2;if(r.push(y),f!==64){const w=u<<6&192|f;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class L0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const D0=function(t){const e=Yh(t);return Xh.encodeByteArray(e,!0)},Zh=function(t){return D0(t).replace(/\./g,"")},tu=function(t){try{return Xh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0=()=>M0().__FIREBASE_DEFAULTS__,j0=()=>{if(typeof process>"u"||typeof Uc>"u")return;const t=Uc.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},b0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&tu(t[1]);return e&&JSON.parse(e)},nu=()=>{try{return U0()||j0()||b0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},F0=t=>{var e,n;return(n=(e=nu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ep=()=>{var t;return(t=nu())===null||t===void 0?void 0:t.config},tp=t=>{var e;return(e=nu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function np(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(B())}function rp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ip(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sp(){const t=B();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $0(){try{return typeof indexedDB=="object"}catch{return!1}}function z0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0="FirebaseError";class Ge extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=B0,Object.setPrototypeOf(this,Ge.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,tn.prototype.create)}}class tn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?H0(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ge(i,a,r)}}function H0(t,e){return t.replace(W0,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const W0=/\{\$([^}]+)}/g;function K0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ls(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(jc(s)&&jc(o)){if(!Ls(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function jc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Rr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ar(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function op(t,e){const n=new G0(t,e);return n.subscribe.bind(n)}class G0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");q0(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Bo),i.error===void 0&&(i.error=Bo),i.complete===void 0&&(i.complete=Bo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function q0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Bo(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t){return t&&t._delegate?t._delegate:t}class Yt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new V0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Y0(e))try{this.getOrInitializeService({instanceIdentifier:cn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=cn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cn){return this.instances.has(e)}getOptions(e=cn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:J0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=cn){return this.component?this.component.multipleInstances?e:cn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function J0(t){return t===cn?void 0:t}function Y0(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Q0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})($||($={}));const Z0={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},ey=$.INFO,ty={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},ny=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ty[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ru{constructor(e){this.name=e,this._logLevel=ey,this._logHandler=ny,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Z0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const ry=(t,e)=>e.some(n=>t instanceof n);let bc,Fc;function iy(){return bc||(bc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sy(){return Fc||(Fc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ap=new WeakMap,qa=new WeakMap,lp=new WeakMap,Ho=new WeakMap,iu=new WeakMap;function oy(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Kt(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ap.set(n,t)}).catch(()=>{}),iu.set(e,t),e}function ay(t){if(qa.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});qa.set(t,e)}let Qa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qa.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ly(t){Qa=t(Qa)}function uy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Wo(this),e,...n);return lp.set(r,e.sort?e.sort():[e]),Kt(r)}:sy().includes(t)?function(...e){return t.apply(Wo(this),e),Kt(ap.get(this))}:function(...e){return Kt(t.apply(Wo(this),e))}}function cy(t){return typeof t=="function"?uy(t):(t instanceof IDBTransaction&&ay(t),ry(t,iy())?new Proxy(t,Qa):t)}function Kt(t){if(t instanceof IDBRequest)return oy(t);if(Ho.has(t))return Ho.get(t);const e=cy(t);return e!==t&&(Ho.set(t,e),iu.set(e,t)),e}const Wo=t=>iu.get(t);function dy(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Kt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Kt(o.result),l.oldVersion,l.newVersion,Kt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const fy=["get","getKey","getAll","getAllKeys","count"],hy=["put","add","delete","clear"],Ko=new Map;function Vc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ko.get(e))return Ko.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=hy.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||fy.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ko.set(e,s),s}ly(t=>({...t,get:(e,n,r)=>Vc(e,n)||t.get(e,n,r),has:(e,n)=>!!Vc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(my(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function my(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ja="@firebase/app",$c="0.9.26";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=new ru("@firebase/app"),vy="@firebase/app-compat",gy="@firebase/analytics-compat",yy="@firebase/analytics",_y="@firebase/app-check-compat",wy="@firebase/app-check",Iy="@firebase/auth",Ey="@firebase/auth-compat",ky="@firebase/database",Sy="@firebase/database-compat",Ty="@firebase/functions",Cy="@firebase/functions-compat",Ny="@firebase/installations",Py="@firebase/installations-compat",Ry="@firebase/messaging",Ay="@firebase/messaging-compat",Oy="@firebase/performance",xy="@firebase/performance-compat",Ly="@firebase/remote-config",Dy="@firebase/remote-config-compat",My="@firebase/storage",Uy="@firebase/storage-compat",jy="@firebase/firestore",by="@firebase/firestore-compat",Fy="firebase",Vy="10.7.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya="[DEFAULT]",$y={[Ja]:"fire-core",[vy]:"fire-core-compat",[yy]:"fire-analytics",[gy]:"fire-analytics-compat",[wy]:"fire-app-check",[_y]:"fire-app-check-compat",[Iy]:"fire-auth",[Ey]:"fire-auth-compat",[ky]:"fire-rtdb",[Sy]:"fire-rtdb-compat",[Ty]:"fire-fn",[Cy]:"fire-fn-compat",[Ny]:"fire-iid",[Py]:"fire-iid-compat",[Ry]:"fire-fcm",[Ay]:"fire-fcm-compat",[Oy]:"fire-perf",[xy]:"fire-perf-compat",[Ly]:"fire-rc",[Dy]:"fire-rc-compat",[My]:"fire-gcs",[Uy]:"fire-gcs-compat",[jy]:"fire-fst",[by]:"fire-fst-compat","fire-js":"fire-js",[Fy]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=new Map,Xa=new Map;function zy(t,e){try{t.container.addComponent(e)}catch(n){kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Sn(t){const e=t.name;if(Xa.has(e))return kn.debug(`There were multiple attempts to register component ${e}.`),!1;Xa.set(e,t);for(const n of Ds.values())zy(n,t);return!0}function up(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Gt=new tn("app","Firebase",By);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=Vy;function cp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ya,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Gt.create("bad-app-name",{appName:String(i)});if(n||(n=ep()),!n)throw Gt.create("no-options");const s=Ds.get(i);if(s){if(Ls(n,s.options)&&Ls(r,s.config))return s;throw Gt.create("duplicate-app",{appName:i})}const o=new X0(i);for(const l of Xa.values())o.addComponent(l);const a=new Hy(n,r,o);return Ds.set(i,a),a}function Wy(t=Ya){const e=Ds.get(t);if(!e&&t===Ya&&ep())return cp();if(!e)throw Gt.create("no-app",{appName:t});return e}function qt(t,e,n){var r;let i=(r=$y[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kn.warn(a.join(" "));return}Sn(new Yt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky="firebase-heartbeat-database",Gy=1,li="firebase-heartbeat-store";let Go=null;function dp(){return Go||(Go=dy(Ky,Gy,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(li)}catch(n){console.warn(n)}}}}).catch(t=>{throw Gt.create("idb-open",{originalErrorMessage:t.message})})),Go}async function qy(t){try{return await(await dp()).transaction(li).objectStore(li).get(fp(t))}catch(e){if(e instanceof Ge)kn.warn(e.message);else{const n=Gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kn.warn(n.message)}}}async function zc(t,e){try{const r=(await dp()).transaction(li,"readwrite");await r.objectStore(li).put(e,fp(t)),await r.done}catch(n){if(n instanceof Ge)kn.warn(n.message);else{const r=Gt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});kn.warn(r.message)}}}function fp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy=1024,Jy=30*24*60*60*1e3;class Yy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Zy(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Bc();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Jy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Bc(),{heartbeatsToSend:r,unsentEntries:i}=Xy(this._heartbeatsCache.heartbeats),s=Zh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Bc(){return new Date().toISOString().substring(0,10)}function Xy(t,e=Qy){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Hc(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Hc(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Zy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $0()?z0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await qy(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Hc(t){return Zh(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(t){Sn(new Yt("platform-logger",e=>new py(e),"PRIVATE")),Sn(new Yt("heartbeat",e=>new Yy(e),"PRIVATE")),qt(Ja,$c,t),qt(Ja,$c,"esm2017"),qt("fire-js","")}e_("");var Za=function(t,e){return Za=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},Za(t,e)};function Q(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Za(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var K=function(){return K=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},K.apply(this,arguments)};function hr(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function E(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(f){o(f)}}function l(c){try{u(r.throw(c))}catch(f){o(f)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function k(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(n=0)),n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function Ue(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var Wc="__sak";function hp(){var t;return t={},t["dependent-sdk-initialized-before-auth"]="Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",t}var t_=hp,el=new tn("auth","Firebase",hp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qn=new ru("@firebase/auth");function n_(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];Qn.logLevel<=$.WARN&&Qn.warn.apply(Qn,Ue(["Auth (".concat(rn,"): ").concat(t)],e,!1))}function ns(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];Qn.logLevel<=$.ERROR&&Qn.error.apply(Qn,Ue(["Auth (".concat(rn,"): ").concat(t)],e,!1))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];throw su.apply(void 0,Ue([t],e,!1))}function oo(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return su.apply(void 0,Ue([t],e,!1))}function r_(t,e,n){var r,i=K(K({},t_()),(r={},r[e]=n,r)),s=new tn("auth","Firebase",i);return s.create(e,{appName:t.name})}function su(t){for(var e,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(typeof t!="string"){var i=n[0],s=Ue([],n.slice(1),!0);return s[0]&&(s[0].appName=t.name),(e=t._errorFactory).create.apply(e,Ue([i],s,!1))}return el.create.apply(el,Ue([t],n,!1))}function U(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!t)throw su.apply(void 0,Ue([e],n,!1))}function ut(t){var e="INTERNAL ASSERTION FAILED: "+t;throw ns(e),new Error(e)}function sr(t,e){t||ut(e)}function i_(){return Kc()==="http:"||Kc()==="https:"}function Kc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(i_()||rp()||"connection"in navigator)?navigator.onLine:!0}function o_(){if(typeof navigator>"u")return null;var t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var a_=function(){function t(e,n){this.shortDelay=e,this.longDelay=n,sr(n>e,"Short delay should be less than long delay!"),this.isMobile=np()||ip()}return t.prototype.get=function(){return s_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)},t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(t,e){sr(t.emulator,"Emulator should always be set here");var n=t.emulator.url;return e?"".concat(n).concat(e.startsWith("/")?e.slice(1):e):n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pp=function(){function t(){}return t.initialize=function(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)},t.fetch=function(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")},t.headers=function(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")},t.response=function(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")},t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var L,u_=(L={},L.CREDENTIAL_MISMATCH="custom-token-mismatch",L.MISSING_CUSTOM_TOKEN="internal-error",L.INVALID_IDENTIFIER="invalid-email",L.MISSING_CONTINUE_URI="internal-error",L.INVALID_PASSWORD="wrong-password",L.MISSING_PASSWORD="missing-password",L.INVALID_LOGIN_CREDENTIALS="invalid-credential",L.EMAIL_EXISTS="email-already-in-use",L.PASSWORD_LOGIN_DISABLED="operation-not-allowed",L.INVALID_IDP_RESPONSE="invalid-credential",L.INVALID_PENDING_TOKEN="invalid-credential",L.FEDERATED_USER_ID_ALREADY_LINKED="credential-already-in-use",L.MISSING_REQ_TYPE="internal-error",L.EMAIL_NOT_FOUND="user-not-found",L.RESET_PASSWORD_EXCEED_LIMIT="too-many-requests",L.EXPIRED_OOB_CODE="expired-action-code",L.INVALID_OOB_CODE="invalid-action-code",L.MISSING_OOB_CODE="internal-error",L.CREDENTIAL_TOO_OLD_LOGIN_AGAIN="requires-recent-login",L.INVALID_ID_TOKEN="invalid-user-token",L.TOKEN_EXPIRED="user-token-expired",L.USER_NOT_FOUND="user-token-expired",L.TOO_MANY_ATTEMPTS_TRY_LATER="too-many-requests",L.PASSWORD_DOES_NOT_MEET_REQUIREMENTS="password-does-not-meet-requirements",L.INVALID_CODE="invalid-verification-code",L.INVALID_SESSION_INFO="invalid-verification-id",L.INVALID_TEMPORARY_PROOF="invalid-credential",L.MISSING_SESSION_INFO="missing-verification-id",L.SESSION_EXPIRED="code-expired",L.MISSING_ANDROID_PACKAGE_NAME="missing-android-pkg-name",L.UNAUTHORIZED_DOMAIN="unauthorized-continue-uri",L.INVALID_OAUTH_CLIENT_ID="invalid-oauth-client-id",L.ADMIN_ONLY_OPERATION="admin-restricted-operation",L.INVALID_MFA_PENDING_CREDENTIAL="invalid-multi-factor-session",L.MFA_ENROLLMENT_NOT_FOUND="multi-factor-info-not-found",L.MISSING_MFA_ENROLLMENT_ID="missing-multi-factor-info",L.MISSING_MFA_PENDING_CREDENTIAL="missing-multi-factor-session",L.SECOND_FACTOR_EXISTS="second-factor-already-in-use",L.SECOND_FACTOR_LIMIT_EXCEEDED="maximum-second-factor-count-exceeded",L.BLOCKING_FUNCTION_ERROR_RESPONSE="internal-error",L.RECAPTCHA_NOT_ENABLED="recaptcha-not-enabled",L.MISSING_RECAPTCHA_TOKEN="missing-recaptcha-token",L.INVALID_RECAPTCHA_TOKEN="invalid-recaptcha-token",L.INVALID_RECAPTCHA_ACTION="invalid-recaptcha-action",L.MISSING_CLIENT_TYPE="missing-client-type",L.MISSING_RECAPTCHA_VERSION="missing-recaptcha-version",L.INVALID_RECAPTCHA_VERSION="invalid-recaptcha-version",L.INVALID_REQ_TYPE="invalid-req-type",L);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var c_=new a_(3e4,6e4);function Qe(t,e){return t.tenantId&&!e.tenantId?K(K({},e),{tenantId:t.tenantId}):e}function Pn(t,e,n,r,i){return i===void 0&&(i={}),E(this,void 0,void 0,function(){var s=this;return k(this,function(o){return[2,mp(t,i,function(){return E(s,void 0,void 0,function(){var a,l,u,c;return k(this,function(f){switch(f.label){case 0:return a={},l={},r&&(e==="GET"?l=r:a={body:JSON.stringify(r)}),u=nn(K({key:t.config.apiKey},l)).slice(1),[4,t._getAdditionalHeaders()];case 1:return c=f.sent(),c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),[2,pp.fetch()(vp(t,t.config.apiHost,n,u),K({method:e,headers:c,referrerPolicy:"no-referrer"},a))]}})})})]})})}function mp(t,e,n){return E(this,void 0,void 0,function(){var r,i,s,o,a,l,u,c,f,v;return k(this,function(y){switch(y.label){case 0:t._canInitEmulator=!1,r=K(K({},u_),e),y.label=1;case 1:return y.trys.push([1,4,,5]),i=new f_(t),[4,Promise.race([n(),i.promise])];case 2:return s=y.sent(),i.clearNetworkTimeout(),[4,s.json()];case 3:if(o=y.sent(),"needConfirmation"in o)throw Or(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return[2,o];if(a=s.ok?o.errorMessage:o.error.message,l=a.split(" : "),u=l[0],c=l[1],u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Or(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Or(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Or(t,"user-disabled",o);if(f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-"),c)throw r_(t,f,c);return _t(t,f),[3,5];case 4:if(v=y.sent(),v instanceof Ge)throw v;return _t(t,"network-request-failed",{message:String(v)}),[3,5];case 5:return[2]}})})}function sn(t,e,n,r,i){return i===void 0&&(i={}),E(this,void 0,void 0,function(){var s;return k(this,function(o){switch(o.label){case 0:return[4,Pn(t,e,n,r,i)];case 1:return s=o.sent(),"mfaPendingCredential"in s&&_t(t,"multi-factor-auth-required",{_serverResponse:s}),[2,s]}})})}function vp(t,e,n,r){var i="".concat(e).concat(n,"?").concat(r);return t.config.emulator?l_(t.config,i):"".concat(t.config.apiScheme,"://").concat(i)}function d_(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var f_=function(){function t(e){var n=this;this.auth=e,this.timer=null,this.promise=new Promise(function(r,i){n.timer=setTimeout(function(){return i(oo(n.auth,"network-request-failed"))},c_.get())})}return t.prototype.clearNetworkTimeout=function(){clearTimeout(this.timer)},t}();function Or(t,e,n){var r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=oo(t,e,r);return i.customData._tokenResponse=n,i}function Gc(t){return t!==void 0&&t.enterprise!==void 0}var h_=function(){function t(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}return t.prototype.getProviderEnforcementState=function(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(var n=0,r=this.recaptchaEnforcementState;n<r.length;n++){var i=r[n];if(i.provider&&i.provider===e)return d_(i.enforcementState)}return null},t.prototype.isProviderEnabled=function(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"},t}();function p_(t,e){return E(this,void 0,void 0,function(){return k(this,function(n){return[2,Pn(t,"GET","/v2/recaptchaConfig",Qe(t,e))]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(t,e){return E(this,void 0,void 0,function(){return k(this,function(n){return[2,Pn(t,"POST","/v1/accounts:delete",e)]})})}function v_(t,e){return E(this,void 0,void 0,function(){return k(this,function(n){return[2,Pn(t,"POST","/v1/accounts:lookup",e)]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(t){if(t)try{var e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}function g_(t,e){return e===void 0&&(e=!1),E(this,void 0,void 0,function(){var n,r,i,s,o;return k(this,function(a){switch(a.label){case 0:return n=qe(t),[4,n.getIdToken(e)];case 1:return r=a.sent(),i=ou(r),U(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error"),s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider,[2,{claims:i,token:r,authTime:$r(qo(i.auth_time)),issuedAtTime:$r(qo(i.iat)),expirationTime:$r(qo(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}]}})})}function qo(t){return Number(t)*1e3}function ou(t){var e=t.split("."),n=e[0],r=e[1],i=e[2];if(n===void 0||r===void 0||i===void 0)return ns("JWT malformed, contained fewer than 3 sections"),null;try{var s=tu(r);return s?JSON.parse(s):(ns("Failed to decode base64 JWT payload"),null)}catch(o){return ns("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function y_(t){var e=ou(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(t,e,n){return n===void 0&&(n=!1),E(this,void 0,void 0,function(){var r;return k(this,function(i){switch(i.label){case 0:if(n)return[2,e];i.label=1;case 1:return i.trys.push([1,3,,6]),[4,e];case 2:return[2,i.sent()];case 3:return r=i.sent(),r instanceof Ge&&__(r)?t.auth.currentUser!==t?[3,5]:[4,t.auth.signOut()]:[3,5];case 4:i.sent(),i.label=5;case 5:throw r;case 6:return[2]}})})}function __(t){var e=t.code;return e==="auth/".concat("user-disabled")||e==="auth/".concat("user-token-expired")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var w_=function(){function t(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return t.prototype._start=function(){this.isRunning||(this.isRunning=!0,this.schedule())},t.prototype._stop=function(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))},t.prototype.getInterval=function(e){var n;if(e){var r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;var i=(n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0,r=i-Date.now()-3e5;return Math.max(0,r)}},t.prototype.schedule=function(e){var n=this;if(e===void 0&&(e=!1),!!this.isRunning){var r=this.getInterval(e);this.timerId=setTimeout(function(){return E(n,void 0,void 0,function(){return k(this,function(i){switch(i.label){case 0:return[4,this.iteration()];case 1:return i.sent(),[2]}})})},r)}},t.prototype.iteration=function(){return E(this,void 0,void 0,function(){var e;return k(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,this.user.getIdToken(!0)];case 1:return n.sent(),[3,3];case 2:return e=n.sent(),(e==null?void 0:e.code)==="auth/".concat("network-request-failed")&&this.schedule(!0),[2];case 3:return this.schedule(),[2]}})})},t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gp=function(){function t(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}return t.prototype._initializeTime=function(){this.lastSignInTime=$r(this.lastLoginAt),this.creationTime=$r(this.createdAt)},t.prototype._copy=function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()},t.prototype.toJSON=function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}},t}();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(t){var e;return E(this,void 0,void 0,function(){var n,r,i,s,o,a,l,u,c,f;return k(this,function(v){switch(v.label){case 0:return n=t.auth,[4,t.getIdToken()];case 1:return r=v.sent(),[4,ui(t,v_(n,{idToken:r}))];case 2:return i=v.sent(),U(i==null?void 0:i.users.length,n,"internal-error"),s=i.users[0],t._notifyReloadListener(s),o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?k_(s.providerUserInfo):[],a=E_(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new gp(s.createdAt,s.lastLoginAt),isAnonymous:c},Object.assign(t,f),[2]}})})}function I_(t){return E(this,void 0,void 0,function(){var e;return k(this,function(n){switch(n.label){case 0:return e=qe(t),[4,Ms(e)];case 1:return n.sent(),[4,e.auth._persistUserIfCurrent(e)];case 2:return n.sent(),e.auth._notifyListenersIfCurrent(e),[2]}})})}function E_(t,e){var n=t.filter(function(r){return!e.some(function(i){return i.providerId===r.providerId})});return Ue(Ue([],n,!0),e,!0)}function k_(t){return t.map(function(e){var n=e.providerId,r=hr(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(t,e){return E(this,void 0,void 0,function(){var n,r=this;return k(this,function(i){switch(i.label){case 0:return[4,mp(t,{},function(){return E(r,void 0,void 0,function(){var s,o,a,l,u,c;return k(this,function(f){switch(f.label){case 0:return s=nn({grant_type:"refresh_token",refresh_token:e}).slice(1),o=t.config,a=o.tokenApiHost,l=o.apiKey,u=vp(t,a,"/v1/token","key=".concat(l)),[4,t._getAdditionalHeaders()];case 1:return c=f.sent(),c["Content-Type"]="application/x-www-form-urlencoded",[2,pp.fetch()(u,{method:"POST",headers:c,body:s})]}})})})];case 1:return n=i.sent(),[2,{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}]}})})}function T_(t,e){return E(this,void 0,void 0,function(){return k(this,function(n){return[2,Pn(t,"POST","/v2/accounts:revokeToken",Qe(t,e))]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qc=function(){function t(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return Object.defineProperty(t.prototype,"isExpired",{get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4},enumerable:!1,configurable:!0}),t.prototype.updateFromServerResponse=function(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");var n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):y_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)},t.prototype.getToken=function(e,n){return n===void 0&&(n=!1),E(this,void 0,void 0,function(){return k(this,function(r){switch(r.label){case 0:return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?[2,this.accessToken]:this.refreshToken?[4,this.refresh(e,this.refreshToken)]:[3,2];case 1:return r.sent(),[2,this.accessToken];case 2:return[2,null]}})})},t.prototype.clearRefreshToken=function(){this.refreshToken=null},t.prototype.refresh=function(e,n){return E(this,void 0,void 0,function(){var r,i,s,o;return k(this,function(a){switch(a.label){case 0:return[4,S_(e,n)];case 1:return r=a.sent(),i=r.accessToken,s=r.refreshToken,o=r.expiresIn,this.updateTokensAndExpiration(i,s,Number(o)),[2]}})})},t.prototype.updateTokensAndExpiration=function(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3},t.fromJSON=function(e,n){var r=n.refreshToken,i=n.accessToken,s=n.expirationTime,o=new t;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o},t.prototype.toJSON=function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}},t.prototype._assign=function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime},t.prototype._clone=function(){return Object.assign(new t,this.toJSON())},t.prototype._performRefresh=function(){return ut("not implemented")},t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}var tl=function(){function t(e){var n=e.uid,r=e.auth,i=e.stsTokenManager,s=hr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new w_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?Ue([],s.providerData,!0):[],this.metadata=new gp(s.createdAt||void 0,s.lastLoginAt||void 0)}return t.prototype.getIdToken=function(e){return E(this,void 0,void 0,function(){var n;return k(this,function(r){switch(r.label){case 0:return[4,ui(this,this.stsTokenManager.getToken(this.auth,e))];case 1:return n=r.sent(),U(n,this.auth,"internal-error"),this.accessToken===n?[3,3]:(this.accessToken=n,[4,this.auth._persistUserIfCurrent(this)]);case 2:r.sent(),this.auth._notifyListenersIfCurrent(this),r.label=3;case 3:return[2,n]}})})},t.prototype.getIdTokenResult=function(e){return g_(this,e)},t.prototype.reload=function(){return I_(this)},t.prototype._assign=function(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(function(n){return K({},n)}),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))},t.prototype._clone=function(e){var n=new t(K(K({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n},t.prototype._onReload=function(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)},t.prototype._notifyReloadListener=function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e},t.prototype._startProactiveRefresh=function(){this.proactiveRefresh._start()},t.prototype._stopProactiveRefresh=function(){this.proactiveRefresh._stop()},t.prototype._updateTokensIfNecessary=function(e,n){return n===void 0&&(n=!1),E(this,void 0,void 0,function(){var r;return k(this,function(i){switch(i.label){case 0:return r=!1,e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n?[4,Ms(this)]:[3,2];case 1:i.sent(),i.label=2;case 2:return[4,this.auth._persistUserIfCurrent(this)];case 3:return i.sent(),r&&this.auth._notifyListenersIfCurrent(this),[2]}})})},t.prototype.delete=function(){return E(this,void 0,void 0,function(){var e;return k(this,function(n){switch(n.label){case 0:return[4,this.getIdToken()];case 1:return e=n.sent(),[4,ui(this,m_(this.auth,{idToken:e}))];case 2:return n.sent(),this.stsTokenManager.clearRefreshToken(),[2,this.auth.signOut()]}})})},t.prototype.toJSON=function(){return K(K({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(function(e){return K({},e)}),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})},Object.defineProperty(t.prototype,"refreshToken",{get:function(){return this.stsTokenManager.refreshToken||""},enumerable:!1,configurable:!0}),t._fromJSON=function(e,n){var r,i,s,o,a,l,u,c,f=(r=n.displayName)!==null&&r!==void 0?r:void 0,v=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,h=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,g=n.uid,I=n.emailVerified,C=n.isAnonymous,R=n.providerData,N=n.stsTokenManager;U(g&&N,e,"internal-error");var P=qc.fromJSON(this.name,N);U(typeof g=="string",e,"internal-error"),St(f,e.name),St(v,e.name),U(typeof I=="boolean",e,"internal-error"),U(typeof C=="boolean",e,"internal-error"),St(y,e.name),St(w,e.name),St(h,e.name),St(_,e.name),St(m,e.name),St(p,e.name);var j=new t({uid:g,auth:e,email:v,emailVerified:I,displayName:f,isAnonymous:C,photoURL:w,phoneNumber:y,tenantId:h,stsTokenManager:P,createdAt:m,lastLoginAt:p});return R&&Array.isArray(R)&&(j.providerData=R.map(function(x){return K({},x)})),_&&(j._redirectEventId=_),j},t._fromIdTokenResponse=function(e,n,r){return r===void 0&&(r=!1),E(this,void 0,void 0,function(){var i,s;return k(this,function(o){switch(o.label){case 0:return i=new qc,i.updateFromServerResponse(n),s=new t({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r}),[4,Ms(s)];case 1:return o.sent(),[2,s]}})})},t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qc=new Map;function jt(t){sr(t instanceof Function,"Expected a class definition");var e=Qc.get(t);return e?(sr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Qc.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var C_=function(){function t(){this.type="NONE",this.storage={}}return t.prototype._isAvailable=function(){return E(this,void 0,void 0,function(){return k(this,function(e){return[2,!0]})})},t.prototype._set=function(e,n){return E(this,void 0,void 0,function(){return k(this,function(r){return this.storage[e]=n,[2]})})},t.prototype._get=function(e){return E(this,void 0,void 0,function(){var n;return k(this,function(r){return n=this.storage[e],[2,n===void 0?null:n]})})},t.prototype._remove=function(e){return E(this,void 0,void 0,function(){return k(this,function(n){return delete this.storage[e],[2]})})},t.prototype._addListener=function(e,n){},t.prototype._removeListener=function(e,n){},t.type="NONE",t}(),Jc=C_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(t,e,n){return"".concat("firebase",":").concat(t,":").concat(e,":").concat(n)}var Yc=function(){function t(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;var i=this.auth,s=i.config,o=i.name;this.fullUserKey=rs(this.userKey,s.apiKey,o),this.fullPersistenceKey=rs("persistence",s.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return t.prototype.setCurrentUser=function(e){return this.persistence._set(this.fullUserKey,e.toJSON())},t.prototype.getCurrentUser=function(){return E(this,void 0,void 0,function(){var e;return k(this,function(n){switch(n.label){case 0:return[4,this.persistence._get(this.fullUserKey)];case 1:return e=n.sent(),[2,e?tl._fromJSON(this.auth,e):null]}})})},t.prototype.removeCurrentUser=function(){return this.persistence._remove(this.fullUserKey)},t.prototype.savePersistenceForRedirect=function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)},t.prototype.setPersistence=function(e){return E(this,void 0,void 0,function(){var n;return k(this,function(r){switch(r.label){case 0:return this.persistence===e?[2]:[4,this.getCurrentUser()];case 1:return n=r.sent(),[4,this.removeCurrentUser()];case 2:return r.sent(),this.persistence=e,n?[2,this.setCurrentUser(n)]:[2]}})})},t.prototype.delete=function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)},t.create=function(e,n,r){return r===void 0&&(r="authUser"),E(this,void 0,void 0,function(){var i,s,o,a,l,u,c,f,v,y,w=this;return k(this,function(h){switch(h.label){case 0:return n.length?[4,Promise.all(n.map(function(_){return E(w,void 0,void 0,function(){return k(this,function(m){switch(m.label){case 0:return[4,_._isAvailable()];case 1:return m.sent()?[2,_]:[2,void 0]}})})}))]:[2,new t(jt(Jc),e,r)];case 1:i=h.sent().filter(function(_){return _}),s=i[0]||jt(Jc),o=rs(r,e.config.apiKey,e.name),a=null,l=0,u=n,h.label=2;case 2:if(!(l<u.length))return[3,7];c=u[l],h.label=3;case 3:return h.trys.push([3,5,,6]),[4,c._get(o)];case 4:return f=h.sent(),f?(v=tl._fromJSON(e,f),c!==s&&(a=v),s=c,[3,7]):[3,6];case 5:return h.sent(),[3,6];case 6:return l++,[3,2];case 7:return y=i.filter(function(_){return _._shouldAllowMigration}),!s._shouldAllowMigration||!y.length?[2,new t(s,e,r)]:(s=y[0],a?[4,s._set(o,a.toJSON())]:[3,9]);case 8:h.sent(),h.label=9;case 9:return[4,Promise.all(n.map(function(_){return E(w,void 0,void 0,function(){return k(this,function(m){switch(m.label){case 0:if(_===s)return[3,4];m.label=1;case 1:return m.trys.push([1,3,,4]),[4,_._remove(o)];case 2:return m.sent(),[3,4];case 3:return m.sent(),[3,4];case 4:return[2]}})})}))];case 10:return h.sent(),[2,new t(s,e,r)]}})})},t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(t){var e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_p(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(N_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ip(e))return"Blackberry";if(Ep(e))return"Webos";if(yp(e))return"Safari";if((e.includes("chrome/")||P_(e))&&!e.includes("edge/"))return"Chrome";if(wp(e))return"Android";var n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);return(r==null?void 0:r.length)===2?r[1]:"Other"}function N_(t){return t===void 0&&(t=B()),/firefox\//i.test(t)}function yp(t){t===void 0&&(t=B());var e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function P_(t){return t===void 0&&(t=B()),/crios\//i.test(t)}function _p(t){return t===void 0&&(t=B()),/iemobile/i.test(t)}function wp(t){return t===void 0&&(t=B()),/android/i.test(t)}function Ip(t){return t===void 0&&(t=B()),/blackberry/i.test(t)}function Ep(t){return t===void 0&&(t=B()),/webos/i.test(t)}function kp(t){return t===void 0&&(t=B()),/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function R_(){return sp()&&document.documentMode===10}function A_(t){return t===void 0&&(t=B()),kp(t)||wp(t)||Ep(t)||Ip(t)||/windows phone/i.test(t)||_p(t)}function O_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(t,e){e===void 0&&(e=[]);var n;switch(t){case"Browser":n=Xc(B());break;case"Worker":n="".concat(Xc(B()),"-").concat(t);break;default:n=t}var r=e.length?e.join(","):"FirebaseCore-web";return"".concat(n,"/").concat("JsCore","/").concat(rn,"/").concat(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var x_=function(){function t(e){this.auth=e,this.queue=[]}return t.prototype.pushCallback=function(e,n){var r=this,i=function(o){return new Promise(function(a,l){try{var u=e(o);a(u)}catch(c){l(c)}})};i.onAbort=n,this.queue.push(i);var s=this.queue.length-1;return function(){r.queue[s]=function(){return Promise.resolve()}}},t.prototype.runMiddleware=function(e){return E(this,void 0,void 0,function(){var n,r,i,s,o,a,l,u;return k(this,function(c){switch(c.label){case 0:if(this.auth.currentUser===e)return[2];n=[],c.label=1;case 1:c.trys.push([1,6,,7]),r=0,i=this.queue,c.label=2;case 2:return r<i.length?(s=i[r],[4,s(e)]):[3,5];case 3:c.sent(),s.onAbort&&n.push(s.onAbort),c.label=4;case 4:return r++,[3,2];case 5:return[3,7];case 6:for(o=c.sent(),n.reverse(),a=0,l=n;a<l.length;a++){u=l[a];try{u()}catch{}}throw this.auth._errorFactory.create("login-blocked",{originalMessage:o==null?void 0:o.message});case 7:return[2]}})})},t}();/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(t,e){return e===void 0&&(e={}),E(this,void 0,void 0,function(){return k(this,function(n){return[2,Pn(t,"GET","/v2/passwordPolicy",Qe(t,e))]})})}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var D_=6,M_=function(){function t(e){var n,r,i,s,o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:D_,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}return t.prototype.validatePassword=function(e){var n,r,i,s,o,a,l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l},t.prototype.validatePasswordLengthOptions=function(e,n){var r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)},t.prototype.validatePasswordCharacterOptions=function(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);for(var r,i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))},t.prototype.updatePasswordCharacterOptionsStatuses=function(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))},t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U_=function(){function t(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zc(this),this.idTokenSubscription=new Zc(this),this.beforeStateQueue=new x_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=el,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}return t.prototype._initializeWithPersistence=function(e,n){var r=this;return n&&(this._popupRedirectResolver=jt(n)),this._initializationPromise=this.queue(function(){return E(r,void 0,void 0,function(){var i,s,o;return k(this,function(a){switch(a.label){case 0:return this._deleted?[2]:(i=this,[4,Yc.create(this,e)]);case 1:if(i.persistenceManager=a.sent(),this._deleted)return[2];if(!(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively))return[3,5];a.label=2;case 2:return a.trys.push([2,4,,5]),[4,this._popupRedirectResolver._initialize(this)];case 3:return a.sent(),[3,5];case 4:return a.sent(),[3,5];case 5:return[4,this.initializeCurrentUser(n)];case 6:return a.sent(),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,this._deleted?[2]:(this._isInitialized=!0,[2])}})})}),this._initializationPromise},t.prototype._onStorageEvent=function(){return E(this,void 0,void 0,function(){var e;return k(this,function(n){switch(n.label){case 0:return this._deleted?[2]:[4,this.assertedPersistence.getCurrentUser()];case 1:return e=n.sent(),!this.currentUser&&!e?[2]:this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),[4,this.currentUser.getIdToken()]):[3,3];case 2:return n.sent(),[2];case 3:return[4,this._updateCurrentUser(e,!0)];case 4:return n.sent(),[2]}})})},t.prototype.initializeCurrentUser=function(e){var n;return E(this,void 0,void 0,function(){var r,i,s,o,a,l,u;return k(this,function(c){switch(c.label){case 0:return[4,this.assertedPersistence.getCurrentUser()];case 1:return r=c.sent(),i=r,s=!1,e&&this.config.authDomain?[4,this.getOrInitRedirectPersistenceManager()]:[3,4];case 2:return c.sent(),o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,[4,this.tryRedirectSignIn(e)];case 3:l=c.sent(),(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0),c.label=4;case 4:if(!i)return[2,this.directlySetCurrentUser(null)];if(i._redirectEventId)return[3,9];if(!s)return[3,8];c.label=5;case 5:return c.trys.push([5,7,,8]),[4,this.beforeStateQueue.runMiddleware(i)];case 6:return c.sent(),[3,8];case 7:return u=c.sent(),i=r,this._popupRedirectResolver._overrideRedirectResult(this,function(){return Promise.reject(u)}),[3,8];case 8:return i?[2,this.reloadAndSetCurrentUserOrClear(i)]:[2,this.directlySetCurrentUser(null)];case 9:return U(this._popupRedirectResolver,this,"argument-error"),[4,this.getOrInitRedirectPersistenceManager()];case 10:return c.sent(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?[2,this.directlySetCurrentUser(i)]:[2,this.reloadAndSetCurrentUserOrClear(i)]}})})},t.prototype.tryRedirectSignIn=function(e){return E(this,void 0,void 0,function(){var n;return k(this,function(r){switch(r.label){case 0:n=null,r.label=1;case 1:return r.trys.push([1,3,,5]),[4,this._popupRedirectResolver._completeRedirectFn(this,e,!0)];case 2:return n=r.sent(),[3,5];case 3:return r.sent(),[4,this._setRedirectUser(null)];case 4:return r.sent(),[3,5];case 5:return[2,n]}})})},t.prototype.reloadAndSetCurrentUserOrClear=function(e){return E(this,void 0,void 0,function(){var n;return k(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,Ms(e)];case 1:return r.sent(),[3,3];case 2:return n=r.sent(),(n==null?void 0:n.code)!=="auth/".concat("network-request-failed")?[2,this.directlySetCurrentUser(null)]:[3,3];case 3:return[2,this.directlySetCurrentUser(e)]}})})},t.prototype.useDeviceLanguage=function(){this.languageCode=o_()},t.prototype._delete=function(){return E(this,void 0,void 0,function(){return k(this,function(e){return this._deleted=!0,[2]})})},t.prototype.updateCurrentUser=function(e){return E(this,void 0,void 0,function(){var n;return k(this,function(r){return n=e?qe(e):null,n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),[2,this._updateCurrentUser(n&&n._clone(this))]})})},t.prototype._updateCurrentUser=function(e,n){return n===void 0&&(n=!1),E(this,void 0,void 0,function(){var r=this;return k(this,function(i){switch(i.label){case 0:return this._deleted?[2]:(e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n?[3,2]:[4,this.beforeStateQueue.runMiddleware(e)]);case 1:i.sent(),i.label=2;case 2:return[2,this.queue(function(){return E(r,void 0,void 0,function(){return k(this,function(s){switch(s.label){case 0:return[4,this.directlySetCurrentUser(e)];case 1:return s.sent(),this.notifyAuthListeners(),[2]}})})})]}})})},t.prototype.signOut=function(){return E(this,void 0,void 0,function(){return k(this,function(e){switch(e.label){case 0:return[4,this.beforeStateQueue.runMiddleware(null)];case 1:return e.sent(),this.redirectPersistenceManager||this._popupRedirectResolver?[4,this._setRedirectUser(null)]:[3,3];case 2:e.sent(),e.label=3;case 3:return[2,this._updateCurrentUser(null,!0)]}})})},t.prototype.setPersistence=function(e){var n=this;return this.queue(function(){return E(n,void 0,void 0,function(){return k(this,function(r){switch(r.label){case 0:return[4,this.assertedPersistence.setPersistence(jt(e))];case 1:return r.sent(),[2]}})})})},t.prototype._getRecaptchaConfig=function(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]},t.prototype.validatePassword=function(e){return E(this,void 0,void 0,function(){var n;return k(this,function(r){switch(r.label){case 0:return this._getPasswordPolicyInternal()?[3,2]:[4,this._updatePasswordPolicy()];case 1:r.sent(),r.label=2;case 2:return n=this._getPasswordPolicyInternal(),n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?[2,Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{}))]:[2,n.validatePassword(e)]}})})},t.prototype._getPasswordPolicyInternal=function(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]},t.prototype._updatePasswordPolicy=function(){return E(this,void 0,void 0,function(){var e,n;return k(this,function(r){switch(r.label){case 0:return[4,L_(this)];case 1:return e=r.sent(),n=new M_(e),this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n,[2]}})})},t.prototype._getPersistence=function(){return this.assertedPersistence.persistence.type},t.prototype._updateErrorMap=function(e){this._errorFactory=new tn("auth","Firebase",e())},t.prototype.onAuthStateChanged=function(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)},t.prototype.beforeAuthStateChanged=function(e,n){return this.beforeStateQueue.pushCallback(e,n)},t.prototype.onIdTokenChanged=function(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)},t.prototype.authStateReady=function(){var e=this;return new Promise(function(n,r){if(e.currentUser)n();else var i=e.onAuthStateChanged(function(){i(),n()},r)})},t.prototype.revokeAccessToken=function(e){return E(this,void 0,void 0,function(){var n,r;return k(this,function(i){switch(i.label){case 0:return this.currentUser?[4,this.currentUser.getIdToken()]:[3,3];case 1:return n=i.sent(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n},this.tenantId!=null&&(r.tenantId=this.tenantId),[4,T_(this,r)];case 2:i.sent(),i.label=3;case 3:return[2]}})})},t.prototype.toJSON=function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}},t.prototype._setRedirectUser=function(e,n){return E(this,void 0,void 0,function(){var r;return k(this,function(i){switch(i.label){case 0:return[4,this.getOrInitRedirectPersistenceManager(n)];case 1:return r=i.sent(),[2,e===null?r.removeCurrentUser():r.setCurrentUser(e)]}})})},t.prototype.getOrInitRedirectPersistenceManager=function(e){return E(this,void 0,void 0,function(){var n,r,i;return k(this,function(s){switch(s.label){case 0:return this.redirectPersistenceManager?[3,3]:(n=e&&jt(e)||this._popupRedirectResolver,U(n,this,"argument-error"),r=this,[4,Yc.create(this,[jt(n._redirectPersistence)],"redirectUser")]);case 1:return r.redirectPersistenceManager=s.sent(),i=this,[4,this.redirectPersistenceManager.getCurrentUser()];case 2:i.redirectUser=s.sent(),s.label=3;case 3:return[2,this.redirectPersistenceManager]}})})},t.prototype._redirectUserForId=function(e){var n,r;return E(this,void 0,void 0,function(){var i=this;return k(this,function(s){switch(s.label){case 0:return this._isInitialized?[4,this.queue(function(){return E(i,void 0,void 0,function(){return k(this,function(o){return[2]})})})]:[3,2];case 1:s.sent(),s.label=2;case 2:return((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?[2,this._currentUser]:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?[2,this.redirectUser]:[2,null]}})})},t.prototype._persistUserIfCurrent=function(e){return E(this,void 0,void 0,function(){var n=this;return k(this,function(r){return e===this.currentUser?[2,this.queue(function(){return E(n,void 0,void 0,function(){return k(this,function(i){return[2,this.directlySetCurrentUser(e)]})})})]:[2]})})},t.prototype._notifyListenersIfCurrent=function(e){e===this.currentUser&&this.notifyAuthListeners()},t.prototype._key=function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)},t.prototype._startProactiveRefresh=function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()},t.prototype._stopProactiveRefresh=function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()},Object.defineProperty(t.prototype,"_currentUser",{get:function(){return this.currentUser},enumerable:!1,configurable:!0}),t.prototype.notifyAuthListeners=function(){var e,n;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}},t.prototype.registerStateListener=function(e,n,r,i){var s=this;if(this._deleted)return function(){};var o=typeof n=="function"?n:n.next.bind(n),a=!1,l=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(l,this,"internal-error"),l.then(function(){a||o(s.currentUser)}),typeof n=="function"){var u=e.addObserver(n,r,i);return function(){a=!0,u()}}else{var c=e.addObserver(n);return function(){a=!0,c()}}},t.prototype.directlySetCurrentUser=function(e){return E(this,void 0,void 0,function(){return k(this,function(n){switch(n.label){case 0:return this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?[4,this.assertedPersistence.setCurrentUser(e)]:[3,2];case 1:return n.sent(),[3,4];case 2:return[4,this.assertedPersistence.removeCurrentUser()];case 3:n.sent(),n.label=4;case 4:return[2]}})})},t.prototype.queue=function(e){return this.operations=this.operations.then(e,e),this.operations},Object.defineProperty(t.prototype,"assertedPersistence",{get:function(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager},enumerable:!1,configurable:!0}),t.prototype._logFramework=function(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sp(this.config.clientPlatform,this._getFrameworks()))},t.prototype._getFrameworks=function(){return this.frameworks},t.prototype._getAdditionalHeaders=function(){var e;return E(this,void 0,void 0,function(){var n,r,i,s;return k(this,function(o){switch(o.label){case 0:return n=(s={},s["X-Client-Version"]=this.clientVersion,s),this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId),[4,(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader()];case 1:return r=o.sent(),r&&(n["X-Firebase-Client"]=r),[4,this._getAppCheckToken()];case 2:return i=o.sent(),i&&(n["X-Firebase-AppCheck"]=i),[2,n]}})})},t.prototype._getAppCheckToken=function(){var e;return E(this,void 0,void 0,function(){var n;return k(this,function(r){switch(r.label){case 0:return[4,(e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken()];case 1:return n=r.sent(),n!=null&&n.error&&n_("Error while retrieving App Check token: ".concat(n.error)),[2,n==null?void 0:n.token]}})})},t}();function gi(t){return qe(t)}var Zc=function(){function t(e){var n=this;this.auth=e,this.observer=null,this.addObserver=op(function(r){return n.observer=r})}return Object.defineProperty(t.prototype,"next",{get:function(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)},enumerable:!1,configurable:!0}),t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function b_(t){return new Promise(function(e,n){var r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=function(i){var s=oo("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",j_().appendChild(r)})}var F_="https://www.google.com/recaptcha/enterprise.js?render=",V_="recaptcha-enterprise",$_="NO_RECAPTCHA",z_=function(){function t(e){this.type=V_,this.auth=gi(e)}return t.prototype.verify=function(e,n){return e===void 0&&(e="verify"),n===void 0&&(n=!1),E(this,void 0,void 0,function(){function r(o){return E(this,void 0,void 0,function(){var a=this;return k(this,function(l){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return[2,o._agentRecaptchaConfig.siteKey];if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return[2,o._tenantRecaptchaConfigs[o.tenantId].siteKey]}return[2,new Promise(function(u,c){return E(a,void 0,void 0,function(){return k(this,function(f){return p_(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(function(v){if(v.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{var y=new h_(v);return o.tenantId==null?o._agentRecaptchaConfig=y:o._tenantRecaptchaConfigs[o.tenantId]=y,u(y.siteKey)}}).catch(function(v){c(v)}),[2]})})})]})})}function i(o,a,l){var u=window.grecaptcha;Gc(u)?u.enterprise.ready(function(){u.enterprise.execute(o,{action:e}).then(function(c){a(c)}).catch(function(){a($_)})}):l(Error("No reCAPTCHA enterprise script loaded."))}var s=this;return k(this,function(o){return[2,new Promise(function(a,l){r(s.auth).then(function(u){if(!n&&Gc(window.grecaptcha))i(u,a,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}b_(F_+u).then(function(){i(u,a,l)}).catch(function(c){l(c)})}}).catch(function(u){l(u)})})]})})},t}();function ed(t,e,n,r){return r===void 0&&(r=!1),E(this,void 0,void 0,function(){var i,s,o;return k(this,function(a){switch(a.label){case 0:i=new z_(t),a.label=1;case 1:return a.trys.push([1,3,,5]),[4,i.verify(n)];case 2:return s=a.sent(),[3,5];case 3:return a.sent(),[4,i.verify(n,!0)];case 4:return s=a.sent(),[3,5];case 5:return o=K({},e),r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),[2,o]}})})}function nl(t,e,n,r){var i;return E(this,void 0,void 0,function(){var s,o=this;return k(this,function(a){switch(a.label){case 0:return!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")?[4,ed(t,e,n,n==="getOobCode")]:[3,2];case 1:return s=a.sent(),[2,r(t,s)];case 2:return[2,r(t,e).catch(function(l){return E(o,void 0,void 0,function(){var u;return k(this,function(c){switch(c.label){case 0:return l.code!=="auth/".concat("missing-recaptcha-token")?[3,2]:(console.log("".concat(n," is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.")),[4,ed(t,e,n,n==="getOobCode")]);case 1:return u=c.sent(),[2,r(t,u)];case 2:return[2,Promise.reject(l)]}})})})]}})})}function B_(t,e){var n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(jt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yi=function(){function t(e,n){this.providerId=e,this.signInMethod=n}return t.prototype.toJSON=function(){return ut("not implemented")},t.prototype._getIdTokenResponse=function(e){return ut("not implemented")},t.prototype._linkToIdToken=function(e,n){return ut("not implemented")},t.prototype._getReauthenticationResolver=function(e){return ut("not implemented")},t}();function H_(t,e){return E(this,void 0,void 0,function(){return k(this,function(n){return[2,Pn(t,"POST","/v1/accounts:signUp",e)]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(t,e){return E(this,void 0,void 0,function(){return k(this,function(n){return[2,sn(t,"POST","/v1/accounts:signInWithPassword",Qe(t,e))]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(t,e){return E(this,void 0,void 0,function(){return k(this,function(n){return[2,sn(t,"POST","/v1/accounts:signInWithEmailLink",Qe(t,e))]})})}function G_(t,e){return E(this,void 0,void 0,function(){return k(this,function(n){return[2,sn(t,"POST","/v1/accounts:signInWithEmailLink",Qe(t,e))]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var td=function(t){Q(e,t);function e(n,r,i,s){s===void 0&&(s=null);var o=t.call(this,"password",i)||this;return o._email=n,o._password=r,o._tenantId=s,o}return e._fromEmailAndPassword=function(n,r){return new e(n,r,"password")},e._fromEmailAndCode=function(n,r,i){return i===void 0&&(i=null),new e(n,r,"emailLink",i)},e.prototype.toJSON=function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}},e.fromJSON=function(n){var r=typeof n=="string"?JSON.parse(n):n;if(r!=null&&r.email&&(r!=null&&r.password)){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null},e.prototype._getIdTokenResponse=function(n){return E(this,void 0,void 0,function(){var r;return k(this,function(i){switch(this.signInMethod){case"password":return r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},[2,nl(n,r,"signInWithPassword",W_)];case"emailLink":return[2,K_(n,{email:this._email,oobCode:this._password})];default:_t(n,"internal-error")}return[2]})})},e.prototype._linkToIdToken=function(n,r){return E(this,void 0,void 0,function(){var i;return k(this,function(s){switch(this.signInMethod){case"password":return i={idToken:r,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},[2,nl(n,i,"signUpPassword",H_)];case"emailLink":return[2,G_(n,{idToken:r,email:this._email,oobCode:this._password})];default:_t(n,"internal-error")}return[2]})})},e.prototype._getReauthenticationResolver=function(n){return this._getIdTokenResponse(n)},e}(yi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t,e){return E(this,void 0,void 0,function(){return k(this,function(n){return[2,sn(t,"POST","/v1/accounts:signInWithIdp",Qe(t,e))]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q_="http://localhost",or=function(t){Q(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.pendingToken=null,n}return e._fromParams=function(n){var r=new e(n.providerId,n.signInMethod);return n.idToken||n.accessToken?(n.idToken&&(r.idToken=n.idToken),n.accessToken&&(r.accessToken=n.accessToken),n.nonce&&!n.pendingToken&&(r.nonce=n.nonce),n.pendingToken&&(r.pendingToken=n.pendingToken)):n.oauthToken&&n.oauthTokenSecret?(r.accessToken=n.oauthToken,r.secret=n.oauthTokenSecret):_t("argument-error"),r},e.prototype.toJSON=function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}},e.fromJSON=function(n){var r=typeof n=="string"?JSON.parse(n):n,i=r.providerId,s=r.signInMethod,o=hr(r,["providerId","signInMethod"]);if(!i||!s)return null;var a=new e(i,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a},e.prototype._getIdTokenResponse=function(n){var r=this.buildRequest();return ht(n,r)},e.prototype._linkToIdToken=function(n,r){var i=this.buildRequest();return i.idToken=r,ht(n,i)},e.prototype._getReauthenticationResolver=function(n){var r=this.buildRequest();return r.autoCreate=!1,ht(n,r)},e.prototype.buildRequest=function(){var n={requestUri:q_,returnSecureToken:!0};if(this.pendingToken)n.pendingToken=this.pendingToken;else{var r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),n.postBody=nn(r)}return n},e}(yi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qo;function Q_(t,e){return E(this,void 0,void 0,function(){return k(this,function(n){return[2,sn(t,"POST","/v1/accounts:signInWithPhoneNumber",Qe(t,e))]})})}function J_(t,e){return E(this,void 0,void 0,function(){var n;return k(this,function(r){switch(r.label){case 0:return[4,sn(t,"POST","/v1/accounts:signInWithPhoneNumber",Qe(t,e))];case 1:if(n=r.sent(),n.temporaryProof)throw Or(t,"account-exists-with-different-credential",n);return[2,n]}})})}var Y_=(Qo={},Qo.USER_NOT_FOUND="user-not-found",Qo);function X_(t,e){return E(this,void 0,void 0,function(){var n;return k(this,function(r){return n=K(K({},e),{operation:"REAUTH"}),[2,sn(t,"POST","/v1/accounts:signInWithPhoneNumber",Qe(t,n),Y_)]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){Q(e,t);function e(n){var r=t.call(this,"phone","phone")||this;return r.params=n,r}return e._fromVerification=function(n,r){return new e({verificationId:n,verificationCode:r})},e._fromTokenResponse=function(n,r){return new e({phoneNumber:n,temporaryProof:r})},e.prototype._getIdTokenResponse=function(n){return Q_(n,this._makeVerificationRequest())},e.prototype._linkToIdToken=function(n,r){return J_(n,K({idToken:r},this._makeVerificationRequest()))},e.prototype._getReauthenticationResolver=function(n){return X_(n,this._makeVerificationRequest())},e.prototype._makeVerificationRequest=function(){var n=this.params,r=n.temporaryProof,i=n.phoneNumber,s=n.verificationId,o=n.verificationCode;return r&&i?{temporaryProof:r,phoneNumber:i}:{sessionInfo:s,code:o}},e.prototype.toJSON=function(){var n={providerId:this.providerId};return this.params.phoneNumber&&(n.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(n.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(n.verificationCode=this.params.verificationCode),this.params.verificationId&&(n.verificationId=this.params.verificationId),n},e.fromJSON=function(n){typeof n=="string"&&(n=JSON.parse(n));var r=n,i=r.verificationId,s=r.verificationCode,o=r.phoneNumber,a=r.temporaryProof;return!s&&!i&&!o&&!a?null:new e({verificationId:i,verificationCode:s,phoneNumber:o,temporaryProof:a})},e})(yi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ew(t){var e=Rr(Ar(t)).link,n=e?Rr(Ar(e)).deep_link_id:null,r=Rr(Ar(t)).deep_link_id,i=r?Rr(Ar(r)).link:null;return i||r||n||e||t}var tw=function(){function t(e){var n,r,i,s,o,a,l=Rr(Ar(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=Z_((i=l.mode)!==null&&i!==void 0?i:null);U(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}return t.parseLink=function(e){var n=ew(e);try{return new t(n)}catch{return null}},t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nw=function(){function t(){this.providerId=t.PROVIDER_ID}return t.credential=function(e,n){return td._fromEmailAndPassword(e,n)},t.credentialWithLink=function(e,n){var r=tw.parseLink(n);return U(r,"argument-error"),td._fromEmailAndCode(e,r.code,r.tenantId)},t.PROVIDER_ID="password",t.EMAIL_PASSWORD_SIGN_IN_METHOD="password",t.EMAIL_LINK_SIGN_IN_METHOD="emailLink",t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tp=function(){function t(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}return t.prototype.setDefaultLanguage=function(e){this.defaultLanguageCode=e},t.prototype.setCustomParameters=function(e){return this.customParameters=e,this},t.prototype.getCustomParameters=function(){return this.customParameters},t}();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _i=function(t){Q(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.scopes=[],n}return e.prototype.addScope=function(n){return this.scopes.includes(n)||this.scopes.push(n),this},e.prototype.getScopes=function(){return Ue([],this.scopes,!0)},e}(Tp);(function(t){Q(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.credentialFromJSON=function(n){var r=typeof n=="string"?JSON.parse(n):n;return U("providerId"in r&&"signInMethod"in r,"argument-error"),or._fromParams(r)},e.prototype.credential=function(n){return this._credential(K(K({},n),{nonce:n.rawNonce}))},e.prototype._credential=function(n){return U(n.idToken||n.accessToken,"argument-error"),or._fromParams(K(K({},n),{providerId:this.providerId,signInMethod:this.providerId}))},e.credentialFromResult=function(n){return e.oauthCredentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.oauthCredentialFromTaggedObject(n.customData||{})},e.oauthCredentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r)return null;var i=r,s=i.oauthIdToken,o=i.oauthAccessToken,a=i.oauthTokenSecret,l=i.pendingToken,u=i.nonce,c=i.providerId;if(!o&&!a&&!s&&!l||!c)return null;try{return new e(c)._credential({idToken:s,accessToken:o,nonce:u,pendingToken:l})}catch{return null}},e})(_i);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){Q(e,t);function e(){return t.call(this,"facebook.com")||this}return e.credential=function(n){return or._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.FACEBOOK_SIGN_IN_METHOD,accessToken:n})},e.credentialFromResult=function(n){return e.credentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.credentialFromTaggedObject(n.customData||{})},e.credentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r||!("oauthAccessToken"in r)||!r.oauthAccessToken)return null;try{return e.credential(r.oauthAccessToken)}catch{return null}},e.FACEBOOK_SIGN_IN_METHOD="facebook.com",e.PROVIDER_ID="facebook.com",e})(_i);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){Q(e,t);function e(){var n=t.call(this,"google.com")||this;return n.addScope("profile"),n}return e.credential=function(n,r){return or._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.GOOGLE_SIGN_IN_METHOD,idToken:n,accessToken:r})},e.credentialFromResult=function(n){return e.credentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.credentialFromTaggedObject(n.customData||{})},e.credentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r)return null;var i=r,s=i.oauthIdToken,o=i.oauthAccessToken;if(!s&&!o)return null;try{return e.credential(s,o)}catch{return null}},e.GOOGLE_SIGN_IN_METHOD="google.com",e.PROVIDER_ID="google.com",e})(_i);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){Q(e,t);function e(){return t.call(this,"github.com")||this}return e.credential=function(n){return or._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.GITHUB_SIGN_IN_METHOD,accessToken:n})},e.credentialFromResult=function(n){return e.credentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.credentialFromTaggedObject(n.customData||{})},e.credentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r||!("oauthAccessToken"in r)||!r.oauthAccessToken)return null;try{return e.credential(r.oauthAccessToken)}catch{return null}},e.GITHUB_SIGN_IN_METHOD="github.com",e.PROVIDER_ID="github.com",e})(_i);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rw="http://localhost",nd=function(t){Q(e,t);function e(n,r){var i=t.call(this,n,n)||this;return i.pendingToken=r,i}return e.prototype._getIdTokenResponse=function(n){var r=this.buildRequest();return ht(n,r)},e.prototype._linkToIdToken=function(n,r){var i=this.buildRequest();return i.idToken=r,ht(n,i)},e.prototype._getReauthenticationResolver=function(n){var r=this.buildRequest();return r.autoCreate=!1,ht(n,r)},e.prototype.toJSON=function(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}},e.fromJSON=function(n){var r=typeof n=="string"?JSON.parse(n):n,i=r.providerId,s=r.signInMethod,o=r.pendingToken;return!i||!s||!o||i!==s?null:new e(i,o)},e._create=function(n,r){return new e(n,r)},e.prototype.buildRequest=function(){return{requestUri:rw,returnSecureToken:!0,pendingToken:this.pendingToken}},e}(yi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var iw="saml.";(function(t){Q(e,t);function e(n){return U(n.startsWith(iw),"argument-error"),t.call(this,n)||this}return e.credentialFromResult=function(n){return e.samlCredentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.samlCredentialFromTaggedObject(n.customData||{})},e.credentialFromJSON=function(n){var r=nd.fromJSON(n);return U(r,"argument-error"),r},e.samlCredentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r)return null;var i=r,s=i.pendingToken,o=i.providerId;if(!s||!o)return null;try{return nd._create(o,s)}catch{return null}},e})(Tp);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){Q(e,t);function e(){return t.call(this,"twitter.com")||this}return e.credential=function(n,r){return or._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.TWITTER_SIGN_IN_METHOD,oauthToken:n,oauthTokenSecret:r})},e.credentialFromResult=function(n){return e.credentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.credentialFromTaggedObject(n.customData||{})},e.credentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r)return null;var i=r,s=i.oauthAccessToken,o=i.oauthTokenSecret;if(!s||!o)return null;try{return e.credential(s,o)}catch{return null}},e.TWITTER_SIGN_IN_METHOD="twitter.com",e.PROVIDER_ID="twitter.com",e})(_i);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(t,e){return E(this,void 0,void 0,function(){return k(this,function(n){return[2,sn(t,"POST","/v1/accounts:signUp",Qe(t,e))]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ao=function(){function t(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}return t._fromIdTokenResponse=function(e,n,r,i){return i===void 0&&(i=!1),E(this,void 0,void 0,function(){var s,o,a;return k(this,function(l){switch(l.label){case 0:return[4,tl._fromIdTokenResponse(e,r,i)];case 1:return s=l.sent(),o=rd(r),a=new t({user:s,providerId:o,_tokenResponse:r,operationType:n}),[2,a]}})})},t._forOperation=function(e,n,r){return E(this,void 0,void 0,function(){var i;return k(this,function(s){switch(s.label){case 0:return[4,e._updateTokensIfNecessary(r,!0)];case 1:return s.sent(),i=rd(r),[2,new t({user:e,providerId:i,_tokenResponse:r,operationType:n})]}})})},t}();function rd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ow=function(t){Q(e,t);function e(n,r,i,s){var o=this,a;return o=t.call(this,r.code,r.message)||this,o.operationType=i,o.user=s,Object.setPrototypeOf(o,e.prototype),o.customData={appName:n.name,tenantId:(a=n.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:r.customData._serverResponse,operationType:i},o}return e._fromErrorAndOperation=function(n,r,i,s){return new e(n,r,i,s)},e}(Ge);function Cp(t,e,n,r){var i=e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch(function(s){throw s.code==="auth/".concat("multi-factor-auth-required")?ow._fromErrorAndOperation(t,s,e,r):s})}function aw(t,e,n){return n===void 0&&(n=!1),E(this,void 0,void 0,function(){var r,i,s,o,a,l;return k(this,function(u){switch(u.label){case 0:return i=ui,s=[t],a=(o=e)._linkToIdToken,l=[t.auth],[4,t.getIdToken()];case 1:return[4,i.apply(void 0,s.concat([a.apply(o,l.concat([u.sent()])),n]))];case 2:return r=u.sent(),[2,ao._forOperation(t,"link",r)]}})})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lw(t,e,n){return n===void 0&&(n=!1),E(this,void 0,void 0,function(){var r,i,s,o,a,l;return k(this,function(u){switch(u.label){case 0:r=t.auth,i="reauthenticate",u.label=1;case 1:return u.trys.push([1,3,,4]),[4,ui(t,Cp(r,i,e,t),n)];case 2:return s=u.sent(),U(s.idToken,r,"internal-error"),o=ou(s.idToken),U(o,r,"internal-error"),a=o.sub,U(t.uid===a,r,"user-mismatch"),[2,ao._forOperation(t,i,s)];case 3:throw l=u.sent(),(l==null?void 0:l.code)==="auth/".concat("user-not-found")&&_t(r,"user-mismatch"),l;case 4:return[2]}})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(t,e,n){return n===void 0&&(n=!1),E(this,void 0,void 0,function(){var r,i,s;return k(this,function(o){switch(o.label){case 0:return r="signIn",[4,Cp(t,r,e)];case 1:return i=o.sent(),[4,ao._fromIdTokenResponse(t,r,i)];case 2:return s=o.sent(),n?[3,4]:[4,t._updateCurrentUser(s.user)];case 3:o.sent(),o.label=4;case 4:return[2,s]}})})}function uw(t,e){return E(this,void 0,void 0,function(){return k(this,function(n){return[2,Np(gi(t),e)]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pp=function(){function t(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}return t._fromServerResponse=function(e,n){return"phoneInfo"in n?cw._fromServerResponse(e,n):"totpInfo"in n?dw._fromServerResponse(e,n):_t(e,"internal-error")},t}(),cw=function(t){Q(e,t);function e(n){var r=t.call(this,"phone",n)||this;return r.phoneNumber=n.phoneInfo,r}return e._fromServerResponse=function(n,r){return new e(r)},e}(Pp),dw=function(t){Q(e,t);function e(n){return t.call(this,"totp",n)||this}return e._fromServerResponse=function(n,r){return new e(r)},e}(Pp);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(t){return E(this,void 0,void 0,function(){var e;return k(this,function(n){switch(n.label){case 0:return e=gi(t),e._getPasswordPolicyInternal()?[4,e._updatePasswordPolicy()]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}})})}function fw(t,e,n){return E(this,void 0,void 0,function(){var r,i,s,o,a;return k(this,function(l){switch(l.label){case 0:return r=gi(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},s=nl(r,i,"signUpPassword",sw),[4,s.catch(function(u){throw u.code==="auth/".concat("password-does-not-meet-requirements")&&Rp(t),u})];case 1:return o=l.sent(),[4,ao._fromIdTokenResponse(r,"signIn",o)];case 2:return a=l.sent(),[4,r._updateCurrentUser(a.user)];case 3:return l.sent(),[2,a]}})})}function hw(t,e,n){var r=this;return uw(qe(t),nw.credential(e,n)).catch(function(i){return E(r,void 0,void 0,function(){return k(this,function(s){throw i.code==="auth/".concat("password-does-not-meet-requirements")&&Rp(t),i})})})}var au=function(){function t(e,n,r){r===void 0&&(r={}),this.isNewUser=e,this.providerId=n,this.profile=r}return t}(),Ap=function(t){Q(e,t);function e(n,r,i,s){var o=t.call(this,n,r,i)||this;return o.username=s,o}return e}(au);(function(t){Q(e,t);function e(n,r){return t.call(this,n,"facebook.com",r)||this}return e})(au);(function(t){Q(e,t);function e(n,r){return t.call(this,n,"github.com",r,typeof(r==null?void 0:r.login)=="string"?r==null?void 0:r.login:null)||this}return e})(Ap);(function(t){Q(e,t);function e(n,r){return t.call(this,n,"google.com",r)||this}return e})(au);(function(t){Q(e,t);function e(n,r,i){return t.call(this,n,"twitter.com",r,i)||this}return e})(Ap);var id="@firebase/auth",sd="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pw=function(){function t(e){this.auth=e,this.internalListeners=new Map}return t.prototype.getUid=function(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null},t.prototype.getToken=function(e){return E(this,void 0,void 0,function(){var n;return k(this,function(r){switch(r.label){case 0:return this.assertAuthConfigured(),[4,this.auth._initializationPromise];case 1:return r.sent(),this.auth.currentUser?[4,this.auth.currentUser.getIdToken(e)]:[2,null];case 2:return n=r.sent(),[2,{accessToken:n}]}})})},t.prototype.addAuthTokenListener=function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var n=this.auth.onIdTokenChanged(function(r){e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}},t.prototype.removeAuthTokenListener=function(e){this.assertAuthConfigured();var n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())},t.prototype.assertAuthConfigured=function(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")},t.prototype.updateProactiveRefresh=function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()},t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function vw(t){Sn(new Yt("auth",function(e,n){var r=n.options,i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),a=i.options,l=a.apiKey,u=a.authDomain;U(l&&!l.includes(":"),"invalid-api-key",{appName:i.name});var c={apiKey:l,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sp(t)},f=new U_(i,s,o,c);return B_(f,r),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(function(e,n,r){var i=e.getProvider("auth-internal");i.initialize()})),Sn(new Yt("auth-internal",function(e){var n=gi(e.getProvider("auth").getImmediate());return function(r){return new pw(r)}(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qt(id,sd,mw(t)),qt(id,sd,"esm5")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Op=function(){function t(e,n){this.storageRetriever=e,this.type=n}return t.prototype._isAvailable=function(){try{return this.storage?(this.storage.setItem(Wc,"1"),this.storage.removeItem(Wc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}},t.prototype._set=function(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()},t.prototype._get=function(e){var n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)},t.prototype._remove=function(e){return this.storage.removeItem(e),Promise.resolve()},Object.defineProperty(t.prototype,"storage",{get:function(){return this.storageRetriever()},enumerable:!1,configurable:!0}),t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gw(){var t=B();return yp(t)||kp(t)}var yw=1e3,_w=10;(function(t){Q(e,t);function e(){var n=t.call(this,function(){return window.localStorage},"LOCAL")||this;return n.boundEventHandler=function(r,i){return n.onStorageEvent(r,i)},n.listeners={},n.localCache={},n.pollTimer=null,n.safariLocalStorageNotSynced=gw()&&O_(),n.fallbackToPolling=A_(),n._shouldAllowMigration=!0,n}return e.prototype.forAllChangedKeys=function(n){for(var r=0,i=Object.keys(this.listeners);r<i.length;r++){var s=i[r],o=this.storage.getItem(s),a=this.localCache[s];o!==a&&n(s,a,o)}},e.prototype.onStorageEvent=function(n,r){var i=this;if(r===void 0&&(r=!1),!n.key){this.forAllChangedKeys(function(u,c,f){i.notifyListeners(u,f)});return}var s=n.key;if(r?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var o=this.storage.getItem(s);if(n.newValue!==o)n.newValue!==null?this.storage.setItem(s,n.newValue):this.storage.removeItem(s);else if(this.localCache[s]===n.newValue&&!r)return}var a=function(){var u=i.storage.getItem(s);!r&&i.localCache[s]===u||i.notifyListeners(s,u)},l=this.storage.getItem(s);R_()&&l!==n.newValue&&n.newValue!==n.oldValue?setTimeout(a,_w):a()},e.prototype.notifyListeners=function(n,r){this.localCache[n]=r;var i=this.listeners[n];if(i)for(var s=0,o=Array.from(i);s<o.length;s++){var a=o[s];a(r&&JSON.parse(r))}},e.prototype.startPolling=function(){var n=this;this.stopPolling(),this.pollTimer=setInterval(function(){n.forAllChangedKeys(function(r,i,s){n.onStorageEvent(new StorageEvent("storage",{key:r,oldValue:i,newValue:s}),!0)})},yw)},e.prototype.stopPolling=function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)},e.prototype.attachListener=function(){window.addEventListener("storage",this.boundEventHandler)},e.prototype.detachListener=function(){window.removeEventListener("storage",this.boundEventHandler)},e.prototype._addListener=function(n,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[n]||(this.listeners[n]=new Set,this.localCache[n]=this.storage.getItem(n)),this.listeners[n].add(r)},e.prototype._removeListener=function(n,r){this.listeners[n]&&(this.listeners[n].delete(r),this.listeners[n].size===0&&delete this.listeners[n]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())},e.prototype._set=function(n,r){return E(this,void 0,void 0,function(){return k(this,function(i){switch(i.label){case 0:return[4,t.prototype._set.call(this,n,r)];case 1:return i.sent(),this.localCache[n]=JSON.stringify(r),[2]}})})},e.prototype._get=function(n){return E(this,void 0,void 0,function(){var r;return k(this,function(i){switch(i.label){case 0:return[4,t.prototype._get.call(this,n)];case 1:return r=i.sent(),this.localCache[n]=JSON.stringify(r),[2,r]}})})},e.prototype._remove=function(n){return E(this,void 0,void 0,function(){return k(this,function(r){switch(r.label){case 0:return[4,t.prototype._remove.call(this,n)];case 1:return r.sent(),delete this.localCache[n],[2]}})})},e.type="LOCAL",e})(Op);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){Q(e,t);function e(){return t.call(this,function(){return window.sessionStorage},"SESSION")||this}return e.prototype._addListener=function(n,r){},e.prototype._removeListener=function(n,r){},e.type="SESSION",e})(Op);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lu=function(t){Q(e,t);function e(n){var r=t.call(this,"custom","custom")||this;return r.params=n,r}return e.prototype._getIdTokenResponse=function(n){return ht(n,this._buildIdpRequest())},e.prototype._linkToIdToken=function(n,r){return ht(n,this._buildIdpRequest(r))},e.prototype._getReauthenticationResolver=function(n){return ht(n,this._buildIdpRequest())},e.prototype._buildIdpRequest=function(n){var r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return n&&(r.idToken=n),r},e}(yi);function ww(t){return Np(t.auth,new lu(t),t.bypassAuthState)}function Iw(t){var e=t.auth,n=t.user;return U(n,e,"internal-error"),lw(n,new lu(t),t.bypassAuthState)}function Ew(t){return E(this,void 0,void 0,function(){var e,n;return k(this,function(r){return e=t.auth,n=t.user,U(n,e,"internal-error"),[2,aw(n,new lu(t),t.bypassAuthState)]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kw=function(){function t(e,n,r,i,s){s===void 0&&(s=!1),this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}return t.prototype.execute=function(){var e=this;return new Promise(function(n,r){return E(e,void 0,void 0,function(){var i,s;return k(this,function(o){switch(o.label){case 0:this.pendingPromise={resolve:n,reject:r},o.label=1;case 1:return o.trys.push([1,4,,5]),i=this,[4,this.resolver._initialize(this.auth)];case 2:return i.eventManager=o.sent(),[4,this.onExecution()];case 3:return o.sent(),this.eventManager.registerConsumer(this),[3,5];case 4:return s=o.sent(),this.reject(s),[3,5];case 5:return[2]}})})})},t.prototype.onAuthEvent=function(e){return E(this,void 0,void 0,function(){var n,r,i,s,o,a,l,u,c;return k(this,function(f){switch(f.label){case 0:if(n=e.urlResponse,r=e.sessionId,i=e.postBody,s=e.tenantId,o=e.error,a=e.type,o)return this.reject(o),[2];l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState},f.label=1;case 1:return f.trys.push([1,3,,4]),u=this.resolve,[4,this.getIdpTask(a)(l)];case 2:return u.apply(this,[f.sent()]),[3,4];case 3:return c=f.sent(),this.reject(c),[3,4];case 4:return[2]}})})},t.prototype.onError=function(e){this.reject(e)},t.prototype.getIdpTask=function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ww;case"linkViaPopup":case"linkViaRedirect":return Ew;case"reauthViaPopup":case"reauthViaRedirect":return Iw;default:_t(this.auth,"internal-error")}},t.prototype.resolve=function(e){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()},t.prototype.reject=function(e){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()},t.prototype.unregisterAndCleanUp=function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()},t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sw="pendingRedirect",Jo=new Map;(function(t){Q(e,t);function e(n,r,i){i===void 0&&(i=!1);var s=t.call(this,n,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,i)||this;return s.eventId=null,s}return e.prototype.execute=function(){return E(this,void 0,void 0,function(){var n,r,i,s,o;return k(this,function(a){switch(a.label){case 0:if(n=Jo.get(this.auth._key()),n)return[3,8];a.label=1;case 1:return a.trys.push([1,6,,7]),[4,Tw(this.resolver,this.auth)];case 2:return r=a.sent(),r?[4,t.prototype.execute.call(this)]:[3,4];case 3:return s=a.sent(),[3,5];case 4:s=null,a.label=5;case 5:return i=s,n=function(){return Promise.resolve(i)},[3,7];case 6:return o=a.sent(),n=function(){return Promise.reject(o)},[3,7];case 7:Jo.set(this.auth._key(),n),a.label=8;case 8:return this.bypassAuthState||Jo.set(this.auth._key(),function(){return Promise.resolve(null)}),[2,n()]}})})},e.prototype.onAuthEvent=function(n){return E(this,void 0,void 0,function(){var r;return k(this,function(i){switch(i.label){case 0:return n.type==="signInViaRedirect"?[2,t.prototype.onAuthEvent.call(this,n)]:n.type==="unknown"?(this.resolve(null),[2]):n.eventId?[4,this.auth._redirectUserForId(n.eventId)]:[3,2];case 1:if(r=i.sent(),r)return this.user=r,[2,t.prototype.onAuthEvent.call(this,n)];this.resolve(null),i.label=2;case 2:return[2]}})})},e.prototype.onExecution=function(){return E(this,void 0,void 0,function(){return k(this,function(n){return[2]})})},e.prototype.cleanUp=function(){},e})(kw);function Tw(t,e){return E(this,void 0,void 0,function(){var n,r,i;return k(this,function(s){switch(s.label){case 0:return n=Nw(e),r=Cw(t),[4,r._isAvailable()];case 1:return s.sent()?[4,r._get(n)]:[2,!1];case 2:return i=s.sent()==="true",[4,r._remove(n)];case 3:return s.sent(),[2,i]}})})}function Cw(t){return jt(t._redirectPersistence)}function Nw(t){return rs(Sw,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pw=10*60*1e3,Rw=function(){function t(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return t.prototype.registerConsumer=function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)},t.prototype.unregisterConsumer=function(e){this.consumers.delete(e)},t.prototype.onEvent=function(e){var n=this;if(this.hasEventBeenHandled(e))return!1;var r=!1;return this.consumers.forEach(function(i){n.isEventForConsumer(e,i)&&(r=!0,n.sendToConsumer(e,i),n.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Aw(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r},t.prototype.sendToConsumer=function(e,n){var r;if(e.error&&!xp(e)){var i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(oo(this.auth,i))}else n.onAuthEvent(e)},t.prototype.isEventForConsumer=function(e,n){var r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r},t.prototype.hasEventBeenHandled=function(e){return Date.now()-this.lastProcessedEventTime>=Pw&&this.cachedEventUids.clear(),this.cachedEventUids.has(od(e))},t.prototype.saveEventToCache=function(e){this.cachedEventUids.add(od(e)),this.lastProcessedEventTime=Date.now()},t}();function od(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(function(e){return e}).join("-")}function xp(t){var e=t.type,n=t.error;return e==="unknown"&&(n==null?void 0:n.code)==="auth/".concat("no-auth-event")}function Aw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xp(t);default:return!1}}(function(t){Q(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.passiveListeners=new Set,n.initPromise=new Promise(function(r){n.resolveInialized=r}),n}return e.prototype.addPassiveListener=function(n){this.passiveListeners.add(n)},e.prototype.removePassiveListener=function(n){this.passiveListeners.delete(n)},e.prototype.resetRedirect=function(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1},e.prototype.onEvent=function(n){return this.resolveInialized(),this.passiveListeners.forEach(function(r){return r(n)}),t.prototype.onEvent.call(this,n)},e.prototype.initialized=function(){return E(this,void 0,void 0,function(){return k(this,function(n){switch(n.label){case 0:return[4,this.initPromise];case 1:return n.sent(),[2]}})})},e})(Rw);vw("Cordova");var Ow="firebase",xw="10.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qt(Ow,xw,"app");function Lp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lw=Lp,Dp=new tn("auth","Firebase",Lp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=new ru("@firebase/auth");function Dw(t,...e){Us.logLevel<=$.WARN&&Us.warn(`Auth (${rn}): ${t}`,...e)}function is(t,...e){Us.logLevel<=$.ERROR&&Us.error(`Auth (${rn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t,...e){throw uu(t,...e)}function tt(t,...e){return uu(t,...e)}function Mw(t,e,n){const r=Object.assign(Object.assign({},Lw()),{[e]:n});return new tn("auth","Firebase",r).create(e,{appName:t.name})}function uu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Dp.create(t,...e)}function D(t,e,...n){if(!t)throw uu(e,...n)}function ct(t){const e="INTERNAL ASSERTION FAILED: "+t;throw is(e),new Error(e)}function It(t,e){t||ct(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Uw(){return ad()==="http:"||ad()==="https:"}function ad(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Uw()||rp()||"connection"in navigator)?navigator.onLine:!0}function bw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,n){this.shortDelay=e,this.longDelay=n,It(n>e,"Short delay should be less than long delay!"),this.isMobile=np()||ip()}get(){return jw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(t,e){It(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw=new wi(3e4,6e4);function du(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function pr(t,e,n,r,i={}){return Up(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=nn(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Mp.fetch()(jp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Up(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Fw),e);try{const i=new zw(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw zi(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw zi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw zi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw zi(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Mw(t,c,u);wt(t,c)}}catch(i){if(i instanceof Ge)throw i;wt(t,"network-request-failed",{message:String(i)})}}async function $w(t,e,n,r,i={}){const s=await pr(t,e,n,r,i);return"mfaPendingCredential"in s&&wt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function jp(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?cu(t.config,i):`${t.config.apiScheme}://${i}`}class zw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tt(this.auth,"network-request-failed")),Vw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function zi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=tt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bw(t,e){return pr(t,"POST","/v1/accounts:delete",e)}async function Hw(t,e){return pr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ww(t,e=!1){const n=qe(t),r=await n.getIdToken(e),i=fu(r);D(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:zr(Yo(i.auth_time)),issuedAtTime:zr(Yo(i.iat)),expirationTime:zr(Yo(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Yo(t){return Number(t)*1e3}function fu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return is("JWT malformed, contained fewer than 3 sections"),null;try{const i=tu(n);return i?JSON.parse(i):(is("Failed to decode base64 JWT payload"),null)}catch(i){return is("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Kw(t){const e=fu(t);return D(e,"internal-error"),D(typeof e.exp<"u","internal-error"),D(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ci(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ge&&Gw(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Gw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zr(this.lastLoginAt),this.creationTime=zr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function js(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ci(t,Hw(n,{idToken:r}));D(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Yw(s.providerUserInfo):[],a=Jw(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new bp(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function Qw(t){const e=qe(t);await js(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Jw(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Yw(t){return t.map(e=>{var{providerId:n}=e,r=hr(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xw(t,e){const n=await Up(t,{},async()=>{const r=nn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=jp(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Mp.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Zw(t,e){return pr(t,"POST","/v2/accounts:revokeToken",du(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken<"u","internal-error"),D(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Kw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return D(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Xw(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new di;return r&&(D(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(D(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(D(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new di,this.toJSON())}_performRefresh(){return ct("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t,e){D(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=hr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new bp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ci(this,this.stsTokenManager.getToken(this.auth,e));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ww(this,e)}reload(){return Qw(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new gn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await js(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ci(this,Bw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,v=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,h=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:I,isAnonymous:C,providerData:R,stsTokenManager:N}=n;D(g&&N,e,"internal-error");const P=di.fromJSON(this.name,N);D(typeof g=="string",e,"internal-error"),Tt(f,e.name),Tt(v,e.name),D(typeof I=="boolean",e,"internal-error"),D(typeof C=="boolean",e,"internal-error"),Tt(y,e.name),Tt(w,e.name),Tt(h,e.name),Tt(_,e.name),Tt(m,e.name),Tt(p,e.name);const j=new gn({uid:g,auth:e,email:v,emailVerified:I,displayName:f,isAnonymous:C,photoURL:w,phoneNumber:y,tenantId:h,stsTokenManager:P,createdAt:m,lastLoginAt:p});return R&&Array.isArray(R)&&(j.providerData=R.map(x=>Object.assign({},x))),_&&(j._redirectEventId=_),j}static async _fromIdTokenResponse(e,n,r=!1){const i=new di;i.updateFromServerResponse(n);const s=new gn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await js(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld=new Map;function dt(t){It(t instanceof Function,"Expected a class definition");let e=ld.get(t);return e?(It(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ld.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Fp.type="NONE";const ud=Fp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(t,e,n){return`firebase:${t}:${e}:${n}`}class Jn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ss(this.userKey,i.apiKey,s),this.fullPersistenceKey=ss("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Jn(dt(ud),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||dt(ud);const o=ss(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const f=gn._fromJSON(e,c);u!==s&&(a=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Jn(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Jn(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hp(e))return"Blackberry";if(Wp(e))return"Webos";if(hu(e))return"Safari";if((e.includes("chrome/")||$p(e))&&!e.includes("edge/"))return"Chrome";if(Bp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Vp(t=B()){return/firefox\//i.test(t)}function hu(t=B()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $p(t=B()){return/crios\//i.test(t)}function zp(t=B()){return/iemobile/i.test(t)}function Bp(t=B()){return/android/i.test(t)}function Hp(t=B()){return/blackberry/i.test(t)}function Wp(t=B()){return/webos/i.test(t)}function lo(t=B()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function e1(t=B()){var e;return lo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function t1(){return sp()&&document.documentMode===10}function Kp(t=B()){return lo(t)||Bp(t)||Wp(t)||Hp(t)||/windows phone/i.test(t)||zp(t)}function n1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(t,e=[]){let n;switch(t){case"Browser":n=cd(B());break;case"Worker":n=`${cd(B())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${rn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i1(t,e={}){return pr(t,"GET","/v2/passwordPolicy",du(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1=6;class o1{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:s1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dd(this),this.idTokenSubscription=new dd(this),this.beforeStateQueue=new r1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Jn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await js(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?qe(e):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(dt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await i1(this),n=new o1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new tn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Zw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dt(e)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await Jn.create(this,[dt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(D(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Dw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function pu(t){return qe(t)}class dd{constructor(e){this.auth=e,this.observer=null,this.addObserver=op(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function u1(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=tt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",l1().appendChild(r)})}function c1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d1(t,e){const n=up(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ls(s,e??{}))return i;wt(i,"already-initialized")}return n.initialize({options:e})}function f1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function h1(t,e,n){const r=pu(t);D(r._canInitEmulator,r,"emulator-config-failed"),D(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=qp(e),{host:o,port:a}=p1(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||m1()}function qp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function p1(t){const e=qp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:fd(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:fd(o)}}}function fd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function m1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ct("not implemented")}_getIdTokenResponse(e){return ct("not implemented")}_linkToIdToken(e,n){return ct("not implemented")}_getReauthenticationResolver(e){return ct("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yn(t,e){return $w(t,"POST","/v1/accounts:signInWithIdp",du(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1="http://localhost";class Tn extends Qp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Tn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=hr(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Tn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Yn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yn(e,n)}buildRequest(){const e={requestUri:v1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=nn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends Jp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends Ii{constructor(){super("facebook.com")}static credential(e){return Tn._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return At.credential(e.oauthAccessToken)}catch{return null}}}At.FACEBOOK_SIGN_IN_METHOD="facebook.com";At.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends Ii{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Tn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ot.credential(n,r)}catch{return null}}}Ot.GOOGLE_SIGN_IN_METHOD="google.com";Ot.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends Ii{constructor(){super("github.com")}static credential(e){return Tn._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xt.credential(e.oauthAccessToken)}catch{return null}}}xt.GITHUB_SIGN_IN_METHOD="github.com";xt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends Ii{constructor(){super("twitter.com")}static credential(e,n){return Tn._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Lt.credential(n,r)}catch{return null}}}Lt.TWITTER_SIGN_IN_METHOD="twitter.com";Lt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await gn._fromIdTokenResponse(e,r,i),o=hd(r);return new ar({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=hd(r);return new ar({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function hd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs extends Ge{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,bs.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new bs(e,n,r,i)}}function Yp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?bs._fromErrorAndOperation(t,s,e,r):s})}async function g1(t,e,n=!1){const r=await ci(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ar._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y1(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ci(t,Yp(r,i,e,t),n);D(s.idToken,r,"internal-error");const o=fu(s.idToken);D(o,r,"internal-error");const{sub:a}=o;return D(t.uid===a,r,"user-mismatch"),ar._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&wt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _1(t,e,n=!1){const r="signIn",i=await Yp(t,r,e),s=await ar._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function w1(t,e,n,r){return qe(t).onIdTokenChanged(e,n,r)}function I1(t,e,n){return qe(t).beforeAuthStateChanged(e,n)}const Fs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fs,"1"),this.storage.removeItem(Fs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E1(){const t=B();return hu(t)||lo(t)}const k1=1e3,S1=10;class Zp extends Xp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=E1()&&n1(),this.fallbackToPolling=Kp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);t1()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,S1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},k1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zp.type="LOCAL";const T1=Zp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em extends Xp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}em.type="SESSION";const tm=em;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new uo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await C1(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}uo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=mu("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const v=f;if(v.data.eventId===u)switch(v.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(v.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return window}function P1(t){nt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(){return typeof nt().WorkerGlobalScope<"u"&&typeof nt().importScripts=="function"}async function R1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function A1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function O1(){return nm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm="firebaseLocalStorageDb",x1=1,Vs="firebaseLocalStorage",im="fbase_key";class Ei{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function co(t,e){return t.transaction([Vs],e?"readwrite":"readonly").objectStore(Vs)}function L1(){const t=indexedDB.deleteDatabase(rm);return new Ei(t).toPromise()}function il(){const t=indexedDB.open(rm,x1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Vs,{keyPath:im})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Vs)?e(r):(r.close(),await L1(),e(await il()))})})}async function pd(t,e,n){const r=co(t,!0).put({[im]:e,value:n});return new Ei(r).toPromise()}async function D1(t,e){const n=co(t,!1).get(e),r=await new Ei(n).toPromise();return r===void 0?null:r.value}function md(t,e){const n=co(t,!0).delete(e);return new Ei(n).toPromise()}const M1=800,U1=3;class sm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await il(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>U1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=uo._getInstance(O1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await R1(),!this.activeServiceWorker)return;this.sender=new N1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||A1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await il();return await pd(e,Fs,"1"),await md(e,Fs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>pd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>D1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>md(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=co(i,!1).getAll();return new Ei(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),M1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sm.type="LOCAL";const j1=sm;new wi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(t,e){return e?dt(e):(D(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu extends Qp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function F1(t){return _1(t.auth,new vu(t),t.bypassAuthState)}function V1(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),y1(n,new vu(t),t.bypassAuthState)}async function $1(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),g1(n,new vu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return F1;case"linkViaPopup":case"linkViaRedirect":return $1;case"reauthViaPopup":case"reauthViaRedirect":return V1;default:wt(this.auth,"internal-error")}}resolve(e){It(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){It(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1=new wi(2e3,1e4);class zn extends om{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,zn.currentPopupAction&&zn.currentPopupAction.cancel(),zn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){It(this.filter.length===1,"Popup operations only handle one event");const e=mu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,z1.get())};e()}}zn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1="pendingRedirect",os=new Map;class H1 extends om{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=os.get(this.auth._key());if(!e){try{const r=await W1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}os.set(this.auth._key(),e)}return this.bypassAuthState||os.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function W1(t,e){const n=q1(e),r=G1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function K1(t,e){os.set(t._key(),e)}function G1(t){return dt(t._redirectPersistence)}function q1(t){return ss(B1,t.config.apiKey,t.name)}async function Q1(t,e,n=!1){const r=pu(t),i=b1(r,e),o=await new H1(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1=10*60*1e3;class Y1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!X1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!am(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=J1&&this.cachedEventUids.clear(),this.cachedEventUids.has(vd(e))}saveEventToCache(e){this.cachedEventUids.add(vd(e)),this.lastProcessedEventTime=Date.now()}}function vd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function am({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function X1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return am(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z1(t,e={}){return pr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tI=/^https?/;async function nI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Z1(t);for(const n of e)try{if(rI(n))return}catch{}wt(t,"unauthorized-domain")}function rI(t){const e=rl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!tI.test(n))return!1;if(eI.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI=new wi(3e4,6e4);function gd(){const t=nt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sI(t){return new Promise((e,n)=>{var r,i,s;function o(){gd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gd(),n(tt(t,"network-request-failed"))},timeout:iI.get()})}if(!((i=(r=nt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=nt().gapi)===null||s===void 0)&&s.load)o();else{const a=c1("iframefcb");return nt()[a]=()=>{gapi.load?o():n(tt(t,"network-request-failed"))},u1(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw as=null,e})}let as=null;function oI(t){return as=as||sI(t),as}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=new wi(5e3,15e3),lI="__/auth/iframe",uI="emulator/auth/iframe",cI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fI(t){const e=t.config;D(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?cu(e,uI):`https://${t.config.authDomain}/${lI}`,r={apiKey:e.apiKey,appName:t.name,v:rn},i=dI.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${nn(r).slice(1)}`}async function hI(t){const e=await oI(t),n=nt().gapi;return D(n,t,"internal-error"),e.open({where:document.body,url:fI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cI,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=tt(t,"network-request-failed"),a=nt().setTimeout(()=>{s(o)},aI.get());function l(){nt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mI=500,vI=600,gI="_blank",yI="http://localhost";class yd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _I(t,e,n,r=mI,i=vI){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},pI),{width:r.toString(),height:i.toString(),top:s,left:o}),u=B().toLowerCase();n&&(a=$p(u)?gI:n),Vp(u)&&(e=e||yI,l.scrollbars="yes");const c=Object.entries(l).reduce((v,[y,w])=>`${v}${y}=${w},`,"");if(e1(u)&&a!=="_self")return wI(e||"",a),new yd(null);const f=window.open(e||"",a,c);D(f,t,"popup-blocked");try{f.focus()}catch{}return new yd(f)}function wI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II="__/auth/handler",EI="emulator/auth/handler",kI=encodeURIComponent("fac");async function _d(t,e,n,r,i,s){D(t.config.authDomain,t,"auth-domain-config-required"),D(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:rn,eventId:i};if(e instanceof Jp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",K0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,f]of Object.entries(s||{}))o[c]=f}if(e instanceof Ii){const c=e.getScopes().filter(f=>f!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${kI}=${encodeURIComponent(l)}`:"";return`${SI(t)}?${nn(a).slice(1)}${u}`}function SI({config:t}){return t.emulator?cu(t,EI):`https://${t.authDomain}/${II}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo="webStorageSupport";class TI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tm,this._completeRedirectFn=Q1,this._overrideRedirectResult=K1}async _openPopup(e,n,r,i){var s;It((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await _d(e,n,r,rl(),i);return _I(e,o,mu())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await _d(e,n,r,rl(),i);return P1(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(It(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await hI(e),r=new Y1(e);return n.register("authEvent",i=>(D(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xo,{type:Xo},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Xo];o!==void 0&&n(!!o),wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Kp()||hu()||lo()}}const CI=TI;var wd="@firebase/auth",Id="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function RI(t){Sn(new Yt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;D(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gp(t)},u=new a1(r,i,s,l);return f1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Sn(new Yt("auth-internal",e=>{const n=pu(e.getProvider("auth").getImmediate());return(r=>new NI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qt(wd,Id,PI(t)),qt(wd,Id,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI=5*60,OI=tp("authIdTokenMaxAge")||AI;let Ed=null;const xI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>OI)return;const i=n==null?void 0:n.token;Ed!==i&&(Ed=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function LI(t=Wy()){const e=up(t,"auth");if(e.isInitialized())return e.getImmediate();const n=d1(t,{popupRedirectResolver:CI,persistence:[j1,T1,tm]}),r=tp("authTokenSyncURL");if(r){const s=xI(r);I1(n,s,()=>s(n.currentUser)),w1(n,o=>s(o))}const i=F0("auth");return i&&h1(n,`http://${i}`),n}RI("Browser");var DI={BASE_URL:"/Entertainment-Web-App/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const MI={apiKey:"AIzaSyDakI9hxU_hekAFMX3vvqLC7DesuevA2EA",authDomain:"entertainment-web-app-b6dc8.firebaseapp.com",projectId:"entertainment-web-app-b6dc8",storageBucket:"entertainment-web-app-b6dc8.appspot.com",messagingSenderId:"123065684770",appId:"1:123065684770:web:f1f2631f4c40b0d4d24b7b",measurementId:"G-3540K9JPYK"},UI=cp(MI);console.log(DI);const kd=LI(UI),Sd=()=>{const[t,e]=S.useState(""),[n,r]=S.useState({emailAddress:"",password:"",repeatPassword:""}),[i,s]=S.useState({emailAddress:"",password:""}),[o,a]=S.useState(!0),[l,u]=S.useState(!1),[c,f]=S.useState({emailAddress:!1,password:!1}),v=h0(),[y,w]=S.useState({emailAddress:!1,password:!1,repeatPassword:!1}),h=()=>{a(!0),u(!1),e("container-animation")},_=()=>{a(!1),u(!0),e("container-animation")},m=N=>{const{id:P,value:j}=N.target;s(x=>({...x,[P]:j})),f(x=>({...x,[P]:!1}))},p=N=>{const{id:P,value:j}=N.target;r(x=>({...x,[P]:j})),w(x=>({...x,[P]:!1}))},g=N=>{N.preventDefault(),hw(kd,i.emailAddress,i.password).then(()=>{v("/entertainment")}).catch(P=>{const j=P.code,x=P.message;f(ve=>({...ve,emailAddress:j==="auth/invalid-email",password:j==="auth/invalid-credential"})),console.log(j),console.error(x)})},I={borderBottomColor:"red",transition:"all 0.5s"},C={borderBottomColor:""},R=N=>{N.preventDefault(),n.repeatPassword!==n.password?w(P=>({...P,repeatPassword:!0})):fw(kd,n.emailAddress,n.password).then(()=>{v("/entertainment")}).catch(P=>{const j=P.code,x=P.message;w(ve=>({...ve,emailAddress:j==="auth/email-already-in-use"})),console.error(x)})};return d.jsx(d.Fragment,{children:d.jsxs("div",{className:"main-body-container",children:[d.jsx("header",{children:d.jsx("img",{src:Jh,alt:"movie icon logo"})}),o&&d.jsxs("div",{className:`login-form-container ${t}`,children:[d.jsx("h1",{children:"Login"}),d.jsxs("form",{action:"",onSubmit:g,children:[d.jsxs("div",{className:"email-field",children:[d.jsxs("label",{htmlFor:"emailAddress",children:[d.jsx("input",{type:"text",id:"emailAddress",value:i.emailAddress,onChange:m,placeholder:"Email address",style:c.emailAddress?I:C}),c.emailAddress&&d.jsx("span",{className:"errorStyle",children:"Incorrect Email"})]}),d.jsxs("label",{htmlFor:"password",children:[d.jsx("input",{type:"password",id:"password",value:i.password,onChange:m,placeholder:"Password",style:c.password?I:C}),c.password&&d.jsx("span",{className:"errorStyle",children:"Incorrect password"})]})]}),d.jsx("input",{type:"submit",value:"Login to your account"})]}),d.jsxs("div",{className:"users-signup-option",children:[d.jsx("p",{className:"signup-asked",children:"Don’t have an account?"}),d.jsx("p",{className:"singup-link",onClick:_,children:"Sign Up"})]})]}),l&&d.jsxs("div",{className:`login-form-container ${t}`,children:[d.jsx("h1",{children:"Sign Up"}),d.jsxs("form",{action:"",onSubmit:R,children:[d.jsxs("div",{className:"email-field",children:[d.jsxs("label",{htmlFor:"emailAddress",children:[d.jsx("input",{type:"text",id:"emailAddress",value:n.emailAddress,onChange:p,placeholder:"Email address",style:y.emailAddress?I:C}),y.emailAddress&&d.jsx("span",{className:"errorStyle",children:"Invalid Email"})]}),d.jsxs("label",{htmlFor:"password",children:[d.jsx("input",{type:"password",id:"password",value:n.password,onChange:p,placeholder:"Password",style:y.password?I:C}),y.password&&d.jsx("span",{className:"errorStyle",children:"Incorrect password"})]}),d.jsxs("label",{htmlFor:"repeatPassword",children:[d.jsx("input",{type:"password",id:"repeatPassword",value:n.repeatPassword,onChange:p,placeholder:"Repeat Password",style:y.repeatPassword?I:C}),y.repeatPassword&&d.jsx("span",{className:"errorStyle",children:"Unmatching password"})]})]}),d.jsx("input",{type:"submit",value:"Create an account"})]}),d.jsxs("div",{className:"users-signup-option",children:[d.jsx("p",{className:"signup-asked",children:"Already have an account?"}),d.jsx("p",{className:"singup-link",onClick:h,children:"Login"})]})]})]})})},We="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.956%200H3.044A3.044%203.044%200%200%200%200%203.044v13.912A3.044%203.044%200%200%200%203.044%2020h13.912A3.044%203.044%200%200%200%2020%2016.956V3.044A3.044%203.044%200%200%200%2016.956%200ZM4%209H2V7h2v2Zm-2%202h2v2H2v-2Zm16-2h-2V7h2v2Zm-2%202h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74%200%200%201%20.74.74ZM2.74%202H4v2H2V2.74A.74.74%200%200%201%202.74%202ZM2%2017.26V16h2v2H2.74a.74.74%200%200%201-.74-.74Zm16%200a.74.74%200%200%201-.74.74H16v-2h2v1.26Z'%20fill='%235A698F'/%3e%3c/svg%3e",jI="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20%204.481H9.08l2.7-3.278L10.22%200%207%203.909%203.78.029%202.22%201.203l2.7%203.278H0V20h20V4.481Zm-8%2013.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z'%20fill='%235A698F'/%3e%3c/svg%3e",bI="data:image/svg+xml,%3csvg%20width='17'%20height='20'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.387%200c.202%200%20.396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0%20.3-.086.573-.258.82a1.49%201.49%200%200%201-.694.542%201.49%201.49%200%200%201-.581.106c-.423%200-.79-.141-1.098-.423L8.46%2013.959l-5.83%205.605c-.317.29-.682.436-1.097.436-.202%200-.396-.04-.581-.119a1.49%201.49%200%200%201-.694-.542A1.402%201.402%200%200%201%200%2018.52V1.481c0-.3.086-.573.258-.82A1.49%201.49%200%200%201%20.952.119C1.137.039%201.33%200%201.533%200h13.854Z'%20fill='%235A698F'/%3e%3c/svg%3e",FI="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%200H1C.4%200%200%20.4%200%201v7c0%20.6.4%201%201%201h7c.6%200%201-.4%201-1V1c0-.6-.4-1-1-1Zm0%2011H1c-.6%200-1%20.4-1%201v7c0%20.6.4%201%201%201h7c.6%200%201-.4%201-1v-7c0-.6-.4-1-1-1ZM19%200h-7c-.6%200-1%20.4-1%201v7c0%20.6.4%201%201%201h7c.6%200%201-.4%201-1V1c0-.6-.4-1-1-1Zm0%2011h-7c-.6%200-1%20.4-1%201v7c0%20.6.4%201%201%201h7c.6%200%201-.4%201-1v-7c0-.6-.4-1-1-1Z'%20fill='%235A698F'/%3e%3c/svg%3e",VI="/Entertainment-Web-App/assets/image-avatar-cJ6OIzSj.png",fo="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M27.613%2025.72%2023.08%2021.2a10.56%2010.56%200%200%200%202.253-6.533C25.333%208.776%2020.558%204%2014.667%204S4%208.776%204%2014.667c0%205.89%204.776%2010.666%2010.667%2010.666A10.56%2010.56%200%200%200%2021.2%2023.08l4.52%204.533a1.333%201.333%200%200%200%201.893%200%201.333%201.333%200%200%200%200-1.893ZM6.667%2014.667a8%208%200%201%201%2016%200%208%208%200%200%201-16%200Z'%20fill='%23FFF'/%3e%3c/svg%3e",rt="data:image/svg+xml,%3csvg%20width='12'%20height='14'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m10.518.75.399%2012.214-5.084-4.24-4.535%204.426L.75%201.036l9.768-.285Z'%20stroke='%23FFF'%20stroke-width='1.5'%20fill='none'/%3e%3c/svg%3e",it="data:image/svg+xml,%3csvg%20width='30'%20height='30'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15%200C6.713%200%200%206.713%200%2015c0%208.288%206.713%2015%2015%2015%208.288%200%2015-6.712%2015-15%200-8.287-6.712-15-15-15Zm-3%2021V8l9%206.5-9%206.5Z'%20fill='%23FFF'/%3e%3c/svg%3e",pt="data:image/svg+xml,%3csvg%20width='12'%20height='14'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.61%200c.14%200%20.273.028.4.083a1.03%201.03%200%200%201%20.657.953v11.928a1.03%201.03%200%200%201-.656.953c-.116.05-.25.074-.402.074-.291%200-.543-.099-.756-.296L5.833%209.77l-4.02%203.924c-.218.203-.47.305-.756.305a.995.995%200%200%201-.4-.083A1.03%201.03%200%200%201%200%2012.964V1.036A1.03%201.03%200%200%201%20.656.083.995.995%200%200%201%201.057%200h9.552Z'%20fill='%23FFF'/%3e%3c/svg%3e",lm=S.createContext(void 0),gu=()=>{const t=S.useContext(lm);if(!t)throw new Error("useBookmarkContext must be used within a BookmarkProvider");return t},$I=({children:t})=>{const[e,n]=S.useState([]),r=i=>{n(s=>s.some(a=>a.title===i.title&&a.isBookmarked===!0)?(console.log("Removing bookmark for:",i.title),s.filter(a=>a.title!==i.title)):(console.log("Adding bookmark for:",i.title),[...s,{...i,isBookmarked:!0}]))};return S.useEffect(()=>{fetch("./src/data.json").then(i=>i.json()).then(i=>n(i)).catch(i=>console.error("Error fetching data:",i))},[]),console.log(e),d.jsx(lm.Provider,{value:{bookmarkedMovies:e,toggleBookmark:r},children:t})},zI=()=>{const[t,e]=S.useState([]),[n,r]=S.useState(""),[i,s]=S.useState([]),[o,a]=S.useState("all");S.useEffect(()=>{fetch("./src/data.json").then(h=>h.json()).then(h=>e(h)).catch(h=>console.error("Error fetching data:",h))},[]);const[l,u]=S.useState(Array(t.length).fill(!1)),c=h=>{const _=[...l];_[h]=!0,u(_)},f=h=>{const _=[...l];_[h]=!1,u(_)},v=h=>{if(h.key==="Enter"){const _=h.currentTarget.value.trim().toLowerCase();r(_);const m=t.filter(p=>p.category==="TV Series"&&p.title.toLowerCase().includes(_));s(m),a("searchResults")}},{toggleBookmark:y}=gu(),w=h=>{e(_=>{const m=[..._],p={...h,isBookmarked:!h.isBookmarked},g=m.findIndex(I=>I.title===h.title);return m[g]=p,m})};return d.jsx(d.Fragment,{children:d.jsxs("div",{children:[d.jsx("div",{className:"search-container",children:d.jsxs("div",{className:"searchArea",children:[d.jsx("img",{src:fo,alt:"the search icon"}),d.jsx("label",{htmlFor:"searchResults",children:d.jsx("input",{type:"text",placeholder:"Search for TV series",onKeyDown:v,id:"searchResults"})})]})}),o==="all"&&d.jsx(d.Fragment,{children:d.jsx("div",{className:"movies-container",children:d.jsxs("div",{className:"recommended-container",children:[d.jsx("h2",{children:"TV Series"}),d.jsx("div",{className:"myRecommended-moviesContainer",children:d.jsx("div",{className:"moviesRecommended",children:t.map((h,_)=>h.category==="TV Series"&&d.jsxs("div",{className:"trending-movieContainer",onMouseEnter:()=>c(_),onMouseLeave:()=>f(_),children:[d.jsx("img",{src:window.innerWidth<=768?h.thumbnail.regular.small:h.thumbnail.regular.large,alt:h.title}),d.jsx("div",{className:"bookMarkContainer",children:d.jsx("img",{src:h.isBookmarked?pt:rt,alt:"empty bookmarked",className:"emptyBookedIcon",onClick:()=>{y(h),w(h)}})}),d.jsxs("div",{className:"play-container",style:{visibility:l[_]?"visible":"hidden"},children:[d.jsx("img",{src:it,alt:"play icon"}),d.jsx("p",{className:"play-text",children:"Play"})]}),d.jsxs("div",{className:"movie-descriptionContainer",children:[d.jsxs("div",{className:"content",children:[h.year," ",d.jsx("div",{className:"ovalDot"})," ",d.jsx("img",{src:We,alt:"movie icon"})," ",h.category," ",d.jsx("div",{className:"ovalDot"})," ",h.rating]}),d.jsx("p",{className:"movieTitle",children:h.title})]})]},_))})})]})})}),o==="searchResults"&&d.jsxs("div",{className:"search-results-container",children:[d.jsxs("h3",{children:["Found ",i.length,' results for "',n,'"']}),d.jsx("div",{className:"searchResultsContainer",children:i.map((h,_)=>d.jsxs("div",{className:"trending-movieContainer",onMouseEnter:()=>c(_),onMouseLeave:()=>f(_),children:[d.jsx("img",{src:window.innerWidth<=768?h.thumbnail.regular.small:h.thumbnail.regular.large,alt:h.title}),d.jsx("div",{className:"bookMarkContainer",children:d.jsx("img",{src:h.isBookmarked?pt:rt,alt:"empty bookmarked",className:"emptyBookedIcon"})}),d.jsxs("div",{className:"play-container",style:{visibility:l[_]?"visible":"hidden"},children:[d.jsx("img",{src:it,alt:"play icon"}),d.jsx("p",{className:"play-text",children:"Play"})]}),d.jsxs("div",{className:"movie-descriptionContainer",children:[d.jsxs("div",{className:"content",children:[h.year," ",d.jsx("div",{className:"ovalDot"})," ",d.jsx("img",{src:We,alt:"movie icon"})," ",h.category," ",d.jsx("div",{className:"ovalDot"})," ",h.rating]}),d.jsx("p",{className:"movieTitle",children:h.title})]})]},_))})]})]})})},BI=()=>{const[t,e]=S.useState([]),[n,r]=S.useState([]),[i,s]=S.useState(""),[o,a]=S.useState([]),[l,u]=S.useState("all");S.useEffect(()=>{fetch("./src/data.json").then(h=>h.json()).then(h=>e(h)).catch(h=>console.error("Error fetching data:",h))},[]),S.useEffect(()=>{fetch("./src/data.json").then(h=>h.json()).then(h=>r(h)).catch(h=>console.error("Error fetching data:",h))},[]);const[c,f]=S.useState(Array(t.length).fill(!1)),v=h=>{const _=[...c];_[h]=!0,f(_)},y=h=>{const _=[...c];_[h]=!1,f(_)},w=h=>{if(h.key==="Enter"){const _=h.currentTarget.value.trim().toLowerCase();s(_);const m=n.filter(p=>p.title.toLowerCase().includes(_));a(m),u("searchResults")}};return d.jsx(d.Fragment,{children:d.jsxs("div",{className:"mainContainer",children:[d.jsx("div",{className:"search-container",children:d.jsxs("div",{className:"searchArea",children:[d.jsx("img",{src:fo,alt:"the search icon"}),d.jsx("label",{htmlFor:"searchResults",children:d.jsx("input",{type:"text",placeholder:"Search for movies or TV series",onKeyDown:w,id:"searchResults"})})]})}),l==="all"&&d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"trending-container",children:[d.jsx("h1",{children:"Trending"}),d.jsx("div",{className:"trending-movies-container",children:d.jsx("div",{className:"trending-movie",children:t.map((h,_)=>h.isTrending&&d.jsxs("div",{className:"trending-movieContainer",onMouseEnter:()=>v(_),onMouseLeave:()=>y(_),children:[d.jsx("img",{src:window.innerWidth<=768?h.thumbnail.trending.small:h.thumbnail.trending.large,alt:h.title}),d.jsx("div",{className:"bookMarkContainer",children:d.jsx("img",{src:rt,alt:"empty bookmarked",className:"emptyBookedIcon"})}),d.jsxs("div",{className:"play-container",style:{visibility:c[_]?"visible":"hidden"},children:[d.jsx("img",{src:it,alt:"play icon"}),d.jsx("p",{className:"play-text",children:"Play"})]}),d.jsxs("div",{className:"movie-description-container",children:[d.jsxs("div",{className:"content",children:[h.year," ",d.jsx("div",{className:"ovalDot"})," ",d.jsx("img",{src:We,alt:"movie icon"})," ",h.category," ",d.jsx("div",{className:"ovalDot"})," ",h.rating]}),d.jsx("p",{className:"movieTitle",children:h.title})]})]},_))})})]}),d.jsxs("div",{className:"recommended-container",children:[d.jsx("h2",{children:"Recommended for you"}),d.jsx("div",{className:"myRecommended-moviesContainer",children:d.jsx("div",{className:"moviesRecommended",children:n.map((h,_)=>!h.isTrending&&d.jsxs("div",{className:"trending-movieContainer",onMouseEnter:()=>v(_),onMouseLeave:()=>y(_),children:[d.jsx("img",{src:window.innerWidth<=768?h.thumbnail.regular.small:h.thumbnail.regular.large,alt:h.title}),d.jsx("div",{className:"bookMarkContainer",children:d.jsx("img",{src:h.isBookmarked?pt:rt,alt:"empty bookmarked",className:"emptyBookedIcon"})}),d.jsxs("div",{className:"play-container",style:{visibility:c[_]?"visible":"hidden"},children:[d.jsx("img",{src:it,alt:"play icon"}),d.jsx("p",{className:"play-text",children:"Play"})]}),d.jsxs("div",{className:"movie-descriptionContainer",children:[d.jsxs("div",{className:"content",children:[h.year," ",d.jsx("div",{className:"ovalDot"})," ",d.jsx("img",{src:We,alt:"movie icon"})," ",h.category," ",d.jsx("div",{className:"ovalDot"})," ",h.rating]}),d.jsx("p",{className:"movieTitle",children:h.title})]})]},_))})})]})]}),l==="searchResults"&&d.jsxs("div",{className:"search-results-container",children:[d.jsxs("h3",{children:["Found ",o.length,' results for "',i,'"']}),d.jsx("div",{className:"searchResultsContainer",children:o.map((h,_)=>d.jsxs("div",{className:"trending-movieContainer",onMouseEnter:()=>v(_),onMouseLeave:()=>y(_),children:[d.jsx("img",{src:window.innerWidth<=768?h.thumbnail.regular.small:h.thumbnail.regular.large,alt:h.title}),d.jsx("div",{className:"bookMarkContainer",children:d.jsx("img",{src:h.isBookmarked?pt:rt,alt:"empty bookmarked",className:"emptyBookedIcon"})}),d.jsxs("div",{className:"play-container",style:{visibility:c[_]?"visible":"hidden"},children:[d.jsx("img",{src:it,alt:"play icon"}),d.jsx("p",{className:"play-text",children:"Play"})]}),d.jsxs("div",{className:"movie-descriptionContainer",children:[d.jsxs("div",{className:"content",children:[h.year," ",d.jsx("div",{className:"ovalDot"})," ",d.jsx("img",{src:We,alt:"movie icon"})," ",h.category," ",d.jsx("div",{className:"ovalDot"})," ",h.rating]}),d.jsx("p",{className:"movieTitle",children:h.title})]})]},_))})]})]})})},HI=()=>{const[t,e]=S.useState([]),[n,r]=S.useState(""),[i,s]=S.useState([]),[o,a]=S.useState("all"),{toggleBookmark:l}=gu();S.useEffect(()=>{fetch("./src/data.json").then(h=>h.json()).then(h=>e(h)).catch(h=>console.error("Error fetching data:",h))},[]);const[u,c]=S.useState(Array(t.length).fill(!1)),f=h=>{const _=[...u];_[h]=!0,c(_)},v=h=>{const _=[...u];_[h]=!1,c(_)},y=h=>{if(h.key==="Enter"){const _=h.currentTarget.value.trim().toLowerCase();r(_);const m=t.filter(p=>p.category==="Movie"&&p.title.toLowerCase().includes(_));s(m),a("searchResults")}},w=h=>{e(_=>{const m=[..._],p={...h,isBookmarked:!h.isBookmarked},g=m.findIndex(I=>I.title===h.title);return m[g]=p,console.log("Updated Movies Data:",m),m})};return d.jsx(d.Fragment,{children:d.jsxs("div",{children:[d.jsx("div",{className:"search-container",children:d.jsxs("div",{className:"searchArea",children:[d.jsx("img",{src:fo,alt:"the search icon"}),d.jsx("label",{htmlFor:"searchResults",children:d.jsx("input",{type:"text",placeholder:"Search for movies",onKeyDown:y,id:"searchResults"})})]})}),o==="all"&&d.jsx(d.Fragment,{children:d.jsx("div",{className:"movies-container",children:d.jsxs("div",{className:"recommended-container",children:[d.jsx("h2",{children:"Movies"}),d.jsx("div",{className:"myRecommended-moviesContainer",children:d.jsx("div",{className:"moviesRecommended",children:t.map((h,_)=>h.category==="Movie"&&d.jsxs("div",{className:"trending-movieContainer",onMouseEnter:()=>f(_),onMouseLeave:()=>v(_),children:[d.jsx("img",{src:window.innerWidth<=768?h.thumbnail.regular.small:h.thumbnail.regular.large,alt:h.title}),d.jsx("div",{className:"bookMarkContainer",children:d.jsx("img",{src:h.isBookmarked?pt:rt,alt:"empty bookmarked",className:"emptyBookedIcon",onClick:()=>{l(h),w(h)}})}),d.jsxs("div",{className:"play-container",style:{visibility:u[_]?"visible":"hidden"},children:[d.jsx("img",{src:it,alt:"play icon"}),d.jsx("p",{className:"play-text",children:"Play"})]}),d.jsxs("div",{className:"movie-descriptionContainer",children:[d.jsxs("div",{className:"content",children:[h.year," ",d.jsx("div",{className:"ovalDot"})," ",d.jsx("img",{src:We,alt:"movie icon"})," ",h.category," ",d.jsx("div",{className:"ovalDot"})," ",h.rating]}),d.jsx("p",{className:"movieTitle",children:h.title})]})]},_))})})]})})}),o==="searchResults"&&d.jsxs("div",{className:"search-results-container",children:[d.jsxs("h3",{children:["Found ",i.length,' results for "',n,'"']}),d.jsx("div",{className:"searchResultsContainer",children:i.map((h,_)=>d.jsxs("div",{className:"trending-movieContainer",onMouseEnter:()=>f(_),onMouseLeave:()=>v(_),children:[d.jsx("img",{src:window.innerWidth<=768?h.thumbnail.regular.small:h.thumbnail.regular.large,alt:h.title}),d.jsx("div",{className:"bookMarkContainer",children:d.jsx("img",{src:h.isBookmarked?pt:rt,alt:"empty bookmarked",className:"emptyBookedIcon"})}),d.jsxs("div",{className:"play-container",style:{visibility:u[_]?"visible":"hidden"},children:[d.jsx("img",{src:it,alt:"play icon"}),d.jsx("p",{className:"play-text",children:"Play"})]}),d.jsxs("div",{className:"movie-descriptionContainer",children:[d.jsxs("div",{className:"content",children:[h.year," ",d.jsx("div",{className:"ovalDot"})," ",d.jsx("img",{src:We,alt:"movie icon"})," ",h.category," ",d.jsx("div",{className:"ovalDot"})," ",h.rating]}),d.jsx("p",{className:"movieTitle",children:h.title})]})]},_))})]})]})})},WI=()=>{const[t,e]=S.useState(""),[n,r]=S.useState([]),[i,s]=S.useState("all"),{bookmarkedMovies:o,toggleBookmark:a}=gu(),[l,u]=S.useState(Array(o.length).fill(!1)),c=y=>{const w=[...l];w[y]=!0,u(w)},f=y=>{const w=[...l];w[y]=!1,u(w)},v=y=>{if(y.key==="Enter"){const w=y.currentTarget.value.trim().toLowerCase();e(w);const h=o.filter(_=>_.isBookmarked&&_.title.toLowerCase().includes(w));r(h),s("searchResults")}};return console.log("bookmarkedMovies:",o),console.log("bookmarkedMovies:",o),d.jsx(d.Fragment,{children:d.jsxs("div",{children:[d.jsx("div",{className:"search-container",children:d.jsxs("div",{className:"searchArea",children:[d.jsx("img",{src:fo,alt:"the search icon"}),d.jsx("label",{htmlFor:"searchResults",children:d.jsx("input",{type:"text",placeholder:"Search for bookmarked shows",onKeyDown:v,id:"searchResults"})})]})}),i==="all"&&d.jsx(d.Fragment,{children:d.jsxs("div",{className:"bookmarkedContainer",children:[d.jsxs("div",{className:"recommended-container",children:[d.jsx("h2",{children:"Bookmarked Movies"}),d.jsx("div",{className:"myRecommended-moviesContainer",children:d.jsx("div",{className:"moviesRecommended",children:o.map((y,w)=>y.isBookmarked&&y.category==="Movie"&&d.jsxs("div",{className:"trending-movieContainer",onMouseEnter:()=>c(w),onMouseLeave:()=>f(w),children:[d.jsx("img",{src:window.innerWidth<=768?y.thumbnail.regular.small:y.thumbnail.regular.large,alt:y.title}),d.jsx("div",{className:"bookMarkContainer",children:d.jsx("img",{src:y.isBookmarked?pt:rt,alt:"empty bookmarked",className:"emptyBookedIcon",onClick:()=>a(y)})}),d.jsxs("div",{className:"play-container",style:{visibility:l[w]?"visible":"hidden"},children:[d.jsx("img",{src:it,alt:"play icon"}),d.jsx("p",{className:"play-text",children:"Play"})]}),d.jsxs("div",{className:"movie-descriptionContainer",children:[d.jsxs("div",{className:"content",children:[y.year," ",d.jsx("div",{className:"ovalDot"})," ",d.jsx("img",{src:We,alt:"movie icon"})," ",y.category," ",d.jsx("div",{className:"ovalDot"})," ",y.rating]}),d.jsx("p",{className:"movieTitle",children:y.title})]})]},w))})})]}),d.jsxs("div",{className:"recommended-container",children:[d.jsx("h2",{children:"Bookmarked TV Series"}),d.jsx("div",{className:"myRecommended-moviesContainer",children:d.jsx("div",{className:"moviesRecommended",children:o.map((y,w)=>y.isBookmarked&&y.category==="TV Series"&&d.jsxs("div",{className:"trending-movieContainer",onMouseEnter:()=>c(w),onMouseLeave:()=>f(w),children:[d.jsx("img",{src:window.innerWidth<=768?y.thumbnail.regular.small:y.thumbnail.regular.large,alt:y.title}),d.jsx("div",{className:"bookMarkContainer",children:d.jsx("img",{src:y.isBookmarked?pt:rt,alt:"empty bookmarked",className:"emptyBookedIcon",onClick:()=>a(y)})}),d.jsxs("div",{className:"play-container",style:{visibility:l[w]?"visible":"hidden"},children:[d.jsx("img",{src:it,alt:"play icon"}),d.jsx("p",{className:"play-text",children:"Play"})]}),d.jsxs("div",{className:"movie-descriptionContainer",children:[d.jsxs("div",{className:"content",children:[y.year," ",d.jsx("div",{className:"ovalDot"})," ",d.jsx("img",{src:We,alt:"movie icon"})," ",y.category," ",d.jsx("div",{className:"ovalDot"})," ",y.rating]}),d.jsx("p",{className:"movieTitle",children:y.title})]})]},w))})})]})]})}),i==="searchResults"&&d.jsxs("div",{className:"search-results-container",children:[d.jsxs("h3",{children:["Found ",n.length,' results for "',t,'"']}),d.jsx("div",{className:"searchResultsContainer",children:n.map((y,w)=>d.jsxs("div",{className:"trending-movieContainer",onMouseEnter:()=>c(w),onMouseLeave:()=>f(w),children:[d.jsx("img",{src:window.innerWidth<=768?y.thumbnail.regular.small:y.thumbnail.regular.large,alt:y.title}),d.jsx("div",{className:"bookMarkContainer",children:d.jsx("img",{src:y.isBookmarked?pt:rt,alt:"empty bookmarked",className:"emptyBookedIcon"})}),d.jsxs("div",{className:"play-container",style:{visibility:l[w]?"visible":"hidden"},children:[d.jsx("img",{src:it,alt:"play icon"}),d.jsx("p",{className:"play-text",children:"Play"})]}),d.jsxs("div",{className:"movie-descriptionContainer",children:[d.jsxs("div",{className:"content",children:[y.year," ",d.jsx("div",{className:"ovalDot"})," ",d.jsx("img",{src:We,alt:"movie icon"})," ",y.category," ",d.jsx("div",{className:"ovalDot"})," ",y.rating]}),d.jsx("p",{className:"movieTitle",children:y.title})]})]},w))})]})]})})},KI=()=>{const[t,e]=S.useState("HOME"),n=[{icon:FI,component:"HOME"},{icon:We,component:"MOVIES"},{icon:jI,component:"TVSERIES"},{icon:bI,component:"BOOKMARKED"}],r=l=>{e(l)},i={filter:"invert(0) brightness(100)",transition:"all 0.5s"},s={filter:""},[o,a]=S.useState(!0);return S.useEffect(()=>{const l=setTimeout(()=>{a(!1)},3e3);return()=>clearTimeout(l)},[]),d.jsx(d.Fragment,{children:d.jsxs("div",{className:`main-container ${o?"loading":""}`,children:[o&&d.jsx("div",{className:"preloader-container",children:d.jsxs("div",{className:"wrap",children:[d.jsx("div",{className:"ball"}),d.jsx("div",{className:"ball"}),d.jsx("div",{className:"ball"})]})}),d.jsxs("div",{className:"navContainer",children:[d.jsx("header",{children:d.jsx("img",{src:Jh,alt:"logo"})}),d.jsx("nav",{className:"myNavlist",children:n.map((l,u)=>d.jsx("div",{onClick:()=>r(l.component),children:d.jsx("img",{src:l.icon,alt:"nav list icons",style:t===l.component?i:s})},u))}),d.jsx("div",{className:"imageContainer",children:d.jsx("img",{src:VI,alt:"avatar image of the persons icon"})})]}),d.jsx($I,{children:d.jsxs("div",{className:"entertainmentSection",children:[t==="HOME"&&d.jsx(BI,{}),t==="MOVIES"&&d.jsx(HI,{}),t==="TVSERIES"&&d.jsx(zI,{}),t==="BOOKMARKED"&&d.jsx(WI,{})]})})]})})};function GI(){return d.jsx(d.Fragment,{children:d.jsx(O0,{children:d.jsxs(R0,{children:[d.jsx(ts,{index:!0,element:d.jsx(Sd,{})}),d.jsx(ts,{path:"/entertainment",element:d.jsx(KI,{})}),d.jsx(ts,{path:"/login",element:d.jsx(Sd,{})})]})})})}Zo.createRoot(document.getElementById("root")).render(d.jsx(Dd.StrictMode,{children:d.jsx(GI,{})}));
