import { ReactNode } from 'react';
import { KnowledgesContainer } from './styles';

interface KnowledgesItemProps {
  title: string;
  icon: ReactNode;
}

export default function KnowledgesItem({ title, icon }: KnowledgesItemProps) {
  return (
    <KnowledgesContainer data-aos="fade-up">
      <p>{title}</p>
      {icon}
    </KnowledgesContainer>
  );
}
