import React from 'react';
import { appStyle } from 'appStyle';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Footer = (props) => (
    <Container fluid style={appStyle.footer}>
        <Row className="justify-content-xs-center">
            <Col xs={12}>
                &copy;&nbsp;
                {new Date().getFullYear()}
                &nbsp;Brendan&nbsp;Leonard
            </Col>
            <Col xs={12}>
                <a href="https://github.com/bleonard33/bleonard33.github.io" style={{ color: appStyle.colors.linkText }}>
                    Check out the code for this site
                </a>
            </Col>
        </Row>
    </Container>
)
