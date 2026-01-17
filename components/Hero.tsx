"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp, Users, DollarSign } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image - placeholder for Blue Dog Capitol image */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary-blue-dark via-primary-blue to-primary-blue-light"
        style={{
          backgroundImage: "url('/images/blue-dog-capitol.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white mb-6">
            $BLUEDOG
          </h1>
          <p className="text-2xl md:text-4xl text-white mb-4 font-semibold">
            Fighting Corporate Overpricing
          </p>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            One Revolt at a Time
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.a
              href="#"
              className="bg-accent-red text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-600 transition-colors flex items-center gap-2 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Buy on pump.fun
              <ArrowRight size={20} />
            </motion.a>
            <a
              href="#rules"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-colors border-2 border-white/30"
            >
              View Blue Dog Rules
            </a>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <TrendingUp className="text-white mx-auto mb-2" size={32} />
              <p className="text-white/70 text-sm mb-1">Price</p>
              <p className="text-white font-bold text-2xl">$0.0001</p>
              <p className="text-green-300 text-sm mt-1">+0.00%</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <Users className="text-white mx-auto mb-2" size={32} />
              <p className="text-white/70 text-sm mb-1">Holders</p>
              <p className="text-white font-bold text-2xl">1,234</p>
              <p className="text-white/70 text-sm mt-1">Growing fast</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <DollarSign className="text-white mx-auto mb-2" size={32} />
              <p className="text-white/70 text-sm mb-1">Market Cap</p>
              <p className="text-white font-bold text-2xl">$123K</p>
              <p className="text-white/70 text-sm mt-1">Early stage</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
