import {NextResponse} from "next/server";
import prisma from "../../../../../lib/prisma";

export async function UPDATE(request, {params}) {
    const id = params.id;
    const res = await request.json();
    const {name, species, age} = res;
    const result = await prisma.pet.update({
        where: id,
        data: {
            name,
            species,
            age
        }
    })
    return NextResponse.json({data: res})
}

