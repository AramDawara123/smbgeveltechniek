import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import AboutPage from "./pages/About";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import OffertePage from "./pages/OffertePage";
import InnovatiePage from "./pages/InnovatiePage";
import GevelrenovatiePage from "./pages/services/GevelrenovatiePage";
import ScheurherstellPage from "./pages/services/ScheurherstellPage";
import RenovatieankersPage from "./pages/services/RenovatieankersPage";
import MetselwerkPage from "./pages/services/MetselwerkPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/over-ons" element={<AboutPage />} />
            <Route path="/projecten" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/offerte" element={<OffertePage />} />
            <Route path="/innovatie" element={<InnovatiePage />} />
            <Route path="/metselwerk" element={<MetselwerkPage />} />
            <Route path="/gevelrenovatie" element={<GevelrenovatiePage />} />
            <Route path="/scheurherstel" element={<ScheurherstellPage />} />
            <Route path="/renovatieankers" element={<RenovatieankersPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
