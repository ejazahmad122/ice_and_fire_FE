import { Input } from '@mui/material';
import React, {useState} from 'react';
import { Button } from 'react-bootstrap';

const SearchField = (props) => {
    const [search, setsearch] = useState('');
    function searchHandler(e) {
        e.preventDefault()
        props.searchHandler(search)
    }
    return (
        <div>
            <form onSubmit={searchHandler}>
                <Input type="text" onChange={e => setsearch(e.target.value)} placeholder='search here...' style={{borderRadius:'10px'}} />
                <Button type='submit' >search</Button>
            </form>
        </div>
    );
}

export default SearchField;
