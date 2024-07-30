import React, { useState, useEffect } from 'react';
import Citizen from './Citizen';
import SearchFilter from './SearchFilter';

const Citizens = () => {
    const initialCitizens = [
        { id: 1, name: 'Ines Valeztina', age: 30, address: 'Seoul, South Korea', status: 'Active' },
        { id: 2, name: 'Carcel Escalante', age: 25, address: 'Seoul, South Korea', status: 'Active' },
        { id: 3, name: 'Choi Sarang', age: 40, address: 'Tunghaan, Mignlanilla Cebu', status: 'Inactive' },
        { id: 4, name: 'Gu Won', age: 35, address: 'Bamban Tarlac', status: 'Active' },
        { id: 5, name: 'Alice Guo', age: 38, address: 'Mayor Office ng Bamban Tarlac', status: 'Inactive' },
        { id: 6, name: 'Yung Ying', age: 60, address: 'Honor of Kings Jungle', status: 'Active' },
        { id: 7, name: 'Mike Bustamante', age: 45, address: 'St. Cecilias College', status: 'Inactive' },
        { id: 8, name: 'Mailin Tayao', age: 28, address: 'LaLibertad, Negros Oriental', status: 'Active' },
        { id: 9, name: 'Cath Arcamo', age: 55, address: 'Carcar City of Cebu', status: 'Active' },
        { id: 10, name: 'Jane Hermosa', age: 65, address: 'Filipinas', status: 'Inactive' },
    ];

    const [citizens, setCitizens] = useState(initialCitizens);
    const [filteredCitizens, setFilteredCitizens] = useState(initialCitizens);

    const toggleStatus = (id) => {
        setCitizens((prevCitizens) => {
            return prevCitizens.map((citizen) =>
                citizen.id === id
                    ? { ...citizen, status: citizen.status === 'Active' ? 'Inactive' : 'Active' }
                    : citizen
            );
        });
    };

    useEffect(() => {
        setFilteredCitizens(citizens);
    }, [citizens]);

    return (
        <div>

            <SearchFilter citizens={citizens} setFilteredCitizens={setFilteredCitizens} />
            <h2>Citizens List</h2>
            <ul>
                <li className="header">
                    <div>No.</div>
                    <div>Name</div>
                    <div>Age</div>
                    <div>Address</div>
                    <div>Status</div>
                    <div>Actions</div>
                </li>
                {filteredCitizens.map((citizen, index) => (
                    <Citizen key={citizen.id} citizen={citizen} index={index} toggleStatus={toggleStatus} />
                ))}
            </ul>
        </div>
    );
};

export default Citizens;
