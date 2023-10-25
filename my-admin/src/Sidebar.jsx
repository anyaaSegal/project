import React from 'react';
import { BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './SidebarElements';

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

const Sidebar = () => {
    return (
      <>
        <Nav>
          <NavLink to="/">
            <h1> StelStay </h1>
          </NavLink>
          <Bars />
          <NavMenu>
              <NavLink to="/" activeStyle>
                  Dashboard
              </NavLink>
              <NavLink to="./Contact" activeStyle>
                  Contact
              </NavLink>
              <NavLink to="./Login" activeStyle>
                  Login
              </NavLink>
          </NavMenu>
          <NavBtn>
              <NavBtnLink to="/Login"> Login </NavBtnLink>
          </NavBtn>
        </Nav>
      </>
    );
  };
  
  export default Sidebar;