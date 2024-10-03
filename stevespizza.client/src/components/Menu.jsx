import { useState } from 'react'; // Only import useState
import PropTypes from 'prop-types'; // Import PropTypes for validation
import { Card, Button, Row, Col, Container } from 'react-bootstrap';

const Menu = ({ addToCart }) => {
    const [pizzas] = useState([
        { name: 'Margherita', price: 85, description: 'Tomato, mozzarella, and basil' },
        { name: 'Pepperoni', price: 95, description: 'Tomato, mozzarella, and pepperoni' },
        { name: 'Quattro Formaggi', price: 100, description: 'Four cheeses: mozzarella, gorgonzola, parmesan, and ricotta' },
        { name: 'Vegetariana', price: 90, description: 'Tomato, mozzarella, and mixed vegetables' }
    ]);

    return (
        <Container>
            <h2 className="my-4 text-center">Our Menu</h2>
            <Row>
                {pizzas.map((pizza, index) => (
                    <Col key={index} md={4} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{pizza.name}</Card.Title>
                                <Card.Text>{pizza.description}</Card.Text>
                                <Card.Text><strong>Price: {pizza.price} SEK</strong></Card.Text>
                                <Button variant="primary" onClick={() => addToCart({ ...pizza, quantity: 1 })}>
                                    Add to Cart
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

// Define prop types for validation
Menu.propTypes = {
    addToCart: PropTypes.func.isRequired, // Validate addToCart prop
};

export default Menu;
