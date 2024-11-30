const buttonEdit = document.querySelector('.profile__edit-button')
const modalEdit = document.querySelector('.popup_type_edit')

function openPopHendler (modal) {
    modal.classList.add ('popup_is-opened');
    const buttonClose = modal.querySelector('.popup__close');
    buttonClose.addEventListener('click', () => closeHundler(modal));
    document.addEventListener('keydown', evt => escKeyHundler(modal, evt));
}

function closeHundler (modal) {
    modal.classList.remove('popup_is-opened');
}

function escKeyHundler (modal, evt) {
    if (evt.keyCode === 27) {
        closeHundler(modal)
    }
}

buttonEdit.addEventListener('click', () => openPopHendler(modalEdit))
