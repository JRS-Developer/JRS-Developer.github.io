import { ProjectT } from "@/data/projects";
import { SimpleGrid, Box } from "@chakra-ui/react";
import ProjectItem from "./ProjectItem";

type Props = {
  projects: ProjectT[];
};

function ProjectList({ projects }: Props) {
  return (
    <SimpleGrid
      columns={{ sm: 1, lg: 2 }}
      rowGap="8"
      gap="4"
      as="ul"
      sx={{
        listStyle: "none",
      }}
    >
      {projects.map((project) => (
        <Box key={project.title} as="li">
          <ProjectItem project={project} />
        </Box>
      ))}
    </SimpleGrid>
  );
}

export default ProjectList;
