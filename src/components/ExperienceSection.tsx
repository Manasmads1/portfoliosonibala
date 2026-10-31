import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { experiences } from "@/data/profile";

const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const ExperienceSection = () => (
  <section id="experience" className="section-shell section-ink">
    <div className="content-width">
      <div className="section-heading section-heading--split section-heading--light">
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
          <p className="eyebrow"><span>03</span> Career trajectory</p>
          <h2>Proof lives<br /><em>in the pattern.</em></h2>
        </motion.div>
        <motion.p className="section-intro" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
          Three industries. One consistent point of view: listen closely, build trust early, and keep the outcome visible for everyone involved.
        </motion.p>
      </div>

      <div className="experience-list">
        {experiences.map((experience) => (
          <motion.article className="experience-card" key={experience.index} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }}>
            <div className="experience-card__index">{experience.index}</div>
            <div className="experience-card__main">
              <div className="experience-card__topline"><span>{experience.period}</span>{experience.current && <span className="current-tag"><span className="status-pulse" aria-hidden="true" /> Current role</span>}</div>
              <h3>{experience.role}</h3>
              <p className="experience-card__company">{experience.company} <span>·</span> {experience.location}</p>
              <p className="experience-card__summary">{experience.summary}</p>
              <ul>{experience.bullets.map((bullet) => <li key={bullet}><Check size={14} aria-hidden="true" /> {bullet}</li>)}</ul>
            </div>
            <a className="circle-link" href="#contact" aria-label={`Discuss ${experience.role} experience`}><ArrowUpRight size={18} aria-hidden="true" /></a>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;