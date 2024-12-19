import {sql} from "@vercel/postgres";
import {Revenue} from "@/app/lib/definitions";

export async function fetchRevenue() {
    // try {
    //     // Artificially delay a response for demo purposes.
    //     // Don't do this in production :)
    //
    //     // console.log('Fetching revenue data...');
    //     await new Promise((resolve) => setTimeout(resolve, 3000));
    //
    //     const data = await sql<Revenue>`SELECT * FROM revenue`;
    //
    //     // console.log('Data fetch completed after 3 seconds.');
    //
    //     return data.rows;
    // } catch (error) {
    //     console.error('Database Error:', error);
    //     throw new Error('Failed to fetch revenue data.');
    // }

    try {
        const url = 'http://localhost:8080/cs-support-service/dashboard/revenue';

        const res = await fetch(url);

        return await res.json();
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }


}