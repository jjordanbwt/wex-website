// ═══ Shared JS — Working Excellence ═══
(function(){
  const nav = document.getElementById('main-nav');
  const backdrop = document.getElementById('menu-backdrop');

  // Scrolled state — update nav + mega panels + mobile drawer
  function updateScrollState(){
    if(!nav) return;
    const scrolled = window.scrollY > 40;
    nav.classList.toggle('scrolled', scrolled);
    const navH = scrolled ? '58px' : '72px';
    document.querySelectorAll('.mega-panel').forEach(p => {
      p.style.top = navH;
    });
    const drawer = document.getElementById('mobile-nav-drawer');
    if(drawer) drawer.style.top = navH;
  }
  window.addEventListener('scroll', updateScrollState, {passive:true});
  updateScrollState();

  // Close menus on click outside (document)
  document.addEventListener('click', function(e){
    // Don't close if clicking inside a mega panel
    if(e.target.closest('.mega-panel')) return;
    // Don't close if clicking a nav button (toggleMenu handles that)
    if(e.target.closest('.nav-links > li > button')) return;
    closeMenu();
    // Also close mobile drawer
    var mDrawer = document.getElementById('mobile-nav-drawer');
    var ham = document.getElementById('nav-hamburger');
    if(mDrawer && mDrawer.classList.contains('open')){
      mDrawer.classList.remove('open');
      if(backdrop) backdrop.classList.remove('open');
      if(ham) ham.setAttribute('aria-expanded','false');
    }
  });

  // Backdrop click closes everything
  if(backdrop){
    backdrop.addEventListener('click', function(){
      closeMenu();
      var mDrawer = document.getElementById('mobile-nav-drawer');
      var ham = document.getElementById('nav-hamburger');
      if(mDrawer) mDrawer.classList.remove('open');
      if(ham) ham.setAttribute('aria-expanded','false');
      backdrop.classList.remove('open');
    });
  }

  // Sub-menu hover in mega
  document.querySelectorAll('.mega-practice').forEach(function(practice){
    practice.addEventListener('mouseenter', function(){
      var target = practice.dataset.target;
      if(!target) return;
      document.querySelectorAll('.mega-practice').forEach(function(p){ p.classList.remove('active'); });
      document.querySelectorAll('.mega-center-inner').forEach(function(c){ c.classList.remove('active'); });
      practice.classList.add('active');
      var inner = document.getElementById(target);
      if(inner) inner.classList.add('active');
    });
  });

  // Hamburger mobile nav
  var hamburger = document.getElementById('nav-hamburger');
  var mobileDrawer = document.getElementById('mobile-nav-drawer');
  if(hamburger && mobileDrawer){
    hamburger.addEventListener('click', function(e){
      e.stopPropagation();
      var isOpen = mobileDrawer.classList.contains('open');
      if(isOpen){
        mobileDrawer.classList.remove('open');
        if(backdrop) backdrop.classList.remove('open');
        hamburger.setAttribute('aria-expanded','false');
      } else {
        closeMenu();
        mobileDrawer.classList.add('open');
        if(backdrop) backdrop.classList.add('open');
        hamburger.setAttribute('aria-expanded','true');
      }
    });
  }

  // Fade-up on scroll
  var fadeEls = document.querySelectorAll('.fade-up');
  if(fadeEls.length && 'IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting) e.target.classList.add('visible');
      });
    },{threshold:0.12});
    fadeEls.forEach(function(el){ io.observe(el); });
  }

  // Contact form submit intercept
  var form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var btn = form.querySelector('.form-submit');
      if(btn){ btn.textContent = 'Message Sent — We\'ll be in touch shortly.'; btn.style.background='#2dbfac'; btn.disabled=true; }
    });
  }
})();

/* ── MEGA MENU TOGGLE (shared across all pages) ── */
function toggleMenu(id, e) {
  if(e) e.stopPropagation();
  else if(window.event) window.event.stopPropagation();
  var panel = document.getElementById('mega-'+id);
  var btn   = document.getElementById('btn-'+id);
  var back  = document.getElementById('menu-backdrop');
  if(!panel) return;
  var isOpen = panel.classList.contains('open');
  closeMenu();
  if(!isOpen){
    panel.classList.add('open');
    if(btn) btn.classList.add('active');
    if(back) back.classList.add('open');
  }
}
function closeMenu() {
  document.querySelectorAll('.mega-panel').forEach(function(p){ p.classList.remove('open'); });
  document.querySelectorAll('.nav-links > li > button').forEach(function(b){ b.classList.remove('active'); });
  var back = document.getElementById('menu-backdrop');
  if(back) back.classList.remove('open');
}
function showSub(id, el) {
  document.querySelectorAll('.mega-practice').forEach(function(p){ p.classList.remove('active'); });
  document.querySelectorAll('.mega-center-inner').forEach(function(c){ c.classList.remove('active'); });
  el.classList.add('active');
  var sub = document.getElementById('sub-'+id) || document.getElementById(id);
  if(sub) sub.classList.add('active');
}
document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeMenu(); });
