import { PrismicRichText } from '@prismicio/react';
import { ContentProps } from './types';

export const Content = ({ content }: ContentProps) => (
  <div>
    <PrismicRichText field={content} />
  </div>
);
