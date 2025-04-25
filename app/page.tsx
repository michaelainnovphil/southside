import Image from "next/image";
import React from "react";
import "./globals.css";


const App = () => {

  return (

    
    <div className="bg-[url(/image1.jpg)] bg-cover">
      <div className="header">
      <Image
          className="image2"
          src="/head.png"
          alt="favicon"
          width={60}
          height={20}
          priority
        />
      
      <a
            className="box" 
            href="https://quietinsiders.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-l ...">Entertain my thoughts.</p>
          </a>
        </div>

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
          className="randomaah"
          src="/randomaa1.png"
          alt="randomaa1"
          width={350}
          height={100}
          priority
        />
        <p className="text-sm text-[#ffffff] tracking-wide font-regular">April 2, 2025 1:56 PM eto yung sabi kong meaning nung soad song na nakalimutan ko</p>
      <div className="separatorbox"></div>

      <Image
          className="randomaah"
          src="/randomaa3.png"
          alt="randomaa3"
          width={350}
          height={100}
          priority
        />
        <p className="text-sm text-[#ffffff] tracking-wide font-regular">April 15, 2025 10:25 AM hahaha ok</p>
      <div className="separatorbox"></div>

      <blockquote className="reddit-embed-bq" data-embed-created="2025-04-15T02:35:50Z">
        <a href="https://www.reddit.com/r/lakers/comments/1jfzwu4/which_bronify_song_do_you_think_deserves_to_win/">Which Bronify song do you think deserves to win the LeGrammy? The LeBronaissance started with the song Reigning in LA.</a> by
        <a href="https://www.reddit.com/user/LEMIROS_PIELAGO/">u/LEMIROS_PIELAGO</a> in
        <a href="https://www.reddit.com/r/lakers/">lakers</a>
      </blockquote>
      <script async src="https://embed.reddit.com/widgets.js"></script>

      <div className="separatorbox"></div>

      <Image
          className="randomaah"
          src="/randomaa4.png"
          alt="randomaa4"
          width={350}
          height={100}
          priority
        />
        <p className="text-sm text-[#ffffff] tracking-wide font-regular">April 21, 2025 03:56 PM AYE YO LOOK THAT&apos;S YOU!!</p>
      <div className="separatorbox"></div>

      <Image
          className="randomaah"
          src="/random1.png"
          alt="randomaa4"
          width={350}
          height={100}
          priority
        />
        <p className="text-sm text-[#ffffff] tracking-wide font-regular">April 24, 2025 11:21 AM LFGGGGGGGGGGG</p>
      <div className="separatorbox"></div>

      
      </div>

      </div>
          
 

 

  );
};

export default App;
