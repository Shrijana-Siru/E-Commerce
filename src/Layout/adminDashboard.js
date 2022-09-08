import React from "react";
import NavBar from "../Component/navbar";

function Layout(props) {
  return (
    <div style={{display:'flex'}}>
      <NavBar />
      <div >
        {props.children}
      </div>
    </div>
  );
}

export default Layout;
