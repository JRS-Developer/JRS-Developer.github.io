import { projects } from "@/data/projects";
import ProjectList from "../ProjectList";
import SectionWrapper from "./SectionWrapper";

const { Heading } = SectionWrapper;

const ProjectsSection = () => {
  return (
    <>
      <Heading id="projects">Projects</Heading>

      <ProjectList projects={projects} />
    </>
  );
};

export default ProjectsSection;
