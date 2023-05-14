import React, { useEffect, useState } from 'react';
import axiosInstance from './../../axiosConfig/axios';

import Card from 'react-bootstrap/Card';

import { useParams } from 'react-router-dom'; // to select id of movie

const Moviesdetails = () => {
    const [movies, setmovies] = useState([]);
    const urlToImage = "https://image.tmdb.org/t/p/w500/"
    const {id}=useParams () // to select id of movie

    useEffect(() => {

        axiosInstance.get(
        `movie/${id}`).then((res) => {
            console.log((res.data)
            )
            setmovies(res.data)

        })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        
<div>
{/* card react bootstrap */}
    <Card style={{ width: '20rem', height: '500px', margin: '20px',borderColor:"blue" }} className="text-white bg-secondary">

        <Card.Img variant="top" src={`${urlToImage}/${movies.backdrop_path} `} style={{ width: "300px",height: "500px" }} />
        <Card.Body>
            <Card.Title>{movies.title}</Card.Title>
            <Card.Text>
                {movies.release_date}
            </Card.Text>
            <Card.Text>
                {movies.overview}
            </Card.Text>
            </Card.Body>
    </Card>

</div>
            )
        }



export default Moviesdetails;
