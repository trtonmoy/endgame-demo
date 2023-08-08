import Image from "next/image";
import ServiceCategory from "./components/Sections/Home/ServiceCategory/ServiceCategory";

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <ServiceCategory></ServiceCategory>
    </main>
  );
}
