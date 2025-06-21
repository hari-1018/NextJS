const projects = [
  {
    img: '/ecommerce.png',
    title: 'Slippery moneys – e-commerce platform for high risk industries',
  },
  {
    img: '/digitalcurrency.png',
    title: 'Hybrid capital – digital currency',
  },
  {
    img: '/betting.png',
    title: 'Betero – sports betting platform',
  },
  {
    img: '/exec.png',
    title: 'Exec - employees financial wellness saas',
  },
  {
    img: '/voltoge.png',
    title: 'Voltoge - accessible clean energy startup',
  },
  {
    img: '/hyperbolic.png',
    title: 'Hyperbolic - a decentralized data transmission startup',
  },
];

const Portfolio = () => {
  return (
    <section className="bg-black text-white px-6 md:px-36 md:py-24">
      <div className="flex flex-col md:flex-row justify-between gap-6 mb-12">
        <div>
          <span className="inline-block border border-[#363804] bg-[#171802] text-[#ffb30d] px-5 py-2 rounded-full text-sm mb-6">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-light leading-normal max-w-lg">
            Exceptional work <br className="hidden md:block" /> you deserve
          </h2>
        </div>
        <p className="text-gray-400 md:max-w-md text-base md:mt-24">
          From tech startups to healthcare giants, e-commerce pioneers to edtech,
          we’ve left our mark on diverse domains
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative w-[350px] h-[350px] md:w-[400px] md:h-[400px] rounded-2xl overflow-hidden group bg-[#121212]"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 p-6 text-white bg-gradient-to-t from-black via-transparent to-transparent">
              <p className="text-lg font-light">{project.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="mt-4 px-6 py-2 bg-[#ffbe0d] text-black font-semibold rounded-full">
          See all works  &gt;
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
