import { sql } from "@vercel/postgres";

export default async function Pets({
   params
} : {
    params: { user: string }
}): Promise<JSX.Element> {
    const { rows } = await sql`SELECT * from Pets where user_id=${params.user}`;

    return (
        <div>
            {rows.map((row) => (
                <div key={row.id}>
                    {row.id} - {row.quantity}
                </div>
            ))}
        </div>
    );
}