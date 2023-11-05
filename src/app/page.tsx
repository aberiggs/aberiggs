import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-background-dark ">
      
      <div className="w-6/12">
        <h1 className="text-primary-light text-5xl font-medium">
          {"Hi, I\'m Sprocket"}
        </h1>

        <p className="">
          Click <a className="text-accent">here</a> to be directed
        </p>
      </div>
    </main>
  )
}
