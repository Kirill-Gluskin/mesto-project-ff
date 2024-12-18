//получаю содержимое template через свойство content
import {deleteCardById, likeCardById, removeLikeCardById} from "./api";

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
    if (userId !== cardData.owner._id) {
        deleteButton.classList.add('card__delete-button-invisiable')
    };
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    cardTitle.textContent = cardData.name;
    likeCounter.textContent = cardData.likes.length
    //добавляю обработчик для удаления карточки по кнопке deleteButton
    deleteButton.addEventListener('click', () => {
            deleteCard(cardElement, cardData._id)
    });
    //проставление лайка
    const likeButton = cardElement.querySelector('.card__like-button');
    likeButton.addEventListener('click', () => likeCard(likeButton, likeCounter, cardData._id));
    if (cardData.likes.some(user => user._id === userId)) {
        likeButton.classList.add('card__like-button_is-active')
    }
    //открытие попапа с карточкой
    cardImage.addEventListener('click', openImage);
    return cardElement;
}
// @todo: Функция удаления карточки
export function deleteCard(card, cardId) {
    deleteCardById(cardId).then(()=> {
        card.remove();
    })
        .catch((err) => {
            console.log(err); // выводим ошибку в консоль
        });
}

//функция проставления лайка
export function likeCard(likeButton, likeCounter, cardId) {
    const likeMethod = likeButton.classList.contains('card__like-button_is-active')  ? removeLikeCardById : likeCardById;
        likeMethod(cardId).then((data) => {
           likeCounter.textContent = data.likes.length;
           likeButton.classList.toggle('card__like-button_is-active');
        })
            .catch((err) => {
                console.log(err); // выводим ошибку в консоль
            });
}


