import { FileText, Target, TrendingUp, Users, Shield } from "lucide-react";

export default function WhitepaperPage() {
  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <FileText className="text-primary-blue mx-auto mb-6" size={64} />
          <h1 className="font-display font-bold text-5xl md:text-6xl text-primary-blue-dark mb-4">
            $BLUEDOG Whitepaper
          </h1>
          <p className="text-xl text-gray-600">
            The Blue Dog Revolution: Fighting Corporate Overpricing Through Community Action
          </p>
        </div>

        {/* Executive Summary */}
        <section className="mb-16">
          <h2 className="font-display font-bold text-3xl text-primary-blue-dark mb-4">
            Executive Summary
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            $BLUEDOG is a meme coin built on Solana that represents a revolutionary movement against corporate 
            overpricing and greed. Inspired by the image of a Blue Dog standing at the U.S. Capitol, this token 
            symbolizes the watchdog fighting for the people, demanding fair prices, and holding corporations accountable.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Unlike typical meme coins, $BLUEDOG has a clear mission: to combat corporate overpricing through 
            strategic activism, community organizing, and the application of proven methods for social change. 
            Our 13 revolutionary rules guide our approach and empower our community to create real-world impact.
          </p>
        </section>

        {/* Problem Statement */}
        <section className="mb-16 bg-red-50 rounded-xl p-8 border-l-4 border-red-400">
          <Target className="text-red-600 mb-4" size={48} />
          <h2 className="font-display font-bold text-3xl text-primary-blue-dark mb-4">
            The Problem: Corporate Overpricing
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Corporations continue to price-gouge consumers, creating artificial inflation and exploiting market 
            positions. From essential goods to services, companies maximize profits at the expense of ordinary people. 
            Traditional consumer protection mechanisms are often slow, underfunded, or ineffective.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The result: everyday people pay inflated prices while corporations report record profits. This system 
            perpetuates economic inequality and erodes consumer trust. Something must change.
          </p>
        </section>

        {/* Solution */}
        <section className="mb-16 bg-green-50 rounded-xl p-8 border-l-4 border-green-400">
          <Shield className="text-green-600 mb-4" size={48} />
          <h2 className="font-display font-bold text-3xl text-primary-blue-dark mb-4">
            The Solution: Blue Dog Revolution
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            $BLUEDOG creates a decentralized community of activists, consumers, and advocates united by a common goal: 
            fighting corporate overpricing through strategic action. We combine the power of meme culture with proven 
            organizing methods to create visibility, build pressure, and demand change.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our approach is guided by 13 revolutionary rules—strategic principles that enable effective activism and 
            community organizing. These rules help us expose overpricing, hold corporations accountable, and create 
            campaigns that generate real impact.
          </p>
        </section>

        {/* Token Mechanics */}
        <section className="mb-16">
          <TrendingUp className="text-primary-blue mb-4" size={48} />
          <h2 className="font-display font-bold text-3xl text-primary-blue-dark mb-4">
            Token Mechanics & Economics
          </h2>
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="font-bold text-xl mb-4">Token Details</h3>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Token Symbol:</strong> $BLUEDOG</li>
              <li><strong>Blockchain:</strong> Solana</li>
              <li><strong>Total Supply:</strong> 1,000,000,000 (1 billion tokens)</li>
              <li><strong>Platform:</strong> pump.fun (Solana-based token launchpad)</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-xl p-8 mt-6">
            <h3 className="font-bold text-xl mb-4">Distribution</h3>
            <ul className="space-y-3 text-gray-700">
              <li><strong>90% Liquidity Pool:</strong> Ensures fair distribution, reduces rug pull risk, and provides trading liquidity</li>
              <li><strong>10% Marketing/Team:</strong> Supports community growth, campaigns, partnerships, and operational needs</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-xl p-8 mt-6">
            <h3 className="font-bold text-xl mb-4">pump.fun Bond Curve</h3>
            <p className="text-gray-700">
              $BLUEDOG launches on pump.fun's bonding curve mechanism. Early buyers get better prices, and as the curve 
              progresses, price increases until bonding completes. After bonding, the token is automatically listed on 
              decentralized exchanges (DEXs) like Raydium.
            </p>
          </div>
        </section>

        {/* Use Cases & Utility */}
        <section className="mb-16">
          <Users className="text-primary-blue mb-4" size={48} />
          <h2 className="font-display font-bold text-3xl text-primary-blue-dark mb-4">
            Use Cases & Utility
          </h2>
          <div className="space-y-4 text-gray-700">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">Community Governance</h3>
              <p>Holders participate in decisions about campaigns, partnerships, and community actions.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">Campaign Funding</h3>
              <p>Community treasury funds awareness campaigns, exposés, and consumer rights initiatives.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">Meme & Media Production</h3>
              <p>Resources for creating viral content that exposes corporate overpricing and builds public pressure.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">Partnerships</h3>
              <p>Funding partnerships with consumer rights organizations and advocacy groups.</p>
            </div>
          </div>
        </section>

        {/* The Blue Dog Rules */}
        <section className="mb-16">
          <h2 className="font-display font-bold text-3xl text-primary-blue-dark mb-4">
            The Blue Dog Rules
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our 13 revolutionary rules guide how Blue Dog fights corporate overpricing. These principles are adapted 
            from proven methods of organizing and activism, providing a framework for effective action.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The rules emphasize: power through perception, targeting corporate weaknesses, holding companies accountable 
            to their promises, using humor and memes effectively, maintaining constant pressure, and providing constructive 
            alternatives. Read the full rules on our <a href="/rules" className="text-primary-blue font-semibold hover:underline">Rules page</a>.
          </p>
        </section>

        {/* Roadmap & Future Plans */}
        <section className="mb-16">
          <h2 className="font-display font-bold text-3xl text-primary-blue-dark mb-4">
            Roadmap & Future Plans
          </h2>
          <div className="space-y-4 text-gray-700">
            <p><strong>Phase 1:</strong> Launch on pump.fun, website launch, initial community building</p>
            <p><strong>Phase 2:</strong> Community growth, meme contests, first corporate campaigns</p>
            <p><strong>Phase 3:</strong> Major campaigns, partnerships with consumer rights orgs, NFT collection, merch</p>
            <p><strong>Phase 4:</strong> CEX listings, international campaigns, documentary production, major exchange listing</p>
          </div>
          <p className="mt-6">
            <a href="/roadmap" className="text-primary-blue font-semibold hover:underline">
              View detailed roadmap →
            </a>
          </p>
        </section>

        {/* Risks & Disclaimers */}
        <section className="mb-16 bg-yellow-50 rounded-xl p-8 border-l-4 border-yellow-400">
          <h2 className="font-display font-bold text-3xl text-primary-blue-dark mb-4">
            Risks & Important Disclaimers
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Cryptocurrency investments are highly volatile and risky.</strong> The value of $BLUEDOG can go up 
            or down dramatically, and you may lose all of your investment. This whitepaper is not financial advice.
          </p>
          <ul className="space-y-2 text-gray-700 list-disc list-inside">
            <li>Only invest what you can afford to lose</li>
            <li>Do your own research (DYOR)</li>
            <li>Cryptocurrencies are unregulated in many jurisdictions</li>
            <li>No guarantees of returns or price appreciation</li>
            <li>Market manipulation and scams exist in the crypto space</li>
            <li>Smart contract risks and technical vulnerabilities</li>
          </ul>
        </section>

        {/* Conclusion */}
        <section className="mb-16 bg-primary-blue-dark text-white rounded-xl p-8 md:p-12">
          <h2 className="font-display font-bold text-3xl mb-4">Conclusion</h2>
          <p className="text-white/90 leading-relaxed mb-6">
            $BLUEDOG represents more than a meme coin—it's a movement. By combining the viral power of memes with 
            strategic activism and community organizing, we can fight corporate overpricing and demand economic justice.
          </p>
          <p className="text-white/90 leading-relaxed">
            Join the Blue Dog revolution. Stand with us at the Capitol. Fight for fair prices. Demand accountability. 
            Together, we can create change.
          </p>
          <div className="mt-8">
            <a
              href="https://pump.fun/coin/B1ydv4JzMzVXf5ekdVsQXWHgTUHsSiAib7XM1WCdpump"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent-red text-white px-8 py-4 rounded-full font-bold hover:bg-red-600 transition-colors"
            >
              Join the Revolution - Buy $BLUEDOG
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
