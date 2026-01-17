"use client";

import Hero from "@/components/Hero";
import Rules from "@/components/Rules";
import { ArrowRight, Target, Shield, Rocket, Download, Wallet, CheckCircle, Circle, Users, Trophy, Calendar, MessageSquare, Twitter, Heart, Zap } from "lucide-react";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const phases = [
  {
    id: 1,
    name: "Phase 1: Launch & Foundation",
    status: "in-progress",
    items: [
      "Launch on pump.fun",
      "Website launch",
      "Initial community building",
      "Blue Dog Rules publication",
      "Social media presence (Twitter)",
    ],
  },
  {
    id: 2,
    name: "Phase 2: Community Growth",
    status: "upcoming",
    items: [
      "Reach 1,000 holders",
      "Meme contests and giveaways",
      "Community governance discussions",
      "Telegram/Discord launch",
      "First corporate campaign launch",
    ],
  },
  {
    id: 3,
    name: "Phase 3: Activism & Impact",
    status: "upcoming",
    items: [
      "Major corporate overpricing exposé campaigns",
      "Partnership with consumer rights organizations",
      "Cost-of-living dashboard development",
      "NFT collection launch",
      "Merchandise store",
    ],
  },
  {
    id: 4,
    name: "Phase 4: Expansion",
    status: "upcoming",
    items: [
      "CEX listings",
      "International campaigns",
      "Documentary/media production",
      "Community-funded legal actions",
      "Major exchange listing",
    ],
  },
];

