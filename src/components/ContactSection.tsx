import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/profile";

const contactItems = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "Phone", value: profile.phones[0], href: `tel:${profile.phones[0].replace(/\s/g, "")}`, icon: Phone },
  { label: "Phone", value: profile.phones[1], href: `tel:${profile.phones[1].replace(/\s/g, "")}`, icon: Phone },
];

const ContactSection = () => (
  <section id="contact" className="section-shell section-ink contact-section">
    <div className="content-width">
      <div className="contact-layout">
        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }}>
          <p className="eyebrow"><span>06</span> Make a connection</p>
          <h2>Let’s make<br /><em>something move.</em></h2>
          <p className="contact-copy">Soni is immediately available for opportunities across sales, client relationship management, business development, and customer operations.</p>
          <div className="contact-location"><MapPin size={16} aria-hidden="true" /> {profile.location}</div>
        </motion.div>
        <motion.div className="contact-actions" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }}>
          {contactItems.map(({ label, value, href, icon: Icon }) => <a className="contact-item" href={href} key={value}><span className="contact-item__icon"><Icon size={17} aria-hidden="true" /></span><span><small>{label}</small><strong>{value}</strong></span><ArrowUpRight size={16} aria-hidden="true" /></a>)}
          <a className="button button--coral" href={`mailto:${profile.email}?subject=Opportunity%20for%20Soni%20Bala`}>Open a conversation <ArrowUpRight size={16} aria-hidden="true" /></a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;