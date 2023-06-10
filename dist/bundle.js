!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ColorPlugin=e():t.ColorPlugin=e()}(self,(()=>(()=>{var t={424:(t,e,n)=>{(e=n(645)(!1)).push([t.id,".picker_wrapper.popup {\n  z-index: 99;\n  width: 170px;\n  margin: 0;\n  box-shadow: 0 0 10px 1px #eaeaea;\n  background: #ffffff;\n}\n\n.picker_arrow {\n  display: none;\n}\n\n.layout_default .picker_slider, .layout_default .picker_selector {\n  padding: 5px;\n}\n\n.colorPlugin.ce-inline-tool {\n  width: 32px;\n  border-radius: 3px;\n}\n\n.colorPlugin.ce-inline-tool--active svg {\n  fill: #3c99ff;\n}\n\n#color-left-btn {\n  height: 35px;\n  width: 18px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n}\n\n#color-left-btn:hover {\n  border-radius: 5px 0 0 5px;\n  background: rgba(203, 203, 203, 0.49);\n}\n\n#color-text {\n  padding: 0 4px;\n}\n\n#color-btn-text {\n  height: 15px;\n}\n\n",""]),t.exports=e},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n,o,i,r=t[1]||"",s=t[3];if(!s)return r;if(e&&"function"==typeof btoa){var c=(n=s,o=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(i," */")),l=s.sources.map((function(t){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(t," */")}));return[r].concat(l).concat([c]).join("\n")}return[r].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(i[s]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);o&&i[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},548:(t,e,n)=>{var o=n(379),i=n(424);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.id,i,""]]);o(i,{insert:"head",singleton:!1}),t.exports=i.locals||{}},379:(t,e,n)=>{"use strict";var o,i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),r=[];function s(t){for(var e=-1,n=0;n<r.length;n++)if(r[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},o=[],i=0;i<t.length;i++){var c=t[i],l=e.base?c[0]+e.base:c[0],a=n[l]||0,p="".concat(l," ").concat(a);n[l]=a+1;var d=s(p),u={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(r[d].references++,r[d].updater(u)):r.push({identifier:p,updater:g(u,e),references:1}),o.push(p)}return o}function l(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var s=i(t.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var a,p=(a=[],function(t,e){return a[t]=e,a.filter(Boolean).join("\n")});function d(t,e,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=p(e,i);else{var r=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function u(t,e,n){var o=n.css,i=n.media,r=n.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var h=null,f=0;function g(t,e){var n,o,i;if(e.singleton){var r=f++;n=h||(h=l(e)),o=d.bind(null,n,r,!1),i=d.bind(null,n,r,!0)}else n=l(e),o=u.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<n.length;o++){var i=s(n[o]);r[i].references--}for(var l=c(t,e),a=0;a<n.length;a++){var p=s(n[a]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}n=l}}}},452:t=>{t.exports={markerIcon:'<svg fill="#000000" height="34px" width="34px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" \n\t viewBox="0 0 491.644 491.644" xml:space="preserve">\n<g>\n\t<path d="M456.623,2.282c-42.758-20.283-141.107,96.84-223.473,264.224c-2.35,4.776-2.686,10.294-0.936,15.32\n\t\tc1.75,5.026,5.442,9.145,10.251,11.426L366.758,352.2c4.809,2.281,10.332,2.538,15.333,0.714c5.001-1.825,9.059-5.579,11.272-10.42\n\t\tC470.883,172.829,499.385,22.562,456.623,2.282z"/>\n\t<path d="M34.71,461.799l-17.257,16.708c-2.225,2.17-2.934,5.475-1.773,8.363c1.179,2.886,3.985,4.773,7.099,4.773h160.887\n\t\tc-1.364-5.043-0.921-10.445,1.391-15.306l7.919-16.692H40.036C38.036,459.646,36.129,460.419,34.71,461.799z"/>\n\t<path d="M264.766,448.864l-32.615-15.458c-1.046-0.502-2.161-0.744-3.257-0.744c-2.87,0-5.611,1.614-6.901,4.372l-22.001,46.384\n\t\tc-0.871,1.789-0.723,3.895,0.341,5.564c1.046,1.661,2.888,2.661,4.855,2.661h0.046l44.275-0.378\n\t\tc2.206-0.016,4.206-1.299,5.159-3.292l13.724-28.925c0.856-1.838,0.967-3.936,0.29-5.846\n\t\tC268.004,451.292,266.585,449.728,264.766,448.864z"/>\n\t<path d="M348.445,366.038l-112.572-51.392c-8.909-4.067-19.434-0.227-23.63,8.622c-2.551,5.378-3.58,11.353-2.975,17.275\n\t\tl5.2,50.909c0.703,6.882,4.983,12.884,11.261,15.792l60.031,27.797c6.688,3.097,14.548,2.179,20.343-2.375l45.983-36.137\n\t\tc4.931-3.875,7.487-10.041,6.743-16.269C358.086,374.032,354.151,368.642,348.445,366.038z"/>\n</g>\n</svg>',textIcon:'<svg fill="#000000" viewBox="-6 0 512 512" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><title>text</title><path d="M365 432L328 352 172 352 135 432 64 432 227 80 272 80 436 432 365 432ZM201 288L299 288 250 183 201 288Z"></path></g></svg>'}},138:(t,e,n)=>{const o=n(376),{markerIcon:i,textIcon:r}=n(452),{getDefaultColorCache:s,handleCSSVariables:c}=n(697);n(548).toString(),t.exports=class{constructor({config:t,api:e}){this.api=e,this.config=t,this.clickedOnLeft=!1,this.pluginType=this.config.type||"text",this.parentTag="marker"===this.pluginType?"MARK":"FONT",this.hasCustomPicker=this.config.customPicker||!1,this.color=c(s(this.config.defaultColor,this.pluginType)),this.picker=null,this.icon=null,this.button=null,this.iconClasses={base:this.api.styles.inlineToolButton,active:this.api.styles.inlineToolButtonActive}}static get isInline(){return!0}render(){return this.button=document.createElement("button"),this.button.type="button",this.button.classList.add("colorPlugin"),this.button.classList.add(this.iconClasses.base),this.button.appendChild(this.createLeftButton()),this.button.appendChild(this.createRightButton(this)),this.button}createLeftButton(){return this.icon||(this.icon=document.createElement("div"),this.icon.id="color-left-btn",this.icon.appendChild(this.createButtonIcon()),this.icon.addEventListener("click",(()=>this.clickedOnLeft=!0))),this.icon}createButtonIcon(){const t=document.createElement("div");t.id="color-btn-text";const e="marker"===this.pluginType?i:r;return t.innerHTML=this.config.icon||e,t}createRightButton(t){return this.picker||(this.picker=new o.ColorPlugin({onColorPicked:function(e){t.color=e},hasCustomPicker:this.hasCustomPicker,defaultColor:this.config.defaultColor,colorCollections:this.config.colorCollections,type:this.pluginType})),this.picker}surround(t){if(!t)return;const e=this.api.selection.findParentTag("SPAN");e&&this.unwrap(e);const n=this.api.selection.findParentTag(this.parentTag);n?this.unwrap(n):this.wrap(t),this.clickedOnLeft=!1}wrap(t){const e=t.extractContents(),n=document.createElement(this.parentTag);n.appendChild(e),t.insertNode(n),"marker"===this.pluginType?this.wrapMarker(n):this.wrapTextColor(n),this.api.selection.expandToTag(n)}wrapMarker(t){t.style.backgroundColor=this.color;const e=this.api.selection.findParentTag("FONT");e&&(t.style.color=e.style.color)}wrapTextColor(t){t.style.color=this.color}unwrap(t){this.api.selection.expandToTag(t);const e=window.getSelection(),n=e.getRangeAt(0),o=n.extractContents();this.clickedOnLeft?this.removeWrapper(t):this.updateWrapper(t),n.insertNode(o),e.removeAllRanges(),e.addRange(n)}updateWrapper(t){"marker"===this.pluginType?t.style.backgroundColor=this.color:t.style.color=this.color}removeWrapper(t){t.parentNode.removeChild(t)}checkState(){const t=this.api.selection.findParentTag("SPAN"),e=this.api.selection.findParentTag(this.parentTag);let n=t?this.handleLegacyWrapper(t,e):e;return this.button.classList.toggle(this.iconClasses.active,!!n),!!n}handleLegacyWrapper(t,e){return"marker"===this.pluginType?t:e&t}static get sanitize(){return{font:!0,span:!0,mark:!0}}clear(){this.picker=null,this.icon=null}}},376:(t,e,n)=>{"use strict";n.r(e),n.d(e,{ColorPlugin:()=>r});var o=n(697);const i=["#ff1300","#EC7878","#9C27B0","#673AB7","#3F51B5","#0070FF","#03A9F4","#00BCD4","#4CAF50","#8BC34A","#CDDC39","#FFE500","#FFBF00","#FF9800","#795548","#9E9E9E","#5A5A5A","#FFF"];class r extends HTMLElement{static get observedAttributes(){return["disabled","dir"]}constructor(t){super();const e=this.attachShadow({mode:"open"});this.colorCollections=t.colorCollections||i,this.onColorPicked=t.onColorPicked,this.defaulColor=(0,o.handleCSSVariables)(t.defaultColor||this.colorCollections[0]),this.pluginType=t.type,this.hasCustomPicker=t.hasCustomPicker,this.customColor=(0,o.getCustomColorCache)(this.pluginType),e.innerHTML=`\n        <style>\n        :host{\n            display:inline-block;\n            width:15px;\n            font-size:14px;\n            border: none;\n        }\n        :host([block]){\n            display:block;\n        }\n        :host([disabled]){\n            pointer-events:none;\n        }\n        \n        :host(:focus-within) .color-section-popover,:host(:hover) .color-section-popover{ \n            z-index: 2;\n        }\n        input[type="color"]{\n            -webkit-appearance: none;\n            outline: none;\n            border: none;\n        }\n        .color-section-popover{\n            width: 12px;\n            height: 35px;\n            padding-right: 1px;\n        }\n        .color-section-popover:hover {\n            border-radius: 0 5px 5px 0;\n            background: rgba(203, 203, 203, 0.49);\n        }\n        .color-btn {\n        \tdisplay: flex;\n        \tposition: relative;\n            border: 1px solid #cab9b9;\n            margin: 18px 3px 2px 3px;\n            width: 7px;\n            height: 7px;\n            opacity: 0.9;\n            /*padding: 1px 0 1px 0;*/\n            color: var(--themeColor, #42b983);\n            background: var(--themeColor, #42b983);\n            font-weight: bolder;\n            border-radius: 2px;\n        }\n        .color-btn:hover {\n            opacity: 1;\n            z-index: auto;\n        }\n        .color-section-popover{\n            display:block;\n        }\n        .color-section-popcon{\n            position: fixed;\n            left: 0;\n            min-width: 100%;\n            background-color: #ffffff;\n            transform: translate(0,20px) scale(1);\n        }\n        #custom-picker {\n            position: relative;\n            top: -1px;\n            background-color: rgb(250, 250, 250);\n            border-color: rgb(255 118 21) rgb(245 80 80 / 74%) #89c1c9 #95d5b6;\n            border-width: 3px;\n            border-radius: 8px;\n            height: 18px;\n        }\n        .pop-footer{\n            display:flex;\n            justify-content:flex-end;\n            padding:0 .8em .8em;\n        }\n        .pop-footer button{\n            font-size: .8em;\n            margin-left: .8em;\n        }\n        .color-btn::before{\n            content:'';\n            position:absolute;\n            left:5px;\n            top:5px;\n            right:5px;\n            bottom:5px;\n            z-index:-1;\n            background: linear-gradient(45deg, #ddd 25%,transparent 0,transparent 75%,#ddd 0 ), linear-gradient(45deg, #ddd 25%, transparent 0, transparent 75%, #ddd 0);\n            background-position: 0 0,5px 5px;\n            background-size: 10px 10px;\n        }\n        .color-sign {\n           max-width: 220px;\n           padding: 10px;\n           display:grid;\n           cursor: default;\n           grid-template-columns: repeat(auto-fit, minmax(15px, 1fr));\n           grid-gap: 10px;     \n        }\n        .color-sign>button {\n            position: relative;\n            width: 16px;\n            height: 16px;\n            border-radius: 6px;\n            border: 1px solid #b8b9b49e;\n            outline: 0;\n            opacity: 0.9;\n        }\n        .color-sign>button:hover {\n            cursor: pointer;\n            opacity: 1;\n        }\n        .color-section {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n        }\n        .color-fire-btn {\n            font-size: 17px;\n            font-weight: bold;\n            height: 28px;\n            padding-top: 8px;\n            padding-right: 1px;\n            margin-left: 3px;\n            padding-left: 3px;\n            border-radius: 5px 0 0 5px;\n        }\n        .color-fire-btn:hover {\n            font-size: 17px;\n            font-weight: bold;\n            background: rgba(203, 203, 203, 0.49);\n            border-radius: 5px 0 0 5px;\n        }\n        </style>\n        <section class="color-section">\n            <popover-block id="popover" class="color-section-popover" ${this.dir?"dir='"+this.dir+"'":""}>\n                <button-block class="color-btn" id="color-btn" ${this.disabled?"disabled":""}></button-block>\n                <popcon-block id="popcon" class="color-section-popcon">\n                    <div class="color-sign" id="colors">\n                        ${this.hasCustomPicker?'<button id="custom-picker" class="rainbow-mask"/>':""}\n                        ${this.colorCollections.map((t=>'<button class="color-cube" style="background-color:'+t+'" data-color='+t+"></button>")).join("")}\n                    </div>\n                </popcon-block>\n            </popover-block>\n        </section>`}focus(){this.colorBtn.focus()}connectedCallback(){this.popcon=this.shadowRoot.getElementById("popcon"),this.popover=this.shadowRoot.getElementById("popover"),this.colorBtn=this.shadowRoot.getElementById("color-btn"),this.colors=this.shadowRoot.getElementById("colors"),this.colors.addEventListener("click",(t=>{const e=t.target.closest("button");e&&"custom-picker"!==e.id&&(this.nativeclick=!0,this.value=(0,o.handleCSSVariables)(e.dataset.color),this.onColorPicked(this.value))})),this.popover instanceof HTMLElement&&(console.log("asd"),this.popover.addEventListener("click",(()=>this.closeConverter()))),this.hasCustomPicker&&this.setupCustomPicker(),this.value=this.defaultvalue}closeConverter(){document.getElementsByClassName(o.CONVERTER_PANEL)[0]&&document.getElementsByClassName(o.CONVERTER_BTN)[0]?.click()}disconnectedCallback(){this.pickerInput&&document.body.removeChild(this.pickerInput)}setupCustomPicker(){let t=!1;this.customPicker=this.shadowRoot.getElementById("custom-picker");const e=this.customPicker;e.style.backgroundColor=this.customColor,this.customPicker.addEventListener("click",(n=>{if(t)return void(t=!1);this.pickerInput&&document.body.removeChild(this.pickerInput),this.pickerInput=document.createElement("input");const i=this.pickerInput,r=this.popcon.getBoundingClientRect();i.setAttribute("type","color"),i.value=this.customColor,i.style.position="fixed",i.style.left=`${r.x+3}px`,i.style.top=`${r.y+10}px`,i.style.pointerEvents="none",i.style.zIndex="999",i.style.opacity="0",i.addEventListener("input",(0,o.throttle)((n=>{this.nativeclick=!0,this.value=(0,o.handleCSSVariables)(n.target.value),this.onColorPicked(this.value),(0,o.setCustomColorCache)(this.value,this.pluginType),e.style.backgroundColor=this.value,t=!0,e.click()}),30)),document.body.appendChild(i),setTimeout((()=>{i.focus(),i.click()}),0)}))}get defaultvalue(){return this.defaulColor}get value(){return this.$value}get type(){return this.getAttribute("type")}get disabled(){return null!==this.getAttribute("disabled")}get dir(){return this.getAttribute("dir")}set dir(t){this.setAttribute("dir",t)}set disabled(t){null===t||!1===t?this.removeAttribute("disabled"):this.setAttribute("disabled","")}set defaultvalue(t){this.setAttribute("defaultvalue",t)}set value(t){t&&(this.$value=t,this.colorBtn.style.setProperty("--themeColor",this.nativeclick?(0,o.setDefaultColorCache)(t,this.pluginType):(0,o.getDefaultColorCache)(t,this.pluginType)),this.nativeclick?(this.nativeclick=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))):this.colorPane?this.colorPane.value=this.value:this.defaultvalue=this.value)}attributeChangedCallback(t,e,n){console.log(t,e,n,2),"disabled"===t&&this.colorBtn&&(null!=n?this.colorBtn.setAttribute("disabled","disabled"):this.colorBtn.removeAttribute("disabled")),"dir"===t&&this.popover&&null!=n&&(this.popover.dir=n)}}customElements.get("custom-section")||customElements.define("custom-section",r)},697:(t,e,n)=>{"use strict";n.r(e),n.d(e,{CONVERTER_BTN:()=>p,CONVERTER_PANEL:()=>d,getCustomColorCache:()=>a,getDefaultColorCache:()=>c,handleCSSVariables:()=>i,setCustomColorCache:()=>l,setDefaultColorCache:()=>s,throttle:()=>r});const o="editor-js-text-color-cache";function i(t){if(function(t){return("string"==typeof(e=t)||e instanceof String)&&t.includes("--");var e}(t)){const e=function(t){const e=/\((.*?)\)/.exec(t);if(e)return e[1]}(t);return function(t){return window.getComputedStyle(document.documentElement).getPropertyValue(t)}(e)}return t}function r(t,e){let n;return(...o)=>{n||(n=setTimeout((()=>{t(...o),n=null}),e))}}function s(t,e){return sessionStorage.setItem(`${o}-${e}`,JSON.stringify(t)),t}function c(t,e){const n=sessionStorage.getItem(`${o}-${e}`);return n?JSON.parse(n):t}function l(t,e){sessionStorage.setItem(`${o}-${e}-custom`,JSON.stringify(t))}function a(t){const e=sessionStorage.getItem(`${o}-${t}-custom`);return e?JSON.parse(e):null}const p="ce-inline-toolbar__dropdown",d="ce-conversion-toolbar--showed"}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={id:o,exports:{}};return t[o](r,r.exports,n),r.exports}return n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.nc=void 0,n(138)})()));