"use strict";function aload(t){return t=t||window.document.querySelectorAll("[data-aload]"),void 0===t.length&&(t=[t]),[].forEach.call(t,function(t){t["LINK"!==t.tagName?"src":"href"]=t.getAttribute("data-aload"),t.removeAttribute("data-aload")}),t}function menuMob(){document.getElementById("drop-menu").classList.toggle("show")}window.onclick=function(t){if(!t.target.matches(".dropbtn")){var o=document.getElementById("drop-menu");o.classList.contains("show")&&o.classList.remove("show")}},window.onload=function(){aload()};