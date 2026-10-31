import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { type PointerEvent } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { profile } from "@/data/profile";

const HeroSection = () => {
  const portraitRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [5, -5]), { stiffness: 100, damping: 24 });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-7, 7]), { stiffness: 100, damping: 24 });

  const handleMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || !portraitRef.current) return;
    const bounds = portraitRef.current.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const resetMove = () => { pointerX.set(0); pointerY.set(0); };

  return (
    <section id="top" className="hero-section section-shell">
      <motion.div className="hero-section__inner content-width" initial="hidden" animate="visible">
        <motion.div className="hero-title-wrap" variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { delay: .15, duration: .75, ease: "easeOut" } } }}>
          <h1 className="hero-title hero-heading"><span className="hero-title__intro">Hi, I&apos;m</span> <em>Soni</em></h1>
        </motion.div>
        <motion.div className="hero-portrait" ref={portraitRef} style={reduceMotion ? undefined : { rotateX, rotateY }} onPointerMove={handleMove} onPointerLeave={resetMove} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: .6, duration: .85, ease: "easeOut" } } }}>
          <div className="hero-portrait__halo" aria-hidden="true" />
          <div className="hero-portrait__frame"><img src={profilePhoto} alt="Soni Bala, Sales Executive and CRM Specialist" width={720} height={720} /><div className="hero-portrait__tint" aria-hidden="true" /></div>
          <div className="hero-portrait__badge" aria-hidden="true"><span>Sales / CRM</span><span>SB / 001</span></div>
        </motion.div>
        <motion.div className="hero-copybar" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: .35, duration: .7, ease: "easeOut" } } }}>
          <div>
            <p>A relationship-first sales professional driven by clarity, trust, and measurable growth.</p>
            <div className="hero-copybar__meta"><span><MapPin size={13} aria-hidden="true" /> Gurugram, India</span><span><span className="status-pulse" aria-hidden="true" /> {profile.availability}</span></div>
          </div>
          <motion.a className="contact-pill" href="#contact" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: .5, duration: .7, ease: "easeOut" } } }}>Contact me <ArrowUpRight size={16} aria-hidden="true" /></motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
