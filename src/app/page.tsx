import Image from "next/image"

import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";
import BannerPhoto from '../../public/FilmPhoto.jpg'
import React from "react";


/* 
  Ideas
  - Mail copy on click: "Open/Copy" messages at bottom on hover. Check on click.
  - Carousel of pictures I've taken
  - 
*/

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background-dark ">
      <div className="flex flex-col items-start p-10 h-5/6 w-full sm:w-10/12 md:w-8/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12">
        <div className="w-full my-8">
          <Image priority={true} className="object-scale-down w-full h-full rounded-lg" src={BannerPhoto} alt="Photo of Seattle skyline"/>
        </div>

        <div className="flex flex-col">
          <h1 className="text-primary-light font-medium text-3xl sm:text-5xl xl:text-6xl ">
            Hi, I&apos;m Sprocket
          </h1>
          
          <h2 className="text-accent text-md sm:text-xl xl:text-2xl pt-1 pb-3">
            Student | Fullstack Developer | Photographer
          </h2>

          <div className="flex flex-row justify-between w-1/2 h-7 lg:h-8 xl:h-8">
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
        
        <div className="h-10"/>


        <div className="w-full">
          <h3 className="text-primary-light text-lg lg:text-xl underline underline-offset-4 decoration-2">
            Bio
          </h3>
          <p className="text-primary-light indent-0 mt-2 text-md lg:text-lg">
            My real name is Abe, but all my friends know me as Sprocket! I&apos;m an aspiring software engineer from Seattle, Washington, and currently majoring in Computer Science at Purdue University.
          </p>

          <h3 className="text-primary-light text-lg lg:text-xl underline underline-offset-4 decoration-2 mt-4">
            Experience
          </h3>
          <p className="text-primary-light indent-0 mt-2 text-md lg:text-lg">
            This past summer I was an intern at <a className="text-accent hover:text-background-light" href="https://rndgroup.com/" target="_blank">The RND Group</a>, which is a medical device software company based in Indianapolis, Indiana. I was a software developer on the NeuMoDx project, an FDA approved device shipped internationally that allows for testing of various diseases at large scales. I worked on tasks like resolving defects in user options and sample running menus that operators interact with daily that impacted security and usability, creating audits that allow for the logging and monitoring of user actions, and correcting filtering so that operators can clearly find the sample results and tests that they need.
            <br />
            <br />
            Currently, I&apos;m a developer for the Purdue club known as <a className="text-accent hover:text-background-light" href="https://pros.cs.purdue.edu/" target="_blank">PROS</a>, where we build and maintain a kernel for VEX&apos;s V5 robot brain that&apos;s used by teams around the world in robotics competitions.
          </p>

          <h3 className="text-primary-light text-lg lg:text-xl underline underline-offset-4 decoration-2 mt-4">
            Hobbies
          </h3>
          <p className="text-primary-light indent-0 mt-2 text-md lg:text-lg">
            When I get a break from my studies, I usually spend time playing games with friends or running outside to snap some photos. I was brought up around video games, and so ever since I was young they&apos;ve been fun a way to stay   connected to both friends and family. As for photography, I picked it up just over a year ago, and it&apos;s served as a way to capture memories. I primarily focus on landscape and street photography, and have a particular love for film. You can find my Instagram account where I post some of my photos <a className="text-accent hover:text-background-light" href="https://www.instagram.com/sprock_shoots_film" target="_blank">here</a> if you&apos;re interested.
            <br />
            <br />
            
          </p>
        </div>

    
      </div>

      <div className="flex h-1/6 items-center justify-center  pb-5">
        <p className="text-primary-light text-sm">
          © Copyright 2023 Abe Riggs IV. All Rights Reserved.
        </p>
      </div>
    </main>
  )
}
