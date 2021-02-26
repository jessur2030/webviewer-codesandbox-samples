/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see legal.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[0],{336:function(ha,ca,f){f.r(ca);f.d(ca,"ByteRangeRequest",function(){return ka});var ba=f(2),da=f(0);f.n(da);var fa=f(1),aa=f(116);ha=f(74);var z=f(145),y=f(64),w=f(53),h=f(193),r=f(131);f=f(290);var x=[],e=[],n=window,ea=function(){return function(){this.fk=1}}(),ia;(function(e){e[e.UNSENT=0]="UNSENT";e[e.DONE=4]="DONE"})(ia||(ia={}));var ka=function(){function f(e,f,r,w){var x=this;this.url=e;this.range=f;this.sf=r;this.withCredentials=
w;this.DQ=ia;this.request=new XMLHttpRequest;this.request.open("GET",this.url,!0);n.Uint8Array&&(this.request.responseType="arraybuffer");w&&(this.request.withCredentials=w);na.DISABLE_RANGE_HEADER||(Object(da.isUndefined)(f.stop)?this.request.setRequestHeader("Range","bytes="+f.start):this.request.setRequestHeader("Range",["bytes=",f.start,"-",f.stop-1].join("")));this.request.setRequestHeader("X-Requested-With","XMLHttpRequest");r&&Object.keys(r).forEach(function(e){x.request.setRequestHeader(e,
r[e])});this.request.overrideMimeType?this.request.overrideMimeType("text/plain; charset=x-user-defined"):this.request.setRequestHeader("Accept-Charset","x-user-defined");this.status=h.a.NOT_STARTED}f.prototype.start=function(e){var f=this,r=this.request;r.onreadystatechange=function(){if(f.aborted)return f.status=h.a.ABORTED,e({code:h.a.ABORTED});if(this.readyState===f.DQ.DONE){f.Ew();var w=0===window.document.URL.indexOf("file:///");200===r.status||206===r.status||w&&0===r.status?(w=n.qK(this),
f.aq(w,e)):(f.status=h.a.ERROR,e({code:f.status,status:this.status}))}};this.request.send(null);this.status=h.a.STARTED};f.prototype.aq=function(e,f){this.status=h.a.SUCCESS;if(f)return f(!1,e)};f.prototype.abort=function(){this.Ew();this.aborted=!0;this.request.abort()};f.prototype.Ew=function(){var h=Object(r.b)(this.url,this.range,e);-1!==h&&e.splice(h,1);if(0<x.length){h=x.shift();var n=new f(h.url,h.range,this.sf,this.withCredentials);h.request=n;e.push(h);n.start(Object(r.c)(h))}};f.prototype.extend=
function(e){var f=Object.assign({},this,e.prototype);f.constructor=e;return f};return f}(),na=function(f){function h(e,h,n,r,w){n=f.call(this,e,n,r)||this;n.hk={};n.uv=h;n.url=e;n.DISABLE_RANGE_HEADER=!1;n.bt=ka;n.gF=3;n.sf=w||{};return n}Object(ba.c)(h,f);h.prototype.nr=function(e,f,h){var n=-1===e.indexOf("?")?"?":"&";switch(h){case !1:case w.a.NEVER_CACHE:e=e+n+"_="+Object(da.uniqueId)();break;case !0:case ["CacheHinting.CACHE"]:e=e+n+"_="+f.start+","+(Object(da.isUndefined)(f.stop)?"":f.stop)}return e};
h.prototype.FI=function(e,f,h,n){void 0===h&&(h={});return new this.bt(e,f,h,n)};h.prototype.JV=function(f,h,n,r,w){for(var y=0;y<x.length;y++)if(Object(da.isEqual)(x[y].range,h)&&Object(da.isEqual)(x[y].url,f))return x[y].Mf.push(r),x[y].wx++,null;for(y=0;y<e.length;y++)if(Object(da.isEqual)(e[y].range,h)&&Object(da.isEqual)(e[y].url,f))return e[y].Mf.push(r),e[y].wx++,null;n={url:f,range:h,uv:n,Mf:[r],wx:1};if(0===x.length&&e.length<this.gF)return e.push(n),n.request=this.FI(f,h,w,this.withCredentials),
n;x.push(n);return null};h.prototype.ll=function(f,h,n){var w=this.nr(f,h,this.uv);(f=this.JV(w,h,this.uv,n,this.sf))&&f.request.start(Object(r.c)(f));return function(){var f=Object(r.b)(w,h,e);if(-1!==f){var n=--e[f].wx;0===n&&e[f].request&&e[f].request.abort()}else f=Object(r.b)(w,h,x),-1!==f&&(n=--x[f].wx,0===n&&x.splice(f,1))}};h.prototype.YJ=function(){return{start:-aa.a}};h.prototype.hY=function(){var e=-(aa.a+aa.e);return{start:e-aa.d,end:e}};h.prototype.tp=function(e){var f=this;this.zv=!0;
var h=aa.a;this.ll(this.url,this.YJ(),function(n,r,w){function x(){var h=f.wd.VJ();f.ll(f.url,h,function(n,r){if(n)return Object(fa.h)("Error loading central directory: "+n),e(n);r=Object(y.a)(r);if(r.length!==h.stop-h.start)return e("Invalid XOD file: Zip central directory data is wrong size! Should be "+(h.stop-h.start)+" but is "+r.length);f.wd.EM(r);f.AA=!0;f.zv=!1;return e(!1)})}if(n)return Object(fa.h)("Error loading end header: "+n),e(n,r,w);r=Object(y.a)(r);if(r.length!==h)return e("Invalid XOD file: Zip end header data is wrong size!");
try{f.wd=new z.a(r)}catch(va){return e(va)}f.wd.wZ?f.ll(f.url,f.hY(),function(h,n){if(h)return Object(fa.h)("Error loading zip64 header: "+h),e(h);n=Object(y.a)(n);f.wd.KZ(n);x()}):x()})};h.prototype.nK=function(e){e(Object.keys(this.wd.Yk))};h.prototype.jD=function(e,f){var h=this;if(this.wd.xI(e)){var n=this.wd.ww(e);if(n in this.hk){var r=this.Gg[e];r.Go=this.hk[n];r.Go.fk++;r.cancel=r.Go.cancel}else{var w=this.wd.MW(e),x=this.ll(this.url,w,function(r,x){r?(Object(fa.h)('Error loading part "'+
e+'": '+r),h.ll(h.url,w,function(r,x){if(r)return f(r,e);h.FM(x,w,n,e,f)})):h.FM(x,w,n,e,f)}),y=this.Gg[e];y&&(y.nO=!0,y.cancel=function(){y.Go.fk--;0===y.Go.fk&&(x(),delete h.hk[n])},this.hk[n]=new ea(n),y.Go=this.hk[n],y.Go.cancel=y.cancel)}}else delete this.Gg[e],f(Error('File not found: "'+e+'"'),e)};h.prototype.FM=function(e,f,h,n,r){if(e.length!==f.stop-f.start)r(Error("Part data is wrong size!"),n);else{do{if(!this.hk[h])return;n=this.hk[h].fk;for(var w=f.DM.length,x=0;x<w;++x){var y=f.DM[x];
r(!1,y.sn,e["string"===typeof e?"substring":"subarray"](y.start,y.stop),this.wd.kL(y.sn));y.sn in this.Gg&&delete this.Gg[y.sn]}}while(n!==this.hk[h].fk);delete this.hk[h]}};h.DISABLE_RANGE_HEADER=!1;h.gF=3;return h}(ha.a);(function(e){function f(f,h,n){var r=e.call(this)||this,w;for(w in f)r[w]=f[w];r.n6=f;r.startOffset=h;r.endOffset=n;r.FI=function(e,h,n,w){Object(da.isUndefined)(h.stop)?(h.start+=r.endOffset,h.stop=r.endOffset):(h.start+=r.startOffset,h.stop+=r.startOffset);e=r.nr(r.url,h,r.uv);
return new f.bt(e,h,n,w)};return r}Object(ba.c)(f,e);return f})(na);Object(f.a)(na);Object(f.b)(na);ca["default"]=na}}]);}).call(this || window)