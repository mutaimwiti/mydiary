!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.registerMessaging=t.handleErrors=t.displayError=t.displaySuccess=t.clearMessages=void 0;var r=n(2),i=void 0,o=void 0,s=t.clearMessages=function(){i.hide(),o.hide()},u=(t.displaySuccess=function(e){o.empty(),o.append($("<ul>").append($("<li>").html(e))),o.show()},t.displayError=function(e){i.empty(),i.append($("<ul>").append($("<li>").html(e))),i.show()});t.handleErrors=function(e,t){switch(i.empty(),e){case 401:(0,r.requireSignIn)();break;case 422:var n=t.errors;i.append($('<ul id="error_list">'));var o=$("#error_list");for(var s in n)for(var a=n[s],l=0;l<a.length;l++)o.append($("<li>").html(a[l]));break;default:u(t.message?t.message:"OOPS! :( Seems like something went wrong. Try again later.")}i.show()},t.registerMessaging=function(){i=$("#app_errors"),o=$("#app_success"),s(),$("input").keyup(function(){return s()})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(2);var o=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"json",value:function(t,n,r,o){var s=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],u={};u.method=t,"get"===t&&null===r||(u.body=JSON.stringify(r)),u.headers={"Content-Type":"application/json","x-access-token":s?(0,i.getToken)():null};var a=!1,l=0;fetch(e.path(n),u).then(function(e){return a=e.ok,l=e.status,e.json()}).then(function(t){o(a,l,t,e.id(n))}).catch(function(e){console.log(e)})}},{key:"get",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];this.json("get",e,null,t,n)}},{key:"post",value:function(e,t,n){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];this.json("post",e,t,n,r)}},{key:"put",value:function(e,t,n){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];this.json("put",e,t,n,r)}},{key:"delete",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];this.json("delete",e,null,t,n)}}],[{key:"path",value:function(t){return e.URL+t}},{key:"id",value:function(e){return parseInt(e.substring(e.lastIndexOf("/")+1))}},{key:"URL",get:function(){return"https://mdiary-v1.herokuapp.com/api/v1/"}}]),e}());t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.registerLogoutListener=t.requireSignIn=t.checkAuth=t.clearToken=t.setToken=t.getToken=void 0;var r=n(4),i=n(3),o=t.getToken=function(){return localStorage.getItem("auth-token")},s=(t.setToken=function(e){return localStorage.setItem("auth-token",e)},t.clearToken=function(){return localStorage.removeItem("auth-token")});t.checkAuth=function(){var e=(0,i.getUri)();"signup.html"!==e&&"signin.html"!==e&&(o()||(0,i.redirect)("signin.html"))},t.requireSignIn=function(){s(),(0,i.redirect)("signin.html")},t.registerLogoutListener=function(){(0,r.getElement)("#logout").addEventListener("click",function(e){e.preventDefault(),s(),(0,i.redirect)("index.html")})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=t.getUrl=function(){return window.location.href},i=(t.getUri=function(){var e=r();return e.substr(e.lastIndexOf("/")+1)},t.redirect=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"index.html";return window.location=function(){var e=window.location.href;return e.includes("entries")&&(e=e.substring(0,e.lastIndexOf("entries"))),e.substring(0,e.lastIndexOf("/"))}()+"/"+e});t.redirectToEntries=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return i("entries/"+e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=t.getElement=function(e){var t=e.substring(1,e.length);switch(e.charAt(0)){case"#":return document.getElementById(t);case".":return document.getElementsByClassName(t)}};t.getValue=function(e){var t=r("#"+e);return""===t.value?null:t.value}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.registerDeleteListener=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(1)),i=n(3),o=n(4),s=n(0);var u=function(e,t,n,r){e?(0,i.getUri)().startsWith("view.html")?((0,s.displaySuccess)("The entry was deleted successfully"),$("#entry_display").empty()):$("#entry_id_"+r).remove():(0,s.handleErrors)(t,n)};t.registerDeleteListener=function(){(0,s.clearMessages)(),Array.from((0,o.getElement)(".delete")).forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();var t=e.target.dataset.entry;r.default.delete("entries/"+t,u)})})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.activateLocationLink=t.hideSignUpAndSignInLinks=t.hideLogoutLink=void 0;var r=n(3);t.hideLogoutLink=function(){return $("#logout").hide()},t.hideSignUpAndSignInLinks=function(){$('a[href^="sign"], a[href^="../sign"]').hide()},t.activateLocationLink=function(){var e=""===(0,r.getUri)()?"./":(0,r.getUri)(),t=document.querySelector('a[href="'+e+'"]');null!==t&&(t.className+=" active")}},function(e,t,n){"use strict";var r=n(8),i=n(2),o=n(0),s=n(6);(0,i.checkAuth)(),(0,o.registerMessaging)(),(0,s.activateLocationLink)(),(0,r.loadPage)()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadPage=void 0;var r=n(9),i=n(10),o=n(11),s=n(12),u=n(13),a=n(14),l=n(15),c=n(2),d=n(6),f=n(3);t.loadPage=function(){var e=(0,f.getUri)(),t=(0,f.getUrl)(),n=(0,c.getToken)();if("signup.html"===e||"signin.html"===e)return n?(0,f.redirectToEntries)():function(e){switch(e){case"signin.html":(0,s.registerLoginListener)();break;case"signup.html":(0,u.registerSignUpListener)()}(0,d.hideLogoutLink)()}(e);if(n){if((0,c.registerLogoutListener)(),(0,d.hideSignUpAndSignInLinks)(),t.includes("/entries/"))return function(e,t){if(""===e)return(0,o.showEntries)();if("create.html"===e)return(0,l.registerCreateEntryListener)();var n=new URL(t).searchParams.get("id");return e.startsWith("view.html")?(0,i.showEntry)(n):e.startsWith("edit.html")?(0,a.registerEditEntryListener)():void(0,f.redirect)()}(e,t);if("profile.html"===e)return(0,r.showProfile)();(0,f.redirect)()}else(0,f.redirect)("signin.html")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.showProfile=function(){console.log("SHOW PROFILE")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.showEntry=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(1)),i=n(0),o=n(5);var s=function(e,t,n){e?(!function(e){var t=e.id,n=e.title,r=e.body,i=e.created_at;$("#entry_display").html('<div class="panel">\n            <div class="panel-body">\n                <div class="entry">\n                    <a href="edit.html?id='+t+'" class="link-button">Edit</a>\n                    <h4>Date: '+i+"</h4>\n                    <h4>Title: "+n+"</h4>\n                    <p>"+r+'</p>\n                    <a href data-entry="'+t+'" class="delete link-button">Delete</a>\n                </div>\n            </div>\n        </div>')}(n.entry),(0,o.registerDeleteListener)()):(0,i.handleErrors)(t,n)};t.showEntry=function(e){r.default.get("entries/"+e,s)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.showEntries=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(1)),i=n(5),o=n(0);var s=function(e,t,n){if(e){var r=n.entries,s=n.count;s?(!function(e,t){for(var n=0;n<t;n++){var r=e[n],i=r.id,o=r.title,s=r.created_at;$("#entries_display").append('<div class="entry-card" id="entry_id_'+i+'">\n                <div class="row">\n                    <div class="col-m4">\n                        <a href="view.html?id='+i+'" class="btn btn-sm">'+o+'</a>\n                    </div>\n                    <div class="col-m4">'+s+'</div>\n                    <div class="col-m4">\n                        <a href="edit.html?id='+i+'" class="btn-small">Edit</a>\n                        <a href data-entry="'+i+'" class="delete btn-small">Delete</a>\n                    </div>\n                </div>\n            </div>')}}(r,s),(0,i.registerDeleteListener)()):(0,o.displaySuccess)("You have no entries.")}else(0,o.handleErrors)(t,n)};t.showEntries=function(){r.default.get("entries",s)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.registerLoginListener=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(1)),i=n(2),o=n(3),s=n(4),u=n(0);var a=function(e,t,n){e?((0,i.setToken)(n.token),(0,o.redirectToEntries)()):401===t?(0,u.displayError)(n.message):(0,u.handleErrors)(t,n)};t.registerLoginListener=function(){(0,s.getElement)("#login_form").addEventListener("submit",function(e){e.preventDefault(),function(){var e={email:(0,s.getValue)("email"),password:(0,s.getValue)("password")};r.default.post("login",e,a,!1)}()})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.registerSignUpListener=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(1)),i=n(4),o=n(0);var s=function(e,t,n){e?(0,o.displaySuccess)('Successfully signed up. <a href="signin.html">Sign in</a> to get started!'):(0,o.handleErrors)(t,n)};t.registerSignUpListener=function(){(0,i.getElement)("#sign_up_form").addEventListener("submit",function(e){e.preventDefault(),function(){var e={name:(0,i.getValue)("name"),email:(0,i.getValue)("email"),password:(0,i.getValue)("password")};r.default.post("signup",e,s,!1)}()})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.registerEditEntryListener=function(){}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.registerCreateEntryListener=function(){}}]);