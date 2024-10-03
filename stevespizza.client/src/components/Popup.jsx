import PropTypes from 'prop-types'; // Import PropTypes for validation
import { Toast } from 'react-bootstrap';

const Popup = ({ message, onClose }) => {
    return (
        <Toast onClose={onClose} style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 999 }}>
            <Toast.Body>{message}</Toast.Body>
        </Toast>
    );
};

// Define prop types for validation
Popup.propTypes = {
    message: PropTypes.string.isRequired, // Message must be a string and is required
    onClose: PropTypes.func.isRequired,    // onClose must be a function and is required
};

export default Popup;
