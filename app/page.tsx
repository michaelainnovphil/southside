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

      
      <div className="txt1">
        <p className="text-l text-[#ffffff] tracking-wide font-regular"><i>“Yesterday I advised you not to write me every day, I still hold the same opinion today and it would be very good for both of us, and so I repeat my advice today even more emphatically only please, Milena, don&apos;t listen to me, and write me every day anyway, it can even be very brief, briefer than today&apos;s letters, just 2 lines, just one, just one word, but if I had to go without them I would suffer terribly.”
        ― Franz Kafka, Letters to Milena</i></p>
      </div>
      
      <div className="containerbot">
        
      </div>
          
    </div> 

 

  );
};

export default App;
