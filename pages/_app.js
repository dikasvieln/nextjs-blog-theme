import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import { CodePen, Gist, MDXEmbedProvider } from 'mdx-embed';

const components = {
  CodePen,
  Gist,
};

function MyApp({ Component, pageProps }) {
  return (
    <>  
        <MDXEmbedProvider components={components}>
        <span className="theme-bejamas" />
        <Component {...pageProps} />
        </MDXEmbedProvider>
    </>
  );
}

export default MyApp;
