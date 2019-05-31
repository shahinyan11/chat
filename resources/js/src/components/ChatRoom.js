import React from 'react';
import data from '../services/data'
import {Dropdown, Figure, Badge} from 'react-bootstrap'
import {Jumbotron, Button, Container, Row, Col} from 'reactstrap';

class ChatRoom extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            active: '1'
        }
    }



    render() {
        const {chat_users} = data;
        return (
            <>
                <div className={'my_dropDown'}>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <div className={'online'}></div>
                    122
                </div>
                <div className={'online_users'}>
                    <ul>
                        {chat_users.map((value)=>(
                            <li>
                                <div className={'avatar'}>
                                    <Figure>
                                        <Figure.Image
                                            alt="171x180"
                                            src={value.img}
                                        />
                                    </Figure>
                                </div>
                                <div>
                                    {value.name}
                                </div>
                                <div className={'call_icons'}>
                                    <i className="material-icons" >
                                        call
                                    </i>
                                    <i className="material-icons" >
                                        videocam
                                    </i>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>


            </>
        );
    }
}

export default ChatRoom
