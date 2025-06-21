const Benefits = () => {
  const benefits = [
    {
      img: '/benefits1.png',
      title: 'Fast turnaround',
      description: 'Expect the first draft within 48-72 hours, from Monday to Saturday.',
    },
    {
      img: '/benefits2.png',
      title: 'Unlimited Requests',
      description: 'Enjoy the freedom of unlimited designs, tailored to meet your every need.',
    },
    {
      img: '/benefits3.png',
      title: 'Always in Sync',
      description: 'Stay in sync with real-time updates and seamless communication, all via Slack.',
    },
    {
      img: '/benefits4.png',
      title: 'Pause or cancel anytime',
      description: 'Flexibility at your fingertips—pause or cancel your subscription anytime.',
    },
    {
      img: '/benefits5.png',
      title: 'Trello task management',
      description: 'Expertise in crafting designs that not only captivate but also drive results.',
    },
    {
      img: '/benefits6.png',
      title: 'Worry free pricing',
      description: 'Get all your design needs covered for just $2,150/month.',
    },
  ];

  return (
    <section className="bg-black text-white px-6 md:px-36 py-12 md:py-20">
      <div className="mb-10 md:mb-16 max-w-4xl mx-auto text-center">
        <span className="inline-block border border-[#363804] bg-[#171802] text-[#ffb30d] px-5 py-2 rounded-full text-sm mb-6">
          Benefits
        </span>
        <h2 className="text-4xl md:text-5xl leading-normal">
          Unlock a world of design <br /> potential with us
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {benefits.map((benefit, index) => (
          <div key={index} className="w-[400px]">
            <div className="w-full h-[240px] overflow-hidden rounded-2xl">
              <img
                src={benefit.img}
                alt={benefit.title}
                className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg md:text-xl text-white mt-6 text-start">{benefit.title}</h3>
            <p className="text-sm font-light text-gray-400 mt-2 text-start">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
