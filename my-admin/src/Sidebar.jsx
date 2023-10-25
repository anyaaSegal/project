import React from 'react';
import { BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';
import {
    FaAddressBook,
    FaBars,
    FaLock,
    FaTh,
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
/*
function Sidebar() {
  return (
    <aside id="sidebar">
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                StelStay
            </div>
        </div>
        {/* components below starting with B are icons imported */
    /*    <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href=''> 
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href=''>
                    <BsFillArchiveFill className='icon'/> Item 1
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href=''>
                    <BsFillGrid3X3GapFill className='icon'/> Item 2
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href=''>
                    <BsPeopleFill className='icon'/> Item 3
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href=''>
                    <BsListCheck className='icon'/> Item 4
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href=''>
                    <BsMenuButtonWideFill className='icon'/> Item 5
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href=''>
                    <BsFillGearFill className='icon'/> Item 6
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar; */

const Sidebar = ({children}) => {
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaTh/>
        },
        {
            path:"/contact",
            name:"Contact",
            icon:<FaAddressBook/>
        },
        {
            path:"/login",
            name:"Login",
            icon:<FaLock/>
        },
    ];
    return (
        <div className='container'>
            <div className='sidebar'>
                <div className='top_section'>
                    <h1 className='logo'> StelStay </h1>
                    <div className='bars'>
                        <FaBars />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeClassName="active">
                            <div className='icon'> {item.icon} </div>
                            <div className='link_text'> {item.name} </div>
                        </NavLink>
                    )
                    )
                }
            </div>
            <main> {children} </main>
        </div>
    );
};
  
  export default Sidebar;