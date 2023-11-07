import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";

/* 
  Ideas
  - Mail copy on click: "Open/Copy" messages at bottom on hover. Check on click.
  - Carousel of pictures I've taken
  - 
*/

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background-dark ">
      <div className="flex flex-col items-start p-10 h-5/6 w-7/12 lg:w-5/12">
        <div className="bg-primary-light h-40 w-full my-16">

        </div>

        <div className="flex flex-col">
          <h1 className="text-primary-light font-medium text-3xl sm:text-5xl xl:text-6xl ">
            {"Hi, I\'m Sprocket"}
          </h1>
          
          <h2 className="text-accent text-md sm:text-xl xl:text-2xl pt-1 pb-3">
            Student | Fullstack Developer | Photographer
          </h2>

          <div className="flex flex-row justify-start w-full">
            <a href="https://github.com/aberiggs" target="_blank" className="mr-12">
              <FaGithub className="text-primary-light hover:text-background-light w-8 h-auto"/>
            </a>
            <a href="https://linkedin.com/in/aberiggs4" target="_blank" className="mr-12">
              <FaLinkedin className="text-primary-light hover:text-background-light w-8 h-auto" />
            </a>
    
            <FaEnvelope className="text-primary-light hover:text-background-light w-8 h-auto" />
          </div>
        </div>
        
        <div className="h-10"/>


        <div className="w-full">
          <h3 className="text-primary-light text-md sm:text-xl underline underline-offset-4 decoration-2">
            Bio
          </h3>
          <p className="text-primary-light indent-0 mt-2">
            {`My real name is Abe, but all my friends know me as Sprocket! I'm an aspiring software engineer from Seattle, Washington, and currently majoring in Computer Science at Purdue University.`}
          </p>

          <h3 className="text-primary-light text-md sm:text-xl underline underline-offset-4 decoration-2 mt-4">
            Experience
          </h3>
          <p className="text-primary-light indent-0 mt-2">
            This past summer I was an intern at <a className="text-accent hover:text-background-light" href="https://rndgroup.com/">The RND Group</a>, which is a medical device software company based in Indianapolis, Indiana. I was a software developer on the NeuMoDx project, an FDA approved device shipped internationally that allows for testing of various diseases at large scales. I worked on tasks like resolving defects in user options and sample running menus that operators interact with daily that impacted security and usability, creating audits that allow for the logging and monitoring of user actions, and correcting filtering so that operators can clearly find the sample results and tests that they need.
            <br />
            <br />
            Currently, I&apos;m a developer for the Purdue club known as <a className="text-accent hover:text-background-light" href="https://pros.cs.purdue.edu/">PROS</a>, where we build and maintain a kernel for VEX&apos;s V5 robot brain that&apos;s used by teams around the world in robotics competitions.
          </p>

          <h3 className="text-primary-light text-md sm:text-xl underline underline-offset-4 decoration-2 mt-4">
            Hobbies
          </h3>
          <p className="text-primary-light indent-0 mt-2">
            {`My real name is Abe, but all my friends know me as Sprocket! I'm an aspiring software engineer from Seattle, Washington, and currently majoring in Computer Science at Purdue University.`}
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
