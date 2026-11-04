import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";
import { profile } from "@/data/profile";

const aboutCopy = "Result-driven Sales Professional with 6 years of progressive experience in sales execution, team leadership, and client relationship management across the logistics and insurance sectors. Proven track record of achieving sales targets, mentoring teams, and building lasting client relationships.";

const AnimatedChar = ({ char, index, total, progress }: { char: string; index: number; total: number; progress: MotionValue<number> }) => {
  const start = Math.max(0, index / total - 0.17);
  const end = Math.min(1, index / total + 0.18);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  return <motion.span style={{ opacity }}>{char === " " ? "\u00a0" : char}</motion.span>;
};

const AboutSection = () => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: textRef, offset: ["start 0.8", "end 0.2"] });

  return (
    <section id="about" className="about-section section-shell">
      <div className="about-section__glow about-section__glow--left" aria-hidden="true" />
      <div className="about-section__glow about-section__glow--right" aria-hidden="true" />
      <div className="about-layout">
        <motion.div className="about-portrait-card" initial={{ opacity: 0, scale: .88, rotate: -5 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .8, ease: "easeOut" }}>
          <div className="about-portrait-card__orbit" aria-hidden="true" />
          <div data-cursor-node className="about-portrait-card__circle"><img src={profilePhoto} alt="Soni Bala, Sales and Client Relationship Professional" width={720} height={720} /></div>
          <span className="about-portrait-card__label">SB / 06 YEARS / SALES</span>
        </motion.div>
        <motion.div data-cursor-node className="about-content" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .7 }}>
          <p className="eyebrow"><span>01</span> About Soni Bala</p>
          <h2 className="hero-heading">About me</h2>
          <p ref={textRef}>{aboutCopy.split("").map((char, index) => <AnimatedChar key={`${char}-${index}`} char={char} index={index} total={aboutCopy.length} progress={scrollYProgress} />)}</p>
          <div className="about-content__facts">{profile.details.map((detail) => <span className="fact-chip" key={detail.label}><strong>{detail.label}:</strong> {detail.value}</span>)}</div>
          <a className="contact-pill" href={`mailto:${profile.email}`}>Let&apos;s connect <span aria-hidden="true">↗</span></a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
