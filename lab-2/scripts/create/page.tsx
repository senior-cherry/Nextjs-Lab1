import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

const Create = () => {
    return (
        <div>
            <form>
                <input type="text" />
                <input type="text" />
            </form>
        </div>
    );
}

export default Create;