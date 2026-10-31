import { motion } from "framer-motion";
import { education } from "@/data/profile";

const EducationSection = () => (
  <section id="education" className="section-shell section-paper section-education">
    <div className="content-width">
      <div className="education-heading">
        <div><p className="eyebrow"><span>05</span> Foundation</p><h2>Built to keep<br /><em>learning forward.</em></h2></div>
        <p className="section-intro">A postgraduate foundation from Kanpur University, shaped by continuous learning in the field and a strong instinct for people.</p>
      </div>
      <div className="education-grid">
        {education.map((item, index) => (
          <motion.div className="education-card" key={item.degree} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08 }}>
            <span className="education-card__number">0{index + 1}</span><strong>{item.degree}</strong><span>{item.institution}</span><small>{item.detail}</small>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;