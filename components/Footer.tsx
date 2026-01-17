import Link from "next/link";
import { Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-blue-dark text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-display font-bold text-xl mb-4">$BLUEDOG</h3>
            <p className="text-gray-300 text-sm">
              Fighting corporate overpricing, one token at a time. The Blue Dog revolution starts here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="/#about" className="hover:text-white transition-colors">
                  About Blue Dog
                </a>
              </li>
              <li>
                <a href="/#rules" className="hover:text-white transition-colors">
                  Blue Dog Rules
                </a>
              </li>
              <li>
                <a href="/#tokenomics" className="hover:text-white transition-colors">
                  Tokenomics
                </a>
              </li>
              <li>
                <a href="/#how-to-buy" className="hover:text-white transition-colors">
                  How to Buy
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="/#roadmap" className="hover:text-white transition-colors">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/#community" className="hover:text-white transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://x.com/Blue_Dog_meme"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <p className="text-xs text-gray-400 text-center mb-4">
            <strong>Disclaimer:</strong> This is not financial advice. Cryptocurrency investments are highly volatile and risky. 
            You may lose all of your investment. Always do your own research and only invest what you can afford to lose.
          </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
            <a href="/#faq" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="/#faq" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <span>•</span>
            <a href="/#faq" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
          <p className="text-xs text-gray-500 text-center mt-4">
            © 2024 $BLUEDOG. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
