import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background-dark ">
      <div className="flex flex-col items-start p-10 h-5/6 w-8/12">
          <div className="bg-primary-light h-32 w-9/12">
          </div>

          <div className="flex flex-col">
            <h1 className="text-primary-light font-medium text-3xl sm:text-3xl xl:text-6xl ">
              {"Hi, I\'m Sprocket"}
            </h1>
            
            <h2 className="text-accent text-sm sm:text-sm xl:text-lg">
              Student | Fullstack Developer | Photographer
            </h2>
          </div>

          <h3 className="text-primary-light">
            About Me
          </h3>
      </div>

      <div className="flex h-1/6 items-center justify-center  pb-5">
        <p className="text-primary-light text-sm">
          © Copyright 2023 Abe Riggs IV
        </p>
      </div>
    </main>
  )
}
