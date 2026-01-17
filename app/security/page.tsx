import { Shield, Lock, Eye, CheckCircle, AlertTriangle } from "lucide-react";

export default function SecurityPage() {
  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-5xl md:text-6xl text-primary-blue-dark mb-4">
            Security & Transparency
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your security and trust are our top priorities. We're committed to complete transparency.
          </p>
        </div>

        {/* Security Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <Shield className="text-primary-blue mx-auto mb-4" size={48} />
            <h3 className="font-bold text-2xl mb-3">Smart Contract</h3>
            <p className="text-gray-600">
              Contract deployed on Solana blockchain. Code will be publicly verifiable after launch.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <Lock className="text-primary-blue mx-auto mb-4" size={48} />
            <h3 className="font-bold text-2xl mb-3">Liquidity Lock</h3>
            <p className="text-gray-600">
              90% of tokens allocated to liquidity ensures fair distribution and reduces rug pull risk.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <Eye className="text-primary-blue mx-auto mb-4" size={48} />
            <h3 className="font-bold text-2xl mb-3">Full Transparency</h3>
            <p className="text-gray-600">
              All tokenomics, allocations, and transactions are publicly visible on the blockchain.
            </p>
          </div>
        </div>

        {/* Contract Information */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-primary-blue-dark text-white rounded-xl p-8">
            <h2 className="font-display font-bold text-3xl mb-6">Contract Information</h2>
            <div className="space-y-4">
              <div>
                <p className="text-white/80 mb-2">Contract Address:</p>
                <div className="bg-white/10 rounded-lg p-4 font-mono text-sm break-all">
                  <span className="text-white/60">Coming soon after launch on pump.fun</span>
                </div>
              </div>
              <div>
                <p className="text-white/80 mb-2">Network:</p>
                <p className="text-white font-semibold">Solana Mainnet</p>
              </div>
              <div>
                <p className="text-white/80 mb-2">Platform:</p>
                <p className="text-white font-semibold">pump.fun</p>
              </div>
            </div>
          </div>
        </div>

        {/* Audit Status */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="font-display font-bold text-3xl text-primary-blue-dark mb-6">
              Audit Information
            </h2>
            <p className="text-gray-600 mb-4">
              As $BLUEDOG is launched on pump.fun, the smart contract follows pump.fun's standard, audited contract template. 
              This ensures the security and reliability of the token.
            </p>
            <div className="bg-white rounded-lg p-6 mt-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">pump.fun Verified</h3>
                  <p className="text-gray-600">
                    pump.fun uses audited smart contracts for all token launches, providing a secure foundation for $BLUEDOG.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-6 italic">
              Note: Future independent audits may be conducted as the project grows.
            </p>
          </div>
        </div>

        {/* Transparency Metrics */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl text-primary-blue-dark mb-8 text-center">
            Transparency Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-xl mb-3">Token Distribution</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 90% Liquidity (publicly visible)</li>
                <li>• 10% Marketing/Team (allocation tracked)</li>
                <li>• No hidden allocations</li>
                <li>• No team tokens without vesting</li>
              </ul>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-xl mb-3">On-Chain Verification</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• All transactions public on Solana</li>
                <li>• Holder distribution visible</li>
                <li>• Liquidity pool status trackable</li>
                <li>• Contract code verifiable</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Security Tips */}
        <div className="max-w-4xl mx-auto bg-yellow-50 border-l-4 border-yellow-400 p-8 rounded-r-lg">
          <div className="flex items-start gap-4">
            <AlertTriangle className="text-yellow-600 flex-shrink-0" size={32} />
            <div>
              <h3 className="font-bold text-xl text-yellow-800 mb-4">Stay Safe: Security Tips</h3>
              <ul className="space-y-2 text-yellow-700">
                <li>• Always verify you're on the official pump.fun website</li>
                <li>• Never share your wallet seed phrase or private keys</li>
                <li>• Only use official links from our website or verified social media</li>
                <li>• Be cautious of fake websites or phishing attempts</li>
                <li>• Double-check contract addresses before transacting</li>
                <li>• If something seems too good to be true, it probably is</li>
                <li>• Report any suspicious activity to our community</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Risk Disclaimer */}
        <div className="max-w-4xl mx-auto mt-16 bg-red-50 border-l-4 border-red-400 p-8 rounded-r-lg">
          <h3 className="font-bold text-xl text-red-800 mb-4">Risk Disclaimer</h3>
          <p className="text-red-700 mb-4">
            Cryptocurrency investments are highly volatile and risky. The value of $BLUEDOG can go up or down dramatically. 
            You may lose all of your investment. This is not financial advice.
          </p>
          <ul className="space-y-2 text-red-700">
            <li>• Only invest what you can afford to lose</li>
            <li>• Do your own research (DYOR)</li>
            <li>• Cryptocurrencies are unregulated in many jurisdictions</li>
            <li>• No guarantees of returns or price appreciation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
