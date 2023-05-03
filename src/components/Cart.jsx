import React from "react";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import CartCard from "./CartCard";

const Cart = () => {
  let cartselector = useSelector((state) => state.cartStore.cart);
  console.log(cartselector);

  return (
    <Container>
      {cartselector.map((ele) => {
        return <CartCard {...ele} />;
      })}
    </Container>
  );
};

export default Cart;
