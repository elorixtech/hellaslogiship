(function(){
var b=document.querySelector('.burger'),m=document.getElementById('menu');
if(b&&m){b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o);});
m.addEventListener('click',function(e){if(e.target.tagName==='A'){m.classList.remove('open');b.setAttribute('aria-expanded',false);}});}
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