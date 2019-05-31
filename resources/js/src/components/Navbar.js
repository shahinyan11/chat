import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';
import data from '../services/data'
import Dropdown from 'react-bootstrap/Dropdown'
import ChatRoom from "./ChatRoom";

class Navbar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            active: '1'
        }
    }

    handleClick (id)  {
        this.setState({active: id})
    }

    render() {
        const {navItems} = data;
        const {active} = this.state;
        let submanu = [];
        navItems.filter((value)=>{
            return value.id === active ? submanu = value.submanu : false
        })
        return (
            <>

                <div className={'my_left'}>
                    <Nav vertical>
                        {
                            navItems.map((value) => (
                                <NavItem key={value.id} onClick={() => {this.handleClick(value.id)}}>
                                    <NavLink  href="#"  className={value.id === active? 'active': null }>
                                        <i className="material-icons" >
                                            {value.name}
                                        </i>
                                    </NavLink>
                                </NavItem>
                            ))
                        }
                    </Nav>
                </div>
                <div className={'my_right'}>
                    <ChatRoom/>
                </div>
            </>
        );
    }
}

export default Navbar
