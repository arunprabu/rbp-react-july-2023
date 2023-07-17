import React from 'react';
import MenuItem from './MenuItem/MenuItem';

const MenuList = () => {
  const menus = [
    {
      id: 1,
      title: 'Home',
      url: '/'
    },
    {
      id: 2,
      title: 'About',
      url: '/about'
    },
    {
      id: 3,
      title: 'Contact',
      url: '/contact'
    },
    {
      id: 4,
      title: 'Unit Testing',
      url: '/unit-testing-demo'
    }
  ];

  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      {menus.map((menu) => {
        // Do not send all props unnecessarily
        return <MenuItem key={menu.id} title={menu.title} url={menu.url} />;
      })}
    </ul>
  );
};

export default MenuList;
