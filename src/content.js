export const links = {
  github: "https://github.com/EvgeniyPusser",
  linkedin: "https://www.linkedin.com/in/evgenii-bogomazov-pusser/",
  email: "mailto:evgeniipusser88@gmail.com",
  thermal: "/tools/thermal/index.html",
  thermalCode: "https://github.com/EvgeniyPusser/living-things-sim/tree/main/calc",
  logistics: "https://github.com/EvgeniyPusser/ai-truck-helper",
  simulation: "https://github.com/EvgeniyPusser/living-things-sim",
  egregor: "https://github.com/EvgeniyPusser/ergregor-cloud",
  traffic: "https://github.com/EvgeniyPusser/traffic-engine",
  trafficResults: "https://evgeniypusser.github.io/traffic-engine/",
  blog: "https://substack.com/@livingcivilization",
  summaries: "/papers/living-things-and-adaptive-buildings.docx",
  conceptual: "/papers/living-things-framework.docx",
  thermalPaper: "/papers/source-selection-null-result.pdf",
};

export function ExternalLink({ href, children, ...props }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
}
