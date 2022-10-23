import { useDispatch, useSelector } from 'react-redux';
import { addItem, CartItem } from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';
import { RootState } from '../redux/store';
type ItemProps = {
  view?: string;
  title: string;
  imageUrl: string[];
  id: string;
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
  view,
  title,
  imageUrl,
  id,
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
    state.cartSlice.items.find((obj) => obj.id == id),
  );

  const dispatch = useDispatch();
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
      id,
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
              <div className="item-product__old-price grn">23 400</div>
              <button onClick={onClickAdd} className="item-product__add"></button>
              <div className="item-product__price grn">{price} $</div>
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
                    <a href="" className="hover-item-product__title">
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
              <div className="hover-item-product__old-price grn">64 990</div>
              <div className="hover-item-product__stock">There is available</div>
              <Link to={`/catalog/${id}`}>
                <button className="hover-item-product__stock">More information</button>
              </Link>
              <div className="hover-item-product__price grn">64990</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="items-products__column ">
      <div className="item-product _active">
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
                <a href="" className="hover-item-product__title">
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
          <div className="hover-item-product__stock">There is available</div>
          <Link to={`/catalog/${id}`}>
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
