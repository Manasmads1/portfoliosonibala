import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { languages, skillGroups } from "@/data/profile";

const reveal = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const SkillsSection = () => (
  <section id="skills" className="section-shell section-coral">
    <div className="content-width">
      <div className="section-heading section-heading--split">
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
          <p className="eyebrow"><span>04</span> Capability stack</p>
          <h2>Good sales is<br /><em>good listening.</em></h2>
        </motion.div>
        <motion.p className="section-intro" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
          Sharp negotiation, clear communication, and disciplined follow-through make the difference between a one-off win and a relationship that compounds.
        </motion.p>
      </div>
      <div className="skills-layout">
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <motion.div className="skill-group" key={group.label} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <div className="mini-heading">{group.label}</div>
              <ul>{group.skills.map((skill) => <li key={skill}><span aria-hidden="true">↗</span>{skill}</li>)}</ul>
            </motion.div>
          ))}
          <motion.div className="language-row" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <div className="mini-heading">Languages</div>
            <div className="language-list">{languages.map((language) => <span key={language.name}><strong>{language.name}</strong> / {language.level}</span>)}</div>
          </motion.div>
        </div>
        <motion.div className="asset-placeholder" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <div className="asset-placeholder__top"><span>Next chapter</span><Sparkles size={18} aria-hidden="true" /></div>
          <div className="asset-placeholder__mark">SB</div>
          <h3>Certificates<br />&amp; selected work</h3>
          <p>This space is ready for Soni’s certificates, project imagery, or a downloadable CV when those assets are supplied.</p>
          <a className="asset-placeholder__link" href="mailto:sonibala006@gmail.com?subject=Portfolio%20assets">Add an asset <ArrowUpRight size={15} aria-hidden="true" /></a>
          <span className="asset-placeholder__code">ASSET SLOT / 001</span>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SkillsSection;