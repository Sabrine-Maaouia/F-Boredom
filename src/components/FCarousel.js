import { Button, Carousel } from "antd";
import React, { useState } from "react";
import { navImgs } from "../utils/img.constants";
import { AliyunOutlined } from "@ant-design/icons";

function FCarousel() {
  const [data, setData] = useState(navImgs);

  const genre = ["Action", "comedy", "Romance"];

  return (
    <Carousel dotPosition={"right"}>
      {data.map((nav) => (
        <div key={nav.id} style={{ height: "100%" }}>
          <div
            className="f-carousel-layout"
            style={{
              background: `radial-gradient(89.71% 89.71% at 44.51% 7.12%, rgba(36, 58, 115, 0.2) 0%, #243A73 100%), url(${nav.img})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "auto",
            }}
          >
            <div>
              <div className="carousel-title" style={{ marginBottom: 8 }}>
                <h1>{nav.name}</h1>
                <div className="carousel-title-rating">
                  <AliyunOutlined style={{ color: "inherit" }} />
                  <span>{`7.${nav.id}`}</span>
                </div>
              </div>
              <div className="carousel-details">
                <ul>
                  {genre.map((gen) => (
                    <li>
                      <Button
                        type="link"
                        style={{ padding: 0, height: "auto" }}
                      >
                        {gen}
                      </Button>
                    </li>
                  ))}
                </ul>
                <span className="carousel-details-year">2022</span>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default FCarousel;
