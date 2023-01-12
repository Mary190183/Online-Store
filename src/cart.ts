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

function render({ items, totalPrice, totalAmount, page, limitItems, promo, isOpen }: CartModel) {
  return `
  ${renderHeader({ totalAmount, totalPrice })} 
    <section class="section-content">
      <div class="section-wrapper">
        <div class="title-checkout">
          <div class="title">Cart</div>
          <div class="checkout-total">
            <div class="total">
              ${
                promo.length === 0
                  ? `<div class="total-price">Total: ${totalPrice}$</div>`
                  : promo.length === 1
                  ? `
                        <div class=".section-promo" >
                        <div class="total-price" style="text-decoration:line-through; font-size: 1.6rem">Total: ${totalPrice}$</div>
                        <div class="total-price">Total: ${(totalPrice * 0.9).toFixed(2)}$</div>
                        </div>`
                  : `
                        <div class=".section-promo" >
                        <div class="total-price" style="text-decoration:line-through; font-size: 1.6rem" >Total: ${totalPrice}$</div>
                        <div class="total-price">Total: ${(totalPrice * 0.8).toFixed(2)}$</div>
                        </div>`
              }
            </div>
            <button class="checkout-button" onclick="cartController.openCheckout()">Checkout</button>
            ${isOpen === true ? 
          `<div class="modal" onclick="cartController.closeCheckout()"></div>
            <div class="modal-content">
            <p class="modal__title">Personal Data</p>
            <form action="#">
              <div class="modal__name">
                <input class="modal__input" type="text" placeholder="Name: Ivan Ivanov" type=”password”>
                <p class="modal__comment"> Please enter your first and last name</p>
              </div>
              <div class="modal__phone no-arrows">
                <input class="modal__input tel" type="tel" pattern="[+][6789][0-9]{10}" required  placeholder="Phone: +79211234567" />
                <p class="modal__comment"> Please enter your phone number </p>
              </div>
              <div class="modal__address">
                <input class="modal__input" type="text" placeholder="Delivery address">
                <p class="modal__comment"> Please enter your address</p>
              </div>
              <div class="modal__email">
                <input class="modal__input email" type="email" placeholder="E-mail: ivanov@gmail.com" required/>
                <p class="modal__comment">Please enter your e-mail</p>
              </div>
              <p class="modal__card-title">Credit card Data</p>
              <div class="modal__card-block">
                <div class="modal__card-top no-arrows">
                <div class="modal__card-logo"></div>
                  <input class="modal__card-number" type="tel" pattern="[0-9]{4}[0-9]{4}[0-9]{4}[0-9]{4}" maxLength = "16" required placeholder="0000000000000000"/>
                </div>
              <div class="modal__card-bottom">
                <div class="modal__card-data no-arrows">
                  <label for="validThru">Valid thru:</label>
                  <input id="validThru" type="tel" pattern="[0-9]{2}[/][0-9]{2}" maxLength = "5" required placeholder="12/23">
                </div>
                <div class="modal__card-cvv no-arrows">
                  <label for="cvv">CVV:</label>
                  <input id="cvv" type="tel" pattern="[0-9]{3}" maxLength = "3" required placeholder="000">
                </div>
              </div>
            </div>
            <button class="modal__submit" type='submit'>Submit</button>
          </form>
        
        </div>` : ""
          }
        </div>
        </div>
        ${
          items.length > 0
            ? items.map((item) => {
                const product = listBuys.find((prod) => prod.id === item.productId);

                if (product) {
                  return renderCartItem({
                    image: product.image1,
                    sort: product.sort,
                    province: product.province,
                    price: product.price * item.amount,
                    id: item.id,
                    amount: item.amount,
                    stock: product.stock,
                  });
                } else {
                  return "";
                }
              })
            : `<h2 class="empty">Empty</h2>`
        }
        <div class="section-end">
        <div class="section-promo">
          <div class="promo">
            <div class="promo-text">Promo code</div>
            <input type="text" value="" onchange="cartController.updatePromo(event)" />
            <button type="button" class="promo-activate">Activate</button>
          </div>
          <div class="promo-test">Promo for test: RS, EPM</div>
          ${promo
            .map((item) => {
              if (item === "RS" || item === "EPM") {
                return `<div>
              ${item === "RS" ? `<spain>RS - 10%</spain>` : `<spain>EPM - 10%</spain>`}
              <button type="button" onclick="cartController.deletePromoItem()">DROP</button>
              </div>`;
              } else {
                return ``;
              }

            })
            .join("")}
        </div>
          <div class="pages">
            <div class="limit">
              <div>Limit</div>
              <input type="number" min="1" max="10" step="1" value="${limitItems}" oninput="cartController.updateLimitItems(event)" class="limit-input"/>
            </div>
            <div class="pages-text">Page</div>
            <button class="button-left" onclick="cartController.onclickLeft()">
              <img src="./assets/svg/arrow-right.svg" alt="arrow-left" class="pages-img-left" />
            </button>
            <div class="cart-page">${page}</div>
            <button class="button-right" onclick="cartController.onclickRight()">
              <img src="./assets/svg/arrow-right.svg" alt="arrow-right" class="pages-img-right" />
            </button>
          </div>
        </div>
      </div>
    </section>
    ${renderFooter()}
  `;
}
