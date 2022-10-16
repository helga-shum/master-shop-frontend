import logo from '../img/logo.png';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PageSearch from './PageSearch';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { logout, selectAuth } from '../redux/slices/auth';
const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectAuth);
  const location = useLocation();
  const { items, totalPrice } = useSelector((state: RootState) => state.cartSlice);
  const links = ['Brands', 'Sale', 'Delivery', 'Garanty', 'Payment', 'Contacts'];
  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);
  const [activeLink, setActiveLink] = React.useState<number>(0);

  const onActiveLink = (index: number) => {
    setActiveLink(index);
  };
  const onClickLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      dispatch(logout());
      window.localStorage.removeItem('token');
    }
  };
  const isMounted = React.useRef(false);
  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);
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
                    <li key={i}>
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
          <Link to="/">
            <div className="top-header__column top-header__column_logo">
              <div className="top-header__logo">
                <img src={logo} alt="" />
              </div>
            </div>
          </Link>
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
              {isAuth ? (
                <>
                  <li>
                    <Link to="/catalog" className="actions-header__item actions-header__item_login">
                      <button onClick={onClickLogout}>Log out</button>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login" className="actions-header__item actions-header__item_login">
                      <button>Login</button>
                    </Link>
                  </li>
                  <li>
                    <Link
                      data-da="menu__body,3,640"
                      to="/register"
                      className="actions-header__item actions-header__item_reg">
                      <button>Sign up</button>
                    </Link>
                  </li>
                </>
              )}
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
              {location.pathname !== '/checkout' ? (
                <Link to="/checkout">
                  <button className="info-header__column">
                    <div className="info-header__cart">
                      <span>{totalCount}</span>
                    </div>
                    <div className="info-header__cart">
                      <span>{totalPrice}</span>
                    </div>
                  </button>
                </Link>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
      <PageSearch />
    </header>
  );
};

export default Header;
