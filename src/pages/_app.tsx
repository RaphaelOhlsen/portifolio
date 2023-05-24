import { ThemeProvider } from 'styled-components';
import { PrismicPreview } from '@prismicio/next';
import NextNprogress from 'nextjs-progressbar';
import { Toaster } from 'react-hot-toast';
import { repositoryName } from '../../prismicio';
import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <PrismicPreview repositoryName={repositoryName}>
        <NextNprogress
          color={theme.primary}
          startPosition={0.3}
          stopDelayMs={200}
          showOnShallow
        />
        <Toaster position="bottom-right" />
        <Component {...pageProps} />
        <GlobalStyles />
      </PrismicPreview>
    </ThemeProvider>
  );
}

export default MyApp;
