import React, { Component } from 'react';
import firebase from 'firebase/app';
import { EmptyHeader, ResponseDisplay } from 'components';
import { Container, Card, Row, Col, InputGroupText, InputGroupAddon, Input, InputGroup
 } from 'reactstrap';
import { options } from '../config';

class Guestlist extends Component {
    state = {going:[], load:'1', not:[], loadnot:'1', search:''}
    // ================================================
    //               HANDLE SEARCH BAR
    // ================================================
    handleSearchBar = (event) => {
        this.setState({search : event.target.value, currentPage:1})
    }
    componentWillUnmount() {
        firebase.database().ref(`${options.path}/RSVP/going/`).off();
        firebase.database().ref(`${options.path}/RSVP/not_going/`).off();

    }
    componentDidMount() {
        this.fetchGuest()
    }
    fetchGuest = () => {
        let that = this;
        firebase.database().ref(`${options.path}/RSVP/going`).on('value', function(snapshot){
            let DATA = [];
            if(snapshot.exists()) {
                let keys = Object.keys(snapshot.val())
                keys.forEach((response_id) => {
                    let a = snapshot.val()[response_id];
                    a.id = response_id;

                    DATA.push(a);
                })

                that.setState({going: DATA, load:'2'}, () => {console.log(that.state.going)})
            } else {
                that.setState({load:'3'})
                console.log('No RSVP')
            }
        })

        firebase.database().ref(`${options.path}/RSVP/not_going`).on('value', function(snapshot2){
            let DATA2 = []
            if(snapshot2.exists()) {
                let keys2 = Object.keys(snapshot2.val())
                keys2.forEach((response_id) => {
                    let b = snapshot2.val()[response_id];
                    b.id = response_id;

                    DATA2.push(b);
                })

                that.setState({not: DATA2, loadnot:'2'}, () => {console.log(that.state.not)})
            } else {
                that.setState({loadnot:'3'})
                console.log('No RSVP')
            }
        })
    }
    _renderTableSearchBar = () => {
        let display;

        display =
        <Row style={{alignItems:'flex-start', marginBottom:'1.5rem', paddingBottom:'1.5rem', borderBottom:'1px solid rgba(0,0,0,0.3)'}}>
            <Col md={8}>
                <InputGroup className="no-border" style={{marginBottom:'0'}}>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="fas fa-search fa-1x" />
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Search name" onChange={this.handleSearchBar}/>
                </InputGroup>
            </Col>
            {/* <Col md={4} className="d-flex justify-content-end align-items-center">
                <MembersCSV checkParent={this.props.checkParent} />

                <Button color="info" style={{position:'relative',zIndex:'5', fontSize:'15px', fontWeight:'700', borderRadius:'50%', padding:'10px 12px', margin:'0 5px'}}
                onClick={() => {this.setState({displayApproved:'1', displayPending:'1'}, () => {this.props.checkParent()})}}
                >
                <i className="now-ui-icons arrows-1_refresh-69" />
                </Button>
            </Col> */}
        </Row>

        return display;
    }
    _renderRSVP = () => {
        let display, {load} = this.state;
        // ARRAY OF FILTERED DATA FROM SEARCH BAR
        let filteredData = this.state.going.filter(
            (data) => {
              return data.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            }
        );
        if(load === '1') {
            display = <div className="pt-5 pb-5"><div className="loader"></div></div>
        }
        if(load === '2') {
            let DATA = filteredData;
            let SORT = DATA.sort((a, b) => b.timestamp - a.timestamp);
            let GOING = SORT.map((data, index) => (
                <ResponseDisplay key={index} data={data}/>
            ));

            // let DATANOT = this.state.not;
            // let SORTNOT = DATANOT.sort((a, b) => a.name.localeCompare(b.name));
            // let NOT = SORTNOT.map((data, index) => (
            //     <ResponseDisplay key={index} data={data}/>
            // ));



            display =
            <div>
                <p className="h2 mb-3">ATTENDING GUESTS</p>
                {GOING}
                {/* <hr/> */}

                {/* <p className="h4 mb-4">Not Going</p>
                {NOT} */}
            </div>
        }
        if(load === '3') {
            display =
            <div className="text-center">
                No one has RSVP yet<br/><b style={{fontSize:'3rem'}}>:(</b>
            </div>
        }

        return display;
    }
    render() {
        return (
            <>
                <EmptyHeader />
                {/* Page content */}
                <Container className='mt--7' fluid>
                    <Card className="border-0 shadow" body>
                        {this._renderTableSearchBar()}

                        {this._renderRSVP()}
                    </Card>
                </Container>
            </>
        );
    }
}

export default Guestlist;