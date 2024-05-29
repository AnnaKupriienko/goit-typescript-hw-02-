import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar"
import ImageGallery from "../ImageGallery/ImageGallery"
import Loader from "../Loader/Loader"
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn"
import ImageModal from "../ImageModal/ImageModal"
import { fetchPictures } from "../../pictures-api"

interface Image {
  id: string;
  description: string;
  urls: {
    small: string;
    regular: string;
  };
  likes: number;
}

export default function App() {
  const [img, setImg] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);
  const [likes, setLikes] = useState<number>(0);
  const [imgUrl, setImgUrl] = useState<string>('')

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
      const data:Image[] = await fetchPictures(query,page);
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
  
  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
    setImg([]);

  }
  const openModal = (url:string,like:number) => {
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
        image= {imgUrl}
        imgModal={modal}
        // item = {img}
        imgLikes={likes}
        onModalClose={modalClose}
      />)}
    </>
  )
}