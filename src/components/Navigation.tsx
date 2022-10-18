import React from 'react';
import { Link } from 'react-router-dom';
type NavigationProps = { categoryId?: number; onClickCategory?: (i: number) => void };
const Navigation: React.FC<NavigationProps> = ({ categoryId, onClickCategory }) => {
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

  const [navi, setNavi] = React.useState<boolean>(false);
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
                      onClickCategory?.(i);
                    }}
                    className={categoryId == i ? 'menu-page__link _active' : 'menu-page__link'}>
                    {categoryName}
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
export default Navigation;
