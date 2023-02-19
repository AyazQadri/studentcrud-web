import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const getHeaders = (method: string, token?: string): Record<string, string> => 
{
    const headers: Record<string, string> = {};
    switch(method) {
      case 'POST':
      case 'PUT':
      case 'PATCH':
        headers['Content-Type'] = 'application/json';
        headers['Accept'] = 'application/json';
        if (token) {
          headers['Authorization'] = `Bearer ${token}`;
        }
        break;
      case 'GET':
      case 'DELETE':
        headers['Accept'] = 'application/json';
        if (token) {
          headers['Authorization'] = `Bearer ${token}`;
        }
        break;
      default:
        throw new Error(`Invalid method: ${method}`);
    }
    return headers;
}
  

export const httpRequest = (endpoint: string, method: string, query?: string, token?: string, body?: any): Promise<AxiosResponse> => 
{
  const completeUrl = query ? `${endpoint}/${query}` : endpoint;
  const headers = getHeaders(method, token);
  const options: AxiosRequestConfig = { headers: headers };
  console.log(options, 'console of options')

  if (body) 
  {
    options.data = body;
  }

  switch(method) 
  {
    case 'GET':
      return axios.get(completeUrl, options);
    case 'POST':
      return axios.post(completeUrl, body || {}, options);
    case 'PUT':
      return axios.put(completeUrl, body || {}, options);
    case 'PATCH':
      return axios.patch(completeUrl, body || {}, options);
    case 'DELETE':
      return axios.delete(completeUrl, options);
    default:
      throw new Error(`Invalid method: ${method}`);
  }
}
