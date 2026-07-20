(function () {
  'use strict';

  /* ----------------------------------------------------------
     FAQ ACCORDION
  ---------------------------------------------------------- */
  var questions = document.querySelectorAll('.faq-question');

  questions.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var answer = btn.nextElementSibling;
      var isOpen = btn.getAttribute('aria-expanded') === 'true';

      /* Fecha todos */
      questions.forEach(function (b) {
        b.setAttribute('aria-expanded', 'false');
        b.nextElementSibling.classList.remove('open');
      });

      /* Abre o clicado se estava fechado */
      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        answer.classList.add('open');
      }
    });
  });

  /* ----------------------------------------------------------
     EXIT-INTENT POPUP
  ---------------------------------------------------------- */
  var backdrop  = document.getElementById('exitModal');
  var closeBtn  = document.getElementById('closeModal');
  var closeAlt  = document.getElementById('closeModalAlt');

  function showModal() {
    if (!backdrop) return;
    if (sessionStorage.getItem('exitShown')) return;
    backdrop.classList.add('active');
    sessionStorage.setItem('exitShown', '1');
  }

  function hideModal() {
    if (backdrop) backdrop.classList.remove('active');
  }

  document.addEventListener('mouseleave', function (e) {
    if (e.clientY <= 0) showModal();
  });

  if (closeBtn)  closeBtn.addEventListener('click', hideModal);
  if (closeAlt)  closeAlt.addEventListener('click', hideModal);

  if (backdrop) {
    backdrop.addEventListener('click', function (e) {
      if (e.target === backdrop) hideModal();
    });
  }

})();
