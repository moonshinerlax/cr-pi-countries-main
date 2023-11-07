/* eslint-disable react/prop-types */
//* CSS import
import style from './PopOutWindow.module.css'; 

const PopOutWindow = ({ isOpen, onClose, message }) => {
  if (!isOpen) {
    return null; 
  }

  return (
    <div className={style.window}>
      <div className={style.windowContainer}>
        <p>{message}</p>
        <button className={style.close} onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PopOutWindow;