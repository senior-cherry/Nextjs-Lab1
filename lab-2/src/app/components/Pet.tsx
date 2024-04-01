import DeletePetButton from "@/app/components/DeletePetButton";

interface Pet {
    id: string,
    name: string,
    species: string,
    age: string,
    skills: string[],
    categoryName: string
}
export default function Pet({id, name, species, age, skills, categoryName}: Pet) {
    return (
        <div>
            <h3>{name}</h3>
            <h4>{species}</h4>
            <h4>{age}</h4>
            <p>{skills}</p>
            <p>{categoryName}</p>
            <DeletePetButton petId={id} />
        </div>
    );
}