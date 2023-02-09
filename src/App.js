import React from "react";

import "./components/css/index.css";
import AdviceGenerator from "./components/js/AdviceGenerator";


const App = () => {
  return (
    <div>
      {" "}
      <AdviceGenerator />
   
    </div>
  );
};

export default App;

// const App = () => {
//     const isLoading = false;
//       if (isLoading) {
//         return <FadeLoader />;
//       }
//       return <h1 style={{backgroundColor: "lightblue"}}>it is not loading</h1>;
//     };
