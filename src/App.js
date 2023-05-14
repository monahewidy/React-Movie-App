
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Footer from "./Components/Footer/Footer"
import Mainheader from "./Components/mainheader/mainheader";

import Movies from './Components/movies/movies';
import Moviesdetails from './Components/moviesdetails/moviesdetails';
import Notfound from './Components/notfound/notfound';
import Search from './Components/search/search';
import Favorate from './Components/favoratemovies/favoratemovies';

// import Language from './Components/Language/language'

// import {LangProvider } from "./components/context/counter";
// import { useState } from "react";




function App() {
  // const [lang,setLang]= useState('en')

  return (
    
    <div className=" ">
      
      <div>
    
      <Mainheader></Mainheader> 

      <Routes>
        <Route path='/' element={<Movies/>}/>
        {/* params */}
        <Route path='/movies/:id' element={<Moviesdetails/>}/> 
        <Route path='/favmovies' element={<Favorate/>}/>
        <Route path='/search' element={<Search/>}/>
        {/* <Route path='/language' element={<Language/>}/> */}
        <Route path='*' element={<Notfound/>}/> 
    
      </Routes>

      <Footer></Footer>

      </div>


    </div>
  );
}

export default App;
