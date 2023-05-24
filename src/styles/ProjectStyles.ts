import { darken } from 'polished';
import styled from 'styled-components';

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > main {
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 100%;
    padding: 0 5rem;

    pre {
      display: inline-block;
      white-space: pre;
      background: #000;
      padding: 0.8rem;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 300;
      color: ${({ theme }) => theme.textLight};
      border-radius: 0.5rem;
      border: 1px solid ${({ theme }) => theme.primary};
      &: hover {

      }
    }

    div.buttons {
      display: flex;
      justify-content: space-around;
    }

    p,
    ul {
      color: ${({ theme }) => theme.textLight};
      font-size: 1.3rem;
      font-weight: 300;
      text-align: justify;
    }

    p + ul {
      margin-top: 1rem;
    }

    p {
      margin-bottom: 1rem;
      > a,
      strong {
        color: ${({ theme }) => theme.primary};
      }
    }

    ul {
      margin: 0rem 0 1rem 1.3rem;
      list-style: disc;
    }

    li {
      margin-bottom: 0.3rem;
    }

    img {
      width: 70%;
      display: block;
      margin: 0 auto;
    }

    button {
      background: ${({ theme }) => theme.primary};
      padding: 0.8rem 3rem;
      border-radius: 0.5rem;
      border: none;
      transition: 0.5s;
      margin-top: 2rem;
      display: flex;
      align-items: center;

      &:hover {
        background: ${({ theme }) => darken(0.1, theme.primary)};
      }

      a {
        color: #fff;
        text-transform: uppercase;
        font-size: 1.5rem;
        font-weight: 300;
        margin-left: 0.5rem;
      }
    }

    @media (max-width: 700px) {
      padding: 0 2.5rem;

      p {
        font-size: 1rem;
      }

      button {
        padding: 0.7rem 2rem;

        a {
          font-size: 0.9rem;
        }
      }
    }
  }
`;

export default ProjectContainer;
