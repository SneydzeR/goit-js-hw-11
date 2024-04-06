import{i,S as l}from"./assets/vendor-5b791d57.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function c(o){const e={q:o,key:"43138861-aa01fee7d014e33c8f4078e7d",image_type:"photo",orientation:"horizontal",safesearch:!0};return fetch(`https://pixabay.com/api/?key=${e.key}&q=${e.q}&image_type=${e.image_type}&orientation=${e.orientation}&safesearch=${e.safesearch}`).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json()}).then(s=>s).catch(s=>{throw console.error("Error fetching data: ",s),s})}function u(){return document.querySelector(".search").value.trim()}function p(o){const e=document.querySelector(".gallery"),s=o.hits.map(a=>`<li class="gallery-item">
        <a class="image-link" href="${a.largeImageURL}">
          <img class="image" src="${a.webformatURL}" alt="${a.tags}" />
        </a>
        <ul class="about-image">
          <li class="likes">
            <span class="likes-title">Likes</span>
            <span class="likes-count">${a.likes}</span>
          </li>
          <li class="views">
            <span class="views-title">Views</span>
            <span class="views-count">${a.views}</span>
          </li>
          <li class="comments">
            <span class="comments-title">Comments</span>
            <span class="comments-count">${a.comments}</span>
          </li>
          <li class="downloads">
            <span class="downloads-title">Downloads</span>
            <span class="downloads-count">${a.downloads}</span>
          </li>
        </ul>
      </li>`).join("");e.insertAdjacentHTML("beforeend",s),new l(".gallery a",{captionsData:"alt",captionsDelay:250}).refresh()}function d(o){const e=document.querySelector(".loader");e.style.display="block",c(o).then(s=>{e.style.display="none",s.hits.length===0?i.error({theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight",progressBarColor:"#B51B1B"}):p(s)}).catch(s=>{e.style.display="none",i.error({theme:"dark",message:"Failed to fetch images. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight",progressBarColor:"#B51B1B"}),console.error("Error during fetch operation: ",s)})}const m=document.querySelector(".search-form"),f=document.querySelector(".gallery");function g(o){o.preventDefault();const e=u();e.length===0?i.error({theme:"dark",message:"The field must be filled",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight",progressBarColor:"#B51B1B"}):(f.innerHTML="",d(e),o.currentTarget.elements.search.value="")}m.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map
