// import { SliceZone } from '@prismicio/react';
import AOS from 'aos';
import { useEffect } from 'react';
import Head from 'next/head';
import ContactForm from '../components/ContactForm';
import Experiences from '../components/Experiences';
import Knowledges from '../components/Knowledges';
import HomeContainer from '../styles/HomeStyles';
import HomeHero from '../components/HomeHero';
import Projects from '../components/Projects';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { createClient } from '../../prismicio';
import 'aos/dist/aos.css';
// import { components } from '../../slices';

export default function Home({ developerInfo, experiences, projects }) {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });

  return (
    <HomeContainer>
      <Head>
        <title>Home | Mocad</title>
        <meta
          name="description"
          content="Sou um desenvolvedor FullStack e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor FullStack e aqui apresento alguns projetos desenvolvidos por mim!"
        />
      </Head>
      <Header />
      <main className="container">
        {/* <SliceZone slices={page.data.slices} components={components} /> */}
        <HomeHero data={developerInfo} />
        <Experiences data={experiences} />
        <Projects data={projects} />
        <Knowledges />
        <ContactForm />
        <Footer />
      </main>
    </HomeContainer>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const developerInfoResponse = await client.getSingle('settings');

  const developerInfo = developerInfoResponse.data;

  const experiencesResponse = await client.getAllByType('experience', {
    orderings: [{ field: 'document.first_publication_date', direction: 'desc' }]
  });

  const experiences = experiencesResponse.map(experience => ({
    id: experience.id,
    uid: experience.uid,
    year: experience.data.year,
    role: experience.data.role,
    description: experience.data.description
  }));

  const projectsResponse = await client.getAllByType('project', {
    limit: 3,
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
      developerInfo,
      experiences,
      projects
    },
    revalidate: 86400
  };
}
