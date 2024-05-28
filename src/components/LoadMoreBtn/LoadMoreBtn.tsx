import { IoCloudDownload } from "react-icons/io5";
import css from "./LoadMoreBtn.module.css"

interface LoadMoreBtnProps {
  onClick: () => void;
}

export default function LoadMoreBtn({ onClick }:LoadMoreBtnProps) {
    return (
        <div className={css.loadCont}>
        <button className={css.btnLoad} onClick= {onClick} type="button"> Load more <IoCloudDownload size="18" /> </button>
        </div>
    )
    
}