import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Link href="/articles">Articles</Link>
        <Link href="/articles/favorite">Favorite</Link>
        <Link href="/articles/create">Create</Link>
        <Link href="/profile/settings">Settings</Link>
        <Link href="/profile/security">Security</Link>
    </main>
  );
}

