import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem, minusItem, CartItem } from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';
type CartItemProps = {
  title: string;
  imageUrl: string[];
  _id: string;
  brand: string;
  sizes: string[];
  fabric: string;
  price: number;
  category: string;
  rating: number;
  measures: { type: string; name: string }[];

  procent: number;
  count: number;
};
const CartItemBlock: React.FC<CartItemProps> = ({
  title,
  imageUrl,
  _id,
  brand,
  sizes,
  price,
  category,
  rating,
  measures,
  fabric,
  procent,
  count,
}) => {
  const dispatch = useDispatch();
  const onClickPlus = () => {
    dispatch(addItem({ _id } as CartItem));
  };
  const onClickMinus = () => {
    dispatch(minusItem(_id));
  };
  const onClickRemove = () => {
    if (window.confirm('Are you sure?')) {
      dispatch(removeItem(_id));
    }
  };

  const totalPriceItem = price * count;
  return (
    <div className="order-checkout__item item-order">
      <div className="item-order__content">
        <Link to={`/catalog/${_id}`}>
          <div className="item-order__image">
            <img src={imageUrl[0]} alt="" />
          </div>
        </Link>
        <div className="item-order__body">
          <Link to={`/catalog/${_id}`}>
            <div className="item-order__title">
              <span>{title}</span>
            </div>
          </Link>

          <div className="item-order__price grn">{price}</div>
          {fabric}
        </div>
      </div>
      <div className="item-order__quantity">
        <div className="quantity">
          <button
            disabled={count == 1}
            type="button"
            onClick={onClickMinus}
            className="quantity__button quantity__button_minus"></button>
          <div className="quantity__input">
            <input autoComplete="off" type="text" name="form[]" value={count} />
          </div>
          <button
            type="button"
            onClick={onClickPlus}
            className="quantity__button quantity__button_plus"></button>
        </div>
      </div>
      <div className="item-order__total">
        <div className="item-order__label">Sum of goods:</div>
        <div className="item-order__price grn">{totalPriceItem}</div>
      </div>
      <button type="button" onClick={onClickRemove} className="item-order__delete"></button>
    </div>
  );
};

export default CartItemBlock;
