import Directory from "@/components/Directory";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Directory />
    </>
  )
}
