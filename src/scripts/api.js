const API_BASE_URL = 'https://nomoreparties.co';

const TOKEN = 'c49ac4b0-9e04-48a3-8816-ec92ceadcd52';
const COHORT_ID = 'wff-cohort-29';

const config = {
    baseUrl: `${API_BASE_URL}/v1/${COHORT_ID}`,
    headers: {
        authorization: TOKEN,
        'Content-Type': 'application/json'
    }
}

export const getUserInfo = () => {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }

            // если ошибка, отклоняем промис
            return Promise.reject(`Ошибка: ${res.status}`);
        });
}

export const getCards = () => {
    return fetch(`${config.baseUrl}/cards/`, {
        headers: config.headers
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }

            // если ошибка, отклоняем промис
            return Promise.reject(`Ошибка: ${res.status}`);
        });
}

//обновляю информацию о пользователе
export const updateUserInfo = (userData) => {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify(userData)
    })
        .then(res => {
                if (res.ok) {
                    return res.json();
                }

                // если ошибка, отклоняем промис
                return Promise.reject(`Ошибка: ${res.status}`);
            })
}

export const addCard = (cardData) => {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify(cardData)
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }

            // если ошибка, отклоняем промис
            return Promise.reject(`Ошибка: ${res.status}`);
        })
}

//удаление карточки
export const deleteCardById = (id) => {
    return fetch(`${config.baseUrl}/cards/${id}`, {
        method: 'DELETE',
        headers: config.headers,
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }

            // если ошибка, отклоняем промис
            return Promise.reject(`Ошибка: ${res.status}`);
        })
}

export const updateUserAvatar = (avatar) => {
    return fetch(`${config.baseUrl}/users/me/avatar `, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({avatar})
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }

            // если ошибка, отклоняем промис
            return Promise.reject(`Ошибка: ${res.status}`);
        })
}

export const likeCardById = (cardID) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardID} `, {
        method: 'PUT',
        headers: config.headers,
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }

            // если ошибка, отклоняем промис
            return Promise.reject(`Ошибка: ${res.status}`);
        })
}

export const removeLikeCardById = (cardID) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardID} `, {
        method: 'DELETE',
        headers: config.headers,
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }

            // если ошибка, отклоняем промис
            return Promise.reject(`Ошибка: ${res.status}`);
        })
}