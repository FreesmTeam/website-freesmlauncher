import Hero from "@/components/Hero/Hero";
import Features from "@/components/Features/Features";

export default async function Home() {
    return (
        <div className="text-white">
            <Hero />
            <Features />
        </div>
    );
}
