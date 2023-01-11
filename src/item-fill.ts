import listBuys from "./list-buys"; 
const id = Number(localStorage.getItem('id'));





const body = document.querySelector('body') as HTMLBodyElement;
const sectionContent = body.appendChild(document.createElement(`section`)) as HTMLElement;
sectionContent.classList.add('section-content')
const sectionWrapper = sectionContent.appendChild(document.createElement(`div`)) as HTMLDivElement;
sectionWrapper.classList.add('section-wrapper');
const sectionImgs = sectionWrapper.appendChild(document.createElement(`div`)) as HTMLDivElement;
sectionImgs.classList.add('section-imgs');
const teaImage1 = sectionImgs.appendChild(document.createElement(`img`)) as HTMLImageElement;
teaImage1.classList.add('img-main');
teaImage1.src = listBuys[id-1].image1
teaImage1.alt = 'tea'
teaImage1.classList.add('active')
const teaImage2 = sectionImgs.appendChild(document.createElement(`img`)) as HTMLImageElement;
teaImage2.classList.add('img-extra');
teaImage2.src = listBuys[id-1].image2
teaImage2.alt = 'tea-2'
const sectionItem = sectionWrapper.appendChild(document.createElement(`div`)) as HTMLDivElement;
sectionItem.classList.add('section-item');
const sectionList = sectionItem.appendChild(document.createElement(`ul`)) as HTMLUListElement;


teaImage2.addEventListener('click', function(e) {
  
  if (teaImage1.classList.contains('active')) {
  teaImage1.src = listBuys[id-1].image2
  teaImage2.src = listBuys[id-1].image1 } else {
    teaImage1.src = listBuys[id-1].image1
    teaImage2.src = listBuys[id-1].image2
  }
  teaImage1.classList.toggle('active');

}) 
 


const sectionLiName = sectionList.appendChild(document.createElement(`li`)) as HTMLLIElement;
sectionLiName.classList.add('item-title');
const sectionLiProvince = sectionList.appendChild(document.createElement(`li`)) as HTMLLIElement;
const sectionLiSort = sectionList.appendChild(document.createElement(`li`)) as HTMLLIElement;
const sectionLiDescription = sectionList.appendChild(document.createElement(`li`)) as HTMLLIElement;

  sectionLiName.textContent = listBuys[id-1].name;
  sectionLiProvince.textContent = listBuys[id-1].province
  sectionLiSort.textContent = listBuys[id-1].sort
  sectionLiDescription.textContent = listBuys[id-1].description


  const sectionControl = sectionItem.appendChild(document.createElement(`div`)) as HTMLDivElement;
  sectionControl.classList.add('section-control');
  const amountForm = sectionControl.appendChild(document.createElement(`div`)) as HTMLDivElement;
  const input = amountForm.appendChild(document.createElement(`input`)) as HTMLInputElement;
  input.type = 'number';
  input.min = '5';
  input.max = '60';
  input.step = '5';
  input.value = '5';
  input.id = 'youridhere';
  input.classList.add('amount-input');

const label = amountForm.appendChild(document.createElement(`label`)) as HTMLLabelElement;
label.classList.add('static-value');
label. textContent = 'pcs.';
label.setAttribute('for', 'youridhere')

const price = sectionControl.appendChild(document.createElement(`div`)) as HTMLDivElement;
price.classList.add('price');
price.textContent = `${listBuys[id-1].price} $`
const cartButton = sectionControl.appendChild(document.createElement(`button`)) as HTMLButtonElement;
cartButton.classList.add('cart-button');
cartButton.type = 'button';
cartButton.textContent = 'Add to cart'


import {totalPrice} from './header';
import {amountCart} from './header'


totalPrice.textContent = `Total price: ${localStorage.getItem("cartprice")} $`;
amountCart.textContent = `${localStorage.getItem("cartamount")}`

function getParamsUrl(x: string, y: string) {
  const url = new URL(window.location.href);
  url.searchParams.set(x, y);
  window.history.pushState({ path: url.href }, '', url.href);

}
getParamsUrl('page', String(listBuys[id-1].id));