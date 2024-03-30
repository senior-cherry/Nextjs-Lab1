import main from "../../scripts/seed";

export default function Home() {
  console.log(process.env.SERVER_VARIABLE)
  console.log(process.env.BROWSER_VARIABLE)
    main();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span>{process.env.SERVER_VARIABLE}</span>
      <span>{process.env.BROWSER_VARIABLE}</span>
    </main>
  );
}
