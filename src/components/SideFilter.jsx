import React from 'react';
import SectionFilter from './SectionFilter';
function SideFilter() {
  return (
    <form action="#" className="filter">
      <div className="filter__title">Goods filter</div>
      <div className="filter__content">
        <div className="filter__body _spollers">
          <div className="filter__section section-filter">
            <div className="section-filter__title">prise(grn):</div>
            <div className="section-filter__body">
              <div className="price-filter">
                <div className="price-filter__values values-price-filter">
                  <div className="values-price-filter__column">
                    <div className="values-price-filter__label">from</div>
                    <div className="values-price-filter__input">
                      <input
                        id="price-start"
                        autocomplete="off"
                        type="text"
                        name="from[]"
                        className="input"
                      />
                    </div>
                  </div>
                  <div className="values-price-filter__column">
                    <div className="values-price-filter__label">to</div>
                    <div className="values-price-filter__input">
                      <input
                        id="price-end"
                        autocomplete="off"
                        type="text"
                        name="from[]"
                        className="input"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="price-filter noUi-target">
                <div className="noUi-base">
                  <div className="noUi-connects">
                    <div className="noUi-connect"></div>
                  </div>
                  <div className="noUi-origin">
                    <div className="noUi-handle">
                      <div className="noUi-touch-area"></div>
                      <div className="noUi-tooltip"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
          <SectionFilter />
          <SectionFilter />
          <SectionFilter />
          <SectionFilter />
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
