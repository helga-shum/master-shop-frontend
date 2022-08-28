import React from 'react';

function Pagging({ onChangePage }) {
  const numbers = ['1', '2', '3', '4', '5', '...', '10'];
  const [activeNumber, setActiveNumber] = React.useState(0);
  const onClickNumber = (index) => {
    setActiveNumber(index);
    onChangePage(index + 1);
  };
  const onClickPrev = () => {
    onClickNumber(activeNumber - 1);
  };
  const onClickNext = () => {
    onClickNumber(activeNumber + 1);
  };
  return (
    <div className="pagging">
      <a href="" className="pagging__arrow" onClick={onClickPrev}></a>
      <ul className="pagging__list">
        {numbers.map((number, i) => (
          <li key={i}>
            <a
              href="#"
              onClick={() => onClickNumber(i)}
              className={activeNumber == i ? 'pagging__item _active' : 'pagging__item'}>
              {number}
            </a>
          </li>
        ))}
      </ul>
      <a href="" className="pagging__arrow" onClick={onClickNext}></a>
    </div>
  );
}
export default Pagging;
