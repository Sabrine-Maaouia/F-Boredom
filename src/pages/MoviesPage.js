import { Divider } from "antd";
import React from "react";
import FCarousel from "../components/FCarousel";
import FFilter from "../components/FFilter";
import FGallery from "../components/FGallery";

function MoviesPage() {
  return (
    <div className="f-page-layout">
      <FCarousel />
      <div className="f-page-container">
        <FGallery title="Latest Movies" />
        <div style={{ padding: "032px" }}>
          <Divider className="f-divider" />
        </div>
        <FFilter />
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            <div
              style={{
                background: "red",
                width: 250,
                height: 380,
                borderRadius: 10,
              }}
            ></div>
            <div
              style={{
                background: "red",
                width: 250,
                height: 380,
                borderRadius: 10,
              }}
            ></div>
            <div
              style={{
                background: "red",
                width: 250,
                height: 380,
                borderRadius: 10,
              }}
            ></div>
            <div
              style={{
                background: "red",
                width: 250,
                height: 380,
                borderRadius: 10,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviesPage;
