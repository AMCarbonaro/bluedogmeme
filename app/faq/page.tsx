"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What is $BLUEDOG?",
        a: "$BLUEDOG is a meme coin on Solana that represents the fight against corporate overpricing and greed. Blue Dog stands at the Capitol, fighting for the people and demanding economic justice through community action and strategic activism.",
      },
      {
        q: "What is the total supply?",
        a: "The total supply is 1,000,000,000 (1 billion) $BLUEDOG tokens, following the standard pump.fun tokenomics.",
      },
      {
        q: "How is $BLUEDOG different from other meme coins?",
        a: "$BLUEDOG has a clear mission: fighting corporate overpricing and advocating for consumer rights. We're not just a meme—we're a movement with 13 revolutionary rules guiding our activism and community action.",
      },
      {
        q: "What are the Blue Dog Rules?",
        a: "The Blue Dog Rules are 13 revolutionary principles that guide how we fight corporate overpricing. They're adapted from proven organizing methods and form the foundation of our approach to activism and community organizing. You can read all 13 rules on our Rules page.",
      },
    ],
  },
  {
    category: "Buying & Trading",
    questions: [
      {
        q: "How do I buy $BLUEDOG?",
        a: "You can buy $BLUEDOG on pump.fun using a Solana wallet like Phantom or Solflare. Visit our 'How to Buy' page for detailed step-by-step instructions.",
      },
      {
        q: "What wallet do I need?",
        a: "You need a Solana-compatible wallet like Phantom (phantom.app) or Solflare (solflare.com). These wallets are easy to set up and secure.",
      },
      {
        q: "Where can I buy $BLUEDOG?",
        a: "$BLUEDOG is available on pump.fun during the bonding curve phase. After bonding completes, it will be available on DEXs like Raydium and Jupiter.",
      },
      {
        q: "Do I need SOL to buy?",
        a: "Yes, you need SOL (Solana's native token) to purchase $BLUEDOG. You can buy SOL on major exchanges like Coinbase or Binance, then send it to your Solana wallet.",
      },
    ],
  },
  {
    category: "Mission & Purpose",
    questions: [
      {
        q: "What is Blue Dog fighting for?",
        a: "Blue Dog fights corporate overpricing, price gouging, and exploitative business practices. We advocate for fair pricing, consumer rights, and economic justice through strategic activism and community organizing.",
      },
      {
        q: "How does $BLUEDOG fight corporations?",
        a: "We use the Blue Dog Rules—strategic methods for exposing overpricing, holding corporations accountable, organizing campaigns, and creating public pressure for change. Our community works together to demand fair prices and corporate accountability.",
      },
      {
        q: "What real-world impact does $BLUEDOG have?",
        a: "As we grow, $BLUEDOG will fund campaigns, partner with consumer rights organizations, create awareness through memes and media, and support community actions that hold corporations accountable for overpricing.",
      },
    ],
  },
  {
    category: "Risks & Legal",
    questions: [
      {
        q: "Is $BLUEDOG a safe investment?",
        a: "Cryptocurrency investments are highly volatile and risky. The value of $BLUEDOG can go up or down dramatically, and you may lose all of your investment. This is not financial advice. Only invest what you can afford to lose.",
      },
      {
        q: "Is this financial advice?",
        a: "No, this is not financial advice. The information on this website is for informational purposes only. Always do your own research (DYOR) and consult with a financial advisor before making investment decisions.",
      },
      {
        q: "What are the risks?",
        a: "Cryptocurrency investments carry significant risks including total loss of investment, extreme volatility, regulatory changes, and market manipulation. Meme coins are particularly risky and speculative. Never invest more than you can afford to lose.",
      },
      {
        q: "Is $BLUEDOG a security?",
        a: "$BLUEDOG is a meme coin and utility token, not a security. However, cryptocurrency regulations vary by jurisdiction. Consult with legal and financial professionals in your area regarding the classification and treatment of cryptocurrencies.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let globalIndex = 0;

  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-5xl md:text-6xl text-primary-blue-dark mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about $BLUEDOG, our mission, and how to get involved.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h2 className="font-display font-bold text-3xl text-primary-blue-dark mb-6">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq) => {
                  const currentIndex = globalIndex++;
                  const isOpen = openIndex === currentIndex;
                  return (
                    <div
                      key={currentIndex}
                      className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleQuestion(currentIndex)}
                        className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-100 transition-colors"
                      >
                        <span className="font-semibold text-lg text-primary-blue-dark pr-8">
                          {faq.q}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="text-primary-blue flex-shrink-0" size={24} />
                        ) : (
                          <ChevronDown className="text-primary-blue flex-shrink-0" size={24} />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6">
                          <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="max-w-4xl mx-auto mt-16 bg-primary-blue-dark text-white rounded-xl p-8 md:p-12 text-center">
          <h2 className="font-display font-bold text-3xl mb-4">Still Have Questions?</h2>
          <p className="text-lg text-white/90 mb-6">
            Join our community on Twitter to ask questions and connect with other $BLUEDOG holders.
          </p>
          <a
            href="https://x.com/Blue_Dog_meme"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent-red text-white px-8 py-4 rounded-full font-bold hover:bg-red-600 transition-colors"
          >
            Join Community
          </a>
        </div>
      </div>
    </div>
  );
}
