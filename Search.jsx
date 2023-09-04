import React from 'react'

const Search = ({ search, setsearch }) => {
    
    return (
        <div className="search">
            <h2>Pesquisar:</h2>
            <input type="text" value={search}
                onChange={(e) => setsearch(e.target.value)}
                placeholder='digite para pesquisar ' />
        </div>
    )
}

export default Search