// import React from "react";

// import image from "../../Images/pexel.jpg";
// import { Link } from "react-router-dom";
// import NavBar from "../../Navbar/navbar";

// const Home=()=>{
//     return(
//         <>
        
//         <div style={{backgroundSize:'cover',
//             backgroundImage:`url(${image})` , height:'100vh' 
//             }}>
//         <NavBar/>

//         {/* <img src={image}/> */}
//         <h1 style={{color:'white'}}>Welcome to Home</h1>
//         {
//             [0,1,2,3].map((each)=>{
//                 return(
                    
//                 <Link to={`/hyderabad/${each}/info`}>

//                     <button style={{color:'red'}} className="bg-blue-500 hover:bg-blue -700 text-black font-bold py-2 mx-2 px-4 rounded">{each}</button>
//                 </Link>
            
//                 )
//             })
//         }
        
//         </div>
//         </>
//     )
// }

// export default Home; 

// ........... 
import React from "react";
import image from "../../Images/pexel.jpg";
import { Link } from "react-router-dom";
import NavBar from "../../Navbar/navbar";

const Home = () => {
  return (
    <center>
    <div
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(${image})`,
        height: '100vh',
      }}
    >
      <NavBar />
      <h1 style={{ color: 'white' }}>Welcome to Home</h1>
      {[0, 1, 2, 3].map((each) => (
        <Link key={each} to={`/hyderabad/${each}/info`}>
          <button
            style={{ color: 'red' }}
            className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 mx-2 px-4 rounded"
          >
            {each}
          </button>
        </Link>
      ))}
    </div>
    </center>
  );
};

export default Home;
