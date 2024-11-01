// @todo: Темплейт карточки
   //получаю содержимое template через свойство content
const cardTemplate = document.querySelector("#card-template").content;
// @todo: DOM узлы
    //нахожу элементы с классом "places__list" и добавляю их в cardContainer
const cardContainer = document.querySelector('.places__list');
    // @todo: Функция создания карточки
function createCard(cardData, deleteCardElement) {
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
    return cardElement;
}
// @todo: Функция удаления карточки
function deleteCard(card) {
    card.remove();
}
// @todo: Вывести карточки на страницу
initialCards.forEach((cardData) => {
    const cardElement = createCard(cardData, deleteCard);
    cardContainer.append(cardElement); //добавляю элемент в конец cardContainer
});
