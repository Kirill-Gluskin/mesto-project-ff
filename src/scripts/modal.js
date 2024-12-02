export function openModal (modal) {
    modal.classList.add ('popup_is-opened');
    document.addEventListener('keydown', escKeyHundler);
}

export function closeModal (modal) {
    modal.classList.remove('popup_is-opened');
   document.removeEventListener('keydown', escKeyHundler);
}

export function escKeyHundler (evt) {
    const modal = document.querySelector('.popup_is-opened')
    if (evt.key === "Escape") {
        closeModal(modal)
    }
}

export function modalOverlayHundler (modal, evt) {
    const modalContent = modal.querySelector('.popup__content');
    if (!modalContent.contains(evt.target)) {
        closeModal(modal)
    }
}
