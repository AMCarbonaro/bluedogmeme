import { Target, Shield, Users, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-5xl md:text-6xl text-primary-blue-dark mb-6">
            About Blue Dog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Standing at the Capitol, fighting for the people. Blue Dog is the revolutionary meme coin 
            dedicated to combating corporate greed and overpricing.
          </p>
        </div>

        {/* Origin Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-primary-blue-light to-primary-blue rounded-xl p-8 md:p-12 text-white mb-8">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">The Origin Story</h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Blue Dog emerged as a symbol of resistance, standing boldly in front of the U.S. Capitol—a watchdog 
              for the people, a defender of fair prices, and a champion of economic justice. In a world where 
              corporations continue to price-gouge and exploit consumers, Blue Dog represents the collective power 
              of the people to demand better.
            </p>
            <p className="text-lg text-white/90 leading-relaxed mt-4">
              This isn't just a meme coin—it's a movement. Blue Dog fights using strategic methods to expose 
              corporate overpricing, hold companies accountable, and advocate for consumer rights. Every holder 
              becomes part of this revolutionary fight.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="mb-16">
          <h2 className="font-display font-bold text-4xl text-center text-primary-blue-dark mb-12">
            Our Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8">
              <Target className="text-primary-blue mb-4" size={48} />
              <h3 className="font-bold text-2xl mb-3 text-primary-blue-dark">Combat Corporate Greed</h3>
              <p className="text-gray-600">
                We expose and fight against corporate overpricing, price gouging, and exploitative business practices 
                that harm consumers.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <Shield className="text-primary-blue mb-4" size={48} />
              <h3 className="font-bold text-2xl mb-3 text-primary-blue-dark">Protect Consumer Rights</h3>
              <p className="text-gray-600">
                Blue Dog advocates for fair pricing, transparency, and consumer protection. We hold corporations 
                accountable to their promises.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <Users className="text-primary-blue mb-4" size={48} />
              <h3 className="font-bold text-2xl mb-3 text-primary-blue-dark">Build Community Power</h3>
              <p className="text-gray-600">
                Together, we create a powerful community that uses collective action, memes, and strategic activism 
                to demand economic justice.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <Zap className="text-primary-blue mb-4" size={48} />
              <h3 className="font-bold text-2xl mb-3 text-primary-blue-dark">Drive Real Change</h3>
              <p className="text-gray-600">
                Through awareness campaigns, partnerships, and community action, Blue Dog creates tangible impact 
                in the fight for fair pricing.
              </p>
            </div>
          </div>
        </div>

        {/* Revolutionary Narrative */}
        <div className="bg-primary-blue-dark text-white rounded-xl p-8 md:p-12 max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
            The Revolutionary Narrative
          </h2>
          <p className="text-lg text-white/90 leading-relaxed mb-6">
            Blue Dog isn't just watching from the sidelines—we're actively fighting. As the watchdog for fair pricing 
            and the defender of consumer rights, Blue Dog uses proven methods to challenge corporate power structures. 
            Our 13 revolutionary rules guide our approach, ensuring we fight smart and fight effectively.
          </p>
          <p className="text-lg text-white/90 leading-relaxed">
            Whether it's exposing overpricing, organizing community campaigns, or partnering with consumer rights 
            organizations, Blue Dog represents the power of the people to demand economic justice. Join the revolution 
            and help us make corporate greed a thing of the past.
          </p>
          <div className="mt-8">
            <a
              href="/rules"
              className="inline-block bg-accent-red text-white px-8 py-4 rounded-full font-bold hover:bg-red-600 transition-colors"
            >
              Learn Blue Dog's Rules
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
