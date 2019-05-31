import React from 'react';
import {Jumbotron, Button, Container, Row, Col} from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';


class Posts extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            rating: 1
        }
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }

    render() {
        const {rating} = this.state;
        return (
            <>
                <div className={'message_bord'}></div>
                <div className={'send_bord'}>
                    <div>
                        <i className="material-icons" >
                            photo_camera
                        </i>
                    </div>
                    <div className={'message'}>
                        <input type="text"/>
                    </div>
                    <div>

                        <i className="material-icons" >
                            sentiment_satisfied_alt
                        </i>
                        <i className="material-icons" >
                        send
                    </i>
                    </div>
                </div>
            </>
        );
    }
};

export default Posts;
