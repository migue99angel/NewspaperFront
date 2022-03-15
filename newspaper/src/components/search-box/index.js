
import { getSearchResults } from "../../store/entries/action";
import { useState } from 'react';
import { useDispatch } from "react-redux";

const SearchBox = () => {

    const handleSearch = () => {
        dispatch(getSearchResults(terms));
    }

    const [terms = '', setTerms] = useState();
    const dispatch = useDispatch();

    return(
        <form >
            <label>Enter the text to search</label>
            <br/>
            <input 
                name="terms"
                type="text"
                value={terms}
                placeholder="Input some text to search"
                onChange={(e) => setTerms(e.target.value)}
            />
            <br/>
            <input type="button" value="Search" onClick={ handleSearch } placeholder="Search" />
        </form>
    );
};

export default SearchBox;