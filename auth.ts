import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import {z} from 'zod';
import { sql } from '@vercel/postgres';
import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';
import {getUser} from "@/app/lib/mockData";
// import {getUser} from "@/app/service/userService";


// async function getUser(email: string): Promise<User | undefined> {
//     try {
//         const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
//         return user.rows[0];
//     } catch (error) {
//         // console.error('Failed to fetch user:', error);
//         throw new Error('Failed to fetch user.');
//     }
// }

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [Credentials({
        async authorize(credentials) {
            const parsedCredentials = z
                .object({ email: z.string().email(), password: z.string().min(6) })
                .safeParse(credentials);

            if (parsedCredentials.success) {
                const { email, password } = parsedCredentials.data;

                const user = await getUser(email);

                // const user = await getUser('user1@nextmail.com');
                console.log('User in action', user);
                // const user = users.find((u: any) => u.email === email); //Shanna@melissa.tv
                console.log('Users back all', email, password, user);
                if (user === null) return null;
                const passwordsMatch = await bcrypt.compare(password, user.password);    //user.password
                console.log('Users pass match', email, password, passwordsMatch);
                if (passwordsMatch) return user;
            }

            return null;
        },
    }),
    ],
});