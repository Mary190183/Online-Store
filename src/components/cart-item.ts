import "./cart-item.css";

function renderCartItem({ image, sort, province, price, id, amount, stock }: CartItemProps) {
  return `
  <div class="cart-item__description">
  <img src="${image}" alt="tea" class="cart-item__img-main" />
  <div>
    <div class="cart-item__sort">${sort}</div>
    <div class="cart-item__country">${province}</div>
    <div class="cart-item__amount-stock">
      <div class="cart-item__amount-form">
        <input type="number" min="0" max="${stock}" step="1" value="${amount}" onchange="cartController.updateAmount(${id}, event)" id="youridhere" class="cart-item__amount-input" />
        <label for="youridhere" class="cart-item__static-value">pcs.</label>
      </div>
      <div class="cart-item__stock">in stock: ${stock} pcs.</div>
    </div>
    <div class="cart-item__section-price-resp">
      <div class="cart-item__text-price">Price:</div>
      <div class="cart-item__price">${price}</div>
    </div>
  </div>
  <div class="cart-item__section-price">
    <div class="cart-item__text-price">Price:</div>
    <div class="cart-item__price">${price} $</div>
  </div>
  <button type="button" title="remove from cart" class="cart-item__delete-button" onclick="cartController.deleteCartItem(${id})">x</button>
  </div>
  `;
}

export default renderCartItem;
