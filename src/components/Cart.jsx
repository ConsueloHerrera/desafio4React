import { useState } from "react";
import { pizzaCart } from "../utils/pizzas";
import { Button, Container } from "react-bootstrap";

function Cart() {
  const [quantities, setQuantities] = useState(
    pizzaCart.reduce((acc, pizza) => {
      acc[pizza.id] = 0;
      return acc;
    }, {})
  );

  const incrementQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  const decrementQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(prevQuantities[id] - 1, 0),
    }));
  };

  const totalPrice = pizzaCart.reduce((total, pizza) => {
    return total + pizza.price * quantities[pizza.id];
  }, 0);

  const totalQuantity = pizzaCart.reduce((total, pizza) => {
    return total + quantities[pizza.id];
  }, 0);

  return (
    <Container className="cart-container mt-4">
      <h1>Carrito de Compra</h1>
      <div className="cart-summary mt-4">
        <h3>Total: ${totalPrice}</h3>
        <h3>Total Cantidad: {totalQuantity}</h3>
      </div>
      <div className="container-list">
        {pizzaCart.map((pizza) => (
          <div className="pizza-container" key={pizza.id}>
            <div className="pizza-info">
              <img
                className="pizza-img"
                src={pizza.img}
                alt={`Imagen ${pizza.name}`}
              />
              <div className="container-details">
                <div className="pizza-details">
                  <div>Pizza {pizza.name}</div>
                  <ul>
                    {pizza.ingredients.map((ingredient, index) => (
                      <li className="ingredients-list" key={index}>
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="pizza-price">${pizza.price}</p>
              </div>
            </div>
            <div className="quantity-controls">
              <Button
                variant="dark"
                className="me-2"
                onClick={() => decrementQuantity(pizza.id)}>
                -
              </Button>
              <div className="quantity">{quantities[pizza.id]}</div>
              <Button
                variant="dark"
                className="ms-2"
                onClick={() => incrementQuantity(pizza.id)}>
                +
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Cart;
