import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css"

interface ImageGalleryProps {
  items: {
    id: string;
    description: string;
    urls: {
      small: string;
      regular: string;
    };
    likes: number;
  }[];
  onImgClick: (url: string, likes: number) => void;
}

export default function ImageGallery({ items , onImgClick}:ImageGalleryProps) {
    return (
		<ul className={css.list}>
			{items.map((item) => (
				<li className={css.item} key={item.id}>
					<ImageCard item={item} onImgClick ={onImgClick} />
				</li>
			))}
</ul>
    )}