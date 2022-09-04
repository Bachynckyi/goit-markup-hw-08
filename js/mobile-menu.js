(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu__button-open'),
    closeMenuBtn: document.querySelector('.menu__button-close'),
    menu: document.querySelector('.menu'),
  };

  refs.openMenuBtn.addEventListener('click', openMenu);
  refs.closeMenuBtn.addEventListener('click', closeMenu);

  function openMenu() {
    refs.menu.classList.remove('is-hidden');
    window.addEventListener('scroll', cancelScroll);
  }

  function closeMenu() {
    refs.menu.classList.add('is-hidden');
    window.removeEventListener('scroll', cancelScroll);
  }

  function cancelScroll() {
    window.scrollTo(0,0);
  }
})();