import{r as v,_ as k,u as M,a as y,o as j,b as x,c as f,d as c,e as n,f as p,g as _,h as s,w as E,T as N,F as S,i as T,j as w,k as g,v as b,n as I}from"./index-0b7cce60.js";import{H as C,F as P}from"./Footer-fdec6a9a.js";import{W as B}from"./WhatOnElNido-c2ea59d5.js";import{_ as F}from"./1-916ed471.js";function H(r){const t=v(0),i=v(0),e=v(0),l=v(0),u=50;return{touchStart:o=>{t.value=o.touches[0].clientX,i.value=o.touches[0].clientY},touchMove:o=>{e.value=o.touches[0].clientX,l.value=o.touches[0].clientY},touchEnd:()=>{const o=t.value-e.value,a=i.value-l.value;Math.abs(o)>Math.abs(a)&&Math.abs(o)>u&&(o>0?r("left"):r("right"))}}}const V="/assets/img/home_island.webp",W="/assets/img/home_environment.webp",L="/assets/img/home_sunset.webp",X="/assets/img/home-infra.jpeg",Y="/assets/img/home_full_image2.jpg",O="/assets/img/home-tourism.png",A="/assets/img/home_piecelio.webp",D="/assets/img/home_full_image3.jpg",G={components:{Header:C,Footer:P,WhatOnElNido:B},setup(){M();const{t:r,locale:t}=y(),i=v(0),e=4;let l;const u=a=>{a<0?i.value=e-1:a>=e?i.value=0:i.value=Number(a)},d=()=>{l=setInterval(()=>{i.value=(i.value+1)%e},5e3)};j(()=>{d()}),x(()=>{l&&clearInterval(l)});const{touchStart:m,touchMove:h,touchEnd:o}=H(a=>{a==="left"?i.value=(i.value+1)%e:a==="right"&&(i.value=(i.value-1+e)%e),clearInterval(l),d()});return{t:r,locale:t,currentSlide:i,setSlide:u,touchStart:m,touchMove:h,touchEnd:o}}},R={class:"container"},z={class:"carousel-container"},Q={class:"carousel-wrapper"},U={class:"carousel-slide",key:0},q={class:"carousel-slide",key:1},J={class:"carousel-slide",key:2},K={class:"carousel-slide",key:3},Z={class:"carousel-dots"},$=["onClick"],ss={class:"carousel-controls"};function ts(r,t,i,e,l,u){const d=f("Header"),m=f("WhatOnElNido"),h=f("Footer");return c(),n(S,null,[p(d),t[11]||(t[11]=_('<div class="banner-area bg-shape2"><div class="d-table"><div class="d-table-cell"><div class="container-fluid m-0 p-0"><div class="row align-items-center justify-content-center"><div class="col-lg-6 text-right float-right"><div class="banner-content"><h2>探索無限潛力的旅遊天堂</h2><p> 愛妮島是菲律賓最後一片淨土，擁有純淨的海灘、壯麗的石灰岩地形和豐富的海洋生態。 這裡不僅是度假天堂，更是充滿投資潛力的新興旅遊勝地。讓我們帶您探索愛妮島的無限可能。 </p><div class="banner-btn"><a href="https://www.youtube.com/watch?v=wWgSuG3QPTo" target="_blank" class="banner-btn1 border-radius">探索愛妮島的無限可能</a><a href="https://line.me/R/ti/p/@elnido888" target="_blank" class="banner-btn1 border-radius" style="background-color:#4cc764;margin:0 10px;">Line專人詢問</a></div></div></div></div></div></div></div></div>',1)),s("div",{class:"about-carousel position-relative pt-100 pb-70",onTouchstart:t[2]||(t[2]=w((...o)=>e.touchStart&&e.touchStart(...o),["prevent"])),onTouchmove:t[3]||(t[3]=w((...o)=>e.touchMove&&e.touchMove(...o),["prevent"])),onTouchend:t[4]||(t[4]=w((...o)=>e.touchEnd&&e.touchEnd(...o),["prevent"]))},[s("div",R,[s("div",z,[s("div",Q,[p(N,{name:"slide",mode:"out-in"},{default:E(()=>[g((c(),n("div",U,t[5]||(t[5]=[s("div",{class:"row align-items-center"},[s("div",{class:"col-lg-6"},[s("img",{src:V,alt:"Island Life",class:"w-100 rounded shadow"})]),s("div",{class:"col-lg-6"},[s("div",{class:"about-content"},[s("h2",{class:"mb-4"},"探索愛妮島的自然之美"),s("p",{class:"lead"}," 純淨的白沙灘、清澈的海水和豐富的海洋生態，這裡是您的度假天堂。 ")])])],-1)]))),[[b,e.currentSlide===0]]),g((c(),n("div",q,t[6]||(t[6]=[s("div",{class:"row align-items-center"},[s("div",{class:"col-lg-6"},[s("img",{src:W,alt:"Marine Life",class:"w-100 rounded shadow"})]),s("div",{class:"col-lg-6"},[s("div",{class:"about-content"},[s("h2",{class:"mb-4"},"優質自然資源"),s("p",{class:"lead"}," 探索繽紛的珊瑚礁和海洋生物，體驗大自然的奧妙。 ")])])],-1)]))),[[b,e.currentSlide===1]]),g((c(),n("div",J,t[7]||(t[7]=[s("div",{class:"row align-items-center"},[s("div",{class:"col-lg-6"},[s("img",{src:L,alt:"Sunset View",class:"w-100 rounded shadow"})]),s("div",{class:"col-lg-6"},[s("div",{class:"about-content"},[s("h2",{class:"mb-4"},"令人屏息的日落美景"),s("p",{class:"lead"},"在這裡，每天都能欣賞到最動人的日落景致。")])])],-1)]))),[[b,e.currentSlide===2]]),g((c(),n("div",K,t[8]||(t[8]=[s("div",{class:"row align-items-center"},[s("div",{class:"col-lg-6"},[s("img",{src:X,alt:"Sunset View",class:"w-100 rounded shadow"})]),s("div",{class:"col-lg-6"},[s("div",{class:"about-content"},[s("h2",{class:"mb-4"},"完善基礎設施"),s("p",{class:"lead"},"政府持續投入基礎建設，包括機場擴建、道路優化等，大幅提升島嶼可及性。")])])],-1)]))),[[b,e.currentSlide===3]])]),_:1})]),s("div",Z,[(c(),n(S,null,T(4,o=>s("span",{key:o,class:I(["dot",{active:e.currentSlide===o-1}]),onClick:a=>e.setSlide(o-1)},null,10,$)),64))]),s("div",ss,[s("button",{onClick:t[0]||(t[0]=o=>e.setSlide(e.currentSlide-1))},t[9]||(t[9]=[s("i",{class:"fas fa-arrow-left"},null,-1)])),s("button",{onClick:t[1]||(t[1]=o=>e.setSlide(e.currentSlide+1))},t[10]||(t[10]=[s("i",{class:"fas fa-arrow-right"},null,-1)]))])])])],32),t[12]||(t[12]=_('<div class="full-width-image"><img src="'+Y+'" alt="Tropical Paradise" class="w-100" style="height:700px;object-fit:cover;object-position:center center;"></div><section class="service-area-two ptb-100"><div class="container"><div class="section-title text-center mb-50"><span>為什麼選擇愛妮島</span><h2>探索愛妮島的無限投資潛力</h2><p> 愛妮島擁有得天獨厚的自然資源和發展優勢。這裡不僅有原始的自然生態系統， 更有完善的基礎設施規劃。隨著旅遊業的蓬勃發展，愛妮島正逐步成為最具投資 價值的度假勝地之一。 </p></div><div class="row justify-content-center"><div class="col-lg-4 col-md-6"><div class="service-item box-shadow"><img src="'+O+'" alt="Tourism" class="w-100 mb-4" style="height:250px;object-fit:cover;"><h3>觀光業蓬勃發展</h3><p> 愛妮島每年吸引超過百萬遊客到訪，旅遊業持續成長，為投資者帶來穩定收益。 </p></div></div></div></div></section><section class="latest-properties ptb-100"><div class="container"><div class="section-title text-center mb-50"><h2>最新物業項目</h2></div><div class="row"><div class="col-lg-6 mb-4"><div class="property-item box-shadow"><a href="/projects/m-hotel"><img src="'+F+'" alt="Mu Nacpan Beach" class="w-100"><div class="p-4"><h3 class="muhotel-text">Mu Nacpan Beach</h3><p> 位於愛妮島頂級海景區，Mu Hotel以精心設計面海視野，建築量體以水平展開方式規劃，並融入當地地形特色，創造獨特的建築美學。配備無邊際泳池、SPA中心等完整度假設施，由專業酒店管理團隊進駐營運。 </p></div></a></div></div><div class="col-lg-6 mb-4"><div class="property-item box-shadow"><a href="/projects/piecelio"><img src="'+A+'" alt="Piecelio" class="w-100"><div class="p-4"><h3>Piece Lio</h3><p> 愛妮島最具特色的投資標的，由國際知名建築團隊打造，融合熱帶度假風格與現代簡約設計。採用環保建材與永續理念，配備空中花園、無邊際泳池等頂級設施，為您提供絕佳的居住與投資價值。 </p></div></a></div></div></div></div></section><div class="full-width-image"><img src="'+D+'" alt="Tropical Paradise" class="w-100" style="height:700px;object-fit:cover;object-position:center center;"></div>',4)),p(m),p(h)],64)}const ls=k(G,[["render",ts]]);export{ls as default};
