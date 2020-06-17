import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button, Card, Col,Row, Container } from "react-bootstrap"
import Profile from "./component/profile"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BottomNavigation, BottomNavigationAction, Container as MContainer } from "@material-ui/core"
import { AccessAlarm } from "@material-ui/icons"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0
    };
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

    this.setState({ windowWidth, windowHeight });
  }


  render() {

    const styles = {
      showSidebar: this.state.windowWidth > 800,
    };
    return (
      <div>
      <Profile />
        <Container fluid>
          <Row>
          {styles.showSidebar && (
            <Col md="auto">
              <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">Active</Nav.Link>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
                <Nav.Link eventKey="disabled" disabled>
                  Disabled
                </Nav.Link>
              </Nav>
              </Col>
          )}
              <Col>
              <MContainer maxWidth="lg">

                <Card>
                  <Card.Body>
                    <Card >
                      <Card.Header as="h5">งานที่เหมาะกับคุณ</Card.Header>
                      <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                          With supporting text below as a natural lead-in to additional content.
              </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                    <Card >
                      <Card.Header as="h5">Your FOLLOWS</Card.Header>
                      <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                          With supporting text below as a natural lead-in to additional content.
              </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                    <Card >
                      <Card.Header as="h5">งานที่เหมาะกับคุณ</Card.Header>
                      <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                          With supporting text below as a natural lead-in to additional content.
              </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                    <Card >
                      <Card.Header as="h5">งานที่เหมาะกับคุณ</Card.Header>
                      <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                          With supporting text below as a natural lead-in to additional content.
              </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                    <Card >
                      <Card.Header as="h5">งานที่เหมาะกับคุณ</Card.Header>
                      <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                          With supporting text below as a natural lead-in to additional content.
              </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Card.Body>
                </Card>

              </MContainer>

              {!styles.showSidebar && (
                <BottomNavigation style={{
                  width: '100%',
                  position: 'fixed',
                  bottom: 0,
                }}>
                  <BottomNavigationAction label="Recents" value="recents" icon={<AccessAlarm />} />
                  <BottomNavigationAction label="Favorites" value="favorites" icon={<AccessAlarm />} />
                  <BottomNavigationAction label="Nearby" value="nearby" icon={<AccessAlarm />} />
                  <BottomNavigationAction label="Folder" value="folder" icon={<AccessAlarm />} />
                </BottomNavigation>)}
            </Col>
          </Row>
        </Container>





      </div >
    );
  }
}

export default App;

