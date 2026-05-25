export default function ProjectCard({ title, img, desc, imgClass }) {
  return (
    <div className="card">
      <img src={img} alt={title} loading="lazy" className={imgClass} />
      <div className="card-body">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}
