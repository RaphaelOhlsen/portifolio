import { FaReact, FaNodeJs } from 'react-icons/fa';

import {
  SiStyledcomponents,
  SiTypescript,
  SiMui,
  SiExpress,
  SiPrismic,
  SiPostgresql
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

const knowledges = [
  { title: 'React', icon: <FaReact /> },
  { title: 'TypeScript', icon: <SiTypescript /> },
  { title: 'Styled Components', icon: <SiStyledcomponents /> },
  { title: 'Material UI', icon: <SiMui /> },
  { title: 'Prismic', icon: <SiPrismic /> },
  { title: 'Node', icon: <FaNodeJs /> },
  { title: 'Express JS', icon: <SiExpress /> },
  { title: 'PostGre', icon: <SiPostgresql /> },
  { title: 'Next JS', icon: <TbBrandNextjs /> }
];

export default knowledges;
