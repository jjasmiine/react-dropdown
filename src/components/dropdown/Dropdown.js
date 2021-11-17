import React, { useState } from 'react';
import { MenuItems } from '../MenuItem'
import { Link } from 'react-router-dom';
import '../dropdown/Dropdown.css';

function Dropdown() {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!setClick)

    return (
        <>
            <ul onClick={handleClick}
                className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    );
}


export default Dropdown;