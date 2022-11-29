/*!************************************************************************
*
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2013 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by trade secret or copyright law.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/
if(typeof s7viewers=="undefined"){s7viewers={}}else{if(typeof s7viewers!="object"){throw new Error("Cannot initialize a root 's7viewers' package. s7viewers is not an object")}}if(!s7viewers.FlyoutViewer){(function(){var a;s7viewers.FlyoutViewer=function(b){this.sdkBasePath="../../s7viewersdk/3.11/FlyoutViewer/";this.containerId=null;this.params={};this.handlers=[];this.onInitComplete=null;this.onInitFail=null;this.initializationComplete=false;this.initCalled=false;this.legacyFixedSizing=false;this.firstMediasetParsed=false;this.isDisposed=false;this.utilsScriptElm=null;this.fixinputmarker=null;this.sdkProvided=false;this.lockurldomains=true;if(typeof b=="object"){if(b.containerId){this.setContainerId(b.containerId)}if(b.params){for(var c in b.params){if(b.params.hasOwnProperty(c)&&b.params.propertyIsEnumerable(c)){this.setParam(c,b.params[c])}}}if(b.handlers){this.setHandlers(b.handlers)}if(b.localizedTexts){this.setLocalizedTexts(b.localizedTexts)}}};s7viewers.FlyoutViewer.cssClassName="s7flyoutviewer";s7viewers.FlyoutViewer.prototype.modifiers={};s7viewers.FlyoutViewer.prototype.setContainerId=function(b){if(this.isDisposed){return}this.containerId=b||null};s7viewers.FlyoutViewer.getCodeBase=function(){var h="";var c="";var f=null;if(document.scripts){f=document.scripts}else{f=document.getElementsByTagName("script")}for(var e=0;e<f.length;e++){var g=f[e].src;var b=/^\s*(http[s]?:\/\/[^\/]*)?(.*)(\/(js|js_orig)\/FlyoutViewer\.js)/.exec(g);if(b&&b.length==5){if(typeof b[1]!=="undefined"){h=b[1]}h+=b[2];c=g;break}}if((h!="")&&(h.lastIndexOf("/")!=h.length-1)){h+="/"}var d=/\/etc\/dam\/viewers\//;s7viewers.FlyoutViewer.codebase={contentUrl:h,isDAM:d.test(c)}};s7viewers.FlyoutViewer.getCodeBase();s7viewers.FlyoutViewer.prototype.getContentUrl=function(){return s7viewers.FlyoutViewer.codebase.contentUrl};s7viewers.FlyoutViewer.prototype.symbols={"Container.LABEL":"Flyout viewer","FlyoutZoomView.TIP_BUBBLE_OVER":"Mouse over image for a closer look.","FlyoutZoomView.TIP_BUBBLE_TAP":"Drag image to explore."};s7viewers.FlyoutViewer.prototype.includeViewer=function(){a.Util.lib.include("s7sdk.set.MediaSet");a.Util.lib.include("s7sdk.image.FlyoutZoomView");a.Util.lib.include("s7sdk.set.Swatches");a.Util.lib.include("s7sdk.common.Container");this.trackingManager=new a.TrackingManager();this.s7params=new a.ParameterManager(null,null,{asset:"MediaSet.asset"},this.getContentUrl()+"FlyoutViewer.css",this.lockurldomains);var f="";if(this.s7params.params.config&&(typeof(this.s7params.params.config)=="string")){f=",";if(this.s7params.params.config.indexOf("/")>-1){f+=this.s7params.params.config.split("/")[1]}else{f+=this.s7params.params.config}}this.s7params.setViewer("504,5.16.5"+f);var d={en:this.symbols,defaultLocale:"en"};this.s7params.setDefaultLocalizedTexts(d);for(var b in this.params){if(b!="localizedtexts"){this.s7params.push(b,this.params[b])}else{this.s7params.setLocalizedTexts(this.params[b])}}this.s7flyout=null;this.s7mediaset=null;this.s7mediasetDesc=null;this.s7visibility=null;this.s7swatches=null;this.container=null;this.initialFrame=0;this.visibilityManager=null;this.containerHeight=0;this.singleImage=false;this.isOrientationMarkerForcedChanged=false;var c=this;function g(){c.s7params.push("aemmode",s7viewers.FlyoutViewer.codebase.isDAM?"1":"0");c.s7params.push("tmblayout","0,1");c.s7params.push("resizable","0");c.s7params.push("orientation","0");c.s7params.push("FlyoutZoomView.enablehd","never");c.s7params.push("textpos","none");if(a.browser.device.name!="desktop"){c.s7params.push("enablescrollbuttons","0")}var i=c.getParam("fixinputmarker");if(i){c.fixinputmarker=(i=="s7touchinput"||i=="s7mouseinput")?c.fixinputmarker=i:null}var h=c.getURLParameter("fixinputmarker");if(h){c.fixinputmarker=(h=="s7touchinput"||h=="s7mouseinput")?c.fixinputmarker=h:null}if(c.fixinputmarker){if(c.fixinputmarker==="s7mouseinput"){c.addClass(c.containerId,"s7mouseinput")}else{if(c.fixinputmarker==="s7touchinput"){c.addClass(c.containerId,"s7touchinput")}}}else{if(a.browser.supportsTouch()){c.addClass(c.containerId,"s7touchinput")}else{c.addClass(c.containerId,"s7mouseinput")}}c.parseMods();c.container=new a.common.Container(c.containerId,c.s7params,c.containerId+"_container");if(c.container.isInLayout()){e()}else{c.container.addEventListener(a.event.ResizeEvent.ADDED_TO_LAYOUT,e,false)}}function e(){c.container.removeEventListener(a.event.ResizeEvent.ADDED_TO_LAYOUT,e,false);c.container.addEventListener(a.event.ResizeEvent.COMPONENT_RESIZE,q,false);c.container.addEventListener(a.event.ResizeEvent.FULLSCREEN_RESIZE,p,false);c.container.addEventListener(a.event.ResizeEvent.SIZE_MARKER_CHANGE,i,false);var r=document.getElementById(c.containerId);var m=r.style.minHeight;r.style.minHeight="1px";var t=document.createElement("div");t.style.position="relative";t.style.width="100%";t.style.height="100%";r.appendChild(t);var j=t.offsetHeight;if(t.offsetHeight<=1){r.style.height="100%";j=t.offsetHeight}r.removeChild(t);r.style.minHeight=m;var n=false;switch(c.s7params.get("responsive","auto")){case"fit":n=false;break;case"constrain":n=true;break;default:n=j==0;break}c.updateCSSMarkers();c.updateOrientationMarkers();if(c.container.isFixedSize()){c.viewerMode="fixed"}else{if(n){c.viewerMode="ratio"}else{c.viewerMode="free"}}var k=c.getMainViewSize();if(k.height>0){c.legacyFixedSizing=true}if(c.legacyFixedSizing){var u=r.clientWidth;var o=r.clientHeight;if(!isNaN(u)&&!isNaN(o)){c.container.resize(u,o)}}c.containerHeight=c.container.getHeight();document.getElementById(c.containerId+"_container").style.overflow="visible";c.s7flyout=new a.FlyoutZoomView(c.container,c.s7params,c.containerId+"_flyout");c.s7flyout.setCSS(".s7flyoutzoomview","visibility","hidden");c.s7swatches=new a.Swatches(c.container,c.s7params,c.containerId+"_swatches");c.trackingManager.attach(c.s7swatches);c.s7swatches.addEventListener(a.AssetEvent.SWATCH_SELECTED_EVENT,x,false);c.trackingManager.attach(c.s7flyout);c.s7mediaset=new a.MediaSet(null,c.s7params,c.containerId+"_mediaset");c.trackingManager.attach(c.s7mediaset);c.s7mediaset.addEventListener(a.AssetEvent.NOTF_SET_PARSED,s,false);c.trackingManager.setCallback(v);if((typeof(AppMeasurementBridge)=="function")&&(c.isConfig2Exist==true)){c.appMeasurementBridge=new AppMeasurementBridge(c.trackingParams)}function v(z,w,C,h,A){if(!c.handlers.trackEvent&&c.isConfig2Exist!=true&&a.Modifier.parse(c.s7params.get("launch","true"),[true]).values[0]){if(typeof(_satellite)!="undefined"&&_satellite._dmviewers_v001){c.handlers.trackEvent=_satellite._dmviewers_v001().trackingFn}}if(c.appMeasurementBridge){c.appMeasurementBridge.track(z,w,C,h,A)}if(c.handlers.trackEvent){if(typeof window.s7sdk=="undefined"){window.s7sdk=a}var B=c.containerId;c.handlers.trackEvent(B,w,C,h,A)}if("s7ComponentEvent" in window){s7ComponentEvent(z,w,C,h,A)}}if(c.viewerMode=="ratio"){r.style.height="auto"}function y(z,w,h){if(c.legacyFixedSizing){return}if((c.s7swatches!=null)&&!c.singleImage){c.s7swatches.resize(z,c.s7swatches.getHeight())}c.s7flyout.resize(z,h)}function q(h){if((typeof(h.target)=="undefined")||(h.target==document.getElementById(c.containerId+"_container"))){if(!c.container.isInLayout()||c.legacyFixedSizing){return}var w=h.s7event.h;w=c.singleImage?h.s7event.h:(h.s7event.h-((c.s7swatches!=null)?c.s7swatches.getHeight():0));y(h.s7event.w,h.s7event.h,w)}}function p(h){}function i(h){c.updateCSSMarkers()}function s(A){c.s7mediasetDesc=A.s7event.asset;c.initialFrame=Math.max(0,parseInt((typeof(c.s7params.get("initialframe"))!="undefined")?c.s7params.get("initialframe"):0));if(c.initialFrame<c.s7mediasetDesc.items.length){}else{c.initialFrame=0}var z;if(c.viewerMode=="ratio"){var B=c.s7mediasetDesc.items[0];z=B.width/B.height}if(c.s7mediasetDesc.items.length>1){c.singleImage=false;if(c.s7swatches!=null){c.s7swatches.setCSS(".s7swatches","visibility","inherit")}if(c.viewerMode=="fixed"){c.container.resize(c.container.getWidth(),c.containerHeight);y(c.container.getWidth(),c.containerHeight,c.containerHeight-c.s7swatches.getHeight())}else{if(c.viewerMode=="ratio"){var h=c.container.getWidth();c.container.setModifier({aspect:h/(h/z+c.s7swatches.getHeight())})}else{y(c.container.getWidth(),c.containerHeight,c.containerHeight-c.s7swatches.getHeight())}}c.s7swatches.setMediaSet(c.s7mediasetDesc);c.s7swatches.selectSwatch(c.initialFrame,true)}else{if(c.s7mediasetDesc.items.length==1){c.singleImage=true;if(c.s7swatches!=null){c.s7swatches.setCSS(".s7swatches","visibility","hidden")}if(c.viewerMode=="fixed"){c.container.resize(c.container.getWidth(),c.containerHeight-c.s7swatches.getHeight())}else{if(c.viewerMode=="ratio"){c.container.setModifier({aspect:z})}else{y(c.container.getWidth(),c.container.getHeight(),c.container.getHeight())}}c.s7flyout.setItem(c.s7mediasetDesc.items[c.initialFrame])}}if((c.handlers.initComplete!=null)&&(typeof c.handlers.initComplete=="function")&&!c.firstMediasetParsed){if(typeof window.s7sdk=="undefined"){window.s7sdk=a}c.handlers.initComplete()}c.firstMediasetParsed=true;if(c.s7flyout){c.s7flyout.setCSS(".s7flyoutzoomview","visibility","inherit")}}function x(w){var h=w.s7event.asset;if(c.s7flyout){c.s7flyout.setItem(h)}}function l(h){if((c.s7swatches)&&(c.s7swatches.getFrame()!=h.s7event.frame)){c.s7swatches.selectSwatch(h.s7event.frame,true)}}}this.s7params.addEventListener(a.Event.SDK_READY,function(){c.initSiteCatalyst(c.s7params,g)},false);this.s7params.setProvidedSdk(this.sdkProvided);this.s7params.init()};s7viewers.FlyoutViewer.prototype.setParam=function(b,c){if(this.isDisposed){return}this.params[b]=c};s7viewers.FlyoutViewer.prototype.getParam=function(c){var d=c.toLowerCase();for(var b in this.params){if(b.toLowerCase()==d){return this.params[b]}}return null};s7viewers.FlyoutViewer.prototype.setParams=function(b){if(this.isDisposed){return}var e=b.split("&");for(var c=0;c<e.length;c++){var d=e[c].split("=");if(d.length>1){this.setParam(d[0],decodeURIComponent(e[c].split("=")[1]))}}};s7viewers.FlyoutViewer.prototype.s7sdkUtilsAvailable=function(){if(s7viewers.FlyoutViewer.codebase.isDAM){return typeof(s7viewers.s7sdk)!="undefined"}else{return(typeof(s7classic)!="undefined")&&(typeof(s7classic.s7sdk)!="undefined")}};s7viewers.FlyoutViewer.prototype.init=function(){if(this.isDisposed){return}if(this.initCalled){return}this.initCalled=true;if(this.initializationComplete){return this}this.lockurldomains=(Boolean(Number(this.params.lockurldomains))||typeof this.params.lockurldomains=="undefined")?1:0;var i=document.getElementById(this.containerId);if(i.className!=""){if(i.className.indexOf(s7viewers.FlyoutViewer.cssClassName)!=-1){}else{i.className+=" "+s7viewers.FlyoutViewer.cssClassName}}else{i.className=s7viewers.FlyoutViewer.cssClassName}this.s7sdkNamespace=s7viewers.FlyoutViewer.codebase.isDAM?"s7viewers":"s7classic";var d=this.getContentUrl()+this.sdkBasePath+"js/s7sdk/utils/Utils.js?namespace="+this.s7sdkNamespace;var f=null;if(document.scripts){f=document.scripts}else{f=document.getElementsByTagName("script")}if(this.s7sdkUtilsAvailable()){a=(s7viewers.FlyoutViewer.codebase.isDAM?s7viewers.s7sdk:s7classic.s7sdk);this.sdkProvided=true;if(this.isDisposed){return}a.Util.init();this.includeViewer();this.initializationComplete=true}else{if(!this.s7sdkUtilsAvailable()&&(s7viewers.FlyoutViewer.codebase.isDAM?s7viewers.S7SDK_S7VIEWERS_LOAD_STARTED:s7viewers.S7SDK_S7CLASSIC_LOAD_STARTED)){this.sdkProvided=true;var h=this;var g=setInterval(function(){if(h.s7sdkUtilsAvailable()){clearInterval(g);a=(s7viewers.FlyoutViewer.codebase.isDAM?s7viewers.s7sdk:s7classic.s7sdk);if(h.isDisposed){return}a.Util.init();h.includeViewer();h.initializationComplete=true}},100)}else{this.utilsScriptElm=document.createElement("script");this.utilsScriptElm.setAttribute("language","javascript");this.utilsScriptElm.setAttribute("type","text/javascript");var e=document.getElementsByTagName("head")[0];var c=this;function b(){if(!c.utilsScriptElm.executed){c.utilsScriptElm.executed=true;a=(s7viewers.FlyoutViewer.codebase.isDAM?s7viewers.s7sdk:s7classic.s7sdk);if(c.s7sdkUtilsAvailable()&&a.Util){if(c.isDisposed){return}a.Util.init();c.includeViewer();c.initializationComplete=true;c.utilsScriptElm.onreadystatechange=null;c.utilsScriptElm.onload=null;c.utilsScriptElm.onerror=null}}}if(typeof(c.utilsScriptElm.readyState)!="undefined"){c.utilsScriptElm.onreadystatechange=function(){if(c.utilsScriptElm.readyState=="loaded"){e.appendChild(c.utilsScriptElm)}else{if(c.utilsScriptElm.readyState=="complete"){b()}}};c.utilsScriptElm.setAttribute("src",d)}else{c.utilsScriptElm.onload=function(){b()};c.utilsScriptElm.onerror=function(){};c.utilsScriptElm.setAttribute("src",d);e.appendChild(c.utilsScriptElm);c.utilsScriptElm.setAttribute("data-src",c.utilsScriptElm.getAttribute("src"));c.utilsScriptElm.setAttribute("src","?namespace="+this.s7sdkNamespace)}if(s7viewers.FlyoutViewer.codebase.isDAM){s7viewers.S7SDK_S7VIEWERS_LOAD_STARTED=true}else{s7viewers.S7SDK_S7CLASSIC_LOAD_STARTED=true}}}return this};s7viewers.FlyoutViewer.prototype.getDomain=function(b){var c=/(^http[s]?:\/\/[^\/]+)/i.exec(b);if(c==null){return""}else{return c[1]}};s7viewers.FlyoutViewer.prototype.setAsset=function(b){if(this.isDisposed){return}if(this.s7mediaset){this.s7mediaset.setAsset(b)}else{this.setParam("asset",b)}};s7viewers.FlyoutViewer.prototype.setLocalizedTexts=function(b){if(this.isDisposed){return}if(this.s7params){this.s7params.setLocalizedTexts(b)}else{this.setParam("localizedtexts",b)}};s7viewers.FlyoutViewer.prototype.initSiteCatalyst=function(i,c){var f=i.get("asset",null,"MediaSet").split(",")[0].split(":")[0];this.isConfig2Exist=false;if(f.indexOf("/")!=-1){var d=a.MediaSetParser.findCompanyNameInAsset(f);var h=i.get("config2");this.isConfig2Exist=(h!=""&&typeof h!="undefined");if(this.isConfig2Exist){this.trackingParams={siteCatalystCompany:d,config2:h,isRoot:i.get("serverurl")};var b=this.getContentUrl()+"../AppMeasurementBridge.jsp?company="+d;if(i.get("serverurl",null)){b+="&isRoot="+i.get("serverurl")}var g=document.createElement("script");g.setAttribute("language","javascript");g.setAttribute("type","text/javascript");g.setAttribute("src",b);var e=document.getElementsByTagName("head");g.onload=g.onerror=function(){if(!g.executed){g.executed=true;if(typeof c=="function"){c()}g.onreadystatechange=null;g.onload=null;g.onerror=null}};g.onreadystatechange=function(){if(g.readyState=="complete"||g.readyState=="loaded"){setTimeout(function(){if(!g.executed){g.executed=true;if(typeof c=="function"){c()}}g.onreadystatechange=null;g.onload=null;g.onerror=null},0)}};e[0].appendChild(g)}else{if(typeof c=="function"){c()}}}};s7viewers.FlyoutViewer.prototype.getComponent=function(b){if(this.isDisposed){return null}switch(b){case"container":return this.container||null;case"swatches":return this.s7swatches||null;case"flyout":return this.s7flyout||null;case"mediaSet":return this.s7mediaset||null;case"parameterManager":return this.s7params||null;default:return null}};s7viewers.FlyoutViewer.prototype.setHandlers=function(c){if(this.isDisposed){return}if(this.initCalled){return}this.handlers=[];for(var b in c){if(!c.hasOwnProperty(b)){continue}if(typeof c[b]!="function"){continue}this.handlers[b]=c[b]}};s7viewers.FlyoutViewer.prototype.getModifiers=function(){return this.modifiers};s7viewers.FlyoutViewer.prototype.setModifier=function(f){if(this.isDisposed){return}var h,c,j,b,g,e;for(h in f){if(!this.modifiers.hasOwnProperty(h)){continue}c=this.modifiers[h];try{b=f[h];if(c.parseParams===false){g=new a.Modifier([b!=""?b:c.defaults[0]])}else{g=a.Modifier.parse(b,c.defaults,c.ranges)}if(g.values.length==1){this[h]=g.values[0];this.setModifierInternal(h)}else{if(g.values.length>1){j={};for(e=0;e<g.values.length;e++){j[c.params[e]]=g.values[e]}this[h]=j;this.setModifierInternal(h)}}}catch(d){throw new Error("Unable to process modifier: '"+h+"'. "+d)}}};s7viewers.FlyoutViewer.prototype.setModifierInternal=function(b){switch(b){default:break}};s7viewers.FlyoutViewer.prototype.parseMods=function(){var g,c,h,b,f,e;for(g in this.modifiers){if(!this.modifiers.hasOwnProperty(g)){continue}c=this.modifiers[g];try{b=this.s7params.get(g,"");if(c.parseParams===false){f=new a.Modifier([b!=""?b:c.defaults[0]])}else{f=a.Modifier.parse(b,c.defaults,c.ranges)}if(f.values.length==1){this[g]=f.values[0]}else{if(f.values.length>1){h={};for(e=0;e<f.values.length;e++){h[c.params[e]]=f.values[e]}this[g]=h}}}catch(d){throw new Error("Unable to process modifier: '"+g+"'. "+d)}}};s7viewers.FlyoutViewer.prototype.updateCSSMarkers=function(){var c=this.container.getSizeMarker();var b;if(c==a.common.Container.SIZE_MARKER_NONE){return}if(c==a.common.Container.SIZE_MARKER_LARGE){b="s7size_large"}else{if(c==a.common.Container.SIZE_MARKER_SMALL){b="s7size_small"}else{if(c==a.common.Container.SIZE_MARKER_MEDIUM){b="s7size_medium"}}}if(this.containerId){this.setNewSizeMarker(this.containerId,b)}this.reloadInnerComponents()};s7viewers.FlyoutViewer.prototype.reloadInnerComponents=function(){var c=this.s7params.getRegisteredComponents();for(var b=0;b<c.length;b++){if(c[b]&&c[b].restrictedStylesInvalidated()){c[b].reload()}}};s7viewers.FlyoutViewer.prototype.setNewSizeMarker=function(f,c){var b=document.getElementById(f).className;var d=/^(.*)(s7size_small|s7size_medium|s7size_large)(.*)$/gi;var e;if(b.match(d)){e=b.replace(d,"$1"+c+"$3")}else{e=b+" "+c}if(b!=e){document.getElementById(f).className=e}};s7viewers.FlyoutViewer.prototype.getMainViewSize=function(){if(this.isDisposed){return}var d=document.getElementById(this.containerId+"_container");var c=document.createElement("div");c.style.position="absolute";c.className="s7flyoutzoomview";c.style.borderStyle="none";c.style.margin="0px";c.style.padding="0px";d.appendChild(c);var b={width:0,height:0};if(c.offsetHeight>0){b.width=c.offsetWidth;b.height=c.offsetHeight}d.removeChild(c);return b};s7viewers.FlyoutViewer.prototype.dispose=function(){if(this.appMeasurementBridge){this.appMeasurementBridge.dispose();this.appMeasurementBridge=null}if(this.trackingManager){this.trackingManager.dispose();this.trackingManager=null}if(this.visibilityManager){this.visibilityManager.dispose();this.visibilityManager=null}if(this.s7swatches){this.s7swatches.dispose();this.s7swatches=null}if(this.s7flyout){this.s7flyout.dispose();this.s7flyout=null}if(this.s7mediaset){this.s7mediaset.dispose();this.s7mediaset=null}if(this.s7params){this.s7params.dispose();this.s7params=null}if(this.container){var e=[s7viewers.FlyoutViewer.cssClassName,"s7touchinput","s7mouseinput","s7size_large","s7size_small","s7size_medium"];var c=document.getElementById(this.containerId).className.split(" ");for(var d=0;d<e.length;d++){var b=c.indexOf(e[d]);if(b!=-1){c.splice(b,1)}}document.getElementById(this.containerId).className=c.join(" ");this.container.dispose();this.container=null}this.s7mediasetDesc=null;this.s7visibility=null;this.handlers=[];this.isDisposed=true};s7viewers.FlyoutViewer.prototype.updateOrientationMarkers=function(){if(!this.isOrientationMarkerForcedChanged){var b;if(window.innerWidth>window.innerHeight){b="s7device_landscape"}else{b="s7device_portrait"}if(document.getElementById(this.containerId).className.indexOf(b)==-1){this.setNewOrientationMarker(this.containerId,b);this.reloadInnerComponents()}}};s7viewers.FlyoutViewer.prototype.setNewOrientationMarker=function(f,c){var b=document.getElementById(f).className;var d=/^(.*)(s7device_landscape|s7device_portrait)(.*)$/gi;var e;if(b.match(d)){e=b.replace(d,"$1"+c+"$3")}else{e=b+" "+c}if(b!=e){document.getElementById(f).className=e}};s7viewers.FlyoutViewer.prototype.forceDeviceOrientationMarker=function(b){switch(b){case"s7device_portrait":case"s7device_landscape":this.isOrientationMarkerForcedChanged=true;if(this.containerId){this.setNewOrientationMarker(this.containerId,b)}this.reloadInnerComponents();break;case null:this.isOrientationMarkerForcedChanged=false;this.updateOrientationMarkers();break;default:break}};s7viewers.FlyoutViewer.prototype.getURLParameter=function(c){var b=a.ParameterManager.getSanitizedParameters(a.query.params,this.lockurldomains);return b[c]};s7viewers.FlyoutViewer.prototype.addClass=function(d,c){var b=document.getElementById(d).className.split(" ");if(b.indexOf(c)==-1){b[b.length]=c;document.getElementById(d).className=b.join(" ")}}})()};