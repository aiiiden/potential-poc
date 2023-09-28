"use server";

export default async function Header() {
  return (
    <header className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold text-center">Potential POC</h1>
      <p className="text-center text-xs font-medium text-gray-500">
        Proving a flow that uses blockchain technology <br />
        without the user&apos;s knowledge.
      </p>
    </header>
  );
}
