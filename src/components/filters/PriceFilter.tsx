import React from 'react';
import { Typography, Slider } from '@material-ui/core';
import { setPriceFilter } from '../../redux/slices/filterSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const PriceFilter: React.FC = () => {
  const { priceFilter } = useSelector((state: RootState) => state.filterSlice);
  const dispatch = useDispatch();
  // const [value, setValue] = React.useState([2500, 7500]);
  const [filter, setFilter] = React.useState<boolean>(false);
  const [spoller, setSpoller] = React.useState<boolean>(false);
  // const rangeSelector = (event: any, value: number[]) => {
  //   setValue(value);
  // };
  const rangeSelector = (
    event: React.ChangeEvent<Record<string, unknown>>,
    value: number | number[],
  ) => {
    dispatch(setPriceFilter(value as number[]));
  };

  return (
    <div className="filter__section section-filter">
      <div
        style={{
          margin: 'auto',
          display: 'block',
          width: 'fit-content',
        }}></div>
      <div
        onClick={() => {
          setFilter(!filter);
          setSpoller(!spoller);
        }}
        className={
          spoller == true
            ? 'section-filter__title _spoller _active'
            : 'section-filter__title _spoller'
        }>
        Price Range($)
      </div>
      <div className={filter == true ? 'section-filter__body _active' : 'section-filter__body'}>
        <p>Use slider or enter min amd max price</p>
        <Typography id="range-slider" gutterBottom>
          Select Price Range:
        </Typography>
        <Slider
          key={`slider-${priceFilter}`}
          value={priceFilter}
          onChange={rangeSelector}
          valueLabelDisplay="auto"
          min={10}
          max={2500}
        />
        Your range of Price is between {priceFilter[0]} /- and {priceFilter[1]} /-
        <div className="section-filter__price-input">
          <div className="section-filter__field">
            <span>Min</span>
            <input type="number" className="section-filter__input-min" value={priceFilter[0]} />
          </div>
          <div className="section-filter__separator">-</div>
          <div className="section-filter__field">
            <span>Max</span>
            <input type="number" className="section-filter__input-max" value={priceFilter[1]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
