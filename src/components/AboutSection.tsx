import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

const reveal = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const AboutSection = () => (
  <section id="about" className="section-shell section-paper">
    <div className="content-width">
      <div className="section-heading section-heading--split">
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
          <p className="eyebrow"><span>02</span> About the operator</p>
          <h2>People remember<br /><em>how you made<br />them feel.</em></h2>
        </motion.div>
        <motion.p className="section-intro" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
          I am a performance-oriented Sales Executive with over a decade of progressive experience spanning client relationship management, insurance solutions, and luxury retail sales. My career is defined by a consistent ability to exceed revenue targets, cultivate high-value client portfolios, and spearhead business development initiatives from the ground up.
        </motion.p>
      </div>

      <div className="about-layout">
        <motion.div className="about-facts" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <div className="mini-heading">The useful details</div>
          {profile.details.map((detail) => <div className="fact-row" key={detail.label}><span>{detail.label}</span><strong>{detail.value}</strong></div>)}
          <a className="text-link" href="mailto:sonibala006@gmail.com">Request a conversation <ArrowUpRight size={15} aria-hidden="true" /></a>
        </motion.div>
        <motion.div className="about-stats" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {profile.stats.map((stat) => <div className="stat-tile" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;