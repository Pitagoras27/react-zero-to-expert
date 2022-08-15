export const setLocalStorage = (token) => {
  localStorage.setItem('token', token);
  localStorage.setItem('token-init-date', Date.now());
}