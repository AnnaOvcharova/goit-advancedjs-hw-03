import{a as u,S as m,i as n}from"./assets/vendor-B4VkUtbg.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const g="58063966-b991f1971e5a26a9c607a1794",p="https://pixabay.com/api/";function h(s){const o={key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"};return u.get(p,{params:o}).then(a=>a.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),y=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){const o=s.map(({webformatURL:a,largeImageURL:r,tags:e,likes:t,views:i,comments:f,downloads:d})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${r}">
          <img 
            class="gallery-image" 
            src="${a}" 
            alt="${e}" 
          />
        </a>
        <div class="info">
          <div class="info-item">
            <b>Likes</b>
            <span>${t}</span>
          </div>
          <div class="info-item">
            <b>Views</b>
            <span>${i}</span>
          </div>
          <div class="info-item">
            <b>Comments</b>
            <span>${f}</span>
          </div>
          <div class="info-item">
            <b>Downloads</b>
            <span>${d}</span>
          </div>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",o),y.refresh()}function L(){l.innerHTML=""}function v(){c.classList.remove("is-hidden")}function w(){c.classList.add("is-hidden")}const P=document.querySelector(".form");P.addEventListener("submit",s=>{s.preventDefault();const o=s.currentTarget.elements["search-text"].value.trim();if(!o){n.warning({message:"Please enter a search term",position:"topRight"});return}L(),v();const a=new Promise(r=>setTimeout(r,1e3));Promise.all([h(o),a]).then(([r])=>{if(r.hits.length===0){n.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff",theme:"dark",close:!0,progressBarColor:"#b51b1b"});return}b(r.hits)}).catch(r=>{n.show({message:"Something went wrong. Please try again later.",position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff",theme:"dark"}),console.error(r)}).finally(()=>{w(),s.target.reset()})});
//# sourceMappingURL=index.js.map
