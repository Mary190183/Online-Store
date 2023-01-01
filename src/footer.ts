import "./header.css";

const body = document.querySelector('body') as HTMLBodyElement;
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
