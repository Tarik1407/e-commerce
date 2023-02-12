import React from "react";
import styled from "styled-components";
import { PageHero, StripeCheckout } from "../components";
// extra imports
import { CartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const { cart } = React.useContext(CartContext);
  return (
    <main>
      <PageHero title="Checkout" />
      <Wrapper className="page">
        {cart.length >= 1 ? (
          <StripeCheckout />
        ) : (
          <div className="empty">
            <h1>Your Cart is Empty!</h1>
            <Link className="btn" to="/products">
              Fill it
            </Link>
          </div>
        )}
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
  dispplay: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`;
export default CheckoutPage;
