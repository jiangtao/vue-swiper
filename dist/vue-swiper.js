/*!
 * vue-swiper v0.5.0
 * Swiper component. Easy to use.
 * https://github.com/weilao/vue-swiper
 * @author weilao
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueSwiper=e():t.VueSwiper=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={exports:{},id:n,loaded:!1};return t[n].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var i={};return e.m=t,e.c=i,e.p="/",e(0)}([function(t,e,i){var n,s,r={};i(1),n=i(5),s=i(6),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports.default);var o="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;s&&(o.template=s),o.computed||(o.computed={}),Object.keys(r).forEach(function(t){var e=r[t];o.computed[t]=function(){return e}})},function(t,e,i){var n=i(2);"string"==typeof n&&(n=[[t.id,n,""]]);i(4)(n,{});n.locals&&(t.exports=n.locals)},function(t,e,i){e=t.exports=i(3)(),e.push([t.id,".swiper{position:relative;overflow:hidden}.swiper .swiper-wrap{display:-ms-flexbox;display:flex;width:100%;height:100%;transition:all 0ms ease}.swiper .swiper-wrap>div{overflow:hidden;-ms-flex-negative:0;flex-shrink:0;width:100%;height:100%}.swiper.horizontal .swiper-wrap{-ms-flex-direction:row;flex-direction:row}.swiper.vertical .swiper-wrap{-ms-flex-direction:column;flex-direction:column}.swiper .swiper-pagination{position:absolute}.swiper .swiper-pagination .swiper-pagination-bullet{width:8px;height:8px;border-radius:50%;background-color:#000;opacity:.2;transition:all .5s ease}.swiper .swiper-pagination .swiper-pagination-bullet.active{background:#007aff;opacity:1}.swiper.vertical .swiper-pagination{right:10px;top:50%;transform:translate3d(0,-50%,0)}.swiper.vertical .swiper-pagination .swiper-pagination-bullet{display:block;margin:6px 0}.swiper.horizontal .swiper-pagination{bottom:10px;width:100%;text-align:center}.swiper.horizontal .swiper-pagination .swiper-pagination-bullet{display:inline-block;margin:0 3px}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},s=0;s<this.length;s++){var r=this[s][0];"number"==typeof r&&(n[r]=!0)}for(s=0;s<e.length;s++){var o=e[s];"number"==typeof o[0]&&n[o[0]]||(i&&!o[2]?o[2]=i:i&&(o[2]="("+o[2]+") and ("+i+")"),t.push(o))}},t}},function(t,e,i){function n(t,e){for(var i=0;i<t.length;i++){var n=t[i],s=c[n.id];if(s){s.refs++;for(var r=0;r<s.parts.length;r++)s.parts[r](n.parts[r]);for(;r<n.parts.length;r++)s.parts.push(l(n.parts[r],e))}else{for(var o=[],r=0;r<n.parts.length;r++)o.push(l(n.parts[r],e));c[n.id]={id:n.id,refs:1,parts:o}}}}function s(t){for(var e=[],i={},n=0;n<t.length;n++){var s=t[n],r=s[0],o=s[1],a=s[2],l=s[3],h={css:o,media:a,sourceMap:l};i[r]?i[r].parts.push(h):e.push(i[r]={id:r,parts:[h]})}return e}function r(t,e){var i=f(),n=m[m.length-1];if("top"===t.insertAt)n?n.nextSibling?i.insertBefore(e,n.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),m.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(e)}}function o(t){t.parentNode.removeChild(t);var e=m.indexOf(t);e>=0&&m.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",r(t,e),e}function l(t,e){var i,n,s;if(e.singleton){var r=v++;i=g||(g=a(e)),n=h.bind(null,i,r,!1),s=h.bind(null,i,r,!0)}else i=a(e),n=u.bind(null,i),s=function(){o(i)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else s()}}function h(t,e,i,n){var s=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=w(e,s);else{var r=document.createTextNode(s),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(r,o[e]):t.appendChild(r)}}function u(t,e){var i=e.css,n=e.media,s=e.sourceMap;if(n&&t.setAttribute("media",n),s&&(i+="\n/*# sourceURL="+s.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var c={},d=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},p=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),f=d(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,v=0,m=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=p()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var i=s(t);return n(i,e),function(t){for(var r=[],o=0;o<i.length;o++){var a=i[o],l=c[a.id];l.refs--,r.push(l)}if(t){var h=s(t);n(h,e)}for(var o=0;o<r.length;o++){var l=r[o];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete c[l.id]}}}};var w=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="vertical",n="horizontal";e.default={props:{direction:{type:String,default:i,validator:function(t){return[i,n].indexOf(t)>-1}},mousewheelControl:{type:Boolean,default:!0},performanceMode:{type:Boolean,default:!1},paginationVisible:{type:Boolean,default:!1},paginationClickable:{type:Boolean,default:!1},loop:{type:Boolean,default:!1},speed:{type:Number,default:500}},data:function(){return{currentPage:1,lastPage:1,translateX:0,translateY:0,startTranslate:0,delta:0,dragging:!1,startPos:null,transitioning:!1,slideEls:[],translateOffset:0,transitionDuration:0}},ready:function(){this._onTouchMove=this._onTouchMove.bind(this),this._onTouchEnd=this._onTouchEnd.bind(this),this.slideEls=[].map.call(this.$els.swiperWrap.children,function(t){return t}),this.loop?this.$nextTick(function(){this._createLoop(),this.setPage(this.currentPage,!0)}):this.setPage(this.currentPage)},methods:{next:function(){var t=this.currentPage;t<this.slideEls.length||this.loop?this.setPage(t+1):this._revert()},prev:function(){var t=this.currentPage;t>1||this.loop?this.setPage(t-1):this._revert()},setPage:function(t,e){var i=this;if(this.lastPage=this.currentPage,0===t?this.currentPage=this.slideEls.length:t===this.slideEls.length+1?this.currentPage=1:this.currentPage=t,this.loop)0===this.delta&&this._setTranslate(i._getTranslateOfPage(this.lastPage)),setTimeout(function(){i._setTranslate(i._getTranslateOfPage(t)),e||i._onTransitionStart()},0);else{if(this._setTranslate(this._getTranslateOfPage(t)),e)return;this._onTransitionStart()}},isHorizontal:function(){return this.direction===n},isVertical:function(){return this.direction===i},_supportPassive:function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t},_onTouchStart:function(t){this.startPos=this._getTouchPos(t),this.delta=0,this.startTranslate=this._getTranslateOfPage(this.currentPage),this.startTime=(new Date).getTime(),this.dragging=!0,this.transitionDuration=0;var e=!!this._supportPassive()&&{passive:!1};document.addEventListener("touchmove",this._onTouchMove,e),document.addEventListener("touchend",this._onTouchEnd,e),document.addEventListener("mousemove",this._onTouchMove,e),document.addEventListener("mouseup",this._onTouchEnd,e)},_onTouchMove:function(t){this.delta=this._getTouchPos(t)-this.startPos,this.performanceMode||(this._setTranslate(this.startTranslate+this.delta),this.$emit("slider-move",this._getTranslate())),(this.isVertical()||this.isHorizontal()&&Math.abs(this.delta)>0)&&t.preventDefault()},_onTouchEnd:function(t){this.dragging=!1,this.transitionDuration=this.speed;var e=(new Date).getTime()-this.startTime<1e3;this.delta<-100||e&&this.delta<-15?this.next():this.delta>100||e&&this.delta>15?this.prev():this._revert(),document.removeEventListener("touchmove",this._onTouchMove),document.removeEventListener("touchend",this._onTouchEnd),document.removeEventListener("mousemove",this._onTouchMove),document.removeEventListener("mouseup",this._onTouchEnd)},_onWheel:function(t){this.mousewheelControl&&(this.transitioning||(t.deltaY>0?this.next():this.prev()),this._isPageChanged()&&t.preventDefault())},_revert:function(){this.setPage(this.currentPage)},_getTouchPos:function(t){var e=this.isHorizontal()?"pageX":"pageY";return t.changedTouches?t.changedTouches[0][e]:t[e]},_onTransitionStart:function(){this.transitioning=!0,this.transitionDuration=this.speed,this._isPageChanged()?this.$emit("slide-change-start",this.currentPage):this.$emit("slide-revert-start",this.currentPage)},_onTransitionEnd:function(){this.transitioning=!1,this.transitionDuration=0,this.delta=0,this._isPageChanged()?this.$emit("slide-change-end",this.currentPage):this.$emit("slide-revert-end",this.currentPage)},_isPageChanged:function(){return this.lastPage!==this.currentPage},_setTranslate:function(t){var e=this.isHorizontal()?"translateX":"translateY";this[e]=t},_getTranslate:function(){var t=this.isHorizontal()?"translateX":"translateY";return this[t]},_getTranslateOfPage:function(t){if(0===t)return 0;var e=this.isHorizontal()?"clientWidth":"clientHeight";return-[].reduce.call(this.slideEls,function(i,n,s){return s>t-2?i:i+n[e]},0)+this.translateOffset},_createLoop:function(){var t=this.isHorizontal()?"clientWidth":"clientHeight",e=this.$els.swiperWrap,i=e.firstElementChild.cloneNode(!0),n=e.lastElementChild.cloneNode(!0);e.insertBefore(n,e.firstElementChild),e.appendChild(i),this.translateOffset=-n[t]}}}},function(t,e){t.exports=" <div class=swiper :class=\"[direction, {'dragging': dragging}]\" @touchstart=_onTouchStart @mousedown=_onTouchStart @wheel=_onWheel> <div class=swiper-wrap v-el:swiper-wrap :style=\"{\n            'transform' : 'translate3d(' + translateX + 'px,' + translateY + 'px, 0)',\n            'transition-duration': transitionDuration + 'ms'\n         }\" @transitionend=_onTransitionEnd> <slot></slot> </div> <div class=swiper-pagination v-show=paginationVisible> <span class=swiper-pagination-bullet :class=\"{'active': $index+1===currentPage}\" v-for=\"slide in slideEls\" @click=\"paginationClickable && setPage($index+1)\"></span> </div> </div> "}])});