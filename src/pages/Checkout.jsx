import CartItem from '../components/CartItem';
import CheckoutNavi from '../components/CheckoutNavi';
import PageSide from '../components/PageSide';
import { useDispatch, useSelector } from 'react-redux';
import { clearItems } from '../redux/slices/cartSlice';
import CartEmpty from '../components/CartEmpty';

function Checkout() {
  const { items, totalPrice } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
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
      <form action="#" class="checkout">
        <div class="checkout__title title-item">Booking</div>
        <div class="checkout__content content-checkout _tabs">
          <CheckoutNavi />
          <div class="content-checkout__body">
            <div class="content-checkout__block _tabs-block _active">
              <div class="content-checkout__form form-checkout">
                <div class="form-checkout__column">
                  <div class="form-checkout__line">
                    <div class="form-checkout__label">
                      Name: <span>*</span>
                    </div>
                    <div class="form-checkout__input">
                      <input
                        autocomplete="off"
                        type="text"
                        name="form[]"
                        data-error="Error"
                        data-value=""
                        class="input"
                      />
                    </div>
                  </div>
                  <div class="form-checkout__line">
                    <div class="form-checkout__label">
                      Phone: <span>*</span>
                    </div>
                    <div class="form-checkout__input">
                      <input
                        autocomplete="off"
                        type="text"
                        name="form[]"
                        data-error="Error"
                        data-value=""
                        class="input"
                      />
                    </div>
                  </div>
                  <div class="form-checkout__line">
                    <div class="form-checkout__label">
                      Email: <span>*</span>
                    </div>
                    <div class="form-checkout__input">
                      <input
                        autocomplete="off"
                        type="text"
                        name="form[]"
                        data-error="Error"
                        data-value=""
                        class="input"
                      />
                    </div>
                  </div>
                  <div class="form-checkout__line">
                    <div class="form-checkout__label"></div>
                    <div class="form-checkout__input">
                      <label class="checkbox">
                        <input
                          autocomplete="off"
                          type="checkbox"
                          name="form[]"
                          data-error="Error"
                          value=""
                          class="checkbox__input"
                        />
                        <span class="checkbox__text">
                          <span>to subscribe</span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="form-checkout__column">
                  <div class="form-checkout__text">
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
            <div class="content-checkout__block _tabs-block"></div>
            <div class="content-checkout__block _tabs-block"></div>
          </div>
        </div>
        <div class="checkout__order order-checkout">
          <div class="order-checkout__title title-checkout">Your order</div>
          <div class="order-checkout__items">
            {items.map((item) => (
              <CartItem key={item.id} {...item} totalPrice={totalPrice} />
            ))}
          </div>
          <div class="order-checkout__footer">
            <div class="order-checkout__total">
              in conclusion total sum: <span class="grn">{totalPrice}</span>
            </div>
            <div class="order-checkout__total">
              in conclusion total count: <span class="grn">{totalCount}</span>
            </div>
            <button type="submit" class="order-checkout__btn btn">
              Make an order
            </button>
            <button onClick={onClickClear} type="submit" class="order-checkout__btn btn">
              Clear the cart
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
export default Checkout;
