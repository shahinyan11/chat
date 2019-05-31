import React from 'react';
import {Container, Row, Col} from 'reactstrap';

class RightBar extends React.Component {
    render() {
        return (
            <>

                <Container>
                    <Row>
                        <Col>
                            <h3>Last 50 photos</h3>
                        </Col>
                    </Row>

                </Container>
            </>
        );
    }
}

export default RightBar
