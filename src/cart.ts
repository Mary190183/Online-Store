import "./cart.css";

import renderHeader from "./Components/header-test";
import renderFooter from "./Components/footer-test";

window.onload = function () {
  document.body.innerHTML = render();
};

function render() {
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
        <div class="cart-description">
          <img src="https://taplink.st/p/d/4/d/b/30656601.jpg" alt="tea" class="img-main" />
          <div>
            <div class="sort">Green tea</div>
            <div class="country">Gyokuro And Ji</div>
            <div class="amount-stock">
              <div class="amount-form">
                <input type="number" min="1" max="1000" step="1" value="1" id="youridhere" class="amount-input" />
                <label for="youridhere" class="static-value">pcs.</label>
              </div>
              <div class="stock">in stock: 5 pcs.</div>
            </div>
            <div class="section-price-item-resp">
              <div class="text-price">Price:</div>
              <div class="item-price">2 $</div>
            </div>
          </div>
          <div class="section-price-item">
            <div class="text-price">Price:</div>
            <div class="item-price">2 $</div>
          </div>
          <button type="button" title="remove from cart" class="delete-button">x</button>
        </div>
        <!-- вторая карточка начало-->
        <div class="cart-description">
          <img src="https://taplink.st/p/d/4/d/b/30656601.jpg" alt="tea" class="img-main" />
          <div>
            <div class="sort">Green tea</div>
            <div class="country">Gyokuro And Ji</div>
            <div class="amount-stock">
              <div class="amount-form">
                <input type="number" min="0" max="1000" step="1" value="1" id="youridhere" class="amount-input" />
                <label for="youridhere" class="static-value">pcs.</label>
              </div>
              <div class="stock">in stock: 5 pcs.</div>
            </div>
            <div class="section-price-item-resp">
              <div class="text-price">Price:</div>
              <div class="item-price">2 $</div>
            </div>
          </div>
          <div class="section-price-item">
            <div class="text-price">Price:</div>
            <div class="item-price">2 $</div>
          </div>
          <button type="button" title="remove from cart" class="delete-button">x</button>
        </div>
        <!-- вторая карточка конец-->
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
