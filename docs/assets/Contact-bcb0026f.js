import{_ as d,u as v,a as f,o as m,c as n,d as p,e as u,f as l,g as h,F as g}from"./index-a8ced889.js";import{H as _,F as b}from"./Footer-61234c73.js";const x={components:{Header:_,Footer:b},setup(){v();const{t:s,locale:t}=f();return m(()=>{const a=document.querySelectorAll(".accordion-item");a.forEach(c=>{const o=c.querySelector(".accordion-title"),i=c.querySelector(".accordion-content");o.addEventListener("click",()=>{o.classList.toggle("active"),i.classList.toggle("show"),a.forEach(e=>{e!==c&&(e.querySelector(".accordion-title").classList.remove("active"),e.querySelector(".accordion-content").classList.remove("show"))})})})}),{t:s,locale:t}}};function k(s,t,a,c,o,i){const e=n("Header"),r=n("Footer");return p(),u(g,null,[l(e),t[0]||(t[0]=h('<div class="inner-banner bg-shape2 bg-color2"><div class="d-table"><div class="d-table-cell"><div class="conatiner"><div class="inner-title text-center"><h3>聯絡我們</h3><ul><li><a href="index.html">首頁</a></li><li><i class="fas fa-chevron-right"></i></li><li> 聯絡我們 </li></ul></div></div></div></div></div><div class="contact-area pt-100 pb-70"><div class="container"><div class="row justify-content-center"><div class="col-lg-4 col-md-6"><div class="contact-item"><div class="icon-contact text-center"><i class="far fa-clock"></i></div><h3>週一至週五：上午9:00 - 下午6:00</h3></div></div><div class="col-lg-4 col-md-6"><div class="contact-item"><div class="icon-contact text-center"><i class="fas fa-map-marker-alt"></i></div><h3>Palawan, El Nido, Philippines</h3></div></div><div class="col-lg-4 col-md-6"><div class="contact-item"><div class="icon-contact text-center"><i class="fab fa-line"></i></div><h3><a href="https://line.me/R/ti/p/@elnido888" target="_blank"> Line ID: @elnido888 </a></h3></div></div></div></div></div>',2)),l(r)],64)}const L=d(x,[["render",k]]);export{L as default};