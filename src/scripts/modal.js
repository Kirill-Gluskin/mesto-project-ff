export function openModal (modal) {
    modal.classList.add ('popup_is-opened');
    const buttonClose = modal.querySelector('.popup__close');
    buttonClose.addEventListener('click', () => closeModal(modal));
    document.addEventListener('keydown', evt => escKeyHundler(modal, evt));
    modal.addEventListener('mousedown', evt => modalOverlayHundler(modal, evt))
}

export function closeModal (modal) {
    modal.classList.remove('popup_is-opened');
}

export function escKeyHundler (modal, evt) {
    if (evt.keyCode === 27) {
        closeModal(modal)
    }
}

export function modalOverlayHundler (modal, evt) {
    const modalContent = modal.querySelector('.popup__content');
    if (!modalContent.contains(evt.target)) {
        closeModal(modal)
    }
}
