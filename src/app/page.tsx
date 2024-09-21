import Image from "next/image"

import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";
import BannerPhoto from '../../public/FilmPhoto.jpg'
import React from "react";


/* 
  Ideas
    - List of skills/interests on left side.
    - List of projects on right side.

*/

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background-dark">
      <div className="flex flex-col items-center">
      <div className="w-6/12 pt-10">
        <Image priority={true} className="object-scale-down w-full h-full rounded-lg" src={BannerPhoto} alt="Photo of Seattle skyline"/>
      </div>

      <div className="flex flex-row justify-between p-10 h-5/6 w-full sm:w-10/12 md:w-8/12 lg:w-7/12 xl:w-6/12 2xl:w-6/12">

        <div className="flex-col w-5/12">
          <h1 className="text-primary-light font-medium text-3xl sm:text-5xl xl:text-6xl ">
            Hi, I&apos;m Sprocket
          </h1>
          
          <h2 className="text-primary-light text-xl sm:text-2xl xl:text-3xl pt-1 pb-4">
            Software Engineer
          </h2>
          
          <h2 className="text-accent text-md sm:text-lg xl:text-xl pt-2 pb-4">
            Striving to change the world one line of code at a time 🫡
          </h2>

          <div className="flex flex-row justify-between w-5/12 h-7 lg:h-8 xl:h-8">
            <a href="https://github.com/aberiggs" target="_blank" >
              <FaGithub className="text-primary-light hover:text-background-light w-auto h-full"/>
            </a>
            <a href="https://linkedin.com/in/aberiggs4" target="_blank">
              <FaLinkedin className="text-primary-light hover:text-background-light w-auto h-full" />
            </a>
            <a href="mailto:aberiggsiv@gmail.com" target="_blank">
              <FaEnvelope className="text-primary-light hover:text-background-light w-auto h-full" />
            </a>
          </div>

        </div>

        <div className="w-5/12">
          <p className="text-primary-light indent-0 mt-2 text-md lg:text-lg">
            My legal name is Abe, but all my friends know me as Sprocket! I&apos;m a software engineer graduating with a Computer Science degree from <b className="text-primary-dark">Purdue University</b> in December 2024.
          </p>
          <br />
          <p className="text-primary-light indent-0 mt-2 text-md lg:text-lg">
            My last summer was spent at <b className="text-primary-dark">Adobe</b> as a Research Engineering Intern, where I applied myself in the pursuit of bringing the amazing work coming out of Adobe Research to the world. In this, I focused primarlily on the integration of computer vision research into Adobe Video products, working to both improve existing features and create new ones.
          </p>
          <br />
          <p className="text-primary-light indent-0 mt-2 text-md lg:text-lg">
            Of course, I&apos;m always looking for new ways to expand my skillset, and I love to share my knowledge with others. With that, feel free to reach out to me!
          </p>
          <div className="bg-primary-light h-[1px] w-11/12 mx-auto my-10"/>
   
        </div>
  

    
      </div></div>

      <div className="flex h-1/6 items-center justify-center  pb-5">
        <p className="text-primary-light text-sm">
          © Copyright {new Date().getFullYear()} Abe Riggs IV. All Rights Reserved.
        </p>
      </div>
    </main>
  )
}
