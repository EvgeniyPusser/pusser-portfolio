import ProjectCard from "../components/ProjectCard";
import mansarda from "../assets/mansarda.jpg";
import reynberg from "../assets/reynberg.jpg";
import gradcode from "../assets/gradcode.jpg";

export default function ReconstructionLaw() {
  const projects = [
    {
      title: "Mansard Projects in Central St. Petersburg",
      img: mansarda,
      desc: "Implemented rooftop reconstructions based on Peter the Great’s sazhen plan. Preserved historical silhouette while adding residential space.",
    },
    {
      title: "Reynberg’s Urban Vision",
      img: reynberg,
      desc: "Collaborated on architectural concepts for adaptive reuse and vertical expansion of existing buildings.",
    },
    {
      title: "Methodology for Evaluating Shared Property",
      img: gradcode,
      desc: "Developed legal framework to assess changes in common property during reconstruction. Basis for reforming Article 51 of the Urban Code.",
    },
  ];

  return (
    <main>
      <h2>⚖️ Reconstruction & Legal Reform</h2>
      {projects.map((p, index) => (
        <ProjectCard key={index} title={p.title} img={p.img} desc={p.desc} />
      ))}
    </main>
  );
}
