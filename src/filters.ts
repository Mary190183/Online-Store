import listBuys from "./list-buys";

const body = document.querySelector('body') as HTMLBodyElement;
const main = body.appendChild(document.createElement(`main`)) as HTMLElement;

const containerFiltres = main.appendChild(document.createElement(`div`)) as HTMLDivElement;
containerFiltres.classList.add('container-filtres');


const buttonsContainer = containerFiltres.appendChild(document.createElement(`div`)) as HTMLDivElement;
const buttonResert = buttonsContainer.appendChild(document.createElement(`button`)) as HTMLButtonElement;
buttonsContainer.classList.add('buttons-container')
buttonResert.classList.add('button-filtres');
buttonResert.textContent = 'Resert filtres'
buttonResert.type = 'submit';
const buttonCopy= buttonsContainer.appendChild(document.createElement(`button`)) as HTMLButtonElement;
buttonCopy.classList.add('button-filtres');
buttonCopy.textContent = 'Copy link'
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

for (let i = 0; i < 4; i ++) {

const filterProvinceTeaForm = filterProvinceTea.appendChild(document.createElement(`form`)) as HTMLFormElement;
filterProvinceTeaForm.classList.add('filter-form');
const filterProvinceTeaInput = filterProvinceTeaForm.appendChild(document.createElement(`input`)) as HTMLInputElement;
filterProvinceTeaInput.classList.add('filter-input');
filterProvinceTeaInput.type = 'checkbox'
const filterProvinceTealabel = filterProvinceTeaForm.appendChild(document.createElement(`label`)) as HTMLLabelElement;
filterProvinceTealabel.classList.add('filter-label');

}

const filterPrice = containerFiltres.appendChild(document.createElement(`div`)) as HTMLDivElement;
filterPrice.classList.add('filter-price');
const filterPriceh2 = filterPrice.appendChild(document.createElement(`h2`)) as HTMLHeadingElement;
filterPriceh2.classList.add('filter-h2');
filterPriceh2.textContent = 'Price';
const filterPriceRange = filterPrice.appendChild(document.createElement(`div`)) as HTMLDivElement;
filterPriceRange.classList.add('filter-range');

const filterPriceRange1 = filterPriceRange.appendChild(document.createElement(`label`)) as HTMLLabelElement;
filterPriceRange1.classList.add('filter-range-points-1');
filterPriceRange1.textContent = '0 $';
filterPriceRange1.setAttribute(`for`, `min`);
filterPriceRange1.id = 'value-min'

const filterPriceRange2 = filterPriceRange.appendChild(document.createElement(`div`)) as HTMLDivElement;
filterPriceRange2.classList.add('filter-range-points');
filterPriceRange2.textContent = '⟷';

const filterPriceRange3 = filterPriceRange.appendChild(document.createElement(`label`)) as HTMLLabelElement;
filterPriceRange3.classList.add('filter-range-points-2');

filterPriceRange3.setAttribute(`for`, `max`);
filterPriceRange3.id = 'value-max'

const filterPriceRangeInput = filterPrice.appendChild(document.createElement(`div`)) as HTMLDivElement;
filterPriceRangeInput.classList.add('filter-range-input');

const filterPriceRangeInput1 = filterPriceRangeInput.appendChild(document.createElement(`input`)) as HTMLInputElement;
filterPriceRangeInput1.classList.add('filter-input-range-1');
filterPriceRangeInput1.id = 'min';
filterPriceRangeInput1.type = 'range'
filterPriceRangeInput1.min = "0.5";
filterPriceRangeInput1.max = "6";
filterPriceRangeInput1.step = "0.5";
filterPriceRangeInput1.value = '0';

const filterPriceRangeInput2 = filterPriceRangeInput.appendChild(document.createElement(`input`)) as HTMLInputElement;
filterPriceRangeInput2.classList.add('filter-input-range-2');
filterPriceRangeInput2.id = 'max';
filterPriceRangeInput2.type = 'range'
filterPriceRangeInput2.min = "0.5";
filterPriceRangeInput2.max = "6";
filterPriceRangeInput2.step = "0.5";
filterPriceRangeInput2.value = '6';



let lowerVal = parseInt(filterPriceRangeInput1.value) as number;
let upperVal = parseInt(filterPriceRangeInput2.value) as number;

filterPriceRangeInput2.oninput = function() {
  lowerVal = parseInt(filterPriceRangeInput1.value);
  upperVal = parseInt(filterPriceRangeInput2.value);
  
  if (upperVal < lowerVal + 0.5) {
    filterPriceRangeInput2.value = String(parseInt(filterPriceRangeInput1.value) + 0.5);
  };
}

filterPriceRangeInput1.oninput = function() {
  lowerVal = parseInt(filterPriceRangeInput1.value);
  upperVal = parseInt(filterPriceRangeInput2.value);
 
  if (lowerVal > upperVal - 0.5) {
    filterPriceRangeInput1.value = String(parseInt(filterPriceRangeInput2.value));
  }
}

const filterStock = containerFiltres.appendChild(document.createElement(`div`)) as HTMLDivElement;
filterStock.classList.add('filter-stock');
const filterStockh2 = filterStock.appendChild(document.createElement(`h2`)) as HTMLHeadingElement;
filterStockh2.classList.add('filter-h2');
filterStockh2.textContent = 'Stock';
const filterStockRange = filterStock.appendChild(document.createElement(`div`)) as HTMLDivElement;
filterStockRange.classList.add('filter-range');

