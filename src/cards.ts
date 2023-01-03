import listBuys from "./list-buys";
import main from "./filters";

import {filterCategoryCheckboxInput} from "./filters"
const containerTeaCards = main.appendChild(document.createElement(`div`)) as HTMLDivElement;
containerTeaCards.classList.add('container_tea-cards');
const teaImage = containerTeaCards.appendChild(document.createElement(`div`)) as HTMLDivElement;
teaImage.classList.add('tea-image');

const teaFiltersRuler = containerTeaCards.appendChild(document.createElement(`div`)) as HTMLDivElement;
teaFiltersRuler.classList.add('tea-filters-ruler');

const teaFiltersRulerPriceHigh = teaFiltersRuler.appendChild(document.createElement(`a`)) as HTMLAnchorElement;
teaFiltersRulerPriceHigh.classList.add('tea-filters-ruler-item');
teaFiltersRulerPriceHigh.textContent = 'Price ↑';

const teaFiltersRulerPriceLow = teaFiltersRuler.appendChild(document.createElement(`a`)) as HTMLAnchorElement;
teaFiltersRulerPriceLow.classList.add('tea-filters-ruler-item');
teaFiltersRulerPriceLow.textContent = 'Price ↓';

const teaFiltersRulerRatingHigh = teaFiltersRuler.appendChild(document.createElement(`a`)) as HTMLAnchorElement;
teaFiltersRulerRatingHigh.classList.add('tea-filters-ruler-item');
teaFiltersRulerRatingHigh.textContent = 'Rating ↑';

const teaFiltersRulerRatingLow = teaFiltersRuler.appendChild(document.createElement(`a`)) as HTMLAnchorElement;
teaFiltersRulerRatingLow.classList.add('tea-filters-ruler-item');
teaFiltersRulerRatingLow.textContent = 'Rating ↓';

const teaFiltersRulerList = teaFiltersRuler.appendChild(document.createElement(`a`)) as HTMLAnchorElement;
teaFiltersRulerList.classList.add('tea-filters-ruler-item');
const teaFiltersRulerListSvg = teaFiltersRulerList.appendChild(document.createElement(`div`)) as HTMLDivElement;
teaFiltersRulerListSvg.classList.add('tea-filters-ruler-item-list');

