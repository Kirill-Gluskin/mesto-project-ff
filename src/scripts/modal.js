export function openPopHendler (modal) {
    modal.classList.add ('popup_is-opened');
    const buttonClose = modal.querySelector('.popup__close');
    buttonClose.addEventListener('click', () => closeHundler(modal));
    document.addEventListener('keydown', evt => escKeyHundler(modal, evt));
    modal.addEventListener('mousedown', evt => modalOverlayHundler(modal, evt))
}

export function closeHundler (modal) {
    modal.classList.remove('popup_is-opened');
}

export function escKeyHundler (modal, evt) {
    if (evt.keyCode === 27) {
        closeHundler(modal)
    }
}

export function modalOverlayHundler (modal, evt) {
    const modalContent = modal.querySelector('.popup__content');
    if (!modalContent.contains(evt.target)) {
        closeHundler(modal)
    }
}

