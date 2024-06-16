import{i as y,A as v,a as w,S as b}from"./assets/vendor-9c945ef3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const j=document.querySelector(".open-menu-btn"),x=document.querySelector(".close-menu-btn"),m=document.querySelector(".mob-menu"),S=document.querySelectorAll(".nav-link");j.addEventListener("click",()=>{m.classList.add("is-open")});x.addEventListener("click",()=>{m.classList.remove("is-open")});S.forEach(e=>{e.addEventListener("click",()=>{m.classList.remove("is-open")})});document.getElementById("orderButton").addEventListener("click",function(){document.querySelector("#contacts").scrollIntoView({behavior:"smooth"})});const L=document.querySelector(".form-btn"),a=document.querySelector(".overlay"),q=document.querySelector(".btn-close"),u=document.querySelector(".form"),P=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,E=(e,t)=>{const r=document.querySelector(".modal-header"),o=document.querySelector(".modal-text");r.textContent=e,o.textContent=t,a.classList.remove("hidden"),setTimeout(()=>a.classList.add("visible"),10)},p=()=>{a.classList.remove("visible"),setTimeout(()=>a.classList.add("hidden"),500)},k=()=>{let e=!0,t=null;for(let r of u.elements)if(r.type!=="submit"){if(r.value.trim()===""){alert("Please fill all the fields"),e=!1;break}r.type==="email"&&(t=r)}return e&&t&&!P.test(t.value.trim())?(alert("Please enter a correct email"),!1):e};L.addEventListener("click",async e=>{if(e.preventDefault(),!k())return;const t=new FormData(u),r=Object.fromEntries(t.entries());try{const s=await(await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).json();u.reset(),E("Thank you for your interest in cooperation!","The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.")}catch(o){alert(`There was an error submitting the form: ${o.message}. Please check your data and try again.`)}});q.addEventListener("click",e=>{e.preventDefault(),p()});a.addEventListener("click",e=>{e.target===a&&p()});window.addEventListener("keydown",e=>{e.key==="Escape"&&p()});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".tech-skills-list").forEach(t=>{const r=t.cloneNode(!0);t.parentElement.appendChild(r)})});document.querySelector(".tech-skills-cover");document.querySelector(".cover-rotate");document.querySelectorAll(".tech-skills-item-block");function J(){return{projectsList:document.querySelector(".js-project-list"),loadMoreBtn:document.querySelector('[data-action="load-more"]')}}const c=[{images:{x1:"../../img/my-projects/wallet@1x.jpg",x2:"../../img/my-projects/wallet@2x.jpg"},tags:"React, JavaScript, Node JS, Git",name:"Wallet webservice",url:"#"},{images:{x1:"../../img/my-projects/organic@1x.jpg",x2:"../../img/my-projects/organic@2x.jpg"},tags:"React, JavaScript, Node JS, Git",name:"Green harvest webservice",url:"#"},{images:{x1:"../../img/my-projects/english@1x.jpg",x2:"../../img/my-projects/english@2x.jpg"},tags:"React, JavaScript, Node JS, Git",name:"English Exellence webservice",url:"#"},{images:{x1:"../../img/my-projects/power-pulse@1x.jpg",x2:"../../img/my-projects/power-pulse@2x.jpg"},tags:"React, JavaScript, Node JS, Git",name:"power pulse webservice",url:"#"},{images:{x1:"../../img/my-projects/mimino@1x.jpg",x2:"../../img/my-projects/mimino@2x.jpg"},tags:"React, JavaScript, Node JS, Git",name:"mimino website",url:"#"},{images:{x1:"../../img/my-projects/ukraine@1x.jpg",x2:"../../img/my-projects/ukraine@2x.jpg"},tags:"React, JavaScript, Node JS, Git",name:"vyshyvanka vibes Landing Page",url:"#"},{images:{x1:"../../img/my-projects/chego@1x.jpg",x2:"../../img/my-projects/chego@2x.jpg"},tags:"React, JavaScript, Node JS, Git",name:"chego jewelry website",url:"#"},{images:{x1:"../../img/my-projects/energy@1x.jpg",x2:"../../img/my-projects/energy@2x.jpg"},tags:"React, JavaScript, Node JS, Git",name:"energy flow webservice",url:"#"},{images:{x1:"../../img/my-projects/fruitbox@1x.jpg",x2:"../../img/my-projects/fruitbox@2x.jpg"},tags:"React, JavaScript, Node JS, Git",name:"fruitbox online store",url:"#"},{images:{x1:"../../img/my-projects/starlight@1x.jpg",x2:"../../img/my-projects/starlight@2x.jpg"},tags:"React, JavaScript, Node JS, Git",name:"starlight studio landing page",url:"#"}];class M{constructor(){this.page=1,this.perPage=3,this.lastPage=Math.floor(c.length/this.perPage)}fetchProjects(){return this.page===this.lastPage?new Promise((t,r)=>{setTimeout(()=>{t(c.slice(this.page*this.perPage-this.perPage,c.length))},500)}):new Promise((t,r)=>{setTimeout(()=>{t(c.slice(this.page*this.perPage-this.perPage,this.page*this.perPage))},500)})}incrementPage(){this.page+=1}resetPage(){this.page=1}}class R{constructor({selector:t,hidden:r=!1}){this.refs=this.getRefs(t),r&&this.hide()}getRefs(t){const r={};return r.button=document.querySelector(t),r.label=r.button.querySelector(".label"),r}show(){this.refs.button.classList.remove("is-hidden")}hide(){this.refs.button.classList.add("is-hidden")}disable(){this.refs.button.disabled=!0,this.refs.label.textContent="Loading...",this.refs.button.classList.add("loading")}enable(){this.refs.button.disabled=!1,this.refs.label.textContent="Load more",this.refs.button.classList.remove("loading")}}function T({images:e,tags:t,name:r,url:o}){return`
      <li class="project-item">
        <div class="project-thumb">
          <img
            srcset="
              ${e.x1} 1x,
              ${e.x2} 2x
            "
            src="${e.x1}"
            alt="${r}"
            class="project-image"
          />
          <span class="image-loading js-image-loading">
            <span class="loader"></span>
          </span>
        </div>
        <div class="project-meta">
          <p class="project-tags">${t}</p>
          <div class="row">
            <h3 class="project-heading">${r}</h3>

            <a href="${o}" target="_blank" class="project-button">
              VISIT
              <svg class="project-button-icon" width="19" height="19">
                <use href="../img/symbol-defs.svg#icon-arrow-up-right"></use>
              </svg>
            </a>
          </div>
        </div>
      </li>
  `}const g=J(),n=new M,d=new R({selector:'[data-action="load-more"]'});n.resetPage();n.fetchProjects().then(e=>(n.incrementPage(),e)).then(e=>{h(e)}).finally(()=>{f()});g.loadMoreBtn.addEventListener("click",B);function B(){d.disable(),n.fetchProjects().then(e=>{if(h(e),n.page===n.lastPage){y.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}),d.hide();return}}).then(()=>{n.incrementPage(),C()}).catch(e=>console.log(e)).finally(()=>{d.enable(),f()})}function C(){const t=document.querySelector(".js-project-list .project-item").getBoundingClientRect().height;window.scrollBy({left:0,top:t,behavior:"smooth"})}function h(e){const t=e.map(T).join("");g.projectsList.insertAdjacentHTML("beforeend",t)}function f(){document.querySelectorAll(".project-image").forEach(t=>{t.addEventListener("load",N,{once:!0})})}function N(e){e.target.nextElementSibling.classList.add("hidden")}new v(".faq-list",{duration:400,showMultiple:!1,elementClass:"faq-list-item",triggerClass:"faq-title-arrow",panelClass:"faq-item-text",activeClass:"faq-list-item-active",openOnInit:[0]});document.querySelector(".reviews-container");document.querySelector(".swiper-wrapper");document.querySelector(".swiper-pagination");document.querySelector(".swiper-button-prev");document.querySelector(".swiper-button-next");document.querySelector(".reviews-error-message");async function A(){const e="https://portfolio-js.b.goit.study/api/reviews";try{const r=(await w.get(e)).data;if(r.length===0)throw new Error("No reviews found");const o=r.map(s=>`
      <li class="swiper-slide review-item">
        <p class="review-content">${s.review}</p>
        <div class="review-author">
          <img class="review-avatar" src="${s.avatar_url}" alt="Avatar">
          <p class="review-name">${s.author}</p>
        </div>
      </li>
    `);document.getElementById("reviews").innerHTML=o,new b(".reviews-container",{breakpoints:{0:{slidesPerView:1,spaceBetween:0},1280:{slidesPerView:2,spaceBetween:32,slidesPerGroup:2}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:"swiper-pagination"},simulateTouch:!0,touchRatio:1,grabCursor:!0,slideToClickedSlide:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{sensitivity:1},on:{reachEnd:function(){document.querySelector(".swiper-button-next").classList.add("swiper-button-disabled")},reachBeginning:function(){document.querySelector(".swiper-button-prev").classList.add("swiper-button-disabled")},fromEdge:function(){document.querySelector(".swiper-button-next").classList.remove("swiper-button-disabled"),document.querySelector(".swiper-button-prev").classList.remove("swiper-button-disabled")}}})}catch(t){console.error("Error fetching reviews:",t);const r=document.querySelector(".reviews-error-message");r.style.display="block"}}document.addEventListener("DOMContentLoaded",()=>{A()});
//# sourceMappingURL=commonHelpers.js.map
