import PropTypes from 'prop-types'; // Import PropTypes for validation
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Cart = ({ cartItems, removeFromCart }) => {
    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <Container>
            <h2 className="my-4 text-center">Your Cart</h2>
            {cartItems.length === 0 ? (
                <h5 className="text-center">Your cart is currently empty. Start adding pizzas!</h5>
            ) : (
                <Row>
                    {cartItems.map((item, index) => (
                        <Col key={index} md={6} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>Price: {item.price} SEK</Card.Text>
                                    <Card.Text>Quantity: {item.quantity}</Card.Text>
                                    <Button variant="danger" onClick={() => removeFromCart(index)}>Remove</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
            <h3 className="text-right">Total: {totalPrice} SEK</h3>
        </Container>
    );
};

// Define prop types for validation
Cart.propTypes = {
    cartItems: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired,
        })
    ).isRequired,
    removeFromCart: PropTypes.func.isRequired, // Validate removeFromCart prop
};

export default Cart;
