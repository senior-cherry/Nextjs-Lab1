import Link from "next/link";
import PagesLayout from "@/app/profile/layout";
import Settings from "@/app/profile/settings/page";
import Security from "@/app/profile/security/page";
import Articles from "@/app/articles/page";
import Header from "@/app/components/Header";
import RootLayout from "@/app/layout";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Header />
        <Link href="/articles">Articles</Link>
        <Link href="/articles/favorite">Favorite</Link>
        <Link href="/articles/create">Create</Link>
        <Link href="/profile/settings">Settings</Link>
        <Link href="/profile/security">Security</Link>
    </main>
  );
}
