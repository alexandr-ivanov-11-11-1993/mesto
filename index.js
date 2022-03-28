
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup-form__input_type_name');
let jobInput = document.querySelector('.popup-form__input_type_description');
let buttonEditProfile = document.querySelector('.profile__edit-button');
let saveButton = document.querySelector('.popup__edit-button');
let profileName = document.querySelector('.profile__title');
let profileDescription = document.querySelector('.profile__subtitle');
let popup = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup_name_profile');
const popupAddCard = document.querySelector('.popup_name_add-card');
const popupZoomCard = document.querySelector('.popup_name_zoom-card');
let closeButton = document.querySelector('.popup__close');
let body = document.querySelector('.body')
const cardsList = document.querySelector('.elements__cards');
const elementName = document.querySelector('.element__name');
const elementPhoto = document.querySelector('.element__photo');
const buttonAddCard = document.querySelector('.profile__add-button');
const buttonSaveImg = document.querySelector('.popup__button-save-img');
const buttonClosePopupCard = document.querySelector('.button__close-popup-card');
const buttonClosePopupZoom = document.querySelector('.button__close-popup-zoom');
const buttonLike = document.querySelector('.element__like');
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
const formPopupCard = document.querySelector('.popup-form_card');


initialCards.forEach((newCard) => {
    cardsList.append(renderCard(newCard.name, newCard.link));
});


//Заполнение шаблона карточки
function renderCard(name, link) {
    const cardTemplate = document.querySelector('#element-template').content;
    const newCard = cardTemplate.querySelector('.element').cloneNode(true);

    newCard.querySelector('.element__name').textContent = name;
    newCard.querySelector('.element__photo').src = link;
    newCard.querySelector('.element__photo').alt = name;

    /*setActionsListeners(newCard);*/
    newCard.querySelector('.element__like').addEventListener('click', function (evt){
        evt.target.classList.toggle('element__like_true');;
    });
    /*newCard.querySelector('.element__trash').addEventListener('click',)*/

    return newCard;
}






function setActionsListeners(newCard) {
    newCard.querySelector('.element__photo').addEventListener('click',openPopupZoom);
    newCard.querySelector('.element__like').addEventListener('click',likeCard);
    newCard.querySelector('.element__trash').addEventListener('click',deleteCard);
}


//Заполнение формы профиля
function formSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;

    closePopup();
}

function closePopup(){
    /*popup.classList.remove('popup_opened')*/
    popupAddCard.classList.remove('popup_opened')
    popupZoomCard.classList.remove('popup_opened')
    popupProfile.classList.remove('popup_opened')
    body.classList.remove('body_popup')
}

//Открытие модального окна профиля
function openPopupProfile(){
    popupProfile.classList.add('popup_opened')
    body.classList.add('body_popup')
}

function openPopupCard(){
    popupAddCard.classList.add('popup_opened')
    body.classList.add('body_popup')


}

//Заполнение формы карточки
function formSubmitHandlerCard(evt) {
    evt.preventDefault();

    const inputImgName = evt.target.querySelector('.popup-form__input_type_img-name').value;
    const inputImgLink = evt.target.querySelector('.popup-form__input_type_img-link').value;

    cardsList.prepend(renderCard(inputImgName, inputImgLink));

    closePopup();
    console.log({inputImgName, inputImgLink});
}
formPopupCard.addEventListener('submit', formSubmitHandlerCard);

function openPopupZoomCard(name,link){
    const zoomButton = document.querySelector('.button__zoom');
    const zoomCard = zoomButton.closest('.popup__image');

    zoomCard.querySelector();
    popupZoomCard.classList.add('popup_opened')
    body.classList.add('body_popup')

    /*nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;*/
}


closeButton.addEventListener('click', closePopup);
buttonEditProfile.addEventListener('click', openPopupProfile);
buttonAddCard.addEventListener('click', openPopupCard);
/*editButton.addEventListener('click', openPopup(profileName, profileDescription));*/
formElement.addEventListener('submit', formSubmitHandler);
buttonSaveImg.addEventListener('submit', formSubmitHandlerCard);
buttonClosePopupCard.addEventListener('click', closePopup);
document.querySelector('.element__photo').addEventListener('click', openPopupZoomCard);
buttonClosePopupZoom.addEventListener('click', closePopup);
/*
deleteButton.addEventListener('click', function (){
    const deleteButton = document.querySelector('.element__trash');
    const deleteItem = deleteButton.closest('.element');
    deleteItem.remove();
});*/

