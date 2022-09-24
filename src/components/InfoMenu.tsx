import React from 'react';
const InfoMenu: React.FC = () => {
  return (
    <div className="page__info-menu info-menu">
      <div className="info-menu__container _container">
        <div className="info-menu__body">
          <div className="info-menu__line">
            <div className="info-menu__label">Information:</div>
            <ul className="info-menu__list">
              <li>
                <a href="" className="info-menu__link">
                  Brands
                </a>
              </li>
              <li>
                <a href="" className="info-menu__link">
                  Delivery
                </a>
              </li>
              <li>
                <a href="" className="info-menu__link">
                  Mega sales
                </a>
              </li>
              <li>
                <a href="" className="info-menu__link">
                  Contacts
                </a>
              </li>
              <li>
                <a href="" className="info-menu__link">
                  Comments
                </a>
              </li>
            </ul>
          </div>
          <div className="info-menu__line">
            <div className="info-menu__label">Help:</div>
            <ul className="info-menu__list">
              <li>
                <a href="" className="info-menu__link">
                  How to make a zakaz
                </a>
              </li>
              <li>
                <a href="" className="info-menu__link">
                  Delivery
                </a>
              </li>
              <li>
                <a href="" className="info-menu__link">
                  Payment methods
                </a>
              </li>
              <li>
                <a href="" className="info-menu__link">
                  Garanty and safety
                </a>
              </li>
              <li>
                <a href="" className="info-menu__link">
                  Age
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfoMenu;
