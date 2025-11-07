export default async function handler(req, res) {
  const auth = req.headers.authorization;

  if (!auth) {
    return res.status(401).json({ error: 'Falta token en la cabecera Authorization' });
  }

  const token = auth.replace('Bearer ', '');

  try {
    const response = await fetch('https://kick.com/api/v1/channels/your_channel_name', {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      throw new Error(`Kick API error: ${response.status}`);
    }

    const data = await response.json();
    return res.status(200).json(data);

  } catch (error) {
    console.error('Error al conectar con Kick:', error);
    return res.status(500).json({ error: error.message });
  }
}
