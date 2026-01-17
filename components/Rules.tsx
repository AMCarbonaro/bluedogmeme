"use client";

import { motion } from "framer-motion";

interface Rule {
  number: number;
  title: string;
  description: string;
  application: string;
}

const rules: Rule[] = [
  {
    number: 1,
    title: "Power is perception",
    description: "Power comes not just from what we have, but from what corporations think we have.",
    application: "Blue Dog acts with the power of the people, creating visibility and impact through collective action.",
  },
  {
    number: 2,
    title: "Stay in your strengths",
    description: "Never go outside the experience of your people. It results in confusion and retreat.",
    application: "Focus on what we know: fair pricing and consumer rights. Our strength is in understanding what people need.",
  },
  {
    number: 3,
    title: "Push into their weakness",
    description: "Whenever possible, go outside the experience of the opponent. Here you want to cause confusion, fear, and retreat.",
    application: "Call out corporate overpricing where they can't defend—expose practices that corporations struggle to justify.",
  },
  {
    number: 4,
    title: "Make them live up to their rules",
    description: "Make opponents live up to their own book of rules. You can kill them with this, for they can no more obey their own rules than the Christian church can live up to Christianity.",
    application: "Hold corporations to their public promises. Use facts, quotes, and their own statements to hold them accountable.",
  },
  {
    number: 5,
    title: "Ridicule is powerful",
    description: "Ridicule is man's most potent weapon. There is no defense. It's irrational. It's infuriating.",
    application: "Use humor and memes to expose greed. Satirical posts and viral content disrupt corporate narratives effectively.",
  },
  {
    number: 6,
    title: "Use tactics people enjoy",
    description: "A good tactic is one your people enjoy. They'll keep doing it without urging and come back to do more.",
    application: "Make activism fun and engaging. Meme contests, rewards, and community events keep people motivated.",
  },
  {
    number: 7,
    title: "Don't drag tactics out",
    description: "A tactic that drags on too long becomes a drag. Don't become old news.",
    application: "Keep messaging fresh and dynamic. Rotate campaigns and strategies to maintain momentum.",
  },
  {
    number: 8,
    title: "Keep constant pressure",
    description: "Keep the pressure on. Never let up. Keep attacking and use all events of the period for your purpose.",
    application: "Maintain engagement until change happens. Consistent pressure on corporations creates lasting impact.",
  },
  {
    number: 9,
    title: "The threat matters",
    description: "The threat is usually more terrifying than the thing itself. Imagination and ego can dream up many more consequences than any activist.",
    application: "Show what happens if overpricing continues unchecked. Speculation about future costs creates urgency.",
  },
  {
    number: 10,
    title: "Offer alternatives",
    description: "The major premise for tactics is the development of operations that will maintain a constant pressure upon the opposition.",
    application: "Present constructive solutions, not just criticism. Show cheaper pricing models and policy ideas alongside calling out problems.",
  },
  {
    number: 11,
    title: "Negatives can flip to positives",
    description: "If you push a negative hard and deep enough, it will break through into its counterside.",
    application: "Turn setbacks into momentum. Use corporate failures as opportunities to demonstrate the need for change.",
  },
  {
    number: 12,
    title: "Target, personalize, polarize",
    description: "The price of a successful attack is a constructive alternative. Never let the enemy score points because you're caught without a solution to the problem.",
    application: "Name specific corporations and practices. Draw clear contrasts between greed and fairness to create polarization.",
  },
  {
    number: 13,
    title: "Always provide a path forward",
    description: "Pick the target, freeze it, personalize it, and polarize it. Don't try to attack abstract corporations or bureaucracies; pick a specific target and freeze it.",
    application: "Give people actionable steps to take. Show how buying $BLUEDOG, sharing memes, and joining campaigns creates real change.",
  },
];

export default function Rules() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {rules.map((rule, index) => (
        <motion.div
          key={rule.number}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-primary-blue hover:shadow-xl transition-shadow"
        >
          <div className="flex items-start gap-4">
            <div className="bg-primary-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
              {rule.number}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-xl text-primary-blue-dark mb-2">
                {rule.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3 italic">
                "{rule.description}"
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Blue Dog:</strong> {rule.application}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
