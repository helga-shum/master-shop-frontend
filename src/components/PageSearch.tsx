import React from 'react';
import { debounce } from 'lodash';

import { useDispatch } from 'react-redux';
import { setSearchValue } from '../redux/slices/filterSlice';
const PageSearch: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState<string>('');

  const inputRef = React.useRef<HTMLInputElement>(null);
  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 1000),
    [],
  );
  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setSearchValue('');
    setValue('');
    inputRef.current?.focus();
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };
  return (
    <form action="#" className="page__search search-page">
      <div className="search-page__select">
        <div className="search-page__title">
          <span>Everywhere</span>
          <span data-text="Select:" className="search-page__quantity"></span>
        </div>
      </div>
      <div className="search-page__input">
        <input
          ref={inputRef}
          placeholder="Finding the good..."
          value={value}
          onChange={onChangeInput}
          autoComplete="off"
          type="text"
          name="form[]"
          data-error="Помилка"
          data-value=""
          className="input"
        />
      </div>

      {value && (
        <button onClick={onClickClear} className="search-page__clean">
          <img src="https://img.icons8.com/ios-glyphs/30/000000/multiply.png" />
        </button>
      )}
      <button className="search-page__btn btn">Take a question</button>
    </form>
  );
};
export default PageSearch;
