import './pages/index.css';
import { initialCards } from "./scripts//cards";
import { closeHundler, openPopHendler } from './scripts/modal.js';
import { createCard, deleteCard, likeCard } from "./scripts/card";

//элементы для вызова события при клике на кнопку редактирования
const buttonEdit = document.querySelector('.profile__edit-button');
const modalEdit = document.querySelector('.popup_type_edit');
buttonEdit.addEventListener('click', () => openPopHendler(modalEdit))

//элементы для вызова события при клике на кнопку плюс
const buttonPlus = document.querySelector('.profile__add-button');
const modalPlus = document.querySelector('.popup_type_new-card');
buttonPlus.addEventListener('click', () => openPopHendler(modalPlus));

//нахожу элементы с классом "places__list" и добавляю их в cardContainer
const cardContainer = document.querySelector('.places__list');
// @todo: Вывести карточки на страницу
initialCards.forEach((cardData) => {
    const cardElement = createCard(cardData, deleteCard, likeCard);
    cardContainer.append(cardElement); //добавляю элемент в конец cardContainer
});

//действие с редактированием данных в название профеля
const formElement = document.forms['edit-profile']
const nameInput = formElement.elements.name;
const jobInput = formElement.elements.description;

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

nameInput.value = profileTitle.textContent;
jobInput.value = profileDescription.textContent;

function handleEditSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closeHundler(modalEdit);
}

formElement.addEventListener('submit', handleEditSubmit);

//действия с добавлением новой картинки
const addCard = document.forms['new-place'];
function handleAddCardSubmit(evt) {
    evt.preventDefault();
    const name = addCard.elements['place-name'].value;
    const link = addCard.elements.link.value;
    console.log(name, link);
    const card = createCard({name, link}, deleteCard, likeCard);
    cardContainer.prepend(card);
    closeHundler(modalPlus);
    addCard.reset();
}

addCard.addEventListener('submit', handleAddCardSubmit);
