import { api } from "./client";

export interface User {
  id: string;
  email: string;
  phone_number: String;
  name: String;
  role: number;
}

// export interface Leads {
//   phone: String
// }

export interface AuthResponse {
  token: string;
  user: User;
}

// export interface GoogleAuthResponse{
//   id_token: string
// }

// export interface CompanyItem {
//   id: number;
//   name: string;
//   slug: string;
//   short_description: string | null;
//   city: string | null;
//   state: string | null;
//   medalliance_verified: boolean | null;
//   medalliance_trust: boolean | null;
//   claimed: boolean | null;
//   rating_avg: number | null;
//   rating_count: number | null;
//   created_at: string; // ISO date
//   image_url: string | null;
// }

// export interface CompanyListingResponse {
//   companies: CompanyItem[];
//   reload: (filters?: { q?: string; city?: string; state?: string; page?: number; limit?: number }) => Promise<void>;
//   loading: boolean;
// }

// src/api/types.ts
// export interface CompanyByIDResponse {
//   company: {
//     id: string; // Changed from number to string for UUID
//     name: string;
//     slug?: string | null;
//     short_description?: string | null;
//     long_description?: string | null;
//     website?: string | null;
//     category?: string | null;
//     sub_category?: string[] | null;
//     address_line?: string | null;
//     pincode?: string | null;
//     contact_email?: string | null;
//     contact_phone?: string | null;
//     description?: string | null;
//     years_in_business?: number | null;
//     consultation_fee?: number | null;
//     medalliance_verified: boolean;
//     medalliance_trust: boolean;
//     claimed?: boolean | null;
//     rating_avg?: string | null; // Backend returns string like "4.50"
//     rating_count?: number | null;
//     views_count?: number | null;
//     inquiries_count?: number | null;
//     country?: string | null;
//     state?: string | null;
//     city?: string | null;
//     meta?: Record<string, any> | null;
//     created_at?: string | null;
//     updated_at?: string | null;
//     active_subscription_id?: number | null;
//     google_maps_link?: string | null;
//     image_url?: string | null;
//   };
//   addresses?: any[]; // Add addresses array from your API
// }



// adjust fields to match your backend exactly
export interface SignupPayload {
  name: string;
  phone_number: string;
  email: string;
  password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export async function signup(payload: SignupPayload): Promise<AuthResponse> {
  const { data } = await api.post<AuthResponse>("/auth/signup", payload);
  // store token for later requests (until you move to HttpOnly cookies)
  localStorage.setItem("auth_token", data.token);
  return data;
}

// export async function fetchCompanyList(params?: {
//   q?: string;
//   city?: string;
//   state?: string;
//   page?: number;
//   limit?: number;
// }): Promise<CompanyListingResponse> {
//   const { data } = await api.get<CompanyListingResponse>("/api/companies", {
//     params,
//   });
//   return data;
// }

// CORRECT:
// export async function fetchCompanyById(id: number | string): Promise<CompanyByIDResponse> {
//   const { data } = await api.get<CompanyByIDResponse>(`/api/companies/${id}`);
//   return data;
// }

export async function login(payload: LoginPayload): Promise<AuthResponse> {
  const { data } = await api.post<AuthResponse>("/auth/login", payload);
  localStorage.setItem("auth_token", data.token);
  return data;
}

// export async function getLeads(payload: Leads) {
//   const { data } = await api.post<Leads>("/api/leads", payload);
//   return data
// }

export async function googleLogin(idToken: string): Promise<AuthResponse> {
  const { data } = await api.post<AuthResponse>("/auth/google", { idToken });
  localStorage.setItem("auth_token", data.token);
  return data;
}



export function logout() {
  localStorage.removeItem("auth_token");
}

export function getStoredToken(): string | null {
  return localStorage.getItem("auth_token");
}
