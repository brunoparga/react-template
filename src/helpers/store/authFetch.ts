function authFetch(url: RequestInfo, options: RequestInit): Promise<Response> {
  return fetch(url, {
    ...options,

    headers: {
      ...options.headers,
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
}

export { authFetch };
