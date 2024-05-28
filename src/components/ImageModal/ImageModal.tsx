import css from "./ImageModal.module.css"
import Modal from 'react-modal';
import { SlLike } from "react-icons/sl";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
     
};
export default function ImageModal({
    imgModal, 
    onModalClose,
    image,
    imgLikes
}) {
    return (
    <div className={css.container} >
            <Modal
        isOpen={imgModal}
        onRequestClose={onModalClose}
        style={customStyles}
      >
                <img src={image} />
                <div className={css.likes}>
             <SlLike className={css.icon} size="20"/>
                <p className={css.text}>  Likes {imgLikes}</p>
            </div>
      </Modal>
    </div>
  );
    
}