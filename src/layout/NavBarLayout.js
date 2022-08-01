import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../features/auth";
import {LoadingOutlined} from "@ant-design/icons"

function NavBarLayout({setLoggedIn}) {
  const [connected, setConnected] = useState(false);
  const [user, setUser] = useState("");
  
  useEffect(() => {
    if(localStorage.getItem("auth-token")) {
      setConnected(true);
      setUser(localStorage.getItem("user"))
    }
  },[])

  useEffect(() => {
    connected && setLoggedIn();
  },[connected])

  return (
    <nav
      style={{
        height: 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "fixed",
        zIndex: 99,
        background: "transparent",
        width: "100%",
      }}
    >
      <Link to="/">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/sab-pff.appspot.com/o/Logo%2Flogo.svg?alt=media&token=7e560fa8-d1e5-4082-879a-7acb8d85be30"
          alt="f_boredom"
          style={{ height: "60px", width: "auto", paddingLeft: "32px" }}
        />
      </Link>
      <div style={{paddingRight: 32}}>
        { connected ? <span style={{color: "#fff"}}>{user}</span>
         : <Auth  setConnected={() => setConnected(true)} />}
      </div>
    </nav>
  );
}

export default NavBarLayout;
