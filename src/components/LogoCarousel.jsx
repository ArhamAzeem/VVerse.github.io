import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const logos = [
  'https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/6516d204875959d9c40d197a_Z95DhkqwSl6XJ99enZz1.jpeg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWiaICKRaLwZJaCFvZJtlv116rdx0PDujBGSjW604qsm-UPsw5gENdyHH060IskDs6xU4&usqp=CAU',
  'https://mobile.designer-vip.com/wp-content/uploads/blog/2017/prada-logo-design.png',
  'https://speckyboy.com/wp-content/uploads/2020/10/zara-simple-logo-design.jpg',
  'https://penji.co/wp-content/uploads/2019/05/lanvin-clothing-brand-logo-ideas.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0LAa7igmtKwLhsnBisvGVHASHe1IA7ZnuiQ&s',
];

const LogoSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    // GSAP animation for entrance
    gsap.fromTo(
      section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="py-8 px-4 md:px-8 lg:px-16" ref={sectionRef}>
      <div className="flex flex-wrap justify-center gap-8">
        {logos.map((logo, index) => (
          <div key={index} className="logo-item p-4 bg-white rounded-lg">
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="w-32 h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoSection;
