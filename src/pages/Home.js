import { Link } from "react-router-dom";
import heroImage from "../assets/backGroundGluck.jpg";
import blockchainImage from "../assets/blockchain.jpg";
import houseImage from "../assets/house1.jpg";
import cityImage from "../assets/living_city_2.png";

export default function Home() {
  return (
    <main className="home-page">
      <section
        className="home-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="home-hero-content">
          <p className="eyebrow">Portfolio and research archive</p>
          <h1>Evgenii Bogomazov-Pusser</h1>
          <p>
            Entrepreneur, innovator, musician, poet and reformer working across
            architecture, housing systems, education and art.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/about">
              Music portfolio
            </Link>
            <Link className="btn btn-secondary" to="/developer">
              Development work
            </Link>
          </div>
        </div>
      </section>

      <section className="feature-grid" aria-label="Featured areas">
        <Link className="feature-tile" to="/blockchain">
          <img src={blockchainImage} alt="" loading="lazy" />
          <span>Blockchain housing</span>
        </Link>
        <Link className="feature-tile" to="/developer">
          <img src={houseImage} alt="" loading="lazy" />
          <span>Developer projects</span>
        </Link>
        <Link className="feature-tile" to="/reconstruction">
          <img src={cityImage} alt="" loading="lazy" />
          <span>Urban reconstruction</span>
        </Link>
      </section>
    </main>
  );
}
