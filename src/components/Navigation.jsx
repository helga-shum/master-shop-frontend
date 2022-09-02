import React from 'react';
import { Link } from 'react-router-dom';
function Navigation({ categoryId, onClickCategory }) {
  const types = [
    'All',
    'Skirts',
    'Dresses',
    'Trousers',
    'T-shirts',
    'Jeans',
    'Tops',
    'Sweaters',

    'Shirts',
    'Costumes',
  ];

  const [navi, setNavi] = React.useState(false);
  return (
    <nav className="page__menu menu-page">
      <div className="menu-page__header">
        <Link to="/catalog">
          <div className="menu-page__title">Каталог товаров</div>
        </Link>
        <div className={navi == true ? 'menu-page__burger _active' : 'menu-page__burger'}>
          <div onClick={() => setNavi(!navi)} className={'menu-page__lines'}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      {navi && (
        <div className="menu-page__body">
          <ul className="menu-page__list">
            {types.map((categoryName, i) => (
              <Link to="/catalog">
                <li className="menu-page__parent">
                  <div
                    onClick={() => {
                      onClickCategory(i);
                    }}
                    className={categoryId == i ? 'menu-page__link _active' : 'menu-page__link'}>
                    {categoryName}
                  </div>

                  {/* <div className="menu-page__submenu submenu-page">
                    <div className="submenu-page__item">
                      <ul className="submenu-page__menu">
                        <li className="submenu-page__link">сукня</li>
                        <li className="submenu-page__link">сукня</li>
                        <li className="submenu-page__link">сукня</li>
                        <li className="submenu-page__link">сукня</li>
                      </ul>
                      <div className="submenu-page__product">
                        <div className="item-product">
                          <div className="item-product__labels">
                            <div className="item-product__label">Товар дня</div>
                            <div className="item-product__label">Новинка</div>
                          </div>
                          <a href="" className="item-product__image">
                            <img src="https://ru.wiktionary.org/wiki/skirt" alt="сукня" />
                          </a>
                          <div className="item-product__body">
                            <a href="" className="item-product__title">
                              Сукня
                            </a>
                            <div className="item-product__footer">
                              <div className="item-product__old-price grn">23 400</div>
                              <a href="" className="item-product__add"></a>
                              <div className="item-product__price grn">25000</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
export default Navigation;
