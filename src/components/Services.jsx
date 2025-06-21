'use client'

const Services = () => {
  const services = [
    'UX design',
    'Graphic design', 
    'Logo design',
    'Branding',
    'Animation',
    'Web development',
    'Mobile apps',
    'UI/UX design'
  ];

  const firstRowServices = services.slice(0, 4);
  const secondRowServices = services.slice(4);

  return (
    <section id="services" className="bg-black text-white px-8 md:px-36 text-center md:py-20">
       <div className="mb-8 md:mb-16 max-w-4xl mx-auto">
        <span className="inline-block border border-[#363804] bg-[#171802] text-[#ffb30d] px-5 py-2 rounded-full text-sm mb-6">
          Services
        </span>
        <h2 className="text-4xl md:text-5xl font-light leading-normal">
          All you want, <br /> delivered on time
        </h2>
      </div>

      <div className="w-full mb-6 overflow-hidden">
        <div className="flex scroll-right space-x-4">
          {[...firstRowServices, ...firstRowServices,...firstRowServices].map((service, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 px-4 py-2 bg-[#141414] text-white text-sm font-light rounded-lg border border-gray-50/15"
            >
              {service}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <div className="flex scroll-left space-x-4">
          {[...secondRowServices, ...secondRowServices, ...secondRowServices].map((service, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 px-4 py-2 bg-[#141414] text-white text-sm font-light rounded-lg border border-gray-50/15"
            >
              {service}
            </div>
          ))}
        </div>
      </div>  
    </section>
  );
};

export default Services;