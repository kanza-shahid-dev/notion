import React from "react";
import Heading from "./_components/heading";
import Navbar from "./_components/navbar";
import { Heroes } from "./_components/heroes";
import { Footer } from "./_components/footer";

function page() {
  return (
    <main className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Navbar />
        <Heading />
        <Heroes />
      </div>
      <Footer />
    </main>
  );
}

export default page;
