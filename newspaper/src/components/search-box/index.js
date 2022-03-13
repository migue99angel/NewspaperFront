
import EntryService from '../../services/entries.service'
import { useState } from 'react';

const SearchBox = () => {

    const handleSearch = () => {
        EntryService.getSearchedEntries(terms);
    }

    const [terms, setTerms] = useState();
    
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
            <input type="button" value="Search" onClick={ () => handleSearch()} placeholder="Search" />
        </form>
    );
};

export default SearchBox;