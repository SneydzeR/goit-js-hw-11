import{i,S as c}from"./assets/vendor-5b791d57.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function u(a){const e={q:a,key:"43138861-aa01fee7d014e33c8f4078e7d",image_type:"photo",orientation:"horizontal",safesearch:!0};return fetch(`https://pixabay.com/api/?key=${e.key}&q=${e.q}&image_type=${e.image_type}&orientation=${e.orientation}&safesearch=${e.safesearch}`).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json()}).then(s=>s).catch(s=>{throw console.error("Error fetching data: ",s),s})}function p(){return document.querySelector(".search").value.trim()}function d(a){const e=document.querySelector(".gallery"),s=a.hits.map(o=>`<li class="gallery-item">
        <a class="image-link" href="${o.largeImageURL}">
          <img class="image" src="${o.webformatURL}" alt="${o.tags}" />
        </a>
        <ul class="about-image">
          <li class="likes">
            <span class="likes-title">Likes</span>
            <span class="likes-count">${o.likes}</span>
          </li>
          <li class="views">
            <span class="views-title">Views</span>
            <span class="views-count">${o.views}</span>
          </li>
          <li class="comments">
            <span class="comments-title">Comments</span>
            <span class="comments-count">${o.comments}</span>
          </li>
          <li class="downloads">
            <span class="downloads-title">Downloads</span>
            <span class="downloads-count">${o.downloads}</span>
          </li>
        </ul>
      </li>`).join("");e.insertAdjacentHTML("beforeend",s),new c(".gallery a",{captionsData:"alt",captionsDelay:250}).refresh()}function m(a){const e=document.querySelector(".loader");e.style.display="block",u(a).then(s=>{e.style.display="none",s.hits.length===0?i.error({theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight",progressBarColor:"#B51B1B"}):d(s)}).catch(s=>{e.style.display="none",i.error({theme:"dark",message:"Failed to fetch images. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight",progressBarColor:"#B51B1B"}),console.error("Error during fetch operation: ",s)})}const l=document.querySelector(".search-form"),f=document.querySelector(".gallery");function g(a){a.preventDefault();const e=p();e.length===0?i.error({theme:"dark",message:"The field must be filled",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight",progressBarColor:"#B51B1B"}):(f.innerHTML="",m(e),l.elements.search.value="")}l.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map
