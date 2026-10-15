(function(){
var b=document.querySelector('.burger'),m=document.getElementById('menu');
if(b&&m){b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o);});
m.addEventListener('click',function(e){if(e.target.tagName==='A'){m.classList.remove('open');b.setAttribute('aria-expanded',false);}});}
var hs=document.querySelector('.has-sub'),tg=document.querySelector('.sub-toggle');
if(hs&&tg){tg.addEventListener('click',function(){var o=hs.classList.toggle('open');tg.setAttribute('aria-expanded',o);});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){hs.classList.remove('open');tg.setAttribute('aria-expanded',false);}});
document.addEventListener('click',function(e){if(window.innerWidth>860&&!hs.contains(e.target)){hs.classList.remove('open');tg.setAttribute('aria-expanded',false);}});}
var hd=document.querySelector('.site-header');
if(hd){var on=function(){hd.classList.toggle('scrolled',window.scrollY>8);};on();window.addEventListener('scroll',on,{passive:true});}
var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
var els=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});els.forEach(function(el){io.observe(el);});}
else{els.forEach(function(el){el.classList.add('in');});}
var f=document.getElementById('enquiry');
if(f){f.addEventListener('submit',function(e){e.preventDefault();
if(f.website&&f.website.value)return;
var g=function(n){return f.elements[n].value.trim();};
var body='Name: '+g('name')+'\nCompany: '+g('company')+'\nEmail: '+g('email')+'\nPhone: '+g('phone')+'\nInterested in: '+g('service')+'\n\n'+g('message');
window.location.href='mailto:hellas.logiship@gmail.com?subject='+encodeURIComponent('Website enquiry: '+g('service')+' - '+g('name'))+'&body='+encodeURIComponent(body);});}
})();