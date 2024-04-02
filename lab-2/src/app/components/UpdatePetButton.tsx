'use client';
import { useRouter } from "next/navigation";

export default function UpdatePetButton({petId}: any) {
    const router = useRouter();
    const handleRouteUpdate = async () => {
        router.push(`/updatePet/${petId}`)
    }

    return (
        <button onClick={handleRouteUpdate}>Update Pet</button>
    );
}