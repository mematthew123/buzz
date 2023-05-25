import { NextApiRequest, NextApiResponse } from 'next';
const twilio = require('twilio');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { body } = req.body;
    client.messages
      .create({ body, from: '+18775897551', to:'+14064027769' })
      .then((message: any) => {
        res.status(200).json({ sid: message.sid });
      })
      .catch((error: any) => {
        console.error(error);
        res.status(500).json({ error: 'Failed to send SMS' });
      });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

