import { motion } from "framer-motion";
import { education } from "@/data/profile";

const EducationSection = () => (
  <section id="education" className="education-section section-shell">
    <motion.h2 className="section-title" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7 }}>Education</motion.h2>
    <div className="education-grid">
      {education.map((item, index) => <motion.article className="education-card" key={item.degree} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .1 }}><span className="education-card__number">0{index + 1}</span><strong>{item.degree}</strong><span>{item.institution}</span><small>{item.detail}</small></motion.article>)}
    </div>
  </section>
);

export default EducationSection;