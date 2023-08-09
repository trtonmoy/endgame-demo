import Image from "next/image";
import ServiceCategory from "./components/Sections/Home/ServiceCategory/ServiceCategory";
import GetInTouch from "./components/Sections/Home/GetInTouch/GetInTouch";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ServiceCategory></ServiceCategory>
      <GetInTouch></GetInTouch>
    </main>
  );
}
