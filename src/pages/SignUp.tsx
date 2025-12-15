import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useAuth } from '@/contexts/AuthContext';
import { signup, googleLogin } from "@/utils/api/auth";
import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";
import logoFull from "@/assets/logo-full.png";

const Signup = () => {
  const navigate = useNavigate();
    const { Login } = useAuth();

  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  // Form state matching SignupPayload interface
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone_number: "",
    termsAccepted: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    setError(""); // Clear error on input change
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, termsAccepted: checked }));
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.termsAccepted) {
      setError("Please accept the Terms & Conditions");
      return;
    }

    setIsAnimating(true);
    setIsLoading(true);

    try {
      // Call your signup API with the exact fields from SignupPayload
      const response = await signup({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone_number: formData.phone_number,
      });

      // Successfully signed up
      console.log("Signup successful:", response);

      // Redirect to dashboard or home page
      navigate("/login");
    } catch (err: any) {
      console.error("Signup error:", err);
      setError(
        err.response?.data?.message ||
          "Failed to create account. Please try again."
      );
      setIsAnimating(false);
    } finally {
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
        className={`hidden lg:flex lg:w-1/2 items-center justify-center p-8 transition-all duration-700 ${
          isAnimating
            ? "bg-[linear-gradient(135deg,#34E7C1_0%,#2EA1F2_100%)]"
            : "bg-[linear-gradient(135deg,#34E7C1_0%,#2EA1F2_100%)]"
        }`}
      >
        <div className="text-center max-w-md">
          <img
            src={logoFull}
            alt="MedAlliance Global"
            className={`h-84 mx-auto mb-8 transition-all duration-700 ${
              isAnimating ? "" : "brightness-0 invert"
            }`}
          />
          <h2
            className={`text-3xl font-bold mb-4 duration-700 -mt-24 ${
              isAnimating ? "text-white" : "text-white"
            }`}
          >
            Join Our Network
          </h2>
          <p
            className={`text-lg transition-colors duration-700 ${
              isAnimating ? "text-white" : "text-white"
            }`}
          >
            Expand your reach and connect with healthcare seekers worldwide
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div
        className={`w-full lg:w-1/2 flex items-center justify-center p-8 transition-all duration-700 ${
          isAnimating
            ? "bg-[linear-gradient(135deg,#2EA1F2_0%,#34E7C1_100%)]"
            : "bg-[#34E7C1]/5"
        }`}
      >
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <img
              src={logoFull}
              alt="MedAlliance Global"
              className="h-12 mx-auto mb-6 lg:hidden transition-all duration-700"
            />
            <h1
              className={`text-3xl font-bold mb-2 transition-colors duration-700 ${
                isAnimating ? "text-[#133B8A]" : "text-[#133B8A]"
              }`}
            >
              Create Account
            </h1>
            <p
              className={`transition-colors duration-700 ${
                isAnimating ? "text-[#133B8A]/90" : "text-[#133B8A]/70"
              }`}
            >
              Get started with MedAlliance Global
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 border rounded" style={{ background: "rgba(255,80,80,0.06)", borderColor: "rgba(255,80,80,0.16)", color: "rgba(255,80,80,0.95)" }}>
              {error}
            </div>
          )}

          {/* Main Signup Form */}
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className={`${isAnimating ? "text-[#133B8A]" : "text-[#133B8A]"}`}>
                Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder=""
                required
                value={formData.name}
                onChange={handleInputChange}
                disabled={isLoading}
                className={`transition-all ${
                  isAnimating
                    ? "bg-[#2EA1F2]/20 border-[#2EA1F2]/30 text-[#133B8A] placeholder:text-[#133B8A]/60"
                    : "bg-[#2EA1F2]/10 border-[#2EA1F2]/10 text-[#133B8A] placeholder:text-[#133B8A]/40"
                }`}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone_number" className={`${isAnimating ? "text-[#133B8A]" : "text-[#133B8A]"}`}>
                Phone Number
              </Label>
              <Input
                id="phone_number"
                name="phone_number"
                type="tel"
                placeholder="+91 000-000-0000"
                required
                value={formData.phone_number}
                onChange={handleInputChange}
                disabled={isLoading}
                className={`transition-all ${
                  isAnimating
                    ? "bg-[#2EA1F2]/20 border-[#2EA1F2]/30 text-[#133B8A] placeholder:text-[#133B8A]/60"
                    : "bg-[#2EA1F2]/10 border-[#2EA1F2]/10 text-[#133B8A] placeholder:text-[#133B8A]/40"
                }`}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className={`${isAnimating ? "text-[#133B8A]" : "text-[#133B8A]"}`}>
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
                className={`transition-all ${
                  isAnimating
                    ? "bg-[#2EA1F2]/20 border-[#2EA1F2]/30 text-[#133B8A] placeholder:text-[#133B8A]/60"
                    : "bg-[#2EA1F2]/10 border-[#2EA1F2]/10 text-[#133B8A] placeholder:text-[#133B8A]/40"
                }`}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className={`${isAnimating ? "text-[#133B8A]" : "text-[#133B8A]"}`}>
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
                value={formData.password}
                onChange={handleInputChange}
                disabled={isLoading}
                minLength={8}
                className={`transition-all ${
                  isAnimating
                    ? "bg-[#2EA1F2]/20 border-[#2EA1F2]/30 text-[#133B8A] placeholder:text-[#133B8A]/60"
                    : "bg-[#2EA1F2]/10 border-[#2EA1F2]/10 text-[#133B8A] placeholder:text-[#133B8A]/40"
                }`}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                required
                checked={formData.termsAccepted}
                onCheckedChange={handleCheckboxChange}
                disabled={isLoading}
              />
              <label
                htmlFor="terms"
                className={`text-sm cursor-pointer ${
                  isAnimating ? "text-[#133B8A]/90" : "text-[#133B8A]/70"
                }`}
              >
                I agree to the{" "}
                <Link
                  to="/terms"
                  className={`${
                    isAnimating
                      ? "text-[#2EA1F2] underline hover:text-[#133B8A]"
                      : "text-[#2EA1F2] hover:text-[#133B8A]"
                  }`}
                >
                  Terms & Conditions
                </Link>
              </label>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className={`w-full transition-all ${
                isAnimating
                  ? "bg-[#34E7C1] text-[#133B8A] hover:bg-[#2EA1F2]"
                  : "bg-[#34E7C1] text-[#133B8A] hover:bg-[#2EA1F2]"
              }`}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </Button>
          </form>

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
            className={`mt-6 text-center text-sm transition-colors ${
              isAnimating ? "text-[#133B8A]/90" : "text-[#133B8A]/70"
            }`}
          >
            Already have an account?{" "}
            <Link
              to="/login"
              className={`font-medium ${
                isAnimating
                  ? "text-[#2EA1F2] underline hover:text-[#133B8A]"
                  : "text-[#2EA1F2] hover:text-[#133B8A]"
              }`}
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