const filterStockRange1 = filterStockRange.appendChild(document.createElement(`label`)) as HTMLLabelElement;
filterStockRange1.classList.add('filter-range-points-1');
filterStockRange1.textContent = '10';
filterStockRange1.setAttribute(`for`, `min-stock`);
filterStockRange1.id = 'value-min-stock'

const filterStockRange2 = filterStockRange.appendChild(document.createElement(`div`)) as HTMLDivElement;
filterStockRange2.classList.add('filter-range-points');
filterStockRange2.textContent = '⟷';

const filterStockRange3 = filterStockRange.appendChild(document.createElement(`label`)) as HTMLLabelElement;
filterStockRange3.classList.add('filter-range-points-2');
filterStockRange3.textContent = '60';
filterStockRange3.setAttribute(`for`, `max-stock`);
filterStockRange3.id = 'value-max-stock'

const filterStockRangeInput = filterStock.appendChild(document.createElement(`div`)) as HTMLDivElement;
filterStockRangeInput.classList.add('filter-range-input');

const filterRangeInput3 = filterStockRangeInput.appendChild(document.createElement(`input`)) as HTMLInputElement;
filterRangeInput3.classList.add('filter-input-range-1');

filterRangeInput3.type = 'range'
filterRangeInput3.min = "5";
filterRangeInput3.max = "60";
filterRangeInput3.value = '0';
filterRangeInput3.value = '5';
filterRangeInput3.id = 'min-stock';

const filterRangeInput4 = filterStockRangeInput.appendChild(document.createElement(`input`)) as HTMLInputElement;
filterRangeInput4.classList.add('filter-input-range-2');

filterRangeInput4.type = 'range'
filterRangeInput4.min = "5";
filterRangeInput4.max = "60";
filterRangeInput4.value = '60';
filterRangeInput4.step = '5';
filterRangeInput4.id = 'max-stock';

let lowerValStock = parseInt(filterRangeInput3.value) as number;
let upperValStock = parseInt(filterRangeInput4.value) as number;

filterRangeInput4.oninput = function() {
  lowerValStock = parseInt(filterRangeInput3.value);
  upperValStock = parseInt(filterRangeInput4.value);
  
  if (upperValStock < lowerValStock + 5) {
    filterRangeInput4.value = String(parseInt(filterRangeInput3.value) + 5);
  };
}

filterRangeInput3.oninput = function() {
  lowerValStock = parseInt(filterRangeInput3.value);
  upperValStock = parseInt(filterRangeInput4.value);
 
  if (lowerValStock > upperValStock - 5) {
    filterRangeInput3.value = String(parseInt(filterRangeInput4.value));
  }
}

const filterCategoryCheckboxInput = document.querySelectorAll('.filter-input') as NodeListOf<HTMLInputElement>;
const filterCategoryCheckboxLabel= document.querySelectorAll('.filter-label') as NodeListOf<HTMLLabelElement>;

filterCategoryCheckboxInput[0].id = 'green-tea'
filterCategoryCheckboxLabel[0].setAttribute('for', `green-tea`);
filterCategoryCheckboxLabel[0].textContent = 'Green tea';

filterCategoryCheckboxInput[1].id = 'oolong'
filterCategoryCheckboxLabel[1].setAttribute('for', `Oolong`);
filterCategoryCheckboxLabel[1].textContent = 'Oolong';

filterCategoryCheckboxInput[2].id = 'puer'
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




function rangeMove(labelId: string, inputId: string) {
  const value = document.querySelector(labelId) as HTMLLabelElement
  const input = document.querySelector(inputId) as HTMLInputElement
  value.textContent = input.value;
  if (!inputId.includes('stock')) {
    value.textContent = input.value + ' $';
  }
  input.addEventListener("input", () => {
    if (!inputId.includes('stock')) {
      value.textContent = input.value + ' $';


    // for (let i=0; i < listBuys.length; i++) {

    //   const teaCardInfo = document.querySelectorAll('.tea-card-info') as NodeListOf<HTMLDivElement>;

        // if(inputId === '#min') {
        //   if(Number(input.value) > listBuys[i].price) {
        //      teaCardInfo[i].classList.add('hidden')
        //   } 


    // }



    }
  value.textContent = input.value;
  if (!inputId.includes('stock')) {
    value.textContent = input.value + ' $';
  }
})
}

rangeMove('#value-min', '#min');
rangeMove('#value-max', '#max');
rangeMove('#value-min-stock', '#min-stock');
rangeMove('#value-max-stock', '#max-stock'); 



buttonCopy.addEventListener('click', function(e) {
  buttonCopy.classList.toggle('active')
  const url = document.location.href

  navigator.clipboard.writeText(url).then(function() {
      console.log('Copied!');
  }, function() {
      console.log('Copy error')
  });
  if(buttonCopy.classList.contains('active')) {
  buttonCopy.textContent = 'Copied'
  } else buttonCopy.textContent = 'Copy link'
 })


export default main; 
export {filterCategoryCheckboxInput}

export {buttonResert}
