import "./index.css";
import listBuys from "./list-buys";

// const info1 = document.querySelector('.info1') as HTMLElement;
// info1.textContent = listBuys[20].sort;

// const img1 = document.querySelector('.img1') as HTMLElement;
// img1.style.backgroundImage =  `url(${listBuys[20].image1})`;

// const img2 = document.querySelector('.img2') as HTMLElement;
// img2.style.backgroundImage =  `url(${listBuys[21].image2})`;

const containerTeaCards = document.querySelector('.container_tea-cards') as HTMLElement;

for (let i = 0; i < 23; i++) {

const teaCardInfo = containerTeaCards.appendChild(document.createElement(`div`)) as HTMLDivElement;
teaCardInfo.classList.add('tea-card-info');

const teaCard = teaCardInfo.appendChild(document.createElement(`div`)) as HTMLDivElement;
teaCard.classList.add('tea-card');
teaCard.style.backgroundImage =  `url(${listBuys[i].image1})`

const teaCardName = teaCardInfo.appendChild(document.createElement(`p`)) as HTMLElement;
teaCardName.classList.add('tea-card-name');
teaCardName.textContent = listBuys[i].name;

const teaCardSort = teaCardInfo.appendChild(document.createElement(`p`)) as HTMLElement;
teaCardSort.classList.add('tea-card-sort');
teaCardSort.textContent = listBuys[i].sort;

const teaCardDescription = teaCardInfo.appendChild(document.createElement(`p`)) as HTMLElement;
teaCardDescription.classList.add('tea-card-description');
teaCardDescription.textContent = listBuys[i].description;

const teaCardAmount = teaCardInfo.appendChild(document.createElement(`span`)) as HTMLElement;
teaCardAmount.classList.add('tea-card-description');
teaCardAmount.textContent = `In stock: ${listBuys[i].amount} gramm`;

const teaCardPrice = teaCardInfo.appendChild(document.createElement(`p`)) as HTMLElement;
teaCardPrice.classList.add('tea-card-description');
teaCardPrice.textContent = `Price: ${listBuys[i].price} $ per gramm`;

const buttonsAmount = teaCardInfo.appendChild(document.createElement(`div`)) as HTMLElement;
buttonsAmount.classList.add('buttons-amount');

const addButton = buttonsAmount.appendChild(document.createElement(`button`)) as HTMLButtonElement;
addButton.classList.add('add-button');
addButton.textContent = `Add`;

const deleteButton = buttonsAmount.appendChild(document.createElement(`button`)) as HTMLButtonElement;
deleteButton.classList.add('delete-button');
deleteButton.textContent = `Delete`;

const amount = buttonsAmount.appendChild(document.createElement(`span`)) as HTMLElement;
amount.classList.add('amount');
amount.textContent = `1`;
}
