import { React , useState , useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import axiosInstance from './../../axiosConfig/axios';


const Search =()=> {

  const [movies , setMovies] = useState([])
  const [searchValue , setSearchValue] = useState("")
  const urlToImage = "https://image.tmdb.org/t/p/w500/"


  useEffect(()=>{
  axiosInstance.get(`/search/movie?&query=${searchValue}`)
    .then(res =>{
    
      setMovies(res.data.results)
      
    console.log(res);
    
    }).catch(error => console.log(error))
  } , [searchValue])



  return (
    <div className='add-page'>
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
            type="text"
            placeholder='Search for a movie'
            value={searchValue}
            onChange={(e)=> setSearchValue(e.target.value)}
            />
            {
            
              //  movies.map((movie)=>
              //   <li key={movie.imdb_id}>{movie.title}</li>)}

              movies.map((item,index)=>
            <Card key={index} style={{ width: '18rem', height: '300px', margin: '20px' }} >

              <Card.Img
              variant="top"
              src={`${urlToImage}/${item.poster_path} `}
              style={{ width: "270px",height:"290px" }}
            />
                                      <Card.Body>
                                          <Card.Title>{item.title}</Card.Title>
                                          <Card.Text>
                                              {item.release_date}
                                          </Card.Text> </Card.Body>
            </Card>)}
          
          </div>
        </div>
      </div>
    </div>
  )
}





export default Search
