import React from 'react';
import { HelpCircle, Check, Shield, Zap, ChevronDown } from 'lucide-react';

interface FAQItemProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ title, icon, children, isOpen, onClick }: FAQItemProps) {
  return (
<<<<<<< HEAD
    <div className="bg-white rounded-xl md:rounded-2xl shadow-md md:shadow-lg overflow-hidden transition-shadow hover:shadow-xl">
      <button
        onClick={onClick}
        className="w-full px-4 md:px-8 py-4 md:py-6 flex items-center justify-between text-left hover:bg-blue-50 transition-colors duration-200"
      >
        <div className="flex items-center">
          <span className="text-blue-600 mr-3 md:mr-4 flex-shrink-0">{icon}</span>
          <h3 className="text-base md:text-lg font-semibold text-gray-900">{title}</h3>
=======
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-shadow hover:shadow-xl">
      <button
        onClick={onClick}
        className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-blue-50 transition-colors duration-200"
      >
        <div className="flex items-center">
          <span className="text-blue-600 mr-4">{icon}</span>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
>>>>>>> bb40f04c97eb192b0564d6c33e0973ce8e30352b
        </div>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`transition-max-height duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
<<<<<<< HEAD
        <div className="px-4 md:px-8 pb-4 md:pb-6 text-sm md:text-base text-gray-600">{children}</div>
=======
        <div className="px-8 pb-6 text-gray-600">{children}</div>
>>>>>>> bb40f04c97eb192b0564d6c33e0973ce8e30352b
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      title: 'What is Comment Assistant?',
      icon: <HelpCircle className="w-6 h-6" />,
      content: (
        <>
          <p className="mb-4">
            Comment Assistant is a Chrome Extension that lets you generate 1-click AI replies for Twitter (X) and LinkedIn.
          </p>
          <ul className="space-y-2 pl-6 list-disc list-inside text-gray-700">
            <li>Select the post you want to reply to.</li>
            <li>Choose your preferred emotion-based reply.</li>
            <li>Get an AI-generated response instantly.</li>
            <li>Edit if needed, or keep it as is.</li>
            <li>Post your comment and engage!</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Do you offer a free plan?',
      icon: <Check className="w-6 h-6" />,
      content: (
        <>
<<<<<<< HEAD
          <span className="font-semibold text-blue-600">Yes!</span> We provide 20 free AI-generated replies powered by GPT-4
=======
          <span className="font-semibold text-blue-600">Yes!</span> We provide 5 free AI-generated replies powered by GPT-4
>>>>>>> bb40f04c97eb192b0564d6c33e0973ce8e30352b
          for you to try and experience Comment Assistant with no commitment!
        </>
      ),
    },
    {
      title: 'Will my account be blocked if I use Comment Assistant?',
      icon: <Shield className="w-6 h-6" />,
      content: (
        <>
<<<<<<< HEAD
          <span className="font-semibold text-blue-600">No!</span> All actions are done manually by you, so it's no
=======
          <span className="font-semibold text-blue-600">No!</span> All actions are done manually by you, so it’s no
>>>>>>> bb40f04c97eb192b0564d6c33e0973ce8e30352b
          different from copy-pasting a comment. No risk of account blockage!
        </>
      ),
    },
    {
      title: 'How is Comment Assistant different from other AI commenting tools?',
      icon: <Zap className="w-6 h-6" />,
      content: (
        <p>
          Our AI-generated comments are 99% better than other tools on the market, offering more engaging, high-quality
          responses that stand out.
        </p>
      ),
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16">
=======
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
>>>>>>> bb40f04c97eb192b0564d6c33e0973ce8e30352b
          Frequently Asked{' '}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Questions
          </span>
        </h2>

<<<<<<< HEAD
        <div className="space-y-3 md:space-y-4 max-w-3xl mx-auto">
=======
        <div className="space-y-4 max-w-3xl mx-auto">
>>>>>>> bb40f04c97eb192b0564d6c33e0973ce8e30352b
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              title={item.title}
              icon={item.icon}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            >
              {item.content}
            </FAQItem>
          ))}
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> bb40f04c97eb192b0564d6c33e0973ce8e30352b
