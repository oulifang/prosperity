(function(window){var svgSprite='<svg><symbol id="icon-daohang" viewBox="0 0 1024 1024"><path d="M887.212102 264.644379 320.083527 264.644379c-29.826306 0-54.012148-23.896246-54.012148-53.723575s24.185842-53.723575 54.012148-53.723575l567.127552 0c29.827329 0 54.012148 23.896246 54.012148 53.723575S917.039431 264.644379 887.212102 264.644379z"  ></path><path d="M887.212102 562.426483 320.083527 562.426483c-29.826306 0-54.012148-24.408923-54.012148-54.235229 0-29.828352 24.185842-54.235229 54.012148-54.235229l567.127552 0c29.827329 0 54.012148 24.406876 54.012148 54.235229C941.22425 538.018583 917.039431 562.426483 887.212102 562.426483z"  ></path><path d="M887.212102 859.18528 320.083527 859.18528c-29.826306 0-54.012148-24.407899-54.012148-54.235229s24.185842-54.235229 54.012148-54.235229l567.127552 0c29.827329 0 54.012148 24.407899 54.012148 54.235229S917.039431 859.18528 887.212102 859.18528z"  ></path><path d="M153.565003 257.94377l-47.261397 0c-13.05534 0-23.630187-10.601452-23.630187-23.655769l0-47.234791c0-13.080923 10.574846-23.630187 23.630187-23.630187l47.261397 0c13.054317 0 23.630187 10.549264 23.630187 23.630187l0 47.234791C177.19519 247.341295 166.61932 257.94377 153.565003 257.94377L153.565003 257.94377z"  ></path><path d="M153.565003 852.076372l-47.261397 0c-13.05534 0-23.630187-10.600429-23.630187-23.655769l0-47.233768c0-13.080923 10.574846-23.63121 23.630187-23.63121l47.261397 0c13.054317 0 23.630187 10.550287 23.630187 23.63121l0 47.233768C177.19519 841.475943 166.61932 852.076372 153.565003 852.076372L153.565003 852.076372z"  ></path><path d="M153.565003 541.507034l-47.261397 0c-13.05534 0-23.630187-10.601452-23.630187-23.655769l0-47.234791c0-13.080923 10.574846-23.630187 23.630187-23.630187l47.261397 0c13.054317 0 23.630187 10.549264 23.630187 23.630187l0 47.234791C177.19519 530.905582 166.61932 541.507034 153.565003 541.507034L153.565003 541.507034z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)