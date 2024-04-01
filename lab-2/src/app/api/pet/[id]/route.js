import {NextResponse} from "next/server";
import prisma from "../../../../../lib/prisma";

export async function DELETE(request, {params}) {
    const id = params.id;
    const pet = await prisma.pet.delete({
        where: {id}
    })
    return NextResponse.json(request);
}