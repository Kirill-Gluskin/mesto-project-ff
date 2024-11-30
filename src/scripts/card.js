//получаю содержимое template через свойство content
const cardTemplate = document.querySelector("#card-template").content;

    // @todo: Функция создания карточки
export function createCard(cardData, deleteCardElement, likeCard, openImage) {
    //клонирую элемент с классом "card" со всем содержимым
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    //наполняю карточку содержимым
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const deleteButton = cardElement.querySelector('.card__delete-button');
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    cardTitle.textContent = cardData.name;
    //добавляю обработчик для удаления карточки по кнопке deleteButton
    deleteButton.addEventListener('click', () => deleteCardElement(cardElement));
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


