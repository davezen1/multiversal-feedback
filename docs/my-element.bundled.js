/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(t,s,e=null)=>{for(;s!==e;){const e=s.nextSibling;t.removeChild(s),s=e}},e=`{{lit-${String(Math.random()).slice(2)}}}`,i=`\x3c!--${e}--\x3e`,n=new RegExp(`${e}|${i}`);class o{constructor(t,s){this.parts=[],this.element=s;const i=[],o=[],h=document.createTreeWalker(s.content,133,null,!1);let a=0,u=-1,d=0;const{strings:p,values:{length:f}}=t;for(;d<f;){const t=h.nextNode();if(null!==t){if(u++,1===t.nodeType){if(t.hasAttributes()){const s=t.attributes,{length:e}=s;let i=0;for(let t=0;t<e;t++)r(s[t].name,"$lit$")&&i++;for(;i-- >0;){const s=p[d],e=l.exec(s)[2],i=e.toLowerCase()+"$lit$",o=t.getAttribute(i);t.removeAttribute(i);const r=o.split(n);this.parts.push({type:"attribute",index:u,name:e,strings:r}),d+=r.length-1}}"TEMPLATE"===t.tagName&&(o.push(t),h.currentNode=t.content)}else if(3===t.nodeType){const s=t.data;if(s.indexOf(e)>=0){const e=t.parentNode,o=s.split(n),h=o.length-1;for(let s=0;s<h;s++){let i,n=o[s];if(""===n)i=c();else{const t=l.exec(n);null!==t&&r(t[2],"$lit$")&&(n=n.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(n)}e.insertBefore(i,t),this.parts.push({type:"node",index:++u})}""===o[h]?(e.insertBefore(c(),t),i.push(t)):t.data=o[h],d+=h}}else if(8===t.nodeType)if(t.data===e){const s=t.parentNode;null!==t.previousSibling&&u!==a||(u++,s.insertBefore(c(),t)),a=u,this.parts.push({type:"node",index:u}),null===t.nextSibling?t.data="":(i.push(t),u--),d++}else{let s=-1;for(;-1!==(s=t.data.indexOf(e,s+1));)this.parts.push({type:"node",index:-1}),d++}}else h.currentNode=o.pop()}for(const t of i)t.parentNode.removeChild(t)}}const r=(t,s)=>{const e=t.length-s.length;return e>=0&&t.slice(e)===s},h=t=>-1!==t.index,c=()=>document.createComment(""),l=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function a(t,s){const{element:{content:e},parts:i}=t,n=document.createTreeWalker(e,133,null,!1);let o=d(i),r=i[o],h=-1,c=0;const l=[];let a=null;for(;n.nextNode();){h++;const t=n.currentNode;for(t.previousSibling===a&&(a=null),s.has(t)&&(l.push(t),null===a&&(a=t)),null!==a&&c++;void 0!==r&&r.index===h;)r.index=null!==a?-1:r.index-c,o=d(i,o),r=i[o]}l.forEach(t=>t.parentNode.removeChild(t))}const u=t=>{let s=11===t.nodeType?0:1;const e=document.createTreeWalker(t,133,null,!1);for(;e.nextNode();)s++;return s},d=(t,s=-1)=>{for(let e=s+1;e<t.length;e++){const s=t[e];if(h(s))return e}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const p=new WeakMap,f=t=>"function"==typeof t&&p.has(t),m={},w={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class y{constructor(t,s,e){this.t=[],this.template=t,this.processor=s,this.options=e}update(t){let s=0;for(const e of this.t)void 0!==e&&e.setValue(t[s]),s++;for(const t of this.t)void 0!==t&&t.commit()}_clone(){const s=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,n=document.createTreeWalker(s,133,null,!1);let o,r=0,c=0,l=n.nextNode();for(;r<i.length;)if(o=i[r],h(o)){for(;c<o.index;)c++,"TEMPLATE"===l.nodeName&&(e.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=e.pop(),l=n.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.t.push(t)}else this.t.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));r++}else this.t.push(void 0),r++;return t&&(document.adoptNode(s),customElements.upgrade(s)),s}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const b=` ${e} `;class g{constructor(t,s,e,i){this.strings=t,this.values=s,this.type=e,this.processor=i}getHTML(){const t=this.strings.length-1;let s="",n=!1;for(let o=0;o<t;o++){const t=this.strings[o],r=t.lastIndexOf("\x3c!--");n=(r>-1||n)&&-1===t.indexOf("--\x3e",r+1);const h=l.exec(t);s+=null===h?t+(n?b:i):t.substr(0,h.index)+h[1]+h[2]+"$lit$"+h[3]+e}return s+=this.strings[t],s}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const v=t=>null===t||!("object"==typeof t||"function"==typeof t),x=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class S{constructor(t,s,e){this.dirty=!0,this.element=t,this.name=s,this.strings=e,this.parts=[];for(let t=0;t<e.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new _(this)}_getValue(){const t=this.strings,s=t.length-1;let e="";for(let i=0;i<s;i++){e+=t[i];const s=this.parts[i];if(void 0!==s){const t=s.value;if(v(t)||!x(t))e+="string"==typeof t?t:String(t);else for(const s of t)e+="string"==typeof s?s:String(s)}}return e+=t[s],e}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class _{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===m||v(t)&&t===this.value||(this.value=t,f(t)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const t=this.value;this.value=m,t(this)}this.value!==m&&this.committer.commit()}}class C{constructor(t){this.value=void 0,this.s=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(c()),this.endNode=t.appendChild(c())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.i(this.startNode=c()),t.i(this.endNode=c())}insertAfterPart(t){t.i(this.startNode=c()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.s=t}commit(){if(null===this.startNode.parentNode)return;for(;f(this.s);){const t=this.s;this.s=m,t(this)}const t=this.s;t!==m&&(v(t)?t!==this.value&&this.o(t):t instanceof g?this.h(t):t instanceof Node?this.l(t):x(t)?this.u(t):t===w?(this.value=w,this.clear()):this.o(t))}i(t){this.endNode.parentNode.insertBefore(t,this.endNode)}l(t){this.value!==t&&(this.clear(),this.i(t),this.value=t)}o(t){const s=this.startNode.nextSibling,e="string"==typeof(t=null==t?"":t)?t:String(t);s===this.endNode.previousSibling&&3===s.nodeType?s.data=e:this.l(document.createTextNode(e)),this.value=t}h(t){const s=this.options.templateFactory(t);if(this.value instanceof y&&this.value.template===s)this.value.update(t.values);else{const e=new y(s,t.processor,this.options),i=e._clone();e.update(t.values),this.l(i),this.value=e}}u(t){Array.isArray(this.value)||(this.value=[],this.clear());const s=this.value;let e,i=0;for(const n of t)e=s[i],void 0===e&&(e=new C(this.options),s.push(e),0===i?e.appendIntoPart(this):e.insertAfterPart(s[i-1])),e.setValue(n),e.commit(),i++;i<s.length&&(s.length=i,this.clear(e&&e.endNode))}clear(t=this.startNode){s(this.startNode.parentNode,t.nextSibling,this.endNode)}}class ${constructor(t,s,e){if(this.value=void 0,this.s=void 0,2!==e.length||""!==e[0]||""!==e[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=s,this.strings=e}setValue(t){this.s=t}commit(){for(;f(this.s);){const t=this.s;this.s=m,t(this)}if(this.s===m)return;const t=!!this.s;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.s=m}}class A extends S{constructor(t,s,e){super(t,s,e),this.single=2===e.length&&""===e[0]&&""===e[1]}_createPart(){return new P(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class P extends _{}let M=!1;(()=>{try{const t={get capture(){return M=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class k{constructor(t,s,e){this.value=void 0,this.s=void 0,this.element=t,this.eventName=s,this.eventContext=e,this.p=t=>this.handleEvent(t)}setValue(t){this.s=t}commit(){for(;f(this.s);){const t=this.s;this.s=m,t(this)}if(this.s===m)return;const t=this.s,s=this.value,e=null==t||null!=s&&(t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive),i=null!=t&&(null==s||e);e&&this.element.removeEventListener(this.eventName,this.p,this.m),i&&(this.m=E(t),this.element.addEventListener(this.eventName,this.p,this.m)),this.value=t,this.s=m}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const E=t=>t&&(M?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function T(t){let s=U.get(t.type);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},U.set(t.type,s));let i=s.stringsArray.get(t.strings);if(void 0!==i)return i;const n=t.strings.join(e);return i=s.keyString.get(n),void 0===i&&(i=new o(t,t.getTemplateElement()),s.keyString.set(n,i)),s.stringsArray.set(t.strings,i),i}const U=new Map,j=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const O=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,s,e,i){const n=s[0];if("."===n){return new A(t,s.slice(1),e).parts}return"@"===n?[new k(t,s.slice(1),i.eventContext)]:"?"===n?[new $(t,s.slice(1),e)]:new S(t,s,e).parts}handleTextExpression(t){return new C(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const F=(t,...s)=>new g(t,s,"html",O)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,N=(t,s)=>`${t}--${s}`;let V=!0;void 0===window.ShadyCSS?V=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),V=!1);const q=t=>s=>{const i=N(s.type,t);let n=U.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},U.set(i,n));let r=n.stringsArray.get(s.strings);if(void 0!==r)return r;const h=s.strings.join(e);if(r=n.keyString.get(h),void 0===r){const e=s.getTemplateElement();V&&window.ShadyCSS.prepareTemplateDom(e,t),r=new o(s,e),n.keyString.set(h,r)}return n.stringsArray.set(s.strings,r),r},I=["html","svg"],R=new Set,z=(t,s,e)=>{R.add(t);const i=e?e.element:document.createElement("template"),n=s.querySelectorAll("style"),{length:o}=n;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(i,t);const r=document.createElement("style");for(let t=0;t<o;t++){const s=n[t];s.parentNode.removeChild(s),r.textContent+=s.textContent}(t=>{I.forEach(s=>{const e=U.get(N(s,t));void 0!==e&&e.keyString.forEach(t=>{const{element:{content:s}}=t,e=new Set;Array.from(s.querySelectorAll("style")).forEach(t=>{e.add(t)}),a(t,e)})})})(t);const h=i.content;e?function(t,s,e=null){const{element:{content:i},parts:n}=t;if(null==e)return void i.appendChild(s);const o=document.createTreeWalker(i,133,null,!1);let r=d(n),h=0,c=-1;for(;o.nextNode();){for(c++,o.currentNode===e&&(h=u(s),e.parentNode.insertBefore(s,e));-1!==r&&n[r].index===c;){if(h>0){for(;-1!==r;)n[r].index+=h,r=d(n,r);return}r=d(n,r)}}}(e,r,h.firstChild):h.insertBefore(r,h.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const c=h.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)s.insertBefore(c.cloneNode(!0),s.firstChild);else if(e){h.insertBefore(r,h.firstChild);const t=new Set;t.add(r),a(e,t)}};window.JSCompiler_renameProperty=(t,s)=>t;const D={toAttribute(t,s){switch(s){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,s){switch(s){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},J=(t,s)=>s!==t&&(s==s||t==t),B={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:J};class H extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((s,e)=>{const i=this._attributeNameForProperty(e,s);void 0!==i&&(this._attributeToPropertyMap.set(i,e),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,s)=>this._classProperties.set(s,t))}}static createProperty(t,s=B){if(this._ensureClassProperties(),this._classProperties.set(t,s),s.noAccessor||this.prototype.hasOwnProperty(t))return;const e="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,e,s);void 0!==i&&Object.defineProperty(this.prototype,t,i)}static getPropertyDescriptor(t,s,e){return{get(){return this[s]},set(e){const i=this[t];this[s]=e,this._requestUpdate(t,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||B}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,s=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const e of s)this.createProperty(e,t[e])}}static _attributeNameForProperty(t,s){const e=s.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,s,e=J){return e(t,s)}static _propertyValueFromAttribute(t,s){const e=s.type,i=s.converter||D,n="function"==typeof i?i:i.fromAttribute;return n?n(t,e):t}static _propertyValueToAttribute(t,s){if(void 0===s.reflect)return;const e=s.type,i=s.converter;return(i&&i.toAttribute||D.toAttribute)(t,e)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,s)=>{if(this.hasOwnProperty(s)){const t=this[s];delete this[s],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(s,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,s)=>this[s]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,s,e){s!==e&&this._attributeToProperty(t,e)}_propertyToAttribute(t,s,e=B){const i=this.constructor,n=i._attributeNameForProperty(t,e);if(void 0!==n){const t=i._propertyValueToAttribute(s,e);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,s){if(8&this._updateState)return;const e=this.constructor,i=e._attributeToPropertyMap.get(t);if(void 0!==i){const t=e.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=e._propertyValueFromAttribute(s,t),this._updateState=-17&this._updateState}}_requestUpdate(t,s){let e=!0;if(void 0!==t){const i=this.constructor,n=i.getPropertyOptions(t);i._valueHasChanged(this[t],s,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,s),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):e=!1}!this._hasRequestedUpdate&&e&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,s){return this._requestUpdate(t,s),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const s=this._changedProperties;try{t=this.shouldUpdate(s),t?this.update(s):this._markUpdated()}catch(s){throw t=!1,this._markUpdated(),s}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(s)),this.updated(s))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,s)=>this._propertyToAttribute(s,this[s],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}H.finalized=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const L="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol();class G{constructor(t,s){if(s!==W)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(L?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const K=(t,...s)=>{const e=s.reduce((s,e,i)=>s+(t=>{if(t instanceof G)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(e)+t[i+1],t[0]);return new G(e,W)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const Q={};class X extends H{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const s=(t,e)=>t.reduceRight((t,e)=>Array.isArray(e)?s(e,t):(t.add(e),t),e),e=s(t,new Set),i=[];e.forEach(t=>i.unshift(t)),this._styles=i}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?L?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const s=this.render();super.update(t),s!==Q&&this.constructor.render(s,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const s=document.createElement("style");s.textContent=t.cssText,this.renderRoot.appendChild(s)}))}render(){return Q}}X.finalized=!0,X.render=(t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const n=i.scopeName,o=j.has(e),r=V&&11===e.nodeType&&!!e.host,h=r&&!R.has(n),c=h?document.createDocumentFragment():e;if(((t,e,i)=>{let n=j.get(e);void 0===n&&(s(e,e.firstChild),j.set(e,n=new C(Object.assign({templateFactory:T},i))),n.appendInto(e)),n.setValue(t),n.commit()})(t,c,Object.assign({templateFactory:q(n)},i)),h){const t=j.get(c);j.delete(c);const i=t.value instanceof y?t.value.template:void 0;z(n,c,i),s(e,e.firstChild),e.appendChild(c),j.set(e,t)}!o&&r&&window.ShadyCSS.styleElement(e.host)};
/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class Y extends X{static get styles(){return K`
      // :host {
      //   display: block;
      //   border: solid 1px gray;
      //   padding: 16px;
      //   max-width: 800px;
      // }
      dialog::backdrop {
        background: repeating-linear-gradient(
          45deg,
          rgba(255, 0, 0, 0.2),
          rgba(255, 0, 0, 0.2) 1px,
          rgba(255, 0, 0, 0.3) 1px,
          rgba(255, 0, 0, 0.3) 20px
        );
      }
    `}static get properties(){return{title:{type:String},submitFunction:{type:Function}}}constructor(){super(),this.submitFunction=t=>{t.preventDefault(),console.log("Create and pass submit function.")}}getForm(){console.log("getform");var t=this.shadowRoot.querySelector("form");console.log("inside form"+t);for(const s of t)console.log(s);return t}render(){return F`
      <dialog id="favDialog">
        <h1>${this.title}</h1>

        <form
          id="metaverseForm"
          method="dialog"
          @submit="${this.submitFunction}"
        >
          <p>
            <label
              >Topic:
              <select>
                <option></option>
                <option>Topic 1</option>
                <option>New Customer</option>
                <option>Something Else</option>
              </select>
            </label>
          </p>
          <p>
            <input
              type="email"
              autocomplete="on"
              autofocus
              name="userid"
              placeholder="email"
              required
              size="32"
              maxlength="64"
            /><br />

            <label for="story">Comments:</label>
            <textarea id="story" name="story" rows="5" cols="33"></textarea>
          </p>
          <menu>
            <button value="cancel">Cancel</button>
            <button type="submit" id="confirmBtn" value="default">Send</button>
          </menu>
        </form>
      </dialog>
    `}showDialog(){console.log("Here"),this.renderRoot.getElementById("favDialog").showModal()}}window.customElements.define("multiversal-feedback",Y);export{Y as MultiversalFeedback};
