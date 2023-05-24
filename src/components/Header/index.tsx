import NavLink from './NavLink';
import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Projetos" path="/projects" includes />
      </ul>
    </Container>
  );
}
