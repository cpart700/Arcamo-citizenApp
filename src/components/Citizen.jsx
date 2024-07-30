import React from 'react';

const Citizen = ({ citizen, index, toggleStatus }) => {
    return (
        <li>
            <div>{index + 1}</div>
            <div>{citizen.name}</div>
            <div>{citizen.age}</div>
            <div>{citizen.address}</div>
            {/* <div>{citizen.status}</div> */}
            <div className={`status ${citizen.status.toLowerCase()}`}>{citizen.status}</div>
            <div>
                <button onClick={() => toggleStatus(citizen.id)}>Toggle Status</button>
            </div>
        </li>
    );
};

export default Citizen;
