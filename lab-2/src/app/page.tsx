import {Prisma, PrismaClient, PrismaPromise} from '@prisma/client';
import Pet from "../app/components/Pet";
import {DefaultArgs, GetFindResult} from "@prisma/client/runtime/library";
import Link from "next/link";
import Variables from "@/app/variables/page";

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
  console.log(process.env.SERVER_VARIABLE)

  const pets = await getPets();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Variables variable={process.env.BROWSER_PAGE} var_console={process.env.NEXT_PUBLIC_BROWSER_CONSOLE} />
      <Link href={'/addPet'}>Add Pet</Link>
        <h1>Pets</h1>
      {pets.map((pet) => {
        return (
            <Pet id={pet.id} name={pet.name} species={pet.species} age={pet.age} skills={pet.skills} categoryName={pet.category.name} key={pet.id} />
        );
      })}
    </main>
  );
}

