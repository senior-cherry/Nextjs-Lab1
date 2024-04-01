import {NextResponse} from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(request) {
    const res = await request.json();
    const {name, species, age} = res;
    const result = await prisma.pet.create({
        data: {
            name,
            species,
            age,
            category: {create: {
                name: 'Dogs',
                description: 'Category'
                }}
        }
    })
    return NextResponse.json({data: res})
}