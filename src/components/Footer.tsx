import { ArrowUpRight, Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer className="site-footer">
    <div className="site-footer__inner">
      <div><span className="wordmark"><span className="wordmark__dot" aria-hidden="true" /> Soni Bala</span><p>Sales / CRM / Business development</p></div>
      <div className="footer-links"><a href="mailto:sonibala006@gmail.com" aria-label="Email Soni Bala"><Mail size={15} /></a><a href="tel:+919717892014" aria-label="Call Soni Bala"><Phone size={15} /></a><a href="#top" aria-label="Back to top"><ArrowUpRight size={15} /></a></div>
      <p>© {new Date().getFullYear()} Soni Bala</p>
    </div>
  </footer>
);

export default Footer;