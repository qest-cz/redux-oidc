!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("react"),require("immutable"),require("oidc-client"));else if("function"==typeof define&&define.amd)define(["react","immutable","oidc-client"],r);else{var t="object"==typeof exports?r(require("react"),require("immutable"),require("oidc-client")):r(e.react,e.immutable,e["oidc-client"]);for(var n in t)("object"==typeof exports?exports:e)[n]=t[n]}}(this,function(e,r,t){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){e.exports=t(8)},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.STORAGE_KEY="oidc.expired",r.USER_EXPIRED="redux-oidc/USER_EXPIRED",r.REDIRECT_SUCCESS="redux-oidc/REDIRECT_SUCCESS",r.USER_LOADED="redux-oidc/USER_LOADED",r.SILENT_RENEW_ERROR="redux-oidc/SILENT_RENEW_ERROR",r.SESSION_TERMINATED="redux-oidc/SESSION_TERMINATED",r.USER_EXPIRING="redux-oidc/USER_EXPIRING",r.USER_FOUND="redux-oidc/USER_FOUND"},function(e,r,t){"use strict";function n(){return{type:a.USER_EXPIRED}}function o(e){return{type:a.REDIRECT_SUCCESS,payload:e}}function i(e){return{type:a.USER_FOUND,payload:e}}function u(e){return{type:a.SILENT_RENEW_ERROR,payload:e}}function s(){return{type:a.SESSION_TERMINATED}}function c(){return{type:a.USER_EXPIRING}}Object.defineProperty(r,"__esModule",{value:!0}),r.userExpired=n,r.redirectSuccess=o,r.userFound=i,r.silentRenewError=u,r.sessionTerminated=s,r.userExpiring=c;var a=t(1)},function(e,r,t){"use strict";function n(e){return new o.UserManager(e)}Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=n;var o=t(13)},function(e,r){e.exports=require("react")},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function i(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function u(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0});var s=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),c=t(4),a=n(c),l=t(1),d=(t(2),function(e){function r(){var e,t,n,u;o(this,r);for(var s=arguments.length,c=Array(s),a=0;a<s;a++)c[a]=arguments[a];return t=n=i(this,(e=Object.getPrototypeOf(r)).call.apply(e,[this].concat(c))),n.onRedirectSuccess=function(e){localStorage.removeItem(l.STORAGE_KEY),n.props.successCallback(e)},n.onRedirectError=function(e){if(localStorage.removeItem(l.STORAGE_KEY),!n.props.errorCallback)throw new Error("Error handling redirect callback: "+e.message);n.props.errorCallback(e)},u=t,i(n,u)}return u(r,e),s(r,[{key:"componentDidMount",value:function(){var e=this;this.context.userManager.signinRedirectCallback().then(function(r){return e.onRedirectSuccess(r)})["catch"](function(r){return e.onRedirectError(r)})}},{key:"render",value:function(){return a["default"].createElement("div",null,this.props.children||this.defaultContent)}},{key:"defaultContent",get:function(){return a["default"].createElement("div",null,"Redirecting...")}}]),r}(a["default"].Component));d.propTypes={successCallback:c.PropTypes.func.isRequired,errorCallback:c.PropTypes.func},d.contextTypes={userManager:c.PropTypes.object},r["default"]=d},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function i(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function u(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0});var s=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),c=t(4),a=n(c),l=t(2),d=function(e){function r(e){o(this,r);var t=i(this,Object.getPrototypeOf(r).call(this,e));return t.onUserLoaded=function(e){t.props.store.dispatch((0,l.userFound)(e))},t.onSilentRenewError=function(e){t.props.store.dispatch((0,l.silentRenewError)(e))},t.onAccessTokenExpired=function(){t.props.store.dispatch((0,l.userExpired)())},t.onUserUnloaded=function(){t.props.store.dispatch((0,l.sessionTerminated)())},t.onAccessTokenExpiring=function(){t.props.store.dispatch((0,l.userExpiring)())},t.userManager=e.userManager,t}return u(r,e),s(r,[{key:"getChildContext",value:function(){return{userManager:this.userManager}}},{key:"componentWillMount",value:function(){this.userManager.events.addUserLoaded(this.onUserLoaded),this.userManager.events.addSilentRenewError(this.onSilentRenewError),this.userManager.events.addAccessTokenExpired(this.onAccessTokenExpired),this.userManager.events.addAccessTokenExpiring(this.onAccessTokenExpiring),this.userManager.events.addUserUnloaded(this.onUserUnloaded)}},{key:"componentWillUnmount",value:function(){this.userManager.events.removeUserLoaded(this.onUserLoaded),this.userManager.events.removeSilentRenewError(this.onSilentRenewError),this.userManager.events.removeAccessTokenExpired(this.onAccessTokenExpired),this.userManager.events.removeAccessTokenExpiring(this.onAccessTokenExpiring),this.userManager.events.removeUserUnloaded(this.onUserUnloaded)}},{key:"render",value:function(){return a["default"].Children.only(this.props.children)}}]),r}(a["default"].Component);d.propTypes={userManager:c.PropTypes.object.isRequired,store:c.PropTypes.object.isRequired},d.childContextTypes={userManager:c.PropTypes.object},r["default"]=d},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(){var e=(0,u["default"])();e.signinSilentCallback()}Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=o;var i=t(3),u=n(i)},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0}),r.userExpiring=r.sessionTerminated=r.silentRenewError=r.userFound=r.redirectSuccess=r.userExpired=r.USER_EXPIRING=r.SESSION_TERMINATED=r.SILENT_RENEW_ERROR=r.USER_FOUND=r.REDIRECT_SUCCESS=r.USER_EXPIRED=r.OidcProvider=r.reducer=r.immutableReducer=r.CallbackComponent=r.processSilentRenew=r.createUserManager=void 0;var o=t(9),i=n(o);r.createUserManager=t(3)["default"],r.processSilentRenew=t(7)["default"],r.CallbackComponent=t(5)["default"],r.immutableReducer=t(10)["default"],r.reducer=t(11)["default"],r.OidcProvider=t(6)["default"],r.USER_EXPIRED=t(1).USER_EXPIRED,r.REDIRECT_SUCCESS=t(1).REDIRECT_SUCCESS,r.USER_FOUND=t(1).USER_FOUND,r.SILENT_RENEW_ERROR=t(1).SILENT_RENEW_ERROR,r.SESSION_TERMINATED=t(1).SESSION_TERMINATED,r.USER_EXPIRING=t(1).USER_EXPIRING,r.userExpired=t(2).userExpired,r.redirectSuccess=t(2).redirectSuccess,r.userFound=t(2).userFound,r.silentRenewError=t(2).silentRenewError,r.sessionTerminated=t(2).sessionTerminated,r.userExpiring=t(2).userExpiring,r["default"]=i["default"]},function(e,r,t){"use strict";function n(e){r.storedUser=l=e}function o(){r.storedUser=l=null}function i(e,t,n,o,i){return n&&!n.expired?(localStorage.removeItem(c.STORAGE_KEY),r.storedUser=l=n,e(i)):(e((0,a.userExpired)()),o?void t.signinRedirect({data:{redirectUrl:window.location.href}}):e(i))}function u(e){throw localStorage.removeItem(c.STORAGE_KEY),new Error("Error loading user: "+e.message)}function s(e,r){var t=arguments.length<=2||void 0===arguments[2]||arguments[2];if(!e)throw new Error("You must provide a user manager!");return r&&"function"==typeof r||(r=function(e,r){return!0}),function(n){return function(o){return function(s){return!r(n.getState(),s)||localStorage.getItem(c.STORAGE_KEY)?o(s):l&&!l.expired?o(s):(localStorage.setItem(c.STORAGE_KEY,!0),void e.getUser().then(function(r){return i(o,e,r,t,s)})["catch"](u))}}}}Object.defineProperty(r,"__esModule",{value:!0}),r.storedUser=void 0,r.setStoredUser=n,r.removeStoredUser=o,r.getUserSuccessCallback=i,r.getUserErrorCallback=u,r["default"]=s;var c=t(1),a=t(2),l=r.storedUser=null},function(e,r,t){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?u:arguments[0],r=arguments[1];switch(r.type){case i.USER_EXPIRED:case i.SILENT_RENEW_ERROR:case i.SESSION_TERMINATED:return e.set("user",null);case i.REDIRECT_SUCCESS:case i.USER_FOUND:return(0,o.fromJS)({user:r.payload});default:return e}}Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=n;var o=t(12),i=t(1),u=(0,o.fromJS)({user:null})},function(e,r,t){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?u:arguments[0],r=arguments[1];switch(r.type){case i.USER_EXPIRED:case i.SILENT_RENEW_ERROR:case i.SESSION_TERMINATED:return Object.assign({},o({},e),{user:null});case i.REDIRECT_SUCCESS:case i.USER_FOUND:return Object.assign({},o({},e),{user:r.payload});default:return e}}Object.defineProperty(r,"__esModule",{value:!0});var o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e};r["default"]=n;var i=t(1),u={user:null}},function(e,r){e.exports=require("immutable")},function(e,r){e.exports=require("oidc-client")}])});