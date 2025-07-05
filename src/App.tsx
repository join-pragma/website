import { MDXProvider } from '@mdx-js/react';
import Pragma from './pragma.mdx';

export default function App() {
  return (
    <MDXProvider>
      <Pragma />
    </MDXProvider>
  );
}
