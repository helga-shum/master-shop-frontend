import React from 'react';

const CheckoutNavi: React.FC = () => {
  const navies = ['Fast booking', 'Delivery by curier', 'Delivery'];
  const [activeNavy, setActiveNavy] = React.useState<number>(0);

  return (
    <nav className="content-checkout__nav">
      {navies.map((navy, i) => (
        <div
          key={navy}
          onClick={() => {
            setActiveNavy(i);
          }}
          className={
            activeNavy == i
              ? 'content-checkout__item _tabs-item _active'
              : 'content-checkout__item _tabs-item'
          }>
          {navy}
        </div>
      ))}
    </nav>
  );
};
export default CheckoutNavi;
