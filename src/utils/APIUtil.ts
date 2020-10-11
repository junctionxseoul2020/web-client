import axios from 'axios';

export async function requestAPI<T>(url: string, request?: unknown): Promise<T> {
  const response = await axios.post<T>(`https://junctionx.azurewebsites.net${url}`, request);
  return response.data;
}
