import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import './index.css'
import { trackWebVitals } from './lib/analytics/web-vitals'
import ErrorBoundary from './components/ErrorBoundary.tsx'

// Track Core Web Vitals
trackWebVitals();

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </HelmetProvider>
);


