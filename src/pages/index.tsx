import React from "react";
import { Inter } from "next/font/google";
import MultiStepForm from "@/components/MultiStepForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen text-white flex-col gap-5 items-center justify-center ${inter.className}`}
    >
      <img
        src="https://framerusercontent.com/images/IXr0RynQNk25lFOjoZoU7DJRpc.png"
        width={180}
      />
      <MultiStepForm />
    </main>
  );
}
