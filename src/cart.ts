import "./cart.css";

import listBuys from "./list-buys";

import renderHeader from "./components/header";
import renderFooter from "./components/footer";
import renderCartItem from "./components/cart-item";

import CartController from "./controllers/cart-controller";

declare let window: Window & { cartController: CartController };

window.cartController = new CartController(render);

window.onload = function () {
  window.cartController.updateView();
};

function render({ currentIndex }: CartProps) {
  return `
  ${renderHeader()}
    <section class="section-content">
      <div class="section-wrapper">
        <div class="title-checkout">
          <div class="title">Cart</div>
          <div class="checkout-total">
            <div class="total">
              <div class="total-price">Total: 2$</div>
            </div>
            <button class="checkout-button">Checkout</button>
          </div>
        </div>
        ${currentIndex.map((item, index) => {
          return renderCartItem({
            image: listBuys[item].image1,
            sort: listBuys[item].sort,
            province: listBuys[item].province,
            price: listBuys[item].price,
            index: index,
          });
        })}
        <div class="section-end">
          <div class="promo">
            <div class="promo-text">Promo code</div>
            <input type="text" />
            <button class="promo-activate">Activate</button>
          </div>
          <div class="pages">
            <div class="pages-text">Page</div>
            <button class="button-left">
              <img src="./assets/svg/arrow-right.svg" alt="arrow-left" class="pages-img-left" />
            </button>
            <div class="cart-page">1</div>
            <button class="button-right">
              <img src="./assets/svg/arrow-right.svg" alt="arrow-right" class="pages-img-right" />
            </button>
          </div>
        </div>
      </div>
    </section>
    ${renderFooter()}
  `;
}
