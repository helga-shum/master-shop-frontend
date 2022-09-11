import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem, minusItem } from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';
import { showItem } from '../redux/slices/productSlice';
function CartItem({
  id,
  title,
  price,
  imageUrl,
  brand,
  description,
  measures,
  procent,
  category,
  count,
}) {
  const dispatch = useDispatch();
  const onClickPlus = () => {
    dispatch(addItem({ id }));
  };
  const onClickMinus = () => {
    dispatch(minusItem(id));
  };
  const onClickRemove = () => {
    if (window.confirm('Are you sure?')) {
      dispatch(removeItem(id));
    }
  };
  const onClickMore = () => {
    const itemDetails = {
      id,
      title,
      price,
      imageUrl,
      brand,
      description,
      measures,
      procent,
      category,
    };
    console.log(itemDetails);
    dispatch(showItem(itemDetails));
  };
  const totalPriceItem = price * count;
  return (
    <div class="order-checkout__item item-order">
      <div class="item-order__content">
        <Link to={`/catalog/${id}`}>
          <div onClick={onClickMore} class="item-order__image">
            <img src={imageUrl[0]} alt="" />
          </div>
        </Link>
        <div class="item-order__body">
          <Link to={`/catalog/${id}`}>
            <div onClick={onClickMore} class="item-order__title">
              <span>{title}</span>
            </div>
          </Link>

          <div class="item-order__price grn">{price}</div>
        </div>
      </div>
      <div class="item-order__quantity">
        <div class="quantity">
          <div onClick={onClickMinus} class="quantity__button quantity__button_minus"></div>
          <div class="quantity__input">
            <input autocomplete="off" type="text" name="form[]" value={count} />
          </div>
          <div onClick={onClickPlus} class="quantity__button quantity__button_plus"></div>
        </div>
      </div>
      <div class="item-order__total">
        <div class="item-order__label">Sum of goods:</div>
        <div class="item-order__price grn">{totalPriceItem}</div>
      </div>
      <button onClick={onClickRemove} class="item-order__delete"></button>
    </div>
  );
}

export default CartItem;
