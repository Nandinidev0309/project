import React from "react";

import { Outlet, Link} from "react-router-dom";
import NavBar from "../../Navbar/navbar";
const Projects=()=>{
    return(
        <>
        <center>
        <NavBar/>
        <h1>Welcome to project</h1>
        <Outlet/>
        <Link to="doctors">Doctors</Link>
        <Link to="engineers">Engineers</Link>
        </center>
        </>
    )
}

export default Projects;