import Image from "next/image";
import React from "react";
import "./globals.css";

const App = () => {

  return (
    <div className="bg-[url(/image1.jpg)] bg-cover">
      

      <div className="app-container">
        <div className="boxes-container">

        <Image
          className="image2"
          src="/image2.jpg"
          alt="image2"
          width={180}
          height={38}
          priority
        />
        <Image
          className="image3"
          src="/image3.jpg"
          alt="image3"
          width={180}
          height={38}
          priority
        />
          <Image
          className="image3"
          src="/image3.jpg"
          alt="image3"
          width={180}
          height={38}
          priority
        />
          
        <Image
          className="image2"
          src="/image2.jpg"
          alt="image2"
          width={180}
          height={38}
          priority
        />
         
      </div>
      </div>
      <div className="containerbot">
        
      </div>
          
    </div> 

 

  );
};

export default App;
