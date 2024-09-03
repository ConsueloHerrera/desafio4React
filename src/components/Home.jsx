import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

function Home() {
  const [pizzaData, setPizzaData] = useState([]);

  const url = "http://localhost:5000/api/pizzas";

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPizzaData(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {pizzaData.map((pizza) => (
            <div className="col-md-4 mb-4" key={pizza.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={pizza.img}
                  alt={`Imagen ${pizza.name}`}
                />
                <Card.Body>
                  <Card.Title>Pizza {pizza.name}</Card.Title>
                  <Card.Text>
                    <strong>Ingredientes:</strong>{" "}
                    <ul>
                      {pizza.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </Card.Text>
                  <Card.Text>
                    <strong>Precio:</strong> ${pizza.price}
                  </Card.Text>
                  <div className="button-container">
                    <Button variant="light" className="me-2">
                      Ver más
                    </Button>
                    <Button variant="dark">Añadir</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
