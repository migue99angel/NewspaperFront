import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import CustomBar from '../custombar';
import SearchBox from '../search-box'

import { getAllEntries } from '../../store/entries/action'
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return{
        entries: state.selectCurrentEntries
    };
};

const NewsTable = ({entries}) => {
    return(
        <Container>
            <SearchBox/>
            <CustomBar/>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>title</td>
                            <td>link</td>
                        </tr>
                    </thead>
                    <tbody>
                    { entries.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.id}</td>
                                <td>{val.title}</td>
                                <td>{val.link}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
            <button onClick={() => getAllEntries() }>Get Entry List</button>
        </Container>
    )
};




export default connect(mapStateToProps ,null)(NewsTable);