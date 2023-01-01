const body = document.querySelector('body') as HTMLBodyElement;
const main = body.appendChild(document.createElement(`main`)) as HTMLElement;

const containerFiltres = main.appendChild(document.createElement(`div`)) as HTMLDivElement;
containerFiltres.classList.add('container-filtres');


const buttonsContainer = containerFiltres.appendChild(document.createElement(`div`)) as HTMLDivElement;
const buttonResert = buttonsContainer.appendChild(document.createElement(`button`)) as HTMLButtonElement;
buttonsContainer.classList.add('buttons-container')
buttonResert.classList.add('button-filtres');
buttonResert.textContent = 'Resert filtres'
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

const filterPriceRange1 = filterPriceRange.appendChild(document.createElement(`div`)) as HTMLDivElement;
filterPriceRange1.classList.add('filter-range-points-1');
filterPriceRange1.textContent = '0';

const filterPriceRange2 = filterPriceRange.appendChild(document.createElement(`div`)) as HTMLDivElement;
filterPriceRange2.classList.add('filter-range-points');
filterPriceRange2.textContent = '⟷';

const filterPriceRange3 = filterPriceRange.appendChild(document.createElement(`div`)) as HTMLDivElement;
filterPriceRange3.classList.add('filter-range-points-2');
filterPriceRange3.textContent = '7 $';

const filterPriceRangeInput = filterPrice.appendChild(document.createElement(`div`)) as HTMLDivElement;
filterPriceRangeInput.classList.add('filter-range-input');
const filterPriceRangeInput1 = filterPriceRangeInput.appendChild(document.createElement(`input`)) as HTMLInputElement;
filterPriceRangeInput1.classList.add('filter-input-range-1');




filterPriceRangeInput1.type = 'range'
filterPriceRangeInput1.min = "0";
filterPriceRangeInput1.max = "7";
filterPriceRangeInput1.value = '1';

const filterPriceRangeInput2 = filterPriceRangeInput.appendChild(document.createElement(`input`)) as HTMLInputElement;
filterPriceRangeInput2.classList.add('filter-input-range-2');
filterPriceRangeInput2.type = 'range'
filterPriceRangeInput2.min = "0";
filterPriceRangeInput2.max = "6";
filterPriceRangeInput2.value = '5';

const filterStock = containerFiltres.appendChild(document.createElement(`div`)) as HTMLDivElement;
filterStock.classList.add('filter-stock');
const filterStockh2 = filterStock.appendChild(document.createElement(`h2`)) as HTMLHeadingElement;
filterStockh2.classList.add('filter-h2');
filterStockh2.textContent = 'Stock';
const filterStockRange = filterStock.appendChild(document.createElement(`div`)) as HTMLDivElement;
filterStockRange.classList.add('filter-range');

const filterStockRange1 = filterStockRange.appendChild(document.createElement(`div`)) as HTMLDivElement;
filterStockRange1.classList.add('filter-range-points-1');
filterStockRange1.textContent = '0';

const filterStockRange2 = filterStockRange.appendChild(document.createElement(`div`)) as HTMLDivElement;
filterStockRange2.classList.add('filter-range-points');
filterStockRange2.textContent = '⟷';

const filterStockRange3 = filterStockRange.appendChild(document.createElement(`div`)) as HTMLDivElement;
filterStockRange3.classList.add('filter-range-points-2');
filterStockRange3.textContent = '24';

const filterStockRangeInput = filterStock.appendChild(document.createElement(`div`)) as HTMLDivElement;
filterStockRangeInput.classList.add('filter-range-input');
const filterRangeInput1 = filterStockRangeInput.appendChild(document.createElement(`input`)) as HTMLInputElement;
filterRangeInput1.classList.add('filter-input-range-1');

filterRangeInput1.type = 'range'
filterRangeInput1.min = "0";
filterRangeInput1.max = "24";
filterRangeInput1.value = '2';

const filterRangeInput2 = filterStockRangeInput.appendChild(document.createElement(`input`)) as HTMLInputElement;
filterRangeInput2.classList.add('filter-input-range-2');
filterRangeInput2.type = 'range'
filterRangeInput2.min = "0";
filterRangeInput2.max = "24";
filterRangeInput2.value = '20';
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

export default main; 
export {filterCategoryCheckboxInput}