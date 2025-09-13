export default function ProjectCard({ title, img, desc }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <img src={img} alt={title} loading="lazy" />
      <p>{desc}</p>
    </div>
  );
}
