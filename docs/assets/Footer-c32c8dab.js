import{_ as N,a as M,l as x,u as P,r as _,m as w,o as O,d as C,e as E,h as a,n as t,p as v,F,g as S}from"./index-fe931128.js";const k="/assets/img/elnido_logo_2.webp",H={name:"Header",setup(){const{t:u,locale:s}=M(),i=x();P();const e=_(!1),h=_([{lang:"eng",name:"English"},{lang:"zh_TW",name:"繁中"},{lang:"zh_CN",name:"簡中"}]),c=_(""),f=()=>{e.value=!e.value},R=l=>{l==c.value?c.value="":c.value=l},y=w(()=>i.name==="home"),j=w(()=>i.name||""),L=l=>{const n=i.path,g=i.name,r=i.params;let o=`/${l}`;if(g){const d=i.matched[i.matched.length-1];if(d&&(o+=d.path.replace(/^\/[^\/]+/,"")),Object.keys(r).length>0)for(const[m,b]of Object.entries(r))m!=="locale"&&(o=o.replace(`:${m}`,b))}else o=n.replace(/^\/[^\/]+/,`/${l}`);window.location.href=o},p=l=>{s.value=l,localStorage.setItem("locale",l);const n=i.path,g=i.name,r=i.params;let o=`/${l}`;if(g){const d=i.matched[i.matched.length-1];if(d&&(o+=d.path.replace(/^\/[^\/]+/,"")),Object.keys(r).length>0)for(const[m,b]of Object.entries(r))m!=="locale"&&(o=o.replace(`:${m}`,b))}else o=n.replace(/^\/[^\/]+/,`/${l}`);window.location.href=o};return O(()=>{const l=i.params.locale,n=localStorage.getItem("locale");!l&&!n?p("zh_TW"):l&&l!==n?p(l):!l&&n&&(s.value=n)}),{t:u,locale:s,setLocale:p,urlSetLocale:L,localeOptions:h,isHome:y,currentRouteName:j,isToggle:e,toggleDropdown:f,subMenuOpen:R,isSubMenuOpen:c}}},z={class:"navbar-area"},B={class:"mobile-nav mean-container"},I={class:"mean-bar"},T={class:"mean-nav"},q={class:"nav-item"},A={class:"nav-item"},W={class:"nav-item"},V={class:"nav-item"},D={class:"nav-item"},Q={class:"nav-item"},G={class:"nav-item"},J={class:"nav-item mean-last"},K={class:"main-nav nav-top"},U={class:"container"},X={class:"navbar navbar-expand-md navbar-light"},Y={class:"collapse navbar-collapse mean-menu",id:"navbarSupportedContent"},Z={class:"navbar-nav m-auto"},$={class:"nav-item"},aa={class:"nav-item"},ea={class:"nav-item"},sa={class:"dropdown-menu"},ta={class:"nav-item"},la={class:"nav-item"},ia={class:"nav-item"},oa={class:"nav-item"},na={class:"nav-item"};function ca(u,s,i,e,h,c){return C(),E(F,null,[a("div",z,[a("div",B,[a("div",I,[a("a",{onClick:s[0]||(s[0]=f=>e.toggleDropdown()),class:"meanmenu-reveal",style:{right:"0",left:"auto"}},s[3]||(s[3]=[a("span",null,[a("span",null,[a("span")])],-1)])),a("nav",T,[a("ul",{class:t(["navbar-nav m-auto",e.isToggle?"active":""])},[a("li",q,[a("a",{href:"/",class:t(["nav-link",e.currentRouteName==="home"?"active":""])},"首頁",2)]),a("li",A,[a("a",{href:"/why-elnido",class:t(["nav-link",e.currentRouteName==="WhyElindo"?"active":""])},"為什麼選擇愛妮島",2)]),a("li",W,[a("a",{onClick:s[1]||(s[1]=f=>e.subMenuOpen("projects")),class:t(["nav-link",e.currentRouteName.includes("projects")?"active":""])},s[4]||(s[4]=[v(" 投資項目 "),a("i",{class:"fas fa-chevron-right"},null,-1)]),2),a("ul",{class:t(["dropdown-menu",e.isSubMenuOpen=="projects"?"active":""])},[a("li",V,[a("a",{href:"/projects/piecelio",class:t(["nav-link",e.currentRouteName==="ProjectsPiecelio"?"active":""])},"Piece Lio",2)]),a("li",D,[a("a",{href:"/projects/mu-hotel",class:t(["nav-link",e.currentRouteName==="MuHotel"?"active":""])},"Mu Nacpan Beach",2)])],2),a("a",{class:"mean-expand",onClick:s[2]||(s[2]=f=>e.subMenuOpen("projects")),style:{"font-size":"24px"}},"+")]),a("li",Q,[a("a",{href:"/about",class:t(["nav-link",e.currentRouteName.includes("about")?"active":""])},"關於我們",2)]),a("li",G,[a("a",{href:"/faq",class:t(["nav-link",e.currentRouteName==="FAQ"?"active":""])},"常見問題",2)]),a("li",J,[a("a",{href:"/contact",class:t(["nav-link",e.currentRouteName==="Contact"?"active":""])},"聯絡我們",2)])],2)])]),s[5]||(s[5]=a("a",{href:"/",class:"logo"},[a("img",{src:k,alt:"Logo",class:"logo-img"})],-1))]),a("div",K,[a("div",U,[a("nav",X,[s[7]||(s[7]=a("a",{class:"navbar-brand",href:"/"},[a("img",{src:k,alt:"Logo",class:"logo-img"})],-1)),a("div",Y,[a("ul",Z,[a("li",$,[a("a",{href:"/",class:t(["nav-link",e.currentRouteName==="home"?"active":""])},"首頁",2)]),a("li",aa,[a("a",{href:"/why-elnido",class:t(["nav-link",e.currentRouteName==="WhyElindo"?"active":""])},"為什麼選擇愛妮島",2)]),a("li",ea,[a("a",{href:"#",class:t(["nav-link",e.currentRouteName.includes("projects")?"active":""])},s[6]||(s[6]=[v(" 投資項目 "),a("i",{class:"fas fa-chevron-right"},null,-1)]),2),a("ul",sa,[a("li",ta,[a("a",{href:"/projects/piecelio",class:t(["nav-link",e.currentRouteName==="ProjectsPiecelio"?"active":""])},"Piece Lio",2)]),a("li",la,[a("a",{href:"/projects/mu-hotel",class:t(["nav-link",e.currentRouteName==="MuHotel"?"active":""])},"Mu Nacpan Beach",2)])])]),a("li",ia,[a("a",{href:"/about",class:t(["nav-link",e.currentRouteName==="About"?"active":""])}," 關於我們 ",2)]),a("li",oa,[a("a",{href:"/faq",class:t(["nav-link",e.currentRouteName==="FAQ"?"active":""])},"常見問題",2)]),a("li",na,[a("a",{href:"/contact",class:t(["nav-link",e.currentRouteName==="Contact"?"active":""])},"聯絡我們",2)])])])])])])]),s[8]||(s[8]=a("div",{class:"sidebar-modal"},[a("div",{class:"modal right fade",id:"myModal2",tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel2","aria-hidden":"true"},[a("div",{class:"modal-dialog",role:"document"},[a("div",{class:"modal-content"},[a("div",{class:"modal-header"},[a("button",{type:"button",class:"close","data-bs-dismiss":"modal","aria-label":"Close"},[a("span",{"aria-hidden":"true"},[a("i",{class:"fas fa-times"})])]),a("h2",{class:"modal-title",id:"myModalLabel2"},[a("a",{href:"/"},[a("img",{src:k,alt:"Logo",class:"logo-img"})])])]),a("div",{class:"modal-body"},[a("div",{class:"sidebar-modal-widget"},[a("h3",{class:"title"},"關於我們"),a("p",null," 我們致力於在愛妮島打造永續發展的優質住宿體驗，結合自然環境與現代設計，為您提供最佳的投資與度假選擇。 ")]),a("div",{class:"sidebar-modal-widget"},[a("h3",{class:"title"},"快速連結"),a("ul",null,[a("li",null,[a("a",{href:"/faq"},"常見問題")]),a("li",null,[a("a",{href:"/contact"},"聯絡我們")])])]),a("div",{class:"sidebar-modal-widget"},[a("h3",{class:"title"},"聯絡資訊"),a("ul",{class:"contact-info"},[a("li",null,[a("i",{class:"fas fa-map-marker-alt"}),v(" 地址 "),a("span",null,"菲律賓愛妮島")]),a("li",null,[a("i",{class:"far fa-envelope"}),v(" Email "),a("span",null,"contact@elnido-investment.com")]),a("li",null,[a("i",{class:"fab fa-line"}),v(" LINE "),a("span",null,"@elnido-investment")])])]),a("div",{class:"sidebar-modal-widget"},[a("h3",{class:"title"},"社群媒體"),a("ul",{class:"social-list"},[a("li",null,[a("a",{href:"https://www.facebook.com/elnidoinvestment",target:"_blank"},[a("i",{class:"fab fa-facebook-f"})])]),a("li",null,[a("a",{href:"https://www.instagram.com/elnidoinvestment",target:"_blank"},[a("i",{class:"fab fa-instagram"})])]),a("li",null,[a("a",{href:"https://line.me/elnidoinvestment",target:"_blank"},[a("i",{class:"fab fa-line"})])])])])])])])])],-1))],64)}const fa=N(H,[["render",ca]]),ra="/assets/img/elnido_logo_2_white_text.webp",da={name:"Footer",setup(){}};function ma(u,s,i,e,h,c){return s[0]||(s[0]=S('<footer class="footer-area"><div class="footer-top pt-100 pb-70"><div class="container"><div class="row justify-content-center"><div class="col-lg-6 col-sm-6"><div class="footer-content"><div class="footer-conten-title"><a href="/"><img src="'+ra+'" alt="Logo" class="logo-img"></a><p> 我們致力於在愛妮島打造永續發展的優質住宿體驗，結合自然環境與現代設計，為您提供最佳的投資與度假選擇。 </p></div><div class="footer-social"><ul><li><a href="https://www.facebook.com/iloveelnido" target="_blank"><i class="fab fa-facebook-f"></i></a></li><li><a href="https://www.instagram.com/elnidogo520/" target="_blank"><i class="fab fa-instagram"></i></a></li><li><a href="https://line.me/R/ti/p/@elnido888" target="_blank"><i class="fab fa-line"></i></a></li></ul></div></div></div><div class="col-lg-3 col-sm-6"><div class="footer-list"><h3>快速連結</h3><ul><li><a href="/">首頁</a></li><li><a href="/why-elnido">為什麼選擇愛妮島</a></li><li><a href="/projects">投資項目</a></li><li><a href="/about">關於我們</a></li><li><a href="/faq">常見問題解答</a></li><li><a href="/contact">聯絡我們</a></li></ul></div></div><div class="col-lg-3 col-sm-6"><div class="footer-list"><h3>聯絡資訊</h3><ul><li><i class="fas fa-map-marker-alt"></i> 菲律賓愛妮島 </li><li><a href="mailto:contact@elnido-investment.com"><i class="far fa-envelope"></i> contact@elnido-investment.com </a></li><li><a href="https://line.me/R/ti/p/@elnido888" target="_blank"><i class="fab fa-line"></i> @elnido888 </a></li></ul></div></div></div></div></div><div class="footer-bottom"><div class="container"><div class="row align-items-center justify-content-center"><div class="col-lg-12"><div class="bottom-text text-center"><p>© 2024 El Nido Investment. All Rights Reserved.</p></div></div></div></div></div></footer><div class="floating-button"><a href="https://line.me/R/ti/p/@elnido888" target="_blank"><i class="fab fa-line"></i></a></div>',2))}const ua=N(da,[["render",ma]]);export{ua as F,fa as H};
