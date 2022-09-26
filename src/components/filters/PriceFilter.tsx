import React from 'react';
import { Typography, Slider } from '@material-ui/core';
import { setPriceFilter } from '../../redux/slices/filterSlice';
import { useDispatch } from 'react-redux';

const PriceFilter: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState<number[]>([2500, 7500]);
  const [filter, setFilter] = React.useState<boolean>(false);
  const [spoller, setSpoller] = React.useState<boolean>(false);

  const rangeSelector = (event: React.ChangeEvent<HTMLInputElement>, newValue: number[]) => {
    setValue(newValue);
    dispatch(setPriceFilter(newValue));
    console.log(newValue);
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
          value={value}
          onChange={rangeSelector}
          valueLabelDisplay="auto"
          min={2500}
          max={7500}
        />
        Your range of Price is between {value[0]} /- and {value[1]} /-
        <div className="section-filter__price-input">
          <div className="section-filter__field">
            <span>Min</span>
            <input type="number" className="section-filter__input-min" value={value[0]} />
          </div>
          <div className="section-filter__separator">-</div>
          <div className="section-filter__field">
            <span>Max</span>
            <input type="number" className="section-filter__input-max" value={value[1]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
