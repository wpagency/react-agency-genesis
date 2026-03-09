import React from 'react';
import { Helmet } from 'react-helmet-async';
import { baseSEO, type SEOData } from '@/lib/content/seo';

interface SEOHeadProps {
  data: SEOData;
  path?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ data, path = '' }) => {
  const canonicalUrl = data.canonicalUrl || `${baseSEO.baseUrl}${path}`;
  const ogImage = data.ogImage || baseSEO.defaultImage;
  const fullOgImageUrl = ogImage.startsWith('http') ? ogImage : `${baseSEO.baseUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta name="keywords" content={data.keywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots */}
      {data.noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:type" content={data.ogType || 'website'} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={fullOgImageUrl} />
      <meta property="og:site_name" content={baseSEO.siteName} />
      <meta property="og:locale" content={baseSEO.locale} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={data.twitterCard || 'summary'} />
      <meta name="twitter:site" content={baseSEO.twitterHandle} />
      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" content={data.description} />
      <meta name="twitter:image" content={fullOgImageUrl} />
      
      {/* Structured Data */}
      {data.structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(data.structuredData)}
        </script>
      )}
      
      {/* Additional SEO optimizations */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-navbutton-color" content="#1e40af" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
};

export default SEOHead;


