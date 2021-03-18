import type { NextApiRequest, NextApiResponse } from 'next';

interface User {
  email: string;
  password: string;
}

// the user here is used for testing if the api works
const users: User[] = [{
  email: 'success@diglit.ca',
  password: 'Passw0rd!'
}];

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  if (req.method === 'POST') {

    const { email, password } = req.body;

    try {
      // Find the user in the user list
      const user = users.find(user => user.email === email);
      if (!user) return res.status(401).json({ message: "Invalid email!"});

      // Check if the password is correct
      const isValid = user.password === password;
      if (!isValid) return res.status(401).json({ message: "Invalid password!" });

      // Successfully log in
      res.json({ message: 'You have been succesfully logged in' });
    }
    catch(error) {
      res.status(404).json({message: error.message})
    }
  }
};
export default handler;