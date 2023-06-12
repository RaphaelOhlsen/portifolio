import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Technologies`.
 */
export type TechnologiesProps = SliceComponentProps<Content.TechnologiesSlice>;

/**
 * Component for "Technologies" Slices.
 */
const Technologies = ({ slice }: TechnologiesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for technologies (variation: {slice.variation})
      Slices
    </section>
  );
};

export default Technologies;
