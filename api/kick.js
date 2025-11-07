export default async function handler(req, res) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const response = await fetch('https://kick.com/api/v1/channels/me', {
      headers: { Authorization: `Bearer ${token}` }
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    console.error('Error en proxy Kick:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}
