'use client';
import { useRouter } from "next/navigation";

export default function DeletePetButton({petId}: any) {
    const router = useRouter();
    const handleDelete = async () => {
        try {
            await fetch(`/api/pet/${petId}`, {
                method: 'DELETE'
            })
            router.refresh();
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <button onClick={handleDelete}>Delete Post</button>
    );
}