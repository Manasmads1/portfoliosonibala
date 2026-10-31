import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work experience", href: "#experience" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
      <div className="site-nav__inner">
        <a className="wordmark" href="#top" aria-label="Soni Bala home"><span className="wordmark__dot" aria-hidden="true" /> Soni Bala</a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => <button type="button" key={link.href} onClick={() => goTo(link.href)}>{link.label}</button>)}
          <a className="nav-availability" href="#contact"><span className="status-pulse" aria-hidden="true" /> Open to work <ArrowUpRight size={14} aria-hidden="true" /></a>
        </nav>
        <button className="mobile-menu-trigger" type="button" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen((value) => !value)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
      <div id="mobile-nav" className={`mobile-nav ${open ? "mobile-nav--open" : ""}`}>
        {navLinks.map((link) => <button type="button" key={link.href} onClick={() => goTo(link.href)}>{link.label}</button>)}
        <a className="nav-availability" href="#contact" onClick={() => setOpen(false)}><span className="status-pulse" aria-hidden="true" /> Open to work <ArrowUpRight size={14} aria-hidden="true" /></a>
      </div>
    </header>
  );
};

export default Navbar;