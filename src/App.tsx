import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { useEffect, lazy, Suspense } from "react";

import ProtectedRoute from "@/routes/ProtectedRoute";
import PublicRoute from "@/routes/PublicRoute";

// Lazy load pages
const Index = lazy(() => import("./pages/Index"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Login = lazy(() => import("./pages/Login"));
const VendorsPage = lazy(() => import("./pages/VendorsPage"));
const VendorDetailsPage = lazy(() => import("./pages/VendorDetailsPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const VendorDashboardPage = lazy(() => import("./pages/VendorDashboardPage"));
const NetworkAccessPage = lazy(() => import("./pages/NetworkAccessPage"));
const RegisterCompanyPage = lazy(() => import("./pages/RegisterCompanyPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes>

              {/* PUBLIC (only when NOT logged in) */}
              <Route
                path="/login"
                element={
                  <PublicRoute>
                    <Login />
                  </PublicRoute>
                }
              />

              <Route
                path="/signup"
                element={
                  <PublicRoute>
                    <SignUp />
                  </PublicRoute>
                }
              />

              {/* PROTECTED (login required) */}
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Index />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/vendor-dashboard"
                element={
                  <ProtectedRoute>
                    <VendorDashboardPage />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/network-access"
                element={
                  <ProtectedRoute>
                    <NetworkAccessPage />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/register-company"
                element={
                  <ProtectedRoute>
                    <RegisterCompanyPage />
                  </ProtectedRoute>
                }
              />

              {/* PUBLIC */}
              <Route path="/vendors" element={<VendorsPage />} />
              <Route path="/vendors/:id" element={<VendorDetailsPage />} />
              <Route path="/about" element={<AboutPage />} />

              <Route path="*" element={<NotFound />} />

            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
