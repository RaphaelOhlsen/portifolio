import { ItemContainer } from './styles';

export default function ExperienceItem({ year, role, description }) {
  return (
    <ItemContainer data-aos="fade-up">
      <div>
        <h1>{year}</h1>
        <h2>{role}</h2>
        <p>{description}</p>
      </div>
    </ItemContainer>
  );
}
