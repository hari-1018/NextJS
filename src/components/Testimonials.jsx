'use client';

import { FaRegUserCircle } from "react-icons/fa";

const testimonials = [
  {
    name: "Milos Vidic",
    role: "CEO @goatmarketing",
    review:
      "Thanks to Handmade, we experienced a significant boost in website traffic, conversion rate, and website loading time. We also increased our website accessibility score and decreased the bounce rate. The service provider delivered the project on time and was highly efficient and organized. Additionally, the branding and logo design were exceptional, perfectly capturing our company's identity and leaving a lasting impression on our audience.",
    platform: "Clutch",
    rating: 5,
  },
  {
    name: "Rasesh Seth",
    role: "CEO @nextyn",
    review:
      "Vas was extremely easy to work with. He's a pro at Webflow and is always open to hearing you out and executing exactly the way you want. I'd definitely work with him again in the future.",
    platform: "Upwork",
    rating: 5,
  },
  {
    name: "Goran Markovic",
    role: "Founder @viziya",
    review:
      "Working with Handmade on our website design was an exceptional experience. As an architect, I needed a site that not only showcased our projects beautifully but also reflected our unique design philosophy. Handmade delivered on all fronts.",
    platform: "Clutch",
    rating: 5,
  },
  {
    name: "Jasper Zhang",
    role: "CEO @hyperbolic",
    review:
      "Vasilije did an outstanding job designing our website. He's highly skilled, professional and responsive.",
    platform: "Clutch",
    rating: 5,
  },
  {
    name: "Chris Hjort",
    role: "PM @host",
    review:
      "I highly recommend Vasilije. He is a hardworking guy with great ideas for big or small projects. Very flexible and very fast. I'm very happy I found his profile and I’ll definitely hire him again for another project!",
    platform: "Clutch",
    rating: 5,
  },
  {
    name: "Borgar Erlendsson",
    role: "CEO @kozmoz",
    review:
      "True professional capable of delivering quality work within very tight time constraints. I enjoyed receiving constructive feedback and new ideas he brought up during the design phase of my product...",
    platform: "Clutch",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-black text-white px-8 md:px-36 text-center py-12 md:py-24">
      <div className="mb-8 md:mb-16 max-w-4xl mx-auto">
        <span className="inline-block border border-[#363804] bg-[#171802] text-[#ffb30d] px-5 py-2 rounded-full text-sm mb-6">
          Testimonials
        </span>
        <h2 className="text-4xl md:text-5xl font-light leading-normal">
          Read what our clients are <br /> saying about us
        </h2>
      </div>

      <div className="relative h-[550px] overflow-hidden group">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left animate-scroll-vertically">
          {[...testimonials, ...testimonials].map((item, i) => (
            <div
              key={i}
              className="bg-[#141414] border border-[#313131] rounded-xl p-6 shadow-md flex flex-col justify-between gap-4"
            >
              
              <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#141414] border border-[#313131] flex items-center justify-center text-white font-semibold text-sm">
                    <FaRegUserCircle className="text-xl text-[#313131]"/>
                  </div>
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-md text-gray-400">{item.role}</p>
                </div>
              </div>

              {/* Review */}
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">{item.review}</p>

              {/* Platform + Rating */}
              <div className="flex items-center gap-4">
                <span className="text-white text-lg">{item.platform}</span>
                <span className="text-white">5.0 <span className="text-[#ffbe0d] text-lg"> ★★★★★</span></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
