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
    document.querySelectorAll('.mega-panel').forEach(p => p.style.top = navH);
    const drawer = document.getElementById('mobile-nav-drawer');
    if(drawer) drawer.style.top = navH;
  }
  window.addEventListener('scroll', updateScrollState, {passive:true});
  updateScrollState();

  // Mega menu
  const triggers = document.querySelectorAll('.mega-trigger');
  const panels   = document.querySelectorAll('.mega-panel');

  function closeAll(){
    triggers.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('open'));
    if(backdrop) backdrop.classList.remove('open');
  }

  triggers.forEach(trigger => {
    trigger.addEventListener('click', e => {
      e.stopPropagation();
      const id   = 'mega-' + trigger.dataset.mega;
      const panel = document.getElementById(id);
      const isOpen = panel && panel.classList.contains('open');
      closeAll();
      if(!isOpen && panel){
        trigger.classList.add('active');
        panel.classList.add('open');
        backdrop.classList.add('open');
      }
    });
  });

  document.addEventListener('click', closeAll);
  backdrop && backdrop.addEventListener('click', closeAll);
  panels.forEach(p => p.addEventListener('click', e => e.stopPropagation()));

  // Sub-menu hover in mega
  document.querySelectorAll('.mega-practice').forEach(practice => {
    practice.addEventListener('mouseenter', () => {
      const target = practice.dataset.target;
      if(!target) return;
      document.querySelectorAll('.mega-practice').forEach(p => p.classList.remove('active'));
      document.querySelectorAll('.mega-center-inner').forEach(c => c.classList.remove('active'));
      practice.classList.add('active');
      const inner = document.getElementById(target);
      if(inner) inner.classList.add('active');
    });
  });

  // Hamburger mobile nav
  const hamburger = document.getElementById('nav-hamburger');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  if(hamburger && mobileDrawer){
    hamburger.addEventListener('click', e => {
      e.stopPropagation();
      const isOpen = mobileDrawer.classList.contains('open');
      if(isOpen){
        mobileDrawer.classList.remove('open');
        backdrop && backdrop.classList.remove('open');
        hamburger.setAttribute('aria-expanded','false');
      } else {
        closeAll();
        mobileDrawer.classList.add('open');
        backdrop && backdrop.classList.add('open');
        hamburger.setAttribute('aria-expanded','true');
      }
    });
    backdrop && backdrop.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
      hamburger.setAttribute('aria-expanded','false');
    });
  }

  // Fade-up on scroll
  const fadeEls = document.querySelectorAll('.fade-up');
  if(fadeEls.length && 'IntersectionObserver' in window){
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if(e.isIntersecting) e.target.classList.add('visible');
      });
    },{threshold:0.12});
    fadeEls.forEach(el => io.observe(el));
  }

  // Contact form submit intercept
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('.form-submit');
      if(btn){ btn.textContent = 'Message Sent — We\'ll be in touch shortly.'; btn.style.background='#2dbfac'; btn.disabled=true; }
    });
  }
})();

/* ── MEGA MENU TOGGLE (shared across all pages) ── */
function toggleMenu(id) {
  const panel = document.getElementById('mega-'+id);
  const btn   = document.getElementById('btn-'+id);
  const back  = document.getElementById('menu-backdrop');
  if(!panel) return;
  const open  = panel.classList.contains('open');
  closeMenu();
  if(!open){ panel.classList.add('open'); if(btn) btn.classList.add('active'); if(back) back.classList.add('open'); }
}
function closeMenu() {
  document.querySelectorAll('.mega-panel').forEach(p => p.classList.remove('open'));
  document.querySelectorAll('.nav-links > li > button').forEach(b => b.classList.remove('active'));
  const back = document.getElementById('menu-backdrop');
  if(back) back.classList.remove('open');
}
function showSub(id, el) {
  document.querySelectorAll('.mega-practice').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.mega-center-inner').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  const sub = document.getElementById('sub-'+id) || document.getElementById(id);
  if(sub) sub.classList.add('active');
}
document.addEventListener('keydown', e => { if(e.key==='Escape') closeMenu(); });
