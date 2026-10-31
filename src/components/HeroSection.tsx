import { useRef, type PointerEvent } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, MapPin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { profile } from "@/data/profile";

const HeroSection = () => {
  const photoRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 20 });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 20 });

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || !photoRef.current) return;
    const bounds = photoRef.current.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="top" className="hero-section section-shell">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orbit hero-orbit--one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit--two" aria-hidden="true" />
      <div className="hero-section__inner content-width">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
          <p className="eyebrow"><span>01</span> Personal portfolio / 2026</p>
          <p className="hero-kicker">{profile.eyebrow}</p>
          <h1>Make every<br /><em>conversation</em><br />count.</h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <button className="button button--primary" type="button" onClick={() => scrollTo("#experience")}>Explore experience <ArrowUpRight size={16} aria-hidden="true" /></button>
            <a className="button button--quiet" href="mailto:sonibala006@gmail.com">Start a conversation <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-meta"><span><MapPin size={14} aria-hidden="true" /> Gurugram, India</span><span><span className="status-pulse" aria-hidden="true" /> {profile.availability}</span></div>
        </motion.div>

        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.92, rotate: -3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.9, delay: 0.12, ease: "easeOut" }}>
          <div className="hero-visual__label">Portrait / 01</div>
          <motion.div ref={photoRef} className="portrait-stage" style={reduceMotion ? undefined : { rotateX, rotateY }} onPointerMove={handlePointerMove} onPointerLeave={resetPointer}>
            <div className="portrait-stage__shadow" aria-hidden="true" />
            <div className="portrait-stage__card"><img src={profilePhoto} alt="Soni Bala, sales executive and CRM specialist" width={720} height={720} /><div className="portrait-stage__wash" aria-hidden="true" /><div className="portrait-stage__caption"><span>SONI BALA</span><span>SB / 001</span></div></div>
            <div className="portrait-stage__badge" aria-hidden="true"><span>Sales</span><span>CRM</span><span>Growth</span></div>
            <div className="portrait-stage__ring" aria-hidden="true" />
          </motion.div>
          <div className="hero-visual__footer"><span>Relationship-first operator</span><span>Scroll to read <ArrowDown size={14} aria-hidden="true" /></span></div>
        </motion.div>
      </div>
      <div className="hero-stamp" aria-hidden="true"><Download size={14} /> Resume-ready profile</div>
    </section>
  );
};

export default HeroSection;
