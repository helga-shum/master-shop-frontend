import { useDispatch, useSelector } from 'react-redux';
import { addItem, CartItem } from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';
import { RootState } from '../redux/store';
import { selectAuth } from '../redux/slices/authSlice';
import { IconButton } from '@mui/material';
import axios from '../axios';
import { useState } from 'react';

type ItemProps = {
  // onLike: (string: string) => void;
  view?: string;
  title: string;
  imageUrl: string[];
  _id: string;
  brand: string;
  sizes: string[];
  fabric: string;
  price: number;
  category: number;
  rating: number;
  measures: {
    type: string;
    name: string;
  }[];
  description: string;
  procent: number;
};
const Item: React.FC<ItemProps> = ({
  // onLike,
  view,
  title,
  imageUrl,
  _id,
  brand,
  sizes,
  fabric,
  price,
  category,
  rating,
  measures,
  description,
  procent,
}) => {
  const cartItem = useSelector((state: RootState) =>
    state.cartSlice.items.find((obj) => obj._id == _id),
  );
  const [like, setLike] = useState(false);
  const dispatch = useDispatch();
  const isAuth = useSelector(selectAuth);
  const onLike = async () => {
    try {
      setLike(!like);
      await axios.post(`/item?likedId=${_id}`);
    } catch (error) {
      console.warn(error);
      alert('error of liking item');
    }
  };

  const types = [
    'Skirts',
    'Dresses',
    'Trousers',
    'T-shirts',
    'Jeans',
    'Tops',
    'Sweaters',

    'Shirts',
    'Costumes',
  ];
  const onClickAdd = () => {
    const item: CartItem = {
      _id,
      title,
      price,
      imageUrl,
      brand,
      fabric,
      description,
      measures,
      procent,
      category,
      count: 0,
    };
    dispatch(addItem(item));
  };
  const new_price = Math.round(price - price * (procent / 100));
  const addedCount = cartItem ? cartItem.count : 0;
  if (view == 'grid' || view == undefined) {
    return (
      <div className="items-products__column ">
        <div className="item-product">
          <div className="item-product__labels"></div>
          <a href="" className="item-product__image">
            <img src={imageUrl[0]} alt="сукня" />
          </a>
          <div className="item-product__body">
            <a href="" className="item-product__title">
              <span>{title}</span>
              {brand}
            </a>
            <div className="item-product__footer">
              <div className="item-product__old-price grn">{price} $</div>
              <button onClick={onClickAdd} className="item-product__add"></button>
              <div className="item-product__price grn">{new_price} $</div>
            </div>
          </div>
          <div className="item-product__hover hover-item-product">
            <div className="hover-item-product__options options-item-product">
              <div className="options-item-product__item">
                <div className="options-item-product__label">Category</div>
                <div className="options-item-product__value">{types[category]}</div>
              </div>
              <div className="options-item-product__item">
                <div className="options-item-product__label">Available clothing sizes</div>
                <div className="options-item-product__value">
                  {sizes.map((size) => (
                    <a key={size} href="#" className="hover-item-product__title">
                      <span>{size}</span>
                    </a>
                  ))}
                </div>
                {fabric}
              </div>
              <div className="options-item-product__item">
                <div className="options-item-product__label">Rating</div>
                <div className="options-item-product__value">{rating}/5</div>
              </div>
            </div>
            <button onClick={onClickAdd} className="hover-item-product__cart"></button>
            {addedCount > 0 && <span>{addedCount}</span>}
            <div className="hover-item-product__footer">
              <div className="hover-item-product__old-price grn">{price} $</div>
              <button onClick={onLike} className="hover-item-product__stock">
                <img
                  src={
                    !like
                      ? 'https://img.icons8.com/ios/35/000000/like--v1.png'
                      : 'https://img.icons8.com/ios-filled/35/FFFFFF/like--v1.png'
                  }
                />
                {/* <img src="https://img.icons8.com/ios-filled/35/FFFFFF/like--v1.png"/> */}
              </button>
              <Link to={`/catalog/${_id}`}>
                <button className="hover-item-product__stock">More information</button>
              </Link>
              <div className="hover-item-product__price grn">{new_price} $</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="items-products__column ">
      <div className="item-product_active">
        <div className="item-product__labels"></div>
        <a href="" className="item-product__image">
          <img src={imageUrl[0]} alt="сукня" />
        </a>
        <div className="item-product__body">
          <a href="" className="item-product__title">
            <span>{title}</span>
            {brand}
          </a>
          <div className="options-item-product__item">
            <div className="options-item-product__label">Category</div>
            <div className="options-item-product__value">{types[category]}</div>
          </div>
          <div className="options-item-product__item">
            <div className="options-item-product__label">Available clothing sizes</div>
            <div className="options-item-product__value">
              {sizes.map((size) => (
                <a key={size} href="" className="hover-item-product__title">
                  <span>{size}</span>
                </a>
              ))}
            </div>
            {fabric}
          </div>
          <div className="options-item-product__item">
            <div className="options-item-product__label">Rating</div>
            <div className="options-item-product__value">{rating}/5</div>
          </div>

          {addedCount > 0 && <span>{addedCount}</span>}
          <button onClick={onLike} className="hover-item-product__stock">
            There is available
          </button>
          <Link to={`/catalog/${_id}`}>
            <button className="hover-item-product__stock">More information</button>
          </Link>
          <div className="item-product__footer">
            <div className="item-product__old-price grn">23 400</div>
            <button onClick={onClickAdd} className="item-product__add"></button>
            <div className="item-product__price grn">{price} $</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Item;
