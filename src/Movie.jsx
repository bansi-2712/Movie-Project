
import { Button,Card  } from "react-bootstrap"
import './Movie.css'
import {Data} from './Moviedata.jsx'
import { useState } from "react"
 


export const Movie = () => {
  const [filterdata ,setfilterdata] = useState(Data)
  const filtermovie = (category)=>{
    if(category ==='All'){
      setfilterdata(Data)
    }
    else{
      const filterd = Data.filter((movie)=>movie.category === category)
      console.log("Filtered Movies:", filterd);
        setfilterdata(filterd)
    
    }
  }

  return (
    <>
        
       <div className="button-group"  >
            <Button variant="outline-primary" className="m-2" onClick={()=>filtermovie('All')} >All</Button>
            <Button variant="outline-info" className="m-2" onClick={()=>filtermovie('Action')}>Action</Button>
            <Button variant="outline-success" className="m-2"onClick={()=>filtermovie('Thriller')}>Thriller</Button>
            <Button variant="outline-warning" className="m-2"onClick={()=>filtermovie('Animation')}>Animation</Button>
            <Button variant="outline-success" className="m-2"onClick={()=>filtermovie('Horror')}>Horror</Button>
            <Button variant="outline-info" className="m-2"onClick={()=>filtermovie('Drama')}>Drama</Button>
            <Button variant="outline-primary" className="m-2"onClick={()=>filtermovie('Sci-Fi')}>Sci-Fi</Button>
           
          </div>
            <div className="card-container">
        {filterdata.map((movie, index) => (
          <Card style={{ width: '18rem', margin: '1rem' }} key={index} className="card_containt">
            <Card.Img variant="top" src={movie.poster_path}  className="card_img"/>
            <Card.Body>
              <Card.Title className="text">{movie.title} </Card.Title>
              <Card.Text className="text">{movie.release_date}</Card.Text>
                <Button  variant="outline-warning" className="watch-now-btn" onClick={()=> window.open(movie.link,"_blank","noopener,noreferrer")}>Watch Now</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
          
            
       
           
       
   


    </>
  )
}