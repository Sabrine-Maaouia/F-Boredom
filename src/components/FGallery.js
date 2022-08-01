import React from "react";
import { navImgs } from "../utils/img.constants";

function FGallery({ title, data }) {
  return (
    <div className="f-gallery-wrapper">
      <h3 className="gallery-title">{title}</h3>
      <div className="gallery-container">
        {data.slice(0, 6).map((movie) => (
          <div className="gallery-item" key={movie.id}>
            <img src={movie.backPoster} alt={movie.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FGallery;
