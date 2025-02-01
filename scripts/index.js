// @todo: Темплейт карточки
const template = document.querySelector("#card-template");
// @todo: DOM узлы
const appendCard = document.querySelector(".places__list");
const profilePopup = document.querySelector(".popup_type_edit");
const cardPopup = document.querySelector(".popup_type_new-card");
const imagePopup = document.querySelector(".popup_type_image");
const btnProfileOpen = document.querySelector(".profile__edit-button");
const btnProfileClose = profilePopup.querySelector(".popup__close");

const titleProfilePopup = profilePopup.querySelector(".popup__input_type_name");
const titleProfile = document.querySelector(".profile__title");
const descripProfilePopup = profilePopup.querySelector(
  ".popup__input_type_description"
);
const descripProfile = document.querySelector(".profile__description");

const profileFormElement = profilePopup.querySelector(".popup__form");
const btnProfileSave = profilePopup.querySelector(".popup__button");
// Открытие и закрытие формы для добавления карточек
const btnCardOpen = document.querySelector(".profile__add-button");
const btnCardClose = cardPopup.querySelector(".popup__close");
const btnCardSave = cardPopup.querySelector(".popup__button");
btnCardOpen.addEventListener("click", () => openModal(cardPopup));
btnCardClose.addEventListener("click", () => closeModal(cardPopup));
// Добавления новых карточек пользователем
const CardSave = cardPopup.querySelector(".popup__form");
const cardName = cardPopup.querySelector(".popup__input_type_card-name");
const cardUrl = cardPopup.querySelector(".popup__input_type_url");
function handleCardFormSubmit(evt) {
  evt.preventDefault();
  createCard(cardName.value, cardUrl.value, true);
  CardSave.reset();
  closeModal(cardPopup);
}
CardSave.addEventListener("submit", handleCardFormSubmit);

// Перебор массива с данными
initialCards.forEach(function (elem) {
  createCard(elem.name, elem.link, false);
});
// Функция создания карточки
function createCard(name, link, isUserCard) {
  const item = template.content.cloneNode(true);
  const img = item.querySelector(".card__image");
  const title = item.querySelector(".card__title");
  img.setAttribute("src", link);
  img.setAttribute("alt", `Фото ${name}`);
  title.textContent = name;
  if (isUserCard) {
    return appendCard.prepend(item);
  } else {
    return appendCard.append(item);
  }
}

// @todo: Функция удаления карточки
function removeCard() {}
// Добавления текста по умолчания внутри формы изменений профиля
titleProfilePopup.value = titleProfile.textContent;
descripProfilePopup.value = descripProfile.textContent;
// Обработчик события открытия окна редактирования профиля
btnProfileOpen.addEventListener("click", () => openModal(profilePopup));
// Сохранение изменений профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  titleProfile.textContent = titleProfilePopup.value;
  descripProfile.textContent = descripProfilePopup.value;
  closeModal(profilePopup);
}
profileFormElement.addEventListener("submit", handleProfileFormSubmit);

// Обработчик события закрытия окна редактирования профиля
btnProfileClose.addEventListener("click", () => closeModal(profilePopup));

// Функция окрытия окна
function openModal(popup) {
  popup.classList.add("popup_is-opened");
}
// Функция закрытия окна
function closeModal(popup) {
  popup.classList.remove("popup_is-opened");
}
