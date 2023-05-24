import SectionTitle from '../SectionTitle';
import KnowledgesItem from './KnowledgesItem';
import knowledges from './knowledges';
import { Container } from './styles';

export default function Knowledges() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
      <section>
        {knowledges.map(knowledge => (
          <KnowledgesItem
            title={knowledge.title}
            icon={knowledge.icon}
            key={knowledge.title}
          />
        ))}
      </section>
    </Container>
  );
}