const faqs = [
  {
    q: "What is $BLUEDOG?",
    a: "$BLUEDOG is a community-driven meme coin on Solana that represents the fight against corporate overpricing and greed. Blue Dog stands at the Capitol, fighting for the people and demanding economic justice through community action and strategic activism.",
  },
  {
    q: "Is this community-driven?",
    a: "Yes! $BLUEDOG is 100% community-driven. There&apos;s no marketing budget or team investment—it&apos;s pure launch, community-powered growth, and holder-driven campaigns.",
  },
  {
    q: "What is the total supply?",
    a: "The total supply is 1,000,000,000 (1 billion) $BLUEDOG tokens, following the standard pump.fun tokenomics.",
  },
  {
    q: "What are the Blue Dog Rules?",
    a: "The Blue Dog Rules are 13 revolutionary principles that guide how we fight corporate overpricing. They&apos;re adapted from proven organizing methods and form the foundation of our approach to activism and community organizing.",
  },
  {
    q: "How do I buy $BLUEDOG?",
    a: "You can buy $BLUEDOG on pump.fun using a Solana wallet like Phantom or Solflare. See the 'How to Buy' section above for detailed instructions.",
  },
  {
    q: "Can I donate to support the cause?",
    a: "Yes! While $BLUEDOG is community-driven, donations are welcome to help fund campaigns, awareness efforts, and activism initiatives. Every contribution helps the fight against corporate overpricing.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Hero />

      {/* Value Proposition */}
      <section id="about" className="py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-primary-blue-dark mb-4">
              About Blue Dog
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Standing at the Capitol, fighting for the people. Blue Dog is the revolutionary meme coin 
              dedicated to combating corporate greed and overpricing.
            </p>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded max-w-2xl mx-auto">
              <p className="text-green-800 font-semibold">
                🐕 100% Community-Driven • No Marketing Budget • Pure Launch
              </p>
            </div>
          </div>

          {/* Origin Story */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-primary-blue-light to-primary-blue rounded-xl p-8 md:p-12 text-white">
              <h3 className="font-display font-bold text-3xl md:text-4xl mb-4">The Origin Story</h3>
            <p className="text-lg text-white/90 leading-relaxed mb-4">
              Blue Dog emerged as a symbol of resistance, standing boldly in front of the U.S. Capitol—a watchdog 
              for the people, a defender of fair prices, and a champion of economic justice. In a world where 
              corporations continue to price-gouge and exploit consumers, Blue Dog represents the collective power 
              of the people to demand better.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              This isn&apos;t just a meme coin—it&apos;s a movement. Blue Dog fights using strategic methods to expose 
              corporate overpricing, hold companies accountable, and advocate for consumer rights. Every holder 
              becomes part of this revolutionary fight.
            </p>
            </div>
          </div>

          {/* Mission */}
          <div className="mb-16">
            <h3 className="font-display font-bold text-4xl text-center text-primary-blue-dark mb-12">
              Our Mission
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 rounded-xl p-8">
                <Target className="text-primary-blue mb-4" size={48} />
                <h4 className="font-bold text-2xl mb-3 text-primary-blue-dark">Combat Corporate Greed</h4>
                <p className="text-gray-600">
                  We expose and fight against corporate overpricing, price gouging, and exploitative business practices.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8">
                <Shield className="text-primary-blue mb-4" size={48} />
                <h4 className="font-bold text-2xl mb-3 text-primary-blue-dark">Protect Consumer Rights</h4>
                <p className="text-gray-600">
                  Blue Dog advocates for fair pricing, transparency, and consumer protection.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8">
                <Users className="text-primary-blue mb-4" size={48} />
                <h4 className="font-bold text-2xl mb-3 text-primary-blue-dark">Build Community Power</h4>
                <p className="text-gray-600">
                  Together, we create a powerful community that uses collective action, memes, and strategic activism.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8">
                <Zap className="text-primary-blue mb-4" size={48} />
                <h4 className="font-bold text-2xl mb-3 text-primary-blue-dark">Drive Real Change</h4>
                <p className="text-gray-600">
                  Through awareness campaigns, partnerships, and community action, Blue Dog creates tangible impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blue Dog Rules */}
      <section id="rules" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-5xl md:text-6xl text-primary-blue-dark mb-4">
              Blue Dog Rules
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              The 13 revolutionary rules that guide Blue Dog&apos;s fight against corporate overpricing and greed.
            </p>
            <p className="text-gray-500 max-w-2xl mx-auto">
              These rules form the foundation of how Blue Dog approaches activism, organizing, and fighting for fair prices.
            </p>
          </div>
          <Rules />
          <div className="mt-16 bg-primary-blue-dark text-white rounded-xl p-8 text-center">
            <h3 className="font-display font-bold text-3xl mb-4">Ready to Apply the Rules?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join the Blue Dog revolution and help us fight corporate overpricing using these powerful principles.
            </p>
            <a
              href="https://pump.fun/coin/B1ydv4JzMzVXf5ekdVsQXWHgTUHsSiAib7XM1WCdpump"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent-red text-white px-8 py-4 rounded-full font-bold hover:bg-red-600 transition-colors mr-4"
            >
              Buy $BLUEDOG on pump.fun
            </a>
            <a
              href="https://x.com/Blue_Dog_meme"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold hover:bg-white/30 transition-colors border-2 border-white/30"
            >
              Join the Community
            </a>
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section id="tokenomics" className="py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-5xl md:text-6xl text-primary-blue-dark mb-4">
              Tokenomics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent, fair, and designed for the long-term success of the Blue Dog revolution.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-primary-blue-light to-primary-blue rounded-xl p-8 text-white">
                <h3 className="font-bold text-3xl mb-6">Token Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-white/80">Token Symbol</span>
                    <span className="font-bold text-2xl">$BLUEDOG</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Total Supply</span>
                    <span className="font-bold text-2xl">1,000,000,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Chain</span>
                    <span className="font-bold text-xl">Solana</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Platform</span>
                    <span className="font-bold text-xl">pump.fun</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="font-bold text-3xl text-primary-blue-dark mb-6">Distribution</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">Liquidity</span>
                      <span className="text-primary-blue font-bold">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-primary-blue h-3 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">900,000,000 $BLUEDOG</p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">Marketing/Team</span>
                      <span className="text-accent-red font-bold">10%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-accent-red h-3 rounded-full" style={{ width: "10%" }}></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">100,000,000 $BLUEDOG</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary-blue-dark text-white rounded-xl p-8">
              <h3 className="font-bold text-2xl mb-4">Contract Address</h3>
              <p className="text-white/80 mb-4">Contract address will be available after launch on pump.fun.</p>
              <div className="bg-white/10 rounded-lg p-4 font-mono text-sm">
                <span className="text-white/60">Coming soon...</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Buy */}
      <section id="how-to-buy" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-5xl md:text-6xl text-primary-blue-dark mb-4">
              How to Buy $BLUEDOG
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get your $BLUEDOG tokens on pump.fun in just a few simple steps.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 mb-12">
              {[
                { icon: Download, title: "Get a Solana Wallet", desc: "Download Phantom or Solflare wallet" },
                { icon: Wallet, title: "Fund Your Wallet with SOL", desc: "Purchase SOL and send to your wallet" },
                { icon: ArrowRight, title: "Connect to pump.fun", desc: "Visit pump.fun and connect your wallet" },
                { icon: CheckCircle, title: "Buy $BLUEDOG", desc: "Swap SOL for $BLUEDOG tokens" },
              ].map((step, i) => (
                <div key={i} className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="flex gap-6">
                    <div className="w-20 h-20 bg-primary-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <step.icon className="text-white" size={40} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="bg-primary-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                          {i + 1}
                        </span>
                        <h3 className="font-display font-bold text-2xl text-primary-blue-dark">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 text-lg">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-primary-blue-dark text-white rounded-xl p-8 md:p-12 text-center">
              <h3 className="font-display font-bold text-3xl md:text-4xl mb-4">Ready to Buy $BLUEDOG?</h3>
              <p className="text-lg text-white/90 mb-6">Click below to buy $BLUEDOG on pump.fun!</p>
              <a
                href="https://pump.fun/coin/B1ydv4JzMzVXf5ekdVsQXWHgTUHsSiAib7XM1WCdpump"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent-red text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-600 transition-colors"
              >
                Buy on pump.fun
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-5xl md:text-6xl text-primary-blue-dark mb-4">Roadmap</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our strategic plan for building the Blue Dog revolution—100% community-driven.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 hidden md:block"></div>
              {phases.map((phase) => (
                <div key={phase.id} className="relative mb-12 md:mb-16">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center">
                        <Circle className="text-white" size={32} />
                      </div>
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-xl p-8 shadow-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="font-display font-bold text-2xl text-primary-blue-dark">{phase.name}</h3>
                        {phase.status === "in-progress" && (
                          <span className="bg-primary-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                            In Progress
                          </span>
                        )}
                      </div>
                      <ul className="space-y-3">
                        {phase.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <ArrowRight className="text-primary-blue mt-1" size={20} />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section id="community" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-5xl md:text-6xl text-primary-blue-dark mb-4">Community</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join the Blue Dog revolution powered entirely by community.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <a
                href="https://x.com/Blue_Dog_meme"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <Twitter className="text-primary-blue mx-auto mb-4" size={48} />
                <h3 className="font-bold text-xl mb-2">Twitter/X</h3>
                <p className="text-gray-600 mb-4">Follow for updates, memes, and campaigns</p>
                <span className="text-primary-blue font-semibold">Join Twitter →</span>
              </a>
              <div className="bg-gray-100 rounded-xl p-8 text-center opacity-60">
                <MessageSquare className="text-gray-400 mx-auto mb-4" size={48} />
                <h3 className="font-bold text-xl mb-2 text-gray-500">Telegram</h3>
                <p className="text-gray-500 mb-4">Coming soon</p>
              </div>
              <div className="bg-gray-100 rounded-xl p-8 text-center opacity-60">
                <Users className="text-gray-400 mx-auto mb-4" size={48} />
                <h3 className="font-bold text-xl mb-2 text-gray-500">Discord</h3>
                <p className="text-gray-500 mb-4">Coming soon</p>
              </div>
            </div>
            <div className="bg-primary-blue-dark text-white rounded-xl p-8 md:p-12 text-center">
              <Heart className="mx-auto mb-4" size={48} />
              <h3 className="font-display font-bold text-3xl mb-4">Support the Cause</h3>
              <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                $BLUEDOG is 100% community-driven with no marketing budget. Donations are welcome to help fund 
                campaigns, awareness efforts, and activism initiatives. Every contribution helps fight corporate overpricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://pump.fun/coin/B1ydv4JzMzVXf5ekdVsQXWHgTUHsSiAib7XM1WCdpump"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent-red text-white px-8 py-4 rounded-full font-bold hover:bg-red-600 transition-colors"
                >
                  Buy $BLUEDOG
                </a>
                <a
                  href="https://x.com/Blue_Dog_meme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold hover:bg-white/30 transition-colors border-2 border-white/30"
                >
                  Follow on Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-5xl md:text-6xl text-primary-blue-dark mb-4">FAQ</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about $BLUEDOG and the Blue Dog revolution.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-semibold text-lg text-primary-blue-dark pr-8">{faq.q}</span>
                    {openFaq === idx ? (
                      <ChevronUp className="text-primary-blue flex-shrink-0" size={24} />
                    ) : (
                      <ChevronDown className="text-primary-blue flex-shrink-0" size={24} />
                    )}
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary-blue-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">Join the Blue Dog Revolution</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Fight corporate overpricing. Demand economic justice. Build a community-powered movement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://pump.fun/coin/B1ydv4JzMzVXf5ekdVsQXWHgTUHsSiAib7XM1WCdpump"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-red text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-600 transition-colors"
            >
              Buy $BLUEDOG on pump.fun
            </a>
            <a
              href="https://x.com/Blue_Dog_meme"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-colors border-2 border-white/30"
            >
              Follow on Twitter
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
