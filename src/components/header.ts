import "./header.css";

function renderHeader({ totalAmount, totalPrice }: HeaderProps) {
  return `
  <header class="header">
  <nav class="header__nav">
    <li class="header__nav-link">
      <a href="https://online-store-tea-time.netlify.app/">
        <div class="header__tea-time-logo"></div>
        <h1 class="header__tea-time-logo-h1">Tea-time</h1>
      </a>
    </li>
    <li class="header__nav-link">
      <form action="" method="get" class="header__form">
        <input name="s" placeholder="Search tea..." type="search" class="header__search-input" />
        <button type="submit" class="header__submit-button">
          <div class="header__search-icon"></div>
        </button>
      </form>
    </li>
    <li class="header__nav-link">
      <a href="item.html">
        <span>Total price: ${totalPrice}$</span>
        <div class="header__cart"></div>
        <div class="header__amount-buys">${totalAmount}</div>
      </a>
    </li>
  </nav>
</header>
  `;
}

export default renderHeader;
