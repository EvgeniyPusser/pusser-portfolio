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
      title: "Southern Provincial style by V. Pitanin",
      img: house3,
      desc: "Architectural concept realized with full legal and planning compliance.",
    },
    {
      title: "Private house on Kamenny Island",
      img: house2,
      desc: "End-to-end development in St. Petersburg’s most exclusive district.",
    },
  ];

  return (
    <main>
      <h2>Developer Projects</h2>
      <div className="grid-projects">
        <ProjectCard {...projects[0]} imgClass="img1" />
        <ProjectCard {...projects[1]} imgClass="img2" />
        <ProjectCard {...projects[2]} imgClass="img3" />
      </div>
    </main>
  );
}
