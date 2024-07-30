import React, { useState, useEffect } from 'react';

const SearchFilter = ({ citizens, setFilteredCitizens }) => {
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const filtered = citizens.filter((citizen) =>
            citizen.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredCitizens(filtered);
    }, [searchQuery, citizens, setFilteredCitizens]);

    return (
        <div>
            <input
                type="text"
                placeholder="Search by name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    );
};

export default SearchFilter;
