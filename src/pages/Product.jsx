import PageSide from '../components/PageSide';
import ProductNavi from '../components/ProductNavi';
import ProductsSlider from '../components/ProductsSlider';

function Product() {
  return (
    <>
      <PageSide />
      <section className="product">
        <h1 className="product__title">
          BH Clothes<span>Skirt</span>
        </h1>
        <div className="product__content">
          <div className="product__images images-product">
            <div className="images-product__mainslider _swiper">
              <a href="" className="images-product__mainslide">
                <div className="images-product__sale">-15%</div>
                <div className="images-product__image">
                  <img
                    src="https://i.postimg.cc/QN6MfFQF/pexels-polina-tankilevitch-7746279.jpg"
                    alt=""
                  />
                </div>
              </a>
            </div>
            <div className="images-product__subslider _swiper">
              <div className="images-product__subslide">
                <div className="images-product__subimage">
                  <img
                    src="https://i.postimg.cc/QN6MfFQF/pexels-polina-tankilevitch-7746279.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="images-product__subslide">
                <div className="images-product__subimage">
                  <img
                    src="https://i.postimg.cc/ZnDKnQb8/pexels-polina-tankilevitch-7746440.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="images-product__subslide">
                <div className="images-product__subimage">
                  <img
                    src="https://i.postimg.cc/W1ZbpSQZ/pexels-polina-tankilevitch-7746256.jpg"
                    alt=""
                  />
                </div>
              </div>
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
                  <div className="actions-product__price grn">64000</div>
                </div>
                <div className="actions-product__column">
                  <div className="actions-product__quantity quantity">
                    <div className="quantity__button quantity__button_minus"></div>
                    <div className="quantity__input">
                      <input autocomplete="off" type="text" name="form[]" value="1" />
                    </div>
                    <div className="quantity__button quantity__button_plus"></div>
                  </div>
                </div>
                <div className="actions-product__column">
                  <a href="" className="actions-product__cart">
                    <span>Add to cart</span>
                  </a>
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
          <div className="product__body"></div>
        </div>
        <div className="product__info info-product _tabs">
          <ProductNavi />

          <div className="info-product__body">
            <div className="info-product__block _tabs-block _active">
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
            <div className="info-product__block _tabs-block">
              <table className="info-product__table">
                <tr>
                  <td>
                    <div className="info-product__label">Using</div>
                  </td>
                  <td>
                    <div className="info-product__value">Professional</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="info-product__label">Using</div>
                  </td>
                  <td>
                    <div className="info-product__value">Professional</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="info-product__label">Using</div>
                  </td>
                  <td>
                    <div className="info-product__value">Professional</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="info-product__label">Using</div>
                  </td>
                  <td>
                    <div className="info-product__value">Professional</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="info-product__label">Using</div>
                  </td>
                  <td>
                    <div className="info-product__value">Professional</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="info-product__label">Using</div>
                  </td>
                  <td>
                    <div className="info-product__value">Professional</div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <section className="product__same same-products">
          <h2 className="same-products__title">Same goods</h2>
          <ProductsSlider />
        </section>
      </section>
    </>
  );
}
export default Product;
