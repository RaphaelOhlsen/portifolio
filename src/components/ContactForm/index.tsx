import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';

export default function ContactForm() {
  return (
    <Container id="contato">
      <SectionTitle
        title={
          <>
            Precisa dos
            <br />
            meus serviços?
          </>
        }
        description={
          <>
            Preencha o formulário abaixo
            <br />
            que entrarei em contato com você.
          </>
        }
      />
      <Form />
    </Container>
  );
}
