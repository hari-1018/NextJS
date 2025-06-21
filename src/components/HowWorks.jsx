const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Subscribe to a plan',
      description:
        'Select a plan that fits your needs and jump on an onboarding call.',
    },
    {
      number: 2,
      title: 'Add a task',
      description:
        'List your first task on our shared Trello board by specifying the requirements.',
    },
    {
      number: 3,
      title: 'Enjoy results',
      description:
        'Receive your completed tasks in 2–4 business days.',
    },
  ];

  return (
    <section className="bg-black text-white px-8 md:px-36 text-center py-6">
      <div className="mb-8 md:mb-16 max-w-4xl mx-auto">
        <span className="inline-block border border-[#363804] bg-[#171802] text-[#ffb30d] px-5 py-2 rounded-full text-sm mb-6">
          How it works ?
        </span>
        <h2 className="text-4xl md:text-5xl font-light leading-normal">
          Pay and get started <br /> the same day
        </h2>
        <p className="text-white mt-4 text-sm md:text-base">
          No unnecessary bureaucracy. We focus on getting your ideas and problems solved.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-7xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.number}
            className="bg-[#141414] rounded-2xl p-6 text-left flex flex-col gap-4 relative border border-[#313131]"
          >
            <div className="w-12 h-12 border border-[#363804] text-[#ffb30d] rounded-full flex items-center justify-center text-sm absolute bg-[#171802]">
              {step.number}
            </div>
            <div className="mt-16 md:mt-20">
              <h3 className="text-xl font-medium mb-1">{step.title}</h3>
              <p className="text-sm text-gray-400">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
