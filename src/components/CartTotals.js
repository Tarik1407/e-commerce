import React from "react";
import styled from "styled-components";
import { CartContext } from "../context/cart_context";
import { UserContext } from "../context/user_context";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

const CartTotals = () => {
  const { total_amount, shipping_fee } = React.useContext(CartContext);
  const { myUser, loginWithRedirect } = React.useContext(UserContext);
  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            Subtotal: <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            Shipping: <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            Order total: <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
          {myUser ? (
            <Link className="btn" to="/checkout">
              Proceed to checkout
            </Link>
          ) : (
            <button type="button" className="btn" onClick={loginWithRedirect}>
              Login
            </button>
          )}
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`;

export default CartTotals;
