import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { profile } from "@/data/profile";

const aboutCopy = "With more than a decade of experience across luxury retail, insurance, and customer operations, Soni focuses on building trust quickly, understanding what matters, and turning thoughtful conversations into measurable outcomes. Let’s build something incredible together.";

const AnimatedChar = ({ char, index, total, progress }: { char: string; index: number; total: number; progress: MotionValue<number> }) => {
  const start = Math.max(0, index / total - 0.17);
  const end = Math.min(1, index / total + 0.18);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  return <motion.span style={{ opacity }}>{char === " " ? "\u00a0" : char}</motion.span>;
};

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: textRef, offset: ["start 0.8", "end 0.2"] });

  return (
    <section id="about" ref={sectionRef} className="about-section section-shell">
      <div className="about-section__glow about-section__glow--left" aria-hidden="true" />
      <div className="about-section__glow about-section__glow--right" aria-hidden="true" />
      <motion.div className="about-content" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .7 }}>
        <p className="eyebrow"><span>01</span> About Soni Bala</p>
        <h2 className="hero-heading">About me</h2>
        <p ref={textRef}>{aboutCopy.split("").map((char, index) => <AnimatedChar key={`${char}-${index}`} char={char} index={index} total={aboutCopy.length} progress={scrollYProgress} />)}</p>
        <div className="about-content__facts">
          {profile.details.slice(0, 4).map((detail) => <span className="fact-chip" key={detail.label}><strong>{detail.label}:</strong> {detail.value}</span>)}
        </div>
        <a className="contact-pill" href="mailto:sonibala006@gmail.com">Let&apos;s connect <span aria-hidden="true">↗</span></a>
      </motion.div>
    </section>
  );
};

export default AboutSection;