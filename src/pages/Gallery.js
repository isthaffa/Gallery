import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Container } from "react-bootstrap";
import { fetchPhotos } from "../service";
import { useParams } from "react-router-dom";
import "./style.scss";
import { Link } from "react-router-dom";

export default function Gallery() {
  const [photos, setPhotos] = useState([]);
  const { id } = useParams();
  const [selectedPhoto, setSelectedPhoto] = useState(0);

  useEffect(() => {
    const fetchAPi = async () => {
      setPhotos(await fetchPhotos(id));
    };
    fetchAPi();
  }, [id]);

  const handleclick = (e) => {
    const index = e.target.getAttribute("data-index");
    console.log(index);
    setSelectedPhoto(index);
  };
  return (
    <>
      <div className="container">
        
          <div className="row">
              <div className="col-2">
          <Link to="/" className=" btn button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-left-circle"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
              />
            </svg>
          </Link>
          </div>
          <div className="col-10">
          <Header lassName="text-center justify-center" title={`Album ${id}`} />
          </div>
          </div>
       

        <div className="row">
          <div className="col-7">
            <ul>
              {photos &&
                photos.map((photo, index) => (
                  <div className="list-group-item border-0" key={photo.id}
                  layout
                  whileHover={{opacity:1}}
                  >
                    <img
                    
                    
                    className="image"
                      src={photo.thumbnailUrl}
                      alt={photo.title}
                      onClick={handleclick}
                      data-index={index}
                    />
                  </div>
                ))}
            </ul>
          </div>
          <div className="col-5">
            {photos.length != 0 && (
              <img src={photos[selectedPhoto].url} width="100%"  />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
