import CardComponent from "./Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import getProduct from "../slice/thunk";
import { useSelector, useDispatch } from "react-redux";
import NewSpinner from "./NewSpinner";



const CardContainer = () => {
  const product = useSelector((state) => state.cartStore.product);
  console.log(product);
  const dispatch = useDispatch();
  const situation = useSelector(state => state.cartStore.thunkSituation);



  useEffect(() => {
    dispatch(getProduct())
  }, []);
  return (
    <Container>
      {
        situation === "loading" &&
        <NewSpinner /> ||
        <Row xs={1} md={2} lg={3}>
          {product.map((pro) => (
            <Col>
              <CardComponent {...pro} />
            </Col>
          ))}
        </Row>
      }

    </Container>
  );
};

export default CardContainer;
