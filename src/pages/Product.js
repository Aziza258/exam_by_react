import { useEffect, useState } from "react";
import './app.css'

const Product = () => {
  const [images, setImages] = useState('Result...')

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2bf20f05c6msh03281e9bc988652p13feadjsn35640cb105d8',
      'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
    }
  };


  const getImages = async () => {
    const url = 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=taylor%20swift&pageNumber=1&pageSize=10&autoCorrect=true'

    const responce = await fetch(url, options)
    const obj = await responce.json();
    console.log(obj);
    setImages(obj.value.map(picture => (
      <img key={picture.url} src={picture.url} />
    )))
  }
  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="pictures">
      {images}
    </div>
  );
}


export default Product