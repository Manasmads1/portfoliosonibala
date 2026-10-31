import { ArrowUpRight, Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer className="site-footer">
    <div className="content-width site-footer__inner">
      <div><span className="wordmark"><span className="wordmark__dot" aria-hidden="true" /> SONI / BALA</span><p>Sales, CRM &amp; business development.</p></div>
      <div className="footer-links"><a href="mailto:sonibala006@gmail.com" aria-label="Email Soni Bala"><Mail size={16} /></a><a href="tel:+919717892014" aria-label="Call Soni Bala"><Phone size={16} /></a><a href="#top" aria-label="Back to top"><ArrowUpRight size={16} /></a></div>
      <p className="footer-note">© {new Date().getFullYear()} Soni Bala. Built for the next conversation.</p>
    </div>
  </footer>
);

export default Footer;