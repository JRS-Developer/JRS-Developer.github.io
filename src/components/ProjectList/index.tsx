import { projects } from "@/data/projects";
import { SimpleGrid } from "@chakra-ui/react";
import ProjectItem from "./ProjectItem";

function ProjectList() {
  return (
    <SimpleGrid columns={{ sm: 2 }} gap="4">
      {projects.map((project) => (
        <ProjectItem key={project.title} project={project} />
      ))}
    </SimpleGrid>
  );
}

export default ProjectList;
