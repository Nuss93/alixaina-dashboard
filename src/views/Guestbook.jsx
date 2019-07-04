import React, { Component } from 'react';
import { EmptyHeader } from 'components';
import { Container, Card, Row, Col } from 'reactstrap';

import * as firebase from 'firebase';

class Guestbook extends Component {
    state = {messages: [], load:'1'}
    componentDidMount() {
        this.fetch()
    }
    fetch = () => {
        let that = this, MESSAGES = [];
        firebase.database().ref('RSVP/going/').once('value').then((snapshot) => {
            if(snapshot.exists()) {
                let keys = Object.keys(snapshot.val());
                keys.forEach((message) => {
                    let a = snapshot.val()[message];
                    a.id = message;
                    if(a.message !== ''){
                        MESSAGES.push(a);
                    }
                })
            } else {
                // gg
                console.log('No RSVP')
            }
        }).then(() => {
            firebase.database().ref('RSVP/not_going/').once('value').then((snapshot) => {
                if(snapshot.exists()) {
                    let keys = Object.keys(snapshot.val());
                    keys.forEach((message) => {
                        let a = snapshot.val()[message];
                        a.id = message;
    
                        if(a.message !== ''){
                            MESSAGES.push(a);
                        }
                    })
                } else {
                    // gg
                    console.log('No RSVP')
                }
            }).then(() => {
                console.log(MESSAGES);
                if(MESSAGES.length !== 0){
                    this.setState({
                        messages:MESSAGES,
                        load:'2'
                    })
                } else {
                    this.setState({ load:'3' })
                }
            })
        })
    }
    _renderDisplay = () => {
        let display, smallCards, {messages,load} = this.state;

        if(load === '1') {
            display = <Card body className="pt-5 pb-5"><div className="loader"></div></Card>
        }
        if(load === '2') {
            smallCards = messages.map((message,index) => (
                <Col md={3} key={index} className="mb-4">
                    <Card body>
                        <div>
                            {message.message}
                        </div><br/>
                        <small>From {message.name}</small>
                        <small>{new Date(message.timestamp).toLocaleString()}</small>
                    </Card>
                </Col>
            ))

            display =
            <Row>{smallCards}</Row>
        }
        if(load === '3') {
            display =
            <Card body>
                <div className="text-center" style={{width:'65%', margin:'35px auto'}}>
                    Nothing to display. Probably cause no one wants to go to your wedding. Huhu<br/><b style={{fontSize:'3rem'}}>:(</b>
                </div>
            </Card>
        }
        return display;
    }
    render() {
        return (
            <>
                <EmptyHeader />
                {/* Page content */}
                <Container className='mt--7' fluid>
                    {this._renderDisplay()}
                </Container>
            </>
        );
    }
}

export default Guestbook;