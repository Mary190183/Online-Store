import "./header-test.css";

function renderHeader() {
  return `
  <header>
  <nav>
    <li class="nav-link">
      <a href="https://online-store-tea-time.netlify.app/">
        <div class="tea-time-logo"></div>
        <h1 class="tea-time-logo-h1">Tea-time</h1>
      </a>
    </li>
    <li class="nav-link">
      <form action="" method="get">
        <input name="s" placeholder="Search tea..." type="search" class="search-input" />
        <button type="submit" class="submit-button">
          <div class="search-icon"></div>
        </button>
      </form>
    </li>
    <li class="nav-link">
      <a href="item.html">
        <span>total-price: 00</span>
        <div class="header-cart"></div>
        <div class="amount-buys">0</div>
      </a>
    </li>
  </nav>
</header>
  `;
}

export default renderHeader;
