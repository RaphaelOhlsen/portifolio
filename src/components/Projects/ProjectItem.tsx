import { AiOutlineRightCircle } from 'react-icons/ai';
import NextLink from '../NextLink';
import { ProjectContainer } from './styles';

interface ProjectProps {
  title: string;
  type: string;
  slug: string;
  img: string;
}

export default function Projects({ title, type, slug, img }: ProjectProps) {
  return (
    <ProjectContainer imgUrl={img} data-aos="fade-up">
      <section>
        <div className="overlay" />
        <div className="text">
          <h1># {title}</h1>
          <h2>- {type}</h2>
        </div>
      </section>
      <button type="button">
        <NextLink href={`/projects/${slug}`}>
          Ver mais <AiOutlineRightCircle />
        </NextLink>
      </button>
    </ProjectContainer>
  );
}
