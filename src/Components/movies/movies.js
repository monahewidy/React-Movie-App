import React, { useEffect, useState } from "react";
import axiosInstance from "./../../axiosConfig/axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import addmovies from './../../store/action/addmovies';
import setmovise from './../../store/action/sitmoves';

const Movies = () => {
  //day3
  // content
  const [pages, setpages] = useState(1);
  const urlToImage = "https://image.tmdb.org/t/p/w500/";
  const dispatch=useDispatch()
  const movie=useSelector((state)=>state.setmove)

  // call data in mounting stage 
  useEffect(()=>{
    axiosInstance
      .get(`/movie/popular?page=${pages}`)
      .then((res) => {
        console.log(res.data.results);
        dispatch( setmovise())
        dispatch( setmovise())
      })
      .catch((err) => {
        console.log(err);
      });

}, [pages])

const previous = () => {
  setpages(pages - 1);
};
const next = () => {
  setpages(pages + 1);
};

function handleddmov(item){ 
  console.log(item);
  dispatch(
  addmovies(item)
  )

  
}
return (
    <div className="row  bg-dark">
      
      <div className="d-flex justify-content-around ">
                <div >
                    <Button disabled={pages === 1} onClick={() => previous()} className="bg-dark border-danger">previous</Button>
                </div>
                <div >
                    <Button disabled={pages === 20} onClick={() => next()} className="bg-dark border-danger">next</Button>
                </div>
            </div>
      {/* items are array so use map */}
      {movie.map((items) => {
        return (
          <Card
            key={items.id}
            style={{ width: "22rem", height: "450px", margin: "30px",borderColor:" black" }}
          >
            <Card.Img
              variant="top"
              src={`${urlToImage}/${items.poster_path} `}
              style={{ width: "330px",height:"250px" }}
            />
            <Card.Body className="text-white bg-secondary">
              <Card.Title>{items.title}</Card.Title>
              <Card.Text>{items.release_date}</Card.Text>

              <div className="col-10">
                <Link  className="btn btn-dark m-1" to={`/movies/${items.id}`}>
                  Go detils
                </Link>
                <Button onClick={()=>handleddmov(items)} className="btn btn-dark m-1"><i class="fa-solid fa-heart text-danger "></i> </Button>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default Movies;
