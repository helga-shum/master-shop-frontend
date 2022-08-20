import CheckoutNavi from '../components/CheckoutNavi';

function Checkout() {
  return (
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
          <div class="order-checkout__item item-order">
            <div class="item-order__content">
              <a href="" class="item-order__image">
                <img src="./img/skirt.jpg" alt="" />
              </a>
              <div class="item-order__body">
                <div class="item-order__title">
                  <span>BH Fitness F1</span>
                </div>
                <div class="item-order__price grn">65000</div>
              </div>
            </div>
            <div class="item-order__quantity">
              <div class="quantity">
                <div class="quantity__button quantity__button_minus"></div>
                <div class="quantity__input">
                  <input autocomplete="off" type="text" name="form[]" value="1" />
                </div>
                <div class="quantity__button quantity__button_plus"></div>
              </div>
            </div>
            <div class="item-order__total">
              <div class="item-order__label">Sum of goods:</div>
              <div class="item-order__price grn">65000</div>
            </div>
            <a href="" class="item-order__delete"></a>
          </div>
          <div class="order-checkout__item item-order">
            <div class="item-order__content">
              <a href="" class="item-order__image">
                <img src="./img/skirt.jpg" alt="" />
              </a>
              <div class="item-order__body">
                <div class="item-order__title">
                  <span>BH Fitness F1</span>
                </div>
                <div class="item-order__price grn">65000</div>
              </div>
            </div>
            <div class="item-order__quantity">
              <div class="quantity">
                <div class="quantity__button quantity__button_minus"></div>
                <div class="quantity__input">
                  <input autocomplete="off" type="text" name="form[]" value="1" />
                </div>
                <div class="quantity__button quantity__button_plus"></div>
              </div>
            </div>
            <div class="item-order__total">
              <div class="item-order__label">Sum of goods:</div>
              <div class="item-order__price grn">65000</div>
            </div>
            <a href="" class="item-order__delete"></a>
          </div>
          <div class="order-checkout__item item-order">
            <div class="item-order__content">
              <a href="" class="item-order__image">
                <img src="./img/skirt.jpg" alt="" />
              </a>
              <div class="item-order__body">
                <div class="item-order__title">
                  <span>BH Fitness F1</span>
                </div>
                <div class="item-order__price grn">65000</div>
              </div>
            </div>
            <div class="item-order__quantity">
              <div class="quantity">
                <div class="quantity__button quantity__button_minus"></div>
                <div class="quantity__input">
                  <input autocomplete="off" type="text" name="form[]" value="1" />
                </div>
                <div class="quantity__button quantity__button_plus"></div>
              </div>
            </div>
            <div class="item-order__total">
              <div class="item-order__label">Sum of goods:</div>
              <div class="item-order__price grn">65000</div>
            </div>
            <a href="" class="item-order__delete"></a>
          </div>
        </div>
        <div class="order-checkout__footer">
          <div class="order-checkout__total">
            in conclusion: <span class="grn">120000</span>
          </div>
          <button type="submit" class="order-checkout__btn btn">
            Make an order
          </button>
        </div>
      </div>
    </form>
  );
}
export default Checkout;
