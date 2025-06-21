'use client';

import { useRef, useState } from 'react';
import { MdPlayArrow } from 'react-icons/md';

const About = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="text-white px-36 py-16 bg-black">

        <div className="flex justify-between gap-6 mb-12 h-[320px]">
            <div className="bg-black rounded-3xl w-[480px] relative aspect-video overflow-hidden">
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover rounded-3xl"
                    poster="/projects.png"
                    controls={isPlaying}
                >
                    <source src="/dummyvideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

            {!isPlaying && (
                <button
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center"
                >
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
                    <MdPlayArrow className="text-black text-5xl" />
                </div>
                </button>
            )}
            </div>

            <div className="bg-[#141414] rounded-3xl p-8 flex flex-col items-center text-center relative border border-gray-50/15 w-[750px]">
                <img src="/Left-Decor.png" alt="left-decor" className="absolute left-8 top-28 w-10 h-20"/>
                <img src="/Right-Decor.png" alt="right-decor" className="absolute right-8 top-28 w-10 h-20"/>

                <p className="text-gray-300 mt-12 mb-6 max-w-xl">
                    An absolute professional who consistently delivers exceptional work,
                    even under the most demanding deadlines. I appreciated the insightful
                    feedback and innovative ideas introduced throughout the design
                    process, which greatly enhanced the final product.
                </p>

                <div className="text-gray-400 flex gap-4 justify-center">
                    <span>Murshid Pulkkada</span>
                    <span>Founder @Progbiz</span>
                </div>
            </div>
        </div>


        <div className="bg-[#1a1a1a] rounded-2xl p-10 flex flex-col md:flex-row justify-between relative">
            <div className="text-white mb-8 md:mb-0 md:w-1/2">
                <h3 className="text-4xl font-light leading-tight">
                Your dedicated <br /> in-house design team
                </h3>
            </div>

            <div className="text-gray-300 md:w-1/2 flex flex-col justify-between">
                <p className="mb-6">
                We are a global collective of diverse designers and developers, partnering
                with brands of all scales. What distinguishes us is our dedication to crafting
                memorable, user-friendly, and captivating experiences — it's what we excel at.
                The projects we deliver combine creative vision with practical execution,
                resulting in solutions that are both distinctive and impactful.
                </p>

                <div className="flex justify-between items-end">
                    <div className="border-l border-gray-700 pl-4">
                        <p className="text-white">Murshid</p>
                        <p className="text-gray-500">Founder and CEO</p>
                    </div>
                    <img src="/Right-Decor.png" alt="decor" className="w-10 h-20" />
                </div>
            </div>
        </div>

        <div className="mt-16">
            <h2 className="text-center text-[#a6a6a6] mb-8">As seen and loved on:</h2>
            <div className="overflow-hidden relative">
                <div className="flex animate-scroll-left gap-20 p-6 min-w-max">
                {[
                    '/dribble.png',
                    '/awwwards.png',
                    '/behance.png',
                    '/cssdesign.png',
                    '/dribble.png',
                    '/awwwards.png',
                    '/behance.png',
                    '/cssdesign.png',
                ].map((src, i) => (
                    <img
                    key={i}
                    src={src}
                    className="h-8 grayscale opacity-70 hover:opacity-100 transition duration-300"
                    />
                ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;
