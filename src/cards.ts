import listBuys from "./list-buys";
import main from "./filters";
import {totalPrice} from "./header";
import {amountCart} from "./header";
import {filterCategoryCheckboxInput} from "./filters"
import {inputNavLink2} from "./header";
import {navLink2} from "./header";
import { AutomaticPrefetchPlugin } from "webpack";
import {buttonResert} from './filters'
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

const arrAmount: number[] = [];
const arrPrice: number[] = [];
let newListBuys = listBuys.map(a => Object.assign({}, a)) as Product[];

// newListBuys = newListBuys.map(obj => ({ ...obj, rating: 0 }))



for (let i = 0; i < newListBuys.length ; i++) {
 
  getParamsUrl('sort', 'green');
  const teaCardInfo = containerTeaCards.appendChild(document.createElement(`div`)) as HTMLDivElement;
  // teaCardInfo.id = String(listBuys[i].id)
  teaCardInfo.classList.add('tea-card-info');

  let k = 0 as number;
  let m = 0 as number;

  filterCategoryCheckboxInput[0].addEventListener('click', () => {
    
    
    k = k + 1; 
 
    if (
      k === 1 && 
      teaCardSort.textContent !== "Green tea") {
    teaCardInfo.classList.toggle('hidden-1');

    }
    if (
      k > 1 && 
      teaCardSort.textContent === "Green tea") {
      teaCardInfo.classList.toggle('hidden-1');
      
      
    } 
    getParamsUrl('sort', 'green');

    if (
      filterCategoryCheckboxInput[0].checked === false &&
      filterCategoryCheckboxInput[1].checked === false &&
      filterCategoryCheckboxInput[2].checked === false &&
      filterCategoryCheckboxInput[3].checked === false) {
        k = 0;
        getParamsUrl('sort', 'none');
        teaCardInfo.classList.remove('hidden-1');
      }
    
    
     if (
        filterCategoryCheckboxInput[4].checked === false &&
        filterCategoryCheckboxInput[5].checked === false &&
        filterCategoryCheckboxInput[6].checked === false &&
        filterCategoryCheckboxInput[7].checked === false) {
          m = 0;
          getParamsUrl('province', 'none');
          teaCardInfo.classList.remove('hidden-2'); 
      }   
  })
     filterCategoryCheckboxInput[1].addEventListener('click', () => {
      k = k + 1;
  // if (filterCategoryCheckboxInput[1].checked !== false) {
    
  //   newListBuys = newListBuys.filter((e) => e.sort ==="Oolong") 
  //   console.log(newListBuys)
  // } else { newListBuys = listBuys
  //   console.log(newListBuys)}
    if (
      k === 1 && 
      teaCardSort.textContent !== "Oolong") {
      teaCardInfo.classList.toggle('hidden-1');
    }
    if (k > 1 && teaCardSort.textContent === "Oolong") {
      teaCardInfo.classList.toggle('hidden-1');
    }
    getParamsUrl('sort', 'oolong');
    
    if (
      filterCategoryCheckboxInput[0].checked === false &&
    filterCategoryCheckboxInput[1].checked === false &&
    filterCategoryCheckboxInput[2].checked === false &&
    filterCategoryCheckboxInput[3].checked === false) {
      k = 0;
      teaCardInfo.classList.remove('hidden-1');
      getParamsUrl('sort', 'none');
    }
     if (filterCategoryCheckboxInput[4].checked === false &&
      filterCategoryCheckboxInput[5].checked === false &&
      filterCategoryCheckboxInput[6].checked === false &&
      filterCategoryCheckboxInput[7].checked === false) {
        m = 0;
       
        
        teaCardInfo.classList.remove('hidden-2');
        
        getParamsUrl('province', 'none');
      }
  
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
    if (
      filterCategoryCheckboxInput[0].checked === false &&
    filterCategoryCheckboxInput[1].checked === false &&
    filterCategoryCheckboxInput[2].checked === false &&
    filterCategoryCheckboxInput[3].checked === false) {
      k = 0;
      teaCardInfo.classList.remove('hidden-1');
      getParamsUrl('sort', 'none');
    }

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
    if (
      filterCategoryCheckboxInput[0].checked === false &&
    filterCategoryCheckboxInput[1].checked === false &&
    filterCategoryCheckboxInput[2].checked === false &&
    filterCategoryCheckboxInput[3].checked === false) {
      k = 0;
      teaCardInfo.classList.remove('hidden-1');
      getParamsUrl('sort', 'none');
    }
     if (filterCategoryCheckboxInput[4].checked === false &&
      filterCategoryCheckboxInput[5].checked === false &&
      filterCategoryCheckboxInput[6].checked === false &&
      filterCategoryCheckboxInput[7].checked === false) {
        m = 0;
       
        
        teaCardInfo.classList.remove('hidden-2');
        
        getParamsUrl('province', 'none');
      }
  })


  
  filterCategoryCheckboxInput[4].addEventListener('click', () => {
    
     m = m + 1;
      if (m === 1 && teaCardProvince.textContent !== "Taiwan") {
      teaCardInfo.classList.toggle('hidden-2');
    }
    if (m > 1 && teaCardProvince.textContent == "Taiwan") { 
      teaCardInfo.classList.toggle('hidden-2'); 
     
    } 
    getParamsUrl('province', 'taiwan');
    if (
      filterCategoryCheckboxInput[0].checked === false &&
    filterCategoryCheckboxInput[1].checked === false &&
    filterCategoryCheckboxInput[2].checked === false &&
    filterCategoryCheckboxInput[3].checked === false) {
      k = 0;
      teaCardInfo.classList.remove('hidden-1');
      getParamsUrl('sort', 'none');
    }
     if (filterCategoryCheckboxInput[4].checked === false &&
      filterCategoryCheckboxInput[5].checked === false &&
      filterCategoryCheckboxInput[6].checked === false &&
      filterCategoryCheckboxInput[7].checked === false) {
        m = 0;
       
        
        teaCardInfo.classList.remove('hidden-2');
        
        getParamsUrl('province', 'none');
      }
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
      if (
        filterCategoryCheckboxInput[0].checked === false &&
      filterCategoryCheckboxInput[1].checked === false &&
      filterCategoryCheckboxInput[2].checked === false &&
      filterCategoryCheckboxInput[3].checked === false) {
        k = 0;
        teaCardInfo.classList.remove('hidden-1');
        getParamsUrl('sort', 'none');
      }
       if (filterCategoryCheckboxInput[4].checked === false &&
        filterCategoryCheckboxInput[5].checked === false &&
        filterCategoryCheckboxInput[6].checked === false &&
        filterCategoryCheckboxInput[7].checked === false) {
          m = 0;
         
          
          teaCardInfo.classList.remove('hidden-2');
          
          getParamsUrl('province', 'none');
        }
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
      if (
        filterCategoryCheckboxInput[0].checked === false &&
      filterCategoryCheckboxInput[1].checked === false &&
      filterCategoryCheckboxInput[2].checked === false &&
      filterCategoryCheckboxInput[3].checked === false) {
        k = 0;
        teaCardInfo.classList.remove('hidden-1');
        getParamsUrl('sort', 'none');
      }
       if (filterCategoryCheckboxInput[4].checked === false &&
        filterCategoryCheckboxInput[5].checked === false &&
        filterCategoryCheckboxInput[6].checked === false &&
        filterCategoryCheckboxInput[7].checked === false) {
          m = 0;
         
          
          teaCardInfo.classList.remove('hidden-2');
          
          getParamsUrl('province', 'none');
        }
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
      if (
        filterCategoryCheckboxInput[0].checked === false &&
      filterCategoryCheckboxInput[1].checked === false &&
      filterCategoryCheckboxInput[2].checked === false &&
      filterCategoryCheckboxInput[3].checked === false) {
        k = 0;
        teaCardInfo.classList.remove('hidden-1');
        getParamsUrl('sort', 'none');
      }
       if (filterCategoryCheckboxInput[4].checked === false &&
        filterCategoryCheckboxInput[5].checked === false &&
        filterCategoryCheckboxInput[6].checked === false &&
        filterCategoryCheckboxInput[7].checked === false) {
          m = 0;
         
          
          teaCardInfo.classList.remove('hidden-2');
          
          getParamsUrl('province', 'none');
        }
    })

 

  teaFiltersRulerList.addEventListener('click', () => {  
      teaCardInfo.classList.add('card-list');
      teaFiltersRulerList.classList.add('active');
      teaFiltersRulerTiles.classList.remove('active');
      getParamsUrl('list', 'true');
  })

  teaFiltersRulerTiles.addEventListener('click', () => {  
    teaCardInfo.classList.remove('card-list');
    teaFiltersRulerList.classList.remove('active');
    teaFiltersRulerTiles.classList.add('active');
    getParamsUrl('list', 'false');
})

inputNavLink2.oninput = function() {
  if(inputNavLink2.textContent !== "Green tea") {
    teaCardInfo.classList.add('hidden-4')
  } else teaCardInfo.classList.remove('hidden-4')
}
  const teaCard = teaCardInfo.appendChild(document.createElement(`img`)) as HTMLImageElement;
  teaCard.classList.add('tea-card');

  const teaCardContainer = teaCardInfo.appendChild(document.createElement(`div`)) as HTMLDivElement;
  teaCardContainer.classList.add('tea-card-container');

  const teaCardName = teaCardContainer.appendChild(document.createElement(`button`)) as HTMLButtonElement;
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
 
  totalPrice.textContent = `Total price: ${0} $`;
  amountCart.textContent = `${0}`;

  let amountItem = 0 as number;
  let priceItem = 0 as number;
  let products: CartItem[] = [];
  let a = false;
  let product: CartItem;

  addButton.addEventListener('click', () => {
    j =  j + 1;
    
    amountNumber = amountNumber + 1;
    priceGramm = amountNumber * newListBuys[i].price;

    product = {
      id: Date.now(),
       productId: listBuys[i].id,
       amount: amountNumber,
     };
 
     if (localStorage.getItem("products") !== null) {
      products = JSON.parse(localStorage.getItem("products") as string);
     } else {
      products = [];
     }
    
    if(products.length === 0) {
      products.push(product);
    } else {
      products.forEach(item => {
      if(item.productId == listBuys[i].id) {
        item.amount = amountNumber;
         a = true;
      } 
    }) 
    if(!a) {
      products.push(product);
    }
   }
    localStorage.setItem("products", JSON.stringify(products));

    amount.textContent= `${amountNumber} piece`;
    price.textContent = `${priceGramm} $`;
    teaCardAmount.textContent = `In stock: ${newListBuys[i].stock - j} piece`;

    amountItem = 1;
    priceItem = newListBuys[i].price;
  if (amountNumber < newListBuys[i].stock) {
    arrAmount.push(amountItem);
    arrPrice.push(priceItem)
  }
   

    
    if (amountNumber > newListBuys[i].stock) {
      j = 0;
      finish = 1;

      newListBuys[i].stock = newListBuys[i].stock + 0;
      amountNumber = newListBuys[i].stock;
      priceGramm = amountNumber * newListBuys[i].price;
      amount.textContent= `${amountNumber} piece`;
      price.textContent = `${priceGramm} $`;
      teaCardAmount.textContent = `In stock: ${0} piece`;      

    }
    const resultAmount = arrAmount.reduce((partialSum, a) => partialSum + a, 0);
    const resultPrice = arrPrice.reduce((partialSum, a) => partialSum + a, 0);
  
    totalPrice.textContent = `Total price: ${resultPrice} $`;
    amountCart.textContent = `${resultAmount}`;
  })

  
  
  

  deleteButton.addEventListener('click', () => {
    j = j - 1;

    const index = arrPrice.indexOf(newListBuys[i].price);
    if (index >= 0) {
      arrPrice.splice( index, 1 );
      arrAmount.splice( index, 1 );
    }
     
    amountNumber = amountNumber - 1;
    priceGramm = amountNumber * newListBuys[i].price;
    amount.textContent= `${amountNumber} piece`;
    price.textContent = `${priceGramm}`;

   
    
   
    
    // amountCart.textContent = `${result}`;
    if (amountNumber < 0) {
      j = 0;
      finish = 0;
      amountNumber = 0;
      priceGramm = 0;
      amount.textContent= `${amountNumber} piece`;
      price.textContent = `${priceGramm} $`;
      teaCardAmount.textContent = `In stock: ${newListBuys[i].stock} piece`;
 
    }
    if (finish >= 1) {
      teaCardAmount.textContent = `In stock: ${- j} piece`;
    }
    const resultAmount = arrAmount.reduce((partialSum, a) => partialSum + a, 0);
    const resultPrice = arrPrice.reduce((partialSum, a) => partialSum + a, 0);
  
    totalPrice.textContent = `Total price: ${resultPrice} $`;
    amountCart.textContent = `${resultAmount}`;
  })
  let Rating = 0 as number;
  teaCardName.addEventListener('click', () => {
  newListBuys = newListBuys.map(obj => ({ ...obj, rating: 0 as number }))
  
  Rating++
    const setLocalStorage = () => {
      localStorage.setItem('rating', JSON.stringify(Rating));
    };
    
    
    const getLocalStorage = () => {
      if (localStorage.getItem('rating')) {
        Rating = Number(localStorage.getItem('rating'));
      }
    };
   
  
    window.addEventListener('beforeunload', setLocalStorage);
    window.addEventListener('load', getLocalStorage);

    newListBuys[i].rating = Rating;
    console.log(newListBuys)
    window.open('./item.html')
   
   })


  // let Rating = 0 as number;

   teaFiltersRulerRatingLow.addEventListener('click', () => { 
    
    newListBuys.sort((a, b) => b.rating - a.rating);

    teaFiltersRulerRatingLow.classList.add('active');
    teaFiltersRulerRatingHigh.classList.remove('active');

    teaCard.src =  newListBuys[i].image1;
    teaCard.alt = newListBuys[i].name;
    teaCardName.textContent = newListBuys[i].name;
    teaCardSort.textContent = newListBuys[i].sort;
    teaCardProvince.textContent = newListBuys[i].province;
    teaCardDescription.textContent = newListBuys[i].description;
    teaCardAmount.textContent = `In stock: ${newListBuys[i].stock} piece`;
    teaCardPrice.textContent = `Price: ${newListBuys[i].price} $`;

    getParamsUrl('ratinghigh', 'true');
    
    })
    teaFiltersRulerRatingHigh.addEventListener('click', () => { 



      newListBuys.sort((a, b) => a.rating - b.rating);

      teaFiltersRulerRatingHigh.classList.add('active');
      teaFiltersRulerRatingLow.classList.remove('active');
  
      

      teaCard.src =  newListBuys[i].image1;
      teaCard.alt = newListBuys[i].name;
      teaCardName.textContent = newListBuys[i].name;
      teaCardSort.textContent = newListBuys[i].sort;
      teaCardProvince.textContent = newListBuys[i].province;
      teaCardDescription.textContent = newListBuys[i].description;
      teaCardAmount.textContent = `In stock: ${newListBuys[i].stock} piece`;
      teaCardPrice.textContent = `Price: ${newListBuys[i].price} $`;

      getParamsUrl('ratinghigh', 'false');

      })

   teaFiltersRulerPriceLow.addEventListener('click', () => { 
    
    newListBuys.sort((a, b) => b.price - a.price);

    teaFiltersRulerPriceLow.classList.add('active');
    teaFiltersRulerPriceHigh.classList.remove('active');

    teaCard.src =  newListBuys[i].image1;
    teaCard.alt = newListBuys[i].name;
    teaCardName.textContent = newListBuys[i].name;
    teaCardSort.textContent = newListBuys[i].sort;
    teaCardProvince.textContent = newListBuys[i].province;
    teaCardDescription.textContent = newListBuys[i].description;
    teaCardAmount.textContent = `In stock: ${newListBuys[i].stock} piece`;
    teaCardPrice.textContent = `Price: ${newListBuys[i].price} $`;

    getParamsUrl('pricehigh', 'true');
    
    })
    teaFiltersRulerPriceHigh.addEventListener('click', () => { 



      newListBuys.sort((a, b) => a.price - b.price);

      teaFiltersRulerPriceHigh.classList.add('active');
      teaFiltersRulerPriceLow.classList.remove('active');
  
      

      teaCard.src =  newListBuys[i].image1;
      teaCard.alt = newListBuys[i].name;
      teaCardName.textContent = newListBuys[i].name;
      teaCardSort.textContent = newListBuys[i].sort;
      teaCardProvince.textContent = newListBuys[i].province;
      teaCardDescription.textContent = newListBuys[i].description;
      teaCardAmount.textContent = `In stock: ${newListBuys[i].stock} piece`;
      teaCardPrice.textContent = `Price: ${newListBuys[i].price} $`;

      getParamsUrl('pricehigh', 'false');

      })

      
      teaCard.src =  newListBuys[i].image1;
      teaCard.alt = newListBuys[i].name;
      teaCardName.textContent = newListBuys[i].name;
      teaCardProvince.textContent = newListBuys[i].province;
      teaCardSort.textContent = newListBuys[i].sort;
      teaCardDescription.textContent = newListBuys[i].description;
      teaCardAmount.textContent = `In stock: ${newListBuys[i].stock} piece`;
      teaCardPrice.textContent = `Price: ${newListBuys[i].price} $`;

      
 
      
      const inputMax = document.querySelector('#max') as HTMLInputElement;
      inputMax.addEventListener('click', () => { 
          if(Number(inputMax.value) < listBuys[i].price) {
             teaCardInfo.classList.add('hidden-max')
          }   else teaCardInfo.classList.remove('hidden-max')
          getParamsUrl('pricemax', inputMax.value);
      })
      
      const inputMin = document.querySelector('#min') as HTMLInputElement;
      inputMin.addEventListener('click', () => { 
          if(Number(inputMin.value) > newListBuys[i].price) {
             teaCardInfo.classList.add('hidden-min')
          }   else teaCardInfo.classList.remove('hidden-min')
          getParamsUrl('pricemin', inputMin.value);
      })
      
      const inputMaxStock = document.querySelector('#max-stock') as HTMLInputElement;
      inputMaxStock.addEventListener('click', () => { 
          if(Number(inputMaxStock.value) < newListBuys[i].stock) {
             teaCardInfo.classList.add('hidden-max-stock')
          }   else teaCardInfo.classList.remove('hidden-max-stock')
          getParamsUrl('stockmax', inputMaxStock.value);

   
      })
      
      const inputMinStock = document.querySelector('#min-stock') as HTMLInputElement;
      inputMinStock.addEventListener('click', () => { 
          if(Number(inputMinStock.value) > newListBuys[i].stock) {
             teaCardInfo.classList.add('hidden-min-stock')
          }   else teaCardInfo.classList.remove('hidden-min-stock')
          getParamsUrl('stockmin', inputMinStock.value);



        
          
          
      })   

      buttonResert.addEventListener('click', () => { 
        m = 0; k = 0;
        buttonResert.classList.add('resert-active')
        teaCardInfo.classList.remove('hidden-2');
        teaCardInfo.classList.remove('hidden-1');
        filterCategoryCheckboxInput[0].checked = false;
        filterCategoryCheckboxInput[1].checked = false;
        filterCategoryCheckboxInput[2].checked = false;
        filterCategoryCheckboxInput[3].checked = false;
        filterCategoryCheckboxInput[4].checked = false;
        filterCategoryCheckboxInput[5].checked = false;
        filterCategoryCheckboxInput[6].checked = false;
        filterCategoryCheckboxInput[7].checked = false;
        inputMinStock.value = inputMinStock.min;
        inputMaxStock.value = inputMinStock.max;
        inputMin.value = inputMin.min;
        inputMax.value = inputMin.max;
        teaFiltersRulerPriceHigh.classList.remove('active');
        teaFiltersRulerPriceLow.classList.remove('active');
        teaFiltersRulerList.classList.remove('active');
        teaFiltersRulerTiles.classList.remove('active');
        teaCardInfo.classList.remove('card-list');
      
        listBuys.sort((a, b) => a.price - b.price);   
  
        teaCard.src =  newListBuys[i].image1;
        teaCard.alt = newListBuys[i].name;
        teaCardName.textContent= newListBuys[i].name;
        teaCardSort.textContent = newListBuys[i].sort;
        teaCardProvince.textContent = newListBuys[i].province;
        teaCardDescription.textContent = newListBuys[i].description;
        teaCardAmount.textContent = `In stock: ${newListBuys[i].stock} piece`;
        teaCardPrice.textContent = `Price: ${newListBuys[i].price} $`;
  
        window.history.pushState("object or string", "Title", "/"+window.location.href.substring(window.location.href.lastIndexOf('/') + 1).split("?")[0]);

      })  
 
    }
function getParamsUrl(x: string, y: string) {
  const url = new URL(window.location.href);
  url.searchParams.set(x, y);
  window.history.pushState({ path: url.href }, '', url.href);
}


  