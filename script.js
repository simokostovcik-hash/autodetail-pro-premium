(() => {
 const toggle=document.querySelector(".menu-toggle");
 const nav=document.querySelector("#main-nav");
 const form=document.querySelector("#demo-form");
 const status=document.querySelector("#form-status");
 if(toggle&&nav){
   const close=()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");toggle.setAttribute("aria-label","Open menu");};
   toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));toggle.setAttribute("aria-label",open?"Close menu":"Open menu");});
   nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",close));
   document.addEventListener("keydown",e=>{if(e.key==="Escape"&&nav.classList.contains("open")){close();toggle.focus();}});
   window.addEventListener("resize",()=>{if(window.innerWidth>760)close();});
 }
 if(form&&status){
   form.addEventListener("submit",e=>{
     e.preventDefault();
     if(!form.checkValidity()){status.textContent="Please complete all fields with valid information.";form.reportValidity();return;}
     form.reset();status.textContent="Demo only: your message was not sent or stored.";
   });
 }
})();
