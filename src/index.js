import './pages/index.css';
import './scripts/card.js';
import {closeHundler, openPopHendler} from './scripts/modal.js';

//элементы для вызова события при клике на кнопку редактирования
const buttonEdit = document.querySelector('.profile__edit-button');
const modalEdit = document.querySelector('.popup_type_edit');
buttonEdit.addEventListener('click', () => openPopHendler(modalEdit))

//элементы для вызова события при клике на кнопку плюс
const buttonPlus = document.querySelector('.profile__add-button');
const modalPlus = document.querySelector('.popup_type_new-card');
buttonPlus.addEventListener('click', () => openPopHendler(modalPlus));

//
const formElement = document.forms['edit-profile']
const nameInput = formElement.elements.name;
const jobInput = formElement.elements.description;

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

nameInput.value = profileTitle.textContent;
jobInput.value = profileDescription.textContent;

    function handleFormSubmit(evt) {
        evt.preventDefault();
        profileTitle.textContent = nameInput.value;
        profileDescription.textContent = jobInput.value;
        closeHundler(modalEdit);
    }

formElement.addEventListener('submit', handleFormSubmit);

