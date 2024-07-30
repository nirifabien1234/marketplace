export const fetcher = async (url: string, options: RequestInit = {}) => {
    const defaultHeaders = {
        'Content-Type': 'application/json',
      };
    
      const headers = options.headers
        ? { ...defaultHeaders, ...options.headers }
        : defaultHeaders;
    
      const res = await fetch(url, {
        ...options,
        headers,
      });
  

    return res.json();
  };