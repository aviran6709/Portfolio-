import Section from "./Section";

 const data =  [{name:"finalProject",
link:"www.www",
gitLink:"sfsaffa",
pageLink:"fdsfsdf"
}]

console.log("dddddd");
const initialCardsList = new Section(
  { renderer: (item) => { return createCard(item) } }, ".main")


 const getTemplate =( )=> {
  const cardElement = document
    .querySelector(".card-tmp")
    .content.querySelector(".card")
    .cloneNode(true);

    console.log(cardElement);
  return cardElement;
}
 const generateCard=()=> {
 const cardElement = getTemplate();
 console.log(cardElement);
 cardElement.querySelector(".card__title").textContent =data[0].name;
  return cardElement;
}





 

const initialJobs = () =>{

  const jobList = generateCard()
  initialCardsList.renderItems(jobList);
}
console.log("dddddd");
initialJobs()