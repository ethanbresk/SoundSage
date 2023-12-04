import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const CLIENT_ID = "5461474c928648918ff375fd7d51d2c4";
const CLIENT_SECRET = "d681ca8e621744f1b3f5e627e15041a3";

const SongDatabase = () => {
  const [searchVal, setSearchVal] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    // API ACCESS TOKEN
    var authParameters = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
    
    fetch('https://accounts.spotify.com/api/token', authParameters)
        .then(result => result.json())
        .then(data => setAccessToken(data.access_token))
  }, [])

// SEARCH FUNCTION
  async function search() {
    console.log("SEARCH " + searchVal) // searchVal is the query

    // get Artist ID

    // get req given artist ID to get ALL albums from the artist
  }

  return (
    <div className="SongDatabase">
        <Container>
            <InputGroup className="mb-3" size="lg">
                <FormControl
                    placeholder='Search Artist Name'
                    type='input'
                    onKeyPress={event => {
                        if (event.key == "Enter") {
                            search();
                        }
                    }}
                    onChange={e => setSearchVal(e.target.value)}
                />
                <Button onClick={() => {search()}}>
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