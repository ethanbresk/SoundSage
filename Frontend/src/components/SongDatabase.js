import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const SongDatabase = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="SongDatabase">
        <Container>
            <InputGroup className="mb-3" size="lg">
                <FormControl
                    placeholder='Search Artist Name'
                    type='input'
                    onKeyPress={event => {
                        if (event.key == "Enter") {
                            console.log("Search query: Enter.");
                        }
                    }}
                    onChange={e => setSearch(e.target.value)}
                />
                <Button onClick={console.log("Button Database")}>
                    Search
                </Button>
            </InputGroup>
        </Container>
        <Container>
            <Row className="mx-2 row row-cols-4">
                <Card>
                    <Card.Img src="#" />
                    <Card.Body>
                        <Card.Title>Albums Here</Card.Title>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    </div>
  );
}

export default SongDatabase;