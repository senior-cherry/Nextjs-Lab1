'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// @ts-ignore
export default function updatePet(request, {params}) {
    const [name, setName] = useState('');
    const [species, setSpecies] = useState('');
    const [age, setAge] = useState('');

    const router = useRouter();

    const handleNameChange = (event: any) => {
        setName(event.target.value);
    }

    const handleSpeciesChange = (event: any) => {
        setSpecies(event.target.value);
    }

    const handleAgeChange = (event: any) => {
        setAge(event.target.value);
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();

        try {
            fetch(`/api/update-pet/${params.id}`, {
                method: 'PATCH/PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, species, age})})
            router.refresh();
        } catch (error) {
            console.error(error)
        }

        setName('');
        setSpecies('');
        setAge('');
    }

    return (
        <div>
            <h1>Add Pet</h1>
            <Link href="/">Feed</Link>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={handleNameChange} required />
                </div>
                <div>
                    <label htmlFor="species">Species:</label>
                    <input type="text" id="species" value={species} onChange={handleSpeciesChange} required />
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input type="text" id="age" value={age} onChange={handleAgeChange} required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}