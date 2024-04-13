import React from "react";
import { Inter } from "next/font/google";
import MultiStepForm from "@/components/MultiStepForm";
import ExplorerHome from "@/components/ExplorerHome";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className} bg-gray-900`}
    >
      {/* <ExplorerHome /> */}
      <MultiStepForm />
    </main>
  );
}
