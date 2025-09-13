import ProjectCard from "../components/ProjectCard";
import house1 from "../assets/house1.jpg";
import house2 from "../assets/house2.jpg";
import house3 from "../assets/house3.jpg";

export default function DeveloperProjects() {
  const projects = [
    {
      title: "Neoclassical project by Gerasimov in Mayan style",
      img: house1,
      desc: "Multi-story residential complex: land rights, approvals, construction — all delivered.",
    },
    {
      title: "Private house on Kamenny Island",
      img: house2,
      desc: "End-to-end development in St. Petersburg’s most exclusive district.",
    },
    {
      title: "Southern Provincial style by V. Pitanin",
      img: house3,
      desc: "Architectural concept realized with full legal and planning compliance.",
    },
  ];

  return (
    <main>
      <h2>Developer Projects</h2>
      {projects.map((p, index) => (
        <ProjectCard key={index} title={p.title} img={p.img} desc={p.desc} />
      ))}
    </main>
  );
}
