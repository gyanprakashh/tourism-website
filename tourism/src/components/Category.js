import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Cards } from "./Cards";

export function Category() {
  return (
    <Container className='container'>
      <Row className="mb-3">
        <Col xs={12} md={4}>
          <NavLink to="/category/flora">
            <Cards srcc="./images/flora.jpg" />
          </NavLink>
        </Col>
        <Col xs={12} md={4}>
          <NavLink to="/category/adventure">
            <Cards srcc="./images/adventures.jpg" />
          </NavLink>
        </Col>
        <Col xs={12} md={4}>
          <NavLink to="/category/culture">
            <Cards srcc="./images/culture.jpg" />
          </NavLink>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4}>
          <NavLink to="/category/cuisine">
            <Cards srcc="./images/cuisines.jpg" />
          </NavLink>
        </Col>
        <Col xs={12} md={4}>
          <NavLink to="/category/mountain">
            <Cards srcc="./images/himalayas.jpg" />
          </NavLink>
        </Col>
        <Col xs={12} md={4}>
          <NavLink to="/category/festival">
            <Cards srcc="./images/fair.jpg" />
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
}
