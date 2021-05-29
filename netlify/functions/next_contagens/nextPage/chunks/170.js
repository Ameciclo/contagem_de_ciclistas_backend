exports.id = 170;
exports.ids = [170];
exports.modules = {

/***/ 9125:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v9.1.0 (2021-05-03)

 (c) 2010-2021 Highsoft AS
 Author: Sebastian Domas

 License: www.highcharts.com/license
*/
(function(a){ true&&module.exports?(a["default"]=a,module.exports=a): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(8840)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(g){a(g);a.Highcharts=g;return a}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0})(function(a){function g(a,c,b,t){a.hasOwnProperty(c)||(a[c]=t.apply(null,b))}a=a?a._modules:{};g(a,"Mixins/DerivedSeries.js",[a["Core/Globals.js"],a["Core/Series/Series.js"],a["Core/Utilities.js"]],function(a,c,b){var f=
b.addEvent,g=b.defined;return{hasDerivedData:!0,init:function(){c.prototype.init.apply(this,arguments);this.initialised=!1;this.baseSeries=null;this.eventRemovers=[];this.addEvents()},setDerivedData:a.noop,setBaseSeries:function(){var a=this.chart,b=this.options.baseSeries;this.baseSeries=g(b)&&(a.series[b]||a.get(b))||null},addEvents:function(){var a=this;var b=f(this.chart,"afterLinkSeries",function(){a.setBaseSeries();a.baseSeries&&!a.initialised&&(a.setDerivedData(),a.addBaseSeriesEvents(),a.initialised=
!0)});this.eventRemovers.push(b)},addBaseSeriesEvents:function(){var a=this;var b=f(a.baseSeries,"updatedData",function(){a.setDerivedData()});var c=f(a.baseSeries,"destroy",function(){a.baseSeries=null;a.initialised=!1});a.eventRemovers.push(b,c)},destroy:function(){this.eventRemovers.forEach(function(a){a()});c.prototype.destroy.apply(this,arguments)}}});g(a,"Series/Histogram/HistogramSeries.js",[a["Mixins/DerivedSeries.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,
c,b){function g(a){return function(b){for(var e=1;a[e]<=b;)e++;return a[--e]}}var f=this&&this.__extends||function(){var a=function(b,e){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var e in b)b.hasOwnProperty(e)&&(a[e]=b[e])};return a(b,e)};return function(b,e){function d(){this.constructor=b}a(b,e);b.prototype=null===e?Object.create(e):(d.prototype=e.prototype,new d)}}(),l=c.seriesTypes.column,n=b.arrayMax,p=b.arrayMin,h=b.correctFloat,
q=b.extend,r=b.isNumber,d=b.merge,u=b.objectEach,k={"square-root":function(a){return Math.ceil(Math.sqrt(a.options.data.length))},sturges:function(a){return Math.ceil(Math.log(a.options.data.length)*Math.LOG2E)},rice:function(a){return Math.ceil(2*Math.pow(a.options.data.length,1/3))}};b=function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;b.data=void 0;b.options=void 0;b.points=void 0;b.userOptions=void 0;return b}f(b,a);b.prototype.binsNumber=function(){var a=this.options.binsNumber,
b=k[a]||"function"===typeof a&&a;return Math.ceil(b&&b(this.baseSeries)||(r(a)?a:k["square-root"](this.baseSeries)))};b.prototype.derivedData=function(a,b,d){var e=h(n(a)),k=h(p(a)),c=[],m={},f=[];d=this.binWidth=h(r(d)?d||1:(e-k)/b);this.options.pointRange=Math.max(d,0);for(b=k;b<e&&(this.userOptions.binWidth||h(e-b)>=d||0>=h(h(k+c.length*d)-b));b=h(b+d))c.push(b),m[b]=0;0!==m[k]&&(c.push(k),m[k]=0);var q=g(c.map(function(a){return parseFloat(a)}));a.forEach(function(a){a=h(q(a));m[a]++});u(m,function(a,
b){f.push({x:Number(b),y:a,x2:h(Number(b)+d)})});f.sort(function(a,b){return a.x-b.x});f[f.length-1].x2=e;return f};b.prototype.setDerivedData=function(){var a=this.baseSeries.yData;a.length?(a=this.derivedData(a,this.binsNumber(),this.options.binWidth),this.setData(a,!1)):this.setData([])};b.defaultOptions=d(l.defaultOptions,{binsNumber:"square-root",binWidth:void 0,pointPadding:0,groupPadding:0,grouping:!1,pointPlacement:"between",tooltip:{headerFormat:"",pointFormat:'<span style="font-size: 10px">{point.x} - {point.x2}</span><br/><span style="color:{point.color}">\u25cf</span> {series.name} <b>{point.y}</b><br/>'}});
return b}(l);q(b.prototype,{addBaseSeriesEvents:a.addBaseSeriesEvents,addEvents:a.addEvents,destroy:a.destroy,hasDerivedData:a.hasDerivedData,init:a.init,setBaseSeries:a.setBaseSeries});c.registerSeriesType("histogram",b);"";return b});g(a,"Series/Bellcurve/BellcurveSeries.js",[a["Mixins/DerivedSeries.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,c,b){var g=this&&this.__extends||function(){var a=function(b,d){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,
b){a.__proto__=b}||function(a,b){for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d])};return a(b,d)};return function(b,d){function c(){this.constructor=b}a(b,d);b.prototype=null===d?Object.create(d):(c.prototype=d.prototype,new c)}}(),f=c.seriesTypes.areaspline,l=b.correctFloat,n=b.extend,p=b.isNumber,h=b.merge;b=function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;b.data=void 0;b.options=void 0;b.points=void 0;return b}g(b,a);b.mean=function(a){var b=a.length;a=a.reduce(function(a,
b){return a+b},0);return 0<b&&a/b};b.standardDeviation=function(a,c){var d=a.length;c=p(c)?c:b.mean(a);a=a.reduce(function(a,b){b-=c;return a+b*b},0);return 1<d&&Math.sqrt(a/(d-1))};b.normalDensity=function(a,b,c){a-=b;return Math.exp(-(a*a)/(2*c*c))/(c*Math.sqrt(2*Math.PI))};b.prototype.derivedData=function(a,c){var d=this.options.intervals,f=this.options.pointsInInterval,g=a-d*c;d=d*f*2+1;f=c/f;var e=[],h;for(h=0;h<d;h++)e.push([g,b.normalDensity(g,a,c)]),g+=f;return e};b.prototype.setDerivedData=
function(){1<this.baseSeries.yData.length&&(this.setMean(),this.setStandardDeviation(),this.setData(this.derivedData(this.mean,this.standardDeviation),!1))};b.prototype.setMean=function(){this.mean=l(b.mean(this.baseSeries.yData))};b.prototype.setStandardDeviation=function(){this.standardDeviation=l(b.standardDeviation(this.baseSeries.yData,this.mean))};b.defaultOptions=h(f.defaultOptions,{intervals:3,pointsInInterval:3,marker:{enabled:!1}});return b}(f);n(b.prototype,{addBaseSeriesEvents:a.addBaseSeriesEvents,
addEvents:a.addEvents,destroy:a.destroy,init:a.init,setBaseSeries:a.setBaseSeries});c.registerSeriesType("bellcurve",b);"";return b});g(a,"masters/modules/histogram-bellcurve.src.js",[],function(){})});
//# sourceMappingURL=histogram-bellcurve.js.map

/***/ }),

/***/ 7294:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(2408);
} else {}


/***/ })

};
;