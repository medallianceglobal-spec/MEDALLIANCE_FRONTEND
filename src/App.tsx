import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import AuthPage from "./pages/AuthPage";
import VendorsPage from "./pages/VendorsPage";
import VendorDetailsPage from "./pages/VendorDetailsPage";
import AboutPage from "./pages/AboutPage";
import VendorDashboardPage from "./pages/VendorDashboardPage";
import NetworkAccessPage from "./pages/NetworkAccessPage";
import RegisterCompanyPage from "./pages/RegisterCompanyPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/vendors" element={<VendorsPage />} />
            <Route path="/vendors/:id" element={<VendorDetailsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/vendor-dashboard" element={<VendorDashboardPage />} />
            <Route path="/network-access" element={<NetworkAccessPage />} />
            <Route path="/register-company" element={<RegisterCompanyPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
