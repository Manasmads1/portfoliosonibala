import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

const HeroSection = () => (
  <section id="top" className="hero-section section-shell hero-section--no-portrait">
    <motion.div className="hero-section__inner content-width" initial="hidden" animate="visible">
      <motion.div className="hero-title-wrap" variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { delay: .15, duration: .75, ease: "easeOut" } } }}>
        <h1 data-cursor-node className="hero-title hero-heading"><span className="hero-title__intro">Hi, I&apos;m</span> <em>Soni</em></h1>
      </motion.div>
      <motion.div className="hero-copybar" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: .35, duration: .7, ease: "easeOut" } } }}>
        <div>
          <p>{profile.summary}</p>
          <div className="hero-copybar__meta"><span><MapPin size={13} aria-hidden="true" /> {profile.location}</span><span><span className="status-pulse" aria-hidden="true" /> {profile.availability}</span></div>
        </div>
        <motion.a data-cursor-node className="contact-pill" href="#contact" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: .5, duration: .7, ease: "easeOut" } } }}>Contact me <ArrowUpRight size={16} aria-hidden="true" /></motion.a>
      </motion.div>
    </motion.div>
  </section>
);

export default HeroSection;
