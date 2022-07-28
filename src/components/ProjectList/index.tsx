import { ProjectT } from "@/data/projects";
import { SimpleGrid } from "@chakra-ui/react";
import ProjectItem from "./ProjectItem";

type Props = {
  projects: ProjectT[];
};

function ProjectList({ projects }: Props) {
  return (
    <SimpleGrid columns={{ sm: 1, xl: 2 }} rowGap="8" gap="4">
      {projects.map((project) => (
        <ProjectItem key={project.title} project={project} />
      ))}
    </SimpleGrid>
  );
}

export default ProjectList;
