"use client";

import { motion } from "framer-motion";
import { TrendingUp, Wallet, Users, Lock } from "lucide-react";

const data = [
  { name: "Liquidity", value: 90, color: "#3b82f6" },
  { name: "Marketing/Team", value: 10, color: "#ef4444" },
];

export default function Tokenomics() {
  return (
    <div className="space-y-12">
      {/* Token Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary-blue-light to-primary-blue rounded-xl p-8 text-white"
        >
          <h3 className="font-bold text-3xl mb-6">Token Details</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-white/80">Token Symbol</span>
              <span className="font-bold text-2xl">$BLUEDOG</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/80">Total Supply</span>
              <span className="font-bold text-2xl">1,000,000,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/80">Chain</span>
              <span className="font-bold text-xl">Solana</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/80">Platform</span>
              <span className="font-bold text-xl">pump.fun</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-xl p-8"
        >
          <h3 className="font-bold text-3xl text-primary-blue-dark mb-6">Distribution</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 font-semibold">Liquidity</span>
                <span className="text-primary-blue font-bold">90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-primary-blue h-3 rounded-full" style={{ width: "90%" }}></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">900,000,000 $BLUEDOG</p>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 font-semibold">Marketing/Team</span>
                <span className="text-accent-red font-bold">10%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-accent-red h-3 rounded-full" style={{ width: "10%" }}></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">100,000,000 $BLUEDOG</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Chart - Simple CSS version since recharts requires additional setup */}
      <div className="bg-white rounded-xl p-8 shadow-lg">
        <h3 className="font-bold text-3xl text-primary-blue-dark mb-8 text-center">Token Distribution</h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="relative w-64 h-64">
            <svg viewBox="0 0 100 100" className="transform -rotate-90">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="8"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="8"
                strokeDasharray={`${90 * 2.513} ${100 * 2.513}`}
                strokeDashoffset="0"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-blue-dark">1B</div>
                <div className="text-sm text-gray-600">Total Supply</div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-primary-blue"></div>
              <div>
                <div className="font-semibold text-lg">90% Liquidity</div>
                <div className="text-sm text-gray-600">900M $BLUEDOG</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-accent-red"></div>
              <div>
                <div className="font-semibold text-lg">10% Marketing/Team</div>
                <div className="text-sm text-gray-600">100M $BLUEDOG</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gray-50 rounded-xl p-6 text-center">
          <TrendingUp className="text-primary-blue mx-auto mb-3" size={32} />
          <h4 className="font-semibold mb-2">pump.fun Bond Curve</h4>
          <p className="text-sm text-gray-600">Standard pump.fun tokenomics with bonding curve mechanism</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 text-center">
          <Wallet className="text-primary-blue mx-auto mb-3" size={32} />
          <h4 className="font-semibold mb-2">Fair Launch</h4>
          <p className="text-sm text-gray-600">90% to liquidity ensures fair distribution for all holders</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 text-center">
          <Lock className="text-primary-blue mx-auto mb-3" size={32} />
          <h4 className="font-semibold mb-2">Transparent</h4>
          <p className="text-sm text-gray-600">All allocations clearly defined and verifiable on-chain</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 text-center">
          <Users className="text-primary-blue mx-auto mb-3" size={32} />
          <h4 className="font-semibold mb-2">Community Driven</h4>
          <p className="text-sm text-gray-600">10% for marketing supports community growth and campaigns</p>
        </div>
      </div>

      {/* Contract Address */}
      <div className="bg-primary-blue-dark text-white rounded-xl p-8">
        <h3 className="font-bold text-2xl mb-4">Contract Address</h3>
        <p className="text-white/80 mb-4">
          Contract address will be available after launch on pump.fun. Check back soon for the verified contract.
        </p>
        <div className="bg-white/10 rounded-lg p-4 font-mono text-sm break-all">
          <span className="text-white/60">Coming soon...</span>
        </div>
      </div>
    </div>
  );
}
