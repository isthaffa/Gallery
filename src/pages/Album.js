import React,{useEffect,useState} from 'react';
import { fetchAlbums } from '../service';
import Header from '../components/Header'
import { Container,ListGroup ,Card} from 'react-bootstrap';
import './style.scss'


const Album =()=>{
    const [albums,setAlbums]=useState([]);


      useEffect(()=>{
        const fetchAPI= async()=>{
        setAlbums(await fetchAlbums());
        }
        fetchAPI();
    

    },[]
    );

    return(
        <>
        <Container>
        <Header title="Albums"/>

        
        <div className="wrapper">
        {albums &&
          albums.map(album => (
            
        
            <a className="atag" href={`/gallery/${album.id}`}><div className=" card [ is-collapsed ] ">
            <div className="card__inner [ js-expander ]" key={album.id}  >
              <span >Album   {album.id}</span>
              <i className="fa fa-folder-o"></i>
            </div>
            
          </div></a>
            
            
          ))}
     </div>
       
       
    
        

        </Container>
        
       
        
        </>
    )


}


export default Album;


