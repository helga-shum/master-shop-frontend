import React from 'react';
import BrandFilter from './filters/BrandFilter';
import FabricFilter from './filters/FabricFilter';
import PriceFilter from './filters/PriceFilter';
import SizeFilter from './filters/SizeFilter';

const SideFilter: React.FC = () => {
  return (
    <form action="#" className="filter">
      <div className="filter__title">Goods filter</div>
      <div className="filter__content">
        <div className="filter__body _spollers">
          <PriceFilter />
          <SizeFilter />
          <FabricFilter />
          <BrandFilter />
        </div>
        <div className="filter__footer">
          <button type="submit" className="filter__btn btn">
            To choose
          </button>
          <button type="reset" className="filter__btn btn btn_grey">
            Reset
          </button>
        </div>
      </div>
    </form>
  );
};
export default SideFilter;
