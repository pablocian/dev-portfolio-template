import projects from '../data/projects.json';
import ProjectCard from './ProjectCard.jsx';

function Projects() {
  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="section-wrap">
        <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
