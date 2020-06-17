import React, { Component } from 'react'
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import {Avatar} from "@material-ui/core"

export default class Profile extends Component {
    render() {
        return (
            <div>

                <Card style={{backgroundColor: `rgba(0, 0, 0, 0.8)`}}>
                    <Card.Body>
                        <Avatar alt="Remy Sharp" src="avatar.jpg" />
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

