!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){!function(){const e="https://xadmin.arenacommerce.com/api/bizZdvfoBMDgRWtur7SIdPJ1y8ZIeKj9/";let t=document.getElementById("verifyCodeForm"),n=document.getElementById("verifyCode"),o=document.getElementById("verify-error");function r(){o.style.display="none",t.classList.remove("fail-to-verify"),document.body.classList.add("not-verify"),n.classList.add("is-open"),document.getElementById("arnHowGetPCode").style.fontWeight=null}function i(e){o.style.display="block",o.textContent=e||"Please try again!",t.classList.add("fail-to-verify")}theme.info.name="MyMedi",fetch(e+"get-active-code",{method:"POST",mode:"cors",header:{"Content-Type":"application/json"},body:JSON.stringify({shop:Shopify.shop})}).then(e=>e.json()).then(e=>{![...e.code_list.filter(e=>e.theme_name.toLowerCase().includes(theme.info.name.toLowerCase()))].length&&r()}).catch(e=>{r()}),t.addEventListener("submit",o=>{o.preventDefault(),t.querySelector('[name="pcode"]').checkValidity();let a=t.querySelector('[name="pcode"]').value.trim();r(),function(t,o){fetch(e+"check-purchase-code/"+t,{method:"GET",mode:"cors",header:{"Content-Type":"text/html"}}).then(o=>{o.text().then(o=>{let r=(new DOMParser).parseFromString(o,"text/html"),a=r.getElementById("theme_name").textContent.toLowerCase().trim();if("arenacommerce"!=r.getElementById("author-name").textContent.trim()||!a.includes(theme.info.name.toLowerCase()))return void i("Your license key invalid, please try again!");let c=r.querySelector("[theme-id]").getAttribute("theme-id"),d=r.getElementById("sold_at").textContent.trim(),l=r.getElementById("supported_until").textContent.trim(),s={shop:Shopify.shop,theme_id:c,theme_name:a,sold_at:d,supported_until:l};fetch(e+"active-code/"+t,{method:"POST",mode:"cors",header:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then(e=>{e.json().then(e=>{"success"==e.status?(document.body.classList.remove("not-verify"),n.remove()):i(e.msg)})}).catch(e=>{console.log("Error",e),i(e)})})}).catch(e=>{console.log("Error",e),i("You purchase is invalid, please check again!"),document.getElementById("arnHowGetPCode").style.fontWeight="600"})}(a)})}()}]);