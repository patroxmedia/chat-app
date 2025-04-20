

import ChatForum from '@/components/ChatForums';

export default async function Page({ params }) {

    
    const { slug } = await params
    

    return <ChatForum slug={slug}/>
  }