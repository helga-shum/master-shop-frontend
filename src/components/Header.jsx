import logo from '../img/logo.png';
import React, { useState } from 'react';
function Header() {
  const links = ['Brands', 'Sale', 'Delivery', 'Garanty', 'Payment', 'Contacts'];
  const [cartCount, setCartCount] = useState(0);
  const [activeLink, setActiveLink] = useState(0);
  const onClickBtn = () => {
    setCartCount(cartCount + 1);
  };
  const onActiveLink = (index) => {
    setActiveLink(index);
  };
  return (
    <header className="header">
      <div className="header__top top-header">
        <div className="top-header__content _container">
          <div className="top-header__column">
            <div className="top-header__menu menu">
              <div className="menu__icon icon-menu">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <nav className="menu__body">
                <ul className="menu__list">
                  {links.map((link, i) => (
                    <li>
                      <a
                        href="#"
                        onClick={() => onActiveLink(i)}
                        className={activeLink == i ? 'menu__link _active' : 'menu__link'}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <div className="top-header__column top-header__column_logo">
            <a href="" className="top-header__logo">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="top-header__column">
            <div className="top-header__contacts contacts-header">
              <div className="contacts-header__column">
                <div className="contacts-header__item contacts-header__item_icon">
                  <div className="contacts-header__label">Київ</div>
                  <a href="tel:48787498125" className="contacts-header__phone">
                    +48-787-498-125
                  </a>
                </div>
              </div>
              <div className="contacts-header__column contacts-header__column_forcart">
                <div className="contacts-header__item contacts-header__item_second-phone">
                  <div className="contacts-header__label">Безкоштовно для України</div>
                  <a href="tel:48787498126" className="contacts-header__phone">
                    48-787-498-126
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header__bottom bottom-header">
        <div className="bottom-header__container _container">
          <div className="bottom-header__column">
            <ul data-da="menu__body,0,640" className="bottom-header__actions actions-header">
              <li>
                <a href="" className="actions-header__item actions-header__item_login">
                  <span>Вход</span>
                </a>
              </li>
              <li>
                <a
                  data-da="menu__body,3,640"
                  href=""
                  className="actions-header__item actions-header__item_reg">
                  <span>Регистрация</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:shum.olha@gmail.com"
                  className="actions-header__item actions-header__item_email">
                  <span>shum.olha@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="bottom-header__column">
            <div className="bottom-header__info info-header">
              <div className="info-header__column">
                <a href="" className="info-header__callback">
                  <span>Обратный звонок</span>
                </a>
              </div>
              <div className="info-header__column">
                <div className="info-header__schedule">
                  <p>
                    <span>Пн-Пт:</span>09:00-21:00;
                  </p>
                  <p>
                    <span>Сб-Вс:</span>10:00-20:00;
                  </p>
                </div>
              </div>
              <button onClick={onClickBtn} className="info-header__column">
                <div className="info-header__cart">
                  <span>{cartCount}</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
