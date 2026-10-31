import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const rowOne = ["Sales strategy", "Client trust", "CRM", "Revenue growth", "Premium retail", "Business development"];
const rowTwo = ["Team leadership", "Customer experience", "Target focus", "Negotiation", "Market expansion", "Relationship-first"];

const MarqueeSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const xOne = useTransform(scrollYProgress, [0, 1], ["-4%", "-20%"]);
  const xTwo = useTransform(scrollYProgress, [0, 1], ["-20%", "-4%"]);
  const repeatedOne = [...rowOne, ...rowOne, ...rowOne];
  const repeatedTwo = [...rowTwo, ...rowTwo, ...rowTwo];

  return (
    <section ref={sectionRef} className="marquee-section" aria-label="Soni Bala career signals">
      <p className="marquee-section__heading">Career signals / what travels with her</p>
      <motion.div className="marquee-row marquee-row--one" style={{ x: xOne }} aria-hidden="true">{repeatedOne.map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}</motion.div>
      <motion.div className="marquee-row marquee-row--two" style={{ x: xTwo }} aria-hidden="true">{repeatedTwo.map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}</motion.div>
    </section>
  );
};

export default MarqueeSection;