import logo from '../img/logo.png';
import React from 'react';
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content _container">
        <div className="footer__body">
          <div className="footer__column">
            <div className="footer__block block-footer">
              <div className="block-footer__column">
                <a href="" className="logo-footer">
                  <img src={logo} alt="" />
                </a>
                <div className="block-footer__phones">
                  <p>
                    <a href="tel:44098467234" className="block-footer__phone">
                      44098467234
                    </a>
                  </p>
                  <p>
                    <a href="tel:44098467234" className="block-footer__phone">
                      44098467234
                    </a>
                  </p>
                </div>
              </div>
              <div className="block-footer__column">
                <div className="block-footer__delivery delivery-footer">
                  <div className="delivery-footer__title">Delivery by transport companies:</div>
                  <div className="delivery-footer__items">
                    <div className="delivery-footer__item">
                      <img src="https://img.icons8.com/ios/50/000000/nl-logo.png" alt="" />
                    </div>
                    <div className="delivery-footer__item">
                      <img src="https://img.icons8.com/ios/50/000000/ebay.png" alt="" />
                    </div>
                    <div className="delivery-footer__item">
                      <img src="https://img.icons8.com/ios-filled/50/000000/lion.png" alt="" />
                    </div>
                    <div className="delivery-footer__item">
                      <img src="https://img.icons8.com/dotty/50/000000/adobe-indesign.png" alt="" />
                    </div>
                    <div className="delivery-footer__item">
                      <img src="https://img.icons8.com/ios/50/000000/myspace-circled.png" alt="" />
                    </div>
                    <div className="delivery-footer__item">
                      <img src="https://img.icons8.com/ios/50/000000/red-hat.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__column">
            <div className="block-footer__payments payments-footer">
              <div className="payments-footer__title">Payments:</div>
              <div className="payments-footer__items">
                <div className="payments-footer__item">
                  <img src="https://img.icons8.com/ios-filled/50/000000/visa.png" alt="" />
                </div>
                <div className="payments-footer__item">
                  <img src="https://img.icons8.com/glyph-neue/50/000000/mastercard.png" alt="" />
                </div>
                <div className="payments-footer__item">
                  <img src="https://img.icons8.com/ios-filled/50/000000/paypal.png" alt="" />
                </div>
                <div className="payments-footer__item">
                  <img src="https://img.icons8.com/ios-filled/50/000000/google-wallet.png" alt="" />
                </div>
                <div className="payments-footer__item">
                  <img src="https://img.icons8.com/dotty/50/000000/apple-pay.png" alt="" />
                </div>
                <div className="payments-footer__item">
                  <img src="https://img.icons8.com/ios/50/000000/swift--v1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__copy">All pravas are protected</div>
          <div className="footer__social social-footer">
            <a href="" className="social-footer__item">
              <img src="https://img.icons8.com/ios/35/000000/facebook-new.png" alt="" />
            </a>
            <a href="" className="social-footer__item">
              <img src="https://img.icons8.com/ios/35/000000/instagram-new--v1.png" alt="" />
            </a>
            <a href="" className="social-footer__item">
              <img src="https://img.icons8.com/ios-filled/35/000000/twitter.png" alt="" />
            </a>
            <a href="" className="social-footer__item">
              <img src="https://img.icons8.com/ios/35/000000/tiktok--v1.png" alt="" />
            </a>
            <a href="" className="social-footer__item">
              <img src="https://img.icons8.com/ios/35/000000/youtube-play--v1.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
