import "./footer-test.css";

function renderFooter() {
  return `
  <footer class="footer">
      <div class="footer-container">
        <ul class="footer-list">
          <li class="footer-item">
            <img src="assets/icon/github.svg" class="masha-github" alt="github" style="width: 30px" />
            <a class="footer-link" href="https://github.com/Mary190183/">Mary190183</a>
          </li>
          <li class="footer-item">
            <img src="assets/icon/github.svg" class="masha-github" alt="github" style="width: 30px" />
            <a class="footer-link" href="https://github.com/balabanova-iu/">balabanova-iu</a>
          </li>
          <li class="footer-item">
            <a href="https://rs.school/js/"
              ><img src="assets/icon/rsschool.svg" class="rsschool" alt="rs_school" style="width: 70px"
            /></a>
          </li>
        </ul>
      </div>
    </footer>
  `;
}

export default renderFooter;
