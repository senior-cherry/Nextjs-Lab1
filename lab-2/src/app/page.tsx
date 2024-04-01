import {Prisma, PrismaClient, PrismaPromise} from '@prisma/client';
import Pet from "../app/components/Pet";
import {DefaultArgs, GetFindResult} from "@prisma/client/runtime/library";
import Link from "next/link";

const prisma = new PrismaClient();

async function getPets(): Promise<PrismaPromise<GetFindResult<Prisma.$PetPayload<DefaultArgs>, {}>[]>> {
  return prisma.pet.findMany({
    include: {
      category: {
        select: {name: true}
      }
    }
  });
}

export default async function Home() {
  // console.log(process.env.SERVER_VARIABLE)
  // console.log(process.env.BROWSER_VARIABLE)

  const pets = await getPets();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={'/addPet'}>Add Pet</Link>
      {/*<span>{process.env.SERVER_VARIABLE}</span>*/}
      {/*<span>{process.env.BROWSER_VARIABLE}</span>*/}
        <h1>Feed</h1>
      {pets.map((pet) => {
        return (
            <Pet id={pet.id} name={pet.name} species={pet.species} age={pet.age} skills={pet.skills} categoryName={pet.category.name} key={pet.id} />
        );
      })}
    </main>
  );
}

