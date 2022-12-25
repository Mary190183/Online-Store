import "./header.css";
import "./header.ts";

import "./index.css";

import "./footer.css";
import "./footer.ts";

import listBuys from "./list-buys";

const body = document.querySelector('body') as HTMLBodyElement;

const main = body.appendChild(document.createElement(`main`)) as HTMLElement;
const containerFiltres = main.appendChild(document.createElement(`div`)) as HTMLDivElement;
containerFiltres.classList.add('container-filtres');

const filterCategory = containerFiltres.appendChild(document.createElement(`div`)) as HTMLDivElement;
filterCategory.classList.add('filter-category');
const filterCategoryh2 = filterCategory.appendChild(document.createElement(`h2`)) as HTMLHeadingElement;
filterCategoryh2.classList.add('filter-h2');
filterCategoryh2.textContent = 'Sort';

for (let i = 0; i < 4; i ++) {

const filterCategoryForm = filterCategory.appendChild(document.createElement(`form`)) as HTMLFormElement;
filterCategoryForm.classList.add('filter-form');
const filterSortTeaInput = filterCategoryForm.appendChild(document.createElement(`input`)) as HTMLInputElement;
filterSortTeaInput.classList.add('filter-input');
filterSortTeaInput.type = 'checkbox'
const filterSortTealabel = filterCategoryForm.appendChild(document.createElement(`label`)) as HTMLLabelElement;
filterSortTealabel.classList.add('filter-label');

}
const filterProvinceTea = containerFiltres.appendChild(document.createElement(`div`)) as HTMLDivElement;
filterProvinceTea.classList.add('filter-privince-tea');
const filterProvinceTeah2 = filterProvinceTea.appendChild(document.createElement(`h2`)) as HTMLHeadingElement;
filterProvinceTeah2.classList.add('filter-h2');
filterProvinceTeah2.textContent = 'Province';
for (let i = 4; i < 8; i ++) {
const filterProvinceTeaForm = filterProvinceTea.appendChild(document.createElement(`form`)) as HTMLFormElement;
filterProvinceTeaForm.classList.add('filter-form');
const filterProvinceTeaInput = filterProvinceTeaForm.appendChild(document.createElement(`input`)) as HTMLInputElement;
filterProvinceTeaInput.classList.add('filter-input');
filterProvinceTeaInput.type = 'checkbox'
const filterProvinceTealabel = filterProvinceTeaForm.appendChild(document.createElement(`label`)) as HTMLLabelElement;
filterProvinceTealabel.classList.add('filter-label');
}


const filterCategoryCheckboxInput = document.querySelectorAll('.filter-input') as NodeListOf<HTMLInputElement>;
const filterCategoryCheckboxLabel= document.querySelectorAll('.filter-label') as NodeListOf<HTMLLabelElement>;

filterCategoryCheckboxInput[0].id = 'green-tea'
filterCategoryCheckboxLabel[0].setAttribute('for', `green-tea`);
filterCategoryCheckboxLabel[0].textContent = 'Green tea';

filterCategoryCheckboxInput[1].id = 'Oolong'
filterCategoryCheckboxLabel[1].setAttribute('for', `Oolong`);
filterCategoryCheckboxLabel[1].textContent = 'Oolong';

filterCategoryCheckboxInput[2].id = 'Puer'
filterCategoryCheckboxLabel[2].setAttribute('for', `Puer`);
filterCategoryCheckboxLabel[2].textContent = 'Puer';

filterCategoryCheckboxInput[3].id = 'red-tea'
filterCategoryCheckboxLabel[3].setAttribute('for', `red-tea`);
filterCategoryCheckboxLabel[3].textContent = 'Red tea';

filterCategoryCheckboxInput[4].id = 'taiwan'
filterCategoryCheckboxLabel[4].setAttribute('for', `taiwan`);
filterCategoryCheckboxLabel[4].textContent = 'Taiwan';

filterCategoryCheckboxInput[5].id = 'huang-shan'
filterCategoryCheckboxLabel[5].setAttribute('for', `huang-shan`);
filterCategoryCheckboxLabel[5].textContent = 'Huang Shan';

filterCategoryCheckboxInput[6].id = 'myung-ku'
filterCategoryCheckboxLabel[6].setAttribute('for', `myung-ku`);
filterCategoryCheckboxLabel[6].textContent = 'Myung Ku';

filterCategoryCheckboxInput[7].id = 'hong-pao'
filterCategoryCheckboxLabel[7].setAttribute('for', `hong-pao`);
filterCategoryCheckboxLabel[7].textContent = 'Hong Pao';


const containerTeaCards = main.appendChild(document.createElement(`div`)) as HTMLDivElement;
containerTeaCards.classList.add('container_tea-cards');
// const containerTeaCards = document.querySelector('.container_tea-cards') as HTMLElement;
const teaImage = containerTeaCards.appendChild(document.createElement(`div`)) as HTMLDivElement;
teaImage.classList.add('tea-image');
const teaFiltersRuler = containerTeaCards.appendChild(document.createElement(`div`)) as HTMLDivElement;
teaFiltersRuler.classList.add('tea-filters-ruler');

for (let i = 0; i < 24; i++) {

  const teaCardInfo = containerTeaCards.appendChild(document.createElement(`div`)) as HTMLDivElement;
  teaCardInfo.classList.add('tea-card-info');

  filterCategoryCheckboxInput[0].addEventListener('click', () => {
    
          if (i > 5) {
          teaCardInfo.classList.toggle('hidden')
        }   
  })
  filterCategoryCheckboxInput[1].addEventListener('click', () => {
   
        if ((i < 6) || (i > 11)) {
          teaCardInfo.classList.toggle('hidden')
    }
    })
    filterCategoryCheckboxInput[2].addEventListener('click', () => {
     
      if ((i < 12) || (i > 17)) {
        teaCardInfo.classList.toggle('hidden')
      }
      })
      filterCategoryCheckboxInput[3].addEventListener('click', () => {
        if (i < 18) {
          teaCardInfo.classList.toggle('hidden')
        }
        })
  const teaCard = teaCardInfo.appendChild(document.createElement(`div`)) as HTMLDivElement;
  teaCard.classList.add('tea-card');
  teaCard.style.backgroundImage =  `url(${listBuys[i].image1})`;
  
  const teaCardName = teaCardInfo.appendChild(document.createElement(`p`)) as HTMLParagraphElement;
  teaCardName.classList.add('tea-card-name');
  teaCardName.textContent = listBuys[i].name;
  
  const teaCardSort = teaCardInfo.appendChild(document.createElement(`p`)) as HTMLParagraphElement;
  teaCardSort.classList.add('tea-card-sort');
  teaCardSort.textContent = listBuys[i].sort;
  
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

}
// let priceCart = 0 as number;
// let amountCartNumber = 0 as number;






