import DatadogInit from '../components/DataDog';
import ErrorBoundary from '../components/ErrorBoundary';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <DatadogInit />
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
