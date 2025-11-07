const clientId = '01K9EX32GXPW21PPGP4PB07TGW';
const redirectUri = 'https://chathub-sooty.vercel.app/callback.html'; // corregido: sin doble slash
const scope = 'chat:read user:read stream:read';

document.getElementById('connect-btn').addEventListener('click', () => {
  const authUrl = `https://kick.com/oauth2/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}`;
  window.open(authUrl, 'kickAuth', 'width=500,height=600');
});
