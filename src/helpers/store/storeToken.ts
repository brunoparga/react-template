function storeToken(data: { token: string; email: string }): string {
  localStorage.setItem("token", data.token);
  localStorage.setItem("email", data.email);

  return data.email;
}

export { storeToken };
