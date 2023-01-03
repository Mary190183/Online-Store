import "./cart.css";

import listBuys from "./list-buys";

import renderHeader from "./components/header";
import renderFooter from "./components/footer";
import renderCartItem from "./components/cart-item";

import CartController from "./controllers/cart-controller";
import CartModel from "./models/cart-model";

declare const window: Window & { cartController: CartController; cartModel: CartModel };

window.cartModel = new CartModel();
window.cartController = new CartController(render, window.cartModel);

window.onload = function () {
  window.cartController.updateView();
};

function render({ items, totalPrice, totalAmount }: CartModel) {
  return `
  ${renderHeader({ totalAmount, totalPrice })}
    <section class="section-content">
      <div class="section-wrapper">
        <div class="title-checkout">
          <div class="title">Cart</div>
          <div class="checkout-total">
            <div class="total">
              <div class="total-price">Total: ${totalPrice}$</div>
            </div>
            <button class="checkout-button">Checkout</button>
          </div>
        </div>
        ${items.map((item) => {
          const product = listBuys.find((prod) => prod.id === item.productId);

          if (product) {
            return renderCartItem({
              image: product.image1,
              sort: product.sort,
              province: product.province,
              price: product.price * item.amount,
              id: item.id,
              amount: item.amount,
            });
          } else {
            return "";
          }
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
