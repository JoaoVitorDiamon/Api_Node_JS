// biome-ignore lint/style/noVar: <explanation>
var client_id = '9e98697b9bf4450b8db0df626dbf24c0';
// biome-ignore lint/style/noVar: <explanation>
var client_secret = '34379547e0ab45fca72caa8249fa21a0';

export const authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    // biome-ignore lint/style/useTemplate: <explanation>
    'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64'),
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data: new URLSearchParams({
    grant_type: 'client_credentials'
  }),
};



