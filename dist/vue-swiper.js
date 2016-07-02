/*!
 * vue-swiper v0.4.0
 * Swiper component. Easy to use.
 * https://github.com/weilao/vue-swiper
 * @author weilao
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueSwiper=e():t.VueSwiper=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var i={};return e.m=t,e.c=i,e.p="/",e(0)}([function(t,e,i){var n,r;i(1),n=i(5),r=i(6),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,i){var n=i(2);"string"==typeof n&&(n=[[t.id,n,""]]);i(4)(n,{});n.locals&&(t.exports=n.locals)},function(t,e,i){e=t.exports=i(3)(),e.push([t.id,".swiper{position:relative;overflow:hidden}.swiper .swiper-wrap{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100%;-webkit-transition:all .5s ease;transition:all .5s ease}.swiper .swiper-wrap>div{overflow:hidden;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:100%;height:100%}.swiper.horizontal .swiper-wrap{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.swiper.vertical .swiper-wrap{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.swiper.dragging .swiper-wrap{-webkit-transition:none;transition:none}.swiper .swiper-pagination{position:absolute}.swiper .swiper-pagination .swiper-pagination-bullet{width:8px;height:8px;border-radius:50%;background-color:#000;opacity:.2;-webkit-transition:all .5s ease;transition:all .5s ease}.swiper .swiper-pagination .swiper-pagination-bullet.active{background:#007aff;opacity:1}.swiper.vertical .swiper-pagination{right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.swiper.vertical .swiper-pagination .swiper-pagination-bullet{display:block;margin:6px 0}.swiper.horizontal .swiper-pagination{bottom:10px;width:100%;text-align:center}.swiper.horizontal .swiper-pagination .swiper-pagination-bullet{display:inline-block;margin:0 3px}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var s=this[r][0];"number"==typeof s&&(n[s]=!0)}for(r=0;r<e.length;r++){var o=e[r];"number"==typeof o[0]&&n[o[0]]||(i&&!o[2]?o[2]=i:i&&(o[2]="("+o[2]+") and ("+i+")"),t.push(o))}},t}},function(t,e,i){function n(t,e){for(var i=0;i<t.length;i++){var n=t[i],r=d[n.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](n.parts[s]);for(;s<n.parts.length;s++)r.parts.push(l(n.parts[s],e))}else{for(var o=[],s=0;s<n.parts.length;s++)o.push(l(n.parts[s],e));d[n.id]={id:n.id,refs:1,parts:o}}}}function r(t){for(var e=[],i={},n=0;n<t.length;n++){var r=t[n],s=r[0],o=r[1],a=r[2],l=r[3],h={css:o,media:a,sourceMap:l};i[s]?i[s].parts.push(h):e.push(i[s]={id:s,parts:[h]})}return e}function s(t,e){var i=f(),n=m[m.length-1];if("top"===t.insertAt)n?n.nextSibling?i.insertBefore(e,n.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),m.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(e)}}function o(t){t.parentNode.removeChild(t);var e=m.indexOf(t);e>=0&&m.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",s(t,e),e}function l(t,e){var i,n,r;if(e.singleton){var s=v++;i=g||(g=a(e)),n=h.bind(null,i,s,!1),r=h.bind(null,i,s,!0)}else i=a(e),n=u.bind(null,i),r=function(){o(i)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else r()}}function h(t,e,i,n){var r=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=w(e,r);else{var s=document.createTextNode(r),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(s,o[e]):t.appendChild(s)}}function u(t,e){var i=e.css,n=e.media,r=e.sourceMap;if(n&&t.setAttribute("media",n),r&&(i+="\n/*# sourceURL="+r.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var d={},c=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},p=c(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),f=c(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,v=0,m=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=p()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var i=r(t);return n(i,e),function(t){for(var s=[],o=0;o<i.length;o++){var a=i[o],l=d[a.id];l.refs--,s.push(l)}if(t){var h=r(t);n(h,e)}for(var o=0;o<s.length;o++){var l=s[o];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete d[l.id]}}}};var w=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="vertical",n="horizontal";e["default"]={props:{direction:{type:String,"default":i,validator:function(t){return[i,n].indexOf(t)>-1}},mousewheelControl:{type:Boolean,"default":!0},performanceMode:{type:Boolean,"default":!1},paginationVisible:{type:Boolean,"default":!1},paginationClickable:{type:Boolean,"default":!1}},data:function(){return{currentPage:1,lastPage:1,translateX:0,translateY:0,startTranslateX:0,startTranslateY:0,delta:0,dragging:!1,startPos:null,transitioning:!1,slideEls:[]}},ready:function(){this._onTouchMove=this._onTouchMove.bind(this),this._onTouchEnd=this._onTouchEnd.bind(this),this.slideEls=this.$els.swiperWrap.children},methods:{next:function(){var t=this.currentPage;t<this.slideEls.length?(t++,this.setPage(t)):this._revert()},prev:function(){var t=this.currentPage;t>1?(t--,this.setPage(t)):this._revert()},setPage:function(t){var e,i;this.lastPage=this.currentPage,this.currentPage=t,this.isHorizontal()?(e="clientWidth",i="translateX"):(e="clientHeight",i="translateY"),this[i]=-[].reduce.call(this.slideEls,function(i,n,r){return r>t-2?i:i+n[e]},0),this._onTransitionStart()},isHorizontal:function(){return this.direction===n},isVertical:function(){return this.direction===i},_onTouchStart:function(t){this.startPos=this._getTouchPos(t),this.delta=0,this.startTranslateX=this.translateX,this.startTranslateY=this.translateY,this.startTime=(new Date).getTime(),this.dragging=!0,document.addEventListener("touchmove",this._onTouchMove,!1),document.addEventListener("touchend",this._onTouchEnd,!1),document.addEventListener("mousemove",this._onTouchMove,!1),document.addEventListener("mouseup",this._onTouchEnd,!1)},_onTouchMove:function(t){this.delta=this._getTouchPos(t)-this.startPos,this.performanceMode||(this.isHorizontal()?(this.translateX=this.startTranslateX+this.delta,this.$emit("slider-move",this.translateX)):(this.translateY=this.startTranslateY+this.delta,this.$emit("slider-move",this.translateY))),(this.isVertical()||this.isHorizontal()&&Math.abs(this.delta)>0)&&t.preventDefault()},_onTouchEnd:function(t){this.dragging=!1;var e=(new Date).getTime()-this.startTime<1e3;this.delta<-100||e&&this.delta<-15?this.next():this.delta>100||e&&this.delta>15?this.prev():this._revert(),document.removeEventListener("touchmove",this._onTouchMove),document.removeEventListener("touchend",this._onTouchEnd),document.removeEventListener("mousemove",this._onTouchMove),document.removeEventListener("mouseup",this._onTouchEnd)},_onWheel:function(t){this.mousewheelControl&&(this.transitioning||(t.deltaY>0?this.next():this.prev()),this._isPageChanged()&&t.preventDefault())},_revert:function(){this.setPage(this.currentPage)},_getTouchPos:function(t){var e=this.isHorizontal()?"pageX":"pageY";return t.changedTouches?t.changedTouches[0][e]:t[e]},_onTransitionStart:function(){this.transitioning=!0,this._isPageChanged()?this.$emit("slide-change-start",this.currentPage):this.$emit("slide-revert-start",this.currentPage)},_onTransitionEnd:function(){this.transitioning=!1,this._isPageChanged()?this.$emit("slide-change-end",this.currentPage):this.$emit("slide-revert-end",this.currentPage)},_isPageChanged:function(){return this.lastPage!==this.currentPage}}}},function(t,e){t.exports="<div class=swiper :class=\"[direction, {'dragging': dragging}]\" @touchstart=_onTouchStart @mousedown=_onTouchStart @wheel=_onWheel> <div class=swiper-wrap v-el:swiper-wrap :style=\"{'transform' : 'translate3d(' + translateX + 'px,' + translateY + 'px, 0)'}\" @transitionend=_onTransitionEnd> <slot></slot> </div> <div class=swiper-pagination v-show=paginationVisible> <span class=swiper-pagination-bullet :class=\"{'active': $index+1===currentPage}\" v-for=\"slide in slideEls\" @click=\"paginationClickable && setPage($index+1)\"></span> </div> </div>"}])});