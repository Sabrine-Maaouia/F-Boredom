import React, { useState } from "react";
import NavBarLayout from "../layout/NavBarLayout";
import { navImgs } from "../utils/img.constants";
import { Link } from "react-router-dom";

function LandingPage({setLoggedIn}) {
  const [active, setActive] = useState("1");
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <NavBarLayout setLoggedIn={setLoggedIn} />
      <div className="f-gallery">
        {navImgs?.map((nav) => {
          let text = nav.text.split("you ");
          return (
            <Link
              to="movies"
              style={{
                background: `linear-gradient(to bottom, rgba(36, 58, 115, 0.4), rgba(36, 58, 115, 0.4)), url(${nav.img}) no-repeat center center / cover`,
              }}
              key={nav.id}
              className={
                active === nav.id
                  ? "f-gallery-img f-gallery-img-active"
                  : "f-gallery-img"
              }
              onMouseEnter={() => setActive(nav.id)}
            >
              <div className="f-gallery-desc">
                <h1>
                  {text[0]}
                  <span>You </span>
                  {text[1]}
                  <span>?</span>
                </h1>
                <h3>{nav.name}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default LandingPage;
