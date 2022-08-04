import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from './auth/[...nextauth]';

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (session) {
    res.status(200).json({
      content:
        'This is protected content. You can access this content because you are signed in.',
    })} else {
      res.send({
        error: 'You must be sign in to view the protected content on this page.',
      })
    }
};
