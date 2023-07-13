import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { Card, CardHeader, CardBody, Container, Row, Col, UncontrolledTooltip
} from "reactstrap";
// core components
import EmptyHeader from "components/Headers/EmptyHeader.jsx";

const MapWrapper = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={13}
      center={{ lat: props.lat, lng: props.lng }}
      defaultOptions={{
        scrollwheel: false,
        styles: [
          {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [{ color: "#444444" }]
          },
          {
            featureType: "landscape",
            elementType: "all",
            stylers: [{ color: "#f2f2f2" }]
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [{ saturation: -100 }, { lightness: 45 }]
          },
          {
            featureType: "road.highway",
            elementType: "all",
            stylers: [{ visibility: "simplified" }]
          },
          {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [{ color: "#5e72e4" }, { visibility: "on" }]
          }
        ]
      }}
    >
      <Marker position={{ lat: props.lat, lng: props.lng }} draggable={props.draggable} onDrag={props.onMarkerDrag} onMouseDown={props.onMarkerClick} onMouseUp={props.onMarkerRelease} />
    </GoogleMap>
  ))
);


class GPS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      draggable: true,
      center: {
        lat:3.1390,
        lng:101.6869,
      },
      // CHANGE LAT LNG ACCORDING, IT CAN BE A STATE, ETC.
      lat: 3.1390,
      lng: 101.6869,
    };
  }

  handleMarkerDrag = (e) => {
    let lat = e.latLng.lat();
    let lng = e.latLng.lng()
  }

  // CLICKING ON MOUSE
  handleMarkerClick = (e) => {
    this.setState({
      draggable:false
    }, () => {console.log('click');})
    let lat = e.latLng.lat();
    let lng = e.latLng.lng()
    console.log(lat, lng);
    
    // this.setState({ isMarkerShown: false })
    // this.delayedShowMarker()
  }
  // RELEASE AND DROPPING 
  handleMarkerRelease = (e) => {
    let lat = e.latLng.lat();
    let lng = e.latLng.lng()

    this.setState({
      draggable:true,
      lat: lat,
      lng: lng
    }, () => {console.log('release',lat,lng);})
    
    console.log(lat, lng);
    
    // this.setState({ isMarkerShown: false })
    // this.delayedShowMarker()
  }
  
  render() {
    return (
      <>
        <EmptyHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <div className="col">
              <Card className="shadow border-0">
                <MapWrapper
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAiJ8_1FPmNS5BNZmRoxZKYKZ2J7DFQGvg"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={
                    <div
                      style={{ height: `600px` }}
                      className="map-canvas"
                      id="map-canvas"
                    />
                  }
                  mapElement={
                    <div style={{ height: `100%`, borderRadius: "inherit" }} />
                  }
                  lat={this.state.lat} lng={this.state.lng}
                  draggable={this.state.draggable}
                  // ENABLE/DISABLE ANY OF THESE DEPENDING ON HOW YOU NEED THE METHODS
                  onMarkerClick={this.handleMarkerClick}
                  onMarkerRelease={this.handleMarkerRelease}
                  onMarkerDrag={this.handleMarkerDrag}
                />
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default GPS;
