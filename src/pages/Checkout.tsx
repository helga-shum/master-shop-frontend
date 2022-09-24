import CartItemBlock from '../components/CartItem';
import CheckoutNavi from '../components/CheckoutNavi';
import PageSide from '../components/PageSide';
import { useDispatch, useSelector } from 'react-redux';
import { clearItems } from '../redux/slices/cartSlice';
import CartEmpty from '../components/CartEmpty';
import { RootState } from '../redux/store';

function Checkout() {
  const { items, totalPrice } = useSelector((state: RootState) => state.cartSlice);
  const dispatch = useDispatch();
  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);
  const onClickClear = () => {
    if (window.confirm('Are you sure?')) {
      dispatch(clearItems());
    }
  };
  if (!totalCount) {
    return <CartEmpty />;
  }

  return (
    <>
      <PageSide />
      <form action="#" className="checkout">
        <div className="checkout__title title-item">Booking</div>
        <div className="checkout__content content-checkout _tabs">
          <CheckoutNavi />
          <div className="content-checkout__body">
            <div className="content-checkout__block _tabs-block _active">
              <div className="content-checkout__form form-checkout">
                <div className="form-checkout__column">
                  <div className="form-checkout__line">
                    <div className="form-checkout__label">
                      Name: <span>*</span>
                    </div>
                    <div className="form-checkout__input">
                      <input
                        autoComplete="off"
                        type="text"
                        name="form[]"
                        data-error="Error"
                        data-value=""
                        className="input"
                      />
                    </div>
                  </div>
                  <div className="form-checkout__line">
                    <div className="form-checkout__label">
                      Phone: <span>*</span>
                    </div>
                    <div className="form-checkout__input">
                      <input
                        autoComplete="off"
                        type="text"
                        name="form[]"
                        data-error="Error"
                        data-value=""
                        className="input"
                      />
                    </div>
                  </div>
                  <div className="form-checkout__line">
                    <div className="form-checkout__label">
                      Email: <span>*</span>
                    </div>
                    <div className="form-checkout__input">
                      <input
                        autoComplete="off"
                        type="text"
                        name="form[]"
                        data-error="Error"
                        data-value=""
                        className="input"
                      />
                    </div>
                  </div>
                  <div className="form-checkout__line">
                    <div className="form-checkout__label"></div>
                    <div className="form-checkout__input">
                      <label className="checkbox">
                        <input
                          autoComplete="off"
                          type="checkbox"
                          name="form[]"
                          data-error="Error"
                          value=""
                          className="checkbox__input"
                        />
                        <span className="checkbox__text">
                          <span>to subscribe</span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-checkout__column">
                  <div className="form-checkout__text">
                    <p>
                      <span>*</span>The standard Lorem Ipsum passage, used since the 1500s
                    </p>
                    <p>
                      Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
                    </p>
                    <p>
                      *"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                      veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-checkout__block _tabs-block"></div>
            <div className="content-checkout__block _tabs-block"></div>
          </div>
        </div>
        <div className="checkout__order order-checkout">
          <div className="order-checkout__title title-checkout">Your order</div>
          <div className="order-checkout__items">
            {items.map((item: any) => (
              <CartItemBlock key={item.id} {...item} />
            ))}
          </div>
          <div className="order-checkout__footer">
            <div className="order-checkout__total">
              in conclusion total sum: <span className="grn">{totalPrice}</span>
            </div>
            <div className="order-checkout__total">
              in conclusion total count: <span className="grn">{totalCount}</span>
            </div>
            <button type="submit" className="order-checkout__btn btn">
              Make an order
            </button>
            <button onClick={onClickClear} type="submit" className="order-checkout__btn btn">
              Clear the cart
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
export default Checkout;
