import { SliceSimulator } from '@slicemachine/adapter-next/simulator';
import { SliceZone } from '@prismicio/react';

import { components } from '../../slices';

const SliceSimulatorPage = () => (
  <SliceSimulator
    sliceZone={props => <SliceZone {...props} components={components} />}
  />
);

export default SliceSimulatorPage;
