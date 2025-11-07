const token = window.localStorage.getItem('kick_token');
const statusEl = document.getElementById('status');
const chatEl = document.getElementById('chat');

if (!token) {
  statusEl.textContent = '🔒 No conectado';
  chatEl.innerHTML = '<p>No se encontró token. Por favor, conecta con Kick.</p>';
} else {
  statusEl.textContent = '🟢 Token encontrado. Consultando canal...';

  fetch('https://kick.com/api/v1/channels/me', {
    headers: { Authorization: `Bearer ${token}` }
  })
    .then(res => {
      console.log('Respuesta de Kick:', res);
      if (!res.ok) {
        throw new Error(`Error HTTP: ${res.status}`);
      }
      return res.json();
    })
    .then(data => {
      console.log('Datos del canal:', data);
      if (!data.username) {
        chatEl.innerHTML = '<p⚠️ No se pudo obtener el nombre del canal.</p>';
      } else {
        chatEl.innerHTML = `
          <p><strong>${data.username}</strong> está en vivo: ${data.livestream?.is_live ? '✅ Sí' : '❌ No'}</p>
          <p>ID del canal: ${data.id}</p>
        `;
      }
    })
    .catch(err => {
      statusEl.textContent = '⚠️ Error al conectar con Kick';
      chatEl.innerHTML = `<p>Error: ${err.message}</p>`;
      console.error('Error al obtener datos del canal:', err);
    });
}
