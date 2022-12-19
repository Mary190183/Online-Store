import "./index.css";
import listBuys from "./list-buys";


const info1: any = document.querySelector('.info1');
const img1: any = document.querySelector('.img1');
info1.textContent = listBuys[20].sort;


img1.style.backgroundImage =  `url(${listBuys[20].image1})`;