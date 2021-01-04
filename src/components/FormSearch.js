import React, { useState } from 'react';
import { Card, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import './formSearch.css';

const FormSearch = ({ searchText }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        searchText(text);
    }
    return (
        <form onSubmit={handleSubmit}>
        <Card className="search__box">
             <IconButton className="icon__search" >
             <SearchIcon />
             </IconButton>
             <input type="text" onChange={e => setText(e.target.value)} placeholder="search a movie...."/>
         </Card>
        </form>
    )
}

export default FormSearch;
