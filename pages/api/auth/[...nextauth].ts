import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import EmailProvider from "next-auth/providers/email";

import { MongoDBAdapter } from "@next-auth/mongodb-adapter"

import clientPromise from "../../../lib/mongo"

const THIRTY_DAYS = 30 * 24 * 60 * 60;
const THIRTY_MINUTES = 30 * 60;

export default NextAuth({
    pages: {
        signIn: "/login",
        verifyRequest: "/verify-request",
    },
    secret: process.env.JWT_SECRET,
    session: {
        strategy: "jwt",
        maxAge: THIRTY_DAYS,
        updateAge: THIRTY_MINUTES,
    },
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        EmailProvider({
            server: {
                // host: "server137.web-hosting.com",
                // port: 465,
                // auth: {
                //     user: "no-reply@kstuard.me",
                //     pass: "U-gS@ucI0?i~",
                // },
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD,
                },
                tls: {
                    rejectUnauthorized: false,
                  },
            },
            // from: process.env.EMAIL_FROM
            from: "no-reply@kstuard.me"
        }),
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
        }),
    ],
});
