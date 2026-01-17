import { CheckCircle, Circle, ArrowRight } from "lucide-react";

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

export default function RoadmapPage() {
  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-5xl md:text-6xl text-primary-blue-dark mb-4">
            Roadmap
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our strategic plan for building the Blue Dog revolution and fighting corporate overpricing.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 hidden md:block"></div>

            {phases.map((phase, index) => (
              <div key={phase.id} className="relative mb-12 md:mb-16">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Timeline Marker */}
                  <div className="flex-shrink-0 flex items-start">
                    <div className="relative z-10">
                      {phase.status === "completed" ? (
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="text-white" size={32} />
                        </div>
                      ) : phase.status === "in-progress" ? (
                        <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center animate-pulse">
                          <Circle className="text-white" size={32} />
                        </div>
                      ) : (
                        <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                          <Circle className="text-gray-500" size={32} />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Phase Content */}
                  <div className="flex-1 bg-gray-50 rounded-xl p-8 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <h2 className="font-display font-bold text-2xl md:text-3xl text-primary-blue-dark">
                        {phase.name}
                      </h2>
                      {phase.status === "in-progress" && (
                        <span className="bg-primary-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                          In Progress
                        </span>
                      )}
                      {phase.status === "completed" && (
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Completed
                        </span>
                      )}
                      {phase.status === "upcoming" && (
                        <span className="bg-gray-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Upcoming
                        </span>
                      )}
                    </div>
                    <ul className="space-y-3">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <ArrowRight className="text-primary-blue mt-1 flex-shrink-0" size={20} />
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

        {/* Call to Action */}
        <div className="mt-16 bg-primary-blue-dark text-white rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
            Join Us on This Journey
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Be part of the Blue Dog revolution and help us achieve these milestones. Every holder contributes 
            to fighting corporate overpricing and demanding economic justice.
          </p>
          <a
            href="#"
            className="inline-block bg-accent-red text-white px-8 py-4 rounded-full font-bold hover:bg-red-600 transition-colors"
          >
            Buy $BLUEDOG on pump.fun
          </a>
        </div>
      </div>
    </div>
  );
}
