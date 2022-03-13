import Form from 'react-bootstrap/Form';
import EntryService from '../../services/entries.service'

const SearchBox = () => {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }
    return(
        <form onSubmit={this.gotEmail}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter the text to search</Form.Label>
                <Form.Control type="search" placeholder="Enter text" />
            </Form.Group>
            <button onClick={() => {EntryService.getAllEntries()} }>HTTP Request</button>
        </form>
    );
};

export default SearchBox;