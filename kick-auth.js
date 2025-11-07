// 🔧 MODIFICA ESTA LÍNEA CON TU CLIENT ID DE KICK
const clientId = 'TU_CLIENT_ID';

// 🔧 OPCIONAL: Si distribuyes como ZIP, puedes usar una ruta relativa
const redirectUri = window.location.origin + '/callback.html';

const scope = 'chat:read user:read stream:read';

document.getElementById('connect-btn').addEventListener('click', () => {
  const authUrl = `https://kick.com/oauth2/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scope}`;
  window.open(authUrl, 'kickAuth', 'width=500,height=600');
});
