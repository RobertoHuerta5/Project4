import React from 'react'
import Card from 'react-bootstrap/Card';

export default function Footer() {
        return (
          <Card className="text-center">
            <Card.Header>AutoIQ</Card.Header>
            <Card.Body>
              <Card.Title>Essential automotive knowledge, expertly curated and organized by category.</Card.Title>
            </Card.Body>
            <Card.Footer className="text-muted">Made by Roberto Huerta</Card.Footer>
          </Card>
        );
}
