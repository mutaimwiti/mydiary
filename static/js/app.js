!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=function(e){return e&&e.__esModule?e:{default:e}}(n(1)),i=n(6);var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return a(e,null,[{key:"getElement",value:function(e){var t=e.substring(1,e.length);switch(e.charAt(0)){case"#":return document.getElementById(t);case".":return document.getElementsByClassName(t)}}},{key:"setValue",value:function(e,t){this.getElement("#"+e).value=t}},{key:"setValues",value:function(){for(var e=0;e<arguments.length;e+=2)this.setValue(arguments.length<=e?void 0:arguments[e],arguments.length<=e+1?void 0:arguments[e+1])}},{key:"resetValues",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=!0,r=!1,i=void 0;try{for(var u,l=t[Symbol.iterator]();!(a=(u=l.next()).done);a=!0){var o=u.value;this.setValue(o,"")}}catch(e){r=!0,i=e}finally{try{!a&&l.return&&l.return()}finally{if(r)throw i}}}},{key:"getValue",value:function(e){var t=this.getElement("#"+e);return""===t.value?null:t.value}},{key:"getValues",value:function(){for(var e={},t=arguments.length,n=Array(t),a=0;a<t;a++)n[a]=arguments[a];var r=!0,i=!1,u=void 0;try{for(var l,o=n[Symbol.iterator]();!(r=(l=o.next()).done);r=!0){var s=l.value;e[s]=this.getValue(s)}}catch(e){i=!0,u=e}finally{try{!r&&o.return&&o.return()}finally{if(i)throw u}}return e}},{key:"blur",value:function(){var e=document.querySelector(":focus");e&&e.blur()}},{key:"registerListener",value:function(e,t,n){var a=this,r=this.getElement(e);(r instanceof HTMLCollection?Array.from(r):r?[r]:[]).forEach(function(e){e.addEventListener(t,function(e){a.blur(),e.preventDefault(),(0,i.has)("action",n)?n.action(e):n(e)})})}},{key:"mediaMatches",value:function(e){return window.matchMedia(e).matches}},{key:"blockUI",value:function(e){var t='<h5><img src="'+r.default.address+'/static/images/loading.gif"/> '+e+"...</h5>",n={backgroundColor:"#322f5a",color:"#fff"};this.mediaMatches("(max-width: 600px)")&&Object.assign(n,{left:"30%",width:"40%"}),$.blockUI({message:t,css:n})}},{key:"unblockUI",value:function(){$.unblockUI()}},{key:"remove",value:function(e){$(e).remove()}},{key:"html",value:function(e,t){$(e).html(t)}},{key:"append",value:function(e,t){$(e).append(t)}},{key:"addClass",value:function(e,t){$(e).addClass(t)}}]),e}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=function(e){return e&&e.__esModule?e:{default:e}}(n(7)),i=n(6);var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return a(e,null,[{key:"init",value:function(){this.DATA="route-data",this.MESSAGE="route-message"}},{key:"param",value:function(e){return new URL(this.url).searchParams.get(e)}},{key:"flash",value:function(e){return this.flashData=e,this}},{key:"redirect",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"index.html";e=this.address+"/"+e,this.setFlash(e),window.location=e}},{key:"redirectToEntries",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e="entries/"+e,this.setFlash(e),this.redirect(e)}},{key:"data",value:function(){return this.getFlash(r.default.pop(this.DATA))}},{key:"message",value:function(){return this.getFlash(r.default.pop(this.MESSAGE))}},{key:"setFlash",value:function(e){(0,i.has)("flashData",this)&&((0,i.has)("data",this.flashData)&&this.storeFlash(e,this.DATA,this.flashData.data),(0,i.has)("message",this.flashData)&&this.storeFlash(e,this.MESSAGE,this.flashData.message)),this.flashData=null}},{key:"storeFlash",value:function(e,t,n){r.default.set(t,JSON.stringify({page:e,payload:n,expiry:new Date((new Date).getTime()+3e4)}))}},{key:"getFlash",value:function(e){if(e){var t=JSON.parse(e),n=t.page,a=t.expiry,r=t.payload;if(this.url.includes(n)&&new Date<new Date(a))return r}return null}},{key:"url",get:function(){return window.location.href}},{key:"uri",get:function(){return this.url.substr(this.url.lastIndexOf("/")+1)}},{key:"address",get:function(){var e=window.location.href;return e.includes("entries")?e=e.substring(0,e.lastIndexOf("entries")):e.includes("auth")&&(e=e.substring(0,e.lastIndexOf("auth"))),e.substring(0,e.lastIndexOf("/"))}}]),e}();u.init(),t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return a(e,null,[{key:"init",value:function(){var e=this;this.ERROR="error",this.SUCCESS="success",this.errorBox=$("#app_errors"),this.successBox=$("#app_success"),$("input").keyup(function(){return e.clear()}),$("form").submit(function(){return e.clear()})}},{key:"success",value:function(e){e&&this[this.type(e)](this.successBox,e)}},{key:"error",value:function(e){e&&this[this.type(e)](this.errorBox,e)}},{key:"type",value:function(e){return Array.isArray(e)?"many":"single"}},{key:"single",value:function(e,t){var n="<ul><li>"+t+"</li></ul>";e.empty().html(n).show()}},{key:"many",value:function(e,t){var n=$("<ul>"),a=!0,r=!1,i=void 0;try{for(var u,l=t[Symbol.iterator]();!(a=(u=l.next()).done);a=!0){var o=u.value;n.append("<li>"+o+"</li>")}}catch(e){r=!0,i=e}finally{try{!a&&l.return&&l.return()}finally{if(r)throw i}}e.empty().html(n).show()}},{key:"clear",value:function(){this.errorBox.hide().empty(),this.successBox.hide().empty()}}]),e}();r.init(),t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=l(n(0)),i=l(n(5)),u=n(6);function l(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return a(e,null,[{key:"path",value:function(e){return this.URL+e}},{key:"id",value:function(e){return parseInt(e.substring(e.lastIndexOf("/")+1))}},{key:"json",value:function(e,t,n,a){var l=this,o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],s={};s.method=e,"get"===e&&null===n||(s.body=JSON.stringify(n)),s.headers={"Content-Type":"application/json","x-access-token":o?i.default.get():null};var f=!1,c=0;r.default.blockUI((0,u.has)("msg",this)?this.msg:"Loading"),fetch(this.path(t),s).then(function(e){return f=e.ok,c=e.status,e.json()}).then(function(e){a.handle(f,c,e,l.id(t)),r.default.unblockUI()}).catch(function(e){console.log(e),r.default.unblockUI()})}},{key:"message",value:function(e){return this.msg=e,this}},{key:"get",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];this.json("get",e,null,t,n)}},{key:"post",value:function(e,t,n){var a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];this.json("post",e,t,n,a)}},{key:"put",value:function(e,t,n){var a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];this.json("put",e,t,n,a)}},{key:"delete",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];this.json("delete",e,null,t,n)}},{key:"URL",get:function(){return"https://mdiary-v1.herokuapp.com/api/v1/"}}]),e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=u(n(5)),i=u(n(2));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return a(e,null,[{key:"handle",value:function(e,t){switch(e){case 401:r.default.require();break;case 422:this.validation(t);break;default:this.generic(t)}}},{key:"validation",value:function(e){var t=e.errors,n=[],a=!0,r=!1,u=void 0;try{for(var l,o=Object.values(t)[Symbol.iterator]();!(a=(l=o.next()).done);a=!0){var s=l.value,f=!0,c=!1,d=void 0;try{for(var h,v=s[Symbol.iterator]();!(f=(h=v.next()).done);f=!0){var y=h.value;n.push(y)}}catch(e){c=!0,d=e}finally{try{!f&&v.return&&v.return()}finally{if(c)throw d}}}}catch(e){r=!0,u=e}finally{try{!a&&o.return&&o.return()}finally{if(r)throw u}}i.default.error(n)}},{key:"generic",value:function(e){i.default.error(e.message?e.message:this.fallback)}},{key:"fallback",get:function(){return"OOPS! Seems like something went wrong."}}]),e}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=u(n(7)),i=u(n(1));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return a(e,null,[{key:"init",value:function(){this.KEY="auth-token",this.EXP="auth-expiry"}},{key:"get",value:function(){var e=r.default.get(this.KEY),t=r.default.get(this.EXP);return e&&t&&(new Date).getTime()<1e3*t?e:(this.clear(),null)}},{key:"set",value:function(e){var t=e.token,n=e.expiry;r.default.set(this.KEY,t,this.EXP,n)}},{key:"clear",value:function(){r.default.remove(this.KEY,this.EXP)}},{key:"require",value:function(){this.clear(),i.default.redirect("auth/signin.html")}},{key:"logout",value:function(){this.clear(),i.default.redirect("index.html")}}]),e}();l.init(),t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.has=function(e,t){return t&&void 0!==t[e]&&null!==t[e]},t.timeSince=function(e){var t=Math.floor((new Date-Date.parse(e))/1e3),n=Math.floor(t/31536e3);return n>1?n+" years ago":(n=Math.floor(t/2592e3))>1?n+" months ago":(n=Math.floor(t/86400))>1?n+" days ago":(n=Math.floor(t/3600))>1?n+" hours ago":(n=Math.floor(t/60))>1?n+" minutes ago":Math.floor(t)+" seconds ago"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return a(e,null,[{key:"get",value:function(e){return localStorage.getItem(e)}},{key:"set",value:function(){for(var e=0;e<arguments.length;e+=2)localStorage.setItem(arguments.length<=e?void 0:arguments[e],arguments.length<=e+1?void 0:arguments[e+1])}},{key:"remove",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=!0,r=!1,i=void 0;try{for(var u,l=t[Symbol.iterator]();!(a=(u=l.next()).done);a=!0){var o=u.value;localStorage.removeItem(o)}}catch(e){r=!0,i=e}finally{try{!a&&l.return&&l.return()}finally{if(r)throw i}}}},{key:"pop",value:function(e){var t=this.get(e);return this.remove(e),t}}]),e}();t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=f(n(9)),i=f(n(3)),u=f(n(0)),l=f(n(4)),o=f(n(1)),s=f(n(2));function f(e){return e&&e.__esModule?e:{default:e}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return a(e,null,[{key:"init",value:function(){this.handler=o.default.uri.startsWith("view.html")?this.handleView:this.handleIndex,this.DONE="Your entry was deleted successfully.",this.NOT_FOUND="The entry no longer exists.",u.default.registerListener(".delete","click",this)}},{key:"action",value:function(e){i.default.message("Deleting entry").delete("entries/"+e.target.dataset.entry,this)}},{key:"handle",value:function(e,t,n,a){e||404===t?this.handler(e,t,a):l.default.handle(t,n)}},{key:"handleView",value:function(e){var t={type:e?s.default.SUCCESS:s.default.ERROR,message:e?this.DONE:this.NOT_FOUND};o.default.flash({message:t}).redirectToEntries()}},{key:"handleIndex",value:function(e,t,n){r.default.remove(n),e?s.default.success(this.DONE):s.default.error(this.NOT_FOUND)}}]),e}();t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=s(n(8)),i=s(n(3)),u=s(n(0)),l=s(n(4)),o=s(n(2));function s(e){return e&&e.__esModule?e:{default:e}}var f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return a(e,null,[{key:"init",value:function(){i.default.message("Loading entries").get("entries",this)}},{key:"handle",value:function(e,t,n){if(e){var a=n.entries,i=n.count;i?(this.display(a,i),r.default.init()):o.default.success("You have no entries.")}else l.default.handle(t,n)}},{key:"display",value:function(e,t){for(var n=0;n<t;n++){var a=e[n],r=a.id,i=a.title,l=a.created_at;u.default.append("#entries_display",'<div class="entry-card" id="entry_id_'+r+'">\n                    <div class="row">\n                        <div class="col-m4">\n                            <a href="view.html?id='+r+'" class="btn btn-sm">'+i+'</a>\n                        </div>\n                        <div class="col-m4">'+l+'</div>\n                        <div class="col-m4">\n                            <a href="edit.html?id='+r+'" class="btn-small">Edit</a>\n                            <a href data-entry="'+r+'" class="delete btn-small">Delete</a>\n                        </div>\n                    </div>\n                </div>')}}},{key:"remove",value:function(e){u.default.remove("#entry_id_"+e)}}]),e}();t.default=f},,function(e,t,n){"use strict";(function(e){return e&&e.__esModule?e:{default:e}})(n(12)).default.boot()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=g(n(0)),i=g(n(5)),u=g(n(1)),l=g(n(2)),o=g(n(13)),s=g(n(14)),f=g(n(15)),c=g(n(16)),d=g(n(17)),h=g(n(18)),v=g(n(9)),y=g(n(19));function g(e){return e&&e.__esModule?e:{default:e}}var p=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return a(e,null,[{key:"init",value:function(){this.URI=u.default.uri,this.URL=u.default.url,this.AUTH=i.default.get(),this.MESSAGE=u.default.message(),this.IS_AUTH_PAGE="signup.html"===this.URI||"signin.html"===this.URI,this.preparePage()}},{key:"preparePage",value:function(){r.default.addClass('a[href="'+(""===this.URI?"./":this.URI)+'"]',"active"),this.MESSAGE&&l.default[this.MESSAGE.type](this.MESSAGE.message)}},{key:"boot",value:function(){this.IS_AUTH_PAGE?this.AUTH?u.default.redirectToEntries():this.loadAuthPage():this.AUTH?(s.default.init(),this.URL.includes("/entries/")?this.loadEntryPage():"profile.html"===this.URI&&o.default.init()):i.default.require()}},{key:"loadAuthPage",value:function(){switch(this.URI){case"signin.html":f.default.init();break;case"signup.html":c.default.init()}}},{key:"loadEntryPage",value:function(){switch(this.URI){case"":v.default.init();break;case"create.html":y.default.init();break;default:if(this.URI.startsWith("view.html"))return d.default.init();if(this.URI.startsWith("edit.html"))return h.default.init()}}}]),e}();p.init(),t.default=p},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=o(n(0)),i=o(n(3)),u=o(n(4)),l=n(6);function o(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return a(e,null,[{key:"init",value:function(){i.default.message("Loading profile").get("profile",this)}},{key:"handle",value:function(e,t,n){e?this.display(n):u.default.handle(t,n)}},{key:"display",value:function(e){var t=e.name,n=e.since,a=e.entry_count,i=e.latest_entry,u='You have no entries...<a href="entries/create.html">create entry</a>.',o="";a&&(u="Number of entries: "+a,o='Latest entry: <a href="entries/view.html?id='+i.id+'">'+i.title+"</a>"),r.default.html("#profile",'<div class="panel">\n                <div class="panel-body">\n                    <b><h4>'+t+"</h4></b>\n                    <h5>Joined: "+(0,l.timeSince)(n+" UTC")+"</h5>\n                    <h5>"+u+"</h5>\n                    <h5>"+o+"</h5>\n                </div>\n            </div>")}}]),e}();t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=u(n(0)),i=u(n(5));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return a(e,null,[{key:"init",value:function(){r.default.registerListener("#logout","click",this)}},{key:"action",value:function(){i.default.logout()}}]),e}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=f(n(3)),i=f(n(0)),u=f(n(5)),l=f(n(4)),o=f(n(1)),s=f(n(2));function f(e){return e&&e.__esModule?e:{default:e}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return a(e,null,[{key:"init",value:function(){i.default.registerListener("#login_form","submit",this),this.flash(o.default.data())}},{key:"flash",value:function(e){e&&i.default.setValue("email",e.email)}},{key:"action",value:function(){r.default.message("Signing in").post("login",i.default.getValues("email","password"),this,!1)}},{key:"handle",value:function(e,t,n){e?(u.default.set(n),o.default.redirectToEntries()):401===t?s.default.error(n.message):l.default.handle(t,n)}}]),e}();t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=s(n(3)),i=s(n(0)),u=s(n(4)),l=s(n(1)),o=s(n(2));function s(e){return e&&e.__esModule?e:{default:e}}var f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return a(e,null,[{key:"init",value:function(){i.default.registerListener("#sign_up_form","submit",this)}},{key:"action",value:function(){var e=i.default.getValues("name","email","password","password_conf");e.password!==e.password_conf?o.default.error("The passwords do not match."):r.default.message("Signing up").post("signup",e,this,!1)}},{key:"handle",value:function(e,t,n){if(e){var a={type:o.default.SUCCESS,message:"Successfully signed up. Sign in to get started!"},r={email:i.default.getValue("email")};l.default.flash({data:r,message:a}).redirect("auth/signin.html")}else u.default.handle(t,n)}}]),e}();t.default=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=s(n(8)),i=s(n(3)),u=s(n(0)),l=s(n(4)),o=s(n(1));function s(e){return e&&e.__esModule?e:{default:e}}var f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return a(e,null,[{key:"init",value:function(){i.default.message("Loading entry").get("entries/"+o.default.param("id"),this)}},{key:"handle",value:function(e,t,n){e?(this.display(n.entry),r.default.init()):l.default.handle(t,n)}},{key:"display",value:function(e){var t=e.id,n=e.title,a=e.body,r=e.created_at;u.default.html("#entry_display",'<div class="panel">\n                <div class="panel-body">\n                    <div class="entry">\n                        <a href="edit.html?id='+t+'" class="link-button">Edit</a>\n                        <h4>Date: '+r+"</h4>\n                        <h4>Title: "+n+"</h4>\n                        <p>"+a+'</p>\n                        <a href data-entry="'+t+'" class="delete link-button">Delete</a>\n                    </div>\n                </div>\n            </div>')}}]),e}();t.default=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=s(n(3)),i=s(n(0)),u=s(n(4)),l=s(n(1)),o=s(n(2));function s(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var c=function(){function e(){f(this,e)}return a(e,null,[{key:"trigger",value:function(){i.default.resetValues("title","body"),r.default.message("Loading entry").get("entries/"+l.default.param("id"),this)}},{key:"handle",value:function(e,t,n){e?i.default.setValues("title",n.entry.title,"body",n.entry.body):u.default.handle(t,n)}}]),e}(),d=function(){function e(){f(this,e)}return a(e,null,[{key:"init",value:function(){i.default.registerListener("#cancel_entry_edits","click",function(){return c.trigger()}),i.default.registerListener("#edit_entry_form","submit",this),i.default.getElement("#cancel_entry_edits").click()}},{key:"action",value:function(){r.default.message("Updating entry").put("entries/"+l.default.param("id"),i.default.getValues("title","body"),this)}},{key:"handle",value:function(e,t,n){if(e){var a={type:o.default.SUCCESS,message:"Your entry was updated successfully."};l.default.flash({message:a}).redirectToEntries("view.html?id="+n.entry.id)}else u.default.handle(t,n)}}]),e}();t.default=d},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=s(n(0)),i=s(n(3)),u=s(n(4)),l=s(n(1)),o=s(n(2));function s(e){return e&&e.__esModule?e:{default:e}}var f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return a(e,null,[{key:"init",value:function(){r.default.registerListener("#create_entry_form","submit",this)}},{key:"action",value:function(){i.default.message("Creating entry").post("entries",r.default.getValues("title","body"),this)}},{key:"handle",value:function(e,t,n){if(e){var a={type:o.default.SUCCESS,message:"Your entry was created successfully."};l.default.flash({message:a}).redirectToEntries("view.html?id="+n.entry.id)}else u.default.handle(t,n)}}]),e}();t.default=f}]);