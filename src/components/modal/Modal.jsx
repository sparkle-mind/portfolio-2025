import React from "react";
import "./modal.scss";
import DownloadBtn from "../common/download-btn/DownloadBtn";
const Modal = ({onClose }) => {
  return (
    <>
      <div className="modal-wrp">
        <div className="modal-boy">
            <img src="images/boy.webp" alt="" />
        </div>
        <div className="modal-inner">
          <div className="modal-content">
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus dolorum dolorem maiores laboriosam esse sint.
            </h4>
          </div>
          <div className="modal-btn">
            <a href="#pdf" className="btn btn-primary" download={true}>
              download <DownloadBtn></DownloadBtn>
            </a>
          </div>
          <button className="close-icn" onClick={onClose}> X </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
