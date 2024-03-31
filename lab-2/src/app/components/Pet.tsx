import {Category} from ".prisma/client";

interface Pet {
    id: number,
    name: string,
    species: string,
    age: number,
    skills: string[],
}
export default function Pet({id, name, species, age, skills}: Pet) {
    return (
        <div>
            <h3>{name}</h3>
            <h4>{species}</h4>
            <h4>{age}</h4>
            <p>{skills}</p>
        </div>
    );
}