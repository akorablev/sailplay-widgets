(function(e){var t=2;var n=(document.location.protocol=="https:"?"https://":"http://")+"bitrix.info/bx_stat";var r={host:null,aid:null};var o=d(r);var i=v();var a=m();e._baq=e._baq||{};e._baq.setResponse=function(e){var t=h("BX_USER_ID");if(t==undefined&&!!e.uid){var n=new Date((new Date).getTime()+1e3*3600*24*365*10);document.cookie="BX_USER_ID="+e.uid+"; path=/; expires="+n.toUTCString()}};if(l()){if(i.domContentLoadedEventStart>0){u()}else if(document.addEventListener){document.addEventListener("DOMContentLoaded",u,false)}}function u(){if("withCredentials"in a){f()}else{c()}}function c(){var e=document.createElement("script");e.type="text/javascript";e.async=true;e.src=n+"?"+s();var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}function f(){a.open("POST",n,true);a.setRequestHeader("Content-Type","application/x-www-form-urlencoded");a.withCredentials=true;a.onreadystatechange=function(){if(a.readyState==4&&a.status==200){var t=JSON.parse(this.responseText);e._baq.setResponse(t)}};a.send(s())}function d(t){if(!e._ba){return""}var n="";for(var r=0;r<e._ba.length;r++){var o=e._ba[r];if(typeof t[o[0]]!=="undefined"){t[o[0]]=o[1]}else if(typeof o[1]==="function"){n+="&"+o[0]+"="+encodeURIComponent(o[1]())}else{n+="&"+o[0]+"="+encodeURIComponent(o[1])}}return n}function s(){var n=i.navigationStart;return"d="+encodeURIComponent(e.location.host)+"&ru="+encodeURIComponent(e.location.pathname)+"&dns="+(i.domainLookupEnd-i.domainLookupStart)+"&tcp="+(i.connectEnd-i.connectStart)+"&srt="+(i.responseStart-i.requestStart)+"&pdt="+(i.responseEnd-i.responseStart)+"&rrt="+(i.fetchStart-n)+"&dit="+(i.domInteractive-n)+"&clt="+(i.domContentLoadedEventStart-n)+"&sr="+e.screen.width+"x"+e.screen.height+"&prc="+(i.domInteractive-i.domLoading)+"&com="+(e.frameRequestStart?"1":"0")+"&tmz="+(new Date).getTimezoneOffset()+"&xts="+(new Date).getTime()+"&ver="+t+"&aid="+encodeURIComponent(r.aid)+o}function l(){return a&&i&&i.navigationStart>0&&e.location.host&&p(r.host)&&r.aid!==null&&!(e.BX&&e.BX.admin)}function p(t){if(t===null||e.location.host===t){return true}var n=_ba_punycode();return e.location.host===n.toUnicode(t)}function m(){if(e.XMLHttpRequest){return new XMLHttpRequest}else if(e.ActiveXObject){return new e.ActiveXObject("Microsoft.XMLHTTP")}return null}function v(){if(e.performance&&e.performance.timing){return e.performance.timing}return null}function h(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):undefined}})(window);function _ba_punycode(){var e=2147483647,t=36,n=1,r=26,o=38,i=700,a=72,u=128,c="-",f=/^xn--/,d=/\x2E|\u3002|\uFF0E|\uFF61/g,s=t-n,l=Math.floor,p=String.fromCharCode;function m(e,t){var n=e.length;while(n--){e[n]=t(e[n])}return e}function v(e,t){return m(e.split(d),t).join(".")}function h(e){return m(e,function(e){var t="";if(e>65535){e-=65536;t+=p(e>>>10&1023|55296);e=56320|e&1023}t+=p(e);return t}).join("")}function g(e){if(e-48<10){return e-22}if(e-65<26){return e-65}if(e-97<26){return e-97}return t}function C(e,n,a){var u=0;e=a?l(e/i):e>>1;e+=l(e/n);for(;e>s*r>>1;u+=t){e=l(e/s)}return l(u+(s+1)*e/(e+o))}function S(o){var i=[],f=o.length,d,s=0,p=u,m=a,v,S,w,_,R,b,E,x,L;v=o.lastIndexOf(c);if(v<0){v=0}for(S=0;S<v;++S){if(o.charCodeAt(S)>=128){return null}i.push(o.charCodeAt(S))}for(w=v>0?v+1:0;w<f;){for(_=s,R=1,b=t;;b+=t){if(w>=f){return null}E=g(o.charCodeAt(w++));if(E>=t||E>l((e-s)/R)){return null}s+=E*R;x=b<=m?n:b>=m+r?r:b-m;if(E<x){break}L=t-x;if(R>l(e/L)){return null}R*=L}d=i.length+1;m=C(s-_,d,_==0);if(l(s/d)>e-p){return null}p+=l(s/d);s%=d;i.splice(s++,0,p)}return h(i)}function w(e){return v(e,function(e){return f.test(e)?S(e.slice(4).toLowerCase()):e})}return{toUnicode:w}}