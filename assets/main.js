(function(){
var b=document.querySelector('.burger'),m=document.getElementById('menu'),root=document.documentElement;
function setMenu(o){if(!m||!b)return;m.classList.toggle('open',o);b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Close menu':'Open menu');root.classList.toggle('nav-open',o);
if(!o){var h=m.querySelector('.has-sub');if(h){h.classList.remove('open');var t=h.querySelector('.sub-toggle');if(t)t.setAttribute('aria-expanded',false);}}}
if(b&&m){b.addEventListener('click',function(){setMenu(!m.classList.contains('open'));});
m.addEventListener('click',function(e){var a=e.target.closest('a');if(a)setMenu(false);});
document.addEventListener('keydown',function(e){if(e.key==='Escape')setMenu(false);});
window.addEventListener('resize',function(){if(window.innerWidth>860)setMenu(false);});}
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
var q=new URLSearchParams(location.search).get('service');var mp={ocean:'Ocean Freight Forwarding',agency:'Ship Agency Services',husbandry:'Husbandry Services',integrated:'Integrated Logistics'};
if(f&&q&&mp[q]){f.elements.service.value=mp[q];}
if(f){f.addEventListener('submit',function(e){e.preventDefault();
if(f.website&&f.website.value)return;
var g=function(n){return f.elements[n].value.trim();};
var body='Name: '+g('name')+'\nCompany: '+g('company')+'\nEmail: '+g('email')+'\nPhone: '+g('phone')+'\nInterested in: '+g('service')+'\n\n'+g('message');
var st=document.getElementById('form-status');if(st){st.textContent='Thank you. Your email app should now open with your enquiry ready to send. If nothing opens, please email hellas.logiship@gmail.com directly.';st.classList.add('show');}
window.location.href='mailto:hellas.logiship@gmail.com?subject='+encodeURIComponent('Website enquiry: '+g('service')+' - '+g('name'))+'&body='+encodeURIComponent(body);});}
})();