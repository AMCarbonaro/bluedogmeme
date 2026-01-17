import { Twitter, Users, Trophy, Calendar, MessageSquare } from "lucide-react";

export default function CommunityPage() {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-5xl md:text-6xl text-primary-blue-dark mb-4">
            Community
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of holders fighting corporate overpricing and demanding economic justice. 
            The Blue Dog revolution is powered by community.
          </p>
        </div>

        {/* Social Links */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl text-center text-primary-blue-dark mb-8">
            Connect With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://x.com/Blue_Dog_meme"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center group"
            >
              <Twitter className="text-primary-blue mx-auto mb-4 group-hover:scale-110 transition-transform" size={48} />
              <h3 className="font-bold text-xl mb-2">Twitter/X</h3>
              <p className="text-gray-600 mb-4">Follow for updates, memes, and campaigns</p>
              <span className="text-primary-blue font-semibold">Join Twitter →</span>
            </a>
            <div className="bg-gray-100 rounded-xl p-8 text-center opacity-60">
              <MessageSquare className="text-gray-400 mx-auto mb-4" size={48} />
              <h3 className="font-bold text-xl mb-2 text-gray-500">Telegram</h3>
              <p className="text-gray-500 mb-4">Coming soon</p>
              <span className="text-gray-400 font-semibold">Stay tuned</span>
            </div>
            <div className="bg-gray-100 rounded-xl p-8 text-center opacity-60">
              <Users className="text-gray-400 mx-auto mb-4" size={48} />
              <h3 className="font-bold text-xl mb-2 text-gray-500">Discord</h3>
              <p className="text-gray-500 mb-4">Coming soon</p>
              <span className="text-gray-400 font-semibold">Stay tuned</span>
            </div>
          </div>
        </div>

        {/* Community Stats */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <Users className="text-primary-blue mx-auto mb-4" size={48} />
              <div className="text-4xl font-bold text-primary-blue-dark mb-2">1,234</div>
              <p className="text-gray-600">Holders</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <MessageSquare className="text-primary-blue mx-auto mb-4" size={48} />
              <div className="text-4xl font-bold text-primary-blue-dark mb-2">5,678</div>
              <p className="text-gray-600">Twitter Followers</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <Trophy className="text-primary-blue mx-auto mb-4" size={48} />
              <div className="text-4xl font-bold text-primary-blue-dark mb-2">13</div>
              <p className="text-gray-600">Blue Dog Rules</p>
            </div>
          </div>
        </div>

        {/* Meme Gallery */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl text-center text-primary-blue-dark mb-8">
            Meme Gallery
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <p className="text-center text-gray-600 mb-6">
              Share your Blue Dog memes on Twitter with #BLUEDOG for a chance to be featured here!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* Placeholder meme slots */}
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center"
                >
                  <span className="text-gray-400 text-sm">Meme #{i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Events & Campaigns */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl text-center text-primary-blue-dark mb-8">
            Upcoming Events
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <Calendar className="text-primary-blue flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-xl mb-2">Launch Day</h3>
                  <p className="text-gray-600 mb-2">
                    Official $BLUEDOG launch on pump.fun. Join us for memes, giveaways, and the start of the revolution!
                  </p>
                  <span className="text-sm text-gray-500">Coming soon</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <Trophy className="text-primary-blue flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-xl mb-2">Meme Contest</h3>
                  <p className="text-gray-600 mb-2">
                    Best Blue Dog meme wins $BLUEDOG tokens! Show off your creativity and help spread the message.
                  </p>
                  <span className="text-sm text-gray-500">Coming soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Join CTA */}
        <div className="max-w-4xl mx-auto bg-primary-blue-dark text-white rounded-xl p-8 md:p-12 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
            Join the Blue Dog Revolution
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Be part of the community fighting corporate overpricing and demanding economic justice. 
            Every holder matters, every meme spreads the message.
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
  );
}
