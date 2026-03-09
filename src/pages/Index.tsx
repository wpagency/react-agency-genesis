
import React from 'react';
import FunnelLayout from '@/components/FunnelLayout';
import SEOHead from '@/components/common/SEOHead';
import PremiumHero from '@/components/PremiumHero';
import PremiumServices from '@/components/PremiumServices';
import CaseStudiesPreview from '@/components/sections/CaseStudiesPreview';
import ProcessSection from '@/components/sections/ProcessSection';
import SocialProof from '@/components/sections/SocialProof';
import ContactCTA from '@/components/sections/ContactCTA';
import { pageSEO } from '@/lib/content/seo';

const Index = () => {
  return (
    <>
      <SEOHead data={pageSEO.home} path="/" />
      <FunnelLayout>
        <PremiumHero />
        <PremiumServices />
        <CaseStudiesPreview />
        <ProcessSection />
        <SocialProof />
        <ContactCTA />
      </FunnelLayout>
    </>
  );
};

export default Index;



