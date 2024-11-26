import{_ as N,a as j,k as L,u as P,r as k,l as w,j as x,o as M,c as C,f as a,n as s,m,F as E,e as F}from"./index-090641ed.js";const p="/assets/img/elnido_logo_2.webp",H={name:"Header",setup(){const{t:v,locale:e}=j(),l=L();P();const t=k(!1),f=k([{lang:"eng",name:"English"},{lang:"zh_TW",name:"繁中"},{lang:"zh_CN",name:"簡中"}]),h=()=>{t.value=!t.value},b=w(()=>l.name==="home"),R=w(()=>l.name||""),y=i=>{const o=l.path,_=l.name,c=l.params;let n=`/${i}`;if(_){const r=l.matched[l.matched.length-1];if(r&&(n+=r.path.replace(/^\/[^\/]+/,"")),Object.keys(c).length>0)for(const[d,g]of Object.entries(c))d!=="locale"&&(n=n.replace(`:${d}`,g))}else n=o.replace(/^\/[^\/]+/,`/${i}`);window.location.href=n},u=i=>{e.value=i,localStorage.setItem("locale",i);const o=l.path,_=l.name,c=l.params;let n=`/${i}`;if(_){const r=l.matched[l.matched.length-1];if(r&&(n+=r.path.replace(/^\/[^\/]+/,"")),Object.keys(c).length>0)for(const[d,g]of Object.entries(c))d!=="locale"&&(n=n.replace(`:${d}`,g))}else n=o.replace(/^\/[^\/]+/,`/${i}`);window.location.href=n};return x(()=>{const i=l.params.locale,o=localStorage.getItem("locale");!i&&!o?u("zh_TW"):i&&i!==o?u(i):!i&&o&&(e.value=o)}),{t:v,locale:e,setLocale:u,urlSetLocale:y,localeOptions:f,isHome:b,currentRouteName:R,isToggle:t,toggleDropdown:h}}},z={class:"navbar-area"},I={class:"mobile-nav mean-container"},O={class:"mean-bar"},S={class:"mean-nav"},T={class:"nav-item"},q={class:"nav-item"},A={class:"nav-item"},W={class:"dropdown-menu",style:{display:"none"}},B={class:"nav-item"},V={class:"nav-item"},D={class:"nav-item"},Q={class:"nav-item"},U={class:"nav-item mean-last"},G={class:"main-nav nav-top"},J={class:"container"},K={class:"navbar navbar-expand-md navbar-light"},X={class:"collapse navbar-collapse mean-menu",id:"navbarSupportedContent"},Y={class:"navbar-nav m-auto"},Z={class:"nav-item"},$={class:"nav-item"},aa={class:"nav-item"},ea={class:"dropdown-menu"},ta={class:"nav-item"},sa={class:"nav-item"},la={class:"nav-item"},ia={class:"nav-item"},na={class:"nav-item"};function oa(v,e,l,t,f,h){return M(),C(E,null,[a("div",z,[a("div",I,[a("div",O,[a("a",{onClick:e[0]||(e[0]=b=>t.toggleDropdown()),class:"meanmenu-reveal",style:{right:"0",left:"auto"}},e[1]||(e[1]=[a("span",null,[a("span",null,[a("span")])],-1)])),a("nav",S,[a("ul",{class:s(["navbar-nav m-auto",t.isToggle?"active":""])},[a("li",T,[a("a",{href:"/",class:s(["nav-link",t.currentRouteName==="home"?"active":""])},"首頁",2)]),a("li",q,[a("a",{href:"/why-elnido",class:s(["nav-link",t.currentRouteName==="WhyElindo"?"active":""])},"為什麼選擇愛妮島",2)]),a("li",A,[a("a",{href:"#",class:s(["nav-link",t.currentRouteName.includes("projects")?"active":""])},e[2]||(e[2]=[m(" 投資項目 "),a("i",{class:"fas fa-chevron-right"},null,-1)]),2),a("ul",W,[a("li",B,[a("a",{href:"/projects/piecelio",class:s(["nav-link",t.currentRouteName==="ProjectsPiecelio"?"active":""])},"Piece Lio",2)]),a("li",V,[a("a",{href:"/projects/m-hotel",class:s(["nav-link",t.currentRouteName==="ProjectsMHotel"?"active":""])},"暱名M海岸旅館",2)])]),e[3]||(e[3]=a("a",{class:"mean-expand",href:"#",style:{"font-size":"24px"}},"+",-1))]),a("li",D,[a("a",{href:"/about",class:s(["nav-link",t.currentRouteName.includes("about")?"active":""])},"關於我們",2)]),a("li",Q,[a("a",{href:"/faq",class:s(["nav-link",t.currentRouteName==="FAQ"?"active":""])},"常見問題",2)]),a("li",U,[a("a",{href:"/contact",class:s(["nav-link",t.currentRouteName==="Contact"?"active":""])},"聯絡我們",2)])],2)])]),e[4]||(e[4]=a("a",{href:"/",class:"logo"},[a("img",{src:p,alt:"Logo",class:"logo-img"})],-1))]),a("div",G,[a("div",J,[a("nav",K,[e[6]||(e[6]=a("a",{class:"navbar-brand",href:"/"},[a("img",{src:p,alt:"Logo",class:"logo-img"})],-1)),a("div",X,[a("ul",Y,[a("li",Z,[a("a",{href:"/",class:s(["nav-link",t.currentRouteName==="home"?"active":""])},"首頁",2)]),a("li",$,[a("a",{href:"/why-elnido",class:s(["nav-link",t.currentRouteName==="WhyElindo"?"active":""])},"為什麼選擇愛妮島",2)]),a("li",aa,[a("a",{href:"#",class:s(["nav-link",t.currentRouteName.includes("projects")?"active":""])},e[5]||(e[5]=[m(" 投資項目 "),a("i",{class:"fas fa-chevron-right"},null,-1)]),2),a("ul",ea,[a("li",ta,[a("a",{href:"/projects/piecelio",class:s(["nav-link",t.currentRouteName==="ProjectsPiecelio"?"active":""])},"Piece Lio",2)]),a("li",sa,[a("a",{href:"/projects/mu-hotel",class:s(["nav-link",t.currentRouteName==="MuHotel"?"active":""])},"MU Hotel",2)])])]),a("li",la,[a("a",{href:"/about",class:s(["nav-link",t.currentRouteName==="About"?"active":""])}," 關於我們 ",2)]),a("li",ia,[a("a",{href:"/faq",class:s(["nav-link",t.currentRouteName==="FAQ"?"active":""])},"常見問題",2)]),a("li",na,[a("a",{href:"/contact",class:s(["nav-link",t.currentRouteName==="Contact"?"active":""])},"聯絡我們",2)])])])])])])]),e[7]||(e[7]=a("div",{class:"sidebar-modal"},[a("div",{class:"modal right fade",id:"myModal2",tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel2","aria-hidden":"true"},[a("div",{class:"modal-dialog",role:"document"},[a("div",{class:"modal-content"},[a("div",{class:"modal-header"},[a("button",{type:"button",class:"close","data-bs-dismiss":"modal","aria-label":"Close"},[a("span",{"aria-hidden":"true"},[a("i",{class:"fas fa-times"})])]),a("h2",{class:"modal-title",id:"myModalLabel2"},[a("a",{href:"/"},[a("img",{src:p,alt:"Logo",class:"logo-img"})])])]),a("div",{class:"modal-body"},[a("div",{class:"sidebar-modal-widget"},[a("h3",{class:"title"},"關於我們"),a("p",null," 我們致力於在愛妮島打造永續發展的優質住宿體驗，結合自然環境與現代設計，為您提供最佳的投資與度假選擇。 ")]),a("div",{class:"sidebar-modal-widget"},[a("h3",{class:"title"},"快速連結"),a("ul",null,[a("li",null,[a("a",{href:"/faq"},"常見問題")]),a("li",null,[a("a",{href:"/contact"},"聯絡我們")])])]),a("div",{class:"sidebar-modal-widget"},[a("h3",{class:"title"},"聯絡資訊"),a("ul",{class:"contact-info"},[a("li",null,[a("i",{class:"fas fa-map-marker-alt"}),m(" 地址 "),a("span",null,"菲律賓愛妮島")]),a("li",null,[a("i",{class:"far fa-envelope"}),m(" Email "),a("span",null,"contact@elnido-investment.com")]),a("li",null,[a("i",{class:"fab fa-line"}),m(" LINE "),a("span",null,"@elnido-investment")])])]),a("div",{class:"sidebar-modal-widget"},[a("h3",{class:"title"},"社群媒體"),a("ul",{class:"social-list"},[a("li",null,[a("a",{href:"https://www.facebook.com/elnidoinvestment",target:"_blank"},[a("i",{class:"fab fa-facebook-f"})])]),a("li",null,[a("a",{href:"https://www.instagram.com/elnidoinvestment",target:"_blank"},[a("i",{class:"fab fa-instagram"})])]),a("li",null,[a("a",{href:"https://line.me/elnidoinvestment",target:"_blank"},[a("i",{class:"fab fa-line"})])])])])])])])])],-1))],64)}const va=N(H,[["render",oa]]),ca="/assets/img/elnido_logo_2_white_text.webp",ra={name:"Footer",setup(){}};function da(v,e,l,t,f,h){return e[0]||(e[0]=F('<footer class="footer-area"><div class="footer-top pt-100 pb-70"><div class="container"><div class="row justify-content-center"><div class="col-lg-6 col-sm-6"><div class="footer-content"><div class="footer-conten-title"><a href="/"><img src="'+ca+'" alt="Logo" class="logo-img"></a><p> 我們致力於在愛妮島打造永續發展的優質住宿體驗，結合自然環境與現代設計，為您提供最佳的投資與度假選擇。 </p></div><div class="footer-social"><ul><li><a href="https://www.facebook.com/elnidoinvestment" target="_blank"><i class="fab fa-facebook-f"></i></a></li><li><a href="https://www.instagram.com/elnidoinvestment" target="_blank"><i class="fab fa-instagram"></i></a></li><li><a href="https://twitter.com/elnidoinvestment" target="_blank"><i class="fab fa-twitter"></i></a></li><li><a href="https://line.me/elnidoinvestment" target="_blank"><i class="fab fa-line"></i></a></li></ul></div></div></div><div class="col-lg-3 col-sm-6"><div class="footer-list"><h3>快速連結</h3><ul><li><a href="/">首頁</a></li><li><a href="/why-elnido">為什麼選擇愛妮島</a></li><li><a href="/projects">投資項目</a></li><li><a href="/about">關於我們</a></li><li><a href="/faq">常見問題解答</a></li><li><a href="/contact">聯絡我們</a></li></ul></div></div><div class="col-lg-3 col-sm-6"><div class="footer-list"><h3>聯絡資訊</h3><ul><li><i class="fas fa-map-marker-alt"></i> 菲律賓愛妮島 </li><li><a href="mailto:contact@elnido-investment.com"><i class="far fa-envelope"></i> contact@elnido-investment.com </a></li><li><a href="https://line.me/elnidoinvestment" target="_blank"><i class="fab fa-line"></i> @elnido-investment </a></li></ul></div></div></div></div></div><div class="footer-bottom"><div class="container"><div class="row align-items-center justify-content-center"><div class="col-lg-12"><div class="bottom-text text-center"><p>© 2024 El Nido Investment. All Rights Reserved.</p></div></div></div></div></div></footer><div class="floating-button"><a href="https://line.me/R/ti/p/@elnido888" target="_blank"><i class="fab fa-line"></i></a></div>',2))}const fa=N(ra,[["render",da]]);export{fa as F,va as H};
