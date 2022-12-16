import { storyblokEditable } from "@storyblok/js";
import Image from "next/image";

export default function FeaturedProjectsSection({ blok }) {
  let { title, projects } = blok;
  let editable = blok?._editable ? storyblokEditable(blok) : {};
  return (
    <section {...editable} id="projects" className="my-8 p-6">
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
  let editable = project?._editable ? storyblokEditable(project) : {};

  let src = project?.featured_image?.filename + "/m/400x0";

  const myLoader = ({ src, width, quality }) => {
    return `${project?.featured_image?.filename}/m/50x0/filters:blur(10)`;
  };

  return (
    <article {...editable} className="project-item">
      <Image
        className="w-full"
        loader={myLoader}
        src={src}
        alt={project?.featured_image?.alt}
        width={500}
        height={400}
      />
      <h2 className="mt-2">
        <a href={project?.link?.url ?? "/"} className="post text-2xl font-bold">
          {project.title}
        </a>
      </h2>
    </article>
  );
}
