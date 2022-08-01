import React from "react";
import {
  PlayCircleOutlined,
  PlusCircleOutlined,
  AliyunOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

function SingleMoviePage() {
  const img =
    "https://image.tmdb.org/t/p/original//p1F51Lvj3sMopG948F5HsBbl43C.jpg";

  const poster =
    "https://image.tmdb.org/t/p/original//pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg";

  const genre = ["Action", "comedy", "Romance"];

  return (
    <div
      className="f-page-layout"
      style={{
        background: `linear-gradient(356.37deg, rgba(36, 58, 115, 0.95) 46.61%, rgba(36, 58, 115, 0.4) 77.89%), url(${img})`,
        minHeight: "100vh",
        paddingTop: 80,
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          height: "30vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a
          href="https://www.youtube.com/watch?v=Go8nTmfrQd8"
          target="_blank"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <PlayCircleOutlined className="f-icon" style={{ fontSize: 90 }} />
          <span className="f-icon-text">Watch trailer</span>
        </a>
      </div>
      <div className="f-single-page-container">
        <div className="f-movie-poster">
          <img src={poster} alt="img" />
        </div>
        <div className="f-movie-details">
          <div className="f-movie-title">
            <h1>Thor: Love and Thunder</h1>
            <PlusCircleOutlined className="f-icon" style={{ fontSize: 60 }} />
          </div>

          <div className="f-movie-genre">
            <ul>
              {genre.map((gen) => (
                <li>
                  <Button type="link" style={{ padding: 0, height: "auto" }}>
                    {gen}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <span className="f-movie-year">2022</span>
            <div className="f-movie-rating">
              <AliyunOutlined style={{ color: "inherit" }} />
              <span>6.7</span>
            </div>
          </div>
          <p style={{ margin: 0, maxWidth: 600 }}>
            After his retirement is interrupted by Gorr the God Butcher, a
            galactic killer who seeks the extinction of the gods, Thor enlists
            the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who
            now inexplicably wields Mjolnir as the Mighty Thor. Together they
            embark upon a harrowing cosmic adventure to uncover the mystery of
            the God Butcher’s vengeance and stop him before it’s too late.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleMoviePage;