const teaFiltersRulerTiles = teaFiltersRuler.appendChild(document.createElement(`a`)) as HTMLAnchorElement;
teaFiltersRulerTiles.classList.add('tea-filters-ruler-item');
const teaFiltersRulerTilesSvg = teaFiltersRulerTiles.appendChild(document.createElement(`div`)) as HTMLDivElement;
teaFiltersRulerTilesSvg.classList.add('tea-filters-ruler-item-tiles');
for (let i = 0; i < 24; i++) {
  
  const teaCardInfo = containerTeaCards.appendChild(document.createElement(`div`)) as HTMLDivElement;
  teaCardInfo.classList.add('tea-card-info');

 
  filterCategoryCheckboxInput[0].addEventListener('click', () => {
    if (teaCardSort.textContent !== "Green tea") {
 
      teaCardInfo.classList.toggle('hidden')
 
    }   

  })

  filterCategoryCheckboxInput[1].addEventListener('click', () => {
    if (teaCardSort.textContent !== "Oolong") {
  
      teaCardInfo.classList.toggle('hidden')
     
    }
  })
  filterCategoryCheckboxInput[2].addEventListener('click', () => {
    if (teaCardSort.textContent !== "Puer") {
      
      teaCardInfo.classList.toggle('hidden')
      
    }
  })
  filterCategoryCheckboxInput[3].addEventListener('click', () => {
    if (teaCardSort.textContent !== "Red tea") {
      
      teaCardInfo.classList.toggle('hidden')
      
    }
  })
  filterCategoryCheckboxInput[4].addEventListener('click', () => {
    if (teaCardProvince.textContent !== "Taiwan") {
 
      teaCardInfo.classList.toggle('hidden')
 
    }   

  })

  filterCategoryCheckboxInput[5].addEventListener('click', () => {
    if (teaCardProvince.textContent !== "Huang Shan") {
  
      teaCardInfo.classList.toggle('hidden')
     
    }
  })
  filterCategoryCheckboxInput[6].addEventListener('click', () => {
    if (teaCardProvince.textContent !== "Myung Ku") {
      
      teaCardInfo.classList.toggle('hidden')
      
    }
  })
  filterCategoryCheckboxInput[7].addEventListener('click', () => {
    if (teaCardProvince.textContent !== "Hong Pao") {
      
      teaCardInfo.classList.toggle('hidden')
      
    }
  })

  teaFiltersRulerList.addEventListener('click', () => {  
      teaCardInfo.classList.add('card-list');
      teaFiltersRulerList.classList.add('active');
      teaFiltersRulerTiles.classList.remove('active');
  })

  teaFiltersRulerTiles.addEventListener('click', () => {  
    teaCardInfo.classList.remove('card-list');
    teaFiltersRulerList.classList.remove('active');
    teaFiltersRulerTiles.classList.add('active');
})

  const teaCard = teaCardInfo.appendChild(document.createElement(`img`)) as HTMLImageElement;
  teaCard.classList.add('tea-card');
  teaCard.src =  listBuys[i].image1;
  teaCard.alt = listBuys[i].name;

  const teaCardName = teaCardInfo.appendChild(document.createElement(`p`)) as HTMLParagraphElement;
  teaCardName.classList.add('tea-card-name');
  teaCardName.textContent = listBuys[i].name;
  
  const teaCardSort = teaCardInfo.appendChild(document.createElement(`p`)) as HTMLParagraphElement;
  teaCardSort.classList.add('tea-card-sort');
  teaCardSort.textContent = listBuys[i].sort;

  const teaCardProvince = teaCardInfo.appendChild(document.createElement(`p`)) as HTMLParagraphElement;
  teaCardProvince.classList.add('tea-card-province');
  teaCardProvince.textContent = listBuys[i].province;
  
  const teaCardDescription = teaCardInfo.appendChild(document.createElement(`p`)) as HTMLParagraphElement;
  teaCardDescription.classList.add('tea-card-description');
  teaCardDescription.textContent = listBuys[i].description;
  
  const teaCardAmount = teaCardInfo.appendChild(document.createElement(`span`)) as HTMLSpanElement;
  teaCardAmount.classList.add('tea-card-description');
  teaCardAmount.textContent = `In stock: ${listBuys[i].amount} gramm`;
  
  const teaCardPrice = teaCardInfo.appendChild(document.createElement(`p`)) as HTMLParagraphElement;
  teaCardPrice.classList.add('tea-card-description');
  teaCardPrice.textContent = `Price: ${listBuys[i].price} $ per gramm`;
  
  const buttonsAmount = teaCardInfo.appendChild(document.createElement(`div`)) as HTMLDivElement;
  buttonsAmount.classList.add('buttons-amount');
  
  const addButton = buttonsAmount.appendChild(document.createElement(`button`)) as HTMLButtonElement;
  addButton.classList.add('add-button');
  addButton.textContent = `Add`;
  
  const deleteButton = buttonsAmount.appendChild(document.createElement(`button`)) as HTMLButtonElement;
  deleteButton.classList.add('delete-button');
  deleteButton.textContent = `Delete`;
  
  const amount = buttonsAmount.appendChild(document.createElement(`span`)) as HTMLSpanElement;
  amount.classList.add('amount');
  const price = buttonsAmount.appendChild(document.createElement(`span`)) as HTMLSpanElement;
  price.classList.add('price');
  let amountNumber = 0 as number; 
  let priceGramm = 0 as number;
  amount.textContent = `${amountNumber} gramm`;
  price.textContent = `${priceGramm} $`;
  
  addButton.addEventListener('click', () => {
    amountNumber = amountNumber + 10;
    priceGramm = amountNumber * listBuys[i].price;
    amount.textContent= `${amountNumber} gramm`;
    price.textContent = `${priceGramm} $`;

    if (amountNumber > listBuys[i].amount) {
      amountNumber = listBuys[i].amount;
      priceGramm = amountNumber * listBuys[i].price;
      amount.textContent= `${amountNumber} gramm`;
      price.textContent = `${priceGramm} $`;
    }
  })
  
  deleteButton.addEventListener('click', () => {
    amountNumber= amountNumber - 10;
    priceGramm = amountNumber * listBuys[i].price;
    amount.textContent= `${amountNumber} gramm`;
    price.textContent = `${priceGramm} $`;
    if (amountNumber < 0) {
      amountNumber = 0;
      priceGramm = 0;
      amount.textContent= `${amountNumber} gramm`;
      price.textContent = `${priceGramm} $`;
    }
  })
 
  teaCardName.addEventListener('click', () => { 
    window.open('./item.html')
    

   })
}


