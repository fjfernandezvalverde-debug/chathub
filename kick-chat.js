const token = window.localStorage.getItem('kick_token');
const statusEl = document.getElementById('status');
const chatEl = document.getElementById('chat');

if (!token) {
  statusEl.textContent = '🔒 No conectado';
} else {
  statusEl.textContent = '🟢 Conectado a Kick';

  // Obtener información del canal
  fetch('https://kick.com/api/v1/channels/me', {
    headers: { Authorization: `Bearer ${token}` }
  })
    .then(res => res.json())
    .then(data => {
      chatEl.innerHTML = `<strong>${data.username}</strong> está en vivo`;
    })
    .catch(err => {
      statusEl.textContent = '⚠️ Error al conectar con Kick';
      console.error(err);
    });
}
