!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=192)}({192:function(e,t){function r(e,t,r){var n=document.createElement(e);return n.setAttribute("class",t),r&&(n.innerText=r),n}function n(e){var t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("class","TTteaser__icon--"+e);var n=document.createElementNS("http://www.w3.org/2000/svg","use");n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#tt-teaser-star--"+e),t.appendChild(n);var a=r("span","TTteaser__star");return a.appendChild(t),a}function a(e){var t,a,i=document.createDocumentFragment();e.reviews>0&&(i.appendChild(function(e){var t=r("div","TTteaser__rating");e=(e=Math.round(100*(parseFloat(e.toString())+.25))/100).toString();var a=parseInt(e.substring(2,3));e=e.substring(0,1)+"."+(a>=5?"5":"0");for(var i=Math.floor(e),o=0;o<i;o++)t.appendChild(n("full"));var u=e-i>=.5;u&&t.appendChild(n("half"));for(var s=i+(u?1:0);s<5;s++)t.appendChild(n("empty"));return t}(e.avgRating)),i.appendChild((t=e.reviews,(a=r("a","TTteaser__read-reviews",t+" Review"+(t>1?"s":""))).setAttribute("href","#tt-reviews-list"),a)));var o=document.getElementById("tt-teaser");o&&(o.appendChild(i),document.querySelector(".TTteaser__write-review")&&document.querySelector(".TTteaser__write-review").addEventListener("click",(function(){TurnToCmd("reviewsList.writeReview")})))}$(document).ready((function(){$(".product-detail").length&&$(".product-detail").attr("data-masterid").length&&function(e){var t=new XMLHttpRequest,r=$("span.turntoUrl").text(),n=$("span.siteKey").text();if(0!==r.length&&0!==n.length){var i="https://cdn-ws."+r+"/v5/sitedata/"+n+"/"+e+"/d/ugc/counts/"+turnToConfig.locale;t.open("GET",i,!0),t.addEventListener("load",(function(){t.responseText&&a(JSON.parse(t.responseText))})),t.send()}}($(".product-detail").attr("data-masterid"))}))}});