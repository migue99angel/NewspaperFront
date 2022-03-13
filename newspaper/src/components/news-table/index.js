import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import CustomBar from '../custombar';
import SearchBox from '../search-box'
import { CLEAR_ENTRIES } from '../../store/entries/action'
import { useDispatch, useSelector } from 'react-redux';


const NewsTable = () => {
    const dispatch = useDispatch();
    const entries = useSelector((state) => {
        return state.entries
    }) 

    const handleClear = () => {
        dispatch({
            type: CLEAR_ENTRIES
        })
    }

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
                    { entries && entries.map((val, key) => {
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
                <button value="Clear table" onClick={ handleClear }> Clean Table </button>
        </Container>
    )
};


export default NewsTable;