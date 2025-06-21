// components/Pricing.js
import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing" className="bg-black text-white px-8 md:px-36 text-center py-20">
      <div className="mb-8 md:mb-16 max-w-4xl mx-auto">
        <span className="inline-block border border-[#363804] bg-[#171802] text-[#ffb30d] px-5 py-2 rounded-full text-sm mb-6">
          Pricing
        </span>
        <h2 className="text-4xl md:text-5xl font-light leading-normal">
          Choose the relevant plan to build, <br /> grow and fasten your team
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {/* Standard Plan */}
        <div className="bg-[#141414] rounded-3xl p-8 border border-[#313131]">
          <div className="mb-6">
            <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-4 text-start">STANDARD</h3>
            <div className="flex items-baseline mb-2">
              <span className="text-5xl font-light text-white">$2,150</span>
              <span className="text-white ml-1">/month</span>
            </div>
            <p className="text-white underline text-start">
              One request at a time
            </p>
          </div>

          <div className="mb-8">
            <h4 className="text-gray-400 text-start mb-4">What's included:</h4>
            <ul className="space-y-3">
              {[
                'Unlimited requests',
                '~48 hour delivery',
                'Unlimited brands',
                'Weekly meetings',
                'Pause or cancel anytime',
                'Managed via Slack and Trello',
                'All services except Webflow'
              ].map((feature, index) => (
                <li key={index} className="flex items-center text-white">
                  <svg className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <button className="w-full bg-[#ffbe0d] text-black font-medium py-3 px-6 rounded-full hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 transform hover:scale-105">
              Subscribe →
            </button>
            <button className="w-full text-white border border-[#313131] py-3 rounded-full hover:scale-105">
              Book a demo
            </button>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="bg-[#141414] rounded-3xl p-8 border border-[#313131] relative">
          <div className="absolute -top-3 right-1 transform -translate-x-1/2">
            <span className="bg-[#ffbe0d] text-black text-sm font-medium px-4 py-3 rounded-full">
              Faster ⚡
            </span>
          </div>

          <div className="mb-6">
            <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-4 text-start">PRO</h3>
            <div className="flex items-baseline mb-2">
              <span className="text-5xl font-light text-white">$3,150</span>
              <span className="text-white ml-1">/month</span>
            </div>
            <p className="text-white underline text-start">
              Double the requests
            </p>
          </div>

          <div className="mb-8">
            <h4 className="text-gray-400 text-start mb-4">What's included:</h4>
            <ul className="space-y-3">
              {[
                'Unlimited requests',
                '~48 hour delivery',
                'Unlimited brands',
                'Weekly meetings',
                'Pause or cancel anytime',
                'Managed via Slack and Trello',
                'All services and Webflow'
              ].map((feature, index) => (
                <li key={index} className="flex items-center text-white">
                  <svg className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <button className="w-full bg-[#ffbe0d] text-black font-medium py-3 px-6 rounded-full hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 transform hover:scale-105">
              Subscribe →
            </button>
            <button className="w-full text-white border border-[#313131] py-3 rounded-full hover:scale-105">
              Book a demo
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {/* Project-Based Plan */}
          <div className="bg-[#141414] rounded-3xl p-8 border border-[#313131]">
            <div className="mb-6">
              <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-4 text-start">PROJECT-BASED</h3>
              <p className="text-gray-300 text-start mb-4">
                For a custom fee delivered in milestones ideal for specific goals.
                Custom project scope.
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-gray-400 text-start mb-4">What's included:</h4>
              <ul className="space-y-3">
                {[
                  'Fixed scope of work',
                  'Delivered in milestones'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300 text-sm">
                    <svg className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button className="w-full text-white border border-[#313131] py-3 rounded-full hover:scale-105">
              Send email
            </button>
          </div>
          <div className="bg-[#141414] rounded-3xl p-8 border border-[#313131] w-full">
            <h3 className="text-4xl font-light text-white mb-2 text-start">Refer & earn</h3>
            <p className="text-white text-start mb-8">Receive $150 for each referral!</p>
            <button className="w-full text-white border border-[#313131] py-3 rounded-full hover:scale-105">
              Join now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;