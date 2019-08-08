const isMockEnabled = process.env.mock === 'true';
export const baseURL = isMockEnabled? 'http://localhost:1080':'https://gateway.marvel.com:443';
