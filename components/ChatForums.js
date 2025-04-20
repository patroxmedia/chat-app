"use client";

import { useState, useEffect } from 'react';

import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/v2/index.css';

const apiKey = '2byr2vdnb7ma';
const userId = 'user_2vxDoboEhEz4JCedHpxheo0CT34';
const userName = 'Deepak';
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlcl8ydnhEb2JvRWhFejRKQ2VkSHB4aGVvMENUMzQifQ.w2emTY-f9wxercGuFv1piZ84o-BSuism3na0t9OT-U0';

const user= {
  id: userId,
  name: userName,
  image: `https://getstream.io/random_png/?name=${userName}`,
};

export default function ChatForum({ slug }) {
    function toTitleCase(str) {
        return str.replace(
             /\b[a-z]/g,
              (char) => char.toUpperCase() 
            );
    } 
  const [channel, setChannel] = useState();
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;

    const channel = client.channel('messaging', slug, {
      image: 'https://getstream.io/random_png/?name=react',
      name: toTitleCase(slug.replace(/-/g, "  ")) + 'Discussion',
      members: [userId],
    });

    setChannel(channel);
  }, [client]);

  if (!client) return <div>Setting up client & connection...</div>;

  return (
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

