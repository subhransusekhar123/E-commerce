import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { add } from "../slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const CardComponent = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating
}) => {
  const dispatch = useDispatch();

  const addHandler = (pro) => {
    dispatch(add(pro));
  };
  return (
    <Card style={{ width: "100%", height: "100%" }} className="col-4">
      <Card.Img
        variant="top"
        src={image}
        style={{ width: "100%", height: "150px", objectFit: "contain" }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description.substring(1, 150) + "......."}</Card.Text>
        <Card.Text style={{ textAlign: "center", fontWeight: "bold" }}>
          ${price}
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="primary"
          onClick={() =>
            addHandler({
              id,
              title,
              price,
              description,
              category,
              image,
              rating
            })
          }
        >
          Add To Cart
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default CardComponent;
