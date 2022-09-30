import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './Navigation.css';

const SearchBox = () => {
    const [val, setVal] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        history.push(`/search/${val}`);
    };

    return (
        <div className='searchbar_div' onClick={(e)=> e.stopPropagation()}>
            <form id='searchbar_form' onSubmit={(e)=> handleSubmit(e)}>
                <input
                    id='searchbar_input'
                    type="text"
                    value={val}
                    onChange={(e) => setVal(e.target.value)}
                    required
                />
                <button id='searchbar_button'>Search</button>
            </form>
        </div>
    );
};

export default SearchBox;