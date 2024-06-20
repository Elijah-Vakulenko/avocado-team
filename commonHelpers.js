import{i as g,A as ee,a as te,S as oe,t as W}from"./assets/vendor-862ff358.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const w of c.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&s(w)}).observe(document,{childList:!0,subtree:!0});function e(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(r){if(r.ep)return;r.ep=!0;const c=e(r);fetch(r.href,c)}})();const re=document.querySelector(".open-menu-btn"),se=document.querySelector(".close-menu-btn"),A=document.querySelector(".mob-menu"),ce=document.querySelectorAll(".nav-link");re.addEventListener("click",()=>{A.classList.add("is-open"),document.body.classList.add("mob-menu-open")});se.addEventListener("click",()=>{A.classList.remove("is-open"),document.body.classList.remove("mob-menu-open")});ce.forEach(t=>{t.addEventListener("click",()=>{A.classList.remove("is-open"),document.body.classList.remove("mob-menu-open")})});document.getElementById("orderButton").addEventListener("click",function(){document.querySelector("#contacts").scrollIntoView({behavior:"smooth"})});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".tech-skills-list").forEach(o=>{const e=o.cloneNode(!0);o.parentElement.appendChild(e)})});document.querySelector(".tech-skills-cover");document.querySelector(".cover-rotate");document.querySelectorAll(".tech-skills-item-block");function T(){return{projectsList:document.querySelector(".js-project-list"),loadMoreBtn:document.querySelector('[data-action="load-more"]'),backToTopButton:document.querySelector('button[data-action="back-to-top"]'),header:document.querySelector(".js-header")}}const ae="/avocado-team/assets/wallet@1x-c6d4c88b.jpg",ne="/avocado-team/assets/wallet@2x-b72470bc.jpg",le="/avocado-team/assets/organic@1x-62e2860f.jpg",ie="/avocado-team/assets/organic@2x-201a36dd.jpg",de="/avocado-team/assets/english@1x-b622446f.jpg",ue="/avocado-team/assets/english@2x-987f1d0d.jpg",me="/avocado-team/assets/power-pulse@1x-182204f3.jpg",pe="/avocado-team/assets/power-pulse@2x-4f8d0f87.jpg",ye="/avocado-team/assets/mimino@1x-8a18ee69.jpg",fe="/avocado-team/assets/mimino@2x-479b9610.jpg",ge="/avocado-team/assets/ukraine@1x-a5c67023.jpg",he="/avocado-team/assets/ukraine@2x-e0757f89.jpg",ve="/avocado-team/assets/chego@1x-5e388199.jpg",be="/avocado-team/assets/chego@2x-0a0ad0a1.jpg",we="/avocado-team/assets/energy@1x-abfb42f2.jpg",Pe="/avocado-team/assets/energy@2x-f3388257.jpg",Se="/avocado-team/assets/fruitbox@1x-2f06e7f4.jpg",ke="/avocado-team/assets/fruitbox@2x-7b2420b0.jpg",Ee="/avocado-team/assets/starlight@1x-0e2e1516.jpg",Le="/avocado-team/assets/starlight@2x-0fab8d08.jpg",y=[{images:{x1:ae,x2:ne},tags:"React, JavaScript, Node JS, Git",name:"Wallet webservice",url:"#"},{images:{x1:le,x2:ie},tags:"React, JavaScript, Node JS, Git",name:"Green harvest webservice",url:"#"},{images:{x1:de,x2:ue},tags:"React, JavaScript, Node JS, Git",name:"English Exellence webservice",url:"#"},{images:{x1:me,x2:pe},tags:"React, JavaScript, Node JS, Git",name:"power pulse webservice",url:"#"},{images:{x1:ye,x2:fe},tags:"React, JavaScript, Node JS, Git",name:"mimino website",url:"#"},{images:{x1:ge,x2:he},tags:"React, JavaScript, Node JS, Git",name:"vyshyvanka vibes Landing Page",url:"#"},{images:{x1:ve,x2:be},tags:"React, JavaScript, Node JS, Git",name:"chego jewelry website",url:"#"},{images:{x1:we,x2:Pe},tags:"React, JavaScript, Node JS, Git",name:"energy flow webservice",url:"#"},{images:{x1:Se,x2:ke},tags:"React, JavaScript, Node JS, Git",name:"fruitbox online store",url:"#"},{images:{x1:Ee,x2:Le},tags:"React, JavaScript, Node JS, Git",name:"starlight studio landing page",url:"#"}];class je{constructor(){this.page=1,this.perPage=3,this.lastPage=Math.floor(y.length/this.perPage)}fetchProjects(){return this.page===this.lastPage?new Promise((o,e)=>{setTimeout(()=>{o(y.slice(this.page*this.perPage-this.perPage,y.length))},500)}):new Promise((o,e)=>{setTimeout(()=>{o(y.slice(this.page*this.perPage-this.perPage,this.page*this.perPage))},500)})}incrementPage(){this.page+=1}resetPage(){this.page=1}}class qe{constructor({selector:o,hidden:e=!1}){this.refs=this.getRefs(o),e&&this.hide()}getRefs(o){const e={};return e.button=document.querySelector(o),e.label=e.button.querySelector(".label"),e}show(){this.refs.button.classList.remove("is-hidden")}hide(){this.refs.button.classList.add("is-hidden")}disable(){this.refs.button.disabled=!0,this.refs.label.textContent="Loading...",this.refs.button.classList.add("loading")}enable(){this.refs.button.disabled=!1,this.refs.label.textContent="Load more",this.refs.button.classList.remove("loading")}}const xe="/avocado-team/assets/icons-e22111ae.svg";function _(){return localStorage.getItem("theme")}function Ae({images:t,tags:o,name:e,url:s}){return`
      <li class="project-item">
        <div class="project-thumb">
          <img
            loading="lazy"
            srcset="
              ${t.x1} 1x,
              ${t.x2} 2x
            "
            data-src="${t.x1}"
            alt="${e}"
            class="project-image lazyload"
          />
          <span class="image-loading js-image-loading">
            <span class="loader"></span>
          </span>
        </div>
        <div class="project-meta">
          <p class="project-tags">${o}</p>
          <div class="row">
            <h3 class="project-heading">${e}</h3>

            <a href="https://github.com/Elijah-Vakulenko/avocado-team" target="_blank" class="project-button  ${_()==="dark"?"dark":""}">
              VISIT
              <svg class="project-button-icon" width="19" height="19">

                <use href="${xe}#icon-arrow-up-right"></use>

              </svg>
            </a>
          </div>
        </div>
      </li>
  `}let h=null;const b=T(),i=new je,P=new qe({selector:'[data-action="load-more"]'});i.resetPage();i.fetchProjects().then(t=>(i.incrementPage(),t)).then(t=>{Z(t)}).then(()=>{h=b.projectsList.querySelectorAll("img[data-src]"),h.forEach(t=>{t.addEventListener("load",Q,{once:!0})})}).finally(()=>{K()});b.loadMoreBtn.addEventListener("click",Te);function Te(){P.disable(),i.fetchProjects().then(t=>{if(Z(t),i.page===i.lastPage){g.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}),P.hide();return}}).then(()=>{i.incrementPage(),Ce()}).then(()=>{h=b.projectsList.querySelectorAll("img[data-src]"),h.forEach(t=>{t.addEventListener("load",Q,{once:!0})})}).catch(t=>console.log(t)).finally(()=>{P.enable(),K()})}function Ce(){const o=document.querySelector(".js-project-list .project-item").getBoundingClientRect().height;window.scrollBy({left:0,top:o,behavior:"smooth"})}function Z(t){const o=t.map(Ae).join("");b.projectsList.insertAdjacentHTML("beforeend",o),Be()}function Be(){const t=document.querySelectorAll(".project-button");if(t.length===0){console.error("Project buttons not found");return}return t}function K(){document.querySelectorAll(".project-image").forEach(o=>{o.addEventListener("load",Ie,{once:!0})})}function Ie(t){t.target.nextElementSibling.classList.add("hidden")}function Q(t){t.target.classList.add("appear")}new ee(".faq-list",{duration:400,showMultiple:!1,elementClass:"faq-list-item",triggerClass:"faq-title-arrow",panelClass:"faq-item-text",activeClass:"faq-list-item-active",openOnInit:[0]});const Me=document.querySelector(".form-btn"),m=document.querySelector(".overlay"),Re=document.querySelector(".btn-close"),x=document.querySelector(".form"),$e=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,De=(t,o)=>{const e=document.querySelector(".modal-header"),s=document.querySelector(".modal-text");e.textContent=t,s.textContent=o,m.classList.remove("hidden"),document.body.classList.add("no-scroll"),setTimeout(()=>m.classList.add("visible"),10)},C=()=>{m.classList.remove("visible"),setTimeout(()=>{m.classList.add("hidden"),document.body.classList.remove("no-scroll")},500)},Je=()=>{let t=!0,o=null;for(let e of x.elements)if(e.type!=="submit"){if(e.value.trim()===""){g.warning({title:"Caution",message:"Please fill all the fields.",position:"center",messageColor:"black",backgroundColor:"#CCEFE1",progressBarColor:"#009156"}),t=!1;break}e.type==="email"&&(o=e)}return t&&o&&!$e.test(o.value.trim())?(g.warning({title:"Caution",message:"Please enter a correct email address.",position:"center",messageColor:"black",backgroundColor:"#CCEFE1",progressBarColor:"#009156"}),!1):t};Me.addEventListener("click",async t=>{if(t.preventDefault(),!Je())return;const o=new FormData(x),e=Object.fromEntries(o.entries());try{const r=await(await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json();x.reset(),De("Thank you for your interest in cooperation!","The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.")}catch(s){g.error({title:"Error",message:s.message,position:"center",messageColor:"black",backgroundColor:"#CCEFE1",progressBarColor:"#009156"})}});Re.addEventListener("click",t=>{t.preventDefault(),C()});m.addEventListener("click",t=>{t.target===m&&C()});window.addEventListener("keydown",t=>{t.key==="Escape"&&C()});const X=document.querySelector("#switch"),Oe=document.querySelector("#mob-switch"),a=document.documentElement,I=document.querySelectorAll("p"),M=document.querySelectorAll("li"),R=document.querySelectorAll("a"),$=document.querySelectorAll("h4"),D=document.querySelectorAll("button"),J=document.querySelectorAll(".faq-i"),O=document.querySelectorAll("a");document.getElementById(".project-button");document.querySelector(".social-list");const d=document.querySelector(".tech-skills-cover:first-of-type"),u=document.querySelector(".tech-skills-cover.cover-rotate"),F=document.querySelector(".js-header"),n=document.querySelector(".email-field"),l=document.querySelector(".textarea-field"),N=document.querySelectorAll("label"),S=document.querySelector(".load-more-btn"),z=document.querySelector(".form-container"),G=document.querySelector(".mob-menu"),Y=document.querySelector(".close-menu-btn"),V=document.querySelector(".close-menu-icon"),f=document.querySelector(".burg-icon"),H=document.querySelectorAll(".faq-icon-up"),U=document.querySelectorAll(".faq-icon-down"),Fe=document.querySelector(".btn-close"),Ne=document.querySelectorAll(".swiper-slide");console.log("🚀 -> reviews:",Ne);let k=null,E=null;const B=(t,o=[])=>{console.log("Applying theme:",t?"dark":"light"),k=document.querySelectorAll(".project-button"),E=document.querySelectorAll(".swiper-slide"),t?(a.style.setProperty("background-color","#1E2023"),a.style.setProperty("color","white"),a.style.setProperty("--social-list-bg-color","#2A2D32"),a.style.setProperty("--ul-social-list-before-bg","#E4E5E6"),I.forEach(e=>e.style.setProperty("color","#f0f0f0")),M.forEach(e=>e.style.setProperty("color","#f0f0f0")),R.forEach(e=>e.style.setProperty("color","#f0f0f0")),$.forEach(e=>e.style.setProperty("color","#f0f0f0")),D.forEach(e=>e.style.setProperty("color","#f0f0f0")),J.forEach(e=>{Array.from(e.children).forEach(s=>s.style.setProperty("color","#f0f0f0"))}),O.forEach(e=>e.classList.add("dark-project-button")),o.forEach(e=>e.style.setProperty("--button-bg-color","#2A2D32")),d.style.setProperty("background-color","#204136"),d.querySelectorAll("li").forEach(e=>{e.style.setProperty("color","#F0F0F0")}),d.querySelectorAll(".tech-skills-item-block").forEach(e=>{e.style.setProperty("background-color","#14C57C")}),u.style.setProperty("background-color","#2A2D32"),u.querySelectorAll("li").forEach(e=>{e.style.setProperty("color","#14C57C")}),u.querySelectorAll(".tech-skills-item-block").forEach(e=>{e.style.setProperty("background-color","#F0F0F0")}),n.style.setProperty("background-color","#2A2D32"),n.style.setProperty("color","rgba(240, 240, 240, 0.60)"),n.style.setProperty("caret-color","rgba(240, 240, 240, 0.60)"),n.style.setProperty("--placeholder-color","rgba(240, 240, 240, 0.60)"),l.style.setProperty("background-color","#2A2D32"),l.style.setProperty("color","rgba(240, 240, 240, 0.60)"),l.style.setProperty("caret-color","rgba(240, 240, 240, 0.60)"),l.style.setProperty("--placeholder-color","rgba(240, 240, 240, 0.60)"),N.forEach(e=>e.style.setProperty("color","#f0f0f0")),z.style.setProperty("background","#2A2D32"),G.style.setProperty("background-color","#1E2023"),Y.style.setProperty("background","#1E2023"),V.style.setProperty("stroke","#f0f0f0"),Fe.style.setProperty("stroke","#f0f0f0"),f.style.setProperty("stroke","#f0f0f0"),f.style.setProperty("fill","#f0f0f0"),H.forEach(e=>e.style.setProperty("stroke","#f0f0f0")),U.forEach(e=>e.style.setProperty("stroke","#f0f0f0")),S.style="",F.classList.add("dark"),S.classList.add("dark"),E.forEach(e=>{e.classList.add("dark")}),k.forEach(e=>{e.classList.add("dark")}),o.forEach(e=>e.style.setProperty("background-color","#2A2D32"))):(a.style.removeProperty("background-color"),a.style.removeProperty("color"),a.style.removeProperty("--social-list-bg-color"),a.style.removeProperty("--ul-social-list-before-bg"),I.forEach(e=>e.style.removeProperty("color")),M.forEach(e=>e.style.removeProperty("color")),R.forEach(e=>e.style.removeProperty("color")),$.forEach(e=>e.style.removeProperty("color")),D.forEach(e=>e.style.removeProperty("color")),J.forEach(e=>{Array.from(e.children).forEach(s=>s.style.removeProperty("color"))}),O.forEach(e=>e.classList.remove("dark-project-button")),d.style.removeProperty("background-color"),d.querySelectorAll("li").forEach(e=>{e.style.removeProperty("color")}),d.querySelectorAll(".tech-skills-item-block").forEach(e=>{e.style.removeProperty("background-color")}),u.style.removeProperty("background-color"),u.querySelectorAll("li").forEach(e=>{e.style.removeProperty("color")}),u.querySelectorAll(".tech-skills-item-block").forEach(e=>{e.style.removeProperty("background-color")}),n.style.removeProperty("background-color"),n.style.removeProperty("color"),n.style.removeProperty("caret-color"),n.style.removeProperty("--placeholder-color"),l.style.removeProperty("background-color"),l.style.removeProperty("color"),l.style.removeProperty("caret-color"),l.style.removeProperty("--placeholder-color"),N.forEach(e=>e.style.removeProperty("color")),z.style.removeProperty("background"),G.style.removeProperty("background"),Y.style.removeProperty("background"),V.style.removeProperty("stroke"),f.style.removeProperty("stroke"),f.style.removeProperty("fill"),H.forEach(e=>e.style.removeProperty("stroke")),U.forEach(e=>e.style.removeProperty("stroke")),F.classList.remove("dark"),S.classList.remove("dark"),E.forEach(e=>{e.classList.remove("dark")}),k.forEach(e=>{e.classList.remove("dark")}),o.forEach(e=>e.style.setProperty("--button-bg-color","#E4E5E6")))};document.addEventListener("DOMContentLoaded",()=>{const t=localStorage.getItem("theme")==="dark";X.checked=t,B(t)});X.addEventListener("change",t=>{const o=t.target.checked;B(o),localStorage.setItem("theme",o?"dark":"light")});Oe.addEventListener("change",t=>{const o=t.target.checked;B(o),localStorage.setItem("theme",o?"dark":"light")});let L=null;document.querySelector(".reviews-container");const ze=document.querySelector(".swiper-wrapper");document.querySelector(".swiper-pagination");document.querySelector(".swiper-button-prev");document.querySelector(".swiper-button-next");document.querySelector(".reviews-error-message");async function Ge(){const t="https://portfolio-js.b.goit.study/api/reviews";try{const e=(await te.get(t)).data;if(e.length===0)throw new Error("No reviews found");const s=e.map(r=>`
      <li class="swiper-slide ${_()==="dark"?"dark":""}">
        <p class="review-content">${r.review}</p>

        <div class="review-author">
          <img loading="lazy" class="review-avatar lazyload" data-src="${r.avatar_url}" alt="Avatar">
          <p class="review-name">${r.author}</p>
        </div>
      </li>
    `).join("");document.getElementById("reviews").innerHTML=s,L=ze.querySelectorAll("img[data-src]"),console.log("🚀 -> lazyImages:",L),L.forEach(r=>{r.addEventListener("load",Ye,{once:!0})}),new oe(".swiper",{direction:"horizontal",speed:750,spaceBetween:10,slidesPerView:1,breakpoints:{768:{slidesPerView:1,spaceBetween:15},1280:{slidesPerView:2,spaceBetween:32}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},simulateTouch:!0,touchRatio:1,grabCursor:!0,slideToClickedSlide:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{sensitivity:1},on:{reachEnd:function(){document.querySelector(".swiper-button-next").classList.add("swiper-button-disabled")},reachBeginning:function(){document.querySelector(".swiper-button-prev").classList.add("swiper-button-disabled")},fromEdge:function(){document.querySelector(".swiper-button-next").classList.remove("swiper-button-disabled"),document.querySelector(".swiper-button-prev").classList.remove("swiper-button-disabled")}}})}catch(o){console.error("Error fetching reviews:",o);const e=document.querySelector(".reviews-error-message");e.style.display="block"}}document.addEventListener("DOMContentLoaded",()=>{Ge()});function Ye(t){console.log("Картинка загрузилась"),t.target.classList.add("appear")}const Ve=new Date().getFullYear();document.getElementById("currentYear").textContent=Ve;const p=T();let j=window.pageYOffset;const He=500;window.addEventListener("scroll",W(Ue,250));p.backToTopButton.addEventListener("click",We);function Ue(t){const o=window.pageYOffset;o>j&&o>He?_e():o<j&&Ze(),j=o}function We(t){window.scrollTo({top:0,behavior:"smooth"})}function _e(){p.backToTopButton.classList.remove("is-hidden"),p.backToTopButton.classList.add("fadeInUp")}function Ze(){p.backToTopButton.classList.add("is-hidden"),p.backToTopButton.classList.remove("fadeInUp")}const v=T();window.addEventListener("scroll",W(Qe,250));let q=window.pageYOffset;const Ke=500;function Qe(t){const o=window.pageYOffset;o>q&&o>Ke?et():o<q&&Xe(),q=o}function Xe(){v.header.classList.remove("is-fixed"),v.header.classList.remove("fadeInDown")}function et(){v.header.classList.add("is-fixed"),v.header.classList.add("fadeInDown")}const tt=document.querySelectorAll("img[data-src]");tt.forEach(t=>{t.addEventListener("load",ot,{once:!0})});function ot(t){t.target.classList.add("appear")}
//# sourceMappingURL=commonHelpers.js.map
