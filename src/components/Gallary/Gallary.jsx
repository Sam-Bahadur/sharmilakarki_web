import "./gallary.css";
import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import ModalImage from "react-modal-image";
// import img1 from "../../img/1.jpg";
// import img1s from "../../img/1-s.jpg";
// import img3 from "../../img/3.JPG";
// import img3s from "../../img/3-s.jpg";
// import img4 from "../../img/4.JPG";
// import img4s from "../../img/4-s.jpg";
// import img5 from "../../img/5.JPG";
// import img5s from "../../img/5-s.jpg";
// import img6 from "../../img/6.JPG";
// import img6s from "../../img/6-s.jpg";
// import img7 from "../../img/7.JPG";
// import img7s from "../../img/7-s.jpg";
// import img8 from "../../img/8.JPG";
// import img8s from "../../img/8-s.jpg";
// import img9 from "../../img/9.jpg";
// import img9s from "../../img/9-s.jpg";
// import img10 from "../../img/10.JPG";
// import img10s from "../../img/10-s.jpg";
// import img12 from "../../img/12.jpg";
// import img12s from "../../img/12-s.jpg";
// import img13 from "../../img/13.JPG";
// import img13s from "../../img/13-s.jpg";
// import img14 from "../../img/14.JPG";
// import img14s from "../../img/14-s.jpg";

export default function Gallary() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className="gallary_container">
      <Gallery photos={photos} onClick={openLightbox} targetRowHeight={200} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}