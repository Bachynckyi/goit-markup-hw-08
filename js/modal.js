(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);

  function openModal() {
    refs.modal.classList.remove('is-hidden');
    window.addEventListener('scroll', cancelScroll);
  }

  function closeModal() {
    refs.modal.classList.add('is-hidden');
    window.removeEventListener('scroll', cancelScroll);
  }

  function cancelScroll() {
    window.scrollTo(0,0);
  }
})();