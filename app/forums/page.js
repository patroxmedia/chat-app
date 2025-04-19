import React from 'react'
import { Button } from "@/components/ui/button"

import Image from 'next/image';
const topics = [
    { 
      Text: 'Python',
      img: '/python.png',
      description: 'Lets learn Python together!'
    },
    {
      Text: 'JavaScript',
      img: '/javascript.png',
      description: 'Master JavaScript one step at a time.'
    },
    {
      Text: 'React',
      img: '/react.png',
      description: 'Build amazing UIs with React!'
    },
    {
      Text: 'Node.js',
      img: '/nodejs.png',
      description: 'Learn backend development with Node.js.'
    },
    {
      Text: 'TypeScript',
      img: '/typescript.png',
      description: 'Write safer code with TypeScript!'
    },
  ];

  
    // Add more 


const Forums = () => {
  return (
    <div className="container mx-auto my-30">
      <h1 className="text-center font-bold text-xl py-20"> Discussion Forums</h1>
      <div className="flex flex-wrap justify-center gap-10">
        {topics.map((topic) => {
          return (
            <div key={topic.img} className="shadow-lg bg-slate-800">
              <Image
                src={topic.img}
                alt={topic.Text}
                width={35}
                height={35}
                className="rounded-full justify-center flex-col items-center"
              />
              <h2>{topic.Text}</h2>
              <p>{topic.description}</p>
              <Button className="bg-slate-900 text-white p-2 rounded-md mt-5 items-center ">
                Discuss Now
              <Button/>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Forums