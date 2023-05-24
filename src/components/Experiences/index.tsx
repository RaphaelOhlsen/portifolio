import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperienceItem';
import { Container } from './styles';
import { ExperiencesProps } from '../../types';

export default function Experiences({ data }: ExperiencesProps) {
  return (
    <Container>
      <SectionTitle
        title={` 0${data.length} Anos`}
        description="de experiência"
      />

      <section>
        {data.map(experience => (
          <ExperienceItem
            year={experience.year}
            role={experience.role}
            description={experience.description}
            key={experience.id}
          />
        ))}
        ;
      </section>
    </Container>
  );
}
