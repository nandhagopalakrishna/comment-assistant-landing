import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Privacy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to home
        </button>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <p className="text-sm text-gray-500">Last updated: 12/19/2024</p>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Introduction</h2>
            <p className="text-gray-600">
              This Privacy Policy explains how Comment Assistant ("we," "our," or "us") collects, uses, and protects your personal information. We respect your privacy and are committed to protecting your personal data.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Information We Collect</h2>
            <p className="text-gray-600">We collect several types of information, including:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Account information (name, email, password)</li>
              <li>Usage data (how you interact with our services)</li>
              <li>Device information (browser type, IP address)</li>
              <li>Marketing preferences</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">How We Use Your Information</h2>
            <p className="text-gray-600">We use your information to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Improve and personalize your experience</li>
              <li>Communicate with you about our services</li>
              <li>Ensure security and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Data Storage and Security</h2>
            <p className="text-gray-600">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Your Privacy Rights</h2>
            <p className="text-gray-600">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request transfer of your data</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us at:{' '}
              <a href="mailto:nandhagopalakrishnan3@gmail.com" className="text-blue-600 hover:text-blue-800">
                nandhagopalakrishnan3@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}