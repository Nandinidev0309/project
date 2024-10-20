import React from "react";
import Nav from "./nav";
import { useNavigate } from "react-router-dom";

const Nopage = () => {
  const navigate = useNavigate();
  const onclickHandler = () => {
    navigate("/");
  };
  const butStyle = {
    margin: "10px",
    padding: "10px",
    backgroundColor: "red",
    fontSize:"20px",
    fontWeight:"bold",
  //  textAlign:"right"
  };
  return (
    <div>
      <Nav />
      <center>
        <h2>Error 404: not found</h2>
        <div  style={{ textAlign: "right", marginRight: "100px" }}>
        <button onClick={onclickHandler} style={butStyle}>
          Back to home screen
        </button>
        </div>
        
      </center>
    </div>
  );
};

export default Nopage;
