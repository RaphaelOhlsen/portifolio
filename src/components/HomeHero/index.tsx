import Image from 'next/image';
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import { HomeHeroProps } from '../../types';

export default function HomeHero({ data }: HomeHeroProps) {
  return (
    <Container data-aos="fade-up">
      <Image
        src="/images/picture.webp"
        width={100}
        height={100}
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto'
        }}
        alt="Raphael Bernardo Ohlsen"
      />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>{`Pode me chamar de ${data.nick_name}`}</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">{data.first_name},</span>
            </div>
            <div>
              Sobrenome: <span className="blue">{data.last_name}</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="purple">Cargo</span> {'\u007B'}
            <div>
              Função: <span className="blue">{data.role},</span>
            </div>
            <div>
              Empresa: <span className="blue">{data.company}</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}
