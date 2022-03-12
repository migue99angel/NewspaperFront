import Form from 'react-bootstrap/Form';

const SearchBox = () => {
    return(
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter the text to search</Form.Label>
        <Form.Control type="search" placeholder="Enter text" />
      </Form.Group>
    );
};

export default SearchBox;