webpackJsonp([0],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(1),u=r(o),a=n(31),i=r(a),l=n(161),f=r(l);i["default"].render(u["default"].createElement(f["default"],null),document.getElementById("root"))},161:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(162),f=n(1),c=r(f),s=(n(186),n(212)),d=n(217),p=n(251),v=r(p),y=n(264),b=r(y),_=(0,b["default"])(d.browserHistory),h=(0,s.syncHistoryWithStore)(d.browserHistory,_),m=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return c["default"].createElement(l.Provider,{store:_},c["default"].createElement("div",null,c["default"].createElement(d.Router,{history:h,routes:v["default"]})))}}]),t}(f.Component);t["default"]=m},186:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var o=n(187),u=r(o),a=n(189),i=r(a),l=n(192),f=r(l);t.createHistory=f["default"];var c=n(203),s=r(c);t.createHashHistory=s["default"];var d=n(204),p=r(d);t.createMemoryHistory=p["default"];var v=n(205),y=r(v);t.useBasename=y["default"];var b=n(206),_=r(b);t.useBeforeUnload=_["default"];var h=n(207),m=r(h);t.useQueries=m["default"];var g=n(190),E=r(g);t.Actions=E["default"];var O=n(210),w=r(O);t.enableBeforeUnload=w["default"];var M=n(211),j=r(M);t.enableQueries=j["default"];var P=u["default"](i["default"],"Using createLocation without a history instance is deprecated; please use history.createLocation instead");t.createLocation=P},206:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){function t(t){var n=e();return"string"==typeof n?((t||window.event).returnValue=n,n):void 0}return f.addEventListener(window,"beforeunload",t),function(){f.removeEventListener(window,"beforeunload",t)}}function u(e){return function(t){function n(){for(var e=void 0,t=0,n=d.length;null==e&&n>t;++t)e=d[t].call();return e}function r(e){return d.push(e),1===d.length&&l.canUseDOM&&(c=o(n)),function(){d=d.filter(function(t){return t!==e}),0===d.length&&c&&(c(),c=null)}}function u(e){l.canUseDOM&&-1===d.indexOf(e)&&(d.push(e),1===d.length&&(c=o(n)))}function i(e){d.length>0&&(d=d.filter(function(t){return t!==e}),0===d.length&&c())}var f=e(t),c=void 0,d=[];return a({},f,{listenBeforeUnload:r,registerBeforeUnloadHook:s["default"](u,"registerBeforeUnloadHook is deprecated; use listenBeforeUnload instead"),unregisterBeforeUnloadHook:s["default"](i,"unregisterBeforeUnloadHook is deprecated; use the callback returned from listenBeforeUnload instead")})}}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(188),l=(r(i),n(193)),f=n(194),c=n(187),s=r(c);t["default"]=u,e.exports=t["default"]},210:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var o=n(187),u=r(o),a=n(206),i=r(a);t["default"]=u["default"](i["default"],"enableBeforeUnload is deprecated, use useBeforeUnload instead"),e.exports=t["default"]},211:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var o=n(187),u=r(o),a=n(207),i=r(a);t["default"]=u["default"](i["default"],"enableQueries is deprecated, use useQueries instead"),e.exports=t["default"]},251:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),u=r(o),a=n(217),i=n(252),l=r(i),f=n(255),c=r(f),s=n(256),d=r(s),p=u["default"].createElement(a.Route,{path:"/",component:l["default"]},u["default"].createElement(a.IndexRoute,{component:c["default"]}),u["default"].createElement(a.Route,{path:"/list",component:d["default"]}),u["default"].createElement(a.Route,{path:"/home",component:c["default"]}));t["default"]=p},252:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=(e.pushPath,e.children);return a["default"].createElement("div",null,a["default"].createElement(f["default"],null),a["default"].createElement("main",null,t))}Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),a=r(u),i=(n(217),n(162)),l=n(253),f=r(l);t["default"]=(0,i.connect)(null)(o)},253:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(){return a["default"].createElement("header",null,a["default"].createElement(i.Link,{to:"/"},a["default"].createElement(f["default"],null)))}Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),a=r(u),i=n(217),l=n(254),f=r(l);t["default"]=o},254:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),a=r(u),i=function(e){var t;e.alt;return a["default"].createElement("img",(t={alt:"{ alt }",src:"/react-base-logo.png"},o(t,"alt","ReactBase"),o(t,"width","500"),t))};t["default"]=i},255:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),f=r(l),c=n(217),s=function(e){function t(e){return o(this,t),u(this,Object.getPrototypeOf(t).call(this,e))}return a(t,e),i(t,[{key:"render",value:function(){return f["default"].createElement("div",null,"Home!!!! Go to ",f["default"].createElement(c.Link,{to:"/list"},f["default"].createElement("span",null,"list")))}}]),t}(l.Component);t["default"]=s},256:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{items:e.items.list}}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),s=r(c),d=n(162),p=n(257),v=r(p),y=n(263),b=r(y),_=function(e){function t(e){return o(this,t),u(this,Object.getPrototypeOf(t).call(this,e))}return a(t,e),f(t,[{key:"componentDidMount",value:function(){this.props.dispatch((0,v["default"])())}},{key:"render",value:function(){var e=null,t=this.props.items;return t&&(e=t.map(function(e,t){return s["default"].createElement(b["default"],l({},e,{key:t}))})),s["default"].createElement("ul",null,e)}}]),t}(c.Component);t["default"]=(0,d.connect)(i)(_)},257:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(){var e="http://jsonplaceholder.typicode.com/posts";return(0,i["default"])(e,c)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(258),a=n(259),i=r(a),l=n(262),f=r(l),c=(0,f["default"])(u.RECEIVE_ITEMS,"data");t["default"]=o},258:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.FETCH_ITEMS="FETCH_ITEMS",t.FETCH_DATA="FETCH_DATA",t.RECEIVE_ITEMS="RECEIVE_ITEMS"},259:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){return function(n){return n(c()),(0,a["default"])(e).then(function(e){return e.json()}).then(function(e){return n(t(e))})}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(260),a=r(u),i=n(258),l=n(262),f=r(l),c=(0,f["default"])(i.FETCH_DATA);t["default"]=o},262:function(e,t){"use strict";function n(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;t>r;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),o=0;t>o;o++)r[o]=arguments[o];var u={type:e};return n.forEach(function(e,t){u[n[t]]=r[t]}),u.timeStamp=Date.now(),u}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},263:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),u=r(o),a=function(e){var t=e.id,n=e.title;return u["default"].createElement("li",{key:t},u["default"].createElement("p",null,n))};t["default"]=a},264:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function u(e,t){var n=(0,d.combineReducers)(a({},v,{routing:s.routerReducer})),r=(0,d.compose)((0,d.applyMiddleware)((0,l["default"])(),c["default"],(0,s.routerMiddleware)(e))),o=(0,d.createStore)(n,t,r);return o}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(265),l=o(i),f=n(266),c=o(f),s=n(212),d=n(169),p=n(267),v=r(p);t["default"]=u},265:function(e,t){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}function o(e,t,o,u){switch("undefined"==typeof e?"undefined":r(e)){case"object":return"function"==typeof e[u]?e[u].apply(e,n(o)):e[u];case"function":return e(t);default:return e}}function u(){function e(){P.forEach(function(e,t){var n=e.started,u=e.startedTime,i=e.action,f=e.prevState,c=e.error,d=e.took,p=e.nextState,y=P[t+1];y&&(p=y.prevState,d=y.started-n);var _=E(i),h="function"==typeof s?s(function(){return p},i):s,m=l(u),g=j.title?"color: "+j.title(_)+";":null,O="action "+(b?m:"")+" "+_.type+" "+(v?"(in "+d.toFixed(2)+" ms)":"");try{h?j.title?a.groupCollapsed("%c "+O,g):a.groupCollapsed(O):j.title?a.group("%c "+O,g):a.group(O)}catch(w){a.log(O)}var M=o(r,_,[f],"prevState"),S=o(r,_,[_],"action"),T=o(r,_,[c,f],"error"),k=o(r,_,[p],"nextState");M&&(j.prevState?a[M]("%c prev state","color: "+j.prevState(f)+"; font-weight: bold",f):a[M]("prev state",f)),S&&(j.action?a[S]("%c action","color: "+j.action(_)+"; font-weight: bold",_):a[S]("action",_)),c&&T&&(j.error?a[T]("%c error","color: "+j.error(c,f)+"; font-weight: bold",c):a[T]("error",c)),k&&(j.nextState?a[k]("%c next state","color: "+j.nextState(p)+"; font-weight: bold",p):a[k]("next state",p));try{a.groupEnd()}catch(w){a.log("—— log end ——")}}),P.length=0}var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=t.level,r=void 0===n?"log":n,u=t.logger,a=void 0===u?console:u,i=t.logErrors,c=void 0===i?!0:i,s=t.collapsed,d=t.predicate,p=t.duration,v=void 0===p?!1:p,y=t.timestamp,b=void 0===y?!0:y,_=t.transformer,h=t.stateTransformer,m=void 0===h?function(e){return e}:h,g=t.actionTransformer,E=void 0===g?function(e){return e}:g,O=t.errorTransformer,w=void 0===O?function(e){return e}:O,M=t.colors,j=void 0===M?{title:function(){return"#000000"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}}:M;if("undefined"==typeof a)return function(){return function(e){return function(t){return e(t)}}};_&&console.error("Option 'transformer' is deprecated, use stateTransformer instead");var P=[];return function(t){var n=t.getState;return function(t){return function(r){if("function"==typeof d&&!d(n,r))return t(r);var o={};P.push(o),o.started=f.now(),o.startedTime=new Date,o.prevState=m(n()),o.action=r;var u=void 0;if(c)try{u=t(r)}catch(a){o.error=w(a)}else u=t(r);if(o.took=f.now()-o.started,o.nextState=m(n()),e(),o.error)throw o.error;return u}}}}var a=function(e,t){return new Array(t+1).join(e)},i=function(e,t){return a("0",t-e.toString().length)+e},l=function(e){return"@ "+i(e.getHours(),2)+":"+i(e.getMinutes(),2)+":"+i(e.getSeconds(),2)+"."+i(e.getMilliseconds(),3)},f="undefined"!=typeof performance&&"function"==typeof performance.now?performance:Date;e.exports=u},267:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.items=void 0;var o=n(268),u=r(o);t.items=u["default"]},268:function(e,t,n){"use strict";function r(){var e=arguments.length<=0||void 0===arguments[0]?u:arguments[0],t=arguments[1];switch(t.type){case o.RECEIVE_ITEMS:var n=[];return t.data.map(function(e,t){n.push({id:e.id,title:e.title})}),Object.assign({},e,{list:n});default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(258),u=[];t["default"]=r}});