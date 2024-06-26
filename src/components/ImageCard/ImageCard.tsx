import { SlLike } from "react-icons/sl";
import css from "./ImageCard.module.css"

interface ImageCardProps{
    item: {
        description: string;
        urls: {
            small: string;
            regular: string;
        };
        likes: number;
    };
    onImgClick: (url: string, likes: number) => void;
}
export default function ImageCard({
    item:  {
    description,
        urls: {small, regular},
    likes
}, onImgClick }:ImageCardProps ){
    return (
        <div className={css.container}>
            <div className={css.wrap}>
                <img className={css.img}
                    src={small}
                    alt={description}
                    onClick = {() => onImgClick (regular, likes)}
                />
            </div>
            <div className={css.likes}>
             <SlLike className={css.icon} size="20"/>
                <p className={css.text}>  Likes {likes}</p>
            </div>
</div>

    )
}