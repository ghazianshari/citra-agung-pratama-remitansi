import Hero from "@/components/Hero";
import HubungiKami from "@/components/HubungiKami";
import LayananKami from "@/components/LayananKami";
import TentangKami from "@/components/TentangKami";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <LayananKami />
      <TentangKami />
      <HubungiKami />
    </div>
  );
}
