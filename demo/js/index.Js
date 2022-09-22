import Section from "./Section";

const initialCardsList = new Section(
  {
    renderer: (item) => {
      return createCard(item);
    },
  },
  ".main"
);

const getTemplate = () => {
  const cardElement = document
    .querySelector(".card-tmp")
    .content.querySelector(".card")
    .cloneNode(true);

  return cardElement;
};
const generateCard = () => {
  const cardElement = getTemplate();
  console.log(cardElement);
  cardElement.querySelector(".card__title").textContent = data[0].name;
  return cardElement;
};

const initialJobs = () => {
  const jobList = generateCard();
  initialCardsList.renderItems(jobList);
};

initialJobs();
