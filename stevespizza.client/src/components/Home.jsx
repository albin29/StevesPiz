import { Container, Button } from 'react-bootstrap';

const Home = () => {
    return (
        <Container fluid className="text-center bg-light p-5">
            <h1>Welcome to Stevs Pizzeria!</h1>
            <p>
                The best pizzas in town delivered fresh to your door. Explore our menu and enjoy amazing deals!
            </p>
            <Button href="/menu" variant="primary">Order Now</Button>
        </Container>
    );
};

export default Home;
