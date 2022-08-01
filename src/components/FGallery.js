import React from "react";
import { navImgs } from "../utils/img.constants";

function FGallery({ title }) {
  return (
    <div className="f-gallery-wrapper">
      <h3 className="gallery-title">{title}</h3>
      <div className="gallery-container">
        <div className="gallery-item">
          <img src={navImgs[0].img} />
        </div>
        <div className="gallery-item">
          <img src={navImgs[0].img} />
        </div>
        <div className="gallery-item">
          <img src={navImgs[0].img} />
        </div>
        <div className="gallery-item">
          <img src={navImgs[0].img} />
        </div>
        <div className="gallery-item">
          <img src={navImgs[0].img} />
        </div>
      </div>
    </div>
  );
}

export default FGallery;
