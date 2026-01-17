import Tokenomics from "@/components/Tokenomics";

export default function TokenomicsPage() {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-5xl md:text-6xl text-primary-blue-dark mb-4">
            Tokenomics
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent, fair, and designed for the long-term success of the Blue Dog revolution.
          </p>
        </div>

        <Tokenomics />
      </div>
    </div>
  );
}
