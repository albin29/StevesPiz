import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Popup from './components/Popup'; // Import the Popup component

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [popupMessage, setPopupMessage] = useState(''); // State for popup message
    const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

    const addToCart = (pizza) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.name === pizza.name);
            if (existingItem) {
                // If the pizza already exists in the cart, increase the quantity
                const updatedItems = prevItems.map(item =>
                    item.name === pizza.name ? { ...item, quantity: item.quantity + 1 } : item
                );
                setPopupMessage(`${pizza.name} quantity increased to ${existingItem.quantity + 1}.`);
                return updatedItems;
            } else {
                // If it's a new pizza, add it to the cart with quantity 1
                setPopupMessage(`${pizza.name} added to cart.`);
                return [...prevItems, { ...pizza, quantity: 1 }];
            }
        });
        setShowPopup(true); // Show the popup
    };

    const removeFromCart = (index) => {
        const itemName = cartItems[index].name; // Get the name of the item being removed
        setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
        setPopupMessage(`${itemName} removed from cart.`);
        setShowPopup(true); // Show the popup
    };

    // Function to close the popup
    const handleClosePopup = () => {
        setShowPopup(false);
    };

    // Automatically hide the popup after 3 seconds
    React.useEffect(() => {
        if (showPopup) {
            const timer = setTimeout(() => {
                setShowPopup(false);
            }, 3000); // 3000 milliseconds = 3 seconds
            return () => clearTimeout(timer);
        }
    }, [showPopup]);

    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu addToCart={addToCart} />} />
                    <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
                </Routes>
                {showPopup && <Popup message={popupMessage} onClose={handleClosePopup} />} {/* Render the popup */}
            </div>
        </Router>
    );
}

export default App;
