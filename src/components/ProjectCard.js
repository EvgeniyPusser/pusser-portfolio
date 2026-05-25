export default function ProjectCard({ title, img, desc, imgClass }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <img src={img} alt={title} loading="lazy" className={imgClass} />
      <p>{desc}</p>
    </div>
  );
}
