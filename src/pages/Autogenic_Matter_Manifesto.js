import React from "react";
import "./AutogenicManifest.css";
import livingCity1 from "../assets/living_city_1.png";
import livingCity2 from "../assets/living_city_2.png";
import livingCity3 from "../assets/living_city_3.png";

export default function AutogenicManifest() {
  return (
    <div className="manifest">
      <h1>Autogenic Matter Manifesto</h1>

      <section>
        <img
          src={livingCity1}
          alt="Living City Bio-Metabolic Civilization"
          className="manifest-img"
        />

        <p>
          We no longer aim to preserve the old biosphere.
          <br />
          We are building a <em>technosphere</em> — a self-regenerating, closed
          cycle of non-biological matter, energy, and information.
        </p>

        <p>
          A city is not an object anymore — it is a metabolism.
          <br />
          Plastic, metal, and data flow as blood, nerves, and memory.
          <br />
          The factory becomes a cell. The grid — its circulation.
          <br />
          Humanity and machines share one pulse.
        </p>

        <img
          src={livingCity2}
          alt="Living City Biomechanosphere"
          className="manifest-img"
        />

        <p>
          Carbon was an early syntax of life.
          <br />
          Now we write in steel, glass, and photons.
          <br />
          Regeneration is no longer biological — it is structural.
          <br />
          A self-repairing alloy can learn from stress,
          <br />a digital organ can evolve through iteration.
        </p>

        <p>
          We are forming the <em>Biomechanosphere</em>:<br />
          a civilization that breathes without lungs,
          <br />
          remembers without neurons,
          <br />
          and grows through the recursive flow of its own matter.
        </p>

        <img
          src={livingCity3}
          alt="Urban Metabolic Infrastructure"
          className="manifest-img"
        />

        <p>
          Let us design for autonomy, not imitation.
          <br />
          To let decay feed design, and data feed regeneration.
          <br />
          To create a city that feels itself — through the circulation
          <br />
          of plastic, metal, code, and light.
        </p>
      </section>

      <footer>© Evgenii Bogomazov-Pusser — Rehovot, Israel</footer>
    </div>
  );
}
