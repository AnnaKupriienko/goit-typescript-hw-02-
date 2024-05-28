import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar"
import ImageGallery from "../ImageGallery/ImageGallery"
import Loader from "../Loader/Loader"
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn"
import ImageModal from "../ImageModal/ImageModal"
import { fetchPictures } from "../../pictures-api"

export default function App() {
  const [img, setImg] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [modal, setModal] = useState(false);
  const [likes, setLikes] = useState(null);
  const [imgUrl, setImgUrl] = useState([])

  const handleLoadMore = () => {
  setPage(page +1);
  }

  useEffect(() => {
    if (query === "") {
      return;
    }

     async function getImages ()  {
       try {
        setError(false);
      setIsLoading(true);
      const data = await fetchPictures(query,page);
      setImg((prevImg) => {
        return [...prevImg, ...data]
      });
    } catch (error) {
      setError(true);
    }
    finally {
      setIsLoading(false);
    }
  }
    getImages();
  },[query,page])
  
  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImg([]);

  }
  const openModal = (url,like) => {
    setLikes(like);
    setModal(true);
    setImgUrl(url);
  }
  const modalClose = () => {
    setModal(false);
  };
  return (
    <>
    <SearchBar onSearch={handleSearch}/>
      {img.length > 0 && <ImageGallery items={img} onImgClick={openModal} />} 
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {img.length > 0 && !isLoading && <LoadMoreBtn onClick={handleLoadMore}/>} 
      {modal && (<ImageModal
        image = {imgUrl}
        imgModal={modal}
        item = {img}
        imgLikes={likes}
        onModalClose={modalClose}
      />)}
    </>
  )
}