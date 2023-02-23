import NextAuth, {CookiesOptions} from "next-auth"
import {NextApiRequest, NextApiResponse} from "next";


const cookies: Partial<CookiesOptions> = {
    sessionToken: {
        name: `next-auth.session-token`,
        options: {
            httpOnly: true,
            sameSite: "none",
            path: "/",
            domain: process.env.NEXT_PUBLIC_DOMAIN,
            secure: true,
        },
    },
    callbackUrl: {
        name: `next-auth.callback-url`,
        options: {},
    },
    csrfToken: {
        name: "next-auth.csrf-token",
        options: {},
    },
};



export default async function auth(req: NextApiRequest, res: NextApiResponse) {
    return await NextAuth(req, res, {
        providers: [
            Providers.Credentials({
                name: 'credentials',
                id: 'credentials',
                credentials: {
                    username: { },
                    password: { }
                },
                async authorize(credentials, req) {
                    // ...
                }
            })
        ],
        session: {
            strategy: "jwt",
        },
        cookies: cookies,
        callbacks: {},
    });
}