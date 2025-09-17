import ProjectCard from "../components/ProjectCard";
import blockchain from "../assets/blockchain.jpg";
import ledger from "../assets/ledger.jpg";
import smartcontracts from "../assets/smartcontracts.jpg";

export default function BlockchainHousing() {
  const projects = [
    {
      title: "Blockchain Housing Ledger",
      img: blockchain,
      desc: "Developed a prototype for transparent housing management using smart contracts and immutable records. Enables residents to track decisions, budgets, and maintenance history.",
    },
    {
      title: "Collaboration with Prof. Chernyshov (MFTI)",
      img: ledger,
      desc: "Joint research on applying distributed ledger technology to multi-unit housing governance. Focused on legal integration and data integrity.",
    },
    {
      title: "Smart Contracts for Utility Payments",
      img: smartcontracts,
      desc: "Designed a system where payments and service requests are automatically recorded and verified, reducing fraud and increasing accountability in housing services.",
    },

    {
      title: "Shared Ownership Models",
      img: smartcontracts,
      desc: "This project leverages blockchain technology to create transparent systems of shared ownership for multi-apartment buildings, residential communities, and local infrastructure such as roads and utilities. Within condominiums, blockchain can record and manage ownership rights, enabling the collective formation of investment resources that residents can use for personal or community projects.",
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
