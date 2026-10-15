import { links, ExternalLink } from "../content";

export default function Footer() {
  return (
    <footer className="portfolio-footer">
      <div><strong>Evgenii Bogomazov-Pusser</strong><p>Independent research & project origination · Rehovot, Israel</p></div>
      <div className="footer-links"><a href={links.email}>Email</a><ExternalLink href={links.linkedin}>LinkedIn</ExternalLink><ExternalLink href={links.github}>GitHub</ExternalLink><ExternalLink href={links.blog}>Substack</ExternalLink></div>
    </footer>
  );
}
