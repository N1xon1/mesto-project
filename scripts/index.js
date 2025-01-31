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
// Перебор массива с данными
initialCards.forEach(function (elem) {
  createCard(elem.name, elem.link);
});
// Функция создания карточки
function createCard(name, link) {
  const item = template.content.cloneNode(true);
  const img = item.querySelector(".card__image");
  const title = item.querySelector(".card__title");
  img.setAttribute("src", link);
  img.setAttribute("alt", `Фото ${name}`);
  title.textContent = name;
  return appendCard.append(item);
}

// @todo: Функция удаления карточки
function removeCard() {}
// Добавления текста по умолчания внутри формы изменений профиля
titleProfilePopup.value = titleProfile.textContent;
descripProfilePopup.value = descripProfile.textContent;
// Обработчик события открытия окна редактирования профиля
btnProfileOpen.addEventListener("click", (event) => {
  openModal(profilePopup);
});
// Сохранение изменений профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  titleProfile.textContent = titleProfilePopup.value;
  descripProfile.textContent = descripProfilePopup.value;
}
profileFormElement.addEventListener("submit", handleProfileFormSubmit);
// Обработчики события закрытия формы после сохранения
btnProfileSave.addEventListener("click", (event) => {
  closeModal(profilePopup);
});
btnProfileSave.addEventListener("key", (event) => {
  if (event.key === "Enter") {
    closeModal(profilePopup);
  }
});
// Обработчик события закрытия окна редактирования профиля
btnProfileClose.addEventListener("click", (event) => {
  closeModal(profilePopup);
});

// Функция окрытия окна
function openModal(popup) {
  popup.classList.add("popup_is-opened");
}
// Функция закрытия окна
function closeModal(popup) {
  popup.classList.remove("popup_is-opened");
}
