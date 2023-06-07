import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin
} from 'react-icons/ai';
import { Container } from './styles';

export default function Footer() {
  const handleRedirect = (url: string) => {
    window.open(url, '_blank');
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Voltar ao topo
        </button>
        <section>
          <AiOutlineTwitter
            onClick={() => handleRedirect('https://twitter.com/Raphael_Ohlsen')}
          />
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com/RaphaelOhlsen')}
          />
          <AiFillLinkedin
            onClick={() =>
              handleRedirect(
                'https://www.linkedin.com/in/raphael-bernardo-ohlsen-79115689/'
              )
            }
          />
        </section>
      </div>
    </Container>
  );
}
