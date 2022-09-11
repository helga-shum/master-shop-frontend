import PageSide from '../components/PageSide';

import React from 'react';
import SameProducts from '../components/SameProducts';
import { addItem, minusItem } from '../redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

function Product() {
  const [subImg, setSubImg] = React.useState(0);
  const dispatch = useDispatch();

  const { id, title, price, imageUrl, brand, description, measures, procent, category } =
    useSelector((state) => state.productSlice.item);
  const onClickPlus = () => {
    dispatch(addItem({ id }));
  };
  const onClickMinus = () => {
    dispatch(minusItem(id));
  };
  const [activeNavy, setActiveNavy] = React.useState('Description');

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
    };
    dispatch(addItem(item));
  };
  const cartItem = useSelector((state) => state.cartSlice.items.find((obj) => obj.id == id));
  const addedCount = cartItem ? cartItem.count : 0;
  return (
    <>
      <PageSide />
      <section className="product">
        <h1 className="product__title">
          {brand}
          <span>{title}</span>
        </h1>
        <div className="product__content">
          <div className="product__images images-product">
            <div className="images-product__mainslider _swiper">
              <a href="" className="images-product__mainslide">
                <div className="images-product__sale">-{procent}%</div>
                <div className="images-product__image">
                  <img src={imageUrl[subImg]} alt="1" />
                </div>
              </a>
            </div>
            <div className="images-product__subslider _swiper">
              {imageUrl.map((image, i) => (
                <div
                  onClick={() => {
                    setSubImg(i);
                  }}
                  className="images-product__subslide">
                  <div className="images-product__subimage">
                    <img src={image} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="product__body body-product">
            <div className="body-product__top">
              <a href="" className="body-product__compare">
                <span>Compare</span>
              </a>
              <div className="body-product__stock">there is in shop</div>
            </div>
            <div className="body-product__actions actions-product">
              <div className="actions-product__row">
                <div className="actions-product__column">
                  <div className="actions-product__price actions-product__price_old">69000</div>
                  <div className="actions-product__price grn">{price}$</div>
                </div>
                <div className="actions-product__column">
                  <div className="actions-product__quantity quantity">
                    <div
                      onClick={onClickMinus}
                      className="quantity__button quantity__button_minus"></div>
                    <div className="quantity__input">
                      <input autocomplete="off" type="text" name="form[]" value={addedCount} />
                    </div>
                    <div
                      onClick={onClickPlus}
                      className="quantity__button quantity__button_plus"></div>
                  </div>
                </div>
                <div className="actions-product__column">
                  <button onClick={onClickAdd} className="actions-product__cart">
                    <span>Add to cart</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="body-product__include include-product">
              <div className="include-product__title">In price are included:</div>
              <div className="include-product__items">
                <div className="include-product__item">
                  <div className="include-product__icon">
                    <img
                      src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/30/000000/external-free-sales-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"
                      alt=""
                    />
                  </div>
                  <div className="include-product__text">Free</div>
                </div>
                <div className="include-product__item">
                  <div className="include-product__icon">
                    <img src="https://img.icons8.com/ios/30/000000/delivery--v1.png" alt="" />
                  </div>
                  <div className="include-product__text">Free delivery</div>
                </div>
                <div className="include-product__item">
                  <div className="include-product__icon">
                    <img src="https://img.icons8.com/ios/30/000000/guarantee--v1.png" alt="" />
                  </div>
                  <div className="include-product__text">Garanty</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product__info info-product _tabs">
          <nav className="content-checkout__nav">
            <div
              onClick={() => {
                setActiveNavy('Description');
              }}
              className={
                activeNavy == 'Description'
                  ? 'content-checkout__item _tabs-item _active'
                  : 'content-checkout__item _tabs-item'
              }>
              Description
            </div>
            <div
              onClick={() => {
                setActiveNavy('Measures');
              }}
              className={
                activeNavy == 'Measures'
                  ? 'content-checkout__item _tabs-item _active'
                  : 'content-checkout__item _tabs-item'
              }>
              Measures
            </div>
          </nav>

          <div className="info-product__body">
            <div
              className={
                activeNavy == 'Description'
                  ? 'info-product__block _tabs-block _active'
                  : 'info-product__block _tabs-block'
              }>
              <p>
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum is that
                it has a more-or-less normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many desktop publishing
                packages and web page editors now use Lorem Ipsum as their default model text, and a
                search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
                versions have evolved over the years, sometimes by accident, sometimes on purpose
                (injected humour and the like).
              </p>
              <p>
                Pluses
                <br />
                There are many variations of passages of Lorem Ipsum available, but the majority
                have suffered alteration in some form, by injected humour, or randomised words which
                don't look even slightly believable.
              </p>
              <p>
                Minuses
                <br />
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                Ipsum passages, and more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum.
              </p>
              <p>
                The standard Lorem Ipsum passage.
                <br />
                The standard Lorem Ipsum passage.
                <br />
                The standard Lorem Ipsum passage.
                <br />
                The standard Lorem Ipsum passage.
                <br />
              </p>
            </div>
            <div
              className={
                activeNavy == 'Measures'
                  ? 'info-product__block _tabs-block _active'
                  : 'info-product__block _tabs-block'
              }>
              <table className="info-product__table">
                {measures.map((measure) => (
                  <tr>
                    <td>
                      <div className="info-product__label">{measure.name}</div>
                    </td>
                    <td>
                      <div className="info-product__value">{measure.type}</div>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
        <SameProducts id={id} category={category} />
      </section>
    </>
  );
}
export default Product;
