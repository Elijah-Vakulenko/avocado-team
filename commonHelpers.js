import{A as l}from"./assets/vendor-8f98089f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();document.querySelector(".tech-skills-cover");document.querySelector(".cover-rotate");const u=document.querySelectorAll(".tech-skills-item-block");console.log(u);new l(".faq-list",{duration:400,showMultiple:!1,elementClass:"faq-list-item",triggerClass:"faq-title-arrow",panelClass:"faq-item-text",activeClass:"faq-list-item-active",openOnInit:[0]});const a=document.querySelector(".open-menu-btn"),d=document.querySelector(".close-menu-btn"),r=document.querySelector(".mob-menu"),m=document.querySelectorAll(".nav-link");a.addEventListener("click",()=>{r.classList.add("is-open")});d.addEventListener("click",()=>{r.classList.remove("is-open")});m.forEach(s=>{s.addEventListener("click",()=>{r.classList.remove("is-open")})});document.getElementById("orderButton").addEventListener("click",function(){document.querySelector("#contacts").scrollIntoView({behavior:"smooth"})});
//# sourceMappingURL=commonHelpers.js.map
