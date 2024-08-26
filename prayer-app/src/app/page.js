import Image from "next/image";

export default async function Home() {
  let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  let todo = await data.json();
  console.log('some data', todo)
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <p>some data {todo.title}</p>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">

       Hello World
      </div>
    </main>
  );
}
