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
      <div className="flex flex-col items-start p-10 h-5/6 w-7/12">
        <div className="bg-primary-light h-40 w-full my-16">

        </div>

        <div className="flex flex-col">
          <h1 className="text-primary-light font-medium text-3xl sm:text-5xl xl:text-7xl ">
            {"Hi, I\'m Sprocket"}
          </h1>
          
          <h2 className="text-accent text-md sm:text-xl xl:text-lg py-2">
            Student | Fullstack Developer | Photographer
          </h2>

          <div className="flex flex-row justify-start w-full">
            <FaGithub className="text-primary-light hover:text-background-light w-8 h-auto mr-12"/>
            <FaLinkedin className="text-primary-light hover:text-background-light w-8 h-auto mr-12" />
            <FaEnvelope className="text-primary-light hover:text-background-light w-8 h-auto" />
          </div>
        </div>
        
        <div className="h-10"/>

        <h3 className="text-primary-light text-md sm:text-xl underline underline-offset-4 decoration-2">
          About Me
        </h3>
        <p className="text-primary-light indent-8 mt-2">
          {`My real name is Abe, but all my friends know me as Sprocket! I'm an aspiring software engineer from Seattle, Washington, and currently majoring in Computer Science at Purdue University.`}
        </p>
      </div>

      <div className="flex h-1/6 items-center justify-center  pb-5">
        <p className="text-primary-light text-sm">
          © Copyright 2023 Abe Riggs IV. All Rights Reserved.
        </p>
      </div>
    </main>
  )
}
