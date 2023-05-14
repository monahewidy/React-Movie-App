
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

// import { Button } from 'react-bootstrap';
// import { Languagecontext } from '../../context/counter';
// import React, { useContext } from 'react';



// import { useContext } from "react";
// import { langContext } from "../../context/counter";


const Mainheader = () => {
  const fav=useSelector(state=>state.favmovies)
    const urlToImage = "http://image.tmdb.org/t/p/w500/"
  // const { languag } = useContext(Languagecontext);

    // const {lang}=useContext(langContext)

        return (
            <Navbar className="navbar px-3  navbar-expand navbar-light bg-dark "> 
              <Container >
                <Navbar.Brand href="#home" className="text-light">Movies </Navbar.Brand>
                {/* <Navbar.Brand href="#home" className="text-light">Movies Films {lang}</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="text-light">
                  <Nav className="me-auto">
                  {/* "active" class is added to a <NavLink> component when it is active so you can use CSS to style it */}
                  {/* The "className" prop works like a normal className */}
                    <NavLink className={({isActive})=>isActive?'link-danger':'link-secondary'}  to="/" > Movies</NavLink>

                    <NavLink className="mx-5 link-secondary" to="/search" >SEARCH</NavLink>
                    {/* The "style" prop works like a normal style prop */}
                    {/* <NavLink to="/favmovies" style={(isActive)=>isActive?{color:'red'}:undefined}class="link-secondary" >FavotitMovies</NavLink> */}
                    <NavLink to="/favmovies" className="mx-5 link-secondary" >FavotitMovies</NavLink>

                    <NavLink className="mx-5 link-secondary" to="/movies/:id" src={`/${urlToImage} `}>Moviesdetails</NavLink>
                    <NavLink className="mx-5 link-secondary" to="/Language">Language</NavLink>
                          
                  </Nav>
                  Favmovies: {fav.length}
                  {/* language: {languag}

                  <Button>
                  </Button> */}
                </Navbar.Collapse>
              </Container>
            </Navbar>
          );
}

export default Mainheader;