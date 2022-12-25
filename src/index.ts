import "./index.css";
import listBuys from "./list-buys";

const info1 = document.querySelector('.info1') as HTMLElement;
info1.textContent = listBuys[20].sort;

const img1 = document.querySelector('.img1') as HTMLElement;
img1.style.backgroundImage =  `url(${listBuys[20].image1})`;