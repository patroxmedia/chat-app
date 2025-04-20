
import { StreamChat } from "stream-chat";
const api_key = "2byr2vdnb7ma";
const api_secret = "d2zg99ve9sf3bfy5yqj2e6zfb86tfvcyqqp2bdwjpuxaptzt6wp8devq6e4v4es7";
const user_id = "user_2vxDoboEhEz4JCedHpxheo0CT34";


export async function GET() {
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    // Create User Token
    const token = serverClient.createToken(user_id);
    console.log(token);
    return Response.json({ message: 'Hello World' })
  }