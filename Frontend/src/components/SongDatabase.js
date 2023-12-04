import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const CLIENT_ID = "5461474c928648918ff375fd7d51d2c4";
const CLIENT_SECRET = "d681ca8e621744f1b3f5e627e15041a3";

const SongDatabase = () => {
  const [searchVal, setSearchVal] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedAlbumIndex, setSelectedAlbumIndex] = useState(null);

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
    // clear selected:
    setSelectedAlbum(null);
    setSelectedAlbumIndex(null);
    console.log(searchVal ? "SEARCH FOR " + searchVal : "NO SEARCH") // searchVal is the query
    if (!searchVal) return;
    // get Artist ID
    var search_parameters = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        }
    }

    var artist_id = await fetch('https://api.spotify.com/v1/search?q=' + searchVal + '&type=artist', search_parameters)
                            .then(res => res.json())
                            .then(data => { return data.artists.items[0]?.id })


    console.log("Artist ID = " + artist_id)
    if (!artist_id) {
        // no results:
        setAlbums([null]);
        return;
    }

    var returnedAlbums = await fetch('https://api.spotify.com/v1/artists/' + artist_id + '/albums' + '?include_groups=album&market=US&limit=50', search_parameters)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAlbums(data.items)
        })

    // get req given artist ID to get ALL albums from the artist
  }
  console.log(albums)
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
                {albums.map((album, i) => {
                    if (!album) {
                        return(
                            <Card>
                                <Card.Body>
                                    <Card.Title>No Results</Card.Title>
                                </Card.Body>
                            </Card>
                        );
                    }
                    return(
                        <Card
                            onClick={() => {
                                setSelectedAlbum(album);
                                setSelectedAlbumIndex(i);
                            }} 
                            style={{ border: selectedAlbumIndex === i ? "4px solid blue" : "1px solid black" }}
                        >
                            <Card.Img src={album.images[0].url} />
                            <Card.Body>
                                <Card.Title>{album.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    )
                })}
            </Row>
        </Container>
    </div>
  );
}

export default SongDatabase;