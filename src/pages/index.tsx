import React from "react";
import { Inter } from "next/font/google";
import MultiStepForm from "@/components/MultiStepForm";
import { LOGO_URL } from "@/constants";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen text-white flex-col gap-5 items-center justify-center ${inter.className}`}
    >
      <a href="/">
        <img src={LOGO_URL} width={180} />
      </a>
      <MultiStepForm />
    </main>
  );
}
