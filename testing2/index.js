import express from "express";
import axios from "axios";
import querystring from "querystring";

const app = express();
const PORT = 3000;
const CLIENT_ID = '1131359495302422598';
const CLIENT_SECRET = 'mkyvveFuGX0xvMT755ouSX5j4o9_aL58';
const REDIRECT_URI = 'http://localhost:3000/auth/callback'; // Must match the redirect URL in Discord Developer Portal

app.get('/auth', (req, res) => {
  // Redirect users to the Discord authorization URL
  const params = querystring.stringify({
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    response_type: 'code',
    scope: 'identify', // Change this scope according to your requirements
  });
  res.redirect(`https://discord.com/api/oauth2/authorize?${params}`);
});

app.get('/auth/callback', async (req, res) => {
  const code = req.query.code;
  if (!code) {
    return res.status(400).send('Error: No authorization code received.');
  }

  try {
    // Exchange the authorization code for an access token
    const params = querystring.stringify({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: REDIRECT_URI,
      scope: 'identify', // Change this scope according to your requirements (must match with the scope used in the /auth route)
    });

    const response = await axios.post('https://discord.com/api/oauth2/token', params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const access_token = response.data.access_token;
    // Now you can use the access_token to access the Discord API on behalf of the user

    // For example, you can fetch user information
    const userResponse = await axios.get('https://discord.com/api/users/@me', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    console.log(userResponse.data);

    // Do something with the userResponse.data (e.g., save user info to your database, authenticate user, etc.)

    // Return a response to the frontend indicating successful authentication
    res.send('Authentication successful!');
  } catch (error) {
    console.error('Error during authentication:', error.message);
    res.status(500).send('Authentication failed. Please try again.');
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
