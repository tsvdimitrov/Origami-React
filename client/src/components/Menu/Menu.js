import { useState } from 'react';

import MenuItem from './MenuItem';

import './Menu.css';
import { MENU_ITEMS } from './MenuConstants';


const Menu = () => {

    const [currentItem, setCurrentItem] = useState();

    return (
        <aside className="menu">
            {MENU_ITEMS.map(x =>
                < MenuItem key={x.id} id={x.id} onClick={setCurrentItem} >{x.text}</MenuItem>
            )}
        </aside >
    )
};

export default Menu;