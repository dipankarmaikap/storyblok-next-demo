/* eslint-disable @next/next/no-img-element */
import { storyblokEditable } from "@storyblok/react";
export default function FeaturedProjectsSection({ blok }) {
  let { title, projects } = blok;
  return (
    <section {...storyblokEditable(blok)} id="projects" className="my-8 p-6">
      <p className="font-serif text-lg">{title}</p>
      <div className="featured-projects my-8 grid md:grid-cols-3 gap-6">
        {projects &&
          projects?.map((project) => (
            <ProjectItem project={project} key={project._uid} />
          ))}
      </div>
    </section>
  );
}

function ProjectItem({ project }) {
  return (
    <article {...storyblokEditable(project)} className="project-item">
      <img
        src={project?.featured_image?.filename}
        alt={project?.featured_image?.alt}
      />
      <h2 className="mt-2">
        <a href={project?.link?.url ?? "/"} className="post text-2xl font-bold">
          {project.title}
        </a>
      </h2>
    </article>
  );
}
