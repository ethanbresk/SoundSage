import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const CLIENT_ID = "c747fc9f9dfe4db1a1bae8e91ae77d06";
const CLIENT_SECRET = "c1cc8ef3e01040a5814bdcd3bd335d99";

const SongDatabase = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    // API ACCESS TOKEN
    var authParameters = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=client_credendials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET + 'qe'
    }
    
    fetch('https://accounts.spotify.com/api/token', authParameters)
        .then(result => result.json())
        .then(data => console.log(data))
  }, [])

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
                <Button onClick={console.log("Button Clicked")}>
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