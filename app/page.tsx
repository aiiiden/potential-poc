"use server";

import Header from "../components/Header";
import StepArea from "../components/StepArea";

export default async function Home() {
  return (
    <main className="flex flex-col justify-center min-h-screen bg-gray-200">
      <div className="max-w-xl mx-auto py-5 px-5 flex flex-col gap-5">
        <Header />
        <StepArea />
      </div>
    </main>
  );
}
