import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { ProductsContext } from "../context/products_context";
import { UserContext } from "../context/user_context";

const Nav = () => {
  const { myUser } = React.useContext(UserContext);
  const { openSidebarHandler } = React.useContext(ProductsContext);
  return (
    <NavContainer className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="img" />
          </Link>
          <button onClick={openSidebarHandler} className="nav-toggle">
            {<FaBars />}
          </button>
        </div>
        <ul className="nav-links">
          {links.map((item) => (
            <li key={item.id}>
              <NavLink to={item.url}>{item.text}</NavLink>
            </li>
          ))}
          {myUser && (
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Nav;
