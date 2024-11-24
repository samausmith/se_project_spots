import {
  enableValidation,
  settings,
  resetValidation,
} from "../scripts/validation.js";
import "./index.css";
import Api from "../utils/Api.js";
import { setButtonText } from "../utils/helpers.js";

const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Golden Gate bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
];

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "7ce32752-7f51-4ee3-8daa-e08858792089",
    "Content-Type": "application/json",
  },
});

api
  .getAppInfo()
  .then(([cards, profileInfo]) => {
    cards.forEach((card) => {
      const cardElement = getCardElement(card);
      cardsList.append(cardElement);
    });
    profileName.textContent = profileInfo.name;
    profileDescription.textContent = profileInfo.about;
  })
  .catch(console.error);

// General variable
const modals = document.querySelectorAll(".modal");

// Profile variables
const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const profileCloseButton = profileEditModal.querySelector(
  ".modal__button-close"
);

// Profile Form variables
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const profileNameInput = profileEditModal.querySelector("#profile-name-input");
const profileDescriptionInput = profileEditModal.querySelector(
  "#profile-description-input"
);

// New post/add card varialbes
const addCardModal = document.querySelector("#add-card-modal");
const addCardButton = document.querySelector(".profile__new-post-button");
const addCardForm = addCardModal.querySelector(".modal__form");
const addCardCloseButton = addCardModal.querySelector(".modal__button-close");
const addCardButtonSubmit = addCardModal.querySelector(".modal__button-submit");

// New post/add card form variables
const cardLinkInput = addCardForm.querySelector("#add-card-link-input");
const cardCaptionInput = addCardForm.querySelector("#add-card-caption-input");

// Card list variables
const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");

// Preview modal Element selector
const previewModalElement = document.querySelector("#preview-modal");
const previewModalImage = previewModalElement.querySelector(".modal__image");
const previewModalCaption =
  previewModalElement.querySelector(".modal__caption");
//const previewModalCloseButton = previewModalElement.querySelector(
//  ".modal__button-close"
//);

// Avatar form elements
const avatarModal = document.querySelector("#avatar-modal");
const avatarButton = document.querySelector(".profile__avatar-button");
const avatarForm = avatarModal.querySelector(".modal__form");
//const avatarCloseButton = avatarModal.querySelector(".modal__button-close");
const avatarButtonSubmit = avatarModal.querySelector(".modal__button-submit");
const avatarInput = avatarForm.querySelector("#avatar-input");

// Delete form elements and consts
const deleteModal = document.querySelector("#delete-modal");
const deleteForm = deleteModal.querySelector(".modal__form");
let selectedCard;
let selectedCardId;

// General form functions
function openModal(modal) {
  modal.classList.add("modal_open");
  document.addEventListener("keydown", handleEscape);
}

function closeModal(modal) {
  modal.classList.remove("modal_open");
  document.removeEventListener("keydown", handleEscape);
}

function handleEscape(evt) {
  if (evt.key === "Escape") {
    const activeModal = document.querySelector(".modal_open");
    if (activeModal) {
      closeModal(activeModal);
    }
  }
}
// edit avatar functions
function handleAvatarSubmit(evt) {
  evt.preventDefault();
  const saveButton = evt.submitter;
  setButtonText(saveButton, true, saveButton.value, "Saving...");
  api
    .editAvatarInfo(avatarInput.value)
    .then((data) => {
      avatarInput.textContent = data.avatar;
      closeModal(avatarModal);
    })
    .catch(console.error)
    .finally(() => {
      setButtonText(saveButton, false, saveButton.value, "Saving...");
    });
}

avatarButton.addEventListener("click", () => {
  openModal(avatarModal);
});
avatarForm.addEventListener("submit", handleAvatarSubmit);

// Find all close buttons
const closeButtons = document.querySelectorAll(".modal__button-close");

// Handle modal closing after clicking overlay or close button
modals.forEach((modal) => {
  modal.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("modal_open")) {
      closeModal(modal);
    }
    if (evt.target.classList.contains("modal__button-close")) {
      closeModal(modal);
    }
  });
});

// Edit profile functions
function handleProfileEditFormSubmit(evt) {
  evt.preventDefault();
  const saveButton = evt.submitter;
  setButtonText(saveButton, true, saveButton.value, "Saving...");
  api
    .editUserInfo({
      name: profileNameInput.value,
      about: profileDescriptionInput.value,
    })
    .then((data) => {
      profileName.textContent = data.name;
      profileDescription.textContent = data.about;
      closeModal(profileEditModal);
    })
    .catch(console.error)
    .finally(() => {
      setButtonText(saveButton, false, saveButton.value, "Saving...");
    });
}
profileEditButton.addEventListener("click", () => {
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  resetValidation(
    profileEditForm,
    [profileNameInput, profileDescriptionInput],
    settings
  );
  openModal(profileEditModal);
});

profileEditForm.addEventListener("submit", handleProfileEditFormSubmit);

// Card functions
function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardTitleElement = cardElement.querySelector(".card__title");
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");

  cardTitleElement.textContent = data.name;
  cardImageElement.src = data.link;
  cardImageElement.alt = data.name;

  //maintains active status to like after refresh
  if (data.isLiked) {
    cardLikeButton.classList.add("card__like-button-liked");
  }

  cardLikeButton.addEventListener("click", (evt) => {
    const isLiked = evt.target.classList.contains("card__like-button_liked");
    api
      .changeLikeStatus(data._id, isLiked)
      .then((data) => {
        cardLikeButton.classList.toggle("card__like-button_liked");
      })
      .catch(console.error);
  });

  cardDeleteButton.addEventListener("click", () => {
    //cardElement.remove();
    selectedCard = cardElement;
    selectedCardId = data._id;
    openModal(deleteModal);
  });

  cardImageElement.addEventListener("click", () => {
    openModal(previewModalElement);
    previewModalImage.src = data.link;
    previewModalImage.alt = data.name;
    previewModalCaption.textContent = data.name;
  });

  return cardElement;
}

//handle delete form request listener
function handleDeleteSubmit(evt) {
  evt.preventDefault();
  const deleteButton = evt.submitter;
  setButtonText(deleteButton, true, deleteButton.value, "Deleting...");
  api
    .deleteCard(selectedCardId)
    .then((data) => {
      closeModal(deleteModal);
      selectedCard.remove();
    })
    .catch(console.error)
    .finally(() => {
      setButtonText(deleteButton, false, deleteButton.value, "Deleting...");
    });
}

deleteForm.addEventListener("submit", handleDeleteSubmit);
//add cancel event listener
// New/add card functions
addCardButton.addEventListener("click", () => {
  openModal(addCardModal);
});

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  //const newCard = { name: cardCaptionInput.value, link: cardLinkInput.value };
  const saveButton = evt.submitter;
  setButtonText(saveButton, true, saveButton.value, "Saving...");
  api
    .addCardInfo({ name: cardCaptionInput.value, link: cardLinkInput.value })
    .then((data) => {
      const cardElement = getCardElement(data);
      cardsList.prepend(cardElement);
      closeModal(addCardModal);
      addCardForm.reset();
      disableButton(addCardButtonSubmit, settings);
    })
    .catch(console.error)
    .finally(() => {
      setButtonText(saveButton, false, saveButton.value, "Saving...");
    });
}

addCardForm.addEventListener("submit", handleAddCardFormSubmit);

enableValidation(settings);
