export default async function handler(req, res) {
  const auth = req.headers.authorization;
  if (!auth) {
    return res.status(401).json({ error: 'Falta token' });
  }

  const token = auth.replace('Bearer ', '');
  const resp = await fetch('https://kick.com/api/v1/channels/your_channel_name', {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await resp.json();

  return res.status(200).json(data);
}
