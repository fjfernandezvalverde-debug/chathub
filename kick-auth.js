// 🔧 MODIFICA ESTA LÍNEA CON TU CLIENT ID DE KICK
const clientId = '01K9EX32GXPW21PPGP4PB07TGW';

// 🔧 OPCIONAL: Si distribuyes como ZIP, puedes usar una ruta relativa
const redirectUri = 'https://fjfernandezvalverde-debug.github.io/chathub//callback.html';

const scope = 'chat:read user:read stream:read';

document.getElementById('connect-btn').addEventListener('click', () => {
  const authUrl = `https://kick.com/oauth2/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scope}`;
  window.open(authUrl, 'kickAuth', 'width=500,height=600');
});
