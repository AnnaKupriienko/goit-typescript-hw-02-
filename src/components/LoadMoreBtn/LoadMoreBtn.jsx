import { IoCloudDownload } from "react-icons/io5";
import css from "./LoadMoreBtn.module.css"

export default function LoadMoreBtn({ onClick }) {
    return (
        <div className={css.loadCont}>
        <button className={css.btnLoad} onClick= {onClick} type="button"> Load more <IoCloudDownload size="18" /> </button>
        </div>
    )
    
}