import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experiences } from "@/data/profile";

type Experience = (typeof experiences)[number];

const ExperienceCard = ({ experience, index, total }: { experience: Experience; index: number; total: number }) => {
  const cardRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start end", "end start"] });
  const targetScale = 1 - (total - 1 - index) * 0.035;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div className="experience-card-wrap">
      <motion.article ref={cardRef} className="experience-card" style={{ scale }}>
        <div className="experience-card__top">
          <span className="experience-card__index">{experience.index}</span>
          <div className="experience-card__meta"><span>{experience.period}</span><strong>{experience.role}</strong><span className="experience-card__company">{experience.company} · {experience.location}</span></div>
          {experience.current && <span className="current-tag"><span className="status-pulse" aria-hidden="true" /> Current</span>}
        </div>
        <div className="experience-card__body">
          <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .6 }}>{experience.role}</motion.h3>
          <div>
            <p className="experience-card__summary">{experience.summary}</p>
            <ul>{experience.bullets.map((bullet, bulletIndex) => <motion.li key={bullet} initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: bulletIndex * .06, duration: .45 }}>{bullet}</motion.li>)}</ul>
          </div>
        </div>
        <div className="experience-card__footer"><span>Work experience / {experience.index}</span><span>Scroll to next role ↓</span></div>
      </motion.article>
    </div>
  );
};

const ExperienceSection = () => (
  <section id="experience" className="experience-section section-shell">
    <motion.h2 className="section-title hero-heading" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7 }}>Work<br /><em>experience</em></motion.h2>
    {experiences.map((experience, index) => <ExperienceCard key={experience.index} experience={experience} index={index} total={experiences.length} />)}
  </section>
);

export default ExperienceSection;