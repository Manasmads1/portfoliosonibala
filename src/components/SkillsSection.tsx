import { motion } from "framer-motion";
import { languages, skillGroups } from "@/data/profile";

const capabilities = [
  { name: "Strategic sales", description: "Turning market context, product value, and human insight into clear paths to revenue." },
  { name: "Client relationships", description: "Building high-value portfolios through thoughtful follow-up, needs-based advisory, and long-term trust." },
  { name: "Business development", description: "Expanding reach through networking, referrals, community outreach, and disciplined lead conversion." },
  { name: "Customer experience", description: "Connecting people and process to protect service quality, response time, and satisfaction." },
  { name: "Team leadership", description: "Coaching teams, tracking performance, and creating the conditions for consistent closing and delivery." },
];

const SkillsSection = () => (
  <section id="capabilities" className="capabilities-section section-shell">
    <motion.h2 className="section-title" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7 }}>Capabilities</motion.h2>
    <div className="capabilities-list">
      {capabilities.map((capability, index) => (
        <motion.article className="capability-item" key={capability.name} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "50px", amount: 0 }} transition={{ delay: index * .1, duration: .7 }}>
          <span className="capability-item__number">0{index + 1}</span>
          <div><h3>{capability.name}</h3><p>{capability.description}</p></div>
        </motion.article>
      ))}
    </div>
    <div className="skills-cloud" aria-label="Additional skills and languages">
      {skillGroups.flatMap((group) => group.skills).map((skill) => <span key={skill}>{skill}</span>)}
      {languages.map((language) => <span key={language.name}><strong>{language.name}</strong> / {language.level}</span>)}
    </div>
  </section>
);

export default SkillsSection;