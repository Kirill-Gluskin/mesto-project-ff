//получаю содержимое template через свойство content
import {deleteCardById} from "./api";

const cardTemplate = document.querySelector("#card-template").content;

    // @todo: Функция создания карточки
export function createCard(cardData, deleteCard, likeCard, openImage, userId) {
    //клонирую элемент с классом "card" со всем содержимым
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    //наполняю карточку содержимым
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const deleteButton = cardElement.querySelector('.card__delete-button');
    const likeCounter = cardElement.querySelector('.card__like-count')
    if (userId !== cardData.owner._id){
        deleteButton.classList.add('card__delete-button-invisiable')
    }
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    cardTitle.textContent = cardData.name;
    likeCounter.textContent = cardData.likes.length
    //добавляю обработчик для удаления карточки по кнопке deleteButton
    deleteButton.addEventListener('click', () => {
        deleteCardById(cardData._id).then(()=> {
            deleteCard(cardElement)
        })
    });
    //проставление лайка
    const likeButton = cardElement.querySelector('.card__like-button');
    likeButton.addEventListener('click', () => likeCard(likeButton));
    //открытие попапа с карточкой
    cardImage.addEventListener('click', openImage);
    return cardElement;
}
// @todo: Функция удаления карточки
export function deleteCard(card) {
    card.remove();
}

//функция проставления лайка
export function likeCard(likeButton) {
    likeButton.classList.toggle('card__like-button_is-active');
}


