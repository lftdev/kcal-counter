(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(r){if(r.ep)return;r.ep=!0;const e=s(r);fetch(r.href,e)}})();const h=({servingSize:t,foodAmount:o,proteins:s,carbs:i,fats:r})=>(s*4+i*4+r*9)*o/t,y="modulepreload",g=function(t){return"/"+t},d={},v=function(o,s,i){if(!s||s.length===0)return o();const r=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=g(e),e in d)return;d[e]=!0;const n=e.endsWith(".css"),p=n?'[rel="stylesheet"]':"";if(!!i)for(let a=r.length-1;a>=0;a--){const u=r[a];if(u.href===e&&(!n||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${p}`))return;const c=document.createElement("link");if(c.rel=n?"stylesheet":y,n||(c.as="script",c.crossOrigin=""),c.href=e,document.head.appendChild(c),n)return new Promise((a,u)=>{c.addEventListener("load",a),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>o()).catch(e=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=e,window.dispatchEvent(n),!n.defaultPrevented)throw e})};function E(t){const o=document.getElementById("results-display");o&&t.removeChild(o)}function L(t){v(()=>import("./templates-5987baf3.js"),[]).then(o=>{Object.keys(o).forEach(s=>{const i=document.createElement("option");i.innerText=s,t.appendChild(i)})})}function O(t,o,s,i,r){const e=document.createElement("div");e.id="results-display",t.appendChild(e),e.innerHTML=`
    <h2>Your Food Information</h2>
    <p>Proteins calories: ${o}</p>
    <p>Carbs calories: ${s}</p>
    <p>Fats calories: ${i}</p>
    <h3>TOTAL: ${r}</h3>
    `}function S(t){t.value=JSON.parse(window.localStorage.getItem("data"))[t.name]}const l={servingSize:0,foodAmount:0,proteins:0,carbs:0,fats:0},f=document.querySelector("main"),w=document.getElementById("templatesList");L(w);const m=document.querySelectorAll('input[type="number"]');m.forEach(t=>{t.oninput=()=>{l[t.name]=parseInt(t.value),window.localStorage.setItem("data",JSON.stringify(l))}});m.forEach(t=>{S(t)});const P=document.querySelector("form");P.onsubmit=t=>{t.preventDefault(),E(f),O(f,l.proteins,l.carbs,l.fats,h(l))};
