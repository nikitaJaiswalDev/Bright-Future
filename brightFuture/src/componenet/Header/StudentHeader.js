import React from 'react';
import { Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,
    DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';
import  BackImg from '../../images/back.png';
import  BellImg from '../../images/bell.png';
import  MessageImg from '../../images/message.png';
import  UserImg from '../../images/users.png';
import AvtarImg from '../../images/avtar2.png';

export default function StudentHeader() {
  return (
    <div className="headere_home header_db">
        <Navbar color="light" light expand="md">
            <img className="nav_iconns" src={BackImg} alt="image" />
            <NavbarBrand>tutorchive </NavbarBrand>
            <NavbarToggler />
            <Collapse navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem className="heder_lnks">
                        <div id="total_balance" className="totl_coin">2</div>
                        <NavLink>COINS</NavLink>
                    </NavItem>
                    <NavItem className="heder_lnks">
                        <img className="nav_icon" src={UserImg} alt="image" />
                        <NavLink>TUTORS</NavLink>
                    </NavItem>
                    <NavItem className="heder_lnks">
                        <div className="hader_items">
                            <img className="nav_icon" src={MessageImg} alt="image" />
                            <NavLink>MESSSAGES</NavLink>
                        </div>
                        <span className="count_no">1</span>
                    </NavItem>
                    <NavItem className="heder_lnks">
                        <img className="nav_icon1" src={BellImg} alt="image" />
                        <NavLink>ACTIVITY</NavLink>
                    </NavItem>
                    <NavItem>
                        <div className="vrtcal_lne">
                        </div>
                    </NavItem>
                    <NavItem className="heder_lnks prfle-img">
                        <img src={AvtarImg} className="user-img-fluid" alt="image" />
                        <span className="usr_drpdown" >
                            <UncontrolledDropdown setActiveFromChild>
                                <DropdownToggle tag="a" className="user_drpdwn" caret>
                                    <span className="tutor_nme">Nikita</span></DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem tag="a">My Profile</DropdownItem>
                                    <DropdownItem>Account Settings</DropdownItem>
                                    <DropdownItem>Change Password</DropdownItem>
                                    <DropdownItem>Report Issue/Bug</DropdownItem>
                                    <DropdownItem>Logout</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <p className="text-muted tutor_head">STUDENT</p>
                        </span>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    </div>
  )
}
