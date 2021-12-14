import React, { useState } from 'react';
import "../styles/Menu/menu.css";
import { MainLayout, InnerLayout } from '../components/Menu/Layouts';
import menu from '../data/menu';
import Menu from '../components/Menu/Menu';
import Button from '../components/Menu/Button';

const allButtons = ['ALL', ...new Set(menu.map(item => item.category))]

export default function MenuScreen() {
    const [menuItem, setMenuItems] = useState(menu);
    const [button] = useState(allButtons);

    const filter = (button) => {

        if(button === 'ALL'){
            setMenuItems(menu);
            return;
        }

        const filteredData = menu.filter(item => item.category === button);
        setMenuItems(filteredData);
    }
    return (
        <div className="menu">
            <div className="headerStage">
                <div className="headerText">Our Menu</div>
            </div>
            <div>
                <MainLayout>
                    <InnerLayout>
                        <Button filter={filter} button={button} />
                        <Menu menuItem={menuItem} />
                    </InnerLayout>
                </MainLayout>
            </div>
        </div>
    )
}
