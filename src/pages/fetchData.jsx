import { useEffect, useState } from "react";
import { GetMovies } from "../services/postApi";
import {BsCaretUpFill, BsCaretDownFill} from 'react-icons/bs';
import {Link} from 'react-router-dom';

const Fetch = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await GetMovies("movies", "kannada", "all", "voting");
      setMovies(data.result);
    };
    fetchMovies();
    console.log(movies);
  }, []);



  return (
    <>
      <div className="bg-primary d-flex justify-content-between">
      <h1 style={{margin:'0 20px',color:'white'}}>Movies</h1>
      <h1 className="text-warning" ><Link to="/company" style={{margin:'0px 30px',cursor:"pointer",textDecoration:'none',color:'white'}}>Comapny Info</Link></h1>
      </div>
             
        {movies.map(item => (
                <div class="container" style={{border:'2px solid black',width:'800px',margin:'20px 300px'}}>
                    <div class="row my-4">
                         <div className="col-md-3 row align-items-center justify-content-center" style={{width:'150px',}}>
                            <BsCaretUpFill/>
                            <h1 className="align-items-center justify-content-center" style={{padding:'50px'}}>{item.voted.length}</h1>
                            <BsCaretDownFill/>
                            <h4 className="align-items-center justify-content-center" style={{padding:'30px'}}>Votes</h4>
                         </div>
                         <div class="col-md-3">
                            <img class="img-fluid" style={{height:'250px',width:'200px'}}key={item.id} src={item.poster} alt="Movie Poster"/>
                         </div>
                         <div class="col-md-6" style={{width:'400px'}}>
                            <h1 class="display-4">{item.title}</h1>
                            <h4>Genre: <span>{item.genre}</span></h4>
                            <h4>Director: <span>{item.director}</span></h4>
                            <h4>Starring: <span>{item.stars}</span></h4>
                            <p>Mins| {item.language} | {new Date(item.releasedDate * 1000).toLocaleString()}</p>
                            
                            <p className="text-primary">{item.pageViews} Views | Voted by {item.voted.length} People</p>
                        
                         </div>
                    </div>
                    <div >
                    <button className="bg-primary m-2 text-align-center" style={{width:'700px',margin:'0px 300px', padding:'10px'}} > Watch Trailer</button>
                    </div>
                    
                </div>


        //   <li key={movie.id}>{movie.poster}</li>
        ))}
      
    </>
  );
};

export default Fetch;






