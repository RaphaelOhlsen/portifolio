import NextLink from '../NextLink';
import SectionTitle from '../SectionTitle';
import { Container } from './styles';
import ProjectItem from './ProjectItem';

export default function Projects({ data }) {
  return (
    <Container>
      <SectionTitle title=" Ultimos Projetos" />

      {data.map(project => (
        <ProjectItem
          key={project.id}
          title={project.title}
          type={project.type}
          slug={project.uid}
          img={project.image}
        />
      ))}

      <button type="button">
        <NextLink href="/projects">Ver todos os projetos</NextLink>
      </button>
    </Container>
  );
}
