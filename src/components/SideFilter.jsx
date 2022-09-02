import React from 'react';
import BrandFilter from './filters/BrandFilter';
import FabricFilter from './filters/FabricFilter';
import PriceFilter from './filters/PriceFilter';
import SizeFilter from './filters/SizeFilter';

function SideFilter() {
  return (
    <form action="#" className="filter">
      <div className="filter__title">Goods filter</div>
      <div className="filter__content">
        <div className="filter__body _spollers">
          <PriceFilter />
          <div className="filter__section section-filter">
            <div className="section-filter__title">Goods for comparison</div>
            <div className="section-filter__body ">
              <div className="compare-filter">
                <div className="compare-filter__items">
                  <div className="compare-filter__item">
                    <a href="" className="compare-filter__link">
                      NordicTrack
                    </a>
                    <a href="" className="compare-filter__remove"></a>
                  </div>
                  <div className="compare-filter__item">
                    <a href="" className="compare-filter__link">
                      Clear Fit Luxury
                    </a>
                    <a href="" className="compare-filter__remove"></a>
                  </div>
                  <div className="compare-filter__item">
                    <a href="" className="compare-filter__link">
                      NordicTrack
                    </a>
                    <a href="" className="compare-filter__remove"></a>
                  </div>
                </div>
                <div className="compare-filter__footer">
                  <a href="" className="compare-filter__button">
                    <span>Compare</span>
                  </a>
                  <a href="" className="compare-filter__clean"></a>
                </div>
              </div>
            </div>
          </div>
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
}
export default SideFilter;
