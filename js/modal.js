(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
      openModalMobileMenuBtn: document.querySelector("[data-burger]"),
      closeModalMobileMenuBtn: document.querySelector("[data-burger-close]"),
      modalMobileMenu: document.querySelector("[data-burger-menu]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.openModalMobileMenuBtn.addEventListener("click", toggleModal.bind("mob"));
  refs.closeModalMobileMenuBtn.addEventListener("click", toggleModal.bind("mob"));
  
  function toggleModal(modal="default") {
    if (modal !== 'default') {
      refs.modalMobileMenu.classList.toggle("is-hidden");
        
    }
    else {
      refs.modal.classList.toggle("is-hidden");
    }
    }
  })();
