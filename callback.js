const hash = window.location.hash;
if (hash.includes('access_token')) {
  const token = new URLSearchParams(hash.substring(1)).get('access_token');
  if (token) {
    localStorage.setItem('kick_token', token);
    window.close(); // o redirige a index.html si prefieres
  }
}
