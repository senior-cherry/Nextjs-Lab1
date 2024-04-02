import {NextResponse} from "next/server";
import prisma from "../../../../../lib/prisma";

export async function PATCH(request, {params}) {
    const id = params.id;
    const res = await request.json();
    const {name, species, age} = res;
    const result = await prisma.pet.update({
        data: {
            name,
            species,
            age,
            category: {create: {
                    name: 'Dogs',
                    description: 'Category'
                }}
        },
        where: id
    })
    return NextResponse.json({data: res})
}

