import React from "react";
import { Inter } from "next/font/google";
import MultiStepForm from "@/components/MultiStepForm";
import ExplorerHome from "@/components/ExplorerHome";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen text-white flex-col items-center justify-center ${inter.className}`}
    >
      {/* <ExplorerHome /> */}
      <MultiStepForm />
    </main>
  );
}
