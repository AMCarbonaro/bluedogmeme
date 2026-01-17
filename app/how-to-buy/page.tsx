import { Download, Wallet, ArrowRight, ExternalLink, CheckCircle } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Get a Solana Wallet",
    description: "Download and set up a Solana-compatible wallet like Phantom or Solflare.",
    details: [
      "Download Phantom from phantom.app or Solflare from solflare.com",
      "Create a new wallet and securely store your seed phrase",
      "Never share your seed phrase with anyone",
    ],
    icon: Download,
  },
  {
    number: 2,
    title: "Fund Your Wallet with SOL",
    description: "Purchase SOL from an exchange and send it to your wallet address.",
    details: [
      "Buy SOL on major exchanges (Coinbase, Binance, etc.)",
      "Withdraw SOL to your wallet address",
      "Keep some SOL for transaction fees",
    ],
    icon: Wallet,
  },
  {
    number: 3,
    title: "Connect to pump.fun",
    description: "Visit pump.fun and connect your wallet to buy $BLUEDOG.",
    details: [
      "Go to pump.fun and search for $BLUEDOG",
      "Click 'Connect Wallet' and select your wallet",
      "Authorize the connection",
    ],
    icon: ArrowRight,
  },
  {
    number: 4,
    title: "Buy $BLUEDOG",
    description: "Enter the amount of SOL you want to swap and confirm the transaction.",
    details: [
      "Enter SOL amount or $BLUEDOG amount",
      "Review the transaction details",
      "Confirm in your wallet",
      "Wait for confirmation (usually seconds)",
    ],
    icon: CheckCircle,
  },
];

export default function HowToBuyPage() {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-5xl md:text-6xl text-primary-blue-dark mb-4">
            How to Buy $BLUEDOG
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your $BLUEDOG tokens on pump.fun in just a few simple steps. Join the revolution today!
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-primary-blue rounded-full flex items-center justify-center">
                      <step.icon className="text-white" size={40} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="bg-primary-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        {step.number}
                      </span>
                      <h2 className="font-display font-bold text-2xl text-primary-blue-dark">
                        {step.title}
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-4 text-lg">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Buy Button */}
        <div className="max-w-2xl mx-auto bg-primary-blue-dark text-white rounded-xl p-8 md:p-12 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
            Ready to Buy $BLUEDOG?
          </h2>
          <p className="text-lg text-white/90 mb-6">
            Click below to buy $BLUEDOG on pump.fun. Make sure you have SOL in your wallet!
          </p>
          <a
            href="#"
            className="inline-block bg-accent-red text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-600 transition-colors flex items-center gap-2 mx-auto"
          >
            Buy on pump.fun
            <ExternalLink size={20} />
          </a>
        </div>

        {/* Post-Bonding Info */}
        <div className="max-w-4xl mx-auto mt-16 bg-white rounded-xl p-8 shadow-lg">
          <h2 className="font-display font-bold text-3xl text-primary-blue-dark mb-4">
            After Bonding Complete
          </h2>
          <p className="text-gray-600 mb-4">
            Once the bonding curve completes on pump.fun, $BLUEDOG will be available on decentralized exchanges (DEXs) like Raydium.
          </p>
          <div className="bg-gray-50 rounded-lg p-6 mt-6">
            <h3 className="font-semibold text-lg mb-3">Trading on DEXs:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <span>Find $BLUEDOG on Raydium or Jupiter aggregator</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <span>Connect your wallet (same as pump.fun)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <span>Swap SOL or other tokens for $BLUEDOG</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <span>Tokens appear in your wallet automatically</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Important Notes */}
        <div className="max-w-4xl mx-auto mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
          <h3 className="font-bold text-lg text-yellow-800 mb-2">Important Notes:</h3>
          <ul className="space-y-2 text-yellow-700">
            <li>• Always verify you're on the official pump.fun website</li>
            <li>• Never share your seed phrase or private keys</li>
            <li>• Start with a small amount to test the process</li>
            <li>• Cryptocurrency investments are highly volatile and risky</li>
            <li>• Only invest what you can afford to lose</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
