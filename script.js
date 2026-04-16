window.addEventListener('scroll',()=>{
document.querySelectorAll('.fade').forEach(el=>{
const rect=el.getBoundingClientRect();
if(rect.top<window.innerHeight-100){el.classList.add('show');}
});
});
