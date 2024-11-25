import{_ as k,a as R,j,u as P,r as x,k as g,i as L,o as w,c as N,f as a,n as s,l as c,F as H,e as M}from"./index-265ce763.js";const b="/assets/img/elnido_logo_2.webp",E={name:"Header",setup(){const{t:v,locale:e}=R(),l=j();P();const t=x([{lang:"eng",name:"English"},{lang:"zh_TW",name:"繁中"},{lang:"zh_CN",name:"簡中"}]),f=g(()=>l.name==="home"),h=g(()=>l.name||""),y=i=>{const n=l.path,_=l.name,r=l.params;let o=`/${i}`;if(_){const d=l.matched[l.matched.length-1];if(d&&(o+=d.path.replace(/^\/[^\/]+/,"")),Object.keys(r).length>0)for(const[m,p]of Object.entries(r))m!=="locale"&&(o=o.replace(`:${m}`,p))}else o=n.replace(/^\/[^\/]+/,`/${i}`);window.location.href=o},u=i=>{e.value=i,localStorage.setItem("locale",i);const n=l.path,_=l.name,r=l.params;let o=`/${i}`;if(_){const d=l.matched[l.matched.length-1];if(d&&(o+=d.path.replace(/^\/[^\/]+/,"")),Object.keys(r).length>0)for(const[m,p]of Object.entries(r))m!=="locale"&&(o=o.replace(`:${m}`,p))}else o=n.replace(/^\/[^\/]+/,`/${i}`);window.location.href=o};return L(()=>{const i=l.params.locale,n=localStorage.getItem("locale");!i&&!n?u("zh_TW"):i&&i!==n?u(i):!i&&n&&(e.value=n)}),{t:v,locale:e,setLocale:u,urlSetLocale:y,localeOptions:t,isHome:f,currentRouteName:h}}},F={class:"navbar-area"},z={class:"mobile-nav mean-container"},A={class:"mean-bar"},C={class:"mean-nav"},I={class:"navbar-nav m-auto",style:{display:"none"}},O={class:"nav-item"},S={class:"nav-item"},q={class:"nav-item"},W={class:"dropdown-menu",style:{display:"none"}},B={class:"nav-item"},T={class:"nav-item"},V={class:"nav-item"},Q={class:"dropdown-menu",style:{display:"none"}},U={class:"nav-item"},D={class:"nav-item"},G={class:"nav-item"},J={class:"nav-item mean-last"},K={class:"main-nav nav-top"},X={class:"container"},Y={class:"navbar navbar-expand-md navbar-light"},Z={class:"collapse navbar-collapse mean-menu",id:"navbarSupportedContent"},$={class:"navbar-nav m-auto"},aa={class:"nav-item"},ea={class:"nav-item"},ta={class:"nav-item"},sa={class:"dropdown-menu"},la={class:"nav-item"},ia={class:"nav-item"},oa={class:"nav-item"},na={class:"nav-item"},ca={class:"nav-item"};function ra(v,e,l,t,f,h){return w(),N(H,null,[a("div",F,[a("div",z,[a("div",A,[e[4]||(e[4]=a("a",{href:"#nav",class:"meanmenu-reveal",style:{right:"0",left:"auto"}},[a("span",null,[a("span",null,[a("span")])])],-1)),a("nav",C,[a("ul",I,[a("li",O,[a("a",{href:"/",class:s(["nav-link",t.currentRouteName==="home"?"active":""])},"首頁",2)]),a("li",S,[a("a",{href:"/why-elnido",class:s(["nav-link",t.currentRouteName==="WhyElindo"?"active":""])},"為什麼選擇愛妮島",2)]),a("li",q,[a("a",{href:"#",class:s(["nav-link",t.currentRouteName.includes("projects")?"active":""])},e[0]||(e[0]=[c(" 投資項目 "),a("i",{class:"fas fa-chevron-right"},null,-1)]),2),a("ul",W,[a("li",B,[a("a",{href:"/projects/piecelio",class:s(["nav-link",t.currentRouteName==="ProjectsPiecelio"?"active":""])},"Piece Lio",2)]),a("li",T,[a("a",{href:"/projects/m-hotel",class:s(["nav-link",t.currentRouteName==="ProjectsMHotel"?"active":""])},"暱名M海岸旅館",2)])]),e[1]||(e[1]=a("a",{class:"mean-expand",href:"#",style:{"font-size":"24px"}},"+",-1))]),a("li",V,[a("a",{href:"#",class:s(["nav-link",t.currentRouteName.includes("about")?"active":""])},e[2]||(e[2]=[c(" 關於我們 "),a("i",{class:"fas fa-chevron-right"},null,-1)]),2),a("ul",Q,[a("li",U,[a("a",{href:"/about/hhotelgroup",class:s(["nav-link",t.currentRouteName==="AboutHhotelgroup"?"active":""])},"hhotelgroup",2)]),a("li",D,[a("a",{href:"/about/piece-hostel",class:s(["nav-link",t.currentRouteName==="AboutPieceHostel"?"active":""])},"Piece Hostel",2)])]),e[3]||(e[3]=a("a",{class:"mean-expand",href:"#",style:{"font-size":"24px"}},"+",-1))]),a("li",G,[a("a",{href:"/faq",class:s(["nav-link",t.currentRouteName==="FAQ"?"active":""])},"常見問題",2)]),a("li",J,[a("a",{href:"/contact",class:s(["nav-link",t.currentRouteName==="Contact"?"active":""])},"聯絡我們",2)])])])]),e[5]||(e[5]=a("a",{href:"/",class:"logo"},[a("img",{src:b,alt:"Logo",class:"logo-img"})],-1))]),a("div",K,[a("div",X,[a("nav",Y,[e[7]||(e[7]=a("a",{class:"navbar-brand",href:"/"},[a("img",{src:b,alt:"Logo",class:"logo-img"})],-1)),a("div",Z,[a("ul",$,[a("li",aa,[a("a",{href:"/",class:s(["nav-link",t.currentRouteName==="home"?"active":""])},"首頁",2)]),a("li",ea,[a("a",{href:"/why-elnido",class:s(["nav-link",t.currentRouteName==="WhyElindo"?"active":""])},"為什麼選擇愛妮島",2)]),a("li",ta,[a("a",{href:"#",class:s(["nav-link",t.currentRouteName.includes("projects")?"active":""])},e[6]||(e[6]=[c(" 投資項目 "),a("i",{class:"fas fa-chevron-right"},null,-1)]),2),a("ul",sa,[a("li",la,[a("a",{href:"/projects/piecelio",class:s(["nav-link",t.currentRouteName==="ProjectsPiecelio"?"active":""])},"Piece Lio",2)]),a("li",ia,[a("a",{href:"/projects/mu-hotel",class:s(["nav-link",t.currentRouteName==="MuHotel"?"active":""])},"MU Hotel",2)])])]),a("li",oa,[a("a",{href:"/about",class:s(["nav-link",t.currentRouteName==="About"?"active":""])}," 關於我們 ",2)]),a("li",na,[a("a",{href:"/faq",class:s(["nav-link",t.currentRouteName==="FAQ"?"active":""])},"常見問題",2)]),a("li",ca,[a("a",{href:"/contact",class:s(["nav-link",t.currentRouteName==="Contact"?"active":""])},"聯絡我們",2)])])])])])])]),e[8]||(e[8]=a("div",{class:"sidebar-modal"},[a("div",{class:"modal right fade",id:"myModal2",tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel2","aria-hidden":"true"},[a("div",{class:"modal-dialog",role:"document"},[a("div",{class:"modal-content"},[a("div",{class:"modal-header"},[a("button",{type:"button",class:"close","data-bs-dismiss":"modal","aria-label":"Close"},[a("span",{"aria-hidden":"true"},[a("i",{class:"fas fa-times"})])]),a("h2",{class:"modal-title",id:"myModalLabel2"},[a("a",{href:"/"},[a("img",{src:b,alt:"Logo",class:"logo-img"})])])]),a("div",{class:"modal-body"},[a("div",{class:"sidebar-modal-widget"},[a("h3",{class:"title"},"關於我們"),a("p",null," 我們致力於在愛妮島打造永續發展的優質住宿體驗，結合自然環境與現代設計，為您提供最佳的投資與度假選擇。 ")]),a("div",{class:"sidebar-modal-widget"},[a("h3",{class:"title"},"快速連結"),a("ul",null,[a("li",null,[a("a",{href:"/faq"},"常見問題")]),a("li",null,[a("a",{href:"/contact"},"聯絡我們")])])]),a("div",{class:"sidebar-modal-widget"},[a("h3",{class:"title"},"聯絡資訊"),a("ul",{class:"contact-info"},[a("li",null,[a("i",{class:"fas fa-map-marker-alt"}),c(" 地址 "),a("span",null,"菲律賓愛妮島")]),a("li",null,[a("i",{class:"far fa-envelope"}),c(" Email "),a("span",null,"contact@elnido-investment.com")]),a("li",null,[a("i",{class:"fab fa-line"}),c(" LINE "),a("span",null,"@elnido-investment")])])]),a("div",{class:"sidebar-modal-widget"},[a("h3",{class:"title"},"社群媒體"),a("ul",{class:"social-list"},[a("li",null,[a("a",{href:"https://www.facebook.com/elnidoinvestment",target:"_blank"},[a("i",{class:"fab fa-facebook-f"})])]),a("li",null,[a("a",{href:"https://www.instagram.com/elnidoinvestment",target:"_blank"},[a("i",{class:"fab fa-instagram"})])]),a("li",null,[a("a",{href:"https://line.me/elnidoinvestment",target:"_blank"},[a("i",{class:"fab fa-line"})])])])])])])])])],-1))],64)}const ua=k(E,[["render",ra]]),da="/assets/img/elnido_logo_2_white_text.webp",ma={name:"Footer",setup(){}},va={class:"footer-area"};function fa(v,e,l,t,f,h){return w(),N("footer",va,e[0]||(e[0]=[M('<div class="footer-top pt-100 pb-70"><div class="container"><div class="row justify-content-center"><div class="col-lg-6 col-sm-6"><div class="footer-content"><div class="footer-conten-title"><a href="/"><img src="'+da+'" alt="Logo" class="logo-img"></a><p> 我們致力於在愛妮島打造永續發展的優質住宿體驗，結合自然環境與現代設計，為您提供最佳的投資與度假選擇。 </p></div><div class="footer-social"><ul><li><a href="https://www.facebook.com/elnidoinvestment" target="_blank"><i class="fab fa-facebook-f"></i></a></li><li><a href="https://www.instagram.com/elnidoinvestment" target="_blank"><i class="fab fa-instagram"></i></a></li><li><a href="https://twitter.com/elnidoinvestment" target="_blank"><i class="fab fa-twitter"></i></a></li><li><a href="https://line.me/elnidoinvestment" target="_blank"><i class="fab fa-line"></i></a></li></ul></div></div></div><div class="col-lg-3 col-sm-6"><div class="footer-list"><h3>快速連結</h3><ul><li><a href="/">首頁</a></li><li><a href="/why-elnido">為什麼選擇愛妮島</a></li><li><a href="/projects">投資項目</a></li><li><a href="/about">關於我們</a></li><li><a href="/faq">常見問題解答</a></li><li><a href="/contact">聯絡我們</a></li></ul></div></div><div class="col-lg-3 col-sm-6"><div class="footer-list"><h3>聯絡資訊</h3><ul><li><i class="fas fa-map-marker-alt"></i> 菲律賓愛妮島 </li><li><a href="mailto:contact@elnido-investment.com"><i class="far fa-envelope"></i> contact@elnido-investment.com </a></li><li><a href="https://line.me/elnidoinvestment" target="_blank"><i class="fab fa-line"></i> @elnido-investment </a></li></ul></div></div></div></div></div><div class="footer-bottom"><div class="container"><div class="row align-items-center justify-content-center"><div class="col-lg-12"><div class="bottom-text text-center"><p>© 2024 El Nido Investment. All Rights Reserved.</p></div></div></div></div></div>',2)]))}const _a=k(ma,[["render",fa]]);export{_a as F,ua as H};
