import { Link } from "react-router-dom";
import { links, ExternalLink } from "../content";

export default function Home() {
  return (
    <main id="main-content" className="portfolio-page home-page">
      <section className="intro-layout">
        <div className="intro-copy">
          <p className="eyebrow">Independent researcher & project originator · Israel</p>
          <h1>Ideas that become<br /><em>workable projects.</em></h1>
          <p className="intro-lede">I frame difficult questions, find unconventional solutions, and bring together the people and resources to move a project forward.</p>
          <p className="intro-detail">My current work connects adaptive technical systems, building performance and transport. My background is in property development and the legal and financial structuring of complex projects.</p>
          <div className="action-links"><Link className="primary-link" to="/work">Explore current projects ↗</Link><Link to="/research">Read the research</Link></div>
        </div>
        <aside className="research-window" aria-label="Current research focus">
          <p className="eyebrow">The question behind the work</p><h2>What if a building could pass on what it learns?</h2>
          <p>Cloud DNA / Living Things explores how buildings, machines and infrastructure could preserve essential functions, adapt and share evaluated experience.</p>
          <div className="research-window-bottom"><span>Concept → experiment → evaluation</span><Link to="/research">Research notes ↗</Link></div>
        </aside>
      </section>
      <section className="selected-section" aria-labelledby="selected-title">
        <div className="section-heading"><div><p className="eyebrow">Selected work</p><h2 id="selected-title">Research you can explore.</h2></div><Link to="/work">All projects ↗</Link></div>
        <div className="feature-grid">
          <article className="feature-item"><span className="item-number">01 / Buildings</span><h3>Thermal calculator</h3><p>Explore a model building’s thermal response, control strategies and behaviour when heating capacity is constrained.</p><a href={links.thermal}>Open the calculator ↗</a><span className="project-state">Interactive browser simulation</span></article>
          <article className="feature-item"><span className="item-number">02 / Logistics</span><h3>Holy Move</h3><p>A moving-logistics calculator and planning prototype connecting quote inputs, routes and operational decisions.</p><ExternalLink href={links.logistics}>Explore the project ↗</ExternalLink><span className="project-state">Software prototype · local setup</span></article>
          <article className="feature-item"><span className="item-number">03 / Research</span><h3>Living Things / Cloud DNA</h3><p>A conceptual framework and a building-control experiment examining what technical systems can inherit—and how to test its value.</p><Link to="/research">Explore both papers ↗</Link><span className="project-state">Research manuscripts</span></article>
        </div>
      </section>
      <section className="opportunity-section"><p className="eyebrow">Working together</p><h2>A strategic role, grounded in real problems.</h2><p>I am interested in paid project-origination, research-development and strategic roles alongside technical and operational teams. My contribution is defining the concept, structuring the project, resolving barriers and engaging partners.</p><div className="action-links"><a className="primary-link" href={links.email}>Start a conversation ↗</a><ExternalLink href={links.linkedin}>LinkedIn</ExternalLink><ExternalLink href={links.github}>GitHub</ExternalLink></div></section>
    </main>
  );
}
