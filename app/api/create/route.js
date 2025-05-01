
import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";
import { use } from "react";

const api_key = "2byr2vdnb7ma";
const api_secret = "d2zg99ve9sf3bfy5yqj2e6zfb86tfvcyqqp2bdwjpuxaptzt6wp8devq6e4v4es7";
// const user_id = "user_2vxDoboEhEz4JCedHpxheo0CT34";



export async function POST(request) {
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    // Create User Token
    const user = await request.json()

    function capitalizeWords(str) {
      // return str.replace(/\b\w/g, char => char.toUpperCase());
     return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const token = serverClient.createToken(user.data.id);
    // console.log(token);
    
    console.log("new user created",token)

    const client = await clerkClient()

    await serverClient.upsertUser({id: user.data.id});

    await client.users.updateUserMetadata(user.data.id, {
      publicMetadata: {
        token: token,
      },
    })

    const slugs=['python-new', 'javascript-new', 'react-new', 'nodejs-new', 'typescript-new']
    slugs.forEach(async(item) => {
      const channel = serverClient.channel("messaging", item, {
        image: "https://getstream.io/random_png/?name=react",
        name: capitalizeWords(item) + "Discussion",
        created_by_id:user.data.id
       
      });

      await channel.create()
      channel.addMembers([user.data.id])
    })
    return Response.json({ message: 'Hello World' })
  }