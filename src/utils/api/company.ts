import { api } from "./client";
import { CompanyListParams, CompanyListResponse, CompanyResponse } from "@/models/company/companyModels";

export async function fetchCompanyList(params?: CompanyListParams) {
  const { data } = await api.get<CompanyListResponse>("/companies", { params });
  return data;
}

export async function fetchCompanyById(id: string): Promise<{ success: boolean; company: CompanyResponse }> {
  const { data } = await api.get(`/companies/${id}`);
  return data;
}
