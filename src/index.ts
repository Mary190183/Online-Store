import "./index.css";
import listBuys from "./list-buys";

const body = document.querySelector('body') as HTMLBodyElement;


const header = body.appendChild(document.createElement(`header`)) as HTMLElement;
const nav = header.appendChild(document.createElement(`nav`)) as HTMLElement;
for ( let i = 0; i<3; i++) {
  const navLink = nav.appendChild(document. createElement(`li`)) as HTMLLIElement;
  navLink.classList.add('nav-link')
}
const navLi = document.querySelectorAll('.nav-link') as NodeListOf<HTMLLIElement>
const navLink1 = navLi[0].appendChild(document. createElement(`a`)) as HTMLAnchorElement;
navLink1.classList.add('logo-link');
navLink1.href="https://online-store-tea-time.netlify.app/"
const teaTimeLogo = navLink1.appendChild(document. createElement(`div`)) as HTMLDivElement;
teaTimeLogo.classList.add('tea-time-logo')
const teaTimeLogoH1 = navLink1.appendChild(document. createElement(`div`)) as HTMLDivElement;
teaTimeLogoH1.classList.add('tea-time-logo-h1');
teaTimeLogoH1.textContent = 'Tea-time';


const navLink2 = navLi[1].appendChild(document. createElement(`form`)) as HTMLFormElement;
navLink2.method="get"
const inputNavLink2 = navLink2.appendChild(document. createElement(`input`)) as HTMLInputElement;

inputNavLink2.name = 's'
inputNavLink2.placeholder = 'Search tea...'
inputNavLink2.type = "search"


const button = navLink2.appendChild(document. createElement(`button`)) as HTMLButtonElement;
button.classList.add('button');
button.type = 'submit';

const buttonIcon = button.appendChild(document. createElement(`div`)) as HTMLDivElement;
buttonIcon.classList.add('search-icon')

const navLink3 = navLi[2].appendChild(document. createElement(`a`)) as HTMLAnchorElement;
navLink3.href="item.html"
navLink3.classList.add('logo-link');

const totalPrice = navLink3.appendChild(document. createElement(`span`)) as HTMLSpanElement;
totalPrice.textContent = 'Total-price: 00';

const headerCart = navLink3.appendChild(document. createElement(`div`)) as HTMLDivElement;
headerCart.classList.add('header-cart')

const amountCart = navLink3.appendChild(document. createElement(`div`)) as HTMLDivElement;
amountCart.classList.add('amount-buys');
amountCart.textContent = '0';

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
// filterCategoryCheckboxInput[0].name = 'green-tea';
filterCategoryCheckboxLabel[0].setAttribute('for', `green-tea`);
// filterCategoryCheckboxLabel[0].setAttribute('name', `green-tea`);
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





//footer
const footer = body.appendChild(document.createElement(`footer`)) as HTMLElement;
footer.classList.add('footer')
const footerContainer = footer.appendChild(document.createElement(`div`)) as HTMLDivElement;
footerContainer.classList.add('footer-container');
const footerList = footerContainer.appendChild(document.createElement(`ul`)) as HTMLUListElement;
footerList.classList.add('footer-list');
 for (let i=0; i<3; i++) {
  const footerListLi = footerList.appendChild(document.createElement(`li`)) as HTMLLIElement;
  footerListLi.classList.add('footer-item');
  const footerListLink = footerListLi.appendChild(document.createElement(`a`)) as HTMLAnchorElement;
  footerListLink.classList.add('footer-link');
  const footerListImage = footerListLink.appendChild(document.createElement(`img`)) as HTMLImageElement;
  footerListImage.classList.add('footer-image');
  const footerListP= footerListLink.appendChild(document.createElement(`p`)) as HTMLParagraphElement;
  footerListP.classList.add('footer-p');
 
 }
 const footerLi = document.querySelectorAll('.footer-item') as NodeListOf<HTMLLIElement>
 const footerLink = document.querySelectorAll('.footer-link') as NodeListOf<HTMLAnchorElement>
 const footerP = document.querySelectorAll('.footer-p') as NodeListOf<HTMLParagraphElement>
 const footerImage = document.querySelectorAll('.footer-image') as NodeListOf<HTMLImageElement>

footerLink[0].href = 'https://github.com/Mary190183/'
footerP[0].textContent = 'Mary190183'

footerLink[1].href = 'https://github.com/balabanova-iu/'
footerP[1].textContent = 'balabanova-iu'

footerLink[2].href = 'https://rs.school/js/'
footerP[2].textContent = '2022-2023'

footerImage[0].src = './assets/icon/github.svg';
footerImage[0].alt = 'github'
footerImage[1].src = './assets/icon/github.svg';
footerImage[1].alt = 'github'
footerImage[2].src = './assets/icon/rsschool.svg'
footerImage[2].classList.add('rsschool')
footerImage[2].alt = 'rsschool'