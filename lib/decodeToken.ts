import jwt from 'jsonwebtoken';

export const decodeToken = (token: string) => {
  try {
    return jwt.decode(token);
  } catch (e) {
    console.error('Invalid token:', e);
    return null;
  }
};  