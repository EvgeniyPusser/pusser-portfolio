import ProjectCard from "../components/ProjectCard";
import condominium from "../assets/condominium.jpg";
import slums from "../assets/slums.jpg";

export default function BlockchainHousing() {
  const projects = [
    {
      title: "Blockchain Housing Ledger",
      img: condominium,
      desc: "Developed a prototype for transparent housing management using smart contracts and immutable records. Enables residents to track decisions, budgets, and maintenance history. This project leverages blockchain technology to create transparent systems of shared ownership for multi-apartment buildings, residential communities, and local infrastructure such as roads and utilities. Within condominiums, blockchain can record and manage ownership rights, enabling the collective formation of investment resources that residents can use for personal or community projects.",
    },

    {
      title: "Blockchain for Informal Settlements",
      img: slums,
      desc: "A second application is the use of blockchain to record and verify actual usage of land and housing in informal settlements and conflict zones (for example, in the Gaza Strip). Even where property use is not legally recognized, blockchain can provide a transparent, immutable record of occupation and resource sharing, supporting accountability, reducing disputes, and laying the groundwork for future regularization.",
    },
  ];

  return (
    <main>
      <h2>Blockchain in Housing</h2>
      {projects.map((p, index) => (
        <ProjectCard key={index} title={p.title} img={p.img} desc={p.desc} />
      ))}
    </main>
  );
}
