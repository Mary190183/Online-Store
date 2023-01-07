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

//  const pricesHigh = listBuys.sort((el1.price, el2.price) => el2.price > el1.price);
 
//  const pricesLow = listBuys.sort((el) => el.price).reverse();

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




for (let i = 0; i < listBuys.length ; i++) {


  const teaCardInfo = containerTeaCards.appendChild(document.createElement(`div`)) as HTMLDivElement;
  teaCardInfo.classList.add('tea-card-info');
let k = 0 as number;

  filterCategoryCheckboxInput[0].addEventListener('click', () => {
    k = k + 1; 
    if (k === 1 && teaCardSort.textContent !== "Green tea") {
      teaCardInfo.classList.toggle('hidden-1');
    }
    if (k > 1 && teaCardSort.textContent === "Green tea") { 
      teaCardInfo.classList.toggle('hidden-1'); 
    } 
    getParamsUrl('sort', 'green');
  })
    filterCategoryCheckboxInput[1].addEventListener('click', () => {
      k = k + 1;
    if (k === 1 && teaCardSort.textContent !== "Oolong") {
      teaCardInfo.classList.toggle('hidden-1');
    }
    if (k > 1 && teaCardSort.textContent === "Oolong") {
      teaCardInfo.classList.toggle('hidden-1');
    }
    getParamsUrl('sort', 'oolong');
  })
    filterCategoryCheckboxInput[2].addEventListener('click', () => {
      k = k + 1
    if (k === 1 && teaCardSort.textContent !== "Puer") {
      teaCardInfo.classList.toggle('hidden-1');
    }
    if (k > 1 && teaCardSort.textContent === "Puer") {
      teaCardInfo.classList.toggle('hidden-1');
    }
    getParamsUrl('sort', 'puer');
  })
  filterCategoryCheckboxInput[3].addEventListener('click', () => {
    k = k + 1;
    if (k === 1 && teaCardSort.textContent !== "Red tea") {
      teaCardInfo.classList.toggle('hidden-1');
   
    }  

    if (k > 1 && teaCardSort.textContent === "Red tea") { 
      teaCardInfo.classList.toggle('hidden-1'); 
    } 
    getParamsUrl('sort', 'red');
  })

  let m = 0 as number;
  filterCategoryCheckboxInput[4].addEventListener('click', () => {
    
     m = m + 1;
      if (m === 1 && teaCardProvince.textContent !== "Taiwan") {
      teaCardInfo.classList.toggle('hidden-2');
    }
    if (m > 1 && teaCardProvince.textContent == "Taiwan") { 
      teaCardInfo.classList.toggle('hidden-2'); 
     
    } 
    getParamsUrl('province', 'taiwan');
  })
      filterCategoryCheckboxInput[5].addEventListener('click', () => {
        m = m + 1;
      if (m === 1 && teaCardProvince.textContent !== "Huang Shan") {
        teaCardInfo.classList.toggle('hidden-2');
      }
      if (m > 1 && teaCardProvince.textContent === "Huang Shan") {
        teaCardInfo.classList.toggle('hidden-2');
      }
      getParamsUrl('province', 'huangshan');
    })
      filterCategoryCheckboxInput[6].addEventListener('click', () => {
        m = m + 1
      if (m === 1 && teaCardProvince.textContent !== "Myung Ku") {
        teaCardInfo.classList.toggle('hidden-2');
      }
      if (m > 1 && teaCardProvince.textContent === "Myung Ku") {
        teaCardInfo.classList.toggle('hidden-2');
      }
      getParamsUrl('province', 'myungku');
    })
    filterCategoryCheckboxInput[7].addEventListener('click', () => {
      m = m + 1;
      if (m === 1 && teaCardProvince.textContent !== "Hong Pao") {
        teaCardInfo.classList.toggle('hidden-2');
      }  
  
      if (m > 1 && teaCardProvince.textContent === "Hong Pao") { 
        teaCardInfo.classList.toggle('hidden-2'); 
      } 
      getParamsUrl('province', 'hongpao');
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

  const teaCardContainer = teaCardInfo.appendChild(document.createElement(`div`)) as HTMLDivElement;
  teaCardContainer.classList.add('tea-card-container');

  const teaCardName = teaCardContainer.appendChild(document.createElement(`p`)) as HTMLParagraphElement;
  teaCardName.classList.add('tea-card-name');
  

  const teaCardProvince = teaCardContainer.appendChild(document.createElement(`p`)) as HTMLParagraphElement;
  teaCardProvince.classList.add('tea-card-province');
 

  const teaCardSort = teaCardContainer.appendChild(document.createElement(`p`)) as HTMLParagraphElement;
  teaCardSort.classList.add('tea-card-sort');

  const teaCardDescription = teaCardContainer.appendChild(document.createElement(`p`)) as HTMLParagraphElement;
  teaCardDescription.classList.add('tea-card-description');

  
  const teaCardAmount = teaCardContainer.appendChild(document.createElement(`span`)) as HTMLSpanElement;
  teaCardAmount.classList.add('tea-card-amount');
 
  const teaCardPrice = teaCardContainer.appendChild(document.createElement(`span`)) as HTMLSpanElement;
  teaCardPrice.classList.add('tea-card-price');

  const cartInfo = teaCardInfo.appendChild(document.createElement(`div`)) as HTMLDivElement;
  cartInfo.classList.add('cart-info');

  const buttonsAmount = cartInfo .appendChild(document.createElement(`div`)) as HTMLDivElement;
  buttonsAmount.classList.add('buttons-amount');

  const addButton = buttonsAmount.appendChild(document.createElement(`button`)) as HTMLButtonElement;
  addButton.classList.add('add-button');
  addButton.textContent = `Add`;
  
  const deleteButton = buttonsAmount.appendChild(document.createElement(`button`)) as HTMLButtonElement;
  deleteButton.classList.add('delete-button');
  deleteButton.textContent = `Delete`;

  const amountPrice = cartInfo.appendChild(document.createElement(`span`)) as HTMLSpanElement;
  amountPrice.classList.add('amount-price');

  const amount = amountPrice.appendChild(document.createElement(`span`)) as HTMLSpanElement;
  amount.classList.add('amount');

  const price = amountPrice.appendChild(document.createElement(`span`)) as HTMLSpanElement;
  price.classList.add('price');

  let amountNumber = 0 as number; 
  let priceGramm = 0 as number;
  amount.textContent = `${amountNumber} piece`;
  price.textContent = `${priceGramm} $`;
  let j = 0;
  let finish = 0;

  addButton.addEventListener('click', () => {
    j =  j + 1;
    amountNumber = amountNumber + 1;
    priceGramm = amountNumber * listBuys[i].price;
    amount.textContent= `${amountNumber} piece`;
    price.textContent = `${priceGramm} $`;
    teaCardAmount.textContent = `In stock: ${listBuys[i].stock - j} piece`;
    if (amountNumber > listBuys[i].stock) {
      j = 0;
      finish = 1;
      listBuys[i].stock = listBuys[i].stock + 0;
      amountNumber = listBuys[i].stock;
      priceGramm = amountNumber * listBuys[i].price;
      amount.textContent= `${amountNumber} piece`;
      price.textContent = `${priceGramm} $`;
      teaCardAmount.textContent = `In stock: ${0} piece`;
    }
    
  })
  
  deleteButton.addEventListener('click', () => {
    j = j - 1
    amountNumber = amountNumber - 1;
    priceGramm = amountNumber * listBuys[i].price;
    amount.textContent= `${amountNumber} piece`;
    price.textContent = `${priceGramm} $`;
    teaCardAmount.textContent = `In stock: ${listBuys[i].stock - j} piece`;
    if (amountNumber < 0) {
      j = 0;
      finish = 0;
      amountNumber = 0;
      priceGramm = 0;
      amount.textContent= `${amountNumber} piece`;
      price.textContent = `${priceGramm} $`;
      teaCardAmount.textContent = `In stock: ${listBuys[i].stock} piece`;
    }
    if (finish >= 1) {
      teaCardAmount.textContent = `In stock: ${- j} piece`;
    }
  })
 
  teaCardName.addEventListener('click', () => {
    window.open('./item.html')
   })
   
   teaFiltersRulerPriceLow.addEventListener('click', () => { 

    listBuys.sort((a, b) => b.price - a.price);

    teaFiltersRulerPriceLow.classList.add('active');
    teaFiltersRulerPriceHigh.classList.remove('active');

    teaCard.src =  listBuys[i].image1;
    teaCard.alt = listBuys[i].name;
    teaCardName.textContent = listBuys[i].name;
    teaCardSort.textContent = listBuys[i].sort;
    teaCardProvince.textContent = listBuys[i].province;
    teaCardDescription.textContent = listBuys[i].description;
    teaCardAmount.textContent = `In stock: ${listBuys[i].stock} piece`;
    teaCardPrice.textContent = `Price: ${listBuys[i].price} $`;

    getParamsUrl('pricehigh', 'true');
    
    })
    teaFiltersRulerPriceHigh.addEventListener('click', () => { 

      listBuys.sort((a, b) => a.price - b.price);

      teaFiltersRulerPriceHigh.classList.add('active');
      teaFiltersRulerPriceLow.classList.remove('active');
// set
localStorage.setItem("teaCard", "src");
// get
localStorage.getItem("teaCard");
      

      teaCard.src =  listBuys[i].image1;
      teaCard.alt = listBuys[i].name;
      teaCardName.textContent = listBuys[i].name;
      teaCardSort.textContent = listBuys[i].sort;
      teaCardProvince.textContent = listBuys[i].province;
      teaCardDescription.textContent = listBuys[i].description;
      teaCardAmount.textContent = `In stock: ${listBuys[i].stock} piece`;
      teaCardPrice.textContent = `Price: ${listBuys[i].price} $`;

      getParamsUrl('pricehigh', 'false');

      })


      teaCard.src =  listBuys[i].image1;
      teaCard.alt = listBuys[i].name;
      teaCardName.textContent = listBuys[i].name;
      teaCardProvince.textContent = listBuys[i].province;
      teaCardSort.textContent = listBuys[i].sort;
      teaCardDescription.textContent = listBuys[i].description;
      teaCardAmount.textContent = `In stock: ${listBuys[i].stock} piece`;
      teaCardPrice.textContent = `Price: ${listBuys[i].price} $`;
}

function getParamsUrl(x: string, y: string) {
  const url = new URL(window.location.href);
  url.searchParams.set(x, y);
  window.history.pushState({ path: url.href }, '', url.href);
}



