import React from 'react'
import { Button } from "@/components/ui/button"

import Image from 'next/image';
import Link from 'next/link';
const topics = [
    { 
      Text: 'Python',
      img: '/python.png',
      description: 'Lets learn Python together!',
        slug: 'python'
    },
    {
      Text: 'JavaScript',
      img: '/javascript.png',
      description: 'Master JavaScript one step at a time.',
      slug: 'javascript'
    },
    {
      Text: 'React',
      img: '/react.png',
      description: 'Build amazing UIs with React!',
        slug: 'react'
    },
    {
      Text: 'Node.js',
      img: '/nodejs.png',
      description: 'Learn backend development with Node.js.',
        slug: 'nodejs'
    },
    {
      Text: 'TypeScript',
      img: '/typescript.png',
      description: 'Write safer code with TypeScript!',
        slug: 'typescript'
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
            <div key={topic.img} className="shadow-lg bg-grey-800">
              <Image
                src={topic.img}
                alt={topic.Text}
                width={35}
                height={35}
                className="rounded-full justify-center flex-col items-center"
              />
              <h2>{topic.Text}</h2>
              <p>{topic.description}</p>

<Link href={`/chat/${topic.slug}`} className="flex justify-center items-center">

              <Button className="px-4 border border-slate-400 py-2">
                Discuss Now
              </Button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Forums