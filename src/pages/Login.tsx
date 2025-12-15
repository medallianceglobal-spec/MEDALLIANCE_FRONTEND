import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from '@/contexts/AuthContext';
import { login, googleLogin } from "@/utils/api/auth";
import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";
import logoFull from "@/assets/logo-full.png";

/**
 * Colors pulled from your logo:
 * - mint  : #34E7C1
 * - blue  : #2EA1F2
 * - navy  : #133B8A
 *
 * This file only changes Tailwind color classes (and removes logo invert/brightness).
 * Logic and behavior are left unchanged.
 */

const Login = () => {
  const navigate = useNavigate();
  const { Login } = useAuth();

  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  // Form state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    setError("");
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsAnimating(true);
    setIsLoading(true);

    try {
      const response = await login({
        email: formData.email,
        password: formData.password,
      });

      const token = localStorage.getItem("auth_token") || response?.token;
      if (!token) {
        setError("Login succeeded but token missing. Please try again.");
        return;
      }

      // Call AuthContext login
      Login();

      navigate("/", { replace: true });
    } catch (err: any) {
      console.error("Login error:", err);

      const serverMsg =
        err?.response?.data?.error || err?.response?.data?.message;
      setError(serverMsg || "Invalid email or password. Please try again.");
    } finally {
      setIsAnimating(false);
      setIsLoading(false);
    }
  };

  const handleGoogleSuccess = async (credentialResponse: CredentialResponse | null) => {
    setIsLoading(true);
    setIsAnimating(true);
    setError("");

    try {
      const idToken = credentialResponse?.credential;
      if (!idToken) {
        throw new Error("Google did not return a credential token.");
      }
      console.log(idToken);

      // send ID token to backend; googleLogin stores token in localStorage
      await googleLogin(idToken);

      // Call AuthContext login
      Login();

      navigate("/", { replace: true });
    } catch (err: any) {
      console.error("Google login error:", err);
      const serverMsg =
        err?.response?.data?.error || err?.response?.data?.message;
      setError(serverMsg || "Google sign-in failed. Please try again.");
    } finally {
      setIsLoading(false);
      setIsAnimating(false);
    }
  };

  const handleGoogleError = () => {
    setIsLoading(false);
    setIsAnimating(false);
    setError("Google login failed. Please try again.");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div
        className={`w-full lg:w-1/2 flex flex-col items-center justify-center p-8 transition-all duration-700 ${isAnimating
            ? "bg-gradient-to-br from-[#34E7C1] to-[#2EA1F2]"
            : "bg-[#34E7C1]/5"
          }`}
      >
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <img
              src={logoFull}
              alt="MedAlliance Global"
              className={`h-72 mx-auto mb-6 transition-all duration-700`}
            />
            <h1
              className={`text-3xl font-bold mb-2 transition-colors duration-700 -mt-20 ${isAnimating ? "text-[#133B8A]" : "text-[#133B8A]"
                }`}
            >
              Welcome Back
            </h1>
            <p
              className={`transition-colors duration-700 ${isAnimating ? "text-[#133B8A]/90" : "text-[#133B8A]/70"
                }`}
            >
              Sign in to your account
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div
              className="mb-4 p-3 border rounded"
              style={{
                background: "rgba(255,80,80,0.06)",
                borderColor: "rgba(255,80,80,0.16)",
                color: "rgba(255,80,80,0.95)",
              }}
            >
              {error}
            </div>
          )}

          {/* Email/Password Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className={`transition-colors duration-700 ${isAnimating ? "text-[#133B8A]" : "text-[#133B8A]"
                  }`}
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                value={formData.email}
                onChange={handleInputChange}
                disabled={isLoading}
                className={`transition-all duration-700 ${isAnimating
                    ? "bg-[#2EA1F2]/20 border-[#2EA1F2]/30 text-[#133B8A] placeholder:text-[#133B8A]/60"
                    : "bg-[#2EA1F2]/10 border-[#2EA1F2]/10 text-[#133B8A] placeholder:text-[#133B8A]/40"
                  }`}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="password"
                  className={`transition-colors duration-700 ${isAnimating ? "text-[#133B8A]" : "text-[#133B8A]"
                    }`}
                >
                  Password
                </Label>
                <Link
                  to="/forgot-password"
                  className={`text-sm transition-colors duration-700 ${isAnimating
                      ? "text-[#2EA1F2] hover:text-[#133B8A]"
                      : "text-[#2EA1F2] hover:text-[#133B8A]"
                    }`}
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
                value={formData.password}
                onChange={handleInputChange}
                disabled={isLoading}
                className={`transition-all duration-700 ${isAnimating
                    ? "bg-[#2EA1F2]/20 border-[#2EA1F2]/30 text-[#133B8A] placeholder:text-[#133B8A]/60"
                    : "bg-[#2EA1F2]/10 border-[#2EA1F2]/10 text-[#133B8A] placeholder:text-[#133B8A]/40"
                  }`}
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className={`w-full transition-all duration-700 ${isAnimating
                  ? "bg-[#34E7C1] text-[#133B8A] hover:bg-[#2EA1F2]"
                  : "bg-[#34E7C1] text-[#133B8A] hover:bg-[#2EA1F2]"
                }`}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div
                className={`w-full border-t transition-colors duration-700 ${isAnimating ? "border-[#2EA1F2]/30" : "border-gray-300"
                  }`}
              ></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span
                className={`px-2 transition-colors duration-700 ${isAnimating
                    ? "bg-[#34E7C1]/5 text-[#133B8A]/90"
                    : "bg-[#34E7C1]/5 text-[#133B8A]/70"
                  }`}
              >
                Or continue with
              </span>
            </div>
          </div>

          {/* Google Sign-in Button */}
          <div className="w-full flex justify-center mt-4">
            <div className="w-full">
              <div >
                <GoogleLogin
                  shape="pill"
                  size="large"
                  theme="filled_blue"
                  text="continue_with"
                  onSuccess={handleGoogleSuccess}
                  onError={handleGoogleError}
                />
              </div>
            </div>
          </div>
          <p
            className={`mt-6 text-center text-sm transition-colors duration-700 ${isAnimating ? "text-[#133B8A]/90" : "text-[#133B8A]/70"
              }`}
          >
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              className={`font-medium transition-colors duration-700 ${isAnimating
                  ? "text-[#2EA1F2] hover:text-[#133B8A] underline"
                  : "text-[#2EA1F2] hover:text-[#133B8A]"
                }`}
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div
        className={`hidden lg:flex lg:w-1/2 items-center justify-center p-8 transition-all duration-700 ${isAnimating
            ? "bg-[#34E7C1]/5"
            : "bg-gradient-to-br from-[#34E7C1] to-[#2EA1F2]"
          }`}
      >
        <div className="text-center max-w-md">
          <img
            src={logoFull}
            alt="MedAlliance Global"
            className={`h-72 mx-auto transition-all duration-700 -mt-72 ${isAnimating ? "" : "brightness-0 invert"
              }`}
          />
          <h2
            className={`text-3xl font-bold mb-4 transition-colors duration-700 ${isAnimating ? "text-white" : "text-white"
              }`}
          >
            Global Healthcare Vendor Network
          </h2>
          <p
            className={`text-lg transition-colors duration-700 ${isAnimating ? "text-white" : "text-white"
              }`}
          >
            Connect with trusted healthcare providers from around the world
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
