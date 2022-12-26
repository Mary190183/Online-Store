import "./footer-test.css";

function renderFooter() {
  return `
  <footer class="footer">
      <div class="footer__container">
        <ul class="footer__list">
          <li class="footer__item">
            <img src="assets/icon/github.svg" class="footer__masha-github" alt="github" style="width: 30px" />
            <a class="footer__link" href="https://github.com/Mary190183/">Mary190183</a>
          </li>
          <li class="footer__item">
            <img src="assets/icon/github.svg" class="footer__masha-github" alt="github" style="width: 30px" />
            <a class="footer__link" href="https://github.com/balabanova-iu/">balabanova-iu</a>
          </li>
          <li class="footer__item">
            <a href="https://rs.school/js/"
              ><img src="assets/icon/rsschool.svg" class="footer__rsschool" alt="rs_school" style="width: 70px"
            /></a>
          </li>
        </ul>
      </div>
    </footer>
  `;
}

export default renderFooter;
