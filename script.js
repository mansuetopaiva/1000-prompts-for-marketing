(function () {
  var modal = document.getElementById('exitModal');
  var closeBtn = document.getElementById('closeModal');

  function showModal() {
    if (sessionStorage.getItem('exitModalShown')) return;
    modal.style.display = 'flex';
    sessionStorage.setItem('exitModalShown', '1');
  }

  document.addEventListener('mouseleave', function (e) {
    if (e.clientY <= 0) showModal();
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  }

  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) modal.style.display = 'none';
    });
  }

  function toggleSticky() {
    var bar = document.getElementById('stickyCTA');
    if (!bar) return;
    bar.style.display = window.innerHeight < 480 ? 'none' : 'block';
  }

  window.addEventListener('resize', toggleSticky);
  toggleSticky();
})();