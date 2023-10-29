import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import DiscordProvider from "next-auth/providers/discord";

const authOptions = {
    providers: [
        DiscordProvider({
          clientId: process.env.DISCORD_CLIENT_ID,
          clientSecret: process.env.DISCORD_CLIENT_SECRET
        })
    ],
    secret: "uPgU6A4AA9lgAwQHCpwYzLET8Wy5VDeNdzZgaDoBLTNRorWY6DRTAI_92",
    debug: true
};

export async function GET() {
    const session = await getServerSession(authOptions);
    console.log("HELLO! ", session?.user?.name);
    return NextResponse.json({ name: session?.user?.name ?? "Not Logged In" });
}

