import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// reactstrap components
import { Button, Card, CardHeader, CardBody, NavItem, NavLink, Nav, Progress, Table, Container, Row, Col } from "reactstrap";


import EmptyHeader from "components/Headers/EmptyHeader.jsx";
import firebase from 'firebase/app';
import database from 'firebase/database';

import { convertCompilerOptionsFromJson } from "typescript";
import { options } from "../config";

class Index extends React.Component {
  state = {
    going: 0,
    notgoing: 0,
  };
  componentWillUnmount() {
    firebase.database().ref(`${options.path}/RSVP/going/`).off();
    firebase.database().ref(`${options.path}/RSVP/not_going/`).off();
  }
  componentDidMount() {
    this.fetch()
  }
  fetch = () => {
    let that = this
    firebase.database().ref(`${options.path}/RSVP/going/`).on('value', function(snapshot) {
      let count_going = 0;
      if(snapshot.exists()) {
        let keys = Object.keys(snapshot.val())
        keys.forEach((id) => {
          count_going = count_going + 1
          if(snapshot.val()[id].pax !== 0){
            count_going = count_going + snapshot.val()[id].pax
          }
        })
        that.setState({going:count_going}, () => {console.log(that.state.going)})
      } else {
        // gg
      }
    })

    firebase.database().ref(`${options.path}/RSVP/not_going/`).on('value', function(snapshot2) {
      let count_notgoing = 0;
      if(snapshot2.exists()) {
        let keys2 = Object.keys(snapshot2.val())
        keys2.forEach((id) => {
          count_notgoing = count_notgoing + 1
        })
        that.setState({notgoing:count_notgoing}, () => {console.log(that.state.notgoing)})
      } else {
        // gg
      }
    })
  }
  
  render() {
    return (
      <>
        <EmptyHeader going={this.state.going} notgoing={this.state.notgoing
        } />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col md={6}>
              <Card body className="shadow border-0 mb-4 mb-xl-0">
                <Row className="mt-3 mb-3 align-items-center">
                  <Col xs={8}>
                    <h2 className="mb-0"># Guests Going</h2>
                  </Col>
                  <Col xs={4} className="text-right">
                    <span style={{fontSize:'3rem', fontWeight:'bold'}}>{this.state.going}</span>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col md={6}>
              <Card body className="shadow border-0 mb-4 mb-xl-0">
                <Row className="mt-3 mb-3 align-items-center">
                  <Col xs={8}>
                    <h2 className="mb-0"># Guests Not Going</h2>
                  </Col>
                  <Col xs={4} className="text-right">
                    <span style={{fontSize:'3rem', fontWeight:'bold'}}>{this.state.notgoing}</span>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Index;
