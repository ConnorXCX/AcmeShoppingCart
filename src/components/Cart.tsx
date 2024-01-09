import useCart from "../hooks/useCart";
import { useState } from "react";
import CartItem from "./CartItem";

const Cart = () => {
  const [confirm, setConfirm] = useState<boolean>(false);

  const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart();

  const onSubmitOrder = () => {
    dispatch({ type: REDUCER_ACTIONS.SUBMIT });
    setConfirm(true);
  };

  return (
    <main className="main main--cart">
      {confirm ? (
        <h2>Thank you for your order.</h2>
      ) : (
        <>
          <h2 className="offscreen">Cart</h2>
          <ul>
            {cart.map((item) => {
              return (
                <CartItem
                  key={item.sku}
                  item={item}
                  dispatch={dispatch}
                  REDUCER_ACTIONS={REDUCER_ACTIONS}
                />
              );
            })}
          </ul>
          <div className="cart__totals">
            <p>Total Items: {totalItems}</p>
            <p>Total Price: {totalPrice}</p>
            <button
              className="cart__submit"
              disabled={!totalItems}
              onClick={onSubmitOrder}
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </main>
  );
};

export default Cart;
