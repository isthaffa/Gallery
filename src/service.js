import axios from "axios";

const url='https://jsonplaceholder.typicode.com';


export const fetchAlbums = async ()=>{
    try {
        const {data }= await axios.get(`${url}/albums`);
      
        return data;
    } catch (error) {
        console.log(error);
    }

}

export const fetchPhotos = async (id)=>{
    try {
        const {data }= await axios.get(`${url}/photos?albumId=${id}`);
      console.log(data)
        return data;
    } catch (error) {
        console.log(error);
    }

}