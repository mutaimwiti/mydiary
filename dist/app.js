!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"getElement",value:function(e){var t=e.substring(1,e.length);switch(e.charAt(0)){case"#":return document.getElementById(t);case".":return document.getElementsByClassName(t)}}},{key:"setValue",value:function(e,t){this.getElement("#"+e).value=t}},{key:"getValue",value:function(e){var t=this.getElement("#"+e);return""===t.value?null:t.value}},{key:"getValues",value:function(){for(var e={},t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];var a=!0,i=!1,u=void 0;try{for(var l,o=n[Symbol.iterator]();!(a=(l=o.next()).done);a=!0){var s=l.value;e[s]=this.getValue(s)}}catch(e){i=!0,u=e}finally{try{!a&&o.return&&o.return()}finally{if(i)throw u}}return e}},{key:"registerListener",value:function(e,t,n){var r=this.getElement(e);(r instanceof HTMLCollection?Array.from(r):r?[r]:[]).forEach(function(e){e.addEventListener(t,function(e){e.preventDefault(),n.action(e)})})}},{key:"hide",value:function(e){$(e).hide()}},{key:"remove",value:function(e){$(e).remove()}},{key:"html",value:function(e,t){$(e).html(t)}},{key:"append",value:function(e,t){$(e).append(t)}},{key:"addClass",value:function(e,t){$(e).addClass(t)}}]),e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"init",value:function(){var e=this;this.ERROR="error",this.SUCCESS="success",this.errorBox=$("#app_errors"),this.successBox=$("#app_success"),$("input").keyup(function(){return e.clear()}),$("form").submit(function(){return e.clear()})}},{key:"success",value:function(e){e&&this[this.type(e)](this.successBox,e)}},{key:"error",value:function(e){e&&this[this.type(e)](this.errorBox,e)}},{key:"type",value:function(e){return Array.isArray(e)?"many":"single"}},{key:"single",value:function(e,t){var n="<ul><li>"+t+"</li></ul>";e.empty().html(n).show()}},{key:"many",value:function(e,t){var n=$("<ul>"),r=!0,a=!1,i=void 0;try{for(var u,l=t[Symbol.iterator]();!(r=(u=l.next()).done);r=!0){var o=u.value;n.append("<li>"+o+"</li>")}}catch(e){a=!0,i=e}finally{try{!r&&l.return&&l.return()}finally{if(a)throw i}}e.empty().html(n).show()}},{key:"clear",value:function(){this.errorBox.hide().empty(),this.successBox.hide().empty()}}]),e}();a.init(),t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(e){return e&&e.__esModule?e:{default:e}}(n(6)),i=n(11);var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"init",value:function(){this.DATA="route-data",this.MESSAGE="route-message"}},{key:"param",value:function(e){return new URL(this.url).searchParams.get(e)}},{key:"flash",value:function(e){return this.flashData=e,this}},{key:"redirect",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"index.html";e=this.address+"/"+e,this.setFlash(e),window.location=e}},{key:"redirectToEntries",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e="entries/"+e,this.setFlash(e),this.redirect(e)}},{key:"data",value:function(){return this.getFlash(a.default.pop(this.DATA))}},{key:"message",value:function(){return this.getFlash(a.default.pop(this.MESSAGE))}},{key:"setFlash",value:function(e){(0,i.has)("flashData",this)&&((0,i.has)("data",this.flashData)&&this.storeFlash(e,this.DATA,this.flashData.data),(0,i.has)("message",this.flashData)&&this.storeFlash(e,this.MESSAGE,this.flashData.message)),this.flashData=null}},{key:"storeFlash",value:function(e,t,n){a.default.set(t,JSON.stringify({page:e,payload:n,expiry:new Date((new Date).getTime()+3e4)}))}},{key:"getFlash",value:function(e){if(e){var t=JSON.parse(e),n=t.page,r=t.expiry,a=t.payload;if(this.url.includes(n)&&new Date<new Date(r))return a}return null}},{key:"url",get:function(){return window.location.href}},{key:"uri",get:function(){return this.url.substr(this.url.lastIndexOf("/")+1)}},{key:"address",get:function(){var e=window.location.href;return e.includes("entries")&&(e=e.substring(0,e.lastIndexOf("entries"))),e.substring(0,e.lastIndexOf("/"))}}]),e}();u.init(),t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=u(n(6)),i=u(n(2));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"init",value:function(){this.KEY="auth-token"}},{key:"get",value:function(){return a.default.get(this.KEY)}},{key:"set",value:function(e){a.default.set(this.KEY,e)}},{key:"clear",value:function(){a.default.remove(this.KEY)}},{key:"check",value:function(){"signup.html"!==i.default.uri&&"signin.html"!==i.default.uri&&(this.get()||this.require())}},{key:"require",value:function(){this.clear(),i.default.redirect("signin.html")}},{key:"logout",value:function(){this.clear(),i.default.redirect("index.html")}}]),e}();l.init(),t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(e){return e&&e.__esModule?e:{default:e}}(n(3));var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"path",value:function(e){return this.URL+e}},{key:"id",value:function(e){return parseInt(e.substring(e.lastIndexOf("/")+1))}},{key:"json",value:function(e,t,n,r){var i=this,u=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],l={};l.method=e,"get"===e&&null===n||(l.body=JSON.stringify(n)),l.headers={"Content-Type":"application/json","x-access-token":u?a.default.get():null};var o=!1,s=0;fetch(this.path(t),l).then(function(e){return o=e.ok,s=e.status,e.json()}).then(function(e){r.handle(o,s,e,i.id(t))}).catch(function(e){console.log(e)})}},{key:"get",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];this.json("get",e,null,t,n)}},{key:"post",value:function(e,t,n){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];this.json("post",e,t,n,r)}},{key:"put",value:function(e,t,n){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];this.json("put",e,t,n,r)}},{key:"delete",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];this.json("delete",e,null,t,n)}},{key:"URL",get:function(){return"https://mdiary-v1.herokuapp.com/api/v1/"}}]),e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=u(n(3)),i=u(n(1));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"handle",value:function(e,t){switch(e){case 401:a.default.require();break;case 422:this.validation(t);break;default:this.generic(t)}}},{key:"validation",value:function(e){var t=e.errors,n=[],r=!0,a=!1,u=void 0;try{for(var l,o=Object.values(t)[Symbol.iterator]();!(r=(l=o.next()).done);r=!0){var s=l.value,f=!0,c=!1,d=void 0;try{for(var h,v=s[Symbol.iterator]();!(f=(h=v.next()).done);f=!0){var y=h.value;n.push(y)}}catch(e){c=!0,d=e}finally{try{!f&&v.return&&v.return()}finally{if(c)throw d}}}}catch(e){a=!0,u=e}finally{try{!r&&o.return&&o.return()}finally{if(a)throw u}}i.default.error(n)}},{key:"generic",value:function(e){i.default.error(e.message?e.message:this.fallback)}},{key:"fallback",get:function(){return"OOPS! Seems like something went wrong."}}]),e}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"get",value:function(e){return localStorage.getItem(e)}},{key:"set",value:function(e,t){localStorage.setItem(e,t)}},{key:"remove",value:function(e){localStorage.removeItem(e)}},{key:"pop",value:function(e){var t=this.get(e);return this.remove(e),t}}]),e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=f(n(4)),i=f(n(0)),u=f(n(8)),l=f(n(5)),o=f(n(2)),s=f(n(1));function f(e){return e&&e.__esModule?e:{default:e}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"init",value:function(){i.default.registerListener(".delete","click",this),this.NOT_FOUND="The entry no longer exists.",this.DONE="Your entry was deleted successfully."}},{key:"action",value:function(e){a.default.delete("entries/"+e.target.dataset.entry,this)}},{key:"handle",value:function(e,t,n,r){o.default.uri.startsWith("view.html")?this.handleView(e,t):this.handleIndex(e,t,r),e||404===t||l.default.handle(t,n)}},{key:"handleView",value:function(e,t){e?o.default.flash({message:{type:s.default.SUCCESS,message:this.DONE}}).redirectToEntries():404===t&&o.default.flash({message:{type:s.default.ERROR,message:this.NOT_FOUND}}).redirectToEntries()}},{key:"handleIndex",value:function(e,t,n){e?(u.default.remove(n),s.default.success(this.DONE)):404===t&&(u.default.remove(n),s.default.error(this.NOT_FOUND))}}]),e}();t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=s(n(4)),i=s(n(0)),u=s(n(5)),l=s(n(7)),o=s(n(1));function s(e){return e&&e.__esModule?e:{default:e}}var f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"init",value:function(){a.default.get("entries",this)}},{key:"handle",value:function(e,t,n){if(e){var r=n.entries,a=n.count;a?(this.display(r,a),l.default.init()):o.default.success("You have no entries.")}else u.default.handle(t,n)}},{key:"display",value:function(e,t){for(var n=0;n<t;n++){var r=e[n],a=r.id,u=r.title,l=r.created_at;i.default.append("#entries_display",'<div class="entry-card" id="entry_id_'+a+'">\n                    <div class="row">\n                        <div class="col-m4">\n                            <a href="view.html?id='+a+'" class="btn btn-sm">'+u+'</a>\n                        </div>\n                        <div class="col-m4">'+l+'</div>\n                        <div class="col-m4">\n                            <a href="edit.html?id='+a+'" class="btn-small">Edit</a>\n                            <a href data-entry="'+a+'" class="delete btn-small">Delete</a>\n                        </div>\n                    </div>\n                </div>')}}},{key:"remove",value:function(e){i.default.remove("#entry_id_"+e)}}]),e}();t.default=f},function(e,t,n){"use strict";var r=a(n(10));function a(e){return e&&e.__esModule?e:{default:e}}a(n(3)).default.check(),r.default.load()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=p(n(0)),i=p(n(2)),u=p(n(3)),l=p(n(1)),o=p(n(12)),s=p(n(13)),f=p(n(14)),c=p(n(15)),d=p(n(16)),h=p(n(17)),v=p(n(8)),y=p(n(18));function p(e){return e&&e.__esModule?e:{default:e}}var g=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"init",value:function(){this.URI=i.default.uri,this.URL=i.default.url,this.AUTH=u.default.get(),this.MESSAGE=i.default.message(),this.IS_AUTH_PAGE="signup.html"===this.URI||"signin.html"===this.URI,this.preparePage()}},{key:"preparePage",value:function(){a.default.addClass('a[href="'+(""===this.URI?"./":this.URI)+'"]',"active"),this.MESSAGE&&l.default[this.MESSAGE.type](this.MESSAGE.message)}},{key:"load",value:function(){this.IS_AUTH_PAGE?this.AUTH?i.default.redirectToEntries():this.loadAuthPage():this.AUTH?(s.default.init(),this.URL.includes("/entries/")?this.loadEntryPage():"profile.html"===this.URI&&o.default.init()):u.default.require()}},{key:"loadAuthPage",value:function(){switch(this.URI){case"signin.html":f.default.init();break;case"signup.html":c.default.init()}}},{key:"loadEntryPage",value:function(){switch(this.URI){case"":v.default.init();break;case"create.html":y.default.init();break;default:if(this.URI.startsWith("view.html"))return d.default.init(i.default.param("id"));if(this.URI.startsWith("edit.html"))return h.default.init()}}}]),e}();g.init(),t.default=g},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.has=function(e,t){return t&&void 0!==t[e]&&null!==t[e]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"init",value:function(){}}]),e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=u(n(0)),i=u(n(3));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"init",value:function(){a.default.registerListener("#logout","click",this)}},{key:"action",value:function(){i.default.logout()}}]),e}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=f(n(4)),i=f(n(0)),u=f(n(3)),l=f(n(5)),o=f(n(2)),s=f(n(1));function f(e){return e&&e.__esModule?e:{default:e}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"init",value:function(){i.default.registerListener("#login_form","submit",this),this.flash(o.default.data())}},{key:"flash",value:function(e){e&&i.default.setValue("email",e.email)}},{key:"action",value:function(){a.default.post("login",i.default.getValues("email","password"),this,!1)}},{key:"handle",value:function(e,t,n){e?(u.default.set(n.token),o.default.redirectToEntries()):401===t?s.default.error(n.message):l.default.handle(t,n)}}]),e}();t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=s(n(4)),i=s(n(0)),u=s(n(5)),l=s(n(2)),o=s(n(1));function s(e){return e&&e.__esModule?e:{default:e}}var f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"init",value:function(){i.default.registerListener("#sign_up_form","submit",this),this.DONE="Successfully signed up. Sign in to get started!"}},{key:"action",value:function(){var e=i.default.getValues("name","email","password","password_conf");e.password!==e.password_conf?o.default.error("The passwords do not match."):a.default.post("signup",e,this,!1)}},{key:"handle",value:function(e,t,n){if(e){var r={data:{email:i.default.getValue("email")},message:{type:o.default.SUCCESS,message:this.DONE}};l.default.flash(r).redirect("signin.html")}else u.default.handle(t,n)}}]),e}();t.default=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=o(n(4)),i=o(n(0)),u=o(n(5)),l=o(n(7));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"init",value:function(e){a.default.get("entries/"+e,this)}},{key:"handle",value:function(e,t,n){e?(this.display(n.entry),l.default.init()):u.default.handle(t,n)}},{key:"display",value:function(e){var t=e.id,n=e.title,r=e.body,a=e.created_at;i.default.html("#entry_display",'<div class="panel">\n                <div class="panel-body">\n                    <div class="entry">\n                        <a href="edit.html?id='+t+'" class="link-button">Edit</a>\n                        <h4>Date: '+a+"</h4>\n                        <h4>Title: "+n+"</h4>\n                        <p>"+r+'</p>\n                        <a href data-entry="'+t+'" class="delete link-button">Delete</a>\n                    </div>\n                </div>\n            </div>')}}]),e}();t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"init",value:function(){}},{key:"action",value:function(){}},{key:"handle",value:function(){}}]),e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=s(n(0)),i=s(n(4)),u=s(n(5)),l=s(n(2)),o=s(n(1));function s(e){return e&&e.__esModule?e:{default:e}}var f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"init",value:function(){a.default.registerListener("#create_entry_form","submit",this),this.DONE="Your entry was created successfully."}},{key:"action",value:function(){i.default.post("entries",a.default.getValues("title","body"),this)}},{key:"handle",value:function(e,t,n){e?l.default.flash({message:{type:o.default.SUCCESS,message:this.DONE}}).redirectToEntries():u.default.handle(t,n)}}]),e}();t.default=f}]);