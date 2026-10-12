(function(){
var P=[["index.html","Home","হোম"],["tools.html","Tools","টুলস"],["travel.html","Travel","ভ্রমণ"],["information.html","Information","তথ্য"],["portfolio.html","Portfolio","পোর্টফোলিও"],["contact.html","Contact","যোগাযোগ"]];
var cur=(location.pathname.split("/").pop()||"index.html");if(cur.indexOf(".")<0)cur+=".html";
var base=location.pathname.indexOf("/tools/")!==-1?"../":"";if(base)cur="tools.html";
var nav=P.map(function(p){return '<a href="'+base+p[0]+'"'+(p[0]==cur?' class="on" aria-current="page"':'')+'><span data-en="'+p[1]+'" data-bn="'+p[2]+'">'+p[1]+'</span></a>'}).join("");
var more=P.slice(4).map(function(p){var cls=p[0]==cur?' class="on" aria-current="page"':'';var aria=p[0]==cur?' aria-current="page"':'';return '<a href="'+base+p[0]+'"'+cls+aria+'><span data-en="'+p[1]+'" data-bn="'+p[2]+'">'+p[1]+'</span></a>'}).join("");
var moreLabel='<span data-en="More" data-bn="আরও">More</span>';
var moreNav='<div class="nav-more"><button class="nav-more-btn" id="navMoreBtn" type="button" aria-expanded="false" aria-haspopup="true">'+moreLabel+'</button><div class="nav-more-menu" id="navMoreMenu">'+more+'</div></div>';
var profile='<img class="brand-photo" src="'+base+'images/profile-logo.jpg" alt="Muinuddin Gaus">';
document.body.insertAdjacentHTML("afterbegin",
'<header><div class="wrap bar"><a class="brand" href="'+base+'index.html">'+profile+'<span>Muinuddin Gaus</span></a><nav aria-label="Main">'+nav+moreNav+'</nav>'+ 
'<div class="tools"><button class="pill" id="lang" type="button">বাংলা</button><button class="icon-btn" id="theme" aria-label="Switch to night mode" title="Night mode"></button></div></div></header>');
document.body.insertAdjacentHTML("beforeend",'<footer><div class="wrap"><span data-en="© 2026 Mohammad Muinuddin Gaus · Dhaka, Bangladesh" data-bn="© ২০২৬ মুহাম্মদ মুঈনুদ্দীন গাউছ · ঢাকা, বাংলাদেশ">© 2026 Mohammad Muinuddin Gaus · Dhaka, Bangladesh</span></div></footer>');
var root=document.documentElement,t=document.getElementById("theme");
var sun='<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.25"></circle><path d="M12 1.75v2.1M12 20.15v2.1M4.76 4.76l1.48 1.48M17.76 17.76l1.48 1.48M1.75 12h2.1M20.15 12h2.1M4.76 19.24l1.48-1.48M17.76 6.24l1.48-1.48"></path></svg>';
var moon='<svg class="moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 14.8A8.5 8.5 0 0 1 9.2 3.5 8.7 8.7 0 1 0 20.5 14.8Z"></path></svg>';
function setTheme(m){root.setAttribute("data-theme",m);var dark=m==="dark";t.innerHTML=dark?sun:moon;t.setAttribute("aria-label",dark?"Switch to day mode":"Switch to night mode");t.title=dark?"Day mode":"Night mode";try{localStorage.setItem("theme",m)}catch(e){}}
var saved=null;try{saved=localStorage.getItem("theme")}catch(e){}
setTheme(saved||"light");
t.onclick=function(){setTheme(root.getAttribute("data-theme")==="dark"?"light":"dark")};
function setLang(lang){document.documentElement.lang=lang;document.querySelectorAll("[data-en][data-bn]").forEach(function(el){if(!el.children.length)el.textContent=el.getAttribute("data-"+lang)});var b=document.getElementById("lang");b.textContent=lang==="en"?"বাংলা":"EN";b.setAttribute("aria-label",lang==="en"?"Switch to Bengali":"Switch to English");b.dataset.lang=lang;try{localStorage.setItem("lang",lang)}catch(e){}}
var lang=null;try{lang=localStorage.getItem("lang")}catch(e){}
setLang(lang==="bn"?"bn":"en");
document.getElementById("lang").onclick=function(){setLang(this.dataset.lang==="en"?"bn":"en")};
var moreBtn=document.getElementById("navMoreBtn"),moreMenu=document.getElementById("navMoreMenu");
function closeMore(){moreMenu.classList.remove("open");moreBtn.setAttribute("aria-expanded","false")}
moreBtn.onclick=function(e){e.stopPropagation();var open=moreMenu.classList.toggle("open");moreBtn.setAttribute("aria-expanded",open?"true":"false")};
document.addEventListener("click",function(e){if(!e.target.closest(".nav-more"))closeMore()});
document.addEventListener("keydown",function(e){if(e.key==="Escape")closeMore()});
document.querySelectorAll("img[loading]").forEach(function(im){im.removeAttribute("loading")});
})();
