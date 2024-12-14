import './pages/index.css';
import { closeModal, openModal, modalOverlayHundler } from './scripts/modal.js';
import { createCard, deleteCard, likeCard } from "./scripts/card";
import { enableValidation } from "./scripts/validation";
import {getUserInfo, getCards, updateUserInfo, addCard} from "./scripts/API";

//элементы для вызова события при клике на кнопку редактирования
let myUserId;
const buttonEdit = document.querySelector('.profile__edit-button');
const modalEdit = document.querySelector('.popup_type_edit');
buttonEdit.addEventListener('click', () => openModal(modalEdit))

//элементы для вызова события при клике на кнопку плюс
const buttonPlus = document.querySelector('.profile__add-button');
const modalPlus = document.querySelector('.popup_type_new-card');
buttonPlus.addEventListener('click', () => openModal(modalPlus));

//нахожу элементы с классом "places__list" и добавляю их в cardContainer
const cardContainer = document.querySelector('.places__list');
//вывожу карточки с сервера

//действие с редактированием данных в название профеля
const formEditProfile = document.forms['edit-profile']
const nameInput = formEditProfile.elements.name;
const jobInput = formEditProfile.elements.description;

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileAvatar = document.querySelector('.profile__image')

nameInput.value = profileTitle.textContent;
jobInput.value = profileDescription.textContent;

function handleEditSubmit(evt) {
    evt.preventDefault();
    updateUserInfo({
        name: nameInput.value,
        about: jobInput.value,
    }).then((result) => {
        profileTitle.textContent = result.name;
        profileDescription.textContent = result.about;
        closeModal(modalEdit);
    })
}

formEditProfile.addEventListener('submit', handleEditSubmit);
//действия с добавлением новой картинки
const formAddCard = document.forms['new-place'];
function handleFormAddCardSubmit(evt) {
    evt.preventDefault();
    addCard({
        name: formAddCard.elements['place-name'].value,
        link: formAddCard.elements.link.value,
    }).then((cardData) => {
        const card = createCard(cardData, deleteCard, likeCard, handleImageClick, myUserId);
            cardContainer.prepend(card);
            closeModal(modalPlus);
            formAddCard.reset();
    })
}

formAddCard.addEventListener('submit', handleFormAddCardSubmit);

//получение элемента по нажатию на картинку
const modalImage = document.querySelector('.popup_type_image');
// Находим элементы один раз и записываем в константы
const popupImage = modalImage.querySelector('.popup__image');
const popupCaption = modalImage.querySelector('.popup__caption');

//валидация форм
enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});

//функция попапа картинки
function  handleImageClick(evt) {
    const imageNode = evt.target;
    popupImage.src = imageNode.src;
    popupImage.alt = imageNode.alt;
    popupCaption.textContent = imageNode.alt;
    openModal(modalImage);
}

//обработчик для элементов модального окна
const popups = document.querySelectorAll('.popup');
popups.forEach(popup => {
    popup.addEventListener('mousedown', (evt) => modalOverlayHundler(popup, evt));
    const closeButton = popup.querySelector('.popup__close');
    closeButton.addEventListener('click', () => closeModal(popup));
})

//promiseAll для инфо и пользователе и для массива карточек
Promise.all ([getUserInfo(), getCards()]).then(([userInfo, cards]) => {
    profileTitle.textContent = userInfo.name;
    profileDescription.textContent = userInfo.about;
    profileAvatar.style.backgroundImage = `url('${userInfo.avatar}')`;
    myUserId = userInfo._id;
    cards.forEach((cardData) => {
        const cardElement = createCard(cardData, deleteCard, likeCard, handleImageClick, myUserId);
        cardContainer.append(cardElement); //добавляю элемент в конец cardContainer
    });
})