import "./header.css";
import "./index.css";

import "./footer.css";

const body = document.querySelector('body') as HTMLBodyElement;

const header = body.appendChild(document.createElement(`header`)) as HTMLElement;

const nav = header.appendChild(document.createElement(`nav`)) as HTMLElement;
for ( let i = 0; i<3; i++) {
  const navLink = nav.appendChild(document.createElement(`li`)) as HTMLLIElement;
  navLink.classList.add('nav-link')
}
const navLi = document.querySelectorAll('.nav-link') as NodeListOf<HTMLLIElement>
navLi[0].classList.add('nav__logo')
navLi[1].classList.add('nav__form')
navLi[2].classList.add('nav__cart')
const navLink1 = navLi[0].appendChild(document. createElement(`a`)) as HTMLAnchorElement;
navLink1.classList.add('logo-link');
navLink1.href="https://online-store-tea-time.netlify.app/"
const teaTimeLogo = navLink1.appendChild(document.createElement(`div`)) as HTMLDivElement;
teaTimeLogo.classList.add('tea-time-logo')
const teaTimeLogoH1 = navLink1.appendChild(document.createElement(`div`)) as HTMLHeadingElement;
teaTimeLogoH1.classList.add('tea-time-logo-h1');
teaTimeLogoH1.textContent = 'Tea-time';


const navLink2 = navLi[1].appendChild(document.createElement(`form`)) as HTMLFormElement;
navLink2.classList.add('nav__input');
navLink2.method="get"
const inputNavLink2 = navLink2.appendChild(document.createElement(`input`)) as HTMLInputElement;

inputNavLink2.name = 's'
inputNavLink2.placeholder = 'Search tea...'
inputNavLink2.type = "search"


const button = navLink2.appendChild(document.createElement(`button`)) as HTMLButtonElement;
button.classList.add('button');
button.type = 'submit';

const buttonIcon = button.appendChild(document.createElement(`div`)) as HTMLDivElement;
buttonIcon.classList.add('search-icon')

const navLink3 = navLi[2].appendChild(document.createElement(`a`)) as HTMLAnchorElement;
navLink3.href="cart.html"
navLink3.classList.add('cart-link');

const totalPrice = navLink3.appendChild(document.createElement(`span`)) as HTMLSpanElement;
totalPrice.classList.add('total-price')
totalPrice.textContent = 'Total-price: 00';

const headerCart = navLink3.appendChild(document.createElement(`div`)) as HTMLDivElement;
headerCart.classList.add('header-cart')

const amountCart = navLink3.appendChild(document. createElement(`div`)) as HTMLDivElement;
amountCart.classList.add('amount-buys');
amountCart.textContent = '0';


