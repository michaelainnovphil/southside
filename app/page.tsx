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
      
      <div className="randomaah">
      <p className="text-l text-[#ffffff] tracking-wide font-regular">I&apos;m so fucking bored here you have no idea</p>
      <p className="text-l text-[#ffffff] tracking-wide font-regular">dedma sa naghahadlang saken (nahuli sa work)</p>
      <Image
          className="randomaa1"
          src="/randomaa1.png"
          alt="randomaa1"
          width={350}
          height={100}
          priority
        />
        <p className="text-sm text-[#ffffff] tracking-wide font-regular">April 2, 2025 1:56 PM eto yung sabi kong meaning nung soad song na nakalimutan ko</p>
      <div className="containerbot"></div>
      <a
            className="box" 
            href="https://quietinsiders.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-l ...">Entertain my thoughts.</p>
          </a>
      </div>

      
          
    </div> 

 

  );
};

export default App;
