import back from '../img/oko.jpg';
import React from 'react';
const Slider: React.FC = () => {
  return (
    <div className="page__slider mainslider">
      <div className="mainslider__content content-mainslider">
        <div className="content-mainslider__title">
          <span>Mega</span>
          sale
        </div>
        <div className="content-mainslider__text text-mainslider">
          <p>
            <span className="text-mainslider__text-1">Don't mess the opportunity</span>
          </p>
          <p>
            <span className="text-mainslider__text-2">to buy the goods</span>
          </p>
          <p>
            before they<span className="text-mainslider__text-3">will grow</span>
          </p>
        </div>
        <div className="content-mainslider__footer">
          <div className="content-mainslider__price grn">upper then 45000</div>
          <a href="" className="content-mainslider__button">
            <span>More description</span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Slider;
