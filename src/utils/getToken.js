export function getToken() {
  const token = sessionStorage.getItem("token");
  return token;
}
