
import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

const services = [
    { title: 'Alquileres de Extintores', description: 'Servicio de alquiler de extintores para eventos y empresas.' },
    { title: 'Venta de Equipos Nuevos', description: 'Extintores y equipos de seguridad de alta calidad a la venta.' },
    { title: 'Servicios a Empresas y Comercios', description: 'Ofrecemos mantenimiento y revisión para negocios.' },
    { title: 'Servicios a Escuelas y Consorcios', description: 'Revisión y suministro de extintores para instituciones educativas y residenciales.' },
    { title: 'Servicios a Cooperativas y Municipios', description: 'Servicios de seguridad contra incendios para organismos municipales.' }
];

const ServicesSection = () => {
    return (
        <Container className="my-5">
            <h2 className="text-center mb-4">Nuestros Servicios</h2>
            <Row>
                {services.map((service, index) => (
                    <Col key={index} md={4} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{service.title}</Card.Title>
                                <Card.Text>{service.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ServicesSection;
