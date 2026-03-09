// ═══ Shared JS — Working Excellence ═══
(function(){
  const nav = document.getElementById('main-nav');
  const backdrop = document.getElementById('menu-backdrop');

  // Scrolled state
  window.addEventListener('scroll', () => {
    nav && nav.classList.toggle('scrolled', window.scrollY > 40);
  }, {passive:true});

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
