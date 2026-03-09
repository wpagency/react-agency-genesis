import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Audit from "./pages/Audit";
import Migration from "./pages/Migration";
import Speed from "./pages/Speed";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import GetQuote from "./pages/GetQuote";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import WordPressTroubleshooting from "./pages/services/WordPressTroubleshooting";
import WordPressMigration from "./pages/services/WordPressMigration";
import CustomApplications from "./pages/services/CustomApplications";
import WordPressMaintenance from "./pages/services/WordPressMaintenance";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/audit" element={<Audit />} />
            <Route path="/migration" element={<Migration />} />
            <Route path="/speed" element={<Speed />} />
            <Route path="/about" element={<About />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-quote" element={<GetQuote />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            {/* Service Pages */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/wordpress-troubleshooting" element={<WordPressTroubleshooting />} />
            <Route path="/services/wordpress-migration" element={<WordPressMigration />} />
            <Route path="/services/custom-applications" element={<CustomApplications />} />
            <Route path="/services/wordpress-maintenance" element={<WordPressMaintenance />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;



