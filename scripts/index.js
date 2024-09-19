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
const previewModalCloseButton = previewModalElement.querySelector(
  ".modal__button-close"
);

// General form functions
function openModal(modal) {
  modal.classList.add("modal_open");
}

function closeModal(modal) {
  modal.classList.remove("modal_open");
}

// Find all close buttons
const closeButtons = document.querySelectorAll(".modal__button-close");

// Function to close all buttons when clicked
closeButtons.forEach((closeButton) => {
  const modal = closeButton.closest(".modal");
  closeButton.addEventListener("click", () => closeModal(modal));
});

// Edit profile functions
function handleProfileEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(profileEditModal);
}
profileEditButton.addEventListener("click", () => {
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(profileEditModal);
});
profileCloseButton.addEventListener("click", () => {
  closeModal(profileEditModal);
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

  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("card__like-button_liked");
  });

  cardDeleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImageElement.addEventListener("click", () => {
    openModal(previewModalElement);
    previewModalImage.src = data.link;
    previewModalImage.alt = data.name;
    previewModalCaption.textContent = data.name;
  });

  return cardElement;
}

// Close preivew
previewModalCloseButton.addEventListener("click", () => {
  closeModal(previewModalElement);
});

// Load initial cards
initialCards.forEach((card) => {
  const cardElement = getCardElement(card);
  cardsList.append(cardElement);
});

// New/add card functions
addCardButton.addEventListener("click", () => {
  openModal(addCardModal);
});
addCardCloseButton.addEventListener("click", () => {
  closeModal(addCardModal);
});

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const newCard = { name: cardCaptionInput.value, link: cardLinkInput.value };
  const cardElement = getCardElement(newCard);
  cardsList.prepend(cardElement);
  closeModal(addCardModal);
  addCardForm.reset();
}

addCardForm.addEventListener("submit", handleAddCardFormSubmit);
