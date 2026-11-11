const toggle=document.querySelector(".menu-toggle");const nav=document.querySelector(".nav");
toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));});
nav.querySelectorAll("a").forEach(l=>l.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");}));

const header=document.querySelector(".header");
addEventListener("scroll",()=>header.classList.toggle("small",scrollY>40),{passive:true});

const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting)return;
  e.target.classList.add("in");io.unobserve(e.target);
}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
