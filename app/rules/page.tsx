import Rules from "@/components/Rules";

export default function RulesPage() {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-5xl md:text-6xl text-primary-blue-dark mb-4">
            Blue Dog Rules
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            The 13 revolutionary rules that guide Blue Dog's fight against corporate overpricing and greed. 
            These principles empower our community to demand economic justice.
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto">
            These rules form the foundation of how Blue Dog approaches activism, organizing, and fighting for fair prices. 
            Each rule is adapted to our mission of holding corporations accountable and protecting consumers.
          </p>
        </div>

        <Rules />

        <div className="mt-16 bg-primary-blue-dark text-white rounded-xl p-8 text-center">
          <h2 className="font-display font-bold text-3xl mb-4">
            Ready to Apply the Rules?
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Join the Blue Dog revolution and help us fight corporate overpricing using these powerful principles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://pump.fun/coin/B1ydv4JzMzVXf5ekdVsQXWHgTUHsSiAib7XM1WCdpump"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-red text-white px-8 py-4 rounded-full font-bold hover:bg-red-600 transition-colors"
            >
              Buy $BLUEDOG on pump.fun
            </a>
            <a
              href="/community"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold hover:bg-white/30 transition-colors border-2 border-white/30"
            >
              Join the Community
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
