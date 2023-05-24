import Head from 'next/head';
import ProjectsContainer from '../../styles/ProjectsStyles';
import ProjectItem from '../../components/ProjectItem';
import Header from '../../components/Header';
import { createClient } from '../../../prismicio';
import { ProjectsProps } from '../../types';

export default function Projects({ projects }: ProjectsProps) {
  return (
    <ProjectsContainer>
      <Head>
        <title>Projetos | Mocad</title>
        {/* <link rel="icon" href="/ico.png" /> */}
      </Head>
      <Header />
      <main className="container">
        {projects.map(project => (
          <ProjectItem
            key={project.id}
            title={project.title}
            type={project.type}
            slug={project.uid}
            imgUrl={project.image}
          />
        ))}
      </main>
    </ProjectsContainer>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const projectsResponse = await client.getAllByType('project', {
    orderings: [{ field: 'document.first_publication_date', direction: 'desc' }]
  });

  const projects = projectsResponse.map(project => ({
    id: project.id,
    uid: project.uid,
    title: project.data.title,
    type: project.data.type,
    link: project.data.link,
    image: project.data.thumbnail.url
  }));

  return {
    props: {
      projects
    },
    revalidate: 86400
  };
}
