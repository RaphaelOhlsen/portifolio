/* eslint-disable react/no-array-index-key */
import * as prismicH from '@prismicio/helpers';
import Head from 'next/head';
import { AiFillGithub } from 'react-icons/ai';
import { DiDigitalOcean } from 'react-icons/di';
import Header from '../../../components/Header';
import { ProjectBanner } from '../../../components/ProjectBanner';
import ProjectContainer from '../../../styles/ProjectStyles';
import { createClient } from '../../../../prismicio';
import { ProjectProps } from '../../../types';
import { Content } from '../../../components/prismic/Content';

export default function ProjectPage({ project }: ProjectProps) {
  return (
    <ProjectContainer>
      <Head>
        <title>{`Projeto | ${project.title}`}</title>
      </Head>
      <Header />
      <ProjectBanner
        title={project.title}
        type={project.type}
        imgUrl={project.image}
      />

      <main className="container">
        <Content content={project?.content} />
        <section className="tecnologias">
          <h2>Tecnologias</h2>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}
          >
            {project.technologies.map((technologie, idx) => (
              <img
                key={`tec-${idx}`}
                style={{ width: '200px', height: 'auto', margin: '10px' }}
                src={technologie}
                alt="technologie"
              />
            ))}
          </div>
        </section>

        <div className="buttons">
          {project.link.url && (
            <button type="button">
              <div>
                <DiDigitalOcean size={30} color="#fff" />
              </div>
              <a href={project.link.url} target="_blank" rel="noreferrer">
                projeto online
              </a>
            </button>
          )}
          <button type="button">
            <div>
              <AiFillGithub size={30} color="#fff" />
            </div>
            <a href={project.github.url} target="_blank" rel="noreferrer">
              Git Hub
            </a>
          </button>
        </div>
      </main>
    </ProjectContainer>
  );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const projectResponse = await client.getByUID('project', params.uid);

  const technologies = projectResponse.data.slices[0].items.map(
    technologie => technologie.image.url
  );

  const project = {
    title: projectResponse.data.title,
    type: projectResponse.data.type,
    link: projectResponse.data.link,
    image: projectResponse.data.thumbnail.url,
    content: projectResponse.data.description,
    github: projectResponse.data.github,
    technologies
  };

  return {
    props: {
      project
    },
    revalidate: 86400
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const projects = await client.getAllByType('project');

  return {
    paths: projects.map(project => prismicH.asLink(project)),
    fallback: false
  };
}
