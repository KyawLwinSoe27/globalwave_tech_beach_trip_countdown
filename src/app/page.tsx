import React from "react";
import CountdownTimer from "@/app/components/CountdownTimer";

export default function Home() {
  const beachTripDate = '2024-07-19T00:00:00'; // Set your beach trip date here

  return (
    <main className="">
      <CountdownTimer targetDate={beachTripDate} />
    </main>
  );
}
