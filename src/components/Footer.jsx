import logo from '../img/logo.png';
function Footer() {
  return (
    <footer class="footer">
      <div class="footer__content _container">
        <div class="footer__body">
          <div class="footer__column">
            <div class="footer__block block-footer">
              <div class="block-footer__column">
                <a href="" class="logo-footer">
                  <img src={logo} alt="" />
                </a>
                <div class="block-footer__phones">
                  <p>
                    <a href="tel:44098467234" class="block-footer__phone">
                      44098467234
                    </a>
                  </p>
                  <p>
                    <a href="tel:44098467234" class="block-footer__phone">
                      44098467234
                    </a>
                  </p>
                </div>
              </div>
              <div class="block-footer__column">
                <div class="block-footer__delivery delivery-footer">
                  <div class="delivery-footer__title">Delivery by transport companies:</div>
                  <div class="delivery-footer__items">
                    <div class="delivery-footer__item">
                      <img src="https://img.icons8.com/ios/50/000000/nl-logo.png" alt="" />
                    </div>
                    <div class="delivery-footer__item">
                      <img src="https://img.icons8.com/ios/50/000000/ebay.png" alt="" />
                    </div>
                    <div class="delivery-footer__item">
                      <img src="https://img.icons8.com/ios-filled/50/000000/lion.png" alt="" />
                    </div>
                    <div class="delivery-footer__item">
                      <img src="https://img.icons8.com/dotty/50/000000/adobe-indesign.png" alt="" />
                    </div>
                    <div class="delivery-footer__item">
                      <img src="https://img.icons8.com/ios/50/000000/myspace-circled.png" alt="" />
                    </div>
                    <div class="delivery-footer__item">
                      <img src="https://img.icons8.com/ios/50/000000/red-hat.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer__column">
            <div class="block-footer__payments payments-footer">
              <div class="payments-footer__title">Payments:</div>
              <div class="payments-footer__items">
                <div class="payments-footer__item">
                  <img src="https://img.icons8.com/ios-filled/50/000000/visa.png" alt="" />
                </div>
                <div class="payments-footer__item">
                  <img src="https://img.icons8.com/glyph-neue/50/000000/mastercard.png" alt="" />
                </div>
                <div class="payments-footer__item">
                  <img src="https://img.icons8.com/ios-filled/50/000000/paypal.png" alt="" />
                </div>
                <div class="payments-footer__item">
                  <img src="https://img.icons8.com/ios-filled/50/000000/google-wallet.png" alt="" />
                </div>
                <div class="payments-footer__item">
                  <img src="https://img.icons8.com/dotty/50/000000/apple-pay.png" alt="" />
                </div>
                <div class="payments-footer__item">
                  <img src="https://img.icons8.com/ios/50/000000/swift--v1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer__bottom">
          <div class="footer__copy">All pravas are protected</div>
          <div class="footer__social social-footer">
            <a href="" class="social-footer__item">
              <img src="https://img.icons8.com/ios/35/000000/facebook-new.png" alt="" />
            </a>
            <a href="" class="social-footer__item">
              <img src="https://img.icons8.com/ios/35/000000/instagram-new--v1.png" alt="" />
            </a>
            <a href="" class="social-footer__item">
              <img src="https://img.icons8.com/ios-filled/35/000000/twitter.png" alt="" />
            </a>
            <a href="" class="social-footer__item">
              <img src="https://img.icons8.com/ios/35/000000/tiktok--v1.png" alt="" />
            </a>
            <a href="" class="social-footer__item">
              <img src="https://img.icons8.com/ios/35/000000/youtube-play--v1.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
